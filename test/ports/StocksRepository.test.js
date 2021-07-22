const getStockValue = require("../../adapters/StocksDAO");
const { getStockData } = require("../../ports/StocksRepository");

jest.mock("../../adapters/StocksDAO");

test("StockResposity returns data", async () => {
  const testStock = {
    stockID: "AAPL",
    Value: 4,
  };
  getStockValue.mockResolvedValue(testStock);

  getStockData().then((data) => {
    expect(data).toEqual(testStock);
  });
});
