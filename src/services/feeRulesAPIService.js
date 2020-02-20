const axios = require('axios');
const config = require('config');

const CashInUrl = config.get('feeRulesAPI.cashIn');
const CashOutNaturalUrl = config.get('feeRulesAPI.cashOutNatural');
const CashOutJuridicalUrl = config.get('feeRulesAPI.cashOutJuridical');

const feeRulesAPIService = async () => {
    return await axios.all([
        axios.get(CashInUrl),
        axios.get(CashOutNaturalUrl),
        axios.get(CashOutJuridicalUrl)
    ]);
};

module.exports = feeRulesAPIService;