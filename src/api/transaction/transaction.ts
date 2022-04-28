import { Request, Response, NextFunction } from "express";
import transactionApi from './transactionApi';

const addTransaction = async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log(' transaction body :: ', request.body);
        const { date, customerId } = request.body;

        const addTransaction = await transactionApi.addTransaction(date, customerId);
        response.json(addTransaction);
    } catch (error) {
        console.error('Error on saving transaction', error);
        response.json('Error on saving transaction ' + error);
    }
}

export default {
    addTransaction
}