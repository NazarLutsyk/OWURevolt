import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as helmet from "helmet";
import * as morgan from "morgan";
import * as session from "express-session";
import * as passport from "passport";
import "./config/passport";
import * as winston from "winston";
import "./config/winston";
import dbConnect from "./db";
import config from "./config/global";
import router from "./routes";

class App {
    app: express.Application;

    constructor() {
        this.app = express();
        dbConnect(config.DB);
        this.config();
        this.routes();
        this.errorHandler();
        this.usersInit();
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
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
    }

    private routes() {
        this.app.use(router);

    }

    private errorHandler() {
        this.app.use(function (err, req, res, next) {
            let errRes = {
                message: err.message,
                status: err.status || 500,
            };
            res.json(errRes);
        });
    }

    private async usersInit() {
        let UserModel = require("./db/model/user").default;
        if(await UserModel.count() <= 0){
            await UserModel.create({
                login:"qqqq",
                password:"qqqq"
            })
        }
    }
}

export default new App().app;