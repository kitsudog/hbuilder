"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReviseSymbols=void 0;const core_1=require("../../../../core"),vscode_html_languageservice_1=require("../../../../packages/vscode-html-languageservice");class ReviseSymbols{doExtraSymbols(e,o,r){return e=this.convertSymbolKind(e,o,r),e=this.convertSymbolRange(e,o,r)}convertSymbolKind(e,o,r){return e.forEach((e=>{e.kind===vscode_html_languageservice_1.SymbolKind.Field&&(e.kind=core_1.HxIconKind.ELEMENT)})),e}convertSymbolRange(e,o,r){return e.forEach((e=>{e.location.range.start.character+=1})),e}}exports.ReviseSymbols=ReviseSymbols;