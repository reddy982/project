const coursemodel=require("../model/coursemodel.js");
let createCourse=async(req,res)=>{
    try{
        let data=req.body
        let courseregistred=await coursemodel.create(data)
        return res.status(201).send({
            status :true,
            msg :"course registerd successfully",
            data:courseregistred,

        });
        }catch (error){
        return res.status(500).send({
            status:false,
            msg:"Internal server  Error"

        });

    }


}
module.exports={createCourse}