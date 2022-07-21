const CustomAPIError=require("./customError");
const errorHandler=(err,req,res,next)=>{
    if(err instanceof CustomAPIError) {
       return res.status(err.statusCode).json({message:err.message});
    }
    else return res.status(400).json({message:"Something went wrong, please try again"});
}
module.exports=errorHandler;