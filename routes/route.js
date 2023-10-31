const express=require("express");
const router=express.Router();
const coursecontroller=require("../controllers/coursecontroller");
router.post("/course",coursecontroller.createCourse);
module.exports=router;