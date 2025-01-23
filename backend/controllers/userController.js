import userModel from "../models/userModel.js"
import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}
//route for log in user
const loginUser = async(req,res) =>{
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})
        if(!user){
           return res.json({success:false, message: "User does not exists"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(isMatch){
            const token = createToken(user._id)
            res.json({success:true, token, message: "User log in successfull"})
        }
        else{
            res.json({success:false, message: "invalid credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
        
    }
}
//route registering user
const  registerUser = async(req,res) =>{
  try {
    const {name, email, password} = req.body
    //checking user existence
    const exist = await userModel.findOne({email})
    if(exist){
       return res.json({success: false, message: "user already exists"})
    }
    //validating email and strong password
    if(!validator.isEmail(email)){
        return res.json({success: false, message: "enter a valid email"})
    }
    if(password.length < 6){
        return res.json({success: false, message: "enter a strong password"})
    }
    //hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new userModel({
        name, 
        email,
        password: hashedPassword
    })

    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({success: true, token})
  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message})
    
  }
}


//route for admin login
const adminLogin = async(req,res) =>{

}
export {loginUser, registerUser, adminLogin}