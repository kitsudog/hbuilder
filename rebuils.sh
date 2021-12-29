rsync -aP /Applications/HBuilderX.app/Contents/HBuilderX/plugins .

NODE_VERSION=$(./plugins/node/node --version|cut -c2-)
ESBUILD_VERSION=$(./plugins/uniapp-cli-vite/node_modules/esbuild-darwin-64/bin/esbuild --version)
VERSION=$(cat ./plugins/uniapp-cli-vite/package.json|grep version|cut -d: -f2|cut -d- -f2|cut -d'"' -f1)
if [ $NODE_VERSION = 12.22.1 ]
then
  docker build . -f Dockerfile -t kitsudo/hbuilder:${VERSION} --build-arg NODE_VERSION=${NODE_VERSION} --build-arg ESBUILD_VERSION=${ESBUILD_VERSION}
else
  echo 请更新Dockerfile
fi