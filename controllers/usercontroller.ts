import express = require('express')
import Joi = require('joi')
import UserModel from '../models/userModel'
import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { UpdatedRequest } from '../types'

dotenv.config()

const Schema = Joi.object({
    username: Joi.string().trim().alphanum().max(30).required(),
    phonenumber: Joi.number().max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{7,30}$"')).required()
})
export const userSignup = async (req: UpdatedRequest, res: express.Response) => {

    const { username, phonenumber, email, password, conformpassword } = req.body

    if (password === conformpassword) {
        try {
            const userValidate = await Schema.validateAsync({ username, phonenumber, email, password })
            const emailArr = await UserModel.find({ email: email })
            if (emailArr.length >= 1) {
                return res.json({ message: 'Email Already exists in the server' })
            } else {
                const hashedpassword =await bcrypt.hash(password, 8)
                const userResult =await UserModel.create({ username, email, phonenumber, password: hashedpassword })
                if (!userResult) {
                    return res.json({ message: 'SOmeThing wents wrong try again later' })
                } else {
                    if (process.env.User_Securt) {
                        const token =Jwt.sign({_id:userResult._id}, process.env.User_Securt)
                        return res.json({ message: 'Account Created successfully', tkn: token, Auth: true, User: userResult })
                    }
                }
            }
        } catch (error) {
            return res.json({message:error})

        }
    } else {
        return res.json({message:'please check the password'})

    }
}
export const loginSchema=Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{7,30}$"')).required()
})
const UserLoginIn=async(req:UpdatedRequest,res:express.Response)=>{
    const {email,password}=req.body
    try {
        await loginSchema.validateAsync({email,password})
        const userMail=await UserModel.findOne({email:email})
        if(!userMail){
            return res.json({message:'Please check you INputs'})
        }else{
           const compaPassword= await bcrypt.compare(password,userMail.password as string)
           if(!compaPassword){
            return res.json({message:'please check the inputs'})
           }else{
            if(process.env.User_Securt){
               const Token= Jwt.sign({_id:userMail._id},process.env.User_Token as string)
               return res.json({message:'Login Successfully !',Auth:true,users:userMail,tkn:Token})
            }
           }
        }
    } catch (error) {
        
    }
}