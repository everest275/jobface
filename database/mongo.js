import mongoose from 'mongoose'

export const connectMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost/jobfacedb')
        console.log(">>>MONGODB IS CONNECTED")
    } catch (error) {
            console.log(error)
    }
}