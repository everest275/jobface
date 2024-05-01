import mongoose from 'mongoose';
const schema = mongoose.Schema;

export const UploadSchema = new schema({
    uploadState: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeValue',
        required: true
    },

    filename: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    originalname: {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    data: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

export default mongoose.model('Upload', UploadSchema, 'uploads')