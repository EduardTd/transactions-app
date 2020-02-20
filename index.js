const inputFileService = require('./src/services/inputFileService');
const feeRulesAPIService = require('./src/services/feeRulesAPIService');
const { setRuleData } = require('./src/modules/feeRules');
const { feesOutput } = require('./src/modules/feesOutput');
const { isRuleDataEmpty } = require('./src/modules/feeRules');
const getCommissionFees = require('./src/modules/transaction');
const isEmpty = require('is-empty');

const errorMessage = 'Transaction or rule data is empty';

feeRulesAPIService()
    .then((ruleData) => {
        setRuleData(ruleData);

        inputFileService()
            .then(transactionData => {
                if (isEmpty(transactionData) || isRuleDataEmpty()) {
                    throw new Error(errorMessage);
                }

                const commissionFees = getCommissionFees(transactionData);

                feesOutput(commissionFees);
            })
            .catch((error) => {
                throw new Error(error);
            });
    })
    .catch((error) => {
        throw new Error(error);
    });



