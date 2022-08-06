require("dotenv").config();
require("express-async-errors");

const express=require("express");
const app=express();


const router=require("./Routers/router");
const routeNotFoundError=require("./Error_Handlers/routeNotFoundError"); 
const errorHandler=require("./Error_Handlers/errorHandler");


//Middlewares
app.use(express.json());
app.use("/api/v1",router);
app.use(routeNotFoundError);
app.use(errorHandler);


const port=process.env.PORT||5000;
const start=()=>{
    try{
        app.listen(port,()=>console.log(`The API is listening to port ${port}`));
    }
    catch(err){
        console.log(err);
    }
}
start();

