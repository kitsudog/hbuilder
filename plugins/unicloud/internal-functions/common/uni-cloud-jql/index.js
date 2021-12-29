"use strict";function t(t){return t&&"string"==typeof t?JSON.parse(t):t}t(process.env.UNICLOUD_DEBUG),t(process.env.UNI_CLOUD_PROVIDER),process.env.RUN_BY_HBUILDERX;let e={};function n(t,n={}){var r,o;return r=e,o=t,Object.prototype.hasOwnProperty.call(r,o)||(e[t]=n),e[t]}const r=Symbol("CLIENT_DB_INTERNAL");function o(t,e){return t.then="DoNotReturnProxyWithAFunctionNamedThen",t._internalType=r,t.__ob__=void 0,t.__v_raw=void 0,new Proxy(t,{get:(t,n,r)=>n in t||"string"!=typeof n?t[n]:e.get(t,n,r)})}function a(t){return{on:(e,n)=>{t[e]=t[e]||[],t[e].indexOf(n)>-1||t[e].push(n)},off:(e,n)=>{t[e]=t[e]||[];const r=t[e].indexOf(n);-1!==r&&t[e].splice(r,1)}}}const s=["db.Geo","db.command","command.aggregate"];function i(t,e){return s.indexOf(`${t}.${e}`)>-1}function c(t){switch(e=t,Object.prototype.toString.call(e).slice(8,-1).toLowerCase()){case"array":return t.map((t=>c(t)));case"object":return t._internalType===r||Object.keys(t).forEach((e=>{t[e]=c(t[e])})),t;case"regexp":return{$regexp:{source:t.source,flags:t.flags}};case"date":return{$date:t.toISOString()};default:return t}var e}class u{constructor(t,e,n){this.content=t,this.prevStage=e||null,this.udb=null,this._database=n}toJSON(){let t=this;const e=[t.content];for(;t.prevStage;)t=t.prevStage,e.push(t.content);return{$db:e.reverse().map((t=>({$method:t.$method,$param:c(t.$param)})))}}getAction(){const t=this.toJSON().$db.find((t=>"action"===t.$method));return t&&t.$param&&t.$param[0]}getCommand(){return{$db:this.toJSON().$db.filter((t=>"action"!==t.$method))}}get useAggregate(){let t=this,e=!1;for(;t.prevStage;){t=t.prevStage;const n=t.content.$method;if("aggregate"===n||"pipeline"===n){e=!0;break}}return e}get count(){if(!this.useAggregate)return function(){return this._send("count",Array.from(arguments))};const t=this;return function(){return d({$method:"count",$param:c(Array.from(arguments))},t,this._database)}}get(){return this._send("get",Array.from(arguments))}add(){return this._send("add",Array.from(arguments))}remove(){return this._send("remove",Array.from(arguments))}update(){return this._send("update",Array.from(arguments))}end(){return this._send("end",Array.from(arguments))}set(){throw new Error("clientDB禁止使用set方法")}_send(t,e){const n=this.getAction(),r=this.getCommand();return r.$db.push({$method:t,$param:c(e)}),this._database._callCloudFunction({action:n,command:r})}}function d(t,e,n){return o(new u(t,e,n),{get(t,e){let r="db";return t&&t.content&&(r=t.content.$method),i(r,e)?d({$method:e},t,n):function(){return d({$method:e,$param:c(Array.from(arguments))},t,n)}}})}function h({path:t,method:e}){return class{constructor(){this.param=Array.from(arguments)}toJSON(){return{$newDb:[...t.map((t=>({$method:t}))),{$method:e,$param:this.param}]}}}}const l=require("./uni-curd");function m(t){return JSON.parse(JSON.stringify(t))}class p extends class{constructor({uniClient:t={}}={}){this._uniClient=t,this._authCallBacks={},this._dbCallBacks={},t.isDefault&&(this._dbCallBacks=n("_globalUniCloudDatabaseCallback")),this.auth=a(this._authCallBacks),Object.assign(this,a(this._dbCallBacks)),this.env=o({},{get:(t,e)=>({$env:e})}),this.Geo=o({},{get:(t,e)=>h({path:["Geo"],method:e})}),this.serverDate=h({path:[],method:"serverDate"}),this.RegExp=h({path:[],method:"RegExp"})}getCloudEnv(t){if("string"!=typeof t||!t.trim())throw new Error("getCloudEnv参数错误");return{$env:t.replace("$cloudEnv_","")}}_callback(t,e){const n=this._dbCallBacks;n[t]&&n[t].forEach((t=>{t(...e)}))}_callbackAuth(t,e){const n=this._authCallBacks;n[t]&&n[t].forEach((t=>{t(...e)}))}multiSend(){const t=Array.from(arguments),e=t.map((t=>{const e=t.getAction(),n=t.getCommand();if("getTemp"!==n.$db[n.$db.length-1].$method)throw new Error("multiSend只支持子命令内使用getTemp");return{action:e,command:n}}));return this._callCloudFunction({multiCommand:e,queryList:t})}}{constructor({event:t,context:e}={}){super(),this._event=t||{},this._context=e||{},this._user=null}get _auth(){return this._user?{...this._user,error:{code:null,msg:null},checked:!0}:{uid:void 0,role:[],permission:[],error:{code:null,msg:null},checked:!1}}get _publicContext(){return{event:this._event,fnCtx:this._context,systemInfo:[],env:{auth:this._auth,now:Date.now(),clientIP:this._context.CLIENTIP}}}_callCloudFunction({action:t,command:e,multiCommand:n}={}){return l({event:{action:t,command:e?m(e):void 0,multiCommand:n?m(n):void 0,uniIdToken:this._event.uniIdToken},context:this._context,publicContext:this._publicContext})}setUser({uid:t,role:e,permission:n}={}){this._user={uid:t,role:e,permission:n}}}const g=Object.getPrototypeOf(uniCloud);g.databaseForJQL||(g.databaseForJQL=({event:t,context:e}={})=>function(t,e={}){return o(new p(e),{get:(t,e)=>i("db",e)?d({$method:e},null,t):function(){return d({$method:e,$param:c(Array.from(arguments))},null,t)}})}(0,{event:t,context:e}));