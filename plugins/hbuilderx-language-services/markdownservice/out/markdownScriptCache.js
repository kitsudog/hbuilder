"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MarkdownScriptCache=exports.MarkdownCacheInfo=void 0;const vscode_languageserver_textdocument_1=require("vscode-languageserver-textdocument");class MarkdownCacheInfo{constructor(e,t){this._markdownDocument=e,this._version=t}get markdownDocument(){return this._markdownDocument}get version(){return this._version}}exports.MarkdownCacheInfo=MarkdownCacheInfo;class MarkdownScriptCache{constructor(e,t){this.tsImpl=e,this.tsServerHost=t,this.cache=new Map}getUpToDateInfo(e){let t=this.cache.get(e),r=this.tsServerHost.getScriptVersion(e);if(t&&t.version===r)return t;let o=this.tsServerHost.getScriptSnapshot(e);if(!o)return;let s=o.getText(0,o.getLength()),n=vscode_languageserver_textdocument_1.TextDocument.create(e,"style",0,s),c=new MarkdownCacheInfo(n,r);return this.cache.set(e,c),c}}exports.MarkdownScriptCache=MarkdownScriptCache;