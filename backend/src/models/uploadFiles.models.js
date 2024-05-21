import mongoose,{Schema} from "mongoose";

const uploadDetailsSchema=new Schema({
    identity:{
        type:String,
        required:true
    },
    educational:{
        type:Array,
        required:true
    },
    experience:{
        type:Array,
        required:true
    }
},{timestamps:true})

export const uploadDetails=mongoose.model("uploadDetails",uploadDetailsSchema);