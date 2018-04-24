import * as winston from "winston";
import * as mkdirp from "mkdirp";
import * as path from "path";

let logPath = path.join(__dirname, '../runtime', '/logs');

mkdirp(logPath, function (err) {
    if (err) {
        throw new Error(err.message);
    }
});

winston.configure({
    level: "info",
    transports: [
        new winston.transports.File({
            level: "info",
            filename: path.join(__dirname, '../runtime', 'logs', 'operations.log'),
        })
    ],
    exceptionHandlers: [
        new winston.transports.File({
            filename: path.join(__dirname, '../runtime', 'logs', 'exceptions.log'),
        })
    ]
});


