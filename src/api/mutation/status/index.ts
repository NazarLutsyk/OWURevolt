import {createStatus, updateStatus, delStatus} from "./resolve";
import StatusType from "../../types/status";
import StatusInputType from "../../types/status/input";
import StatusUpdateType from "../../types/status/update";
import {GraphQLID, GraphQLNonNull} from "graphql";

export default {
    createStatus: {
        type: StatusType,
        args: {
            data: {
                type: StatusInputType
            },
        },
        resolve: createStatus
    },
    updateStatus: {
        type: StatusType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            data: {
                type: StatusUpdateType
            },
        },
        resolve: updateStatus
    },
    deleteStatus: {
        type: StatusType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
        },
        resolve: delStatus
    }
}