import CustomerModel from "../../db/schemas/customer";

const addCustomer = async (firstName: String, lastName: String, email: String) => {
    try {
        const customerInstance = new CustomerModel({
            firstName: firstName,
            lastName: lastName,
            email: email
        });

        return await customerInstance.save();
    } catch (error) {
        console.error('Error on saving customer', error);
        throw error;
    }
}

export default {
    addCustomer
}