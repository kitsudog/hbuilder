"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TargetSupportDispatcher=void 0;class TargetSupportDispatcher{constructor(t){this._log=t,this._registerdPolicyCollection=[]}getLanguageServiceContexts(t,e){const r=[];for(const i of this._registerdPolicyCollection){const o=i.getLanguageServiceContextIfHasPolicy(t,e);if(o&&o.length){r.push(...o);break}}return r}registerPolicy(t){this._registerdPolicyCollection.find((e=>e.kind===t.kind))?this._log("[target] register policy got repeat kind:"+t.kind):this._registerdPolicyCollection.push(t)}}exports.TargetSupportDispatcher=TargetSupportDispatcher;