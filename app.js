require("express-async-errors");

const express=require("express");
const app=express();

const errorHandler=require("./Error_handlers/error_handler");
const router=require("./route");

//Middlewares
app.use(express.json());
app.use("/api/v1",router);
app.use(express.static("./public"));
app.use((req,res)=>res.status(404).send("Route not found"));
app.use(errorHandler);


//Start method
const start=()=>{
    app.listen(5000,()=>console.log("API is listening to port 5000"));
}
start();