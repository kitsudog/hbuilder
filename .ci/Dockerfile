ARG NODE_VERSION=18.20.0
FROM node:${NODE_VERSION}-slim
COPY app /demo
COPY plugins /node/
WORKDIR /node/uniapp-cli
ENV SOURCEMAP=true \
    NODE_ENV=production \
    UNI_INPUT_DIR=/demo \
    UNI_OUTPUT_DIR=/demo/unpackage/dist/build/h5 \
    UNI_PLATFORM=h5
RUN pwd && ls && node bin/uniapp-cli.js uni-build -p h5

