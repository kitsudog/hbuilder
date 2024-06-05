"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const core_1=require("../../../../core"),utils_1=require("../utils"),indexBaseHandler_1=require("./indexBaseHandler"),indexDataUtils_1=require("./indexDataUtils");class HtmlIDStringHandler extends indexBaseHandler_1.IndexBaseHandler{constructor(){super(...arguments),this.indexDataUtils=new indexDataUtils_1.IndexDataUtils}baseIdFilter(t){return!0}getFilterOption(t){return{options:{text:t.text,kind:core_1.IndexItemType.DEF,needRange:!0},filter:function(t,e){let i=!1,r=!1,n=!1;void 0!==e.options.kind&&e.options.kind===t.kind&&(i=!0),void 0!==e.options.text&&e.options.text===t.value&&(r=!0),e.options.needRange&&t.range&&(n=!0);return!(i&&r&&n)}}}getIndexDataOptions(t){return{projectUri:t.projectUri,excludeFileUris:t.excludeFileUris,kind:"ID",limit:2e3,fields:["value","range"],distinct:!0,prefix:t.prefix}}async getPriority(t,e,i){let r=new Map,n=new Map,o=new Map;const a=(0,core_1.noTsToNormalizedUri)(e);if(!a)return o;const s=(0,utils_1.getRealFileNameFromVirtualFile)(a);if(!s)return o;const l=core_1.fileTypesTool.isScriptType(s),c=core_1.fileTypesTool.isStyleType(s);if(l||c){const a=core_1.fileTypesTool.getFileSuffixFromType("script"),s=core_1.fileTypesTool.getFileSuffixFromType("style");n=await(0,utils_1.getBackRefSortLevel)(t,e,s),r=await(0,utils_1.getBackRefSortLevel)(t,e,a);const l=[];n.forEach(((t,e)=>{l.push(e)})),r.forEach(((t,e)=>{l.push(e)})),o=await(0,utils_1.getRefSortLevel)(t,l,i)}else o=await(0,utils_1.getRefSortLevel)(t,[e],i);return o}async doCompleteExt(t,e,i,r,n,o){const a=(0,core_1.noTsToNormalizedUri)(i.project.fsPath),s=t.offsetAt(e),l={prefixText:(0,core_1.getContextData)(t,s," \t\n\r\"':{[()]},*>+.#").leftText},c=[this.getIndexDataOptions({projectUri:a,excludeFileUris:o,prefix:l})];let d;if(d=await i.project.indexPipeHandler.getIndexDataRequest(c,!1),!d)return[];if(0===d.length)return[];d.forEach((t=>{t=(0,utils_1.specialNormalizationIndexData)(i.kind,t)}));const p=t.getText(i.range),x=(0,core_1.noTsToNormalizedUri)(t.uri),u={replaceRange:i.range,needFilePath:!0,currentText:p,currentFileUri:x};return d.forEach((t=>{n.push(...(0,core_1.creatorCompletionFromIndexData)(t,u))})),n}async doCompleteAsync(t,e,i,r,n){const o=[],a=(0,core_1.noTsToNormalizedUri)(i.project.fsPath);if(!a)return o;const s=t.offsetAt(e),l=(0,core_1.getContextData)(t,s," \t\n\r\"':{[()]},*>+.#"),c=await(0,core_1.getAllKindData)(i.project,"REF",!1);if(!c){const a=await this.doCompleteExt(t,e,i,r,n,[]);return o.push(...a),o}const d=t.uri,p=await this.getPriority(c,d,i),x=[];p.forEach(((t,e)=>{x.push(e)}));const u={prefixText:l.leftText},f=this.getIndexDataOptions({projectUri:a,prefix:u}),g=(0,core_1.getIndexDataOptionsFromList)(x,f),h=await this.indexDataUtils.getIndexDataList(i,g);if(!h||0===h.length){const a=await this.doCompleteExt(t,e,i,r,n,x);return o.push(...a),o}h.forEach((t=>{t=(0,utils_1.specialNormalizationIndexData)(i.kind,t)}));const D=t.getText(i.range),T=(0,core_1.noTsToNormalizedUri)(t.uri),_={replaceRange:i.range,needFilePath:!0,sortLevel:p,filter:this.baseIdFilter,currentText:D,currentFileUri:T};if(h.forEach((t=>{o.push(...(0,core_1.creatorCompletionFromIndexData)(t,_))})),o.length<2e3){const a=await this.doCompleteExt(t,e,i,r,n,x);return o.push(...a),o}return o}async doDefinitionExt(t,e,i,r,n){const o=(0,core_1.noTsToNormalizedUri)(i.project.fsPath);if(!o)return n;const a={projectUri:o,kind:"ID",limit:2e3,distinct:!0},s=await this.indexDataUtils.getIndexDataList(i,[a]);if(!s||0===s.length)return[];const l=t.getText(i.range),c=this.getFilterOption({text:l}),d=this.indexDataUtils.getFilterDataList(s,c),p=this.indexDataUtils.getExtLocationLink(d,i);return(0,core_1.extLocationToOld)(p)}async doDefinitionAsync(t,e,i,r,n){const o=(0,core_1.noTsToNormalizedUri)(i.project.fsPath);if(!o)return n;const a=await(0,core_1.getAllKindData)(i.project,"REF",!1);if(!a){const o=await this.doDefinitionExt(t,e,i,r,n);return n.push(...o),n}const s=t.uri,l=await this.getPriority(a,s,i),c=[];if(l.forEach(((t,e)=>{c.push(e)})),0===c.length){const o=await this.doDefinitionExt(t,e,i,r,n);return n.push(...o),n}const d={projectUri:o,kind:"ID"},p=(0,core_1.getIndexDataOptionsFromList)(c,d),x=await this.indexDataUtils.getIndexDataList(i,p),u=t.getText(i.range),f=this.getFilterOption({text:u}),g=this.indexDataUtils.getFilterDataList(x,f),h=this.indexDataUtils.getExtLocationLink(g,i),D=(0,core_1.extLocationToOld)(h);if(n.unshift(...D),0===n.length){const o=await this.doDefinitionExt(t,e,i,r,n);return n.push(...o),n}return n}}exports.default=HtmlIDStringHandler;