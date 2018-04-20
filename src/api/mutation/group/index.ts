import {create, update, del} from "./resolve";
import GroupType from "../../types/group";
import GroupInputType from "../../types/group/input";
import {GraphQLID} from "graphql";

export default {
    create: {
        type: GroupType,
        args: {
            data: GroupInputType,
        },
        resolve: create
    },
    update: {
        type: GroupType,
        args: {
            data: GroupInputType,
        },
        resolve: update
    },
    delete: {
        type: GroupType,
        args: {
            data: GraphQLID,
        },
        resolve: del
    }
}