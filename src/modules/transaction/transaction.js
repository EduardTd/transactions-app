const cashIn = require('../cashIn');
const cashOut = require('../cashOut');
const { transactionTypes } = require('../../types');

const CashIn = transactionTypes.cashIn;
const CashOut = transactionTypes.cashOut;

const getCommissionFees = (transactionData) => {
    return Object.keys(transactionData).map((key) => {
        const errorMessage = 'Undefined transaction type';

        if (!transactionData.hasOwnProperty(key)) {
            return errorMessage;
        }

        const transactionFee = getTransactionFee(transactionData[key]);

        if (typeof transactionFee !== 'number') {
            return errorMessage;
        }

        return transactionFee;
    })
};

const getTransactionFee = (transaction) => {
    if (transaction.type === CashIn) {
        return getCashInFee(transaction);
    }

    if (transaction.type === CashOut) {
        return getCashOutFee(transaction);
    }
};

const getCashInFee = (transaction) => {
    const commissionFee = cashIn(transaction);

    if (typeof commissionFee !== 'number') {
        return;
    }

    return commissionFee;
};

const getCashOutFee = (transaction) => {
    const commissionFee = cashOut(transaction);

    if (typeof commissionFee !== 'number') {
        return;
    }

    return commissionFee;
};

module.exports = {
    getCommissionFees,
    getTransactionFee,
    getCashInFee,
    getCashOutFee
};