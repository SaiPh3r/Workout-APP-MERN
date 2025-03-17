const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    } 
})

//static signup method
userSchema.statics.signup = async function(email,password){
    //validation
    if(!email || !password){
        throw new Error('Email and password are required')
    }
    if(!validator.isEmail(email)){
        throw new Error('Email is invalid')
    }
    if(!validator.isStrongPassword(password)){
        throw new Error('Password is not strong enough')
    }


    const exists = await this.findOne({email})

    if(exists){
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = this.create({email,password:hash})
    return user


}


module.exports = mongoose.model('User',userSchema)