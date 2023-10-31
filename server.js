console.log("Hello Every one")
const express=require("express")
const mongoose=require("mongoose")
const routes=require("./routes/route");
const app=express()
app.use(express.json());
app.use("/",routes);
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
app.get("/test",(req,res)=>{   //routing part
    res.send("Hello Everyone,This is test API")
});
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});