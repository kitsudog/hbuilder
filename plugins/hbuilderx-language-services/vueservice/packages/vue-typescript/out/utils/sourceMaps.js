"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,a)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Teleport=exports.EmbeddedFileSourceMap=void 0;const SourceMaps=__importStar(require("../../../source-map"));class EmbeddedFileSourceMap extends SourceMaps.SourceMapBase{}exports.EmbeddedFileSourceMap=EmbeddedFileSourceMap;class Teleport extends SourceMaps.SourceMapBase{*findTeleports(e,t,r){for(const[o,a]of this.getMappedRanges(e,t,r?e=>r(e.toTarget):void 0))yield[o,a.toTarget];for(const[o,a]of this.getSourceRanges(e,t,r?e=>r(e.toTarget):void 0))yield[o,a.toTarget]}}exports.Teleport=Teleport;