import CourseModel from "../../../db/model/course";

export async function createCourse(root, {data}) {
    return await CourseModel.create(data);
}

export async function updateCourse(root, {data, id}) {
    return await CourseModel.findByIdAndUpdate(id, data, {new: true});
}

export async function delCourse(root, {id}) {
    return await CourseModel.findByIdAndRemove(id);
}
