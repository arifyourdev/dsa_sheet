import bcrypt from "bcrypt"
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const addUser = async(req,res) =>{
    try{
        const {name, email,password} = req.body;
        const hashedPassword  = await bcrypt.hash(password,10)
        const user =  new userModel({name,email,password:hashedPassword});
           await user.save();
           res.status(200).send({status:true,msg:'User Register Successfully'})
       }catch(e){
           res.status(500).send({status:false,error:'Error in Code'})
       }
}

 export const loginUser = async(req,res) =>{
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email });
      if (!user) return res.status(400).send({status:false, message: 'user not found' });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send({status:false, message: 'Invalid credentials' });
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(200).send({
        status:true, 
        message:"User Login",
        user:user,token });
    } catch (err) {
      res.status(500).send('Server error');
    }
 }