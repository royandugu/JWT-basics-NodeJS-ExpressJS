const jwt=require("jsonwebtoken");
const {BadRequestError,UnauthenticatedError}=require("../Error_Handlers/handlerCollectives");

const authorize=(req,res,next)=>{
    const fullToken=req.headers.authorization;
    if(!fullToken || !fullToken.startsWith("Bearer ")) throw new BadRequestError("Your token doesnot exist");
    //Token checking
    const actualToken=fullToken.split(" ")[1];
    try{
        const result=jwt.verify(actualToken,process.env.JWT_SECRET);
        const {id, userName}=result;
        req.user={id,userName};
        next();
    }
    catch(err){
        throw new UnauthenticatedError("The token you provided doesn't match");
    }
}

module.exports=authorize;