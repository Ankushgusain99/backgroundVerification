import mongoose,{Schema} from "mongoose";

const detailsSchema=new Schema({
    institutionName:{
        type:String,
        required:true
    },
    educationalQualification:{
        type:String,
        required:true
    },
    major:{
        type:String,
        required:true
    },
    percentage:{
        type:mongoose.Schema.Types.Decimal128,
        required:true
    },
})

const educationalDetailsSchema= new Schema({
    username:{
        type:Schema.Types.ObjectId,
        ref:'Credentials'
    },
    allDetails:[detailsSchema]
},{timestamps:true})

export const educationalDetails=mongoose.model("educationalDetails",educationalDetailsSchema)