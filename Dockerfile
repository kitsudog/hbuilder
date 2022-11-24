ARG NODE_VERSION=12.22.1
FROM node:${NODE_VERSION}-slim
WORKDIR /node/uniapp-cli-vite
ENV NODE_ENV=production \
    UNI_INPUT_DIR=/app \
    UNI_OUTPUT_DIR=/app/unpackage/dist/build/h5 \
    UNI_PLATFORM=h5
COPY app /demo
COPY plugins/ /node
ARG ESBUILD_VERSION=0.13.15
RUN mkdir /es && cd /es && npm i esbuild@${ESBUILD_VERSION} && cp -r /es/node_modules/esbuild /node/uniapp-cli-vite/node_modules/ && cp -r /es/node_modules/esbuild-linux-64 /node/uniapp-cli-vite/node_modules/ && rm -fr /root/.npm /es
RUN node node_modules/@dcloudio/vite-plugin-uni/bin/uni.js build
CMD node node_modules/@dcloudio/vite-plugin-uni/bin/uni.js build --help

