<img src="https://thefullstack.network/assets/thefullstack.svg" alt="The Full Stack Network logo" title="The Full Stack Network" align="right" height="96" width="96"/>
# Google Cloud Functions - Hex Architecture Cloud Function Example

See:

- [Cloud Functions Hello World tutorial][tutorial]
- [Cloud Functions Hello World sample source code][code]

[tutorial]: https://cloud.google.com/functions/docs/quickstart
[code]: index.js

## Run locally

         npm start

## Deploy and run the sample

See the [Cloud Functions Hello World tutorial][tutorial].

**Note:** in order for the tests to run properly, you'll have to deploy some of the sample functions:

```
gcloud functions deploy helloHttp --runtime [YOUR_RUNTIME] --trigger-http
```

- Replace `[YOUR_RUNTIME]` with the name of the runtime you are using. For a
  complete list, see the [gcloud reference](https://cloud.google.com/sdk/gcloud/reference/functions/deploy#--runtime).

## Run the tests

1.  Read and follow the [prerequisites](../../../../#prerequisites).

1.  Install dependencies:

        npm install

1.  Set the following environment variables:

        export GCF_REGION=europe-west1

1.  Run the app locally

        npm start

1.  Run the test

        npm test
