import { body } from "express-validator"

const ruleSet = () => {
    return [
        body('startDate', 'Start Date Required')
            .exists({checkNull: true, checkFalsy: true})
            .isDate({format: 'yyyy-mm-dd'})
            .custom((sDate, {req}) => {
                if(!sDate || !req.body.endDate) {
                    throw new Error('Missing Start Date or End Date');
                }
                const [sd, sm, sy] = sDate.split('-');
                const [ed, em, ey] = req.body.endDate.split('-');

                const startDate = new Date(sy, sm, sd);
                const endDate = new Date(ey, em, ed);

                if(startDate >= endDate) {
                    throw new Error('Start Date must be before End Date');
                }
                return true;
            }),
        body('endDate', 'End Date Required').exists({checkNull: true, checkFalsy: true}).isDate({format: 'yyyy-mm-dd'}),
        body('cashback', 'Cashback Required').exists({checkNull: true, checkFalsy: true}).isInt(),
        body('redemptionLimit', 'Invalid Redemption Limit').exists({checkNull: true, checkFalsy: true}).isInt(),
        body('budget', 'Invalid Budget').exists({checkNull: true, checkFalsy: true}).isInt(),
        body('minTransactions', 'Invalid Minimum Transaction').exists({checkNull: true, checkFalsy: true}).isInt()
    ]
};

export default {
    ruleSet
}
