# NodeJS Sample hello world

## JavaScript heap out of memory

For Node.js 18+ functions with memory limits greater than 2GiB, users need to configure NODE_OPTIONS to have max_old_space_size so that the JavaScript heap limit is equivalent to the function's memory limit.

```sh
gcloud functions deploy nodejs-sample-oom \
--gen2 \
--runtime=nodejs20 \
--region=us-central1 \
--source=. \
--allow-unauthenticated \
--entry-point=oom \
--trigger-http
```

Deploy your Node.js 18+ function, with NODE_OPTIONS configured to have max_old_space_size set to your function's memory limit

```sh
gcloud functions deploy nodejs-sample-oom-high-memory \
--gen2 \
--runtime=nodejs20 \
--set-env-vars NODE_OPTIONS="--max_old_space_size=8192" \
--memory 8Gi \
--region=us-central1 \
--source=. \
--allow-unauthenticated \
--entry-point=oom \
--trigger-http
```
