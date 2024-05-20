import { asyncHandler } from "../utils/asyncHandler.util.js";
import { ApiError } from "../utils/ApiError.js";
import { Credential } from "../models/credentials.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const generateAccessandRefreshToken=async(userId)=>{
    try {
        const cred=await Credential.findById(userId)
        
        const accessToken=cred.generateAccessToken()
        const refreshToken=cred.generateRefreshToken()
        cred.refreshToken=refreshToken
        await cred.save({validateBeforeSave:false})
        //console.log("cookies",req.accessToken)
        //console.log("cookies",req.refreshToken)
        return ({accessToken,refreshToken})
    } catch (error) {
        throw new ApiError(500,"Something went wrong while generating access and refresh token")
    }
}

const registerUser=asyncHandler(async (req,res)=>{
    const {username,email,password}=req.body

    if (!username || username.trim() === '') {
        throw new ApiError(400, "Username is required");
    }

    if (!email || email.trim() === '') {
        throw new ApiError(400, "Email is required");
    }

    if (!password) {
        throw new ApiError(400, "Password is required");
    }

    const existedUser=await Credential.findOne({
        $or:[{username},{email}]
    })

    if(existedUser){
        throw new ApiError(409,"Email or Username already existed")
    }

    const user= await Credential.create({
        username: username.toLowerCase(),
        email,
        password,
    })

    const createdUser=await Credential.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser)
        throw new ApiError(500,"Something went wrong while creating the user")

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User registered Successfully")
    )

})

const loginUser=asyncHandler(async(req,res)=>{
    const {username,password}=req.body

    if(!username)
        throw new ApiError(400,"Username is required")

    const user=await Credential.findOne({username})

    if(!user)
            throw new ApiError(404,"Username does not exist")
    
    const isPasswordValid=await user.isPasswordCorrect(password)

    if(!isPasswordValid)
        throw new ApiError(401,"Invalid User Credentials")
    const {accessToken,refreshToken}=await generateAccessandRefreshToken(user._id)

    const loggedInUser=await Credential.findById(user._id).select("-password -refreshToken")

    const options={
        httpOnly:true,
        secure:true,
    }
     
    res.status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(new ApiResponse(
        200,
        {
            user: loggedInUser,accessToken,refreshToken
        },
        "User Logged In Successfully"
    ))

})

const logoutUser=asyncHandler(async(req,res)=>{
    Credential.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken:undefined
            }
        },
        {
            new:true
        }
    )

    const options={
        httpOnly:true,
        secure:true,
    }

    return res.status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(201,
        {},
        "SUCCESSFULLY LOGGED OUT"
    ))
})


export {registerUser,loginUser,logoutUser}