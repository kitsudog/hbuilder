"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.StyleScriptCache=exports.StyleCacheInfo=void 0;const vscode_languageserver_textdocument_1=require("vscode-languageserver-textdocument"),vscode_uri_1=require("vscode-uri");class StyleCacheInfo{constructor(e,t){this._styleDocument=e,this._version=t}get styleDocument(){return this._styleDocument}get version(){return this._version}}exports.StyleCacheInfo=StyleCacheInfo;class StyleScriptCache{constructor(e,t){this._tsImpl=e,this._tsServerHost=t,this._cache=new Map}get tsImpl(){return this._tsImpl}getUpToDateInfo(e){const t=this._cache.get(e),s=this._tsServerHost.getScriptVersion(e);if(t&&t.version===s)return t;const r=this._tsServerHost.getScriptSnapshot(e);if(!r)return;const c=r.getText(0,r.getLength()),o=vscode_uri_1.URI.file(e).toString(),n=vscode_languageserver_textdocument_1.TextDocument.create(o,"style",0,c),i=new StyleCacheInfo(n,s);return this._cache.set(e,i),i}}exports.StyleScriptCache=StyleScriptCache;