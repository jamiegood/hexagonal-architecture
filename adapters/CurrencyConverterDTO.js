const axios = require("axios");
require("dotenv").config();

// Get API_KEY from data.fixed.io
const CURRENCY_API_KEY = process.env.CURRENCY_API_KEY;

const getCurrencies = async (currencies = "USD") => {
  try {
    const res = await axios.get(
      `http://data.fixer.io/api/latest?access_key=${CURRENCY_API_KEY}&symbols=${currencies.toString()}`
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

module.exports = getCurrencies;
