const CustomAPIError=require("./customError");
const errorHandler=(err,req,res,next)=>{
    if(err instanceof CustomAPIError) {
       return res.status(err.statusCode).json({message:err.message});
    }
    else {
        return res.status(404).json({message:"An unknown error just occured"});
    }
}
module.exports=errorHandler;