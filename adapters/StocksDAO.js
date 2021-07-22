const { Datastore } = require("@google-cloud/datastore");

const datastore = new Datastore();

require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config();

const getStockValue = async (stockID = "AAPL") => {
  const query = datastore
    .createQuery("Stocks")
    .filter("stockID", "=", stockID)
    .limit(1);

  try {
    const [stocks] = await datastore.runQuery(query);

    return stocks[0];
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = getStockValue;
