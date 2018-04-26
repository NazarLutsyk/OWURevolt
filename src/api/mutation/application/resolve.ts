import AppModel from "../../../db/model/application";
import * as winston from "winston";

export async function createApplication(root, {data}, context) {
    winston.info(`Create Application`,{admin: context.user, model: data});
    return await (<any>AppModel).supersave(data);
}

export async function updateApplication(root, {data, id}, context) {
    winston.info(`Update Application`,{admin: context.user, id: id, data: data});
    return await AppModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delApplication(root, {id}, context) {
    winston.info(`Remove Application`,{admin: context.user, id: id});
    return await AppModel.findByIdAndRemove(id);
}
