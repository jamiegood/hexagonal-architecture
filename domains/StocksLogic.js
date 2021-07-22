const Currency = require("../ports/CurrencyService");
const Repository = require("../ports/StocksRepository");

const CURRENCIES = ["USD", "CAD", "AUD"];

const retrieveStockValues = async (stockID) => {
  try {
    const stockValue = await Repository.getStockData(stockID);
    const currencyList = await Currency.getCurrenciesData(CURRENCIES);

    console.log("CURRENCYLIST");
    console.log(currencyList);

    const stockWithCurrencies = {
      stock: stockValue.stockID,
      values: {
        EUR: stockValue.Value.toFixed(2),
      },
    };

    for (const currency in currencyList) {
      console.log("..." + currency);
      stockWithCurrencies.values[currency] = (
        stockValue.Value * currencyList[currency]
      ).toFixed(2);
    }
    console.log("do we get here PART 2222");

    return stockWithCurrencies;
  } catch (err) {
    console.log("do we get here?");
    return err;
  }
};

module.exports = {
  retrieveStockValues,
};
