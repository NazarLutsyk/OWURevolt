"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
function default_1(DBname) {
    mongoose.connect(DBname);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map