import mongose from 'mongoose';
(async()=>{
    await mongose.connect(process.env.MONGODB_URL)
    .then(()=>console.log('Server connected'))
    .catch(err=>console.log('Error server connexion:',err))
})()