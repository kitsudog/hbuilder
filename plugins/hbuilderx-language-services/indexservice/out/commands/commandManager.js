"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CommandManager=void 0;const rebuildIndex_1=require("./rebuildIndex");class CommandManager{constructor(e){this.client=e}getCommandList(){const e=[],n=new rebuildIndex_1.RebuildIndex(this.client);return e.push(n.getRebuildCommand()),e}}exports.CommandManager=CommandManager;