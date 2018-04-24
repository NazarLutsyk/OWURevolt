import {Schema, model, Document} from "mongoose";

let ApplicationSchema = new Schema({
    receiveDate: {
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
        default: 0
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
    }
});

ApplicationSchema.statics.supersave = async function (doc) {
    let CourseModel = require("./course").default;
    let course = await CourseModel.findById(doc.course);

    doc.discount = doc.discount ? doc.discount : 0;
    doc.leftToPay = course.price - (course.price * (doc.discount / 100));
    return this.create(doc);
};

export default model('application', ApplicationSchema);