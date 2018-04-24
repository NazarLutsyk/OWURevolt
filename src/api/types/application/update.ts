import {GraphQLBoolean, GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "ApplicationUpdate",
    fields: {
        closeDate: {
            type: GraphQLString,
        },
        clientComment: {
            type: GraphQLString,
        },
        managerComment: {
            type: GraphQLString,
        },
        tags: {
            type: GraphQLString,
        },
        futureCourse: {
            type: GraphQLString,
        },
        checked: {
            type: GraphQLBoolean,
        },
        discount: {
            type: GraphQLInt,
        },
        social: {
            type: GraphQLID,
        },
        status: {
            type: GraphQLID,
        },
    }
});