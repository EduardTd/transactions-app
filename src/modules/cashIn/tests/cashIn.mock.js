const transactions = [
    {
        date: '2016-01-05',
        user_id: 1,
        user_type: 'natural',
        type: 'cash_in',
        operation: {
            amount: 200.00,
            currency: 'EUR'
        }
    },
    {
        date: '2016-01-10',
        user_id: 2,
        user_type: 'juridical',
        type: 'cash_in',
        operation: {
            amount: 1000000.00,
            currency: 'EUR'
        }
    },
    {}
];

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

module.exports = { transactions, feeRuleData };