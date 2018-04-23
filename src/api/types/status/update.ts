import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "StatusUpdate",
    fields: {
        value: {
            type: GraphQLString
        }
    }
});