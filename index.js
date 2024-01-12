import app from './app.js'
import './servers/mongoose.js'
import cors from 'cors'
import express from 'express';
import {config} from 'dotenv'
import { fileURLToPath } from 'url';
import path from 'path';
import 'ejs';

// Archivos estáticos y middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración del motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cors());
app.use(express.json())
app.use(express.static('public'));
const PORT = process.env.PORT ||3001;
config()
app.listen(PORT,()=>{
});