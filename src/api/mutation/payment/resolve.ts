import PaymentModel from "../../../db/model/payment";

export async function createPayment(root, {data}) {
    return await PaymentModel.create(data);
}
export async function delPayment(root, {id}) {
    return await PaymentModel.findByIdAndRemove(id)
}
