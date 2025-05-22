import express from 'express';
import { authRouter } from '../module/auth/auth.route';
import { blogRouter } from '../module/blog/blog.route';
import { adminRouter } from '../module/admin/admin.route';

const router = express.Router();

const moduleRoute = [
  {
    path: '/auth',
    route: authRouter,
  },
  {
	path:'/blogs',
	route:blogRouter
  },
  {
    path:'/admin',
    route:adminRouter
  }
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
