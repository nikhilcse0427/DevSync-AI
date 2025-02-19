import express from 'express'
import morgan from 'morgan'
import connectDB from './db/db.js'
const app = express()

connectDB()

//Middlewares
app.use(express.json())
// It extracts JSON data from the request body.
// It converts the JSON data into a JavaScript object.
app.use(morgan('dev'))  //give detail
app.use(express.urlencoded({extended:true}))
// express.urlencoded() is a built-in middleware in Express.js that parses incoming URL-encoded form data and makes it available in req.body.
//extended: true → Parses nested objects and arrays

app.get('/',(req,res)=>{
  res.send("Hello World")
})

export default app