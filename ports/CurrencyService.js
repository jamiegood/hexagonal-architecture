const getCurrencies = require("../adapters/CurrencyConverterDTO");

const getCurrenciesData = async (currencies) => {
  try {
    const data = await getCurrencies(currencies);
    return data.rates;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getCurrenciesData,
};
