const cashIn = require('../cashIn');
const { setRuleData } = require('../../feeRules');
const { transactions, feeRuleData } = require('./cashIn.mock');

describe('Cash-in transactions', () => {
    test('Checking fee value', () => {
        const expectValues = [0.06, 5, null];

        setRuleData(feeRuleData);

        transactions.forEach((transaction, index) => {
            expect(cashIn(transaction)).toBe(expectValues[index]);
        })
    });
});