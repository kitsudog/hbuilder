"use strict";function getDetailFromType(e,t,r){let o="";if(o=Array.isArray(t)?t.join("|"):t||"",r&&r.parent&&"property"===r.parent.type&&(e=r.parent.keyNode.value),""!==e)return`${e}: ${o}`}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDetailFromType=void 0,exports.getDetailFromType=getDetailFromType;