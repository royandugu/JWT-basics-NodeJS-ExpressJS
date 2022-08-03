const CustomAPIError=require("./customAPIError");
const {StatusCodes}=require("http-status-codes");
const errorHandler=(err,req,res,next)=>{
    if(err instanceof CustomAPIError) res.status(err.statusCode).json({message:err.message});
    else res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Unknow error occured"});
}
module.exports=errorHandler;