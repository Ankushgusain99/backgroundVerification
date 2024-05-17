import { asyncHandler } from "../utils/asyncHandler.util.js";
import { ApiError } from "../utils/ApiError.js";
import { Credential } from "../models/credentials.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
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

export {registerUser}