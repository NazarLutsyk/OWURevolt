import {Router} from "express";
import {isLoggedIn} from "../middleware/authentication.validation";
import * as graphqlHTTP from "express-graphql";
import rootSchema from "../api";

const router = Router();

router.use("/auth", require("./auth").default);

router.use('/api/analitics', require("./analitics").default);

router.use("/api", /*isLoggedIn todo,*/ graphqlHTTP({
    schema: rootSchema,
    graphiql: true,
    pretty: true
}));


export default router;