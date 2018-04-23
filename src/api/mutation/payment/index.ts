import {createPayment, delPayment} from "./resolve";
import PaymentType from "../../types/payment";
import PaymentInputType from "../../types/payment/input";
import {GraphQLID, GraphQLNonNull} from "graphql";

export default {
    createPayment: {
        type: PaymentType,
        args: {
            data: {
                type: PaymentInputType
            },
        },
        resolve: createPayment
    },
    deletePayment: {
        type: PaymentType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
        },
        resolve: delPayment
    }
}