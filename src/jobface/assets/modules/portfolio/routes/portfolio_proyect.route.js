import { Router } from "express";
import { getAll,remove, getOne, create, update } from '../controllers/portfolio_proyect.controller.js'

const router = Router();

router.get('/portfolioProyects', getAll)
router.get('/portfolioProyects/:id',getOne)
router.post('/portfolioProyects', create)
router.put('/portfolioProyects/:id',update)
router.delete('/portfolioProyects/:id', remove)

export default router;