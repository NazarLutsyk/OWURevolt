import {GraphQLInputObjectType, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "SocialUpdate",
    fields: {
        name: {
            type: GraphQLString
        }
    }
});