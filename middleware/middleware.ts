import Jwt from 'jsonwebtoken'
import express = require('express')
import dotenv = require('dotenv')
import bcrypt from 'bcrypt'
import UserModel from '../models/userModel'
import { UpdatedRequest, UserProps } from '../types'
dotenv.config()
export const middleWare = async(req: UpdatedRequest, res: express.Response, next: express.NextFunction) => {

    const envsecurt = process.env.User_Securt
    const Token = req.headers['User_Token'] as string

    if (envsecurt && Token) {
        try {
            const varify = Jwt.verify(Token, envsecurt)
            const decodedToken:any = Jwt.decode(Token)

            if (req.path === '/signup' || req.path === '/signin') {
                return res.json({ message: 'entry Resticted' })
            } else {
                if (req.path !== '/signin' && req.path !== '/signup') {
                   const User= await UserModel.findById(decodedToken._id)
                   if(User){
                        req.User=User as unknown as UserProps
                        next()

                   }
                }
            }

        } catch (error) {
            if (req.path === '/signup' || req.path === '/login') {
                next()
            } else {
                return res.json({ message: 'your account is not valid',User:null,Auth:false })
            }
        }
    }else{
        if (req.path === '/signup' || req.path === '/login' || req.path === '/forgetpassword' || req.path === '/resetpassword/:token' ) {
            console.log('signup')
            next()
        } else {
            return res.json({ User: null, Auth: false,message:'err' })
        }
    }
}

