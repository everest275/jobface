import { Router } from "express";
import { getAllProyects,deleteProyect, getOneProyect, createProyect, updateProyect } from '../controllers/proyect.controller.js'

const router = Router();

router.get('/proyects', getAllProyects)
router.get('/proyects/:id',getOneProyect)
router.post('/proyects', createProyect)
router.put('/proyects/:id',updateProyect)
router.delete('/proyects/:id', deleteProyect)

export default router;