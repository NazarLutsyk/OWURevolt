import {Schema, model} from "mongoose";

let StatusSchema = new Schema({
    value: {
        type: String,
        required: true
    }
});

export default model('status', StatusSchema);