import express = require('express')
import { string } from 'joi'
export interface UserProps {
    username:string,
    phonenumber:number,
    email:string,
    password:string
}

export interface UpdatedRequest extends express.Request{
    User:UserProps,
    Auth:boolean
}