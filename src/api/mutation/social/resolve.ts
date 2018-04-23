import SocialModel from "../../../db/model/social";

export async function createSocial(root, {data}) {
    return await SocialModel.create(data);
}

export async function updateSocial(root, {data, id}) {
    return await SocialModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delSocial(root, {id}) {
    return await SocialModel.findByIdAndRemove(id)
}
