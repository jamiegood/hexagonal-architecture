const HTTPHandler = require("../ports/HTTPHandler");

const getStocksRequest = async (stockID) => {
  let responseData = {};

  try {
    responseData = await HTTPHandler.retrieveStock(stockID);
  } catch (err) {
    console.log(err);
    return err;
  }

  return responseData;
};

module.exports = getStocksRequest;
