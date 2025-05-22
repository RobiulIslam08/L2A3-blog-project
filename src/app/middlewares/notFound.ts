import { NextFunction, Request, Response } from "express";

const notFound = ( req:Request, res:Response, next:NextFunction)=>{
	
	const message =  'something went wrong bro , not found '
	 res.status(404).json({
	  success:false,
	  message,
	  error: ''
	})
  }
export default notFound