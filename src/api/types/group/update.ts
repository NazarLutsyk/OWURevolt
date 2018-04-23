import {GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "GroupUpdate",
    fields: {
        name: {
            type: GraphQLString,
        },
        room: {
            type: GraphQLString
        },
        startDate: {
            type: GraphQLString
        },
        course: {
            type: GraphQLID
        },
        clients: {
            type: new GraphQLList(GraphQLID),
        },
    }
});