import * as mongoose from "mongoose";

export default function(DBname: string): void {
    mongoose.connect(DBname);
}