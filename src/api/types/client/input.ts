import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "ClientInput",
    fields: () => {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString),
            },
            surname: {
                type: new GraphQLNonNull(GraphQLString),
            },
            email: {
                type: GraphQLString,
            },
            phone: {
                type: new GraphQLNonNull(GraphQLString),
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
        };
    }
});