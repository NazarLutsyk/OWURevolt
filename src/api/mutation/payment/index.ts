import {create, update, del} from "./resolve";
import PaymentType from "../../types/payment";
import PaymentInputType from "../../types/payment/input";
import {GraphQLID} from "graphql";

export default {
    create: {
        type: PaymentType,
        args: {
            data: PaymentInputType,
        },
        resolve: create
    },
    update: {
        type: PaymentType,
        args: {
            data: PaymentInputType,
        },
        resolve: update
    },
    delete: {
        type: PaymentType,
        args: {
            data: GraphQLID,
        },
        resolve: del
    }
}