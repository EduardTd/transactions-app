const { userExist, userAmountExist, getUserName, getDataName } = require('./utils');
const { createUser, createUserAmount, updateUserAmount } = require('./controller');

const userDataStore = (transaction) => {
    const { user_type, user_id, date, operation } = transaction;
    const userName = getUserName({ user_type, user_id });
    const dataName = getDataName({ date });
    const currentAmount = operation.amount;

    if (!userExist(userName)) {
        createUser(userName);
        createUserAmount(userName, dataName, currentAmount);

        return;
    }

    if (!userAmountExist(transaction)) {
        createUserAmount(userName, dataName, currentAmount);

        return;
    }

    updateUserAmount(userName, dataName, currentAmount);
};

module.exports = userDataStore;