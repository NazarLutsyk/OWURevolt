import {create,update,del} from "./resolve";
import ClientType from "../../types/client";
import ClientInputType from "../../types/client/input";
import {GraphQLID} from "graphql";
export default {
    create: {
        type: ClientType,
        args: {
            data: ClientInputType,
        },
        resolve: create
    },
    update: {
        type: ClientType,
        args: {
            data: ClientInputType,
        },
        resolve: update
    },
    delete: {
        type: ClientType,
        args: {
            data: GraphQLID,
        },
        resolve: del
    }
}