"use strict";

const escapeHtml = require("escape-html");
const getStocksRequest = require('./adapters/GetStocksRequest')
/**
 * HTTP Cloud Function.
 * This function is exported by index.js, and is executed when
 * you make an HTTP request to the deployed function's endpoint.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.helloGET = (req, res) => {
  //res.send("Hello World!");

  try {
    //const stockID //get from req

    const response = getStocksRequest(req)
    return response;

  } catch (err) {
    console.error(err)
    //return err
    res.send("Hello World!");

  }




};
// [END functions_helloworld_get]

// [START functions_helloworld_http]
/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.helloHttp = (req, res) => {
  res.send(`Hello ${escapeHtml(req.query.name || req.body.name || "World")}!`);


  

};
// [END functions_helloworld_http]

/**
 * Background Cloud Function that throws an error.
 *
 * @param {object} event The Cloud Functions event.
 * @param {object} context The event metadata.
 * @param {function} callback The callback function.
 */

exports.helloError = (event, context, callback) => {
  // [START functions_helloworld_error]
  // These WILL be reported to Stackdriver Error Reporting
  console.error(new Error("I failed you"));
  console.error("I failed you", new Error("I failed you too"));
  throw new Error("I failed you"); // Will cause a cold start if not caught

  // [END functions_helloworld_error]
};
