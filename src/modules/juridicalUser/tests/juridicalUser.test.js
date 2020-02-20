const juridicalUser = require('../juridicalUser');
const { setRuleData } = require('../../feeRules');
const { transactions, feeRuleData } = require('./juridicalUser.mock');

describe('Fees for juridical user', () => {
    test('Checking fees value for cash-out from a juridical user', () => {
        const expectValues = [0.9, 0.5];

        setRuleData(feeRuleData);

        transactions.forEach((transaction, index) => {
            expect(juridicalUser(transaction)).toBe(expectValues[index]);
        })
    });
});