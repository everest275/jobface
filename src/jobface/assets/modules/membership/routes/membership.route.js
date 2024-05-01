import { Router } from "express";
import { getAll,remove, getOne, create, update } from '../controllers/membership.controller.js'

const router = Router();

router.get('/memberships', getAll)
router.get('/memberships/:id',getOne)
router.post('/memberships', create)
router.put('/memberships/:id',update)
router.delete('/memberships/:id', remove)

export default router;