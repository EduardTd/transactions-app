const feesOutput = (commissionFees) => {
    commissionFees.forEach(printFee);
};

const printFee = (fee) => {
    const formattedFee = formatTaxOutput(fee);

    process.stdout.write(`${formattedFee}\n`);
};

const formatTaxOutput = (value) => {
    return value.toFixed(2);
};

 module.exports = {
     feesOutput,
     printFee,
     formatTaxOutput
 };