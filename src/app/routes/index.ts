import express from 'express'
import { UserRoute } from '../module/user/user.route'

const router = express.Router()

const moduleRoute = [
{
	path:'/users',
	route:UserRoute

}
]
	


moduleRoute.forEach(route => router.use(route.path, route.route))
export default router