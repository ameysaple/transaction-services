import { NextFunction, Request, Response, Router } from "express";
import { validate } from "../middleware/error.middleware";
import ruleSet from "../api/ruleSet/ruleSet";
import ruleSetValidator from "../middleware/validators/ruleSet";

const routes = Router();

routes.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json({
        message: 'Welcome'
    });
});

routes.post('/ruleset', validate(ruleSetValidator.ruleSet()), ruleSet.addRuleSet);

export default routes;