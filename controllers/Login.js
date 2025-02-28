const User=require("../models/User")
const bcrypt=require("bcryptjs")
const Login=async (req,res) => {
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if (!user){
        return res.status(400).json({error:"User not found"});
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if (!isMatch){
        return res.status(400).json({error:"Password Incorrect"})
    }
    return res.status(200).json({message:"Login Successful",user})
}
module.exports=Login

