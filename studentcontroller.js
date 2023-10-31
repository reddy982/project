const studentmodel=require("../model/studentmodel.js");
let createStudent=async(req,res)=>{
    try{
        let data=req.body;
        let registerStudent=await studentmodel.create(data)
        return res.status(201).send({
            status :true,
            msg :"student data registerd successfully",
            data:registerStudent,

        });
        }catch (error){
        return res.status(500).send({
            status:false,
            msg:"Internal server  Error"

        });

    }


}
module.exports={createStudent}
