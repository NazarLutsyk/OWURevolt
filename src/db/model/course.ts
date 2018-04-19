import {Schema, model} from "mongoose";

let CourseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
        min: 0
    }
});

export default model('course', CourseSchema);