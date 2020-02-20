const {
    createUser,
    createUserAmount,
    getUserAmount,
    getExistUserAmount,
    updateUserAmount
} = require('../controller');
const usersData = require('../dataStore');
const transaction = require('./transaction.mock');

describe('Functions for manipulating data storage', () => {
    test('Testing the createUser function', () => {
        createUser('natural_4');
        expect(usersData).toHaveProperty('natural_4');
    });

    test('Testing the createUserAmount function', () => {
        createUserAmount('natural_4', '2016_1', 600);
        expect(usersData).toHaveProperty('natural_4.2016_1');
        expect(usersData['natural_4']['2016_1']).toBe(600);
    });

    test('Testing the getUserAmount function', () => {
        expect(getUserAmount(transaction)).toBe(600);
    });

    test('Testing the getExistUserAmount function', () => {
        expect(getExistUserAmount('natural_4', '2016_1')).toBe(600);
    });

    test('Testing the updateUserAmount function', () => {
        updateUserAmount('natural_4', '2016_1', 600);
        expect(usersData['natural_4']['2016_1']).toBe(1200);
    });
});