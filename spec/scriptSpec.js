const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../src/script');

describe("Interest Rate Calculator Tests", () => {
    it("Calculate Simple Interest", () => {
        var simpleInterest = calculateSimpleInterest(1000, 5, 1);
        expect(simpleInterest).toBe(50);
    });

    it("Calculate Total Payable Amount", () => {
        var totalPayable = calculateTotalPayableAmount(1000, 50);
        expect(totalPayable).toBe(1050);
    });
})