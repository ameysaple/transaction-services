import { NextFunction, Request, Response } from "express";
import HttpException from "../exception/http";

export const errorHandler = (error: HttpException, request: Request, response: Response, next: NextFunction) => {
    const status = error.statusCode || 500;
    const message = error.message || 'Something went wrong';

    response.status(status).send(message);
}