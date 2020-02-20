const transactions = [
    {
        date: '2016-01-05',
        user_id: 1,
        user_type: 'natural',
        type: 'cash_out',
        operation: {
            amount: 600.00,
            currency: 'EUR'
        }
    },
    {
        date: '2016-01-05',
        user_id: 1,
        user_type: 'natural',
        type: 'cash_out',
        operation: {
            amount: 500.00,
            currency: 'EUR'
        }
    },
    {
        date: '2016-01-12',
        user_id: 1,
        user_type: 'natural',
        type: 'cash_out',
        operation: {
            amount: 100.00,
            currency: 'EUR'
        }
    },
    {
        date: '2016-01-12',
        user_id: 1,
        user_type: 'natural',
        type: 'cash_out',
        operation: {
            amount: 1200.00,
            currency: 'EUR'
        }
    },
    {
        date: '2016-01-19',
        user_id: 1,
        user_type: 'natural',
        type: 'cash_out',
        operation: {
            amount: 1200.00,
            currency: 'EUR'
        }
    },
    {
        date: '2016-01-06',
        user_id: 2,
        user_type: 'juridical',
        type: 'cash_out',
        operation: {
            amount: 300.00,
            currency: 'EUR'
        }
    },
    {
        date: '2016-01-10',
        user_id: 2,
        user_type: 'juridical',
        type: 'cash_out',
        operation: {
            amount: 2.00,
            currency: 'EUR'
        }
    },
    {
        date: '2016-01-10',
        user_id: 2,
        user_type: 'does_not_exist',
        type: 'cash_out',
        operation: {
            amount: 2.00,
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