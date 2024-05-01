import mongoose from 'mongoose'

const TypeSchema = new mongoose.Schema({
    typeState: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    typeDescription: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export default mongoose.model('Type', TypeSchema, 'types')