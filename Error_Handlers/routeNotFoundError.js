const routeNotFoundError=(req,res)=>{
    res.status(404).json({message:"Route not avaliable"});
}
module.exports=routeNotFoundError;