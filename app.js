import express from 'express';
import cors from 'cors'
//Las otras rutas se importan aca
import tipo from './src/Routes/tipo.js';

const app = express();
app.use(cors());
app.use(express.json())
app.use(tipo)
export default app