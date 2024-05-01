import mongoose from 'mongoose'

const MembershipSchema = new mongoose.Schema({
    membershipState: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeValue',
        required: true
    },
    membership: {
        type: String,
        required: true,
    },
    range: {
        type: mongoose.Schema.Types.ObjectId,
          ref: 'TypeValue',
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    membershipDurationMonths: {
        type: Number,
    },
    price: {
        type: Number,
    }
}, {
    timestamps: true
})

export default mongoose.model('Membership', MembershipSchema, 'memberships')