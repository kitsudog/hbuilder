"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.specialNormalizationIndexData=exports.getRefSortLevel=exports.getRealFileNameFromVirtualFile=exports.getBackRefSortLevel=void 0;const path=require("path"),core_1=require("../../../core"),handlerType_1=require("./handlerType");function specialNormalizationIndexData(e,r){return r=e===handlerType_1.StringLocationInfoKind.IN_HTML_LIKE?(0,core_1.tagNormalizedData)(r):e===handlerType_1.StringLocationInfoKind.IN_CSS_LIKE?(0,core_1.styleNormalizedData)(r):e===handlerType_1.StringLocationInfoKind.IN_JS_LIKE?(0,core_1.tagNormalizedData)(r):(0,core_1.normalizationIndexData)(r)}function getRealFileNameFromVirtualFile(e){let r=(0,core_1.noTsToNormalizedUri)(e);if(r)return r.includes(".vue.")&&(r=r.replace(/\.vue\.(.*)/,".vue")),r.includes(".nvue.")&&(r=r.replace(/\.nvue\.(.*)/,".nvue")),r.includes(".uvue.")&&(r=r.replace(/\.uvue\.(.*)/,".uvue")),r}async function getRefSortLevel(e,r,t){const o=new Map;r.forEach((e=>{const r=(0,core_1.noTsToNormalizedUri)(e);if(!r)return;o.set(r,"a");const t=getRealFileNameFromVirtualFile(r);t&&r!==t&&o.set(t,"a")}));const a=(0,core_1.iterateGetReference)(e,r,new Map),i=(0,core_1.getReferenceList)(a);i&&i.forEach((e=>{const r=(0,core_1.noTsToNormalizedUri)(e);r&&o.set(r,"b")}));const n=(0,core_1.noTsToNormalizedUri)(path.join(t.project.fsPath,"App.vue")),c=(0,core_1.noTsToNormalizedUri)(path.join(t.project.fsPath,"App.uvue")),l=(0,core_1.noTsToNormalizedUri)(path.join(t.project.fsPath,"uni.scss")),s=[];n&&(o.set(n,"c"),s.push(n)),c&&(o.set(c,"c"),s.push(c)),l&&(o.set(l,"c"),s.push(l));const u=(0,core_1.iterateGetReference)(e,s,new Map),p=(0,core_1.getReferenceList)(u);return p&&p.forEach((e=>{const r=(0,core_1.noTsToNormalizedUri)(e);r&&o.set(r,"d")})),o}async function getBackRefSortLevel(e,r,t){const o=new Map,a=(0,core_1.noTsToNormalizedUri)(r);if(!a)return o;const i=getRealFileNameFromVirtualFile(a);if(!i)return o;let n=!1;for(let e=0;e<t.length;e++){const r=t[e];if(i.endsWith(r)){n=!0;break}}if(n){const r=(0,core_1.iterateGetBackReference)(e,[a],new Map),t=(0,core_1.getReferenceList)(r);t&&t.forEach((e=>{const r=(0,core_1.noTsToNormalizedUri)(e);r&&o.set(r,"a")}))}return o}exports.specialNormalizationIndexData=specialNormalizationIndexData,exports.getRealFileNameFromVirtualFile=getRealFileNameFromVirtualFile,exports.getRefSortLevel=getRefSortLevel,exports.getBackRefSortLevel=getBackRefSortLevel;