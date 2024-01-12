import mongose from 'mongoose';
(async()=>{
    await mongose.connect('mongodb+srv://everest012016:XW9cbh0I84zJvbsh@myapp.pbkqwos.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>console.log('Base de datos conectada'))
    .catch(err=>console.log('Error db conect::',err))
})()