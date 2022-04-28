import { NextFunction, Request, Response, Router } from "express";
import { validate } from "../middleware/error.middleware";
import ruleSet from "../api/ruleSet/ruleSet";
import customer from '../api/customer/customer';
import transaction from '../api/transaction/transaction';
import ruleSetValidator from "../middleware/validators/ruleSet";
import customerValidator from '../middleware/validators/customer';
import transactionValidator from '../middleware/validators/transaction';

const routes = Router();

routes.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json({
        message: 'Welcome'
    });
});

routes.post('/ruleset', validate(ruleSetValidator.ruleSet()), ruleSet.addRuleSet);
routes.post('/customer', validate(customerValidator.customer()), customer.addCustomer);
routes.post('/transaction', validate(transactionValidator.transaction()), transaction.addTransaction);

export default routes;