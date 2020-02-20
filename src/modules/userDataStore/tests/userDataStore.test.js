const userDataStore = require('../userDataStore');
const usersData = require('../dataStore');
const transaction = require('./transaction.mock');

describe('User data storage for cash-out data', () => {
    test('Create user cash-out data', () => {
        userDataStore(transaction);

        expect(usersData).toHaveProperty('natural_4');
        expect(usersData).toHaveProperty('natural_4.2016_1');
        expect(usersData).toHaveProperty('natural_4.2016_1', 600);
    });
});