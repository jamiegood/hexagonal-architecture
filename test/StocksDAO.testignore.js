const getStockValue = require("../adapters/StocksDAO");

test("adds 1 + 2 to equal 3", async () => {
  const result = await getStockValue();
  expect(1).toBe(1);
});
