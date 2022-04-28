import { body, CustomValidator } from "express-validator"
import CustomerModel from '../../db/schemas/customer';

const isValidCustomer: CustomValidator = value => {
    return CustomerModel.findOne({email: value}).then(user => {
        if(user) {
            return Promise.reject('Email already in use.');
        }
    });
}

const customer = () => {
    return [
        body('firstName', 'First Name Required').exists({checkNull: true, checkFalsy: true}).not().isEmpty().trim().escape(),
        body('lastName', 'Last Name Required').exists({checkNull: true, checkFalsy: true}).not().isEmpty().trim().escape(),
        body('email', 'Email Required').exists({checkNull: true, checkFalsy: true}).isEmail().normalizeEmail().custom(isValidCustomer)
    ]
};

export default {
    customer
}
