import StatusModel from "../../../db/model/status";

export async function createStatus(root, {data}) {
    return await StatusModel.create(data);
}

export async function updateStatus(root, {data, id}) {
    return await StatusModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delStatus(root, {id}) {
    return await StatusModel.findByIdAndRemove(id);
}
