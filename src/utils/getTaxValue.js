const getTaxValue = (value, feeValue) => {
    const calculated = value * feeValue / 100;
    const rounded = Math.round(parseFloat((calculated * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);

    return rounded;
};

module.exports = getTaxValue;