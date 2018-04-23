import {createSocial, updateSocial, delSocial} from "./resolve";
import SocialType from "../../types/social";
import SocialInputType from "../../types/social/input";
import SocialUpdateType from "../../types/social/update";
import {GraphQLID, GraphQLNonNull} from "graphql";

export default {
    createSocial: {
        type: SocialType,
        args: {
            data: {
                type: SocialInputType
            },
        },
        resolve: createSocial
    },
    updateSocial: {
        type: SocialType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            data: {
                type: SocialUpdateType
            },
        },
        resolve: updateSocial
    },
    deleteSocial: {
        type: SocialType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
        },
        resolve: delSocial
    }
}