import mongoose,{Schema} from "mongoose";

const experienceSchema=new Schema({
    jobTitle:{
        type:String,
        required:true
    },
    employerName:{
        type:String,
        required:true
    },
    experienceInMonths:{
        type:Number,
        required:true
    },
    currentCTC:{
        type:Number,
        required:true
    },
})

const experienceDetailsSchema= new Schema({
    username:{
        type:Schema.Types.ObjectId,
        ref:'Credentials'
    },
    allDetails:[experienceSchema]
},{timestamps:true})

export const experienceDetails=mongoose.model("experienceDetails",experienceDetailsSchema)