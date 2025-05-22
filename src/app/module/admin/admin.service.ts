import AppError from "../../errors/AppError";
import { Blog } from "../blog/blog.model";
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
const deleteBlog = async (blogId:string) => {
const blog = await Blog.findById(blogId);
    if (!blog) {
      throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
    }

    await Blog.findByIdAndDelete(blogId);
}
export const AdminService = {
	blockUser,
	deleteBlog
}
