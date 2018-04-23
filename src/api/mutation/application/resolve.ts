import AppModel from "../../../db/model/application";

export async function createApplication(root, {data}) {
    return await AppModel.create(data);
}

export async function updateApplication(root, {data, id}) {
    return await AppModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delApplication(root, {id}) {
    return await AppModel.findByIdAndRemove(id);
}
