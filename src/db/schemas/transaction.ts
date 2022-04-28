import mongoose, { Schema } from 'mongoose';
import CustomerModel from './customer';

const transactionSchema = new Schema(
    {
        date: { type: Date, required: true },
        customerId: { type: Schema.Types.ObjectId, required: true, ref: CustomerModel.modelName },
    }, 
    { collection: 'transaction', versionKey: 'version' }
);

const TransactionModel = mongoose.model('Transaction', transactionSchema);

export default TransactionModel;

