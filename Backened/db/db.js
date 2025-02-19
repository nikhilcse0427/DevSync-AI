import mongoose from 'mongoose'

const connectDB = async ()=>{
  try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Mongodb connected successfully!")
  }catch(error){
    console.log("Error: ",error)
  }
}

export default connectDB