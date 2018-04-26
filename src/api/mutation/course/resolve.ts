import CourseModel from "../../../db/model/course";
import * as winston from "winston";

export async function createCourse(root, {data},context) {
    winston.info(`Create Course`,{admin: context.user, model: data});
    return await CourseModel.create(data);
}

export async function updateCourse(root, {data, id},context) {
    winston.info(`Update Course`,{admin: context.user, id: id, data: data});
    return await CourseModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delCourse(root, {id},context) {
    winston.info(`Remove Course`,{admin: context.user, id: id});
    return await CourseModel.findByIdAndRemove(id);
}
