const CurrencyService = require("../ports/CurrencyService");
const StocksRepository = require("../ports/StocksRepository");

const CURRENCIES = ["USD", "CAD", "AUD"];

const retrieveStockValues = async (stockID) => {
  try {
    const stockValue = await StocksRepository.getStockData(stockID);

    const currencyList = await CurrencyService.getCurrenciesData(CURRENCIES);

    const stockWithCurrencies = {
      stock: stockValue.stockID,
      values: {
        EUR: stockValue.Value.toFixed(2),
      },
    };

    for (const currency in currencyList) {
      stockWithCurrencies.values[currency] = (
        stockValue.Value * currencyList[currency]
      ).toFixed(2);
    }

    return stockWithCurrencies;
  } catch (err) {
    return err;
  }
};

module.exports = {
  retrieveStockValues,
};
