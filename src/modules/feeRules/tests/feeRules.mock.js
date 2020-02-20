const feeRuleData = [
    {
        data: {
            percents: 0.03,
            max: {
                amount: 5,
                currency: 'EUR'
            }
        }
    },
    {
        data: {
            percents: 0.3,
            week_limit: {
                amount: 1000,
                currency: 'EUR'
            }
        }
    },
    {
        data: {
            percents: 0.3,
            min: {
                amount: 0.5,
                currency: 'EUR'
            }
        }
    }
];

const setData = {
    cacheIn: {
        percents: 0.03,
        max: {
            amount: 5,
            currency: 'EUR'
        }
    },
    cashOut: {
        natural: {
            percents: 0.3,
            week_limit: {
                amount: 1000,
                currency: 'EUR'
            }
        },
        juridical: {
            percents: 0.3,
            min: {
                amount: 0.5,
                currency: 'EUR'
            }
        }
    }
};

const wrongData = [];

module.exports = {
    feeRuleData,
    setData,
    wrongData
};