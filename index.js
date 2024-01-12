import app from './app.js'
import './Services/service.js'

app.listen(process.env.PORT || 8085,()=>{
    console.log('Esta corriento con server http://localhost:'+process.env.PORT);
});