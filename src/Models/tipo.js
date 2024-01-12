import mongoose from 'mongoose'
const schema = mongoose.Schema;

export const TipoSchema = new schema({
    tipo: {
        type: String,
        required: 'Por favor digite un id'
    }

})