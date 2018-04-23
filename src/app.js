"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var helmet = require("helmet");
var morgan = require("morgan");
var graphqlHTTP = require("express-graphql");
var api_1 = require("./api");
var db_1 = require("./db");
var global_1 = require("./config/global");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        db_1.default(global_1.default.DB);
        this.config();
        this.graphQlEnable();
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(morgan("dev"));
        this.app.use(helmet());
        this.app.use(cors());
    };
    App.prototype.graphQlEnable = function () {
        this.app.use("/", graphqlHTTP({
            schema: api_1.default,
            graphiql: true,
            pretty: true
        }));
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map