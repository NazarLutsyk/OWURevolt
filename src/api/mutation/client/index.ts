import {createClient,updateClient,delClient} from "./resolve";
import ClientType from "../../types/client";
import ClientInputType from "../../types/client/input";
import ClientUpdateType from "../../types/client/update";
import {GraphQLID, GraphQLNonNull} from "graphql";
export default {
    createClient: {
        type: ClientType,
        args: {
            data: {
                type: ClientInputType
            },
        },
        resolve: createClient
    },
    updateClient: {
        type: ClientType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            data: {
                type: ClientUpdateType
            },
        },
        resolve: updateClient
    },
    deleteClient: {
        type: ClientType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
        },
        resolve: delClient
    }
}