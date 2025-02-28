const express=require("express");
const Login=require("../controllers/Login");
const SignUp=require("../controllers/SignUp");
const Forgot_Password=require("../controllers/Forgot_Password");
const Reset_Password=require("../controllers/Reset_Password");
const Offer_Trip = require("../controllers/Offer_Trip");
const router=express.Router();
router.post("/login",Login);
router.post('/signup',SignUp);
router.post('/forgot_password',Forgot_Password);
router.post("/reset_password/:id/:token",Reset_Password)
router.post("/trip",Offer_Trip)
module.exports=router;