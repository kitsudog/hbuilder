"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createSourceFile=void 0;const sourceMap_1=require("./sourceMap");function createSourceFile(e,i){return(()=>{const t={fileName:e,content:i.text,capabilities:{diagnostics:!0,foldingRanges:!1,formatting:!1,documentSymbol:!1,codeActions:!0,inlayHints:!0},isTsHostFile:!1,mappings:i.mappings.map((e=>{let i={vueTag:void 0,capabilities:{basic:!0,references:!0,definitions:!0,diagnostic:!0,rename:!0,completion:!0,semanticTokens:!0,referencesCodeLens:!1,displayWithLink:!1}};return e.data=i,e}))};return{file:t,sourceMap:new sourceMap_1.EmbeddedFileSourceMap(t.mappings),teleport:void 0}})()}exports.createSourceFile=createSourceFile;