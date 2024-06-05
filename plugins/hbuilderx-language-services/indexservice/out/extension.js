"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.deactivate=exports.activate=void 0;const fs=require("fs"),path=require("path"),vscode=require("vscode"),node_1=require("vscode-languageclient/node"),core_1=require("../../core"),pipeName_1=require("../../lib/pipeName"),client_1=require("../../utils/client"),api_1=require("./api/api"),commandManager_1=require("./commands/commandManager"),editorWatch_1=require("./event/editorWatch");let client,clientReady=!1;function initIndexProcessors(e){const t=[],r=e.extensionPath;return["jsservice","styleservice","htmlservice","vueservice","stylusservice","independentIndexer"].forEach((e=>{var n;let o=path.join(r,e,"package.json");if(!fs.existsSync(o)||!fs.statSync(o).isFile())return void console.log("[IndexServer] indexServer Path Not Find, Path: ",o);const i=fs.readFileSync(o).toString(),s=(0,core_1.tryCatchJSONParse)(i);if(!(null===(n=null==s?void 0:s.contributes)||void 0===n?void 0:n.indexProcessors))return void console.log("[IndexServer] Object`indexProcessors` Not Find, Path: ",o);s.contributes.indexProcessors.forEach((e=>{e.url?(e.url=path.join(path.dirname(o),e.url),fs.existsSync(e.url)&&fs.statSync(e.url).isFile()?t.push(e):console.log("[IndexServer] File`indexProcessors.url` Not Find, Path: ",e.url)):console.log("[IndexServer] Object`indexProcessors.url` Not Find, Path: ",o)}))})),t}function activate(e){const t=e.asAbsolutePath(path.join("indexservice","out","server","server.js"));let r;r=e.extensionMode==vscode.ExtensionMode.Development?{execArgv:["--nolazy","--inspect=6509"]}:{execArgv:["--nolazy"]};const n={run:{module:t,transport:node_1.TransportKind.ipc},debug:{module:t,transport:node_1.TransportKind.ipc,options:r}},o={},i=vscode.workspace.getConfiguration("indexService");o["logger.logLevel"]=i.get("logger.logLevel","normal"),o["logger.logType"]=i.get("logger.logType",["error"]);const s={documentSelector:core_1.supportLanguages,synchronize:{fileEvents:vscode.workspace.createFileSystemWatcher(core_1.supportNameGlob)},outputChannel:new client_1.LogRedirectOutputChannel("LanguageServerIndex"),initializationOptions:{pipeName:pipeName_1.default.createIndexPipeName(),indexProcessors:initIndexProcessors(e),configList:o,processId:process.pid}};client=new node_1.LanguageClient("LanguageServerIndex","LanguageServerIndex",n,s),client.start(),client.onReady().then((()=>{clientReady=!0,e.subscriptions.push((0,editorWatch_1.watchActivateTextEditor)(client))}));return new commandManager_1.CommandManager(client).getCommandList().forEach((t=>{e.subscriptions.push(t)})),{getIndexData:e=>(0,api_1.getIndexData)(client,e)}}function deactivate(){if(client)return client.stop()}exports.activate=activate,exports.deactivate=deactivate;