import { Router } from "express";
import {
    getTipos,
    getTipo,
    createTipo,
    updateTipo,
    deleteTipo
    
} from "../Controllers/tipo.js"

const router = Router();

router.get('/tipos', getTipos)

router.get('/tipos/:id', getTipo)
router.post('/tipos', createTipo)
router.put('/tipos/:id', updateTipo)
router.delete('/tipos/:id', deleteTipo)


export default router;