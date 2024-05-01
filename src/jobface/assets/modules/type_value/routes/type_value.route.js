import { Router } from "express";
import { getAll,remove, getOne, create, update } from '../controllers/type_value.controller.js'

const router = Router();

router.get('/typeValues', getAll)
router.get('/typeValues/:id',getOne)
router.post('/typeValues', create)
router.put('/typeValues/:id',update)
router.delete('/typeValues/:id', remove)

export default router;