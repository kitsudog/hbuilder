"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.IndexPipeClient=void 0;const rpc=require("vscode-jsonrpc/node"),core_1=require("../../../core"),indexUtils_1=require("./indexHandler/indexUtils");class IndexPipeClient{constructor(e,n){this._IndexPipeName=e,this._EventResponse=n}async startIndexRpcClient(e=!1){e?console.log("[IndexServer] Index PipeConnection Restart!"):console.log("[IndexServer] IndexClient PipeConnection Start!");const n=await rpc.createClientPipeTransport(this._IndexPipeName),t=await n.onConnected();this._indexConnection=rpc.createMessageConnection(t[0],t[1]),this._indexConnection.listen(),this._indexConnection.onError((e=>{console.error(`[IndexServer] [PipeConnection ERROR!] ${e}`)})),this._indexConnection.onClose((()=>{console.log("[IndexServer] TsServer PipeConnection CLose!"),this.startIndexRpcClient(!0)})),this._indexConnection.onRequest(core_1.PipeGetIndexDataRequest.type,(async(e,n)=>{console.log(`[IndexServer] Query Param: ${JSON.stringify(e)}`);const t=await this._EventResponse.onQuery(e,n);if(!t)return console.log(`[IndexServer] QueryNull Param: ${JSON.stringify(e)}`),[];return(0,indexUtils_1.resultConversion)(t)}))}}exports.IndexPipeClient=IndexPipeClient;