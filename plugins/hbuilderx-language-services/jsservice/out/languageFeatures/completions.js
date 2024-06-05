"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.register=void 0;const path_1=require("path"),ts=require("typescript"),vscode=require("vscode"),nls=require("vscode-nls"),utils_1=require("../../../utils"),PConst=require("../protocol.const"),api_1=require("../utils/api"),cancellation_1=require("../utils/cancellation"),codeAction_1=require("../utils/codeAction"),modifiers_1=require("../utils/modifiers"),performance_1=require("../utils/performance"),Previewer=require("../utils/previewer"),typeConverters=require("../utils/typeConverters"),unixVersionCompatibilityResolver_1=require("./unixVersionCompatibilityResolver"),localize=nls.loadMessageBundle();class MyCompletionItem extends vscode.CompletionItem{constructor(e,t,i,n,o){if(super(i.name,MyCompletionItem.convertKind(i.kind)),this.position=e,this.document=t,this.tsEntry=i,this.completionContext=n,this.metadata=o,i.source?i.source.startsWith("lsp://")?(this.sortText=i.sortText,this.kind=MyCompletionItem.lspConvertKind(i.kind)):this.sortText="￿"+i.sortText:this.sortText=i.sortText,this.preselect=i.isRecommended,this.position=e,this.useCodeSnippet=this.kind===vscode.CompletionItemKind.Function||this.kind===vscode.CompletionItemKind.Method,this.range=this.getRangeFromReplacementSpan(i,n,e),this.commitCharacters=MyCompletionItem.getCommitCharacters(n,i),this.insertText=i.insertText,this.filterText=this.getFilterText(n.line,i.insertText),n.isMemberCompletion&&n.dotAccessorContext&&(this.filterText=n.dotAccessorContext.text+(this.insertText||this.label),!this.range)){const e=this.getFuzzyWordRange();this.range=e?{inserting:n.dotAccessorContext.range,replacing:n.dotAccessorContext.range.union(e)}:n.dotAccessorContext.range,this.insertText=this.filterText}if(i.kindModifiers){const e=(0,modifiers_1.parseKindModifier)(i.kindModifiers);if(e.has(PConst.KindModifiers.optional)&&(this.insertText||(this.insertText=this.label),this.filterText||(this.filterText=this.label)),e.has(PConst.KindModifiers.depreacted)&&(this.tags=[vscode.CompletionItemTag.Deprecated]),e.has(PConst.KindModifiers.color)&&(this.kind=vscode.CompletionItemKind.Color),i.kind===PConst.Kind.script)for(const t of PConst.KindModifiers.fileExtensionKindModifiers)if(e.has(t)){i.name.toLowerCase().endsWith(t)?this.detail=i.name:this.detail=i.name+t;break}}if(i.source&&i.source.startsWith("lsp://")){i.isSnippet&&(this.useCodeSnippet=!0,this.insertText=new vscode.SnippetString(this.insertText));try{let e=vscode.Uri.parse(i.source).query,t=JSON.parse(e);t.command&&(this.command={title:t.command.title,command:t.command.command}),t.data&&(this.data=t.data),t.detail&&(this.detail=t.detail),t.documentation&&(this.documentation=t.documentation)}catch(e){}}this.resolveRange()}getRangeFromReplacementSpan(e,t,i){if(!e.replacementSpan)return;let n=typeConverters.Range.fromTextSpan(e.replacementSpan);return n.isSingleLine||(n=new vscode.Range(n.start.line,n.start.character,n.start.line,t.line.length)),{inserting:new vscode.Range(n.start,i),replacing:n}}getFilterText(e,t){if(this.tsEntry.name.startsWith("#")){const i=this.completionContext.wordRange,n=i?e.charAt(i.start.character):void 0;return t?t.startsWith("this.#")?"#"===n?t:t.replace(/^this\.#/,""):t:"#"===n?void 0:this.tsEntry.name.replace(/^#/,"")}if(!(null==t?void 0:t.startsWith("this.")))return(null==t?void 0:t.startsWith("["))?t.replace(/^\[['"](.+)[['"]\]$/,".$1"):this.tsEntry.isImportStatementCompletion?t:this.tsEntry.name}resolveRange(){if(this.range)return;const e=this.getFuzzyWordRange();e&&(this.range={inserting:new vscode.Range(e.start,this.position),replacing:e})}getFuzzyWordRange(){if(this.completionContext.useFuzzyWordRangeLogic){const e=this.completionContext.line.slice(Math.max(0,this.position.character-this.label.length),this.position.character).toLowerCase(),t=this.label.toLowerCase();for(let i=t.length;i>=0;--i)if(e.endsWith(t.substr(0,i))&&(!this.completionContext.wordRange||this.completionContext.wordRange.start.character>this.position.character-i))return new vscode.Range(new vscode.Position(this.position.line,Math.max(0,this.position.character-i)),this.position)}return this.completionContext.wordRange}static convertKind(e){switch(e){case PConst.Kind.primitiveType:case PConst.Kind.keyword:return vscode.CompletionItemKind.Keyword;case PConst.Kind.const:case PConst.Kind.let:case PConst.Kind.variable:case PConst.Kind.localVariable:case PConst.Kind.alias:case PConst.Kind.parameter:return vscode.CompletionItemKind.Variable;case PConst.Kind.memberVariable:case PConst.Kind.memberGetAccessor:case PConst.Kind.memberSetAccessor:return vscode.CompletionItemKind.Field;case PConst.Kind.function:case PConst.Kind.localFunction:return vscode.CompletionItemKind.Function;case PConst.Kind.method:case PConst.Kind.constructSignature:case PConst.Kind.callSignature:case PConst.Kind.indexSignature:return vscode.CompletionItemKind.Method;case PConst.Kind.enum:return vscode.CompletionItemKind.Enum;case PConst.Kind.enumMember:return vscode.CompletionItemKind.EnumMember;case PConst.Kind.module:case PConst.Kind.externalModuleName:return vscode.CompletionItemKind.Module;case PConst.Kind.class:case PConst.Kind.type:return vscode.CompletionItemKind.Class;case PConst.Kind.interface:return vscode.CompletionItemKind.Interface;case PConst.Kind.warning:return vscode.CompletionItemKind.Text;case PConst.Kind.script:return vscode.CompletionItemKind.File;case PConst.Kind.directory:return vscode.CompletionItemKind.Folder;case PConst.Kind.string:return vscode.CompletionItemKind.Constant;default:return vscode.CompletionItemKind.Property}}static lspConvertKind(e){return e-1}static getCommitCharacters(e,t){if(e.isNewIdentifierLocation||!e.isInValidCommitCharacterContext)return;const i=[];switch(t.kind){case PConst.Kind.memberGetAccessor:case PConst.Kind.memberSetAccessor:case PConst.Kind.constructSignature:case PConst.Kind.callSignature:case PConst.Kind.indexSignature:case PConst.Kind.enum:case PConst.Kind.interface:i.push(".",";");break;case PConst.Kind.module:case PConst.Kind.alias:case PConst.Kind.const:case PConst.Kind.let:case PConst.Kind.variable:case PConst.Kind.localVariable:case PConst.Kind.memberVariable:case PConst.Kind.class:case PConst.Kind.function:case PConst.Kind.method:case PConst.Kind.keyword:case PConst.Kind.parameter:i.push(".",",",";"),e.enableCallCompletions&&i.push("(")}return 0===i.length?void 0:i}}class CompositeCommand{constructor(){this.id=CompositeCommand.ID}execute(...e){for(const t of e)vscode.commands.executeCommand(t.command,...t.arguments||[])}}CompositeCommand.ID="_typescript.composite";class CompletionAcceptedCommand{constructor(e,t){this.onCompletionAccepted=e,this.telemetryReporter=t,this.id=CompletionAcceptedCommand.ID}execute(e){this.onCompletionAccepted(e),e instanceof MyCompletionItem&&this.telemetryReporter.logTelemetry("completions.accept",{isPackageJsonImport:e.tsEntry.isPackageJsonImport?"true":void 0})}}CompletionAcceptedCommand.ID="_typescript.onCompletionAccepted";class ApplyCompletionCodeActionCommand{constructor(e){this.client=e,this.id=ApplyCompletionCodeActionCommand.ID}async execute(e,t){if(0===t.length)return!0;if(1===t.length)return(0,codeAction_1.applyCodeAction)(this.client,t[0],cancellation_1.nulToken);const i=await vscode.window.showQuickPick(t.map(((e,t)=>({label:e.description,description:"",index:t}))),{placeHolder:localize("selectCodeAction","Select code action to apply")});if(!i)return!1;const n=t[i.index];return!!n&&(0,codeAction_1.applyCodeAction)(this.client,n,cancellation_1.nulToken)}}var CompletionConfiguration;ApplyCompletionCodeActionCommand.ID="_typescript.applyCompletionCodeAction",function(e){e.useCodeSnippetsOnMethodSuggest="suggest.completeFunctionCalls",e.nameSuggestions="suggest.names",e.pathSuggestions="suggest.paths",e.autoImportSuggestions="suggest.autoImports",e.getConfigurationForResource=function(t,i){const n=vscode.workspace.getConfiguration(t,i);return{useCodeSnippetsOnMethodSuggest:n.get(e.useCodeSnippetsOnMethodSuggest,!1),pathSuggestions:n.get(e.pathSuggestions,!0),autoImportSuggestions:n.get(e.autoImportSuggestions,!0),nameSuggestions:n.get(e.nameSuggestions,!0)}}}(CompletionConfiguration||(CompletionConfiguration={}));class TypeScriptCompletionItemProvider{constructor(e,t,i,n,o,s,r){this.client=e,this.modeId=t,this.typingsStatus=i,this.fileConfigurationManager=n,this.telemetryReporter=s,o.register(new ApplyCompletionCodeActionCommand(this.client)),o.register(new CompositeCommand),o.register(new CompletionAcceptedCommand(r,this.telemetryReporter))}async provideCompletionItems(e,t,i,n){if(this.typingsStatus.isAcquiringTypings)return Promise.reject({label:localize({key:"acquiringTypingsLabel",comment:["Typings refers to the *.d.ts typings files that power our IntelliSense. It should not be localized"]},"Acquiring typings..."),detail:localize({key:"acquiringTypingsDetail",comment:["Typings refers to the *.d.ts typings files that power our IntelliSense. It should not be localized"]},"Acquiring typings definitions for IntelliSense.")});const o=this.client.toOpenedFilePath(e);if(!o)return null;const s=e.lineAt(t.line),r=CompletionConfiguration.getConfigurationForResource(this.modeId,e.uri);if(!this.shouldTrigger(n,s,t))return null;e.getWordRangeAtPosition(t);await this.client.interruptGetErr((()=>this.fileConfigurationManager.ensureConfigurationForDocument(e,i)));const a={...typeConverters.Position.toFileLocationRequestArgs(o,t),includeExternalModuleExports:r.autoImportSuggestions,includeInsertTextCompletions:!0,triggerCharacter:this.getTsTriggerCharacter(n)};let c,l,d,m,p,u=!0,g=!1,h=!1;if(this.client.apiVersion.gte(api_1.default.v300)){const n=Date.now();try{m=await this.client.interruptGetErr((()=>this.client.execute("completionInfo",a,i)))}finally{p=Date.now()-n}if((0,performance_1.report)("provideCompletionItems",p),"response"!==m.type||!m.body)return this.logCompletionsTelemetry(p,m),null;if(u=m.body.isNewIdentifierLocation,h=m.body.isMemberCompletion,h){const i=s.text.slice(0,t.character).match(/\??\.\s*$/)||void 0;if(i){const n=new vscode.Range(t.translate({characterDelta:-i[0].length}),t);c={range:n,text:e.getText(n)}}}g=m.metadata&&m.metadata.isIncomplete,l=m.body.entries,d=m.metadata}else{const e=await this.client.interruptGetErr((()=>this.client.execute("completions",a,i)));if("response"!==e.type||!e.body)return null;l=e.body,d=e.metadata}const C={isNewIdentifierLocation:u,isMemberCompletion:h,dotAccessorContext:c,isInValidCommitCharacterContext:this.isInValidCommitCharacterContext(e,t),enableCallCompletions:!r.useCodeSnippetsOnMethodSuggest,wordRange:void 0,line:s.text,useCodeSnippetsOnMethodSuggest:r.useCodeSnippetsOnMethodSuggest,useFuzzyWordRangeLogic:this.client.apiVersion.lt(api_1.default.v390)};let f=!1;const y=[];for(let i of l)shouldExcludeCompletionEntry(i,r)||(y.push(new MyCompletionItem(t,e,i,C,d)),f=!!i.isPackageJsonImport);return void 0!==p&&this.logCompletionsTelemetry(p,m,f),new vscode.CompletionList(y,g)}logCompletionsTelemetry(e,t,i){}getTsTriggerCharacter(e){switch(e.triggerCharacter){case"@":return this.client.apiVersion.gte(api_1.default.v310)&&this.client.apiVersion.lt(api_1.default.v320)?void 0:"@";case"#":return this.client.apiVersion.lt(api_1.default.v381)?void 0:"#";case".":case'"':case"'":case"`":case"/":case"<":return e.triggerCharacter}}async resolveCompletionItem(e,t){var i,n;const o=this.client.toOpenedFilePath(e.document);if(!o)return;const s={...typeConverters.Position.toFileLocationRequestArgs(o,e.position),entryNames:[e.tsEntry.source||e.tsEntry.data?{name:e.tsEntry.name,source:e.tsEntry.source,data:e.tsEntry.data}:e.tsEntry.name]};let r=Date.now();const a=await this.client.interruptGetErr((()=>this.client.execute("completionEntryDetails",s,t)));if("response"!==a.type||!a.body||!a.body.length)return e;let c=Date.now()-r;(0,performance_1.report)("completionEntryDetails",c);const l=a.body[0];if(l&&l.tags){let e="";const t=[];l.tags.forEach((i=>{if("uniPlatform"===i.name){if(!i.text)return;e="string"==typeof i.text?i.text:i.text[0].text}else t.push(i)})),l.tags=t;const i=new unixVersionCompatibilityResolver_1.UnixVersionCompatibilityResolver(e).getHtml();l.documentation||(l.documentation=[]);let n=!0;l.documentation.length>0&&l.documentation[0].text===i&&(n=!1),n&&l.documentation.unshift({text:i,kind:"text"})}!e.detail&&l.displayParts.length&&(e.detail=Previewer.plain(l.displayParts)),e.documentation=this.getDocumentation(l,e);const d=this.getCodeActions(l,o),m=[{command:CompletionAcceptedCommand.ID,title:"",arguments:[e]}];d.command&&m.push(d.command),e.additionalTextEdits=d.additionalTextEdits;let p=Object(),u=!1;if(null===(i=e.data)||void 0===i?void 0:i.hxKind)u=!0,p.insertText=e.insertText,"string"!=typeof p.insertText&&(p.insertText=null===(n=p.insertText)||void 0===n?void 0:n.value);else if(!e.tsEntry.isImportStatementCompletion){let t=ts.createSourceFile(e.document.uri.fsPath,e.document.getText(),ts.ScriptTarget.ESNext,!0);p=utils_1.hx.computeJSResolveData(e.label,e.detail,e.kind,e.document.offsetAt(e.position),e.textEdit,t,!0,void 0,void 0,e.range)}(0,performance_1.report)("hx.computeJSResolveData",Date.now()-r);let g="";if("string"==typeof e.insertText&&!u){-1!==e.insertText.indexOf(e.label)&&(g=e.insertText.substring(0,e.insertText.length-e.label.length))}if(p.insertText&&(e.insertText=new vscode.SnippetString(`${g}${p.insertText}`)),p.range&&(e.range=p.range),p.command?e.command=p.command:m.length&&(1===m.length?e.command=m[0]:e.command={command:CompositeCommand.ID,title:"",arguments:m}),"async"!==e.label&&"await"!==e.label&&"static"!==e.label||e.tsEntry&&"Snippet"===e.tsEntry.kindModifiers&&(e.insertText=new vscode.SnippetString(e.tsEntry.insertText)),"snippet"===l.kind&&(e.insertText=new vscode.SnippetString(l.name)),e.tsEntry.isSnippet&&"string"==typeof e.insertText&&(e.insertText=new vscode.SnippetString(e.insertText)),l.codeActions&&l.codeActions.length>0){const t=l.codeActions[0].commands||[];if(t.length>0){const i=t.filter((e=>e.command&&"editor.action.triggerSnippet"===e.command))||[],n=[];i.forEach((e=>{n.push(...e.arguments.snippets)})),e.insertText=l.name,e.command={title:"Suggest",command:"editor.action.triggerSnippet",arguments:n}}}return e}getCodeActions(e,t){if(!e.codeActions||!e.codeActions.length)return{};const i=[];let n,o=!1;for(const n of e.codeActions)if(n.commands&&(o=!0),n.changes)for(const e of n.changes)""===(0,path_1.relative)((0,path_1.join)(e.fileName).toLowerCase(),(0,path_1.join)(t).toLowerCase())?i.push(...e.textChanges.map(typeConverters.TextEdit.fromCodeEdit)):o=!0;return o&&(n={title:"",command:ApplyCompletionCodeActionCommand.ID,arguments:[t,e.codeActions.map((e=>({commands:e.commands,description:e.description,changes:e.changes.filter((e=>e.fileName!==t))})))]}),{command:n,additionalTextEdits:i.length?i:void 0}}isInValidCommitCharacterContext(e,t){if(this.client.apiVersion.lt(api_1.default.v320)&&t.character>1){return null===e.getText(new vscode.Range(t.line,0,t.line,t.character)).match(/(\s|^)\.$/gi)}return!0}shouldTrigger(e,t,i){if(e.triggerCharacter&&this.client.apiVersion.lt(api_1.default.v290)){if('"'===e.triggerCharacter||"'"===e.triggerCharacter){const e=t.text.slice(0,i.character);if(!e.match(/\b(from|import)\s*["']$/)&&!e.match(/\b(import|require)\(['"]$/))return!1}if("/"===e.triggerCharacter){const e=t.text.slice(0,i.character);if(!e.match(/\b(from|import)\s*["'][^'"]*$/)&&!e.match(/\b(import|require)\(['"][^'"]*$/))return!1}if("@"===e.triggerCharacter){const e=t.text.slice(0,i.character);if(!e.match(/^\s*\*[ ]?@/)&&!e.match(/\/\*\*+[ ]?@/))return!1}if("<"===e.triggerCharacter)return!1}return!0}getDocumentation(e,t){const i=new vscode.MarkdownString;if(e.source){const i=`'${Previewer.plain(e.source)}'`,n=localize("autoImportLabel","Auto import from {0}",i);t.detail=`${n}\n${t.detail}`}return Previewer.addMarkdownDocumentation(i,e.documentation,e.tags),i.value.length?i:void 0}async isValidFunctionCompletionContext(e,t,i,n){try{const i=typeConverters.Position.toFileLocationRequestArgs(e,t),o=await this.client.execute("quickinfo",i,n);if("response"===o.type&&o.body)switch(o.body.kind){case"var":case"let":case"const":case"alias":return!1}}catch{}return null===i.lineAt(t.line).text.slice(t.character).match(/^[a-z_$0-9]*\s*\(/gi)}}function shouldExcludeCompletionEntry(e,t){return!t.nameSuggestions&&e.kind===PConst.Kind.warning||!t.pathSuggestions&&(e.kind===PConst.Kind.directory||e.kind===PConst.Kind.script||e.kind===PConst.Kind.externalModuleName)||!t.autoImportSuggestions&&e.hasAction}function register(e,t,i,n,o,s,r,a){return vscode.languages.registerCompletionItemProvider(e.syntax,new TypeScriptCompletionItemProvider(i,t,n,o,s,r,a),...TypeScriptCompletionItemProvider.triggerCharacters)}TypeScriptCompletionItemProvider.triggerCharacters=[".",'"',"'","`","/","@","<","#"],exports.register=register;