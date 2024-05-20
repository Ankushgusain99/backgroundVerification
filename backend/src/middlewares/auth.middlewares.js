import { Credential } from "../models/credentials.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import jwt from 'jsonwebtoken'

export const verifyJWT=asyncHandler(async(req,res,next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

        console.log("Cookies:", req.cookies);
        console.log("Authorization Header:", req.header("Authorization"));
        console.log("Extracted Token:", token);

        if(!token)
            throw new ApiError(401,"Unauthorize request ")
    
        const decodeToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

        const user=await Credential.findById(decodeToken?._id).select("-password -refreshToken")

        if(!user)
            throw new ApiError(401,"Invalid Access Token")
    
        req.user=user
        next()
    } catch (error) {
        throw new ApiError(401,"Invalid Access Token")
    }
})

