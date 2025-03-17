const User = require("../models/userModel")
const jwt = require('jsonwebtoken')

const createToken = (_id)=>{
    return jwt.sign({_id},process.env.JWT_SECRET,{expiresIn:'3d'})
}

//login User
const loginUser = async(req,res)=>{
    res.send("user logged in")
}
//signup user
const signupUser  = async(req,res)=>{
    const {email,password} = req.body
    try{
        const user = await User.signup(email,password)
        const token = createToken(user._id)
        res.status(201).json({ message: "User created", token,user });

    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {loginUser,signupUser}