import PaymentModel from "../../../db/model/payment";
import * as winston from "winston";

export async function createPayment(root, {data},context) {
    winston.info(`Create Payment`,{admin: context.user, model: data});
    return await (<any>PaymentModel).supersave(data);
}