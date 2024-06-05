"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hx=void 0;const fs=require("fs"),path=require("path"),vscode_languageserver_1=require("vscode-languageserver"),vscode_uri_1=require("vscode-uri"),core_1=require("../../../core"),type_resolve_1=require("../common/type-resolve"),vueVersion_1=require("../vueParse/vueVersion"),languageServiceProxy_1=require("./languageServiceProxy"),uniCloudTypeHelper_1=require("./uniCloudTypeHelper"),vueOptionTsServerPlugin_1=require("./vueOptionTsServerPlugin"),vueRefTypeHelper_1=require("./vueRefTypeHelper"),vue=require("./vueService"),baseTypes=["Array","String","Number","Boolean","Symbol","Object"];var hx;!function(e){function t(e,t,n,i,o,s,r,l,a,u){var d,c,p,f;let g={};if(s&&(0,type_resolve_1.isObjectLiteralKey)(s,i)){if(t){let h={title:"Suggest",command:"editor.action.triggerSnippet",arguments:["_object_func_callback_method.js","_object_func_callback.js","_object_func_callback_arrow.js","_object_property_callback.js"]},m=/\s*(UniNamespace|UniApp)\.(.*)Options\s*/,v=/\s*(UniCloudNamespace|UniCloud)\.(.*)Options\s*/,_=t.search(m),x=t.search(v);if(/UniNamespace\.(.*)Options\.(.*):\s*\((.*)\)\s*=>\s*/.test(t))g.command=h;else if(!n||(n!=vscode_languageserver_1.CompletionItemKind.Function&&n!=vscode_languageserver_1.CompletionItemKind.Method||r)&&(2!=n&&1!=n||!r))if(-1!==_||-1!==x){if(l==vscode_languageserver_1.InsertTextFormat.PlainText||r){let{isInString:t,flag:n}=(0,type_resolve_1.isStringLiteral)(s,i);if(o)t?(o.newText=`${n}${e}${n}:$0`,o.range={start:{line:o.range.start.line,character:o.range.start.character-1},end:{line:o.range.end.line,character:o.range.end.character+1}}):o.newText=`${e}:$0`,g.textEdit=o;else if(t){if(g.insertText=`${n}${e}${n}:$0`,u){let e=u.replacing;if(e){let t={start:{line:null===(d=null==e?void 0:e.start)||void 0===d?void 0:d.line,character:(null===(c=null==e?void 0:e.start)||void 0===c?void 0:c.character)-1},end:{line:null===(p=null==e?void 0:e.end)||void 0===p?void 0:p.line,character:(null===(f=null==e?void 0:e.end)||void 0===f?void 0:f.character)+1}};g.range=t}}}else g.insertText=`${e}:$0`}g.command={title:"Suggest",command:"editor.action.triggerSuggest"},r||(g.insertTextFormat=vscode_languageserver_1.InsertTextFormat.Snippet)}else a&&a.startsWith("hxHtmlFlag")&&!e.startsWith("@")&&(g.textEdit=o);else g.command=h}}else if(t&&/Uni\.(.*)\(options\s*:\s*(UniNamespace|UniApp)\.(.*)Options\s*\)/.test(t)||/UniCloud\.(.*)\(options\s*:\s*(UniCloudNamespace|UniCloud)\.(.*)Options\s*\)/.test(t))(l==vscode_languageserver_1.InsertTextFormat.PlainText||r)&&((0,type_resolve_1.isFollowedBy)(s,i-1,core_1.ts.SyntaxKind.OpenParenToken)||(o?(g.textEdit=o,g.textEdit.newText=`${e}({\n\t$0\n})`):g.insertText=`${e}({\n\t$0\n})`,g.command={title:"Suggest",command:"editor.action.triggerSuggest"},r||(g.insertTextFormat=vscode_languageserver_1.InsertTextFormat.Snippet)));else if(!n||n!=vscode_languageserver_1.CompletionItemKind.Function&&n!=vscode_languageserver_1.CompletionItemKind.Method)a&&a.startsWith("hxHtmlFlag")&&!e.startsWith("@")&&(g.textEdit=o);else if((0,type_resolve_1.isImportElement)(s,i-1)||(0,type_resolve_1.isFollowedBy)(s,i-1,core_1.ts.SyntaxKind.OpenParenToken))(l==vscode_languageserver_1.InsertTextFormat.PlainText||r)&&(o?(g.textEdit=o,g.textEdit.newText=e):g.insertText=e);else if(l==vscode_languageserver_1.InsertTextFormat.PlainText||r){let t=e;t=t.replace(/\$/g,"\\$");let n=`${t}($1)$0`;o?(g.textEdit=o,g.textEdit.newText=n):g.insertText=n,r||(g.insertTextFormat=vscode_languageserver_1.InsertTextFormat.Snippet)}return g}function n(){return path.resolve(__dirname,"../../../")}function i(e){return core_1.ts.server.toNormalizedPath(e)}function o(e){if(e.startsWith("file:/")){let t=i(vscode_uri_1.URI.parse(e).fsPath);return vscode_uri_1.URI.file(t).toString()}let t=i(e);return vscode_uri_1.URI.file(t).toString()}let s;function r(e,t,n){const i=[vueOptionTsServerPlugin_1.default];for(let o of i)t=o.create({project:e,languageService:t,languageServiceHost:n});h(core_1.ts);const o=Object.create(null);for(let e of Object.keys(t)){const n=t[e];o[e]=(...e)=>n.apply(t,e)}return t=(0,languageServiceProxy_1.createTSLanguageServiceProxy)(t,e,null),o.getCompletionEntryDetails=(n,i,o,s,r,l,a)=>{let u=t.getProgram().getSourceFile(n);if(n.endsWith(".vue")||n.endsWith(".nvue")||n.endsWith(".uvue")){let t=(0,type_resolve_1.findExportThisExpressionAtOffset)(u,i);if(t){let u=vue.getVueThisLangusgeService(e,t);if(u)return u.getCompletionEntryDetails(n,i,o,s,r,l,a)}}return t.getCompletionEntryDetails(n,i,o,s,r,l,a)},o.getCompletionsAtPosition=(n,i,o)=>{let s=t.getProgram().getSourceFile(n);if(n.endsWith(".vue")||n.endsWith(".nvue")||n.endsWith(".uvue")){let r=(0,type_resolve_1.findExportThisExpressionAtOffset)(s,i);if(r){let s=vue.getVueThisLangusgeService(e,r);if(s){let e=s.getCompletionsAtPosition(n,i,o),r=new Set;null==e||e.entries.forEach((e=>{r.add(`${e.name}::${e.kind}`)}));let l=t.getCompletionsAtPosition(n,i,o);return e?(null==l||l.entries.forEach((t=>{r.has(`${t.name}::${t.kind}`)||e.entries.push(t)})),e):l}}}const r=t.getCompletionsAtPosition(n,i,o);if(n.endsWith(".html")||n.endsWith(".htm")){let t=vscode_uri_1.URI.file(e.sourceRoot);const i=n.startsWith("file")?n:vscode_uri_1.URI.file(n).toString(),o=[{projectUri:t.toString(),kind:"REF",fileUri:i}];let s=(0,core_1.onDiskQuery)(o);if(s.length=1){const e=(0,core_1.normalizationIndexData)(s[0]).kindMap.get("REF").get(i);for(let t of e.indexValues){let e=t.value;if(fs.existsSync(e)){let t=core_1.ts.createSourceFile("",fs.readFileSync(e).toLocaleString(),core_1.ts.ScriptTarget.Latest);null==t||t.forEachChild((e=>{var t;if(e.kind===core_1.ts.SyntaxKind.VariableStatement)for(let n of null===(t=null==e?void 0:e.declarationList)||void 0===t?void 0:t.declarations){if(n.kind===core_1.ts.SyntaxKind.VariableDeclaration){let e=n.name;if(e.kind===core_1.ts.SyntaxKind.Identifier){let t=e.escapedText.toString();r.entries.push({name:t,kind:core_1.ts.ScriptElementKind.variableElement,sortText:""})}}console.log(n)}else if(e.kind===core_1.ts.SyntaxKind.FunctionDeclaration){let t=e.name;if(t.kind===core_1.ts.SyntaxKind.Identifier){let e=t.escapedText.toString();r.entries.push({name:e,kind:core_1.ts.ScriptElementKind.functionElement,sortText:""})}}}))}}}}return r},o.getDefinitionAtPosition=(n,i)=>{let o=t.getProgram().getSourceFile(n);if(n.endsWith(".vue")||n.endsWith(".nvue")||n.endsWith(".uvue")){let t=(0,type_resolve_1.findExportThisExpressionAtOffset)(o,i);if(t){let o=vue.getVueThisLangusgeService(e,t);if(o)return o.getDefinitionAtPosition(n,i)}}return t.getDefinitionAtPosition(n,i)},o.getDefinitionAndBoundSpan=(n,i)=>{let o=t.getProgram().getSourceFile(n);if(n.endsWith(".vue")||n.endsWith(".nvue")||n.endsWith(".uvue")){let t=(0,type_resolve_1.findExportThisExpressionAtOffset)(o,i);if(t){let o=vue.getVueThisLangusgeService(e,t);if(o)return o.getDefinitionAndBoundSpan(n,i)}}if(n.endsWith(".html")||n.endsWith(".htm")){let t=vscode_uri_1.URI.file(e.sourceRoot);const s=n.startsWith("file")?n:vscode_uri_1.URI.file(n).toString(),r=[{projectUri:t.toString(),kind:"REF",fileUri:s}];let l,a=(0,core_1.onDiskQuery)(r);if(a.length=1){const e=(0,core_1.normalizationIndexData)(a[0]).kindMap.get("REF").get(s);let t=(0,type_resolve_1.getTokenAtPosition)(o,i),n=null==t?void 0:t.getText();for(let i of e.indexValues){let e=i.value;if(fs.existsSync(e)){let i=core_1.ts.createSourceFile("",fs.readFileSync(e).toLocaleString(),core_1.ts.ScriptTarget.Latest);null==i||i.forEachChild((i=>{var o;if(i.kind===core_1.ts.SyntaxKind.VariableStatement){for(let s of null===(o=null==i?void 0:i.declarationList)||void 0===o?void 0:o.declarations)if(s.kind===core_1.ts.SyntaxKind.VariableDeclaration){let i=s.name;if(i.kind===core_1.ts.SyntaxKind.Identifier){let o=i.escapedText.toString();if(n!=o)return!1;l={definitions:[{kind:core_1.ts.ScriptElementKind.unknown,name:"",containerKind:core_1.ts.ScriptElementKind.unknown,containerName:"",textSpan:{start:i.pos||0,length:0},fileName:e,contextSpan:{start:0,length:0}}],textSpan:{start:t.getStart(),length:n.length}}}}}else if(i.kind===core_1.ts.SyntaxKind.FunctionDeclaration){let o=i.name;if(o.kind===core_1.ts.SyntaxKind.Identifier){let i=o.escapedText.toString();if(n!=i)return!1;l={definitions:[{kind:core_1.ts.ScriptElementKind.unknown,name:"",containerKind:core_1.ts.ScriptElementKind.unknown,containerName:"",textSpan:{start:o.pos||0,length:n.length},fileName:e,contextSpan:{start:0,length:0}}],textSpan:{start:t.getStart(),length:n.length}}}}}))}}}if(l)return l}return t.getDefinitionAndBoundSpan(n,i)},o.getQuickInfoAtPosition=(n,i)=>{if(n.endsWith(".vue")||n.endsWith(".nvue")||n.endsWith(".uvue")){let o=t.getProgram().getSourceFile(n),s=(0,type_resolve_1.findExportThisExpressionAtOffset)(o,i);if(s){let t=vue.getVueThisLangusgeService(e,s);if(t)return t.getQuickInfoAtPosition(n,i)}}return t.getQuickInfoAtPosition(n,i)},o}function l(t,n,o,r,l,u,d,c){let p,f=s.Web;t&&(f=t.kind),f!=s.UniApp&&f!=s.UniApp_Cli||n.startsWith("@/")&&(n=path.join(t.sourceRoot,n.substring(2)));let g=core_1.ts.resolveModuleName(n,o,r,l);if(g.resolvedModule)p=g.resolvedModule;else{let e=core_1.ts.nodeModuleNameResolver(n,o,r,l);e.resolvedModule&&(p=e.resolvedModule)}if(!p&&f===s.UniApp){let s=a(n,t.fsPath);if(s)p={isExternalLibraryImport:!0,resolvedFileName:s};else{let t=path.join(e.getExtensionRootPath(),"builtin-dts","index.js"),i=core_1.ts.nodeModuleNameResolver(n,t,r,l);i.resolvedModule&&(p=i.resolvedModule)}if(!p&&t.isUnicloudSource(o)){let e=i(o),s=path.dirname(e),r=10;for(;r>0&&t.isUnicloudSource(s)&&fs.existsSync(s);){r--;let e=path.join(s,"package.json");if(fs.existsSync(e)){let t=fs.readFileSync(e).toString();try{let e=JSON.parse(t);if(e&&e.dependencies&&e.dependencies[n]){let t=e.dependencies[n];if(t.startsWith("file:")){let e=path.resolve(s,t.substring(5));if(fs.existsSync(path.join(e,"package.json"))){let t=fs.readFileSync(path.join(e,"package.json")).toString(),n=JSON.parse(t);if(n&&n.types){let t=path.resolve(e,n.types);fs.existsSync(t)&&(p={isExternalLibraryImport:!0,resolvedFileName:t})}else if(n&&n.main){p={isExternalLibraryImport:!0,resolvedFileName:path.resolve(e,n.main)}}}}}}catch(e){}break}s=path.dirname(s)}}}return p}function a(e,t){let i=n();return{vuex:2===(0,vueVersion_1.vueVersion)(t)?path.join(i,"builtin-dts","node_modules","vuex","types","index.d.ts"):path.join(i,"builtin-dts","node_modules","vuex@4","types","index.d.ts"),"vue-router":path.join(i,"builtin-dts","node_modules","vue-router","types","index.d.ts"),vue:path.join(i,"builtin-dts","common","vue2And3.d.ts"),"@dcloudio/uni-app":path.join(i,"builtin-dts","node_modules","@dcloudio","uni-app","dist","uni-app.d.ts")}[e]}function u(e,t){let n=[],i=path.join(e,"builtin-dts","node_modules","node");return fs.readdirSync(i).forEach((e=>{let o=!0;t.forEach((t=>{e.includes(t)&&(o=!1)})),o&&e.endsWith(".d.ts")&&n.push(path.join(i,e))})),n}function d(e){let t=[],i=n();if(e.kind==s.UniApp)t.push(path.join(i,"builtin-dts","node_modules","vue","types","index.d.ts")),t.push(path.join(i,"builtin-dts","node_modules","vue@3","types","index.d.ts")),t.push(path.join(i,"builtin-dts","node_modules","vuex","types","index.d.ts")),t.push(path.join(i,"builtin-dts","node_modules","vue-router","types","index.d.ts")),t.push(path.join(i,"builtin-dts","node_modules","@dcloudio","types","index.d.ts")),t.push(path.join(i,"frameworkdts","wechat-miniprogram","index.d.ts"));else if(e.kind==s.App||e.kind==s.Wap2App)t.push(path.join(i,"builtin-dts","node_modules","@dcloudio","types","html5plus","plus.d.ts")),t.push(path.join(i,"builtin-dts","node_modules","jQuery","jquery.d.ts"));else if(e.kind==s.UniApp_Cli){let n=path.join(e.fsPath,"node_modules/@dcloudio/types/index.d.ts");fs.existsSync(n)&&t.push(n),t.push(path.join(i,"frameworkdts","wechat-miniprogram","index.d.ts"))}else e.kind==s.Web?t.push(path.join(i,"builtin-dts","node_modules","jQuery","jquery.d.ts")):e.kind==s.Extension&&(t.push(path.join(i,"builtin-dts","common","extension_js.d.ts")),t.push(...u(i,["globals.d.ts","index.d.ts"])));return t.push(path.join(i,"builtin-dts","node_modules","node","globals.d.ts")),t.push(path.join(i,"builtin-dts","common","lib.dom2.d.ts")),t}e.computeJSResolveData=t,e.resolveJSCompletionItem=function(e,n){var i;let o;(null===(i=e.data)||void 0===i?void 0:i.hxHtmlFlag)&&(o=e.data.hxHtmlFlag);let s=t(e.label,e.detail,e.kind,null==e?void 0:e.data.offset,e.textEdit,n,!1,e.insertTextFormat,o);return e.command=s.command,e.insertText=s.insertText,e.insertTextFormat=s.insertTextFormat,e.textEdit=s.textEdit,e},e.getExtensionRootPath=n,e.readFiletoString=function(e){return core_1.ts.sys.readFile(e)},e.toNormalizedPath=i,e.toNormalizedUri=o,function(e){e[e.UniApp=0]="UniApp",e[e.UniApp_Cli=1]="UniApp_Cli",e[e.Web=2]="Web",e[e.App=3]="App",e[e.Wap2App=4]="Wap2App",e[e.Extension=5]="Extension"}(s=e.HXProjectKind||(e.HXProjectKind={})),e.resolveModuleName=l,e.getBuiltinUniappModule=a,e.getUnicloudServerLibs=function(){let e=[],t=n();return e.push(path.join(t,"builtin-dts","node_modules","node","index.d.ts")),e.push(path.join(t,"builtin-dts","node_modules","@dcloudio","types","uni-cloud-server.d.ts")),e},e.getNodeLibs=u,e.getDefaultLibs=d;let c=new Map;const p=core_1.ts.createDocumentRegistry(!0,process.cwd());function f(e,t){const n=vscode_uri_1.URI.parse(e),a=function(e){let t=[{kind:s.UniApp_Cli,existsFiles:[["src/manifest.json"],["src/pages.json"],["src/App.vue","src/App.nvue"],["src/main.js","src/main.ts"]]},{kind:s.UniApp,existsFiles:[["manifest.json"],["pages.json"],["App.vue","App.nvue"],["main.js","main.ts"]]},{kind:s.Wap2App,existsFiles:[["manifest.json"],["sitemap.json"]]},{kind:s.App,existsFiles:[["manifest.json"]]},{kind:s.Extension,existsFiles:function(e){var t;if(fs.existsSync(path.join(e,"package.json"))){let n=require(path.join(e,"package.json"));if((null===(t=null==n?void 0:n.engines)||void 0===t?void 0:t.HBuilderX)&&(null==n?void 0:n.main)&&(null==n?void 0:n.contributes))return!0}return!1}}];for(let n of t){let t=n.kind,i=n.existsFiles,o=!0;if("function"==typeof i)o=i(e);else for(let t of i){let n=!1;for(let i of t)if(fs.existsSync(path.join(e,i))){n=!0;break}if(o=o&&n,!o)break}if(o)return t}return s.Web}(n.fsPath),u=a==s.UniApp_Cli?path.join(n.fsPath,"src"):n.fsPath,c=new Map;let f={kind:a,fsPath:n.fsPath,sourceRoot:u,onSettingsChanged(e){},isProjectOf(e){const t=o(e);let i=vscode_uri_1.URI.parse(t).fsPath;return!path.relative(n.fsPath.toLowerCase(),i.toLowerCase()).startsWith("..")},isUnicloudSource(e){if(a!=s.UniApp&&a!=s.UniApp_Cli)return!1;const t=o(e);let r=vscode_uri_1.URI.parse(t).fsPath,l=path.relative(n.fsPath.toLowerCase(),r.toLowerCase());l&&(l=i(l));let u=r.endsWith(".jql");return/^unicloud-(tcb|aliyun|alipay)\/|^uni_modules\/.*\/unicloud\//.test(l)&&!u},createTSLanguageService(e,i,u){if(c.has(e))return c.get(e);if(i&&u){let t=r(f,i,u);return c.set(e,t),t}const g=d(f);t&&g.push(...t);const h=e.compilerOptions;let m=path.dirname(core_1.ts.getDefaultLibFilePath(h));const v={getCompilationSettings:()=>(a!=s.UniApp&&a!=s.UniApp_Cli||(h.moduleResolution=core_1.ts.ModuleResolutionKind.Node10),h.checkExpressionOverride=(t,n,i,o)=>function(e,t,n,i,o,s,r){const l=[uniCloudTypeHelper_1.default,vueRefTypeHelper_1.default];r&&r.length>0&&l.push(...r);for(let r=0;r<l.length;r++){let a=l[r];try{if(!a||!a.checkExpression)continue;let r=a.checkExpression(e,t,n,i,o,s);if(r)return r}catch(e){console.error(e)}}}(f,h,t,n,i,o,e.typeCheckerPluigns),h.getContextualTypeOverride=(t,n,i)=>function(e,t,n,i,o,s){const r=[uniCloudTypeHelper_1.default,vueRefTypeHelper_1.default];s&&s.length>0&&r.push(...s);for(let s=0;s<r.length;s++){let l=r[s];try{if(!l||!l.getContextualType)continue;let s=l.getContextualType(e,t,n,i,o);if(s)return s}catch(e){console.error(e)}}}(f,h,t,n,i,e.typeCheckerPluigns),h),getScriptFileNames(){let t=[].concat(e.getDefaultLibs?e.getDefaultLibs(f):g);for(let n of e.documents)t.push(n);return t},getScriptKind(t){const n=o(t);return e.getDocumentKind?e.getDocumentKind(n):"ts"===t.substr(t.length-2)?core_1.ts.ScriptKind.TS:core_1.ts.ScriptKind.JS},getProjectVersion:()=>String(e.version),getScriptVersion(t){const n=o(t);return e.hasDocument(n)?e.getDocumentVersion(n):"1"},getScriptSnapshot(t){const n=o(t);if(e.hasDocument(n))return e.getDocumentSnapshot(n);let i="",s=vscode_uri_1.URI.parse(n).fsPath;return fs.existsSync(s)&&(i=fs.readFileSync(s).toString()),{getText:(e,t)=>i.substring(e,t),getLength:()=>i.length,getChangeRange:()=>{}}},getCurrentDirectory:()=>n.fsPath,getDefaultLibFileName:e=>e.lib&&e.lib.length>0?path.join(m,e.lib[0]):path.join(m,"lib.esnext.d.ts"),resolveModuleNames(t,n,i,s,r){const a=[];for(let i of t){let t,s={fileExists(t){const n=o(t),i=vscode_uri_1.URI.parse(n);return!!e.hasDocument(n)||fs.existsSync(i.fsPath)},readFile(t){const n=o(t);if(e.hasDocument(n)){let t=e.getDocumentSnapshot(n);return t.getText(0,t.getLength()-1)}const i=vscode_uri_1.URI.parse(n);return fs.readFileSync(i.fsPath).toString()}};e.resolveModuleNameOverride&&(t=e.resolveModuleNameOverride(f,i,n,h,s)),t||(t=l(f,i,n,h,s)),a.push(t)}return a},readFile:function(e,t){throw new Error("Function not implemented.")},fileExists:function(e){throw new Error("Function not implemented.")}};let _=core_1.ts.createLanguageService(v,e.useGlobalDocumentRegistry?p:void 0,core_1.ts.LanguageServiceMode.Semantic),x=r(f,_,v);return c.set(e,x),x}};return f}function g(e){const t=o(e);if(c.has(t))return c.get(t);let n=f(t);return c.set(t,n),n}function h(e){if(e&&e.SymbolDisplay&&e.SymbolDisplay.getSymbolKind&&!e.SymbolDisplay.__overridedSymbolKind){let t=e.SymbolDisplay.getSymbolKind.bind(e.SymbolDisplay);e.SymbolDisplay.getSymbolKind=function(e,n,i){let o=e.getTypeOfSymbolAtLocation(n,i).getNonNullableType().getCallSignatures();return baseTypes.some((e=>e==n.escapedName))?"property":0!==o.length?"function":t(e,n,i)},e.SymbolDisplay.__overridedSymbolKind=!0}}e.createProject=f,e.getProject=g,e.getProjectByDocumentUri=function(e,t){for(let n of t){let t=n.uri;if(t.endsWith("/")||(t+="/"),e.startsWith(t))return g(n.uri)}},e.overrideSymbolKind=h}(hx||(exports.hx=hx={}));