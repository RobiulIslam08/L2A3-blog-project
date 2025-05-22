import express, { Router } from 'express';

import validateRequest from '../../middlewares/validationRequest';

import { userValidation } from '../user/user.validation';

import { blogValidation } from './blog.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
import { blogController } from './blog.controller';

const router = express.Router();
router.get('/', auth(USER_ROLE.user), blogController.getBlog);
router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(blogValidation.createBlogSchema),
  blogController.createBlog,
);
router.patch(
  '/:id',
  auth(USER_ROLE.user),
  validateRequest(blogValidation.updateBlogSchema),
  blogController.updateBlog,
);
router.delete('/:id', auth(USER_ROLE.user), blogController.deleteBlog);

export const blogRouter = router;
