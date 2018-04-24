import {Strategy} from "passport-local";
import User from "../../db/model/user";

export let LocalSignIn = new Strategy({
    usernameField: "login",
    passwordField: "password",
    passReqToCallback: true
}, async function (req, login, password, done) {
    try {
        let user = await User.findOne({login: login, password: password});
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (e) {
        return done(e);
    }
});