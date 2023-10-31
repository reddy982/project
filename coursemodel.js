const mongoose=require("mongoose")
const courseSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Duration:{
        type:String,
        required:true,
        unique:true,
    },
    Eligibility:{
        type:Number,
        required:true,
        Unique:true,

    },
    Fee:{
        type:Number,
        required:true,
        unique:true,
    },
    Mobile:{
        type:Number,
        required:true,
        unique:true,

    },
    
});
module.exports=new mongoose.model("course",courseSchema)