import { asyncHandler } from "../utils/asyncHandler.util.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Credential } from "../models/credentials.models.js";
import { educationalDetails } from "../models/educationalInfo.models.js";

const createEducationalInfo=(asyncHandler(async(req,res)=>{
    const{username,allDetails}=req.body

    const user=Credential.findOne({username})

    const detailsArray = allDetails.map(detail => {
        const { institutionName, educationalQualification, major, percentage } = detail;
        return {
            institutionName,
            educationalQualification,
            major,
            percentage
        };
    });

    const saveDetails=await educationalDetails.create({
        user,
        allDetails:detailsArray
    })

    if(!saveDetails)
        throw new ApiError(500,"Something went wrong while creating the details")

    return res.status(201).json(
        new ApiResponse(200,saveDetails,"Educational Details has been registered Successfully")
    )
}))

export {createEducationalInfo}