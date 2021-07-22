const axios = require("axios");

const API_KEY = process.env.API_KEY;

let currencyRates = {};
currencyRates["USD"] = 0.5;
currencyRates["CAD"] = 1.0;
currencyRates["AUD"] = 2.0;

const getCurrencies = async (currencies) => {
  // try {
  //   // replace with  URL from the service
  //   const res = await axios.get(
  //     `http://api.mysite.com?access_key=${API_KEY}&symbols=${currencies.toString()}`
  //   );
  //   return res.data;
  // } catch (err) {
  //   return err;
  // }
  // console.log("currencyRates");
  // console.log(currencyRates);
  // console.log("FINSIH currencyRates");

  return currencyRates;
};

module.exports = getCurrencies;
