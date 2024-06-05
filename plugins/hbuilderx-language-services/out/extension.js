"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.deactivate=exports.activate=void 0;const fs=require("fs"),path=require("path"),vscode=require("vscode"),nls=require("vscode-nls"),utils_1=require("../utils"),api_1=require("./api/api"),localize=nls.loadMessageBundle();let servicesDir=["jsservice","stylusservice","emmet"],services=[];function activatePackage(e,r){let a;try{const s=require(e);s.activate&&(a=s.activate(r),services.push(s))}catch(r){console.error(e,"activate failed.",r)}return a}function isZH_CN(){try{if(process.env.VSCODE_NLS_CONFIG)return"zh_CN"===JSON.parse(process.env.VSCODE_NLS_CONFIG).locale}catch(e){console.error(null==e?void 0:e.stack)}return!0}function activate(e){let r=[];vscode.window.setStatusBarMessage(localize("serverLoading.progress",isZH_CN()?"正在初始化语法助手服务...":"Initializing language server..."));const a=e.extensionPath,s=activatePackage(e.asAbsolutePath("./indexservice"),e);function t(){return r}return r.push({service:"indexservice",exports:s}),servicesDir.forEach((s=>{let t=path.join(a,s);fs.existsSync(t)&&fs.statSync(t).isDirectory()&&Promise.resolve(t).then((a=>{let t=activatePackage(a,e);r.push({service:s,exports:t})}))})),vscode.workspace.registerSnippetVariableResolver("clogvar",(()=>(0,utils_1.getNearestVar)(vscode))),vscode.workspace.registerSnippetVariableResolver("nearestVar",(()=>(0,utils_1.getNearestVar)(vscode))),vscode.window.setStatusBarMessage(localize("serverLoading.progress.success",isZH_CN()?"语法助手服务启动成功":"Initializing language server successed."),5e3),{getLanguageServiceExports:t,locateDOMNodeInFile:api_1.locateDOMNodeInFile,locateDOMNodeToPath:api_1.locateDOMNodeToPath,invokeApi(e){if(!e.serverName||!e.apiName)throw new Error("Invalid arguments: serverName and apiName can not be null!");let r=t();for(const a of r)if(a.service===e.serverName){if(a.exports[e.apiName])return a.exports[e.apiName](e.args);throw new Error(`The api ${e.apiName} can not find in ${e.serverName}.`)}}}}function deactivate(){services.forEach((e=>{var r;null===(r=e.deactivate)||void 0===r||r.call(e)}))}exports.activate=activate,exports.deactivate=deactivate;