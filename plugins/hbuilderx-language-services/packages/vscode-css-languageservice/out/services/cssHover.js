"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,s,r)}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t};Object.defineProperty(exports,"__esModule",{value:!0}),exports.CSSHover=void 0;const nodes=__importStar(require("../parser/cssNodes")),languageFacts=__importStar(require("../languageFacts/facts")),selectorPrinting_1=require("./selectorPrinting"),cssLanguageTypes_1=require("../cssLanguageTypes"),objects_1=require("../utils/objects");class CSSHover{constructor(e,t){this.clientCapabilities=e,this.cssDataManager=t,this.selectorPrinting=new selectorPrinting_1.SelectorPrinting(t)}doHover(e,t,n,s){function r(t){return cssLanguageTypes_1.Range.create(e.positionAt(t.offset),e.positionAt(t.end))}const o=e.offsetAt(t),i=nodes.getNodePath(n,o);let a=null;for(let e=0;e<i.length;e++){const t=i[e];if(t instanceof nodes.Selector){a=null;break}if(t instanceof nodes.SimpleSelector){a=null;break}if(t instanceof nodes.Declaration){const e=t.getFullPropertyName(),n=this.cssDataManager.getProperty(e);if(n){const e=languageFacts.getEntryDescription(n,this.doesSupportMarkdown(),s);a=e?{contents:e,range:r(t)}:null}}else if(t instanceof nodes.UnknownAtRule){const e=t.getText(),n=this.cssDataManager.getAtDirective(e);if(n){const e=languageFacts.getEntryDescription(n,this.doesSupportMarkdown(),s);a=e?{contents:e,range:r(t)}:null}}else if(t instanceof nodes.Node&&t.type===nodes.NodeType.PseudoSelector){const e=t.getText(),n="::"===e.slice(0,2)?this.cssDataManager.getPseudoElement(e):this.cssDataManager.getPseudoClass(e);if(n){const e=languageFacts.getEntryDescription(n,this.doesSupportMarkdown(),s);a=e?{contents:e,range:r(t)}:null}}else;}return a&&(a.contents=this.convertContents(a.contents)),a}convertContents(e){return this.doesSupportMarkdown()||"string"==typeof e?e:"kind"in e?{kind:"plaintext",value:e.value}:Array.isArray(e)?e.map((e=>"string"==typeof e?e:e.value)):e.value}doesSupportMarkdown(){if(!(0,objects_1.isDefined)(this.supportsMarkdown)){if(!(0,objects_1.isDefined)(this.clientCapabilities))return this.supportsMarkdown=!0,this.supportsMarkdown;const e=this.clientCapabilities.textDocument&&this.clientCapabilities.textDocument.hover;this.supportsMarkdown=e&&e.contentFormat&&Array.isArray(e.contentFormat)&&-1!==e.contentFormat.indexOf(cssLanguageTypes_1.MarkupKind.Markdown)}return this.supportsMarkdown}}exports.CSSHover=CSSHover;