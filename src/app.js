"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const db_1 = require("./db");
class App {
    constructor() {
        this.app = express();
        db_1.connect("mongodb://localhost/owu");
        this.config();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(morgan("dev"));
        this.app.use(helmet());
        this.app.use(cors());
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map