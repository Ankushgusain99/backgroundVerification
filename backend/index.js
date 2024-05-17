import dotenv from 'dotenv'
import express from "express";
import { app } from './app.js';
import connectDb from './src/db/connection.js';
dotenv.config({
  path:'./.env'
})
const port = process.env.PORT || 4000;



connectDb()
.then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`)
  })
})
.catch((error)=> {
  console.log("MONGODB connection failed !!!",error)
})