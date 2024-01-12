import app from './app.js'
import './Services/service.js'
const PORT = process.env.PORT ||3001;
app.listen(PORT,()=>{
    console.log('Esta corriento con server http://localhost:'+PORT);
});