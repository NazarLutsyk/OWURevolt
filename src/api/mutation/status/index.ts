import {create, update, del} from "./resolve";
import StatusType from "../../types/status";
import StatusInputType from "../../types/status/input";
import {GraphQLID} from "graphql";

export default {
    create: {
        type: StatusType,
        args: {
            data: StatusInputType,
        },
        resolve: create
    },
    update: {
        type: StatusType,
        args: {
            data: StatusInputType,
        },
        resolve: update
    },
    delete: {
        type: StatusType,
        args: {
            data: GraphQLID,
        },
        resolve: del
    }
}