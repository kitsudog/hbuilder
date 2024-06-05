"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const fs=require("fs"),jsonc_1=require("jsonc"),path=require("path"),vscode_languageserver_protocol_1=require("vscode-languageserver-protocol"),vscode_uri_1=require("vscode-uri"),core_1=require("../../../core"),specialStringPlugin_1=require("../../../specialStringPlugin"),uniCloudUtils_1=require("../utils/uniCloudUtils"),baseHandler_1=require("./baseHandler");class RequireCommonHandler extends baseHandler_1.UniBaseHandler{async doCompleteAsync(e,t,r,n,i){let o=i,s=vscode_uri_1.URI.parse(e.uri).fsPath;if((0,uniCloudUtils_1.getCloudFunctionOrObjectName)(s)){let t=(0,uniCloudUtils_1.getCloudFunctionOrObjectRoot)(s);if(t){let n=(0,specialStringPlugin_1.getCompletionPathListSync)(r.project.fsPath,t,{extSuffixFilterList:[".js"]},e.uri);n&&(console.log("t"),o.push(...(0,specialStringPlugin_1.getPathCompletionItem)(n,e,r.range,r,!1,!1)));let i=path.join(t,"package.json");if(fs.existsSync(i)){let[e,t]=jsonc_1.jsonc.safe.parse(fs.readFileSync(i).toString());if(!e&&t.dependencies){let e=t.dependencies;for(let t of Object.keys(e))e[t].startsWith("file:")&&o.push({label:t,kind:vscode_languageserver_protocol_1.CompletionItemKind.Property,documentation:t})}}o=o.filter((e=>{if(e.documentation&&e.documentation.value){const r=path.join(e.documentation.value);return!path.relative(t,r).replace(/\\/g,"/").startsWith("../")}return!0}))}}return o}async doDefinitionAsync(e,t,r,n,i){let o=path.resolve(r.project.fsPath,"package.json");if(!fs.existsSync(o))return[];let[s,l]=jsonc_1.jsonc.safe.parse(fs.readFileSync(o).toString());if(!s&&l.dependencies){let t=l.dependencies,n=e.getText(r.range);for(let e of Object.keys(t))if(e==n&&t[e].startsWith("file:")){let n=t[e].substring(5).trim();return[{targetUri:path.resolve(o,n),targetRange:(0,core_1.getNullRange)(),targetSelectionRange:(0,core_1.getNullRange)(),originSelectionRange:r.range}]}}return[]}}exports.default=RequireCommonHandler;