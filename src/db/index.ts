import * as mongoose from "mongoose";

export function connect(DBname: string): void {
    mongoose.connect(DBname);
}