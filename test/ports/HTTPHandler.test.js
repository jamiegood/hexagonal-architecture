const { retrieveStockValues } = require("../../domains/StocksLogic");
const { retrieveStock } = require("../../ports/HTTPHandler");

jest.mock("../../domains/StocksLogic");

test("HTTPHandler returns chosen stock and currencies", async () => {
  const testStockWithCurrency = {
    stock: "AAPL",
    values: { EUR: "4.00" },
  };

  retrieveStockValues.mockResolvedValue(testStockWithCurrency);

  retrieveStock().then((data) => {
    expect(data).toEqual(testStockWithCurrency);
  });
});
