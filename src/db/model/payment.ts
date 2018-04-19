import {Schema, model} from "mongoose";

let PaymentSchema = new Schema({
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    date: {
        type: Date,
        default: new Date()
    }
});

export default model('payment', PaymentSchema);