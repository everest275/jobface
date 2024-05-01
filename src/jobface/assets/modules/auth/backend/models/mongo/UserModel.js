import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    userState: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeValue',
        required: true

    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    membership: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Membership',
        required: true
    },
    picture: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Upload',
    },
    proyects: []
}, {
    timestamps: true
})

export default mongoose.model('User', UserSchema, 'users')