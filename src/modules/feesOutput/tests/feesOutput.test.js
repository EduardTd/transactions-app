const { formatTaxOutput, printFee } = require('../feesOutput');

describe('Fees output testing', () => {
    test('Checking fee output to the console', () => {
        const output = jest.spyOn(process.stdout, 'write');
        printFee(0.3);

        expect(output).toHaveBeenCalledWith(`0.30\n`);
    });

    test('Checking formatted output', () => {
        expect(formatTaxOutput(0)).toBe('0.00');
    });
});