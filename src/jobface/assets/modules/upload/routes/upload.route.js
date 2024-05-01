import { Router } from "express";

import {
    upload,
    uploadfile,
    remove,
    finterest
} from "../controllers/upload.controller.js"

const router = Router();

router.post('/upload', upload)
router.get('/uploadfile', uploadfile)
router.delete('/image/:id', remove)
router.get('/finterest', finterest)


export default router;