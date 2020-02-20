const usersData = require('./dataStore');

const userExist = (userName) => {
    return usersData.hasOwnProperty(userName);
};

const userAmountExist = ({ user_type, user_id, date }) => {
    const userName = getUserName({ user_type, user_id });
    const dataName = getDataName({ date });

    return userExist(userName) && usersData[userName].hasOwnProperty(dataName);
};

const getWeekOfYear = (dateString) => {
    const currentDate = new Date(dateString);
    const UTCDate = new Date(
        Date.UTC(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate()
        )
    );

    UTCDate.setUTCDate(
        UTCDate.getUTCDate() + 4 - (UTCDate.getUTCDay() || 7)
    );

    const yearStart = new Date(
        Date.UTC(UTCDate.getUTCFullYear(), 0, 1)
    );
    const weekNumber = Math.ceil(
        (((UTCDate - yearStart) / 86400000) + 1) / 7
    );
    const year = UTCDate.getUTCFullYear();

    return {
        weekNumber: weekNumber.toString(),
        year: year.toString()
    };
};

const getUserName = ({ user_type, user_id }) => {
    return `${user_type}_${user_id}`;
};

const getDataName = ({ date }) => {
    const { year, weekNumber } = getWeekOfYear(date);

    return `${year}_${weekNumber}`;
};

module.exports = {
    userExist,
    userAmountExist,
    getWeekOfYear,
    getUserName,
    getDataName
};



