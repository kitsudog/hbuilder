"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fromLspDiagnosticWithLocation=exports.toLspDefinition=exports.includesList=exports.getDeduplicationData=exports.fromLspReferences=exports.fromLspNavigation=exports.fromLspHover=exports.fromLspFileReferences=exports.fromLspDefinition=exports.fromLspCompletions=exports.fromLspCompletionDetail=void 0;const fs=require("fs"),vscode_languageserver_1=require("vscode-languageserver"),vscode_languageserver_textdocument_1=require("vscode-languageserver-textdocument"),vscode_uri_1=require("vscode-uri"),tsapi_1=require("../tsapi"),lspUtil_1=require("./lspUtil"),tsserverlibrary_1=require("typescript/lib/tsserverlibrary");function includesList(t,e,n){n||(n=!1);for(const i of e)if(t===i)return!n;return n}function getDeduplicationData(t){let e=[];for(var n=t.items.length-1;n>=0;--n)e.includes(t.items[n].label)?t.items.splice(n,1):e.push(t.items[n].label);return t}function fromLspCompletions(t,e,n){let i,r=[];return t.items.forEach((t=>{var n,i,o,s;const a=t.label,c=null!==(n=t.sortText)&&void 0!==n?n:t.label;let l=null!==(i=t.insertText)&&void 0!==i?i:t.label;const f=t.insertTextFormat===vscode_languageserver_1.InsertTextFormat.Snippet||void 0,g=t.textEdit;let p;g&&(l=g.newText,p={start:e.offsetAt(g.range.start),length:e.offsetAt(g.range.end)-e.offsetAt(g.range.start)});const d=!!t.command||void 0,u={data:t.data?t.data:{},command:t.command,detail:null!==(o=t.detail)&&void 0!==o?o:t.label,documentation:null!==(s=t.documentation)&&void 0!==s?s:""},m=JSON.stringify(u),v="lsp://"+e.uri+"?"+encodeURIComponent(m);r.push({name:a,kind:t.kind,kindModifiers:void 0,sortText:c,insertText:l,isSnippet:f,replacementSpan:p,hasAction:d,source:v})})),!0===t.isIncomplete&&(i=!0),{entries:r,isGlobalCompletion:!1,isNewIdentifierLocation:!1,isMemberCompletion:!1,isIncomplete:i}}function fromLspCompletionDetail(t,e,n){var i;let r;if(!t)return r;let o=t.label,s=[{text:null!==(i=t.detail)&&void 0!==i?i:t.label,kind:"text"}],a=[];return t.documentation&&t.documentation.value?a.push({kind:t.documentation.kind,text:t.documentation.value}):t.documentation&&"string"==typeof t.documentation&&(a=[{text:t.documentation,kind:"text"}]),r={name:o,kind:t.kind,kindModifiers:"",displayParts:s,documentation:a,tags:t.data.jsDoc||[]},r}function fromLspDefinition(t,e,n,i,r){let o,s=[];if(!t)return o;if(t.length<1)return o;if(!t[0].originSelectionRange)return o;let a=e.offsetAt(t[0].originSelectionRange.end)-e.offsetAt(t[0].originSelectionRange.start),c={start:e.offsetAt(t[0].originSelectionRange.start),length:a};return t.forEach((t=>{var o,a;let c={start:0,length:0};if(!t.targetUri)return;let l="";if(l=t.targetUri.startsWith("file://")?vscode_uri_1.URI.parse(t.targetUri).fsPath:vscode_uri_1.URI.file(t.targetUri).fsPath,i&&i.isEmbedFile(t.targetUri))c=null!==(o=i.getTextSpan(t.targetUri,t.targetRange))&&void 0!==o?o:c;else{let e=n.tsinfo.project.getScriptInfo(l);if(e){try{c.start=e.lineOffsetToPosition(t.targetRange.start.line+1,t.targetRange.start.character+1)}catch(t){}c.length=t.targetRange.end.character-t.targetRange.start.character}else{if(!fs.existsSync(l)||fs.statSync(l).isDirectory())return;try{let e=fs.readFileSync(l).toString(),n=vscode_languageserver_textdocument_1.TextDocument.create(l,"any",0,e);c.start=n.offsetAt(t.targetRange.start),c.length=n.offsetAt(t.targetRange.end)-n.offsetAt(t.targetRange.start)}catch(t){}}}void 0!==c.start&&s.push({kind:null!==(a=t.kind)&&void 0!==a?a:tsapi_1.ts.ScriptElementKind.unknown,name:e.getText(t.targetSelectionRange),containerKind:tsapi_1.ts.ScriptElementKind.unknown,containerName:"",textSpan:c,fileName:l,unverified:r})})),o={definitions:s,textSpan:c},o}function fromLspHover(t,e,n){let i;if(null==t)return i;let r="";if(Array.isArray(t.contents)?t.contents.forEach((t=>{"string"==typeof t?r+=t:t.language||t.kind&&(r+=t.value)})):t.contents.kind||t.contents.language?r=t.contents.value:"string"==typeof t.contents&&(r=t.contents),!t.range)return i;let o=e.offsetAt(t.range.end)-e.offsetAt(t.range.start),s={start:e.offsetAt(t.range.start),length:o};return i={kind:tsapi_1.ts.ScriptElementKind.unknown,kindModifiers:"",textSpan:s,documentation:[{text:r,kind:""}]},i}function symbolInformationToNavigationTree(t,e,n){let i=[],r=e.offsetAt(t.location.range.start),o=e.offsetAt(t.location.range.end),s=t.name.length;if(n){let e=t.name.indexOf("."),n=t.name.indexOf("#");-1!==e?s=-1!==n?e<n?e:n:e:-1!==n&&(s=n)}let a={start:r,length:s},c={start:r,length:o-r};return i.push(c),{text:t.name,kind:t.kind,kindModifiers:"lsp",spans:i,nameSpan:a,childItems:[]}}function addChild(t,e,n,i){n.forEach((n=>{n.childItems||(n.childItems=[]),t.containerName===n.text?n.childItems.push(symbolInformationToNavigationTree(t,e,i)):n.childItems&&addChild(t,e,n.childItems,i)}))}function fromLspNavigation(t,e,n,i){let r=[];if(!(t.length<1))return t.forEach((t=>{t.containerName?addChild(t,e,r,i):r.push(symbolInformationToNavigationTree(t,e,i))})),{text:e.uri,kind:tsapi_1.ts.ScriptElementKind.alias,kindModifiers:"",spans:[],nameSpan:void 0,childItems:r}}function getReferencesData(t,e,n){const i=(0,lspUtil_1.uriToPath)(e);let r={start:0,length:0},o={textSpan:r,name:"",context:""},s=t.tsinfo.project.getScriptInfo(i);if(s){try{r.start=s.lineOffsetToPosition(n.start.line+1,n.start.character+1)}catch(t){}r.length=n.end.character-n.start.character,o.name=s.getSnapshot().getText(r.start,r.start+r.length),o.context=s.getSnapshot().getText(r.start,r.start+r.length)}else{if(!fs.existsSync(i))return o;if(fs.statSync(i).isDirectory())return o;try{let t=fs.readFileSync(i).toString(),e=vscode_languageserver_textdocument_1.TextDocument.create(i,"any",0,t);r.start=e.offsetAt(n.start),r.length=e.offsetAt(n.end)-e.offsetAt(n.start),o.name=e.getText(n),o.context=(0,lspUtil_1.getLineTextFromPosition)(e,n.start)}catch(t){}}return o}function fromLspReferences(t,e){if(!e)return;if(e.length<1)return;const n={displayParts:[],kind:tsapi_1.ts.ScriptElementKind.unknown,name:"",containerKind:tsapi_1.ts.ScriptElementKind.unknown,containerName:"",textSpan:{start:0,length:0},fileName:""};let i=[];for(const r in e){const o=e[r],s=(0,lspUtil_1.uriToPath)(o.targetUri),a=getReferencesData(t,o.targetUri,o.targetRange);let c=!1,l=!1;if("0"===r){const t={text:a.context,kind:"string"};n.displayParts.push(t),n.name=a.name,n.fileName=s,n.textSpan=a.textSpan,c=!0,l=!0}const f=o.extRefItems,g={isWriteAccess:c,isDefinition:l,textSpan:a.textSpan,fileName:s,extRefItems:f,contextSpan:void 0,isInString:void 0,originalContextSpan:void 0,originalTextSpan:void 0,originalFileName:void 0};i.push(g)}const r={definition:n,references:i};return""!==r.definition.name?[r]:void 0}function fromLspFileReferences(t,e){const n=fromLspReferences(t,e);if(!n)return;if(0===n.length)return;return n[0].references}function toLspDefinition(t,e,n){const i=[];return e.definitions&&0!=e.definitions.length?(e.definitions.forEach((r=>{try{let o;const s=t.tsinfo.project.projectService.getScriptInfo(r.fileName);if(s){const t=s.getSnapshot();o=t.getText(0,t.getLength())}if(!o){if(!fs.existsSync(r.fileName)||fs.statSync(r.fileName).isDirectory())return;o=fs.readFileSync(r.fileName).toString()}if(!o)return;let a=vscode_languageserver_textdocument_1.TextDocument.create(r.fileName,"any",0,o);i.push({originSelectionRange:{start:n.positionAt(e.textSpan.start),end:n.positionAt(e.textSpan.start+e.textSpan.length)},targetUri:r.fileName,targetRange:{start:a.positionAt(r.textSpan.start),end:a.positionAt(r.textSpan.start+r.textSpan.length)},targetSelectionRange:vscode_languageserver_1.Range.create(vscode_languageserver_1.Position.create(0,0),vscode_languageserver_1.Position.create(0,0)),kind:r.kind})}catch(t){}})),i):i}function fromLspDiagnosticWithLocation(t,e){return t.map((t=>{let n=e.offsetAt(t.range.start),i=e.offsetAt(t.range.end),r=tsserverlibrary_1.DiagnosticCategory.Warning;switch(t.severity){case vscode_languageserver_1.DiagnosticSeverity.Error:r=tsserverlibrary_1.DiagnosticCategory.Error;break;case vscode_languageserver_1.DiagnosticSeverity.Warning:r=tsserverlibrary_1.DiagnosticCategory.Warning;break;case vscode_languageserver_1.DiagnosticSeverity.Information:r=tsserverlibrary_1.DiagnosticCategory.Message;break;case vscode_languageserver_1.DiagnosticSeverity.Hint:r=tsserverlibrary_1.DiagnosticCategory.Suggestion}return{file:{},start:n,length:i-n,source:t.source,category:r,code:1005,messageText:t.message}}))}exports.includesList=includesList,exports.getDeduplicationData=getDeduplicationData,exports.fromLspCompletions=fromLspCompletions,exports.fromLspCompletionDetail=fromLspCompletionDetail,exports.fromLspDefinition=fromLspDefinition,exports.fromLspHover=fromLspHover,exports.fromLspNavigation=fromLspNavigation,exports.fromLspReferences=fromLspReferences,exports.fromLspFileReferences=fromLspFileReferences,exports.toLspDefinition=toLspDefinition,exports.fromLspDiagnosticWithLocation=fromLspDiagnosticWithLocation;