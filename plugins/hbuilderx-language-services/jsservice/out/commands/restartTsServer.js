"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RestartTsServerCommand=void 0;class RestartTsServerCommand{constructor(e){this.lazyClientHost=e,this.id="typescript.restartTsServer"}execute(){this.lazyClientHost.value.serviceClient.restartTsServer()}}exports.RestartTsServerCommand=RestartTsServerCommand;