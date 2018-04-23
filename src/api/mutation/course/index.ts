import {createCourse, updateCourse, delCourse} from "./resolve";
import CourseType from "../../types/course";
import CourseInputType from "../../types/course/input";
import CourseUpdateType from "../../types/course/update";
import {GraphQLID, GraphQLNonNull} from "graphql";

export default {
    createCourse: {
        type: CourseType,
        args: {
            data: {
                type: CourseInputType
            },
        },
        resolve: createCourse
    },
    updateCourse: {
        type: CourseType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            data: {
                type: CourseUpdateType
            },
        },
        resolve: updateCourse
    },
    deleteCourse: {
        type: CourseType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
        },
        resolve: delCourse
    }
}