"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.watchActivateTextEditor=void 0;const vscode_1=require("vscode"),core_1=require("../../../core");function watchActivateTextEditor(t){let e=vscode_1.window.activeTextEditor,o=null==e?void 0:e.document.uri,i=o?o.toString():"";t.sendNotification(core_1.EditorActivatedNotify.type,i);const c=vscode_1.window.onDidChangeActiveTextEditor((async e=>{let o=null==e?void 0:e.document.uri,i=o?o.toString():"";t.sendNotification(core_1.EditorActivatedNotify.type,i)}));return c}exports.watchActivateTextEditor=watchActivateTextEditor;