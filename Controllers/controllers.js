require("dotenv").config();

const {BadRequestError}=require("../Error_Handlers/handlerCollectives");
const {StatusCodes}=require("http-status-codes");

const jwt=require("jsonwebtoken");

const login=(req,res)=>{
    const {userName,password}=req.body;
    if(!userName || !password) throw new BadRequestError("User name or password not provided");
    //Dummy id {later to be taken from the database}
    const id=1;
    const token=jwt.sign({id,userName},process.env.JWT_SECRET,{expiresIn:"2d"});
    res.status(StatusCodes.OK).json({message:"Login succesfull",token:token});
}
const dashBoard=(req,res)=>{
    const {id,userName}=req.user;
    res.status(StatusCodes.OK).json({message:`Welcome to dashboard ${userName}`});
}

module.exports={login,dashBoard};