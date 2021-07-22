<img src="https://thefullstack.network/assets/thefullstack.svg" alt="The Full Stack Network logo" title="The Full Stack Network" align="right" height="96" width="96"/>
# Google Cloud Functions - Hexagonal Architecture Cloud Function Example

## References:

- [Developing Evolutoinary Architecture with AWS Lambda](https://aws.amazon.com/blogs/compute/developing-evolutionary-architecture-with-aws-lambda/)
- [Cloud Functions Hello World sample source code][code]

## Summary:

Inspired by Luca Mezzalira and his article [Developing Evolutoinary Architecture with AWS Lambda](https://aws.amazon.com/blogs/compute/developing-evolutionary-architecture-with-aws-lambda/) I created a Google Cloud Platform version.

- Google Cloud Function instead of AWS Lambda
- Datastore instead of DynamoDB

## Dependencies

- Gcloud SDK set locally and authorised
- GCP Project setup for deploying to
- GCP Datastore enable and containing stocks data. See adapters/StocksDAO.js
- API_KEY for currency api at http://data.fixer.io

## Run locally

Install deps

        npm install

Run locally

        npm start

## Run Test

        npm test

## Deploy to GCP

```
gcloud functions deploy stocksGET --runtime [YOUR_RUNTIME] --trigger-http
```

- Replace `[YOUR_RUNTIME]` with the name of the runtime you are using. I.E. nodejs14

For a complete list, see the [gcloud reference](https://cloud.google.com/sdk/gcloud/reference/functions/deploy#--runtime).
