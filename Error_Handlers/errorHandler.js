const CustomAPIError=require("./customAPIError");
const errorHandler=(err,req,res,next)=>{
    if(err instanceof CustomAPIError) res.status(err.statusCode).json({message:err.message});
    else res.status(404).json({message:"Unknow error occured"});
}
module.exports=errorHandler;