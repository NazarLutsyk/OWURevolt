import * as passport from "passport";
import User from "../../db/model/user";
import {LocalSignIn} from "./passport.local";

passport.serializeUser((user, done) => {
    done(null, (<any>user)._id);
});
passport.deserializeUser(async (id, done) => {
    try {
        let user = await User.findById(id);
        return done(null, user);
    } catch (e) {
        return done(e);
    }
});
passport.use("local.signin",LocalSignIn);