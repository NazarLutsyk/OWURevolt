import {Schema, model} from "mongoose";

let SocialSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

export default model('social',SocialSchema);