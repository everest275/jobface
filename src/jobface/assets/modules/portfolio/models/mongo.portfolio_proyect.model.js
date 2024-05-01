import mongoose from 'mongoose';
const schema = mongoose.Schema;

export const PortfolioProyects = new schema({
    portfolioProyectState: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeValue',
        required: true
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    link: {
        type: String
    },
    picture: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Upload',   
    }],
    portfolio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('PortfolioProyect', PortfolioProyects, 'portfolioProyects')