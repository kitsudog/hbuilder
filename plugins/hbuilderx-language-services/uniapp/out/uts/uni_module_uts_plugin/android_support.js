"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AndroidLanguageService=void 0;const fs=require("fs"),path=require("path"),hx=require("../../../../core"),core_1=require("../../../../core"),tsUtils_1=require("../../utils/tsUtils"),types_1=require("../types"),utsLanguageServiceInterface_1=require("../utsLanguageServiceInterface"),platform_type_checker_plugin_1=require("../typeCheckerPlugin/platform_type_checker_plugin"),common_support_1=require("./common_support");class AndroidDocumentProvider extends common_support_1.CommonDocumentProvider{constructor(e,t){super(e),this._androidLs=t,this._androidTypeCheckerPlugin=new platform_type_checker_plugin_1.AndroidTypeChekerPlugin(e,t)}get version(){return this._info.tsinfo.project.getProjectVersion()+utsLanguageServiceInterface_1.Global.getLibFilesVersion(types_1.UtsPluginPlatform.APP_ANDROID)}_getDocuments(){let e=super._getDocuments();return e.push(...utsLanguageServiceInterface_1.UtsPluginLanguageService.getScriptFileNamesAndFileRefrences(this._info,AndroidLanguageService.resolveFileRefrence)),e}resolveModuleNameOverride(e,t,i,n,a,r,s,o){let g;try{const c=utsLanguageServiceInterface_1.UtsPluginLanguageService.Utils.getPlatformModuleNameResolver(types_1.UtsPluginPlatform.APP_ANDROID,this._info);g=c.resolveModuleNameDependOnUtsLsInstance?c.resolveModuleNameDependOnUtsLsInstance(this._androidLs,e,t,i,n,a,r,s,o):void 0}catch(e){g=void 0}return g||(g=super.resolveModuleNameOverride(e,t,i,n,a,r,s,o)),g}getDefaultLibs(e){return[...super.getDefaultLibs(e),...utsLanguageServiceInterface_1.UtsPluginLanguageService.Utils.getPlatformDefaultLibs(types_1.UtsPluginPlatform.APP_ANDROID)]}checkExpression(e,t,i,n,a,r){let s=this._androidTypeCheckerPlugin.checkExpression(e,t,i,n,a,r);return s||(s=super.checkExpression(e,t,i,n,a,r)),s}getContextualType(e,t,i,n,a){let r=this._androidTypeCheckerPlugin.getContextualType(e,t,i,n,a);return r||(r=super.getContextualType(e,t,i,n,a)),r}}class AndroidLanguageService{constructor(e){this._info=e,this._thridLibTypeMaps=new Map,this._utsThridLibs=new Map,this.listenThirdJarDtsFiles(),this._originalLs=void 0,utsLanguageServiceInterface_1.Global.registLibFilesPlatformResolver(types_1.UtsPluginPlatform.APP_ANDROID,((e,t)=>this.libFilesPlatformResolver(e,t))),AndroidLanguageService.init(e.ts)}async getCompletionsAtPosition(e,t,i){var n,a,r,s,o,g;const c=this;let d=this.getUtsLanguageService(),l=d.getCompletionsAtPosition(e,t,i);const u=new Set(this._thridLibTypeMaps.keys());AndroidLanguageService._androidSystemLibTypeMap&&u.add(null===(n=AndroidLanguageService._androidSystemLibTypeMap)||void 0===n?void 0:n.path);const p=new Set;let h=(null==l?void 0:l.entries.filter((e=>{if(e.source){const t=path.join(e.source);for(let e of u)if(t.startsWith(e))return!1}return p.add(e.name),!0})))||[],f=d.getProgram();if(f){let i=f.getSourceFile(e);if(i){const n=this.getTypeMapInfosFromFile(e);if(utsLanguageServiceInterface_1.UtsPluginLanguageService.isImportStringLiteral(i,t,this._info.ts)){let e=null===(a=this._info.ts.getTokenAtPosition(i,t).text)||void 0===a?void 0:a.trim();if(AndroidLanguageService.isAndroidPackageNameLike(e)){let t=e.split(".");if(t.length<=1)v(null===(r=AndroidLanguageService._androidSystemLibTypeMap)||void 0===r?void 0:r.data.tree),n.forEach((e=>{const t=e.data.tree;t&&v(t)}));else{t.length=t.length-1;let e=null===(s=AndroidLanguageService._androidSystemLibTypeMap)||void 0===s?void 0:s.data.tree;for(let i of t)e&&i&&(e=e[i]);e&&v(e),n.forEach((e=>{let i=e.data.tree;for(let e of t)i&&e&&(i=i[e]);i&&v(i)}))}}}else if(!(null==l?void 0:l.isMemberCompletion)&&h.length>0){let e=this._info.ts.getTokenAtPosition(i,t-1);if(e&&this._info.ts.isIdentifier(e)){h.push(...AndroidLanguageService.getDefaultImportEntries().filter((e=>!p.has(e.name)&&(p.add(e.name),!0))));let t=new Set,i=null===(o=AndroidLanguageService._androidSystemLibTypeMap)||void 0===o?void 0:o.data.map;if(i)for(let n in i){const a=n.split("."),r=a[a.length-1],s=(0,tsUtils_1.fixTsNodeText)(e.getText());!r.toLocaleLowerCase().startsWith(s.toLocaleLowerCase())||"class"!==i[n].type&&"interface"!==i[n].type||t.add(i[n])}n.forEach((i=>{let n=i.data.map;for(let i in n){const a=i.split("."),r=a[a.length-1],s=(0,tsUtils_1.fixTsNodeText)(e.getText());!r.toLocaleLowerCase().startsWith(s.toLocaleLowerCase())||"class"!==n[i].type&&"interface"!==n[i].type||t.add(n[i])}}));let a=f.getTypeChecker().getSymbolsInScope(e,core_1.ts.SymbolFlags.All),r=new Map;a.forEach((e=>{r.set(e.escapedName,e)}));const s=new Set(null===(g=AndroidLanguageService._androidSystemLibTypeMap)||void 0===g?void 0:g.data.defaultImport);t.forEach((e=>{let t=e.name.substring(e.name.lastIndexOf("."),e.name.length);t=t.startsWith(".")?t.substring(1):t,r.has(t)||s.has(e.name)||h.push({name:t,kind:e.type,sortText:t,source:AndroidLanguageService._sourceFlag+t,data:{exportName:t,exportMapKey:e.name}})}))}}}}return l&&(l.entries=h),l;function v(e){for(let t in e)p.has(t)||(h.push({name:t,kind:c._info.ts.ScriptElementKind.string,sortText:t}),p.add(t))}}getCompletionEntryDetails(e,t,i,n,a,r,s){var o,g,c,d;let l=this.getUtsLanguageService();if(null==a?void 0:a.startsWith(AndroidLanguageService._sourceFlag)){let i=null===(o=l.getProgram())||void 0===o?void 0:o.getSourceFile(e),n=s,a=null===(g=AndroidLanguageService._androidSystemLibTypeMap)||void 0===g?void 0:g.data.map[n.exportMapKey];if(!a)for(let e of this._thridLibTypeMaps.keys())if(a=null===(c=this._thridLibTypeMaps.get(e))||void 0===c?void 0:c.data.map[n.exportMapKey],a)break;if(a){let r={name:n.exportName,kind:a.type,kindModifiers:a.type,displayParts:[{kind:"text",text:""}]};r.codeActions||(r.codeActions=[]);let s=e=>{let t=[];return e.forEach((e=>{this._info.ts.isImportDeclaration(e)&&t.push(e),t.push(...s(e.getChildren()))})),t},o=s(i.getChildren()),g=0,c=o[0];o.forEach((e=>{e.end>g&&e.end<t&&(g=e.end,c=e)}));let l=utsLanguageServiceInterface_1.UtsPluginLanguageService.getImportNodeIndentText(c),u={start:g,length:0},p=`${0!==g?"\n":""}${l}import ${n.exportName} from '${n.exportMapKey}';${0===g?"\n":""}`;return null===(d=null==r?void 0:r.codeActions)||void 0===d||d.push({description:"",changes:[{fileName:e,textChanges:[{span:u,newText:p}]}]}),r.source=[{text:n.exportMapKey,kind:"text"}],r}}else if(null==a?void 0:a.startsWith(AndroidLanguageService._defaultInportSourceFlag))return AndroidLanguageService.resolveDefaultImportEntry(s);return l.getCompletionEntryDetails(e,t,i,n,a,r,s)}async getDefinitionAndBoundSpan(e,t){var i;let n=this.getUtsLanguageService(),a=n.getProgram();if(a){let n=a.getSourceFile(e);if(n){let a=this._info.ts.getTokenAtPosition(n,t);if(this._info.ts.isStringLiteralLike(a)&&a.parent&&this._info.ts.isImportDeclaration(a.parent)){let t=a,n=null===(i=t.text)||void 0===i?void 0:i.trim();if(AndroidLanguageService.isAndroidPackageNameLike(n)){const i=utsLanguageServiceInterface_1.Global.resolveUtsPluginName(e,this._info.project),a=this.getAndroidLibFilePathFromPackageName(n,i);if(a)return{textSpan:{start:t.getStart(),length:t.getText().length},definitions:[{textSpan:{start:0,length:0},fileName:a,kind:this._info.ts.ScriptElementKind.unknown,name:n,containerKind:this._info.ts.ScriptElementKind.unknown,containerName:""}]}}}}}return n.getDefinitionAndBoundSpan(e,t)}async getQuickInfoAtPosition(e,t){return this.getUtsLanguageService().getQuickInfoAtPosition(e,t)}async getSemanticDiagnosticsAsync(e){let t=this.getUtsLanguageService(),i=t.getSemanticDiagnostics(e),n=[];return i&&i.forEach((e=>{var i;const a=e.file,r=e.start;if(a&&r){let n=this._info.ts.getTokenAtPosition(a,r);if(4112===e.code&&this._info.ts.isIdentifier(n)&&n.parent&&n.parent.parent&&this._info.ts.isMethodDeclaration(n.parent)&&this._info.ts.isClassDeclaration(n.parent.parent)){let e=t.getProgram();if(e){let t=e.getTypeChecker();const a=n.parent.parent.heritageClauses;if(a){a.length;for(let e=0;e<a.length;++e){let n=null===(i=a[e].types[0])||void 0===i?void 0:i.expression;if(n){let e=t.getSymbolAtLocation(n);if(e){if(t.getDeclaredTypeOfSymbol(e).flags===this._info.ts.TypeFlags.Any)return}}}}}}}n.push(e)})),n=utsLanguageServiceInterface_1.UtsPluginLanguageService.CommonLogic.getSemanticDiagnostics(t,e,this._info.ts,n),n}getSignatureHelpItems(e,t,i){return this.getUtsLanguageService().getSignatureHelpItems(e,t,i)}getCodeFixesAtPosition(e,t,i,n,a,r){const s=[...this.getUtsLanguageService().getCodeFixesAtPosition(e,t,i,n,a,r)],o=this.getUtsLanguageService();if(n.includes(2304)){const i=o.getProgram();if(i){const n=i.getSourceFile(e);if(n){let i=this._info.ts.getTokenAtPosition(n,t);if(i.kind===this._info.ts.SyntaxKind.Identifier){const a=i.escapedText,r=this.getDetailsInfo(e,a,!1),o=utsLanguageServiceInterface_1.UtsPluginLanguageService.findImportNode(n.getChildren(),this._info.ts),g=utsLanguageServiceInterface_1.UtsPluginLanguageService.getLastImportNode(o,t);let c=g?g.end:0,d=0===c?"":"\n";d+=g?utsLanguageServiceInterface_1.UtsPluginLanguageService.getImportNodeIndentText(g):"",r.forEach((t=>{let i=d;i+="import ",i+=a,i+=' from "',i+=t.name,i+='";',i+=0===c?"\n":"",s.push({fixName:"auto import package",description:`import default '${a}' from module '${t.name}'`,changes:[{fileName:e,textChanges:[{newText:i,span:{start:c,length:0}}]}]})}))}}}}if(n.includes(2345)||n.includes(2322)){let a=common_support_1.CommonLanguageService.getAutoFixCode(e,t,i,n,o,this._info.ts);s.push(...a)}return s}async getSuggestionDiagnosticsAsync(e){return this.getUtsLanguageService().getSuggestionDiagnostics(e)}async getSyntacticDiagnosticsAsync(e){const t=this.getUtsLanguageService();let i=t.getSyntacticDiagnostics(e);return utsLanguageServiceInterface_1.UtsPluginLanguageService.CommonLogic.getSyntacticDiagnostics(t,e,this._info.ts,i,hx.TargetKind["APP-ANDROID"])}getCompletionEntrySymbol(e,t,i,n){return this.getUtsLanguageService().getCompletionEntrySymbol(e,t,i,n)}getDefinitionAtPosition(e,t){return this.getUtsLanguageService().getDefinitionAtPosition(e,t)}getTypeDefinitionAtPosition(e,t){return this.getUtsLanguageService().getTypeDefinitionAtPosition(e,t)}getImplementationAtPosition(e,t){return this.getUtsLanguageService().getImplementationAtPosition(e,t)}getDocumentHighlights(e,t,i){return this.getUtsLanguageService().getDocumentHighlights(e,t,i)}findRenameLocations(e,t,i,n,a){return this.getUtsLanguageService().findRenameLocations(e,t,i,n,a)}getReferencesAtPosition(e,t){return this.getUtsLanguageService().getReferencesAtPosition(e,t)}findReferences(e,t){return this.getUtsLanguageService().findReferences(e,t)}getNavigateToItems(e,t,i,n){return this.getUtsLanguageService().getNavigateToItems(e,t,i,n)}getEmitOutput(e,t,i){return this.getUtsLanguageService().getEmitOutput(e,t,i)}getSemanticClassifications(e,t,i){return this.getUtsLanguageService().getSemanticClassifications(e,t,i)}getEncodedSemanticClassifications(e,t,i){return this.getUtsLanguageService().getEncodedSemanticClassifications(e,t,i)}getCombinedCodeFix(e,t,i,n){return this.getUtsLanguageService().getCombinedCodeFix(e,t,i,n)}organizeImports(e,t,i){return this.getUtsLanguageService().organizeImports(e,t,i)}getTodoComments(e,t){return this.getUtsLanguageService().getTodoComments(e,t)}getRenameInfo(e,t,i){return this.getUtsLanguageService().getRenameInfo(e,t,i)}getApplicableRefactors(e,t,i,n,a){return this.getUtsLanguageService().getApplicableRefactors(e,t,i,n,a)}getEditsForRefactor(e,t,i,n,a,r){return this.getUtsLanguageService().getEditsForRefactor(e,t,i,n,a,r)}prepareCallHierarchy(e,t){return this.getUtsLanguageService().prepareCallHierarchy(e,t)}provideCallHierarchyIncomingCalls(e,t){return this.getUtsLanguageService().provideCallHierarchyIncomingCalls(e,t)}provideCallHierarchyOutgoingCalls(e,t){return this.getUtsLanguageService().provideCallHierarchyOutgoingCalls(e,t)}provideInlayHints(e,t,i){return this.getUtsLanguageService().provideInlayHints(e,t,i)}getFileReferences(e){return this.getUtsLanguageService().getFileReferences(e)}resolvePackageNameToSymbol(e,t){let i=(null==e?void 0:e.trim()).split("."),n=t.find((e=>e.escapedName===i[0]));if(n){if(i.length<=1)return n;i.shift();let e=utsLanguageServiceInterface_1.Global.getSymbol(i,n,this._info.ts);if(e&&e.escapedName===i[i.length-1])return e}}getUtsLanguageService(){if(!this._utsPluginLs){const e=new AndroidDocumentProvider(this._info,this);let t=utsLanguageServiceInterface_1.UtsPluginLanguageService.Utils.createLanguageServiceHost(e,this._info.project,this._info);const i=this._info.ts.createLanguageService2(this._info,t,this._info.project.documentRegistry);this._utsPluginLs=i}return this._utsPluginLs}setOriginalLanguageService(e){this._originalLs=e}static listenSystemLibTypeMap(e){const t=path.join(utsLanguageServiceInterface_1.Global.g_extensionPath,"../uts-development-android/uts-types",types_1.UtsPluginPlatform.APP_ANDROID);this._androidSystemLibTypeMap=this.resolveLibTypeMap(t);const i=path.join(t,"typeMap.json");core_1.ts.sys.watchFile(i,((e,t)=>{t===core_1.ts.FileWatcherEventKind.Deleted?this._androidSystemLibTypeMap=void 0:t!==core_1.ts.FileWatcherEventKind.Created&&t!==core_1.ts.FileWatcherEventKind.Changed||(this._androidSystemLibTypeMap=this.resolveLibTypeMap(path.dirname(i)))}),300)}listenThirdJarDtsFiles(){const e=hx.getSysArgsData(this._info.ts,"--vscodeEnvAppData");if(!e)return;const t=this,i=require("md5"),n=path.join(e,"android_third_lib",i(path.join(this._info.project.fsPath)));fs.existsSync(n)||fs.mkdirSync(n,{recursive:!0});const a=fs.readdirSync(n);for(const e of a){const t=path.join(n,e);if(fs.statSync(t).isDirectory()){let e=AndroidLanguageService.resolveLibTypeMap(t);e&&(this._thridLibTypeMaps.set(t,e),o(t))}}const r=path.join(n,"map.json");function s(){try{const e=JSON.parse(fs.readFileSync(r).toString());for(let i in e){const a=new Set;for(let t of e[i])a.add(path.join(n,t));t._utsThridLibs.set(i,a)}}catch(e){}}function o(e){const i=path.join(e,"typeMap.json");t._info.ts.sys.watchFile(i,((i,n)=>{if(n===t._info.ts.FileWatcherEventKind.Created||n===t._info.ts.FileWatcherEventKind.Changed){let i=AndroidLanguageService.resolveLibTypeMap(e);i&&t._thridLibTypeMaps.set(e,i)}else n===t._info.ts.FileWatcherEventKind.Deleted&&t._thridLibTypeMaps.has(e)&&t._thridLibTypeMaps.delete(e)}),300)}r&&fs.existsSync(r)&&s(),this._info.ts.sys.watchDirectory(n,(e=>{if(fs.existsSync(e)){if(fs.statSync(e).isDirectory()){let t=AndroidLanguageService.resolveLibTypeMap(e);t&&this._thridLibTypeMaps.set(e,t)}}else this._thridLibTypeMaps.has(e)&&this._thridLibTypeMaps.delete(e),this._utsThridLibs.forEach((t=>{t.has(e)&&t.delete(e)}))})),this._info.ts.sys.watchFile(r,((e,t)=>{t===this._info.ts.FileWatcherEventKind.Created||t===this._info.ts.FileWatcherEventKind.Changed?(this._utsThridLibs.clear(),s()):t===this._info.ts.FileWatcherEventKind.Deleted&&this._utsThridLibs.clear()}),300)}static isAndroidPackageNameLike(e){return!/[/\\]+/g.test(e)&&/[.]?/g.test(e)}getAndroidLibFilePathFromPackageName(e,t){var i,n;const a=AndroidLanguageService.getAndroidLibFilePathFromPackageName(e);if(!a)if(t){const i=this.getTypeMapInfosFromUtsPluinName(t);for(let t of i){let i=t.data.map[e];if(i)return AndroidLanguageService.processPath(i,t.path)}}else for(let t of this._thridLibTypeMaps.keys()){const a=null===(i=this._thridLibTypeMaps.get(t))||void 0===i?void 0:i.data.map[e];if(a)return AndroidLanguageService.processPath(a,null===(n=this._thridLibTypeMaps.get(t))||void 0===n?void 0:n.path)}return a}static resolveLibTypeMap(e){if(e&&fs.existsSync(e)){const t=path.join(e,"typeMap.json");if(fs.existsSync(t))try{return{path:e,data:JSON.parse(fs.readFileSync(t).toString())}}catch(e){}}}getTypeMapInfosFromFile(e){const t=utsLanguageServiceInterface_1.Global.resolveUtsPluginName(e,this._info.project);return t?this.getTypeMapInfosFromUtsPluinName(t):[]}getTypeMapInfosFromUtsPluinName(e){const t=[],i=this._utsThridLibs.get(e);return i&&this._thridLibTypeMaps.forEach((e=>{i.has(e.path)&&t.push(e)})),t}libFilesPlatformResolver(e,t){var i;if(t&&!fs.existsSync(e))return!1;if(hx.fileStartsWith(e,[path.join(utsLanguageServiceInterface_1.UtsPluginLanguageService.Constants.UTS_BASE_LIBS_ENTRY_PATH,types_1.UtsPluginPlatform.APP_ANDROID)]))return!0;const n=new Set(this._thridLibTypeMaps.keys());AndroidLanguageService._androidSystemLibTypeMap&&n.add(null===(i=AndroidLanguageService._androidSystemLibTypeMap)||void 0===i?void 0:i.path);for(let t of n)if(path.relative(e,t).endsWith(".."))return!0;return!1}getDetailsInfo(e,t,i=!0){var n;let a=new Set,r=null===(n=AndroidLanguageService._androidSystemLibTypeMap)||void 0===n?void 0:n.data.map;if(r)for(let e in r)s(e,r[e]);return this.getTypeMapInfosFromFile(e).forEach((e=>{let t=e.data.map;for(let e in t)s(e,t[e])})),a;function s(e,n){const r=e.split("."),s=r[r.length-1],o=t;i?!s.toLocaleLowerCase().startsWith(o.toLocaleLowerCase())||"class"!==n.type&&"interface"!==n.type||a.add(n):s!==o||"class"!==n.type&&"interface"!==n.type||a.add(n)}}static init(e){let t=utsLanguageServiceInterface_1.Global.getTimeWatcher();t.startCollect("init android common source"),this._androidSystemLibTypeMap=void 0,this.listenSystemLibTypeMap(core_1.ts),this.init=()=>{},t.endCollect()}static systemLibPlatFormResolver(e,t){var i;if(t&&!fs.existsSync(e))return!1;if(hx.fileStartsWith(e,[path.join(utsLanguageServiceInterface_1.UtsPluginLanguageService.Constants.UTS_BASE_LIBS_ENTRY_PATH,types_1.UtsPluginPlatform.APP_ANDROID)]))return!0;const n=null===(i=AndroidLanguageService._androidSystemLibTypeMap)||void 0===i?void 0:i.path;return!(!n||!path.relative(e,n).endsWith(".."))}static getAndroidLibFilePathFromPackageName(e){var t,i;if(this.isAndroidPackageNameLike(e)){const n=null===(t=AndroidLanguageService._androidSystemLibTypeMap)||void 0===t?void 0:t.data.map[e];if(n)return this.processPath(n,null===(i=AndroidLanguageService._androidSystemLibTypeMap)||void 0===i?void 0:i.path)}}static processPath(e,t){const i=e.name.replace(/\./g,"/");if("class"===e.type||"interface"===e.type)return path.join(t,i+".d.ts")}static getModuleEntries(e){var t,i;if(AndroidLanguageService.isAndroidPackageNameLike(e)){if(/\.\s*\./g.exec(e))return[];let n=e.split(".");if(n.length<=1)return utsLanguageServiceInterface_1.UtsPluginLanguageService.Utils.getEntriesByObjectKey(null===(t=AndroidLanguageService._androidSystemLibTypeMap)||void 0===t?void 0:t.data.tree,"string",e);{n.length=n.length-1;let e=null===(i=AndroidLanguageService._androidSystemLibTypeMap)||void 0===i?void 0:i.data.tree;for(let t of n)e&&t&&(e=e[t]);if(e)return utsLanguageServiceInterface_1.UtsPluginLanguageService.Utils.getEntriesByObjectKey(e,"string")}}return[]}static getAutoImportEntries(e){var t;const i=[];let n=new Set,a=null===(t=AndroidLanguageService._androidSystemLibTypeMap)||void 0===t?void 0:t.data.map;if(a)for(let t in a){const i=t.split("."),r=i[i.length-1],s=(0,tsUtils_1.fixTsNodeText)(e);!r.toLocaleLowerCase().startsWith(s.toLocaleLowerCase())||"class"!==a[t].type&&"interface"!==a[t].type||n.add(a[t])}return n.forEach((e=>{let t=e.name.substring(e.name.lastIndexOf("."),e.name.length);t=t.startsWith(".")?t.substring(1):t,i.push({name:t,kind:e.type,sortText:t,source:this._sourceFlag+t,data:{exportName:t,exportMapKey:e.name}})})),i}static resolveAutoImportEntry(e,t,i,n){var a,r;let s=e,o=null===(a=AndroidLanguageService._androidSystemLibTypeMap)||void 0===a?void 0:a.data.map[s.exportMapKey];if(o){let e={name:s.exportName,kind:o.type,kindModifiers:o.type,displayParts:[{kind:"text",text:""}]};e.codeActions||(e.codeActions=[]);const n=utsLanguageServiceInterface_1.UtsPluginLanguageService.findImportNode(null==i?void 0:i.getChildren(),core_1.ts),a=utsLanguageServiceInterface_1.UtsPluginLanguageService.getLastImportNode(n,t),g=a?a.end:0;let c={start:g,length:0},d=`${0!==g?"\n":""}${a?utsLanguageServiceInterface_1.UtsPluginLanguageService.getImportNodeIndentText(a):""}import ${s.exportName} from '${s.exportMapKey}';${0===g?"\n":""}`;return null===(r=null==e?void 0:e.codeActions)||void 0===r||r.push({description:"",changes:[{fileName:i.fileName,textChanges:[{span:c,newText:d}]}]}),e.source=[{text:s.exportMapKey,kind:"text"}],e}}static getDefaultImportEntries(){var e;let t=[];const i=null===(e=AndroidLanguageService._androidSystemLibTypeMap)||void 0===e?void 0:e.data.defaultImport;return null==i||i.forEach((e=>{var i;const n=null===(i=AndroidLanguageService._androidSystemLibTypeMap)||void 0===i?void 0:i.data.map[e];if(n){const i=AndroidLanguageService.getLastName(e);t.push({name:i,kind:n.type,sortText:i,source:AndroidLanguageService._defaultInportSourceFlag+i,data:{exportName:i,exportMapKey:n.name}})}})),t}static resolveDefaultImportEntry(e){var t;let i=null===(t=AndroidLanguageService._androidSystemLibTypeMap)||void 0===t?void 0:t.data.map[e.exportMapKey];if(i){return{name:e.exportName,kind:i.type,kindModifiers:i.type,displayParts:[{kind:"text",text:i.type+" "+e.exportName}]}}}static resolveFileRefrence(e){var t;const i=[];let n=e.getText(0,e.getLength());const a=null===(t=AndroidLanguageService._androidSystemLibTypeMap)||void 0===t?void 0:t.data.defaultImport;return null==a||a.forEach((e=>{const t=AndroidLanguageService.getLastName(e),a=AndroidLanguageService.getAndroidLibFilePathFromPackageName(e);let r=new RegExp(`(?<!//.*)\\b${t}\\b`);a&&r.test(n)&&i.push(a)})),i}static getLastName(e){let t=e.split(".");return t[t.length-1]}}exports.AndroidLanguageService=AndroidLanguageService,AndroidLanguageService._sourceFlag="uts-android://",AndroidLanguageService._defaultInportSourceFlag="uts-android-default-import://",AndroidLanguageService._androidSystemLibTypeMap=void 0;