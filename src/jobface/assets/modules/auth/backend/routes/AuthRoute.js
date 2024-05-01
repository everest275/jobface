import { Router } from 'express'
import { login, register,  logout} from '../controllers/AuthController.js'
import { registerSchema, loginSchema } from '../schemas/AuthSchema.js'
import {validateSchema} from '../../../../middlewares/validator.middleware.js'
const AuthRoutes = Router()

AuthRoutes.post('/register',validateSchema(registerSchema) ,register)
AuthRoutes.post('/login', validateSchema(loginSchema),login)
AuthRoutes.post('/logout', logout)

export default AuthRoutes