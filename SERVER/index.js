import express from "express";
import { Router } from "express"
const app=express();

app.get('/',(req,res)=>{
    res.send('hello world /javascript');
})

const port=process.env.PORT||8000;
app.listen(port, ()=>console.log(`The server is listening on port ${port}`));