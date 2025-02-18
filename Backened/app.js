import express from 'express'
const app = express()

//Middlewares
app.use(express.json())
// It extracts JSON data from the request body.
// It converts the JSON data into a JavaScript object.
app.use(express.urlencoded({extended:true}))
// express.urlencoded() is a built-in middleware in Express.js that parses incoming URL-encoded form data and makes it available in req.body.
//extended: true → Parses nested objects and arrays

app.get('/',(req,res)=>{
  res.send("Hello World")
})

export default app