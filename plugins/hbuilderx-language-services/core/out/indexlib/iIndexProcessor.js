"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.IndexProcessor=void 0;const base_1=require("../base"),utils_1=require("./utils");class IndexProcessor{targetMergeData(e,t){const r=(0,utils_1.mergeIndexData)(e);if(!r)return;const s=r.kindMap.keys();for(const e of s){const s=r.kindMap.get(e),a=s.keys();for(const e of a){const r=s.get(e),a=base_1.targetUtils.mergeValuesFromRange(r.indexValues);this.targetChangeRange(a,t),r.indexValues=a}}return r}targetChangeRange(e,t){return e.forEach((e=>{if(!e.platforms)return;if(!e.range)return;const r=t.get(e.platforms[0]);if(!r)return;const s=r.map;if(!s)return;const a=base_1.targetUtils.getSourceRange(e.range,s);e.range=a})),e}async targetCreateIndexData(e,t){base_1.targetUtils.getAllTargetFileInfo(e,t);return await this.createIndexData(e,t,{})}}exports.IndexProcessor=IndexProcessor;