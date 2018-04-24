"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var helmet = require("helmet");
var morgan = require("morgan");
var session = require("express-session");
var passport = require("passport");
require("./config/passport");
require("./config/winston");
var db_1 = require("./db");
var global_1 = require("./config/global");
var routes_1 = require("./routes");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        db_1.default(global_1.default.DB);
        this.config();
        this.routes();
        this.errorHandler();
        this.usersInit();
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(morgan("dev"));
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(session({
            secret: 'asdasdwdedfe884d5s4ds54d5sd874',
            resave: true,
            saveUninitialized: false,
        }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    };
    App.prototype.routes = function () {
        this.app.use(routes_1.default);
    };
    App.prototype.errorHandler = function () {
        this.app.use(function (err, req, res, next) {
            var errRes = {
                message: err.message,
                status: err.status || 500,
            };
            res.json(errRes);
        });
    };
    App.prototype.usersInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var UserModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        UserModel = require("./db/model/user").default;
                        return [4 /*yield*/, UserModel.count()];
                    case 1:
                        if (!((_a.sent()) <= 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, UserModel.create({
                                login: "qqqq",
                                password: "qqqq"
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map