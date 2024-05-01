import mongoose from 'mongoose';
const schema = mongoose.Schema;

export const Portfolios = new schema({
    portfolioState: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeValue',
        required: true
    },
    name: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    job: {
        type: String
    },
    aboutYou: {
        type: String
    },
    portfolioEmail: {
        type: String
    },
    portfolioCellphone: {
        type: String
    },
    style: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeValue',
        required: true
    },
    proyect: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proyect',
        required: true
    },
    picture: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Upload',
    }
}, {
    timestamps: true
})

export default mongoose.model('Portfolio', Portfolios, 'portfolios')