/* eslint-disable @typescript-eslint/no-unused-vars */
import {  NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'



const notFound:any = (req:Request, res:Response, next:NextFunction) => {

  return res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message:"API Not Found!",
    // error:err
  })
}

export default notFound