import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendRespons';
import { authService } from './auth.service';
const register = catchAsync(async (req, res) => {
  const payload = req.body;
  // console.log(payload, 'aslo nah kno')
  const result = await authService.register(payload);

  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: status.OK,

    data: {
      _id: result?._id,
      name: result?.name,
      email: result?.email,
    },
  });
});
const login = catchAsync(async (req, res) => {
  const result = await authService.login(req.body);
  sendResponse(res, {
    success: true,
    message: 'Login successful',
    statusCode: status.OK,

    data:result.token
  });
});

export const authController = {
  register,
  login,
};
