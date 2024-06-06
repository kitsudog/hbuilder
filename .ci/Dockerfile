ARG NODE_VERSION=18.20.0
FROM node:${NODE_VERSION}-slim
RUN npm install -g @sentry/cli
RUN apt-get update && apt-get install -y --reinstall ca-certificates && rm -rf /var/lib/apt/list/*
COPY app /demo
COPY plugins /node/
ENV SOURCEMAP=true \
    NODE_ENV=production \
    UNI_PLATFORM=h5
ENV UNI_INPUT_DIR=/demo \
    UNI_OUTPUT_DIR=/demo/unpackage/dist/build/h5
WORKDIR /node/uniapp-cli
RUN node bin/uniapp-cli.js uni-build -p h5

