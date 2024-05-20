import { asyncHandler } from "../utils/asyncHandler.util.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Credential } from "../models/credentials.models.js";
import { experienceDetails } from "../models/experienceInfo.models.js";

const saveExperienceInfo=(asyncHandler(async(req,res)=>{
    const{username,allDetails}=req.body

    const user=Credential.findOne({username})

    const detailsArray = allDetails.map(detail => {
        const { jobTitle, employerName, experienceInMonths, currentCTC } = detail;
        return {
            jobTitle, employerName, experienceInMonths, currentCTC
        };
    });
    if(!detailsArray){
        throw new ApiError(404,"no details found")
    }
    const saveDetails=await experienceDetails.create({
        user,
        allDetails:detailsArray
    })

    if(!saveDetails)
        throw new ApiError(500,"Something went wrong while creating the details")

    return res.status(201).json(
        new ApiResponse(200,saveDetails,"Experience Details has been registered Successfully")
    )
}))

export {saveExperienceInfo}