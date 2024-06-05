"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t};Object.defineProperty(exports,"__esModule",{value:!0}),exports.IdClassReferences=void 0;const path=__importStar(require("path")),core_1=require("../../../../core"),plugins_1=require("../../plugins"),serviceTypes_1=require("../../serviceTypes");function isVueFile(e){return(0,core_1.fileEndsWith)(e,[".vue",".uvue",".nvue",".swan",".axml",".ttml",".qml",".nml",".ux"])}class IdClassReferences{constructor(e,t){this.ls=e,this.allInfo=t,this.cssLanguageServer=(0,serviceTypes_1.getCSSLanguageService)()}async getAllRefData(e){return await(0,core_1.getAllKindData)(e,"REF",!0)}createRefFileList(e,t,r){let n=(0,core_1.getReferenceList)(t),i=(0,core_1.getReferenceList)(r);n||(n=[]),i||(i=[]);const a=n.concat(i);return a.push(e),a}async getIndexData(e,t){let r;if(r=await e.indexPipeHandler.getIndexDataRequest(t,!0),r&&0!==r.length)return r.forEach((e=>{e=(0,core_1.tagNormalizedData)(e)})),r}filterAndGeneration(e,t,r){const n=[];e.forEach((e=>{const r=(0,core_1.lspFilterIndexData)(e,t);n.push(r)}));const i=[];return n.forEach((e=>{const t=(0,core_1.creatorExtLocationLinksFromIndexData)(e,r);i.unshift(...t)})),i}async getReferencesData(e,t,r,n,i,a){if(n.activeAttribute!==i)return e;const o=this.allInfo.project,s=(0,core_1.noTsToNormalizedUri)(o.fsPath),c=(0,core_1.noTsToNormalizedUri)(t.uri);if(!c)return e;if(!s)return e;const l=await this.getAllRefData(o),u=(0,core_1.iterateGetReference)(l,[c],new Map),f=(0,core_1.iterateGetBackReference)(l,[c],new Map),d=this.createRefFileList(c,u,f),p={projectUri:s,kind:a},g=(0,core_1.getIndexDataOptionsFromList)(d,p),h=await this.getIndexData(o,g);if(!h)return e;const _=t.offsetAt(r),R=(0,core_1.getContextData)(t,_," '\""),v={options:{text:R.context,needRange:!0},filter:function(e,t){let r=!1,n=!1;void 0!==t.options.text&&t.options.text===e.value&&(r=!0),t.options.needRange&&e.range&&(n=!0);return!(r&&n)}},x=this.filterAndGeneration(h,v,R.contextRange);return e||(e=[]),e.unshift(...x),e}async getIDReferences(e,t,r,n){return this.getReferencesData(e,t,r,n,"id","ID")}async getClassReferences(e,t,r,n){return this.getReferencesData(e,t,r,n,"class","CLASS")}async getGlobalData(e,t,r){const n=await this.getIndexData(e,t);if(!n)return;const i={options:{text:r.context,needRange:!0},filter:function(e,t){let r=!1,n=!1;void 0!==t.options.text&&t.options.text===e.value&&(r=!0),t.options.needRange&&e.range&&(n=!0);return!(r&&n)}};return this.filterAndGeneration(n,i,r.contextRange)}async getReferencesFromGlobal(e,t,r,n){if("vue"!==t.languageId&&"nvue"!==t.languageId)return e;if("id"!==n.activeAttribute&&"class"!==n.activeAttribute)return e;let i="CLASS";"id"===n.activeAttribute&&(i="ID");const a=this.allInfo.project,o=(0,core_1.noTsToNormalizedUri)(a.fsPath);if(!o)return e;const s=t.offsetAt(r),c=(0,core_1.getContextData)(t,s," '\""),l=await this.getAllRefData(a);let u;const f=(0,core_1.isUniAppXProject)(a),d=[],p=(0,core_1.noTsToNormalizedUri)(path.join(a.fsPath,"App.vue"));p&&d.push(p);const g=(0,core_1.noTsToNormalizedUri)(path.join(a.fsPath,"App.uvue"));if(g&&d.push(g),u=f?(0,core_1.noTsToNormalizedUri)(path.join(a.fsPath,"App.uvue")):(0,core_1.noTsToNormalizedUri)(path.join(a.fsPath,"App.vue")),!u)return e;const h=(0,core_1.iterateGetReference)(l,d,new Map),_=(0,core_1.iterateGetBackReference)(l,d,new Map);let R=this.createRefFileList(u,h,_);null==e||e.forEach((e=>{R.push(e.targetUri)}));const v=(0,core_1.noTsToNormalizedUri)(path.join(a.fsPath,"uni.scss"));v&&R.push(v),R=Array.from(new Set(R));const x={projectUri:o,kind:i};let D=await this.getGlobalData(a,[x],c);return D?(D=D.filter((e=>!!isVueFile(e.targetUri)||!!(null==R?void 0:R.includes(e.targetUri)))),D):e}async doExtraReferencesAsync(e,t,r,n){let i=this.ls.getLocationInfoAtPosition(t,r,n);if(i&&i.activeAttribute){if(i.kind===plugins_1.LocationInfoKind.AttributeValue)e=await this.getIDReferences(e,t,r,i),e=await this.getClassReferences(e,t,r,i),e=await this.getReferencesFromGlobal(e,t,r,i);return e}}}exports.IdClassReferences=IdClassReferences;