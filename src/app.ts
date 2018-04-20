import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as helmet from "helmet";
import * as morgan from "morgan";
import * as graphqlHTTP from "express-graphql";
import rootSchema from "./api";
import dbConnect from "./db";
import config from "./config/global";

class App {
    app: express.Application;

    constructor() {
        this.app = express();
        dbConnect(config.DB);
        this.config();
        this.graphQlEnable();
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(morgan("dev"));
        this.app.use(helmet());
        this.app.use(cors());
    }

    private graphQlEnable() {
        this.app.use("/", graphqlHTTP({
            schema: rootSchema,
            graphiql: true,
            pretty: true
        }));
    }
}

export default new App().app;