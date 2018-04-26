import {Router} from "express";
import * as passport from "passport";
import {isLoggedIn,notLoggedIn} from "../middleware/authentication.validation";

const router = Router();

router.post("/signin",notLoggedIn, function (req, res, next) {
    passport.authenticate('local.signin', function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            let e = new Error("Bad credentials!");
            return next(e);
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            return res.status(200).json({
                user: req.user
            });
        });
    })(req, res, next);
});

router.get("/logout",isLoggedIn,function (req, res, next) {
    req.logout();
    res.sendStatus(200);
});

export default router;