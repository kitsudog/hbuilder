"use strict";var e=require("path"),t=require("fs"),n=require("module");require("vm");var i=require("crypto");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(e),s=r(t),c=r(n),a=r(i);const u=process.env.UNICLOUD_DEBUGGER_PATH=process.env.UNICLOUD_DEBUGGER_PATH||o.default.resolve(__dirname,"../");process.env.UNICLOUD_SPACE_LIST=process.env.UNICLOUD_SPACE_LIST||JSON.stringify([]);const l=o.default.resolve(u,"share/index"),{getRealWorkspace:d,getWorkspacePathFromFilePath:f}=require(l);if(process.env.WORKSPACE_FOLDER||(process.env.WORKSPACE_FOLDER=f(process.argv[3]||"")),!process.env.UNICLOUD_SPACE_PROVIDER){let e={};try{e=JSON.parse(process.env.UNICLOUD_SECRET)}catch(e){}e.secretId?process.env.UNICLOUD_SPACE_PROVIDER="tcb":e.serverSecret&&(process.env.UNICLOUD_SPACE_PROVIDER="aliyun")}const p=process.env.UNICLOUD_SPACE_PROVIDER,h=d({uniCloudInfo:JSON.parse(process.env.UNICLOUD_SPACE_LIST),workspaceFolder:process.env.WORKSPACE_FOLDER,provider:p});global.uniCloudDebug={realWorkspace:h,provider:p};class m extends Error{constructor(e={}){super(e.message),this.errMsg=e.message||"",this.code=this.errCode=e.code,this.errSubject=e.subject,this.forceReturn=e.forceReturn||!1,this.cause=e.cause,Object.defineProperties(this,{message:{get(){return this.errMsg},set(e){this.errMsg=e}}})}toJSON(e=0){if(!(e>=10))return e++,{errCode:this.errCode,errMsg:this.errMsg,code:this.errCode,message:this.message,errSubject:this.errSubject,cause:this.cause&&this.cause.toJSON?this.cause.toJSON(e):this.cause}}}const I={ACCESS_DENIED:{code:"ACCESS_DENIED",message:"Access denied"},OPERATION_TOO_FREQUENT:{code:"OPERATION_TOO_FREQUENT",message:"Operation is too frequent, please try again later"},SYSTEM_ERROR:{code:5e4,message:"System error."},APP_ID_REQUIRED:{code:60101,message:"AppId is required, please check your manifest.json."},DEVICE_ID_REQUIRED:{code:60102,message:"DeviceId is required."},OS_NAME_REQUIRED:{code:60103,message:"OsName is required"},SPACE_NOT_ENABLE:{code:60200,message:"Secure network is not enabled, please refer to https://uniapp.dcloud.net.cn/uniCloud/secure-network.html ."},APP_NOT_ENABLE:{code:60201,message:"Secure network is not enabled, appId: {appId}, add this app info to device list of secure network in uniCloud web console to enable secure connection."},PLATFORM_NOT_ENABLE:{code:60202,message:"Secure network is not enabled, appId: {appId}, uniPlatform: {uniPlatform} add this app info to device list of secure network in uniCloud web console to enable secure connection."},TIMESTAMP_INVALID:{code:70001,message:"Client time error."},APP_ID_INVALID:{code:70002,message:"Invalid client with appId: {appId}."},DEVICE_ID_INVALID:{code:70003,message:"Invalid client with deviceId: {deviceId}."},APP_INFO_INVALID:{code:70004,message:"Current app has not been related to secure network of uniCloud space. please refer to https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#app"},ACCOUNT_NOT_EXISTS:{code:70005,message:"User account does not exist"},OPENID_NOT_FOUND:{code:70006,message:"Openid is not found"},GET_ENCRYPT_KEY_FAILED:{code:70007,message:"Get encrypt key failed"},CLIENT_SIGN_INVALID:{code:70008,message:"Client signature is invalid or empty, please refer to https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#err-70008 ."},ENCRYPT_KEY_NOT_FOUND:{code:70009,message:"Encrypt key not found, client info: {clientInfo}"},ROOT_OR_SIMULATOR_FORBIDDEN:{code:70010,message:"Client type (simulator or root device) is forbidden."}},g=Object.prototype.toString,E=Object.prototype.hasOwnProperty;function C(e){return g.call(e).slice(8,-1).toLowerCase()}function N(e,...t){for(let n=0;n<t.length;n++){const i=t[n];e.includes(i)||e.push(i)}}function _(e){const t={...e},{OS:n,APPID:i,LOCALE:r,PLATFORM:o,DEVICEID:s,CLIENTIP:c,CLIENTUA:a,SOURCE:u,requestId:l,secretType:d}=t,f=["SPACEINFO","FUNCTION_NAME","FUNCTION_TYPE","SOURCE","OS","APPID","LOCALE","CLIENTIP","CLIENTUA","PLATFORM","DEVICEID","requestId"];for(let e=0;e<f.length;e++){delete t[f[e]]}const p={...t,os:n,appId:i,locale:r,clientIP:c,userAgent:a,platform:"app-plus"===o?"app":o,deviceId:s,source:u,requestId:l,secretType:d};return function e(t){for(const n in t){const i=t[n];switch(C(i)){case"undefined":delete t[n];break;case"object":e(i)}}}(p),p}function O(e,t){let n,i;switch(t.SOURCE){case"timing":n="_timing",i=[];break;case"http":{const t=e.path.replace(/^\//,"");if(""===t)throw new Error(`"${e.path}" is not a valid cloudobject path`);n=t.split("/")[0],i=[e.queryStringParameters||{}];break}case"server":case"client":case"function":default:n=e.method,i=e.params}return"timing"!==t.SOURCE&&function(e){if(!e)throw new Error("Method name is required");if("_"===e[0])throw new Error(`Forbidden, ${e} is a private method`)}(n),{methodName:n,params:i}}var b={extension:{"uni-cloud-jql":{alias:"",abilityList:["databaseForJQL"],href:"https://uniapp.dcloud.net.cn/uniCloud/jql-cloud.html",dependencies:["uni-cloud-redis"]},"uni-cloud-redis":{alias:"",abilityList:["redis"],href:"https://uniapp.dcloud.net.cn/uniCloud/redis-introduction.html"},"uni-cloud-push":{alias:"",abilityList:["getPushManager"],href:"https://uniapp.dcloud.io/uniCloud/uni-push/introduction.html"},"uni-cloud-sms":{alias:"",abilityList:["sendSms"],href:"https://uniapp.dcloud.net.cn/uniCloud/send-sms.html"},"uni-cloud-verify":{alias:"",abilityList:["getPhoneNumber","getFacialRecognitionVerifyManager"],href:{getPhoneNumber:"https://uniapp.dcloud.net.cn/uniCloud/univerify.html",getFacialRecognitionVerifyManager:"https://uniapp.dcloud.net.cn/uniCloud/frv/intro.html"}},"uni-cloud-ai":{alias:"",abilityList:[{name:"ai",type:"variable"}],href:"https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-ai.html"},"uni-cloud-ext-storage":{alias:"",abilityList:["getExtStorageManager"],href:"https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-ext-storage.html"}}};let y;global.__unicloud_store__?y=global.__unicloud_store__:global.__unicloud_store__=y={requestInfo:{}};var S=y;const T="none",P=new Uint8Array(256);let v=P.length;function w(){return v>P.length-16&&(a.default.randomFillSync(P),v=0),P.slice(v,v+=16)}var D=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const A=[];for(let e=0;e<256;++e)A.push((e+256).toString(16).substr(1));function R(e,t=0){const n=(A[e[t+0]]+A[e[t+1]]+A[e[t+2]]+A[e[t+3]]+"-"+A[e[t+4]]+A[e[t+5]]+"-"+A[e[t+6]]+A[e[t+7]]+"-"+A[e[t+8]]+A[e[t+9]]+"-"+A[e[t+10]]+A[e[t+11]]+A[e[t+12]]+A[e[t+13]]+A[e[t+14]]+A[e[t+15]]).toLowerCase();if(!function(e){return"string"==typeof e&&D.test(e)}(n))throw TypeError("Stringified UUID is invalid");return n}function k(e,t,n){const i=(e=e||{}).random||(e.rng||w)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=i[e];return t}return R(i)}const U=process.env.UNICLOUD_DEBUGGER_PATH,L=o.default.resolve(U,"share/index"),{parseJson:F,parseJsonByPath:x,getType:q,getFunctionType:j,getRealWorkspace:M,getCloudfunctionPathList:B,getFunctionPath:$,getCommonModulePath:J,getActionPath:K,isModuleEncrypted:V,isFileEncrypted:G,JsonRpcClient:Y,getCloudfunctionsPathFromFilePath:W,getRealFunctionPath:H,getFunctionNameFromFunctionPath:Q,getFunctionParam:X,getPossiblePath:z}=require(L);const Z=module.constructor.length>1?module.constructor:c.default,ee=Z._oldResolveFilename||Z._resolveFilename;Z._oldResolveFilename=ee;const te=[{regexp:/.*uniCloud(?:.*?)\/cloudfunctions\/common\/(.*?)\//i,type:"common"},{regexp:/.*uniCloud(?:.*?)\/cloudfunctions\/uni-clientDB-actions\/(.*?)/i,type:"clientDBAction"},{regexp:/.*uniCloud(?:.*?)\/database\/validateFunction\/(.*?)/i,type:"validateFunction"},{regexp:/.*uniCloud(?:.*?)\/database\/(.*?).schema.ext.js/i,type:"schemaJs"},{regexp:/.*uniCloud(?:.*?)\/cloudfunctions\/(.*?)\//i,type:"function"},{regexp:/.*unicloud\/internal-functions\/common\/(.*?)\//i,type:"internalCommon"},{regexp:/.*unicloud\/internal-functions\/(.*?)\//i,type:"internalFunction"}];function ne(e,t){const n=e.match(t.regexp);if(n)return{modulePath:n[0],moduleName:n[1],type:t.type}}function ie(e){let t;try{t=s.default.statSync(e)}catch(e){}if(!t)return;if(t.isFile()||t.isSymbolicLink())return e;const n=Object.keys(Z._extensions);if(t.isDirectory()){const t=o.default.resolve(e,"package.json"),i=s.default.existsSync(t)&&require(t),r=i&&i.main;if(r)return o.default.resolve(e,r);for(let t=0;t<n.length;t++){const i=n[t],r=o.default.resolve(e,"index."+i);if(s.default.existsSync(r))return r}}}function re(e){const t=[],n=o.default.resolve(e,"package.json");if(!s.default.existsSync(n))return t;const{dependencies:i}=require(n);return i?(Object.keys(i).filter(e=>0===i[e].indexOf("file:")).map(n=>{const r=i[n].replace("file:",""),s=o.default.resolve(e,r);t.push({parentPath:e,relativePath:r,moduleName:n,modulePath:s}),t.push(...re(s))}),t):t}const oe=[];function se(e){const t=re(e);!function(e){const t=new Map;for(let n=0;n<e.length;n++){const{moduleName:i}=e[n];t.has(i)||t.set(i,new Set),t.get(i).add(e[n])}let n=!1;const i=[];if(t.forEach((e,t)=>{let r=`公共模块[${t}]只能存在一个，请从下面候选中删除不使用的公共模块：`;const o=new Set;e.forEach(e=>{const{parentPath:t,relativePath:n,modulePath:i}=e;if(!s.default.existsSync(i))throw new Error(`[${t}]依赖公共模块路径[${n}]错误\n请在[${t}]上右键选择“管理公共模块或扩展依赖”重新选择要关联的公共模块并保存以修正依赖路径`);o.has(i)||(o.add(i),r+="\n"+i)}),o.size>1&&(n=!0,console.error(r),i.push(t))}),n)throw new Error(`公共模块[${i.join("、")}]只能存在一个，删除不使用的公共模块后再试`)}(t);const n=function(e){return e.forEach(({moduleName:e,modulePath:t})=>{oe.indexOf(e)>-1||V(t)&&oe.push(e)}),oe}(t);Z._resolveFilename=function(e,t,i,r){function a(){return ee.call(Z,e,t,i,r)}if(o.default.isAbsolute(e))return a();const u=e.split("/"),l=u.shift();if("string"!=typeof l||""===l.trim())return a();if(l.startsWith(".")||!t.filename)return a();const d=u.join("/");if(n.indexOf(l)>-1)throw new m({code:"MODULE_ENCRYPTED",message:l+"模块已加密，不支持本地运行"});const f=function(e){e=e.replace(/\\/g,"/");for(let t=0;t<te.length;t++){const n=ne(e,te[t]);if(n)return n}}(t.filename);if(!f)return a();const{modulePath:p,moduleName:h,type:I}=f;if("clientDBAction"===I||"validateFunction"===I||"schemaJs"===I||"internalCommon"===I&&"uni-cloud-jql"===h||"internalFunction"===I&&"DCloud-clientDB"===h){if(function(e){return c.default.builtinModules.indexOf(e)>-1}(l)||o.default.isAbsolute(l)||"."===l[0])return a();const{realWorkspace:e,provider:t}=global.uniCloudDebug;let n,i=["uni-id","uni-id-common","uni-config-center"].indexOf(l)>-1;try{n=J(e,t,l)}catch(e){return a()}const r=o.default.resolve(n,"package.json"),u=s.default.existsSync(r)&&require(r);u.includeInClientDB&&console.warn(`在公共模块的package.json[${r}]内配置includeInClientDB已不再推荐使用，建议在database目录上使用右键菜单“管理JQL公共模块或扩展库依赖”来管理依赖。`),i=i||u.includeInClientDB;const f=function(){const{realWorkspace:e,provider:t}=global.uniCloudDebug;return re(o.default.resolve(e,`uniCloud-${t}/database`))}().some(e=>e.moduleName===l);if(!i&&!f)return a();const p=ie(o.default.resolve(n,d));return p||a()}const g=o.default.resolve(p,"package.json"),E=s.default.existsSync(g)&&require(g),C=E&&E.dependencies;if(!C)return a();let N=C[l];if(!N||!N.startsWith("file:"))return a();N=N.replace("file:","");let _=o.default.resolve(p,N);d&&(_=o.default.resolve(_,d));const O=ie(_);return O||a()}}class ce{constructor(e,t){this.__internalObject={event:e,context:t,methodName:"",params:[]};const{methodName:n,params:i}=O(e,t);this.__internalObject.methodName=n,this.__internalObject.params=i}getMethodName(){return this.__internalObject.methodName}getUniIdToken(){return this.__internalObject.context.uniIdToken}getParams(){return this.__internalObject.params}getHttpInfo(){if("http"===this.getClientInfo().source)return this.__internalObject.event}getClientInfo(){return _(this.__internalObject.context)}getCloudInfo(){return function(e){const{provider:t,spaceId:n,useOldSpaceId:i}=e.SPACEINFO,{FUNCTION_NAME:r,FUNCTION_TYPE:o}=e;return{provider:t,spaceId:n,useOldSpaceId:i,functionName:r,functionType:o}}(this.__internalObject.context)}getUniCloudRequestId(){return this.__internalObject.context.requestId}}async function ae({functionPath:e,event:t,context:n}={}){n.FUNCTION_TYPE="cloudobject";const i=new ce(t,n),r=i.getMethodName(),s=i.getParams(),c=o.default.resolve(e,"index.obj.js"),a=require(c);if(!a||!a[r]||!function(e,t){return E.call(e,t)}(a,r)||"function"!=typeof a[r])throw new Error(`Method[${r}] was not found in ${c}`);const u=a._before,l=a._after,d=a[r];if("_timing"===r)return d.apply(i,[t]);if(!l)return u&&await u.call(i),d.apply(i,s);let f,p=null;try{u&&await u.call(i),f=await d.apply(i,s)}catch(e){p=e}return l.call(i,p,f)}const ue=require("http");const le=function(e){const t=function(e){return"tencent"===e?"tcb":e}(e.SPACEINFO.provider);return async function({name:e,data:n}={}){const i=`http://127.0.0.1:${process.env.UNICLOUD_SERVE_PORT}/cloudfunctions/${e}`,r={provider:t,param:n,source:"function"},{statusCode:o,data:s}=await async function(e,t={}){const n=JSON.stringify(t),i=Buffer.byteLength(n);return new Promise((t,r)=>{const o=ue.request(e,{method:"POST",headers:{"Content-Type":"application/json","Content-Length":i}},e=>{const n={statusCode:e.statusCode,headers:JSON.stringify(e.headers)};e.setEncoding("utf8");let i=Buffer.alloc(0);e.on("data",e=>{i=Buffer.concat([i,Buffer.from(e)])}),e.on("end",()=>{n.data=JSON.parse(i.toString("utf8")||"{}"),t(n)})});o.on("error",(function(e){r(e)})),o.write(n),o.end()})}(i,r);if(!o||o>=400)throw new m({code:s.code||"SYS_ERR",message:s.message||"request:fail"});return{success:!0,result:s}}},de=o.default.resolve(process.env.UNICLOUD_DEBUGGER_PATH,"internal-functions/common");function fe(){!function(){const e=Object.getPrototypeOf(uniCloud);for(const t in b.extension){const n=b.extension[t].abilityList||[];for(let t=0;t<n.length;t++){delete e[n[t]]}}}();const e=Object.getPrototypeOf(uniCloud),t=global.uniCloudDebug.functionPath;let n;try{n=require(o.default.resolve(t,"package.json"))}catch(e){}let i=[];n&&n.extensions&&(i=Object.keys(n.extensions)),(i.includes("uni-cloud-jql")||"DCloud-clientDB"===global.uniCloudDebug.functionName)&&N(i,...function(){const e=["uni-cloud-redis"],{realWorkspace:t,provider:n}=global.uniCloudDebug,i=o.default.resolve(t,`uniCloud-${n}/database/package.json`);if(!s.default.existsSync(i))return e;const r=require(i);return N(e,...Object.keys(r.extensions||{})),e}());for(const t in b.extension){const{abilityList:n=[],href:r=""}=b.extension[t]||{};if(i.includes(t))require(o.default.resolve(de,t)).init();else for(let i=0;i<n.length;i++){let o=n[i];if("string"==typeof o&&(o={name:o,type:"function"}),o.name in e)continue;let s=r;"object"==typeof r&&(s=r[o.name]),"function"===o.type?e[o.name]=function(){throw new Error(`uniCloud.${o.name}由${t}扩展库提供，请确保云函数/云对象/clientDB依赖了此扩展库${s?"，详情参考："+s:""}`)}:Object.defineProperty(e,o.name,{get(){if(e["_"+o.name])return e["_"+o.name];throw new Error(`uniCloud.${o.name}由${t}扩展库提供，请确保云函数/云对象/clientDB依赖了此扩展库${s?"，详情参考："+s:""}`)},set(t){e["_"+o.name]=t}})}}}function pe(e,t,n={}){e||(e={}),e.clientInfo||(e.clientInfo={});const i=function(e,t,{parseSource:n,parseClientIP:i,parseClientUserAgent:r,parseSpaceInfo:o,parseFunctionName:s,parseRequestId:c}={}){const a={};return a.SOURCE=t.SOURCE,a.CLIENTIP=t.CLIENTIP,a.CLIENTUA=t.CLIENTUA,a.SPACEINFO=t.SPACEINFO,a.FUNCTION_NAME=t.FUNCTION_NAME,a.requestId=t.requestId,a.FUNCTION_TYPE="cloudfunction",a}(0,t,n),r=function(e){!function(e){const t=e.clientInfo;let n;try{n=JSON.parse(decodeURIComponent(e.uniCloudClientInfo))}catch(e){n={}}t.DEVICEID||(t.DEVICEID=e.uniCloudDeviceId||n.uuid||t.ID)}(e);const t=e.clientInfo;return t.uniIdToken=e.uniIdToken,delete e.uniCloudDeviceId,delete e.clientInfo,delete e.uniCloudClientInfo,t.secretType=T,function e(t){if(he.indexOf(t)>-1)return;he.push(t);for(const n in t){if(0===n.indexOf("$"))throw new Error(`Invalid client info: "${n}"`);const i=t[n];"object"===C(i)&&e(i)}}(t),t}(e),o=e.headers;"http"===i.SOURCE&&o&&(o.referer||o.Referer),"timing"===i.SOURCE&&"aliyun"===i.SPACEINFO.provider&&(e.Time=e.triggerTime,e.TriggerName=e.triggerName,e.Type="Timer");const s={event:e,context:{...r,...i}};return function(e,t){global.__ctx__=t,global.__args__=e,function(){delete process.env.accessKeyID,delete process.env.accessKeySecret,delete process.env.securityToken}()}(s.event,s.context),S.requestInfo[s.context.requestId]={event:s.event,context:s.context},s}const he=[];function me(e){const t=function(e){if(!(e instanceof m))throw e;if(e&&e.forceReturn)return e.toJSON?e.toJSON():{errSubject:e.errSubject,errCode:e.errCode,errMsg:e.errMsg};throw e}(e);return t&&console.error(t),t}class Ie{constructor(e){const[t,n="32"]=e.split("/");this.cidr=e,this.ip=t,this.bit=parseInt(n)||32,this.ipArr=this.formatIp(t,this.bit),this.ipNum=this.parseIp(this.ipArr),this.ipRange=this.getRange();try{this.checkCidr()}catch(t){throw console.warn(`IP error: ${e}, please check your ip black list`),t}}formatIp(e,t){const n=e.split(".").map(e=>parseInt(e));if(void 0!==t&&32!==t)for(let e=0;e<4-n.length;e++)n.push(0);return n}checkCidr(){const e="IP error: "+this.cidr;if(4!==this.ipArr.length)throw new Error(e);if(this.ipArr.some(e=>e<0||e>255))throw new Error(e);if(this.bit<0||this.bit>32)throw new Error(e)}parseIp(e){let t=0;for(let n=0;n<e.length;n++){t+=e[n]*Math.pow(256,3-n)}return t}getRange(){const{ipNum:e,bit:t}=this,n=e.toString(2).padStart(32,"0").substring(0,t);return[parseInt(n.padEnd(32,"0"),2),parseInt(n.padEnd(32,"1"),2)]}contains(e){const t=this.formatIp(e),n=this.parseIp(t);return n>=this.ipRange[0]&&n<=this.ipRange[1]}}class ge{constructor(e=[]){this.ipList=e,this.ipCidrList=this.ipList.map(e=>new Ie(e))}contains(e){return this.ipCidrList.some(t=>t.contains(e))}}function Ee(){const e={ipFilterForHttpEnable:!1,blackListEnable:!1,frequencyLimitEnable:!1};try{uniCloud.redis()}catch(t){return e}{let e={};try{e=JSON.parse(process.env.UNICLOUD_SPACE_INFO)}catch(e){}const{blackListEnable:t=!1,frequencyLimitEnable:n=!1}=e,{ipFilterForHttpEnable:i=!1}=function(e){if(!e)throw new Error("invalid function path");const t=o.default.resolve(e,"package.json");if(!s.default.existsSync(t))return{};const{"cloudfunction-config":n={}}=require(t);return n}(global.uniCloudDebug.functionPath);return{ipFilterForHttpEnable:i,blackListEnable:t,frequencyLimitEnable:n}}}class Ce{constructor(e){this.ip=e,this.freqConfigKey="unicloud:ip-freq-config:hash",this.blackListKey="unicloud:ip-black-list:set",this.ipInfoKey=`unicloud:ip-info:${e}:hash`,this.ipBlockedKey=`unicloud:ip-blocked:${e}:stirng`,this.config=Ee(),(this.config.blackListEnable||this.config.frequencyLimitEnable)&&this.init()}init(){this.redis=uniCloud.redis()}async getFreqConfig(){if(this.freqConfig)return this.freqConfig;const[e,t,n]=await this.redis.hmget(this.freqConfigKey,"duration","limit","blockTime");return this.freqConfig={duration:e?parseInt(e):null,limit:t?parseInt(t):null,blockTime:n?parseInt(n):0},this.freqConfig}async check(){this.redis&&(await this.checkBlackList(),await this.checkBlocked(),await this.checkIpFreq())}async checkBlackList(){if(!this.config.blackListEnable)return;const e=await this.redis.smembers(this.blackListKey)||[];let t=!1;try{t=new ge(e).contains(this.ip)}catch(e){console.error(e)}if(t)throw new m(I.ACCESS_DENIED)}async checkBlocked(){if(!this.config.frequencyLimitEnable)return;const e=this.redis.get(this.ipBlockedKey);if(!e)return;const t=parseInt(e),{blockTime:n}=await this.getFreqConfig();if(n&&t+1e3*n>Date.now())throw new m(I.OPERATION_TOO_FREQUENT)}async checkIpFreq(){if(!this.config.frequencyLimitEnable)return;const{duration:e,limit:t,blockTime:n}=await this.getFreqConfig();if(!e||!t)return;const i=Date.now();if("1"===await this.redis.eval("local duration = tonumber(ARGV[1])\n    local maxBucket = tonumber(ARGV[2])\n    local tokenPerSecond = maxBucket / duration\n    local now = tonumber(ARGV[3])\n    local redisKey = ARGV[4]\n    local ipInfo = redis.call('hmget', redisKey, 'bucket', 'lastTime')\n    local bucket = tonumber(ipInfo[1])\n    local lastTime = tonumber(ipInfo[2])\n\n    bucket = bucket and bucket or maxBucket\n    lastTime = lastTime and lastTime or now\n\n    local timePassed = now - lastTime\n    local tokenAdd = math.floor(timePassed / 1000 * tokenPerSecond)\n    local timeAdd = math.floor(tokenAdd / tokenPerSecond * 1000)\n    local maxTokenAdd = maxBucket - bucket\n    tokenAdd = tokenAdd > maxTokenAdd and maxTokenAdd or tokenAdd\n    bucket = bucket + tokenAdd - 1\n    lastTime = lastTime + timeAdd\n    local status = '0'\n    if bucket < 0 then\n      bucket = 0\n      status = '1'\n    end\n    redis.call('hmset', redisKey, 'bucket', bucket, 'lastTime', lastTime)\n    redis.call('expire', redisKey, duration)\n    return status",4,"duration","limit","now","ipInfoKey",JSON.stringify(e),JSON.stringify(t),JSON.stringify(i),this.ipInfoKey))throw n&&await this.redis.set(this.ipBlockedKey,i,"EX",n),new m(I.OPERATION_TOO_FREQUENT)}}async function Ne(e){try{await new Ce(e).check()}catch(e){throw function(e,{forceReturn:t=!0}={}){return new m({code:e.code||e.errCode,message:e.message||e.errMsg,forceReturn:t})}(e)}}async function _e(e,t){const n=Ee();!("client"===t.SOURCE||"http"===t.SOURCE&&n.ipFilterForHttpEnable)||"DCloud-clientDB"===t.FUNCTION_NAME&&"redis-proxy"===(e&&e.redirectTo)||await Ne(t.CLIENTIP);const i=global.uniCloudDebug.functionPath,r=s.default.existsSync(o.default.resolve(i,"index.js")),c=s.default.existsSync(o.default.resolve(i,"index.obj.js"));let a,u=!1;if(r){if(c)throw new Error("index.js和index.obj.js不可同时存在")}else{if(!c)throw new Error("云函数名称错误或所请求云函数在cloudfunctions目录不存在，如果云端已上传可以下载到本地");u=!0}return a=u?await async function(e,t){return ae({functionPath:global.uniCloudDebug.functionPath,event:e,context:t})}(e,t):await require(i).main(e,t),a}var Oe=async(e,t,n)=>{const{event:i,context:r}=function(e,t,n){n.initUniCloud(t);const i=o.default.resolve(__dirname,"../override/index.js");if(s.default.existsSync(i)){const{init:e}=require(i);e()}global.uniCloud.callFunction=le(t);const r=pe(e,t,n);return fe(),r}(e,t,n);try{return await _e(i,r)}catch(e){return me(e)}finally{!function({context:e}={}){const t=e.requestId;delete S.requestInfo[t]}({event:i,context:r})}};const be=require("@alipay/faas-server-sdk"),ye=require("./@dcloudio/serverless/lib/alipay/uni-cloud");function Se(e,t){switch(t.SOURCE_TYPE){case"trigger":return"timing";case"invokeFunction":return"function";case"callFunction":case"gwDefault":case"gwDebug":case"client":return"client";case"httpDefault":case"httpCustom":return"http";case"console":default:return"server"}}function Te(e,t){const n=t.CLIENTIP;return n||("http"===Se(0,t)&&e&&e.headers?e.headers["x-real-ip"]:"")}function Pe(e,t){return t.REQUESTID}function ve(e,t){return t.USER_AGENT||""}function we(e,t){return{spaceId:t.ENV,provider:"alipay",useOldSpaceId:!1}}function De(){return process.env.RUNTIME_FUNCTION_NAME}function Ae(e){global.uniCloud=new ye({context:e})}async function Re(e,t){const n=be.getAlipayContext();return Oe(e,Object.assign({},n,t),{parseSource:Se,parseClientIP:Te,parseClientUserAgent:ve,parseSpaceInfo:we,parseFunctionName:De,parseRequestId:Pe,initUniCloud:Ae})}Re.toString=function(){return""};const{getAlipayContextStorage:ke}=require("@alipay/faas-server-utils"),Ue=require("@alipay/faas-server-sdk");async function Le(e,{clientIP:t="127.0.0.1",userAgent:n="HBuilderX",source:i,functionName:r,requestId:o}={}){const s=console.warn;let c;console.warn=function(){arguments&&arguments[0]&&0===arguments[0].indexOf("请检查您是否在本地环境")||s.apply(this,arguments)};try{c=JSON.parse(process.env.UNICLOUD_SECRET)}catch(e){throw new Error("未能获取本地调试所需参数，请稍后再试")}!function(e,t){const n=JSON.parse(process.env.UNICLOUD_SECRET);Ue.initRuntimeEnv({RUNTIME_FUNCTION_GATEWAY_ENDPOINT:n.endpoint,RUNTIME_MONGO_CLUSTER_ENDPOINT:n.endpoint,RUNTIME_OSS_ENDPOINT:n.endpoint,RUNTIME_ACCESS_KEY:n.accessKey,RUNTIME_SECRET_KEY:n.secretKey,RUNTIME_FUNCTION_INSTANCE_ID:"anonymous_uuid",RUNTIME_ENV_ID:n.spaceId,RUNTIME_FUNCTION_NAME:e,APPID:n.spaceAppId,SOURCE:t||"client"}),Ue.refreshConfig()}(r,i);const a={CLIENTIP:t,CLIENTUA:n,FUNCTION_NAME:r,SPACEINFO:{provider:"alipay",spaceId:c.spaceId,useOldSpaceId:!1},SOURCE:i||"client",requestId:o},u={APPID:c.spaceAppId};return ke().run(u,()=>Re(e,a))}process.noDeprecation=!0,module.exports=async function(e,t,{userAgent:n,clientIP:i,source:r="client"}={}){t=t||{};const o=H(global.uniCloudDebug.realWorkspace,global.uniCloudDebug.provider,e);if(V(o))throw new m({code:"FUNCTION_ENCRYPTED",message:"此云函数/云对象已加密，不可本地运行"});return Object.assign(global.uniCloudDebug,{functionName:e,functionPath:o}),se(o),await Le(t,{userAgent:n,clientIP:i,functionName:e,source:r,requestId:k()})};