const getStockValue = require("../adapters/StocksDAO");
const { getStockData } = require("../ports/StocksRepository");

jest.mock("../adapters/StocksDAO");
//const getStockValue = require("../adapters/StocksDAO");

test("StockResposity returns data", async () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  getStockValue.mockResolvedValue(resp);

  getStockData().then((data) => {
    console.log("DATA BEFEORE>>>>>");
    console.log(data);
    console.log("USERS BEFEORE>>>>>");
    console.log(users);

    expect(data).toEqual(resp);
  });
});
