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
const updateBlog = catchAsync(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const result = await blogService.updateBlog(id, body);
  if (!result) {
    sendResponse(res, {
      success: false,
      message: 'Blog not found',
      statusCode: status.NOT_FOUND,
      data: null,
    });
    return;
  }

  sendResponse(res, {
    success: true,
    message: 'Blog updated successfully',
    statusCode: status.OK,

    data: {
      _id: result._id,
      title: result.title,
      content: result.content,
      author: result.author,
    },
  });
});
const deleteBlog = catchAsync(async(req,res) => {
   const id = req.params.id
    const result = await blogService.deleteBlog(id)
   sendResponse(res, {
    success: true,
    message: 'Blog deleted successfully',
    statusCode: status.OK,

   data:null
  });

    
})
export const blogController = {
  createBlog,
  updateBlog,
  deleteBlog
}
