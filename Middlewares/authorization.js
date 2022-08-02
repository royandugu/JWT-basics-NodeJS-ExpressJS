const authorize=(req,res,next)=>{
    console.log("Middleware called");
    next();
}

module.exports=authorize;