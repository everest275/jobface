import { Router } from 'express';
import { request } from '../controllers/type.controller.js';
import { METHODS } from '../constants/type.constants.js';
import Type from '../models/mongo.type.model.js';

const router = Router();

router.get('/types', (req, res) => {
    req.body.method = METHODS.get;
    req.body.model = Type;
    request(req, res);
});

export default router;
