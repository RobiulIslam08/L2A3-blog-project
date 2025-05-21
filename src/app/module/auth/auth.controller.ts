

import status from 'http-status'
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendRespons';
import { authService } from './auth.service';
const register = catchAsync(async(req, res) => {
	const payload = req.body
	// console.log(payload, 'aslo nah kno')
	const result = await authService.register(payload)
	
	  sendResponse(res, {
		success:true,
		message: 'User is created succesfully',
    statusCode: status.OK,

    data: {
		_id:result?._id,
		name:result?.name,
		email:result?.email

	},
  });
}) 
const login = catchAsync(async(req,res) =>{

})

export const authController = {
	register,
	login
}