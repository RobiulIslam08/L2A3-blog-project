import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendRespons"

import { userService } from "./user.service"
import status from 'http-status'
const createUser = catchAsync(async(req, res) => {
	const payload = req.body
	// console.log(payload, 'aslo nah kno')
	const result = await userService.createUser(payload)
	
	  sendResponse(res, {
		success: true, 
    statusCode: status.OK,

    message: 'User is created succesfully',
    data: result,
  });
}) 

export const userController = {
	createUser
}