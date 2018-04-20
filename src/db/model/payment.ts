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
    },
    application:{
        type:Schema.Types.ObjectId,
        ref:"Application",
        required: true
    }
});

export default model('payment', PaymentSchema);