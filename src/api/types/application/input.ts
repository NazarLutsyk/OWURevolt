import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString
} from "graphql";
import {resolveClient, resolveCourse, resolveSocial, resolveStatus} from "./resolve";

export default new GraphQLInputObjectType({
    name: "ApplicationInput",
    fields: function () {
        return {
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
            discount: {
                type: GraphQLInt,
            },
            client: {
                type: new GraphQLNonNull(GraphQLID),
            },
            course: {
                type: new GraphQLNonNull(GraphQLID),
            },
            social: {
                type: GraphQLID,
            },
            status: {
                type: GraphQLID,
            },
        };
    }
});