import userModel from '../models/user.model.js'

export const createUser = async ({email, password})=>{
  if(!email || !password){
    throw new error("Email or Password does not exist")
  }

  const hashedPassword = await userModel.hashPassword(password)
  
  const user = await userModel.create({
    email,
    password: hashedPassword
  })
  return user
}