const getStockValue = require("../adapters/StocksDAO");

const getStockData = async (stockID) => {
  try {
    const data = await getStockValue(stockID);
    return data.value;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getStockData,
};
