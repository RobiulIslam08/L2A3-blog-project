import express, { Router } from 'express';

import validateRequest from '../../middlewares/validationRequest';
import { authValidation } from './auth.validation';
import { authController } from './auth.controller';
import { userValidation } from '../user/user.validation';

const router = express.Router()

router.post('/register',validateRequest(userValidation.userValidationSchema),  authController.register)
router.post('/login',validateRequest(authValidation.authValidationSchema),  authController.login)
export const authRouter = router