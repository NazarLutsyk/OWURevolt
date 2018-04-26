import TaskModel from "../../../db/model/task";
import * as winston from "winston";

export async function createTask(root, {data},context) {
    winston.info(`Create Task`,{admin: context.user, model: data});
    return await TaskModel.create(data);
}

export async function updateTask(root, {data, id},context) {
    winston.info(`Update Task`,{admin: context.user, id: id, data: data});
    return await TaskModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delTask(root, {id},context) {
    winston.info(`Remove Task`,{admin: context.user, id: id});
    return await TaskModel.findByIdAndRemove(id)
}
