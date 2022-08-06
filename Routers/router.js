const {login,dashBoard}=require("../Controllers/controllers");
const authorize=require("../Middlewares/authorization");

const express=require("express");
const router=express.Router();

router.route("/login").post(login);
router.route("/dashBoard").get(authorize,dashBoard);

module.exports=router;
