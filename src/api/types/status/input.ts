import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "StatusInput",
    fields: function () {
        return {
            value: {
                type: new GraphQLNonNull(GraphQLString)
            }
        };
    }
});