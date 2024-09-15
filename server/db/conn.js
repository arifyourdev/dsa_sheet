import mongoose from "mongoose";

const connDB = async () =>{
    try{
      const conn = await mongoose.connect(`mongodb+srv://dsa_test:dsa_test@cluster0.58sqx.mongodb.net/dsa_test`)
      console.log(`Connected to Mongo Database ${conn}`)
    }catch(e){
        console.log(e)
    }
} 

export default connDB