import {Router} from 'express'
import {profile} from "../controllers/ProfileController.js"


 const ProfileRoutes = Router()

 ProfileRoutes.get('/profile',profile) 
 
 export default ProfileRoutes