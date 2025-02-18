//We have not server(port) in app.js file because their we are using express, since we will use Socket.io it will created easily with hhtp server thats why we are making server here

import dotenv from 'dotenv'
dotenv.config()
//dotenv.config() is a function from the dotenv package that loads environment variables from a .env file into process.env in a Node.js application.

import http from 'http'
import app from './app.js'

const port = process.env.PORT || 3000
// If process.env.PORT is undefined (e.g., running locally without .env), it defaults to 3000.

const server = http.createServer(app)
//we pass app which allow express to hadle all request

server.listen(port,()=>{
  console.log(`Server is running on port: ${port}`)
})