import userModel from "../models/user.model.js";
import userService from "../services/user.service.js"
import { validationResult, ValidatorsImpl } from "express-validator"

export const createUserController = async (req, res)=>{
  const errors = validationResult(req)
  if(!errors.isEmpty){
    return res.status(400).json({Errors: errors.array()})
  }

  try{
    const user = await await userService.createUser(req.body)
    const token = user.generateJwt()
    res.status(200).send(user)

  }catch(error){
    res.status(400).send(error.message)
  }
}