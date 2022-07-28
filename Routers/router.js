const router=require("express").Router();
const {login, dashboard}=require("../Controllers/controllers");
router.route("/login").post(login);
router.route("/dashboard").get(dashboard);
module.exports=router;