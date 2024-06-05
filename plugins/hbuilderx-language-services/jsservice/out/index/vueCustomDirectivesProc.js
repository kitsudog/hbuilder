"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getVueDirectivesProc=void 0;const ts=require("typescript"),core_1=require("./../../../core"),utils_1=require("./utils");function getVueDirectivesProc(e){new Set;function t(e){let t=utils_1.tsConvert.asTsObjectLiteralExpression(e);return!!t&&t.properties.some((e=>{var t;return e.kind==ts.SyntaxKind.MethodDeclaration?"bind"==(null===(t=utils_1.tsConvert.asTsIdentifier(e.name))||void 0===t?void 0:t.text):e.kind==ts.SyntaxKind.PropertyAssignment&&e.initializer.kind==ts.SyntaxKind.FunctionExpression&&"bind"==e.name.text}))}return{support(e,t){var i,r;const s=null!==(r=null===(i=null==t?void 0:t.source)||void 0===i?void 0:i.uri)&&void 0!==r?r:"";let n=s.lastIndexOf(".");if(n>0){let e=s.slice(n+1).toLocaleLowerCase();return/^n?vue$/.test(e)}return!1},onExportAssignment(e,i,r){let s=function(e){var t,i;let r=null===(t=utils_1.tsConvert.asTsObjectLiteralExpression(e))||void 0===t?void 0:t.properties;if(r)for(let e=0;e<r.length;e++){let t=utils_1.tsConvert.asTsPropertyAssignment(r[e]);if(t&&/^['"]?directives['"]?$/.test(t.name.getText()))return null===(i=utils_1.tsConvert.asTsObjectLiteralExpression(t.initializer))||void 0===i?void 0:i.properties}}(i.expression);if(s){const i="vue-custom-directives";let r=new core_1.IndexData,n=[];r.categories.push(i);for(let i=0;i<s.length;i++){let r=utils_1.tsConvert.asTsPropertyAssignment(s[i]);if(r&&t(r.initializer)){const t=r.name.getText(),i=r.name.text;let s=t.indexOf(i),o=r.name.getStart()+s;n.push({label:i,position:e.positionAt(o)})}}if(n.length>0)return r[i]=n,r}return null}}}exports.getVueDirectivesProc=getVueDirectivesProc;