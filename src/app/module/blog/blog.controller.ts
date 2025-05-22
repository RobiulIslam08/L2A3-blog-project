import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { blogService } from './blog.service';
import sendResponse from '../../utils/sendRespons';

const createBlog = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await blogService.createBlog(payload);

  sendResponse(res, {
    success: true,
    message: 'Blog created successfully',
    statusCode: status.OK,

    data: {
      _id: result._id,
      title: result.title,
      content: result.content,
      author: result.author,
    },
  });
});

export const blogController = {
  createBlog,
};
