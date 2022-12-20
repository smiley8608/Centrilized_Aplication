

import { urlencoded } from 'body-parser'
import bodyParser = require('body-parser')
import express =require('express')
import mongoose from 'mongoose'


const app=express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/account',(err)=>{
    if(err){
        return console.log(err)
    }else{
        console.log('DataBase Connected Successfully ! ')
        app.listen(3002,()=>{
            console.log('Server Connected to the post')
        })
    }
})