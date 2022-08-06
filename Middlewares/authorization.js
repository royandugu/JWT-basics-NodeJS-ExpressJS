require("dotenv").config();
const jwt=require("jsonwebtoken");

const {BadRequestError,UnauthenticatedError}=require("../Error_Handlers/handlerCollectives");

const authorize=(req,res,next)=>{
    const fullToken=req.headers.authorization;
    
    if(!fullToken) throw new BadRequestError("Token not provided");
    else if(!fullToken.startsWith("Bearer ")) throw new BadRequestError("Token out of format");

    const actualToken=fullToken.split(" ")[1];
    console.log(actualToken);
    try{
        const result=jwt.verify(actualToken,process.env.JWT_SECRET);
        const {id,userName}=result;
        req.user={id,userName};
        next();
    }
    catch(err){
        throw new UnauthenticatedError("Your token doesnot match");
    }
}

module.exports=authorize;