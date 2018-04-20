import {GraphQLBoolean, GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "TaskInput",
    fields: () => {
        return {
            value: {
                type: new GraphQLNonNull(GraphQLString),
            },
            dateExec: {
                type: new GraphQLNonNull(GraphQLString)
            },
            checked: {
                type: GraphQLBoolean
            },
            client: {
                type: new GraphQLNonNull(GraphQLID),
            }
        };
    }
});