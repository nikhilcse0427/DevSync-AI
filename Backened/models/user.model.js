import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
  email:{
    type:String,
    unique:true,
    lowercase:true,
    minLength:[8, "Email must contain atleast 8 characters"],
    maxLength:[25, "Email contain atmost 25 characters"],
    trim:true,//The trim function is often used in programming to remove unwanted spaces or specific characters from the beginning and end of a string
    required:true
  },
  password:{
    type:String,
    minLength: [4, "Password must contain atmost 4 characters"],
    maxLength: [18, "Password contains atmost 18 characters"],
    select:false,
    required:true
  }
})

userSchema.statics.hashPassword = async function(password){
  return await bcrypt.hash(password, 10);
}
//A static method is a method that is defined on the model (or class) itself, rather than on instances (objects) of the model.

userSchema.methods.isValidPassword = async function(password){
  return await bcrypt.compare(password, this.password)
}
//An instance method is a method that is defined on an instance (object) of the model.

userSchema.methods.genereateJwt = function(){
  return jwt.sign({email: this.email}, process.env.JWT_SECRET)
}
//The jwt.sign() function is used to create (or sign) a JWT. The sign() function takes two arguments:

// Payload: This is the data that you want to include in the JWT. In this case, it contains only the email of the user ({ email: this.email }).
// Secret: This is a secret key used to sign the token. It ensures that the JWT is authentic and cannot be tampered with. The secret is stored in an environment variable (process.env.JWT_SECRET).

const User = mongoose.models("User", userSchema)
export default User