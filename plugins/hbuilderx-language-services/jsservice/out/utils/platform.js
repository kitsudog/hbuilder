"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isWeb=void 0;const vscode=require("vscode");function isWeb(){return"undefined"!=typeof navigator&&vscode.env.uiKind===vscode.UIKind.Web}exports.isWeb=isWeb;