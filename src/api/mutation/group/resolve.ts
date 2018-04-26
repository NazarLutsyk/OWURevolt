import GroupModel from "../../../db/model/group";
import * as winston from "winston";

export async function createGroup(root, {data},context) {
    winston.info(`Create Group`,{admin: context.user, model: data});
    return await GroupModel.create(data);
}

export async function updateGroup(root, {data, id},context) {
    winston.info(`Update Group`,{admin: context.user, id: id, data: data});
    return await GroupModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delGroup(root, {id},context) {
    winston.info(`Remove Group`,{admin: context.user, id: id});
    return await GroupModel.findByIdAndRemove(id)
}
