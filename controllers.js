const login=(req,res)=>{
    res.send("Dummy LOGIN");
}
const dashBoard=(req,res)=>{
    const randomNumber=Math.floor(Math.random()*100);
    res.status(200).json({msg:"Hello user",secret:`Your lucky number is ${randomNumber}`});
}
module.exports={login,dashBoard};