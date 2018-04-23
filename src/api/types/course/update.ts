import {GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "CourseUpdate",
    fields: {
        name: {
            type: GraphQLString,
        },
        price: {
            type: GraphQLInt
        }
    }
});