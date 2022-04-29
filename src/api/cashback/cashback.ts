import { Request, Response, NextFunction } from "express";
import mongoose, { Schema } from "mongoose";
import cashbackApi from './cashbackApi';

const getCashback = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { customerId } = request.params;

        const getCashback = await cashbackApi.getCashback(customerId);
        response.json(getCashback);
    } catch (error) {
        console.error('Error on fetching cashback', error);
        response.json('Error on fetching cashback ' + error);
    }
}

export default {
    getCashback
}