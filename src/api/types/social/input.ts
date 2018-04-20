import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "SocialInput",
    fields: function () {
        return {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            }
        };
    }
});