import { NextFunction, Request, Response, Router } from "express";

const routes = Router();

routes.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json({
        message: 'Welcome'
    });
});

export default routes;