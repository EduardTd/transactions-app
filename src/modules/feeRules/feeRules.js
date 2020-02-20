const ruleData = {
    cacheIn: null,
    cashOut: {
        natural: null,
        juridical: null
    }
};

const setRuleData = ([ cashIn, cashOutNatural, cashOutJuridical ]) => {
    try {
        ruleData.cacheIn = cashIn.data;
        ruleData.cashOut.natural = cashOutNatural.data;
        ruleData.cashOut.juridical = cashOutJuridical.data;
    } catch (error) {
        throw new Error(error);
    }
};

const getRuleData = () => {
    return ruleData;
};

const isRuleDataEmpty = () => {
    return !ruleData.cacheIn ||
           !ruleData.cashOut.natural ||
           !ruleData.cashOut.juridical;
};

module.exports = {
    setRuleData,
    getRuleData,
    isRuleDataEmpty
};