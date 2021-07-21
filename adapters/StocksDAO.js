const { Datastore } = require("@google-cloud/datastore");

const datastore = new Datastore();

require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config();

console.log("Token from Datastore");

const getStockValue = async (stockID = "AMZN") => {
  const query = datastore
    .createQuery("Stocks")
    .filter("stockID", "=", stockID)
    .limit(1);

  try {
    //const stockData = await documentClient.get(params).promise()
    const [stocks] = await datastore.runQuery(query);

    console.log(stocks);
    return stocks[0];
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = getStockValue;
