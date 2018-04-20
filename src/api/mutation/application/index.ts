import {create,update,del} from "./resolve";
import ApplicationType from "../../types/application";
import ApplicationInputType from "../../types/application/input";
import {GraphQLID} from "graphql";
export default {
    create: {
        type: ApplicationType,
        args: {
            data: ApplicationInputType,
        },
        resolve: create
    },
    update: {
        type: ApplicationType,
        args: {
            data: ApplicationInputType,
        },
        resolve: update
    },
    delete: {
        type: ApplicationType,
        args: {
            id: GraphQLID,
        },
        resolve: del
    }
}