export function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        let error = new Error();
        (<any>error).status = 403;
        error.message = 'Forbidden. You are not authenticated';
        next(error);
    }
}

export function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    } else {
        let error = new Error('Forbidden');
        error.message = 'Forbidden. You are authenticated';
        next(error);
    }
}