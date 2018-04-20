import {GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "PaymentInput",
    fields: function () {
        return {
            amount: {
                type: new GraphQLNonNull(GraphQLInt),
            },
            date: {
                type: GraphQLString
            },
            application:{
                type: new GraphQLNonNull(GraphQLID),
            }
        };
    }
});