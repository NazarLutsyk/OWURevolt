import {GraphQLID, GraphQLInputObjectType, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "ClientUpdate",
    fields: {
        name: {
            type: GraphQLString,
        },
        surname: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        phone: {
            type: GraphQLString,
        },
        city: {
            type: GraphQLString,
        },
        commentsAboutClient: {
            type: GraphQLString,
        },
        tagsAboutClient: {
            type: GraphQLString
        }
    }
});