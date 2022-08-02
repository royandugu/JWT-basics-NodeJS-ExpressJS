const jwt=require("jsonwebtoken");
const CustomAPIError=require("../Error_Handlers/customAPIError");

const authorize=(req,res,next)=>{
    const fullToken=req.headers.authorization;
    if(!fullToken || !fullToken.startsWith("Bearer ")) throw new CustomAPIError("Your token doesnot exist",401);
    //Token checking
    const actualToken=fullToken.split(" ")[1];
    try{
        const result=jwt.verify(actualToken,process.env.JWT_SECRET);
        const {id, userName}=result;
        req.user={id,userName};
        next();
    }
    catch(err){
        throw new CustomAPIError("The token you provided doesn't match",404);
    }
}

module.exports=authorize;