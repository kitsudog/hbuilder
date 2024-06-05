"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VueFileReferences=void 0;const core_1=require("../../../core"),IndexEasyComHandle_1=require("./IndexEasyComHandle");function isHump(e){let t=!0;return e.includes("-")&&(t=!1),t}function toHyphenated(e){return e.replace(/\B([A-Z])/g,(function(e){return`-${e=e.toLowerCase()}`}))}function toHump(e){return e.replace(/\-(\w)/g,(function(e,t){return t.toUpperCase()}))}class VueFileReferences{constructor(){this.easyComHandle=new IndexEasyComHandle_1.IndexEasyComHandle}async getImportPathData(e,t){const o=await(0,core_1.getAllKindData)(e,"REF",!0);if(!o)return[];const a={options:{text:t,needRange:!0},filter:function(e,t){let o=!1,a=!1;void 0!==t.options.text&&t.options.text.toLowerCase()===e.value.toLowerCase()&&(o=!0),t.options.needRange&&e.range&&(a=!0);return!(o&&a)}},n=[],s=(0,core_1.lspFilterIndexData)(o,a);n.push(s);const r=[];return n.forEach((e=>{const t=(0,core_1.creatorExtLocationLinksFromIndexData)(e,(0,core_1.getNullRange)());r.unshift(...t)})),r}async getImportTagData(e,t){const o=[],a=(0,core_1.noTsToNormalizedUri)(e.fsPath);if(!a)return[];const n={projectUri:a,kind:"VUE_COMPONENT_TAG"};for(const a of t){const t=(0,core_1.getIndexDataOptionsFromList)([a.targetUri],n),s=await e.indexPipeHandler.getIndexDataRequest(t,!0);if(!s)return[];const r=[];s.forEach((e=>{const t=(0,core_1.normalizationIndexData)(e);r.push(t)}));const i={options:{text:a.extRefItems.display,needRange:!0},filter:function(e,t){let o=!1,a=!1;const n=t.options.text;if(!n||void 0===t.options.text)return!0;if(n===e.value&&(o=!0),!o){if(isHump(n)){toHyphenated(n)===e.value&&(o=!0)}else{toHump(n)===e.value&&(o=!0)}}t.options.needRange&&e.range&&(a=!0);return!(o&&a)}},c=[];r.forEach((e=>{const t=(0,core_1.lspFilterIndexData)(e,i);c.push(t)}));const u=[];c.forEach((e=>{const t=(0,core_1.creatorExtLocationLinksFromIndexData)(e,(0,core_1.getNullRange)());u.unshift(...t)})),o.unshift(...u)}return o}async getEasyComTagList(e,t){if(!e)return[];const o={options:{text:t},filter:function(e,t){var o,a;let n=!1;const s=void 0!==t.options.text,r=void 0!==e.easyComPath,i=(null===(o=t.options.text)||void 0===o?void 0:o.toLowerCase())===(null===(a=e.easyComPath)||void 0===a?void 0:a.toLowerCase());s&&r&&i&&(n=!0);return!n}},a=[],n=(0,core_1.lspFilterIndexData)(e,o);a.push(n);const s=[];return a.forEach((e=>{e.kindMap.forEach((e=>{e.forEach((e=>{e.indexValues.forEach((e=>{s.push(e.value)}))}))}))})),s}async getEasyComTagData(e,t,o){let a=[];if(await this.easyComHandle.isAutoScan(e)){const o=await this.easyComHandle.getAutoScanEasyComData(e);a=await this.getEasyComTagList(o,t)}let n=[];const s=await this.easyComHandle.getCustomEasyComData(e);n=await this.getEasyComTagList(s,t);const r=a.concat(n);if(0===r.length)return;const i=[];o.forEach((e=>{i.push({name:e.extRefItems.name,path:e.targetUri})}));const c={options:{easyComTagList:r,excludeEasyComTagList:i},filter:function(e,t){let o=!1;"uni-icons"===e.value&&console.log();const a=t.options.easyComTagList;if(!a)return!0;a.forEach((t=>{if(t===e.value&&(o=!0),!o){if(isHump(t)){toHyphenated(t)===e.value&&(o=!0)}else{toHump(t)===e.value&&(o=!0)}}}));const n=t.options.excludeEasyComTagList;return n&&o&&n.forEach((t=>{let a=!1;if(t.name===e.value&&(a=!0),!a){if(isHump(t.name)){toHyphenated(t.name)===e.value&&(a=!0)}else{toHump(t.name)===e.value&&(a=!0)}}a&&t.path===e.describe&&(o=!1)})),!o}},u=await(0,core_1.getAllKindData)(e,"VUE_COMPONENT_TAG",!0);if(!u)return;const l=[],f=(0,core_1.lspFilterIndexData)(u,c);l.push(f);const p=[];return l.forEach((e=>{const t=(0,core_1.creatorExtLocationLinksFromIndexData)(e,(0,core_1.getNullRange)());p.unshift(...t)})),p}async getLspFileReferencesAsync(e,t){const o=[],a=await this.getImportPathData(e,t);let n=[];a.length>0&&(n=await this.getImportTagData(e,a));const s=await this.getEasyComTagData(e,t,n);return a&&o.unshift(...a),n&&o.unshift(...n),s&&o.unshift(...s),o}async getFileReferencesAsync(e,t,o){const a=await this.getLspFileReferencesAsync(e,t);if(!a)return;return(0,core_1.fromLspFileReferences)(o,a)}}exports.VueFileReferences=VueFileReferences;