"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getExternalDataProvider=exports.getDependencyDataProvider=exports.getWorkspaceDataProvider=exports.gridsomeTagProvider=exports.onsenTagProvider=exports.elementTagProvider=exports.VeturDataProvider=void 0;const fs=__importStar(require("fs")),path=__importStar(require("path")),ts=__importStar(require("typescript"));class VeturDataProvider{constructor(e,t){this.id=e,this._tags=[],this._tagMap={},this._enable=!0,this._tagMap=t,this._tags=Object.values(t)}clone(){return new VeturDataProvider(this.id,this._tagMap)}getId(){return this.id}get enable(){return this._enable}set enable(e){this._enable=e}isApplicable(e){return this._enable&&"vue"==e}provideTags(){return this._tags}provideAttributes(e){const t=[],r=e=>{t.push(e)};let a=this._tagMap[e];return a&&a.attributes.forEach(r),t}provideValues(e,t){var r;const a=[];t=t.toLowerCase();let n=this._tagMap[e];return n&&(null!==(r=n.attributes)&&void 0!==r?r:[]).forEach((e=>{e.name.toLowerCase()===t&&e.values&&e.values.forEach((e=>{a.push(e)}))})),a}}exports.VeturDataProvider=VeturDataProvider;const elementTags=require("element-helper-json/element-tags.json"),elementAttributes=require("element-helper-json/element-attributes.json"),onsenTags=require("vue-onsenui-helper-json/vue-onsenui-tags.json"),onsenAttributes=require("vue-onsenui-helper-json/vue-onsenui-attributes.json"),gridsomeTags=require("gridsome-helper-json/gridsome-tags.json"),gridsomeAttributes=require("gridsome-helper-json/gridsome-attributes.json");function findConfigFile(e,t){return ts.findConfigFile(e,ts.sys.fileExists,t)}function getWorkspaceDataProvider(e,t){if(!t.vetur)return null;const r=findConfigFile(e,t.vetur.tags),a=findConfigFile(e,t.vetur.attributes);try{if(r&&a){const e=JSON.parse(fs.readFileSync(r,"utf-8"));return getExternalDataProvider("__vetur-workspace",e,JSON.parse(fs.readFileSync(a,"utf-8")))}return null}catch(e){return null}}function getDependencyDataProvider(e,t,r){if(!r.vetur)return null;try{const a=require.resolve(path.join(t,r.vetur.tags),{paths:[e]}),n=require.resolve(path.join(t,r.vetur.attributes),{paths:[e]}),i=JSON.parse(fs.readFileSync(a,"utf-8"));return getExternalDataProvider(t,i,JSON.parse(fs.readFileSync(n,"utf-8")))}catch(e){return console.error(e.stack),null}}function getExternalDataProvider(e,t,r){let a=new Map;Object.keys(r).forEach((e=>{var t;let n=r[e],i={name:e,description:n.description},s="event"===n.type;"boolean"===n.type?i.valueSet="v":!s&&n.options instanceof Array&&(i.values=n.options.map((e=>({name:e}))));let o=e.indexOf("/"),u=e.slice(o>=0?o+1:0);i.name=(s?"[event]":"")+u;let l=e.slice(0,o>=0?o:0);a.has(l)||a.set(l,[]),null===(t=a.get(l))||void 0===t||t.push(i)}));let n={};return Object.keys(t).forEach((e=>{var r,i;let s=t[e],o=[];if(s.attributes instanceof Array)for(let t=0;t<s.attributes.length;t++){let n=s.attributes[t],u="[event]"+n;o.push(...(null!==(r=a.get(""))&&void 0!==r?r:[]).filter((e=>e.name===n||e.name===u))),o.push(...(null!==(i=a.get(e))&&void 0!==i?i:[]).filter((e=>e.name===n||e.name===u)))}n[e]={name:e,description:s.description,attributes:o}})),new VeturDataProvider(e,n)}exports.elementTagProvider=getExternalDataProvider("element",elementTags,elementAttributes),exports.onsenTagProvider=getExternalDataProvider("onsen",onsenTags,onsenAttributes),exports.gridsomeTagProvider=getExternalDataProvider("gridsome",gridsomeTags,gridsomeAttributes),exports.getWorkspaceDataProvider=getWorkspaceDataProvider,exports.getDependencyDataProvider=getDependencyDataProvider,exports.getExternalDataProvider=getExternalDataProvider;