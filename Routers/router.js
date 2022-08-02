const router=require("express").Router();
const {login, dashboard}=require("../Controllers/controllers");
const authorize=require("../Middlewares/authorization");
router.route("/login").post(login);
router.route("/dashboard").get(authorize,dashboard);
module.exports=router;