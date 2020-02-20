const { getRuleData, setRuleData, isRuleDataEmpty } = require('../feeRules');
const { feeRuleData, setData, wrongData } = require('./feeRules.mock');

describe('Testing the module of fee rules', () => {
    test('Testing the isRuleDataEmpty function', () => {
        expect(isRuleDataEmpty()).toBeTruthy();
        setRuleData(feeRuleData);
        expect(isRuleDataEmpty()).toBeFalsy();
    });

    test('Test for data rule setter', () => {
        expect(() => setRuleData(wrongData)).toThrow();
        expect(getRuleData()).toStrictEqual(setData);
    });

    test('Checking the required properties of the rule object', () => {
        setRuleData(feeRuleData);

        const ruleData = getRuleData();

        expect(ruleData).toStrictEqual(setData);
        expect(ruleData).toHaveProperty('cacheIn.percents');
        expect(ruleData).toHaveProperty('cacheIn.max.amount');
        expect(ruleData).toHaveProperty('cashOut.natural.percents');
        expect(ruleData).toHaveProperty('cashOut.natural.week_limit.amount');
        expect(ruleData).toHaveProperty('cashOut.juridical.percents');
        expect(ruleData).toHaveProperty('cashOut.juridical.min.amount');
    });
});