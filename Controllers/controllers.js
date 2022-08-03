require("dotenv").config();

const jwt=require("jsonwebtoken");
const {BadRequestError}=require("../Error_Handlers/handlerCollectives");
const {StatusCodes} =require("http-status-codes");

const login=(req,res)=>{
    //Login validation
    const {userName,password}=req.body;
    if(!userName || !password) throw new BadRequestError("Please enter your username and password");
    //Token generation
    const id=1;//Dummy ID
    const token=jwt.sign({id,userName},process.env.JWT_SECRET,{expiresIn:"30d"});
    res.status(StatusCodes.OK).json({message:"Login sucesfull",token:token});
}
const dashboard=(req,res)=>{
    const userName=req.user.userName;
    res.status(StatusCodes.OK).json({message:`Welcome to dashboard ${userName}`});
}
module.exports={login,dashboard};