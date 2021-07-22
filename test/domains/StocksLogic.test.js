const { getCurrenciesData } = require("../../ports/CurrencyService");
const { getStockData } = require("../../ports/StocksRepository");

const { retrieveStockValues } = require("../../domains/StocksLogic");

jest.mock("../../ports/CurrencyService");
jest.mock("../../ports/StocksRepository");

test("StocksLogic returns chosen stock and currency", async () => {
  const testCurrrency = { USD: 1, CAD: 2, AUD: 4 };

  getCurrenciesData.mockResolvedValue(testCurrrency);

  const testStock = {
    stockID: "AAPL",
    Value: 2,
  };

  getStockData.mockResolvedValue(testStock);

  const resultStockCurrency = {
    stock: "AAPL",
    values: { EUR: "2.00", USD: "1.00", CAD: "4.00", AUD: "8.00" },
  };

  retrieveStockValues()
    .then(async (data) => {
      expect(data.values.EUR).toEqual(resultStockCurrency.values.EUR);
      expect(data.values.CAD).toEqual(resultStockCurrency.values.CAD);
      expect(data.values.AUD).toEqual(resultStockCurrency.values.AUD);
    })
    .catch((err) => {
      console.log(err);
    });
});
