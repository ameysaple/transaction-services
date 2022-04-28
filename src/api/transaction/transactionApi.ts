import { ObjectId } from "mongoose";
import TransactionModel from "../../db/schemas/transaction";

const addTransaction = async (date: Date, customerId: ObjectId) => {
    try {
        const transactionInstance = new TransactionModel({
            date: date,
            customerId: customerId
        });

        return await transactionInstance.save();
    } catch (error) {
        console.error('Error on saving customer', error);
        throw error;
    }
}

export default {
    addTransaction
}