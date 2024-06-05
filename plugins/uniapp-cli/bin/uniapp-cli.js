#!/usr/bin/env node

// TODO 暂时处理安装目录包含特殊符号，导致 H5 预览资源加载失败的问题。
const matchSymbol = __dirname.match(/[()]/)
if (matchSymbol) {
    console.error(`编译失败：HBuilderX 安装目录不能包括 ${matchSymbol[0]} 等特殊字符`)
    process.exit(0)
}

const crypto = require('crypto');

/**
 * The MD4 algorithm is not available anymore in Node.js 17+ (because of library SSL 3).
 * In that case, silently replace MD4 by the MD5 algorithm.
 */
try {
    crypto.createHash('md4');
} catch (e) {
    // console.warn('Crypto "MD4" is not supported anymore by this Node.js version');
    const origCreateHash = crypto.createHash;
    crypto.createHash = (alg, opts) => {
        return origCreateHash(alg === 'md4' ? 'md5' : alg, opts);
    };
}

const fs = require('fs')
const path = require('path')

const {
    error
} = require('@vue/cli-shared-utils')
const yargsParser = require('yargs-parser')
const argv = yargsParser(process.argv.slice(2))
process.env.UNI_INPUT_DIR = path.resolve(process.env.UNI_INPUT_DIR)
process.env.UNI_OUTPUT_DIR = path.resolve(process.env.UNI_OUTPUT_DIR)
if (process.env.UNI_SCRIPT) {
    const {
        initCustomScript
    } = require('@dcloudio/uni-cli-shared/lib/package')

    initCustomScript(process.env.UNI_SCRIPT, path.resolve(process.env.UNI_INPUT_DIR, 'package.json'))
}

const Service = require('@vue/cli-service')

const vueConfigJsPath = path.resolve(process.env.UNI_INPUT_DIR, 'vue.config.js')

if (fs.existsSync(vueConfigJsPath)) {
    process.env.VUE_CLI_SERVICE_CONFIG_PATH = vueConfigJsPath
}

// @vue/cli-service/lib/Service.js
const service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd())

const args = {
    watch: process.env.NODE_ENV === 'development',
    minimize: process.env.UNI_MINIMIZE === 'true',
    clean: false,
    sourcemap: true,
}
if (argv['auto-port']) {
    args['auto-port'] = argv['auto-port']
}
if (argv['auto-host']) {
    args['auto-host'] = argv['auto-host']
}
const platform = process.env.UNI_SUB_PLATFORM || process.env.UNI_PLATFORM
service.run((process.env.NODE_ENV === 'development' && platform === 'h5') ? 'uni-serve' : 'uni-build',
    args).catch(err => {
    error(err)
    process.exit(1)
})
