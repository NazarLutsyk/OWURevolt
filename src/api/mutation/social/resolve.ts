import SocialModel from "../../../db/model/social";
import * as winston from "winston";

export async function createSocial(root, {data},context) {
    winston.info(`Create Social`,{admin: context.user, model: data});
    return await SocialModel.create(data);
}

export async function updateSocial(root, {data, id},context) {
    winston.info(`Update Social`,{admin: context.user, id: id, data: data});
    return await SocialModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delSocial(root, {id},context) {
    winston.info(`Remove Social`,{admin: context.user, id: id});
    return await SocialModel.findByIdAndRemove(id)
}
