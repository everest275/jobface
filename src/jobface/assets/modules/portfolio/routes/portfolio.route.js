import { Router } from "express";
import { getAll,remove, getOne, create, update } from '../controllers/portfolio.controller.js'

const router = Router();

router.get('/portfolios', getAll)
router.get('/portfolios/:id',getOne)
router.post('/portfolios', create)
router.put('/portfolios/:id',update)
router.delete('/portfolios/:id', remove)

export default router;