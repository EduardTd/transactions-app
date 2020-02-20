const usersData = require('./dataStore');
const { getUserName, getDataName, userAmountExist, userExist } = require('./utils');

const createUser = (userName) => {
    usersData[userName] = {};
};

const createUserAmount = (userName, dataName, currentAmount) => {
    if (!userExist(userName)) {
        createUser(userName);
    }

    usersData[userName][dataName] = currentAmount;
};

const getUserAmount = ({ user_type, user_id, date }) => {
    const userName = getUserName({ user_type, user_id });
    const dataName = getDataName({ date });

    if (!userAmountExist({ user_type, user_id, date })) {
        return 0;
    }

    return usersData[userName][dataName];
};

const getExistUserAmount = (userName, dataName) => {
    return usersData[userName][dataName];
};

const updateUserAmount = (userName, dataName, currentAmount) => {
    const oldAmount = getExistUserAmount(userName, dataName);
    const amountTotal = oldAmount + currentAmount;

    usersData[userName][dataName] = amountTotal;
};

module.exports = {
    createUser,
    createUserAmount,
    getUserAmount,
    getExistUserAmount,
    updateUserAmount
};
