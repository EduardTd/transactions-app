const getTaxValue = require('../../utils/getTaxValue');
const { userDataStore } = require('../userDataStore');
const { getRuleData } = require('../feeRules');
const { getUserAmount } = require('../userDataStore/controller');

const naturalUser = (transaction) => {
    const taxValue = calculateTaxValue(transaction);
    userDataStore(transaction);

    return taxValue;
};

/**
 * If total cash-out amount is exceeded week limit,
 * commission is calculated only from exceeded amount
 */
const calculateTaxValue = (transaction) => {
    const { weekLimit } = getRules();
    const transactionAmount = transaction.operation.amount;
    const userAmount = getUserAmount(transaction);

    if (
        !userAmount &&
        transactionAmount > weekLimit
    ) {
        return freeLimitExceeded(transactionAmount);
    }

    if (userAmount > weekLimit) {
        return weeklyLimitExceeded(transactionAmount);
    }

    const totalAmount = userAmount + transactionAmount;

    if (totalAmount > weekLimit) {
        return freeLimitExceeded(totalAmount)
    }

    return 0;
};

const getRules = () => {
    const ruleData = getRuleData();
    const cashOutRules = ruleData.cashOut.natural;
    const feeValue = cashOutRules.percents;
    const weekLimit = cashOutRules.week_limit.amount;

    return {
        feeValue,
        weekLimit
    }
};

const freeLimitExceeded = (transactionAmount) => {
    const { feeValue, weekLimit } = getRules();
    const different = transactionAmount - weekLimit;

    return getTaxValue(different, feeValue);
};

const weeklyLimitExceeded = (transactionAmount) => {
    const { feeValue } = getRules();

    return getTaxValue(transactionAmount, feeValue);
};

module.exports = naturalUser;