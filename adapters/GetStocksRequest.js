const HTTPHandler = require("../ports/HTTPHandler");

const getStocksRequest = async (res, stockID) => {
  let responseData = {};

  try {
    responseData = await HTTPHandler.retrieveStock(stockID);
    console.log(responseData);
  } catch (err) {
    console.log(err);
    return err;
  }

  return responseData;
};

module.exports = getStocksRequest;
