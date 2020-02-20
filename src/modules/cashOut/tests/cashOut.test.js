const cashOut = require('../cashOut');
const { setRuleData } = require('../../feeRules');
const { transactions, feeRuleData } = require('./cashOut.mock');

describe('Cash-out transactions', () => {
    test('Checking fees value', () => {
        const expectValues = [0, 0.3, 0, 0.9, 0.6, 0.9, 0.5, null, null];

        setRuleData(feeRuleData);

        transactions.forEach((transaction, index) => {
            expect(cashOut(transaction)).toBe(expectValues[index]);
        });
    });
});