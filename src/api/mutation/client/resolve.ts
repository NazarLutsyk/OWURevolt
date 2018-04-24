import ClientModel from "../../../db/model/client";
import * as winston from "winston";

export async function createClient(root, {data}, context) {
    winston.info(`Create Client`,{admin: context.user.toJSON(), model: data});
    return await ClientModel.create(data);
}

export async function updateClient(root, {data,id}, context) {
    winston.info(`Update Client`,{admin: context.user.toJSON(), id: id, data: data});
    return await ClientModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delClient(root, {id}, context) {
    winston.info(`Remove Client`,{admin: context.user.toJSON(), id: id});
    return await ClientModel.findByIdAndRemove(id);
}
