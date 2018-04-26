import {Router} from "express";
import {getAppStatisticByCourses, getAppStatisticBySocials, getFreeCoursesStat} from "../service/analitic.service";

const router = Router();

router.get("/1", async function (req, res, next) {
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;
    let socials = req.query.socials ? JSON.parse(req.query.socials) : [];

    res.json(await getAppStatisticBySocials(startDate,endDate,socials));
});

router.get("/2", async function (req, res, next) {
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;
    let courses = req.query.courses ? JSON.parse(req.query.courses) : [];

    res.json(await getAppStatisticByCourses(startDate,endDate,courses));
});

router.get("/3", async function (req, res, next) {
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;
    let freeCourses = req.query.freeCourses ? JSON.parse(req.query.freeCourses) : [];

    res.json(await getFreeCoursesStat(startDate,endDate,freeCourses));
});

export default router;