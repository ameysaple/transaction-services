import { Request, Response, NextFunction } from "express";
import customerApi from './customerApi';

const addCustomer = async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log(' customer body :: ', request.body);
        const { firstName, lastName, email } = request.body;

        const addCustomer = await customerApi.addCustomer(firstName, lastName, email);
        response.json(addCustomer);
    } catch (error) {
        console.error('Error on saving customer', error);
        response.json('Error on saving customer ' + error);
    }
}

export default {
    addCustomer
}