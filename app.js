require("express-async-errors");
require("dotenv").config();


const express=require("express");
const app=express();

const router=require("./Routers/router");
const errorHandler=require("./Error_Handlers/errorHandler");


//Middlewares
app.use(express.json());
app.use("/api/v1",router);
app.use((req,res)=>res.status(404).json({message:"Routing error, The following route does not exist"}));
app.use(errorHandler);


const port=process.env.API_PORT||3000;
const start=()=>{
    try{
        app.listen(port,()=>console.log(`API is listening to port ${port}`));
    }
    catch(err){
        console.log("Something is wrong");
    }
}
start();