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
            receiveDate: {
                type: GraphQLString,
            },
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
            paid: {
                type: GraphQLInt,
            },
            leftToPay: {
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