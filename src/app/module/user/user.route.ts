import express, { Router } from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validationRequest';
import { userValidation } from './user.validation';
const router = express.Router()

router.post('/create-user',validateRequest(userValidation.userValidationSchema),  userController.createUser )
export const UserRoute = router