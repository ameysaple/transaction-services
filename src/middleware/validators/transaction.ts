import { body, CustomValidator } from "express-validator"
import mongoose from 'mongoose';
import CustomerModel from '../../db/schemas/customer';

const isValidCustomer: CustomValidator = value => {
    if(!mongoose.isValidObjectId(value)) {
        throw new Error('Invalid Customer Id');
    }

    return CustomerModel.findOne({_id: value}).then(user => {
        if(!user) {
            return Promise.reject('Invalid Customer');
        }
    });
}

const transaction = () => {
    return [
        body('date', 'Date Required').exists({checkNull: true, checkFalsy: true}).isDate({format: 'yyyy-mm-dd'}),
        body('customerId', 'Customer Required').exists({checkNull: true, checkFalsy: true}).custom(isValidCustomer)
    ]
};

export default {
    transaction
}
