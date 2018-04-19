import {Schema, model} from "mongoose";

let ApplicationSchema = new Schema({
    reciveDate: {
        type: Date,
        default: new Date()
    },
    closeDate: {
        type: Date,
        default: new Date()
    },
    clientComment: {
        type: String,
    },
    managerComment: {
        type: String,
    },
    tags: {
        type: String,
    },
    futureCourse: {
        type: String,
    },
    checked: {
        type: Boolean,
        default: false
    },
    discount: {
        type: Number,
        default: 0
    },
    paid: {
        type: Number,
    },
    leftToPay: {
        type: Number,
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'client',
        required: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'course',
        required: true
    },
    social: {
        type: Schema.Types.ObjectId,
        ref: 'social'
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: 'status'
    },
    payments: [{
        type: Schema.Types.ObjectId,
        ref: 'payment'
    }]
});

export default model('application', ApplicationSchema);