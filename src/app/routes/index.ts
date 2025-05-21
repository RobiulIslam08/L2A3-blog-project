import express from 'express'
import { authRouter } from '../module/auth/auth.route'


const router = express.Router()

const moduleRoute = [
{
	path:'/auth',
	route:authRouter

}
]
	


moduleRoute.forEach(route => router.use(route.path, route.route))
export default router