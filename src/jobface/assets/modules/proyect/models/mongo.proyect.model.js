import mongoose from 'mongoose';
const schema = mongoose.Schema;

export const Proyects = new schema({
    proyectState: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeValue',
        required: true
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Proyect', Proyects, 'proyects')