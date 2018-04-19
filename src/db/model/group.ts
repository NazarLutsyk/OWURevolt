import {Schema, model} from "mongoose";

let GroupSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    room: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    course:{
        type: Schema.Types.ObjectId,
        ref: 'course',
        required: true
    },
    clients:[{
        type: Schema.Types.ObjectId,
        ref: 'client'
    }]
});

export default model('group', GroupSchema);