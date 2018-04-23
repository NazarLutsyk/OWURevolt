import {createApplication,updateApplication,delApplication} from "./resolve";
import ApplicationType from "../../types/application";
import ApplicationInputType from "../../types/application/input";
import ApplicationUpdateType from "../../types/application/update";
import {GraphQLID, GraphQLNonNull} from "graphql";
export default {
    createApplication: {
        type: ApplicationType,
        args: {
            data: {
                type: ApplicationInputType
            },
        },
        resolve: createApplication
    },
    updateApplication: {
        type: ApplicationType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            data: {
                type: ApplicationUpdateType
            },
        },
        resolve: updateApplication
    },
    deleteApplication: {
        type: ApplicationType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
        },
        resolve: delApplication
    }
}