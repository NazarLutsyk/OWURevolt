import ApplicationModel from "../db/model/application";
import SocialModel from "../db/model/social";
import CourseModel from "../db/model/course";
import ClientModel from "../db/model/client";
import {ObjectID} from "bson";

export async function getAppStatisticBySocials(
    startDate: string = "1970/01/01",
    endDate: string = "3000/01/01",
    socials: string[] | ObjectID[] = []): Promise<any[]> {

    if (!socials || socials.length <= 0) {
        let socialsDocs = await SocialModel.find({}, "_id");
        socials = socialsDocs.map<string>(function (value, index, array) {
            return value._id;
        });
    }
    for (const key in socials) {
        socials[key] = new ObjectID(socials[key]);
    }
    return await ApplicationModel.aggregate([
        {
            $match: {
                $and: [
                    {social: {$in: socials}},
                    {receiveDate: {$gte: new Date(startDate)}},
                    {receiveDate: {$lte: new Date(endDate)}}
                ]
            }
        },
        {
            $group: {
                _id: "$social",
                count: {$sum: 1}
            }
        },
        {
            $lookup: {
                from: 'socials', localField: '_id', foreignField: '_id', as: 'social'
            }
        },
        {
            $unwind: '$social'
        },
        {
            $project: {
                _id: "$social.name",
                count: "$count"
            }
        }
    ]);
}

export async function getAppStatisticByCourses(
    startDate: string = "1970/01/01",
    endDate: string = "3000/01/01",
    courses: string[] | ObjectID[] = []): Promise<any[]> {

    if (!courses || courses.length <= 0) {
        let courseDocs = await CourseModel.find({}, "_id");
        courses = courseDocs.map<string>(function (value, index, array) {
            return value._id;
        });
    }
    for (const key in courses) {
        courses[key] = new ObjectID(courses[key]);
    }
    return await ApplicationModel.aggregate([
        {
            $match: {
                $and: [
                    {course: {$in: courses}},
                    {receiveDate: {$gte: new Date(startDate)}},
                    {receiveDate: {$lte: new Date(endDate)}}
                ]
            }
        },
        {
            $group: {
                _id: "$course",
                count: {$sum: 1}
            }
        },
        {
            $lookup: {
                from: 'courses', localField: '_id', foreignField: '_id', as: 'course'
            }
        },
        {
            $unwind: '$course'
        },
        {
            $project: {
                _id: "$course.name",
                count: "$count"
            }
        }
    ]);
}

export async function getFreeCoursesStat(
    startDate: string = "1970/01/01",
    endDate: string = "3000/01/01",
    freeCourses: string[] | ObjectID[] = []): Promise<any[]> {

    if (!freeCourses || freeCourses.length <= 0) {
        let freeCoursesDocs = await CourseModel.find({_id: freeCourses, price: 0}, "_id");
        if (!freeCoursesDocs || freeCoursesDocs.length <= 0) {
            freeCoursesDocs = await CourseModel.find({price: 0}, "_id");
        }
        freeCourses = freeCoursesDocs.map<string>(function (value, index, array) {
            return value._id;
        });
    }
    for (const key in freeCourses) {
        freeCourses[key] = new ObjectID(freeCourses[key]);
    }
    let notFreeCourses: any[] = await CourseModel.find({price: {$gt: 0}}, '_id');
    for (const key in notFreeCourses) {
        notFreeCourses[key] = new ObjectID(notFreeCourses[key]._id);
    }
    let clientsWithFreeApps = await ApplicationModel.aggregate([
        {$match: {course: {$in: freeCourses}}},
        {$group: {_id: "$client"}}
    ]);

    for (const key in clientsWithFreeApps) {
        clientsWithFreeApps[key] = new ObjectID(clientsWithFreeApps[key]._id);
    }
    let clientsWithFreeAndOtherApps = await ApplicationModel.aggregate([
        {$match: {client: {$in: clientsWithFreeApps}, course: {$in: notFreeCourses}}},
        {$group: {_id: "$client", count: {$sum: 1}}}
    ]);
    for (const key in clientsWithFreeAndOtherApps) {
        clientsWithFreeAndOtherApps[key] = new ObjectID(clientsWithFreeAndOtherApps[key]._id);
    }

    //free courses
    //not free courses
    //clients with free apps
    //clients with free apps and other apps
//todo
    let res = await ApplicationModel.aggregate([
        {$match: {course: {$in: freeCourses}, client: {$in: clientsWithFreeAndOtherApps}}},
        {$group: {_id: "$course", count: {$sum: "$_id"}}},
        {$lookup: {from: 'courses', localField: '_id', foreignField: '_id', as: 'course'}},
        {$unwind: '$course'},
        {$project: {_id: "$course.name", count: "$count"}}
    ]);

    return [res];

}