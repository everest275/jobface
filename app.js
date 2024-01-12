import express from 'express';
//Las otras rutas se importan aca
import tipo from './src/Routes/tipo.js';
import dotenv from 'dotenv'
dotenv.config()
const app = express();
app.get('/profile', (req, res) => {
    res.render('profile',{
        name:'everest',
        age:'27'
    }); // Asegúrate de tener el archivo 'profile.ejs' en la carpeta 'views'
});
app.use(tipo)
export default app