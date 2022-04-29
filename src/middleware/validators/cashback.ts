import { CustomValidator, param } from "express-validator"
import mongoose from 'mongoose';

const isValidCustomer: CustomValidator = value => {
    if(!mongoose.isValidObjectId(value)) {
        throw new Error('Invalid Customer Id');
    }

    return true;
}

const cashback = () => {
    return [
        param('customerId').custom(isValidCustomer)
    ]
};

export default {
    cashback
}
