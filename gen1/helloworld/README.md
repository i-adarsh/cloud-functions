# NodeJS Sample hello world

## Deploy the function

```sh
gcloud functions deploy sample-hello-gen1 \
--runtime nodejs20 \
--region=asia-east1 \
--source=. \
--allow-unauthenticated \
--entry-point=hello \
--trigger-http
```

```sh
gcloud functions deploy sample-hello-gen1 \
--runtime nodejs20 \
--region=asia-east1 \
--allow-unauthenticated \
--entry-point=hello \
--trigger-http
```
