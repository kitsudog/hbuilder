"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.prevItemStylesheet=exports.nextItemStylesheet=void 0;const vscode=require("vscode"),util_1=require("./util");function nextItemStylesheet(e,t,r,n){const o=e.offsetAt(t),l=e.offsetAt(r);let i=(0,util_1.getFlatNode)(n,l,!0);if(i||(i=n),!i)return;if("property"===i.type&&o===i.start&&l===i.end)return getSelectionFromProperty(e,i,o,l,!0,"next");if("property"===i.type&&o>=i.valueToken.start&&l<=i.valueToken.end){let t=getSelectionFromProperty(e,i,o,l,!1,"next");if(t)return t}if("rule"===i.type&&l<i.selectorToken.end||"property"===i.type&&l<i.valueToken.end)return getSelectionFromNode(e,i);let s=i.firstChild;for(;s&&l>=s.end;)s=s.nextSibling;for(;!s&&i;)s=i.nextSibling,i=i.parent;return s?getSelectionFromNode(e,s):void 0}function prevItemStylesheet(e,t,r,n){const o=e.offsetAt(t),l=e.offsetAt(r);let i=(0,util_1.getFlatNode)(n,o,!1);if(i||(i=n),!i)return;if("property"===i.type&&o===i.valueToken.start&&l===i.valueToken.end)return getSelectionFromNode(e,i);if("property"===i.type&&o>=i.valueToken.start&&l<=i.valueToken.end){let t=getSelectionFromProperty(e,i,o,l,!1,"prev");if(t)return t}if("property"===i.type||!i.firstChild||"rule"===i.type&&o<=i.firstChild.start)return getSelectionFromNode(e,i);let s=i.firstChild;for(;s.nextSibling&&o>=s.nextSibling.end;)s=s.nextSibling;return s=(0,util_1.getDeepestFlatNode)(s),getSelectionFromProperty(e,s,o,l,!1,"prev")}function getSelectionFromNode(e,t){if(!t)return;const r="rule"===t.type?t.selectorToken:t;return(0,util_1.offsetRangeToSelection)(e,r.start,r.end)}function getSelectionFromProperty(e,t,r,n,o,l){if(!t||"property"!==t.type)return;const i=t;let s=i.valueToken.stream.substring(i.valueToken.start,i.valueToken.end);if(o=o||"prev"===l&&r===i.valueToken.start&&n<i.valueToken.end)return(0,util_1.offsetRangeToSelection)(e,i.valueToken.start,i.valueToken.end);let u=-1;if("prev"===l){if(r===i.valueToken.start)return;const t=e.positionAt(r).character,n=e.positionAt(i.valueToken.start).character;u=r>i.valueToken.end?s.length:t-n}else if("next"===l){if(n===i.valueToken.end&&(r>i.valueToken.start||!s.includes(" ")))return;const t=e.positionAt(n).character,o=e.positionAt(i.valueToken.start).character;u=n===i.valueToken.end?-1:t-o-1}let[a,p]="prev"===l?(0,util_1.findPrevWord)(s,u):(0,util_1.findNextWord)(s,u);if(!a&&!p)return;const f=e.positionAt(i.valueToken.start),c=f.translate(0,a),d=f.translate(0,p);return new vscode.Selection(c,d)}exports.nextItemStylesheet=nextItemStylesheet,exports.prevItemStylesheet=prevItemStylesheet;