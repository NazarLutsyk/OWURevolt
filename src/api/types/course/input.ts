import {GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "CourseInput",
    fields: function () {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString),
            },
            price: {
                type: GraphQLInt
            }
        };
    }
});