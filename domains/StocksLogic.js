const Currency = require("../ports/CurrencyService");
const Repository = require("../ports/StocksRepository");

const CURRENCIES = ["USD", "CAD", "AUD"];

const retrieveStockValues = async (stockID) => {
  try {
    const stockValue = await Repository.getStockData(stockID);
    // const currencyList = await Currency.getCurrenciesData(CURRENCIES);

    const stockWithCurrencies = {
      stock: stockValue.stockID,
      values: {
        EUR: stockValue.value,
      },
    };

    // for (const currency in currencyList.rates) {
    //   stockWithCurrencies.values[currency] = (
    //     stockValue.VALUE * currencyList.rates[currency]
    //   ).toFixed(2);
    // }
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
