import mongoose from 'mongoose'

const TypeValueSchema = new mongoose.Schema({
    typeValueState: {
        type: Number,
        required: true,
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type',
        required: true
    },
    typeValue: {
        type: Number,
        required: true,
    },
    typeValueDescription: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export default mongoose.model('TypeValue', TypeValueSchema, 'typeValues')