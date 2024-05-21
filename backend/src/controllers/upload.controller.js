import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { uploadDetails } from "../models/uploadFiles.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const uploadCreatedFiles=(asyncHandler(async(req,res)=>{
    const identityPath=req.files?.identity[0]?.path
    if(!identityPath)
        throw ApiError(400,'Identity file is required')

    const educationalPath=req.files?.educational[0]?.path
    if(!educationalPath)
        throw ApiError(400,'Educational files are required')

    const experiencePath=req.files?.experience[0]?.path
    if(!experiencePath)
        throw ApiError(400,'Experience files are required')

    const identity = await uploadOnCloudinary(identityPath)
    const educational = await uploadOnCloudinary(educationalPath)
    const experience = await uploadOnCloudinary(experiencePath)

    if (!identity) {
        throw new ApiError(400, "identity is required")
    }
    if (!educational) {
        throw new ApiError(400, "educational file is required")
    }
    if (!experience) {
        throw new ApiError(400, "educational file is required")
    }
    const user = await uploadDetails.create({
        identity,
        educational,
        experience
    })
    return res.status(201).json(
        new ApiResponse(200, user, "Files uploaded Successfully")
    )
}))

export {uploadCreatedFiles}