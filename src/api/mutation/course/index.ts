import {create, update, del} from "./resolve";
import CourseType from "../../types/course";
import CourseInputType from "../../types/course/input";
import {GraphQLID} from "graphql";

export default {
    create: {
        type: CourseType,
        args: {
            data: CourseInputType,
        },
        resolve: create
    },
    update: {
        type: CourseType,
        args: {
            data: CourseInputType,
        },
        resolve: update
    },
    delete: {
        type: CourseType,
        args: {
            data: GraphQLID,
        },
        resolve: del
    }
}