import {Schema, model} from "mongoose";

let TaskSchema = new Schema({
    value: {
        type: String,
        required: true
    },
    dateExec: {
        type: Date,
        required: true
    },
    checked:{
        type: Boolean,
        default: false
    },
    client:{
        type: Schema.Types.ObjectId,
        ref: "client",
        required: true
    }
});

export default model("task", TaskSchema);