import {createTask, updateTask, delTask} from "./resolve";
import TaskType from "../../types/task";
import TaskInputType from "../../types/task/input";
import TaskUpdateType from "../../types/task/update";
import {GraphQLID, GraphQLNonNull} from "graphql";

export default {
    createTask: {
        type: TaskType,
        args: {
            data: {
                type: TaskInputType
            },
        },
        resolve: createTask
    },
    updateTask: {
        type: TaskType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            data: {
                type: TaskUpdateType
            },
        },
        resolve: updateTask
    },
    deleteTask: {
        type: TaskType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            }
        },
        resolve: delTask
    }
}