import catchAsync from "../../utils/catchAsync";

import httpStatus from 'http-status';
import sendResponse from "../../utils/sendRespons";
import { AdminService } from "./admin.service";



const blockUser = catchAsync(async (req, res) => {
    const { userId } = req.params;
    await AdminService.blockUser(userId);
    sendResponse(res, {
      success: true,
      message: 'User blocked successfully',
      statusCode: httpStatus.OK,
      data: null,
    });
  })
  const deleteBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    await AdminService.deleteBlog(id);
    sendResponse(res, {
      success: true,
      message: 'Blog deleted successfully',
      statusCode: httpStatus.OK,
	  data:null
    });
  })
export const AdminController = {
	blockUser,
	deleteBlog
}