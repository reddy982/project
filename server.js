//console.log("Hello Every one")
const express=require("express")
const mongoose=require("mongoose")
const app=express()
//Db connection
mongoose.connect(
    "mongodb+srv://Harish:harish%402003@cluster0.10putry.mongodb.net/"
).then(()=>{
    console.log("Database is connected successfully")
})
.catch((err)=>{
    console.log(err,"something went wrong");
});


//Test API
app.get("/test",(req,res)=>{
    res.send("Hello Everyone,This is test API")
});
app.listen(6000,()=>{
    console.log("Server is running on port 5000");
});