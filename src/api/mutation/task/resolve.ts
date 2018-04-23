import TaskModel from "../../../db/model/task";

export async function createTask(root, {data}) {
    return await TaskModel.create(data);
}

export async function updateTask(root, {data, id}) {
    return await TaskModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delTask(root, {id}) {
    return await TaskModel.findByIdAndRemove(id)
}
