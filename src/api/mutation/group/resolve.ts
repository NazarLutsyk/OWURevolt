import GroupModel from "../../../db/model/group";

export async function createGroup(root, {data}) {
    return await GroupModel.create(data);
}

export async function updateGroup(root, {data, id}) {
    return await GroupModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delGroup(root, {id}) {
    return await GroupModel.findByIdAndRemove(id)
}
