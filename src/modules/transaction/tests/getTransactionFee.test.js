const { getTransactionFee } = require('../transaction');
const { setRuleData } = require('../../feeRules');
const transactions = require('./allTransactions.mock');
const feeRuleData = require('./feeRule.mock');

describe('Fee for each transaction', () => {
    test('Checking each transaction fee values', () => {
        const expectValues = [0, 0.3, 0.06, 0.9, 87, 3, 0.3, 0.3, 5, 0, 0];

        setRuleData(feeRuleData);

        transactions.forEach((transaction, index) => {
            expect(getTransactionFee(transaction)).toBe(expectValues[index]);
        });
    });
});