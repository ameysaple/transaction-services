import { ObjectId, Schema } from "mongoose";
import RuleSetModel from "../../db/schemas/ruleset";
import TransactionModel from "../../db/schemas/transaction";

interface TransactionList {
    transactionId: string;
    amount: number;
}

const getCashback = async (customerId: string) => {
    try {
        const ruleSets = await RuleSetModel.find({});

        if(! ruleSets) {
            return [];
        }

        let transactionList: TransactionList[] = [];
        for (const ruleSetItem of ruleSets) {
            const transactions = await TransactionModel.find({
                date: { $gte: ruleSetItem.startDate, $lte: ruleSetItem.endDate },
                customerId: customerId
            }).sort({ date: 1 }).limit(ruleSetItem.redemptionLimit);

            transactions.map((val) => {
                transactionList.push({
                    transactionId: val._id,
                    amount: ruleSetItem.cashback
                });
            });
        }

        return transactionList;
    } catch (error) {
        console.error('Error on saving customer', error);
        throw error;
    }
}

export default {
    getCashback
}