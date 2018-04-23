import {GraphQLBoolean, GraphQLID, GraphQLInputObjectType, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "TaskUpdate",
    fields: {
        value: {
            type: GraphQLString,
        },
        dateExec: {
            type: GraphQLString
        },
        checked: {
            type: GraphQLBoolean
        }
    }
});