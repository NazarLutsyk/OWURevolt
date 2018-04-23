import ClientModel from "../../../db/model/client";

export async function createClient(root, {data}) {
    return await ClientModel.create(data);
}

export async function updateClient(root, {data,id}) {
    return await ClientModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delClient(root, {id}) {
    return await ClientModel.findByIdAndRemove(id);
}
