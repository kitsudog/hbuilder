set -x
rsync -a /Applications/HBuilderX.app/Contents/HBuilderX/plugins .
NODE_VERSION=$(./plugins/node/node --version|cut -c2-)
ESBUILD_VERSION=$(./plugins/uniapp-cli-vite/node_modules/esbuild/bin/esbuild --version)
VERSION=$(cat ./plugins/uniapp-cli-vite/package.json|jq .version -r)
git clean -xdf
docker build --platform linux/amd64 . -f .ci/Dockerfile -t kitsudo/hbuilder:${VERSION} --build-arg NODE_VERSION=${NODE_VERSION} --build-arg ESBUILD_VERSION=${ESBUILD_VERSION} --progress plain
