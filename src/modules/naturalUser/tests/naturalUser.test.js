const naturalUser = require('../index');
const { setRuleData } = require('../../feeRules');
const { transactions, feeRuleData } = require('./naturalUser.mock');

describe('Fees for natural user', () => {
    test('Checking fees value for cash-out from a natural user', () => {
        const expectValues = [0, 0.3, 0, 0.9, 0.6];

        setRuleData(feeRuleData);

        transactions.forEach((transaction, index) => {
            expect(naturalUser(transaction)).toBe(expectValues[index]);
        })
    });
});