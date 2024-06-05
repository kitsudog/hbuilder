const path=require("path"),fs=require("fs"),vm=require("vm");function pathToUrl(e){if(!path.isAbsolute(e))throw new Error(`${e} is not an absolute path`);return new URL("win32"===process.platform?"/"+e.replace(/\\/g,"/"):e,new URL("file:///")).toString()}function isBuiltInModule(e){return require("module").builtinModules.includes(e)}const vmMap=new Map;class UniCloudVM{constructor({id:e}={}){this.id=e,this.requireCache=new Map,this.globalMock={...global},this.vmMap=vmMap,this.vmMap.set(e,this),this.sandbox=this.createSandbox()}createSandbox(){const e=Object.assign(this.globalMock,{global:this.globalMock,console:console,process:process,Buffer:Buffer,URL:URL,URLSearchParams:URLSearchParams,clearImmediate:clearImmediate,clearInterval:clearInterval,clearTimeout:clearTimeout,setImmediate:setImmediate,setInterval:setInterval,setTimeout:setTimeout,TextEncoder:TextEncoder,TextDecoder:TextDecoder,AbortSignal:AbortSignal,Event:Event,EventTarget:EventTarget,__UNI_CLOUD_UTILS:{createScope:this.createScope.bind(this)}});return vm.createContext(e)}createRequire(e){if(isBuiltInModule(e))return require;const t=require("module").createRequire(pathToUrl(e)),r=this;return Object.assign((function(s){const i=r.requireCache,a=t.resolve(s);if(i.has(a))return r.getRequireResult(e,a);const n=path.extname(a);if(!path.isAbsolute(a)||".js"!==n&&".json"!==n){return t(a)}if(".json"===n){return r.createScope(a).module.exports=JSON.parse(fs.readFileSync(a).toString()),r.getRequireResult(e,a)}const o=fs.readFileSync(a).toString("utf8"),u=`global.__tempModuleExports = (function(){\nconst $scope = global.__UNI_CLOUD_UTILS.createScope("${a.replace(/\\/g,"\\\\")}");\n(function (exports, require, module, __filename, __dirname) {\n${o}\n})($scope.exports, $scope.require, $scope.module, $scope.__filename, $scope.__dirname);\n}())`;try{new vm.Script(u,{filename:a,lineOffset:-3}).runInContext(r.sandbox)}catch(e){let t=r.requireCache.get(a);if("MODULE_NOT_FOUND"===e.code)throw t&&r.deleteCache(a),e;t||(t=r.createScope(a).module),t.error=e}return delete r.globalMock.__tempModuleExports,r.getRequireResult(e,a)}),t)}getRequireResult(e,t){const r=this.requireCache.get(t);if(r._parent.add(e),r.error)throw r.error;return r.exports}createScope(e){const t=this.createRequire(e),r={error:null,exports:{},require:t,_parent:new Set};return this.requireCache.set(e,r),{module:r,exports:r.exports,require:t,__filename:e,__dirname:path.dirname(e)}}destory(){this.requireCache.clear(),this.vmMap.delete(this.id)}reset(){const e=path.resolve(process.env.UNICLOUD_DEBUGGER_PATH,"node_modules");for(const t of this.requireCache.keys()){const r=path.relative(e,t);(!r||r.startsWith("..")||path.isAbsolute(r))&&this.requireCache.delete(t)}}deleteCache(e){const t=this.requireCache.get(e);if(!t)return;this.requireCache.delete(e);Array.from(t._parent).forEach((e=>{this.deleteCache(e)}))}}class VmWorker{constructor({id:e}={}){this.uvm=new UniCloudVM({id:e}),this.customRequire=this.uvm.createRequire(__filename),this.queue=[],this.status="idle",this.lastUniCloudUniqueTag=""}async exec({entryPath:e,args:t,uniCloudUniqueTag:r,callback:s}={}){this.setStatus("busy"),this.lastUniCloudUniqueTag!==r&&(this.uvm.reset(),this.lastUniCloudUniqueTag=r);const i=this.customRequire(e);try{s(null,await i(...t))}catch(e){s(e)}this.setStatus("idle")}setStatus(e){this.status=e,"idle"===e&&this.next()}next(){if("idle"!==this.status)return;const e=this.queue.shift();e&&this.exec(e)}push({entryPath:e,args:t,uniCloudUniqueTag:r,callback:s}={}){this.queue.push({entryPath:e,args:t,uniCloudUniqueTag:r,callback:s}),this.next()}}class VmManager{constructor({minVm:e=2,maxVm:t=100}={}){this.minVm=e,this.maxVm=t,this.vmArr=[],this.init()}init(){for(let e=0;e<this.minVm;e++)this.vmArr.push(new VmWorker({id:e}))}deleteCache(e){this.vmArr.forEach((t=>{t.uvm.deleteCache(e)}))}expand(){if(this.vmArr.length>=this.maxVm)throw new Error(`[uniCloud debugger] exceed max instance number of cloudfunction, max: ${this.maxVm}`);const e=new VmWorker({id:this.vmArr.length});return this.vmArr.push(e),e}async exec({entryPath:e,args:t,uniCloudUniqueTag:r}={}){let s=this.vmArr.find((e=>"idle"===e.status));s||(s=this.expand());const i=s;return new Promise(((s,a)=>{i.push({entryPath:e,args:t,uniCloudUniqueTag:r,callback:function(e,t){e?a(e):s(t)}})}))}}module.exports={UniCloudVM:UniCloudVM,VmWorker:VmWorker,VmManager:VmManager};