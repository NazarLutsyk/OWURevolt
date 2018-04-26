import StatusModel from "../../../db/model/status";
import * as winston from "winston";

export async function createStatus(root, {data},context) {
    winston.info(`Create Status`,{admin: context.user, model: data});
    return await StatusModel.create(data);
}

export async function updateStatus(root, {data, id},context) {
    winston.info(`Update Status`,{admin: context.user, id: id, data: data});
    return await StatusModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delStatus(root, {id},context) {
    winston.info(`Remove Status`,{admin: context.user, id: id});
    return await StatusModel.findByIdAndRemove(id);
}
