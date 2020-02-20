const { getCashOutFee } = require('../transaction');
const { setRuleData } = require('../../feeRules');
const cashOutData = require('./cashOut.mock');
const feeRuleData = require('./feeRule.mock');

describe('Fees for cash-out', () => {
    test('Checking the getCashOutFee function', () => {
        const expectValues = [0, 0.3, 0.9, 87, 3, 0.3, 0.3, 0, 0];

        setRuleData(feeRuleData);

        cashOutData.forEach((transaction, index) => {
            expect(getCashOutFee(transaction)).toBe(expectValues[index]);
        });
    });
});