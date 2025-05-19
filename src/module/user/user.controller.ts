import catchAsync from "../../utils/catchAsync"
import { userService } from "./user.service"

const createUser = catchAsync(async(req, res) => {
	const payload = req.body
	const result =  userService.createUser(payload)
	return 
}) 

export const userController = {
	createUser
}