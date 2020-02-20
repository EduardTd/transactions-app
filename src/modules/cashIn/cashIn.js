const isEmpty = require('is-empty');
const getTaxValue = require('../../utils/getTaxValue');
const { getRuleData } = require('../feeRules');

const cashIn = (transaction) => {
    const ruleData = getRuleData();
    const cashInRule = ruleData.cacheIn;

    if (isEmpty(transaction) || !cashInRule) {
        return null;
    }

    const maxTax = cashInRule.max.amount;
    const feeValue = cashInRule.percents;
    const operationAmount = transaction.operation.amount;
    const taxValue = getTaxValue(operationAmount, feeValue);

    return taxValue > maxTax ? maxTax : taxValue;
};

module.exports = cashIn;