import { Request, Response, NextFunction } from "express";
import ruleSetApi from './ruleSetApi';

const addRuleSet = async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log(' ruleset body :: ', request.body);
        const { startDate, endDate, cashback, redemptionLimit, budget, minTransactions } = request.body;

        const addRuleSet = await ruleSetApi.addRuleSet(startDate, endDate, cashback, redemptionLimit, budget, minTransactions);
        response.json(addRuleSet);
    } catch (error) {
        console.error('Error on fetching rule set', error);
        response.json('Error on fetching rule set ' + error);
    }
}

export default {
    addRuleSet
}