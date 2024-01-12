import app from './app.js'
import './Services/service.js'
const port=8085
app.listen(process.env.PORT || 8085,()=>{
    console.log('Esta corriento con server http://localhost:'+port);
});