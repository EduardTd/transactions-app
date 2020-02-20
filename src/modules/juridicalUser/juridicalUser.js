const getTaxValue = require('../../utils/getTaxValue');
const { getRuleData } = require('../feeRules');

const juridicalUser = (transaction) => {
    return calculateTaxValue(transaction);
};

const calculateTaxValue = (transaction) => {
    const { minTax, feeValue } = getRules();
    const operationAmount = transaction.operation.amount;
    const taxValue = getTaxValue(operationAmount, feeValue);

    return taxValue < minTax ? minTax : taxValue;
};

const getRules = () => {
    const ruleData = getRuleData();
    const cashOutRules = ruleData.cashOut.juridical;
    const feeValue = cashOutRules.percents;
    const minTax = cashOutRules.min.amount;

    return {
        minTax,
        feeValue
    }
};

module.exports = juridicalUser;