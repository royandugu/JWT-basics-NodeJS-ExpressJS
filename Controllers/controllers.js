require("dotenv").config();

const jwt=require("jsonwebtoken");
const CustomAPIError=require("../Error_Handlers/customAPIError");

const login=(req,res)=>{
    //Login validation
    const {userName,password}=req.body;
    if(!userName || !password) throw new CustomAPIError("Please enter your username and password",401);
    //Token generation
    const id=1;//Dummy ID
    const token=jwt.sign({id,userName},process.env.JWT_SECRET,{expiresIn:"30d"});
    res.status(200).json({message:"Login sucesfull",token:token});
}
const dashboard=(req,res)=>{
    const fullToken=req.headers.authorization;
    if(!fullToken || !fullToken.startsWith("Bearer ")) throw new CustomAPIError("Your token doesnot exist",401);
    //Token checking
    const actualToken=fullToken.split(" ")[1];
    const result=jwt.verify(actualToken,process.env.JWT_SECRET);
    if(result) res.status(200).json({message:`Welcome to dashboard ${result.userName}`,token:result});
}
module.exports={login,dashboard};