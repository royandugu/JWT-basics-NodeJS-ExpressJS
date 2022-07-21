const CustomAPIError=require("./Error_handlers/customError");
const login=(req,res)=>{
    const {userName,password}=req.body;
    console.log(userName);
    if(!userName || !password){
        throw new CustomAPIError("Please enter username and password",400);
    }
    res.send("Dummy LOGIN");
}
const dashBoard=(req,res)=>{
    const randomNumber=Math.floor(Math.random()*100);
    res.status(200).json({msg:"Hello user",secret:`Your lucky number is ${randomNumber}`});
}
module.exports={login,dashBoard};