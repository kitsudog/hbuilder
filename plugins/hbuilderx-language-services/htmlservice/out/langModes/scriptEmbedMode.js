"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScriptEmbedMode=void 0;class ScriptEmbedMode{constructor(e,t){this.info=e,this.htmlCachesInProjectScope=t}async getCompletionsAtPositionAsync(e,t,n,i){return e.getCompletionsAtPositionAsync(t,n,i)}getCompletionEntryDetails(e,t,n,i,s,o,r,c){return e.getCompletionEntryDetails(t,n,i,s,o,r,c)}async getQuickInfoAtPositionAsync(e,t,n){return e.getQuickInfoAtPositionAsync(t,n)}getSignatureHelpItems(e,t,n,i){return e.getSignatureHelpItems(t,n,i)}async getDefinitionAndBoundSpanAsync(e,t,n){return e.getDefinitionAndBoundSpanAsync(t,n)}getNavigationTree(e,t){return e.getNavigationTree(t)}async findReferencesAsync(e,t,n){return e.findReferencesAsync(t,n)}async getSyntacticDiagnosticsAsync(e){return this.info.languageServiceRouter.getSyntacticDiagnosticsAsync(e)}}exports.ScriptEmbedMode=ScriptEmbedMode;