import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { Credential } from "../models/credentials.models.js";
import { personalInfo } from "../models/personalInfo.models.js";

const registerpersonalInfo=(asyncHandler(async(req,res)=>{
    const {username,fullName,motherName,fatherName,contactNumber,gender,dob,identity,identificationNumber,address}=req.body

    const user=await Credential.findOne({username})
    if (
        [fullName,motherName,fatherName,contactNumber,gender,dob,identity,identificationNumber,address].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }
    const saveInfo= await personalInfo.create({
        user,
        fullName,
        motherName,
        fatherName,
        contactNumber,
        gender,
        dob,
        identity,
        identificationNumber,
        address
    })

    //const createdPersonalInfo=await saveInfo.findById(saveInfo._id)

    if(!saveInfo)
        throw new ApiError(500,"Something went wrong while creating the user")

    return res.status(201).json(
        new ApiResponse(200,saveInfo,"Personal Information has been registered Successfully")
    )

}))

export {registerpersonalInfo}