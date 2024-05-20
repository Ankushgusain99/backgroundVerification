import mongoose,{Schema} from "mongoose";

const personalInformationSchema=new Schema({
    username:{
        type:Schema.Types.ObjectId,
        ref:'Credentials'
    },
    fullName:{
        type:String,
        required:true
    },
    motherName:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    identity:{
        type:String,
        enum:['adhar','pan','passport'],
        required:true
    },
    identificationNumber:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
},{timestamps:true})

export const personalInfo=mongoose.model("personalInfo",personalInformationSchema);