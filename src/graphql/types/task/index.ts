import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLBoolean} from "graphql";
import {Schema} from "mongoose";

export default new GraphQLObjectType({
    name: "Task",
    fields: {
        value: {
            type: GraphQLString,
        },
        dateExec: {
            type: GraphQLString
        },
        checked: {
            type: GraphQLBoolean
        },
        client: {
            type: GraphQLID,
        }
    }
});