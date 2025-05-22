import express from 'express';
import { authRouter } from '../module/auth/auth.route';
import { blogRouter } from '../module/blog/blog.route';

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
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
