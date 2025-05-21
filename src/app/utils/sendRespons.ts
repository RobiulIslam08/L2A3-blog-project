import { Response } from "express";

type TSuccessResponse<T> = {
	success:boolean;
  status?: boolean;
  statusCode: number;
  message: string;
  token?: string;
  data: T | T[] | null;
};
 const sendResponse = <T>(res:Response, data:TSuccessResponse<T>) => {
	 res.status(data.statusCode).json({
		success:true,
		message:data.message,
		statusCode:data.statusCode,
		status:true,
		token:data.token,
		data:data.data
	 })
 }
 export default sendResponse

