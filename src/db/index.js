"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
function connect(DBname) {
    mongoose.connect(DBname);
}
exports.connect = connect;
//# sourceMappingURL=index.js.map