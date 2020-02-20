const isEmpty = require('is-empty');
const juridicalUser = require('../juridicalUser');
const naturalUser = require('../naturalUser');
const { userTypes } = require('../../types');

const Juridical = userTypes.juridical;
const Natural =  userTypes.natural;

const cashOut = (transaction) => {
    if (isEmpty(transaction)) {
        return null;
    }

    if (transaction.user_type === Juridical) {
        return juridicalUser(transaction);
    }

    if (transaction.user_type === Natural) {
        return naturalUser(transaction);
    }

    return null;
};

module.exports = cashOut;