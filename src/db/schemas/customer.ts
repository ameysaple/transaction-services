import mongoose, { Schema } from 'mongoose';

const customer = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true},
    }, 
    { collection: 'customer', versionKey: 'version' }
);

const CustomerModel = mongoose.model('Customer', customer);

export default CustomerModel;

