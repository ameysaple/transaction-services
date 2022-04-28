import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";
import HttpException from "../exception/http";

export const errorHandler = (error: HttpException, request: Request, response: Response, next: NextFunction) => {
    const status = error.statusCode || 500;
    const message = error.message || 'Something went wrong';

    response.status(status).send(message);
}

export const validate = (validations: ValidationChain[]) => {
    return async (request: Request, response: Response, next: NextFunction) => {
        await Promise.all(validations.map(validation => validation.run(request)));

        // for (let validation of validations) {
        //     const result = await validation.run(request);
        //     if (result.errors.length) break;
        // }

        const errors = validationResult(request);
        if(errors.isEmpty()) {
            return next();
        }

        response.status(400).json({ errors: errors.array() });
    }
}