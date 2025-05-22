import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import httpStatus from 'http-status';
const blockUser = async(userId:string) => {
  const user = await User.findById(userId);
  if(!user){
	 throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  user.isBlocked = true
  await user.save()
}
const deleteBlog = async (id:string) => {

}
export const AdminService = {
	blockUser,
	deleteBlog
}
