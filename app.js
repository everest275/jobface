import express from 'express';
import morgan from 'morgan'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import Routes from './src/jobface/assets/routes/routing.routes.js'
import { config } from 'dotenv'
import { fileURLToPath } from 'url';
import path from 'path';
import 'ejs';
import bodyParser from 'body-parser'

// Express engine
const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())

//Routes configuration
app.use(Routes)

//ejs config
dotenv.config()
config()

// Archivos estáticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//EJS engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(express.static(path.join(__dirname, 'public')));

export default app