import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendRespons"

import { userService } from "./user.service"
import status from 'http-status'
const createUser = catchAsync(async(req, res) => {
	const payload = req.body
	const result =  userService.createUser(payload)
	  sendResponse(res, {
    statusCode: status.OK,

    message: 'Faculty is created succesfully',
    data: result,
  });
}) 

export const userController = {
	createUser
}