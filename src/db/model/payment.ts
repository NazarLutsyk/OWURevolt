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
    application: {
        type: Schema.Types.ObjectId,
        ref: "Application",
        required: true
    }
});

PaymentSchema.statics.supersave = async function (doc) {
    let AppModel = require("./application").default;
    let app = await AppModel.findById(doc.application);
    if (app.leftToPay >= doc.amount) {
        app.leftToPay -= doc.amount;
        app.paid += doc.amount;
        let payment = await this.create(doc);
        if (payment)
            await app.save();
        return payment;
    } else {
        throw new Error("Amount of payment is bigger than left to pay");
    }
};
export default model('payment', PaymentSchema);