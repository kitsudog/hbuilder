"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Delayer=void 0;class Delayer{constructor(t){this.defaultDelay=t,this.timeout=null,this.completionPromise=null,this.onSuccess=null,this.task=null}trigger(t,e=this.defaultDelay){return this.task=t,e>=0&&this.cancelTimeout(),this.completionPromise||(this.completionPromise=new Promise((t=>{this.onSuccess=t})).then((()=>{this.completionPromise=null,this.onSuccess=null;const t=this.task&&this.task();return this.task=null,t}))),(e>=0||null===this.timeout)&&(this.timeout=setTimeout((()=>{this.timeout=null,this.onSuccess&&this.onSuccess()}),e>=0?e:this.defaultDelay)),this.completionPromise}cancelTimeout(){null!==this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}}exports.Delayer=Delayer;