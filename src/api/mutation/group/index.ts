import {createGroup, updateGroup, delGroup} from "./resolve";
import GroupType from "../../types/group";
import GroupInputType from "../../types/group/input";
import GroupUpdateType from "../../types/group/update";
import {GraphQLID, GraphQLNonNull} from "graphql";

export default {
    createGroup: {
        type: GroupType,
        args: {
            data: {
                type: GroupInputType
            },
        },
        resolve: createGroup
    },
    updateGroup: {
        type: GroupType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            data: {
                type: GroupUpdateType
            },
        },
        resolve: updateGroup
    },
    deleteGroup: {
        type: GroupType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
        },
        resolve: delGroup
    }
}