"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var s=Object.getOwnPropertyDescriptor(t,r);s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,s)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createFileIndexProcessor=void 0;const fs=__importStar(require("fs")),path=__importStar(require("path")),tsserverlibrary_1=__importDefault(require("typescript/lib/tsserverlibrary")),vscode_languageserver_textdocument_1=require("vscode-languageserver-textdocument"),vscode_uri_1=require("vscode-uri"),core_1=require("../../../core"),volar=__importStar(require("../../packages/vue-typescript")),utils_1=require("../uitls/utils"),scriptIndex_1=require("./scriptIndex"),styleIndex_1=require("./styleIndex"),tagIndex_1=require("./tagIndex");function getTextSpan(e,t){if(!t)return;const r=e.offsetAt(t.start);return{start:r,length:e.offsetAt(t.end)-r}}function getTextRange(e,t){if(!t)return;const r=e.positionAt(t.start),n=e.positionAt(t.start);n.character=r.character+t.length;return{start:r,end:n}}class VueIndexProcessor extends core_1.IndexProcessor{getLangType(e){const t=path.extname(e).substring(1),r={lang:t,type:""},n=e.indexOf("."),s=e.substring(n);return["css","less","sass","scss"].includes(t)?r.type="Style":[".vue.js",".vue.ts",".nvue.js",".nvue.ts",".uvue.js",".uvue.ts","uts"].includes(s)&&(r.type="Script"),r}async traverseEmbedded(e,t,r,n,s){const i=[];for(var a=0;a<s.length;a++){const o=[],u=s[a].sourceMap,c=s[a].file,l=(c.fileName,vscode_uri_1.URI.file(c.fileName).toString()),d=this.getLangType(c.fileName),p=vscode_languageserver_textdocument_1.TextDocument.create(l,d.lang,0,c.content);if("Style"===d.type){const t=await(0,styleIndex_1.getStyleIndex)(e,p,r,d.lang);t&&o.push(t)}else if("Script"===d.type){r.sourceDocument=t;const n=await(0,scriptIndex_1.getScriptIndex)(e,p,r,d.lang);n&&o.push(n)}o.forEach((e=>{e.kindMap.forEach(((r,s)=>{const i=new Map;r.forEach(((e,r)=>{const s=[];e.indexValues.forEach((e=>{const r=getTextSpan(p,e.range),n=(0,utils_1.virtualToRealityFromRange)(u,r),i=getTextRange(t,n);if(!i)return;const a=(0,core_1.getContextLineText)(t,i);e.lineText=a,e.range=i,s.push(e)})),i.set(t.uri,{fileVersion:n.mtime.toISOString(),indexValues:s})})),e.kindMap.set(s,i)}))})),i.push(...o)}return i}getProcessorID(){return"vue"}isSupportIndexer(e,t){let r=!1;return"vue"===t.languageId&&(r=!0),(t.uri.endsWith(".vue")||t.uri.endsWith(".nvue")||t.uri.endsWith(".uvue"))&&(r=!0),r}async createIndexData(e,t,r){const n=vscode_uri_1.URI.parse(t.uri).fsPath,s=fs.statSync(n),i=vscode_uri_1.URI.parse(e).fsPath,a=volar.createSourceFile(n,t.getText(),{},{target:(0,core_1.vueVersionFroProjectPath)(i),experimentalImplicitWrapComponentOptionsWithDefineComponent:!0,experimentalDowngradePropsAndEmitsToSetupReturnOnScriptSetup:!0},tsserverlibrary_1.default).getAllEmbeddeds(),o=await this.traverseEmbedded(e,t,r,s,a),u=new tagIndex_1.TagIndex(!0).createTagIndex(e,t,r);u&&o.push(u);return(0,core_1.mergeIndexData)(o)}}function createFileIndexProcessor(){return new VueIndexProcessor}exports.createFileIndexProcessor=createFileIndexProcessor;