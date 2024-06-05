"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.evaluateMathExpression=void 0;const math_expression_1=require("@emmetio/math-expression"),vscode=require("vscode");function evaluateMathExpression(){if(!vscode.window.activeTextEditor)return console.error("Emmet Error: No editor is active. (evaluateMathExpression.ts::evaluateMathExpression)"),Promise.resolve(!1);const e=vscode.window.activeTextEditor;return e.edit((o=>{e.selections.forEach((t=>{const s=t.isReversed?t.active:t.anchor,n=t.isReversed?t.anchor:t.active,r=e.document.getText(new vscode.Range(s,n));try{if(r){const e=String((0,math_expression_1.default)(r));o.replace(new vscode.Range(s,n),e)}else{const s=e.document.getText(new vscode.Range(new vscode.Position(t.end.line,0),n)),r=(0,math_expression_1.extract)(s);if(!r)throw new Error("Invalid extracted indices");const i=String((0,math_expression_1.default)(s.substr(r[0],r[1]))),a=new vscode.Range(new vscode.Position(t.end.line,r[0]),new vscode.Position(t.end.line,r[1]));o.replace(a,i)}}catch(e){vscode.window.showErrorMessage("Could not evaluate expression"),console.warn("Math evaluation error",e)}}))}))}exports.evaluateMathExpression=evaluateMathExpression;