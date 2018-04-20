import {GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "GroupInput",
    fields: function () {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString),
            },
            room: {
                type: new GraphQLNonNull(GraphQLString)
            },
            startDate: {
                type: new GraphQLNonNull(GraphQLString)
            },
            clients: {
                type: new GraphQLList(GraphQLID),
            },
        };
    }
});