const { getCommissionFees } = require('../transaction');
const { setRuleData } = require('../../feeRules');
const transactions = require('./allTransactions.mock');
const feeRuleData = require('./feeRule.mock');

describe('Transaction fees', () => {
    test('Checking all transaction fee values', () => {
        const expectValues = [0, 0.3, 0.06, 0.9, 87, 3, 0.3, 0.3, 5, 0, 0];

        setRuleData(feeRuleData);
        const commissionFees = getCommissionFees(transactions);

        commissionFees.forEach((fee, index) => {
            expect(fee).toBe(expectValues[index]);
        });
    });
});