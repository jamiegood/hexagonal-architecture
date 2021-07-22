"use strict";

const getStocksRequest = require("./adapters/GetStocksRequest");

exports.stocksGET = async (req, res) => {
  try {
    const responseData = await getStocksRequest(req.query.stockid);
    res.send(responseData);
  } catch (err) {
    console.error(err);

    res.send(err);
  }
};
