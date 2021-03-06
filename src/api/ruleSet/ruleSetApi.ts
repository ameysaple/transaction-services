import RuleSetModel from "../../db/schemas/ruleset";

const addRuleSet = async (startDate: Date, endDate: Date, cashback: Number, redemptionLimit: Number, budget: Number, minTransactions: Number) => {
    try {
        const ruleSetInstance = new RuleSetModel({
            startDate: startDate,
            endDate: endDate,
            cashback: cashback,
            redemptionLimit: redemptionLimit,
            budget: budget, 
            minTransactions: minTransactions
        });

        return await ruleSetInstance.save();
    } catch (error) {
        console.error('Error on fetching rule set', error);
        throw error;
    }
}

export default {
    addRuleSet
}