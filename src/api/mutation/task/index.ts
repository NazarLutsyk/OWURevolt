import {create, update, del} from "./resolve";
import TaskType from "../../types/task";
import TaskInputType from "../../types/task/input";
import {GraphQLID} from "graphql";

export default {
    create: {
        type: TaskType,
        args: {
            data: TaskInputType,
        },
        resolve: create
    },
    update: {
        type: TaskType,
        args: {
            data: TaskInputType,
        },
        resolve: update
    },
    delete: {
        type: TaskType,
        args: {
            data: GraphQLID,
        },
        resolve: del
    }
}