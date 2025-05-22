import express, { Router } from 'express';

import validateRequest from '../../middlewares/validationRequest';

import { userValidation } from '../user/user.validation';
import { blogController } from './blog.controller';
import { blogValidation } from './blog.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router()

router.post('/', auth(USER_ROLE.user), validateRequest(blogValidation.createBlogSchema),  blogController.createBlog)
router.patch('/:id', auth(USER_ROLE.user), validateRequest(blogValidation.updateBlogSchema),  blogController.updateBlog)

export const blogRouter = router