import UploadRoute from '../modules/upload/routes/upload.route.js'
import ProyectRoute from '../modules/proyect/routes/proyect.route.js'
import TypeRoute from '../modules/type/routes/type.route.js'
import TypeValueRoute from '../modules/type_value/routes/type_value.route.js'
import MembershipRoute from '../modules/membership/routes/membership.route.js'
import PortfolioRoute from '../modules/portfolio/routes/portfolio.route.js'
import PortfolioProyectRoute from '../modules/portfolio/routes/portfolio_proyect.route.js'
import AuthRoutes from '../modules/auth/backend/routes/AuthRoute.js';
import ProfileRoutes from '../modules/auth/backend/routes/ProfileRoute.js';
import {authRequired} from '../middlewares/validate.token.middleware.js'
import {Router} from 'express'

const Routes = Router()
//PUBLIC ROUTES
Routes.use(AuthRoutes, ProfileRoutes)
//PRIVATE ROUTES
Routes.use(authRequired,ProyectRoute,PortfolioRoute,PortfolioProyectRoute,UploadRoute,TypeRoute,TypeValueRoute,MembershipRoute)

export default Routes