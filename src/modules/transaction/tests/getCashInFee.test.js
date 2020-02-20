const { getCashInFee } = require('../transaction');
const { setRuleData } = require('../../feeRules');
const cashInData = require('./cashIn.mock');
const feeRuleData = require('./feeRule.mock');

describe('Fees for cash-in', () => {
    test('Checking the getCashInFee function', () => {
        const expectValues = [0.06, 5];

        setRuleData(feeRuleData);

        cashInData.forEach((transaction, index) => {
            expect(getCashInFee(transaction)).toBe(expectValues[index]);
        });
    });
});