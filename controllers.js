require("dotenv").config();
const CustomAPIError=require("./Error_handlers/customError");
const jwt=require("jsonwebtoken"); 
const login=(req,res)=>{
    const {userName,password}=req.body;

    if(!userName || !password) throw new CustomAPIError("Please enter all details",400);
    //For demo
    const id=1;
    const token=jwt.sign({id,userName},process.env.JWT_SECRET,{expiresIn:"30d"});
    res.status(200).json({msg:"User created",token});
}
const dashBoard=(req,res)=>{
    const reqToken=req.headers.authorization;
    if(!reqToken || !reqToken.startsWith("Bearer ")) throw new CustomAPIError("Authorization Error",401);

    const token=reqToken.split(" ")[1];
    console.log(token);

    const randomNumber=Math.floor(Math.random()*100);
    res.status(200).json({msg:"Hello user",secret:`Your lucky number is ${randomNumber}`});
}
module.exports={login,dashBoard};