const getStockValue = require("../adapters/StocksDAO");

test("adds 1 + 2 to equal 3", () => {
  const result = await getStockValue();
  expect(sum(1, 2)).toBe(3);
});
