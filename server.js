console.log("Hello Every one")
const express=require("express")
const app=express()

//Test API
app.get("/test",(req,res)=>{   //routing part
    res.send("Hello Everyone,This is test API")
});
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});