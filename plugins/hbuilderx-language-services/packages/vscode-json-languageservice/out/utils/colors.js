"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.colorFrom256RGB=exports.colorFromHex=exports.hexDigit=void 0;const Digit0=48,Digit9=57,A=65,a=97,f=102;function hexDigit(e){return e<48?0:e<=57?e-48:(e<a&&(e+=32),e>=a&&e<=f?e-a+10:0)}function colorFromHex(e){if("#"===e[0])switch(e.length){case 4:return{red:17*hexDigit(e.charCodeAt(1))/255,green:17*hexDigit(e.charCodeAt(2))/255,blue:17*hexDigit(e.charCodeAt(3))/255,alpha:1};case 5:return{red:17*hexDigit(e.charCodeAt(1))/255,green:17*hexDigit(e.charCodeAt(2))/255,blue:17*hexDigit(e.charCodeAt(3))/255,alpha:17*hexDigit(e.charCodeAt(4))/255};case 7:return{red:(16*hexDigit(e.charCodeAt(1))+hexDigit(e.charCodeAt(2)))/255,green:(16*hexDigit(e.charCodeAt(3))+hexDigit(e.charCodeAt(4)))/255,blue:(16*hexDigit(e.charCodeAt(5))+hexDigit(e.charCodeAt(6)))/255,alpha:1};case 9:return{red:(16*hexDigit(e.charCodeAt(1))+hexDigit(e.charCodeAt(2)))/255,green:(16*hexDigit(e.charCodeAt(3))+hexDigit(e.charCodeAt(4)))/255,blue:(16*hexDigit(e.charCodeAt(5))+hexDigit(e.charCodeAt(6)))/255,alpha:(16*hexDigit(e.charCodeAt(7))+hexDigit(e.charCodeAt(8)))/255}}}function colorFrom256RGB(e,t,r,i=1){return{red:e/255,green:t/255,blue:r/255,alpha:i}}exports.hexDigit=hexDigit,exports.colorFromHex=colorFromHex,exports.colorFrom256RGB=colorFrom256RGB;