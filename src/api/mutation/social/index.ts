import {create, update, del} from "./resolve";
import SocialType from "../../types/social";
import SocialInputType from "../../types/social/input";
import {GraphQLID} from "graphql";

export default {
    create: {
        type: SocialType,
        args: {
            data: SocialInputType,
        },
        resolve: create
    },
    update: {
        type: SocialType,
        args: {
            data: SocialInputType,
        },
        resolve: update
    },
    delete: {
        type: SocialType,
        args: {
            data: GraphQLID,
        },
        resolve: del
    }
}