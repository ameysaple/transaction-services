import mongoose, { Schema } from 'mongoose';

const ruleSetSchema = new Schema(
    {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        cashback: { type: Number, required: true },
        redemptionLimit: { type: Number, required: true },
        minTransactions: { type: Number, required: true },
        budget: { type: Number, required: true}
    }, 
    { collection: 'ruleset', versionKey: 'version' }
);

const RuleSetModel = mongoose.model('RuleSet', ruleSetSchema);

export default RuleSetModel;

