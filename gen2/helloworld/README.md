# NodeJS Sample hello world

## Deploy the function

```sh
gcloud functions deploy nodejs-http-function \
--gen2 \
--region=us-central1 \
--source=. \
--allow-unauthenticated \
--entry-point=hello \
--trigger-http
```
