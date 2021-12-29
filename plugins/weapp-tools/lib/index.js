"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var fs=_interopDefault(require("fs")),path=_interopDefault(require("path")),glob=_interopDefault(require("glob")),fs$1=_interopDefault(require("fs-extra")),child_process=require("child_process"),merge=_interopDefault(require("merge")),babel=_interopDefault(require("../../uniapp-cli/node_modules/@babel/core")),async=require("async"),async__default=_interopDefault(async);const chalk=require("chalk"),os=require("os"),crypto=require("crypto"),isWin=/^win/.test(process.platform),normalizePath=e=>isWin?e.replace(/\\/g,"/"):e,wccRelativePath=isWin?"./package.nw/js/vendor/wcc.exe":"./Contents/Resources/app.nw/js/vendor/wcc",wccOldMacRelativePath="./Contents/Resources/package.nw/js/vendor/wcc",wcscRelativePath=isWin?"./package.nw/js/vendor/wcsc.exe":"./Contents/Resources/app.nw/js/vendor/wcsc",wcscOldMacRelativePath="./Contents/Resources/package.nw/js/vendor/wcsc";let wxDevToolsNightlyAppDataWindowsPath=__dirname,wxDevToolsStableAppDataWindowsPath=__dirname;process.env.APPDATA&&(wxDevToolsNightlyAppDataWindowsPath=path.resolve(process.env.APPDATA,"./Tencent/微信开发者工具/"),wxDevToolsStableAppDataWindowsPath=path.resolve(process.env.APPDATA,"./Tencent/微信web开发者工具/"));const wxDevToolsDirs=[];isWin&&(wxDevToolsDirs.push([path.resolve(wxDevToolsNightlyAppDataWindowsPath,wccRelativePath),path.resolve(wxDevToolsNightlyAppDataWindowsPath,wcscRelativePath)]),wxDevToolsDirs.push([path.resolve(wxDevToolsStableAppDataWindowsPath,wccRelativePath),path.resolve(wxDevToolsStableAppDataWindowsPath,wcscRelativePath)])),wxDevToolsDirs.push([path.resolve(process.env.WX_DEVTOOLS||__dirname,wccRelativePath),path.resolve(process.env.WX_DEVTOOLS||__dirname,wcscRelativePath)]),wxDevToolsDirs.push([path.resolve(process.env.WX_DEVTOOLS||__dirname,wccOldMacRelativePath),path.resolve(process.env.WX_DEVTOOLS||__dirname,wcscOldMacRelativePath)]),isWin||(wxDevToolsDirs.push([path.resolve("/Applications/微信开发者工具.app/",wccRelativePath),path.resolve("/Applications/微信开发者工具.app/",wcscRelativePath)]),wxDevToolsDirs.push([path.resolve("/Applications/微信开发者工具.app/",wccOldMacRelativePath),path.resolve("/Applications/微信开发者工具.app/",wcscOldMacRelativePath)]),wxDevToolsDirs.push([path.resolve("/Applications/wechatwebdevtools.app/",wccRelativePath),path.resolve("/Applications/wechatwebdevtools.app/",wcscRelativePath)]),wxDevToolsDirs.push([path.resolve("/Applications/wechatwebdevtools.app/",wccOldMacRelativePath),path.resolve("/Applications/wechatwebdevtools.app/",wcscOldMacRelativePath)]));const ERR_TIPS="未检测到微信web开发者工具，即使开发App也需要此工具。如已安装，请确认路径配置是否正确（HBuilderX设置-运行配置-微信开发者工具路径），或检查是否微信工具版本过低",getWcsc=()=>{for(let e=0;e<wxDevToolsDirs.length;e++){const n=wxDevToolsDirs[e];if(fs.existsSync(n[1]))return n[1]}throw new Error(ERR_TIPS)},getWcc=()=>{for(let e=0;e<wxDevToolsDirs.length;e++){const n=wxDevToolsDirs[e];if(fs.existsSync(n[0]))return n[0]}throw new Error(ERR_TIPS)},textColor=e=>{switch(e.toLowerCase()){case"success":return"green";case"info":return"blue";case"note":return"white";case"warning":return"yellow";case"error":default:return"red"}},log=(e,n,t)=>{"error"===e?console.error(chalk[textColor(e)]("["+n+"]",t)):console.log(chalk[textColor(e)]("["+n+"]",t))},error=(e,n)=>{log("error",e,n)};function formatWxssErr(e){return e.toString().replace("./common/main.wxss","app.vue").replace(".wxss",".vue").split(" at pos")[0]}function normalizeConfigPath(e=""){const n=path.posix.normalize(e.replace(/\\/g,"/"));return!e.startsWith("//")&&!e.startsWith("\\\\")||n.startsWith("//")?n:"/"+n}function generateMD5(e){const n=crypto.createHash("md5");return n.update(e),n.digest("hex")}function random(){return generateMD5(Math.random()+""+Date.now())}function useConfigPath(e){if(isWin){if(e.length>128)return!0;for(const n of e)if(n.length>1e4)return!0}return!1}function getCompilerConfigParams(e){if(useConfigPath(e)){const n=path.join(os.tmpdir(),random());return fs.writeFileSync(n,e.join("\n")),{configPath:n,params:["--config-path",normalizeConfigPath(n)]}}return{configPath:"",params:e}}function parseWxss(e,n){const t=glob.sync("**/*.wxss",{nodir:!0,cwd:e,ignore:["./node_modules/**/*"]}).map(e=>"./"+e),o=[],{params:a,configPath:r}=getCompilerConfigParams(["-js","-pc",t.length].concat(t)),s=child_process.spawn(getWcsc(),a,{cwd:e});s.stdout.on("data",e=>{o.push(e)}),s.stderr.on("data",e=>{r&&e&&-1!==e.toString().indexOf(r)?error("错误","请检查是否微信工具版本过低"):error("错误",formatWxssErr(e))}),s.on("close",e=>{r&&fs$1.unlinkSync(r);const t=Buffer.concat(o).toString().split("="),a={},s=t.length;for(let e=0;e<s&&t[e+1];e+=2)a[t[e]]=new Function("{return `"+t[e+1]+"`}")();n(null,a)})}var debug=!1,appname="",entryPagePath="",page={},global={window:{navigationBarBackgroundColor:"#000000",navigationBarTextStyle:"white",navigationBarTitleText:"",navigationStyle:"default",backgroundColor:"#ffffff",backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff",enablePullDownRefresh:!1,onReachBottomDistance:50}},tabBar={color:"",selectedColor:"",backgroundColor:"",borderStyle:"black",list:[],position:"bottom"},networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},platform="",defaultConfig={debug:debug,appname:appname,entryPagePath:entryPagePath,page:page,global:global,tabBar:tabBar,networkTimeout:networkTimeout,platform:platform};function parseConfig(e){let n=!1;try{n=JSON.parse(fs$1.readFileSync(path.join(e,"./app.json"))),(n=merge.recursive(!0,defaultConfig,n)).platform="devtools",n.entryPagePath=n.pages.length&&n.pages[0]+".html"||"",n.global.window=n.window||{},delete n.window,n.tabBar&&n.tabBar.list.length&&n.tabBar.list.forEach(e=>{e.pagePath=e.pagePath+".html"}),fs$1.existsSync(path.join(e,"./__uniappsecondary.js"))?(n.secondary=n.secondary||100,n.global.window.navigationStyle="custom"):delete n.secondary}catch(e){console.error(e),n=!1}return n}function parseResource(e,n){const t=[],o=[],a={},r=[],s=[],i=[],c=[],p=glob.sync("**/*.wxs",{nodir:!0,cwd:n,ignore:["./node_modules/**/*"]}).map(e=>"./"+e),l=glob.sync("**/*.wxml",{nodir:!0,cwd:n,ignore:["./node_modules/**/*"]}).map(e=>"./"+e).concat(p);glob.sync("**/*.json",{nodir:!0,cwd:n,ignore:["./node_modules/**/*"]}).map(e=>{if("manifest.json"!==e){const t=JSON.parse(fs$1.readFileSync(path.join(n,e),"utf8"));(t.usingComponents||t.componentGenerics||!0===t.component)&&(a[e]=t,!0===t.component&&i.push(e.replace(".json",".js")))}});const u=glob.sync("**/*.js",{nodir:!0,cwd:n,ignore:["./node_modules/**/*"]}),f=e.pages.map(function(e){return e+".js"});return u.forEach(e=>{-1===f.indexOf(e)&&-1===i.indexOf(e)&&"app.js"!==e&&s.push(e)}),f.forEach(e=>{if(-1===u.indexOf(e))console.log(` ✗ ${e} not found`);else{r.push(e),e=e.replace(".js",""),t.push(e+".html");const a=path.join(n,e+".json");fs$1.existsSync(a)?c.push({name:e+".html",json:a}):c.push({name:e+".html"}),o.push(e+".wxss")}}),e.page={},c.forEach(function(n){if(e.page[n.name]={window:{}},n.json){const t=fs$1.readFileSync(n.json,"utf-8");try{e.page[n.name].window=JSON.parse(t)}catch(e){}}}),{wxjs:{page:r,module:s,component:i},page:t,wxml:l,wxss:o,componentJsons:a}}const ignoreFiles=[".DS_Store","manifest.json","app-config.js","app-service.js","app-view.js","setCssToHead.js","__uniappview.js","__uniappservice.html","__uniappview.html"];function copyTemplate(e){if(process.env.UNI_USING_NVUE_COMPILER){const n=["__uniappmarker@3x.png","__uniappopenlocation.html","__uniapppicker.html"];fs$1.copySync(path.join(__dirname,"../template/common"),e,{filter:e=>{const t=path.basename(e);return!~ignoreFiles.indexOf(t)&&!~n.indexOf(t)}}),fs$1.copySync(path.join(__dirname,"../../uniapp-cli/node_modules/@dcloudio/uni-cli-shared/template/common"),e)}else{fs$1.copySync(path.join(__dirname,"../template/common"),e,{filter:e=>!~ignoreFiles.indexOf(path.basename(e))});const n=process.env.UNI_USING_V8?"v8":"webview";fs$1.copySync(path.join(__dirname,"../template",n),e,{filter:e=>!~ignoreFiles.indexOf(path.basename(e))})}}const whiteFileExtName=[".png",".jpg",".jpeg",".gif",".svg",".cer",".mp3",".aac",".m4a",".mp4",".wav",".ogg",".silk",".map",".ttf"];function copyResource(e,n){glob.sync("./**",{nodir:!0,cwd:e,ignore:["./node_modules/**/*"]}).forEach(t=>{(~whiteFileExtName.indexOf(path.extname(t).toLowerCase())||~t.indexOf("__uniappsecondary.js")||0===normalizePath(t).indexOf("./static"))&&fs$1.copySync(path.join(e,t),path.join(n,t))})}const getCompileConfig=function(e,n,t,o){let a=0,r=[];return Object.keys(t).forEach(e=>{const n=t[e];if(n.usingComponents||n.componentGenerics){r.push("./"+e.replace(".json",".wxml"));const t=Object.assign({},n.usingComponents,n.componentGenerics);r.push(Object.keys(t).length),r=r.concat(Object.keys(t)),a++}}),r.unshift(a),["-"+e,r.join(" ")].concat(o)},generateWxml=function(e,n,t,o,a){if(!o.length)return void a(null,"$gwx = function(){}");const r=[],{params:s,configPath:i}=getCompilerConfigParams(getCompileConfig(e,0,t,o)),c=child_process.spawn(getWcc(),s,{cwd:path.join(n,"./")});c.stdout.on("data",e=>{r.push(e)}),c.stderr.on("data",e=>{i&&e&&-1!==e.toString().indexOf(i)?error("错误","请检查是否微信工具版本过低"):error("错误",e)}),c.on("close",e=>{i&&fs$1.unlinkSync(i),a(null,Buffer.concat(r).toString())})},varCode="var __wxAppData = {};\nvar __wxRoute;\nvar __wxRouteBegin;\nvar __wxAppCode__ = {};\nvar global = {};\nvar __wxAppCurrentFile__;\nif(typeof __WXML_GLOBAL__ !== 'undefined'){\n  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)\n}\n// var Component = Component || function() {};\n// var definePlugin = definePlugin || function() {};\n// var requirePlugin = requirePlugin || function() {};\n// var Behavior = Behavior || function() {};\nvar $gwx;\n",paramsCode="require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge";let afterCode="";process.env.UNI_USING_V8&&(afterCode=";(function(global) {\n    __uni_launch_ready(function() {\n        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')\n        if (entryPagePath.indexOf('/') !== 0) {\n            entryPagePath = '/' + entryPagePath\n        }\n        wx.navigateTo({\n            url: entryPagePath,\n            query: {},\n            openType: 'appLaunch',\n            webviewId: 1\n        })\n        __wxConfig.__ready__ = true\n    })\n})(this);");const getLines=function(e){return e.split(/[\r\n]/).length},defineJsCode=(e,n,t)=>(t.sourceMap&&(t.start+=1,t.sourceMap.addSourceMap(n,t.start),t.start+=getLines(n.code)+1),`\ndefine('${e}',function(${paramsCode}){\n${n.code}\n});`),defineAppCode=(e,n,t)=>{const o=`${defineJsCode(e,n,t)}\nrequire('${e}');`;return t.start+=1,o},defineComponentCode=(e,n,t,o)=>definePageCode(e,n,t,o),definePageCode=(e,n,t,o)=>{o.start+=2;const a=`\n__wxRoute = '${e}';__wxRouteBegin = true;__wxAppCurrentFile__ = '${n}';\n${defineJsCode(n,t,o)}\nrequire('${n}');`;return o.start+=1,a},createTransformFileSync=function(e,n){return function(t,o){const a=fs$1.readFileSync(path.join(e,t),"utf-8");if(n||o){const e=babel.transform(a,{filename:t,configFile:path.resolve(__dirname,"../../uniapp-cli/babel.config.js")});return{code:e.code,map:e.map,sourceContent:a}}return{code:a,map:{},sourceContent:a}}},wxAppCode=function(e){return Object.keys(e).map(n=>`\n__wxAppCode__['${n}']=${JSON.stringify(e[n])};\n__wxAppCode__['${n.replace(".json",".wxml")}']=$gwx('./${n.replace(".json",".wxml")}');\n`).join("")};function generateServiceJs(e,n,t,o,a,r,s){generateWxml("xc",n,t,o,function(o,i){o&&console.error(o);let c="";c=Object.keys(t).length?`${varCode}  \n${i}\n${wxAppCode(t)}\n`:`${varCode} \n      `;const p={start:getLines(c),sourceMap:!1},l=createTransformFileSync(n,r);p.start+=1;const u=a.module.map(e=>~["common/manifest.js","common/vendor.js","common/main.js"].indexOf(e)?defineJsCode(e,l(e),p):defineJsCode(e,l(e,!0),p)).join("");p.start+=1;const f=defineAppCode("app.js",l("app.js"),p);p.start+=1;const d=a.component.map(e=>defineComponentCode(e.replace(".js",""),e,l(e,!0),p)).join("");p.start+=1;const h=[{path:"app-service.js",content:`${c}\n${u}\n${f}\n${d}\n${a.page.map(e=>definePageCode(e.replace(".js",""),e,l(e),p)).concat(e.nvue&&Object.keys(e.nvue.pages||[]).map(e=>definePageCode(e.replace(".html",""),e.replace(".html",".js"),{code:"\n    Page({\n            onShow: function(){\n              this.$vm && this.$vm.__call_hook('onShow')\n            },\n            onHide: function(){\n              this.$vm && this.$vm.__call_hook('onHide')\n            },\n            onPullDownRefresh: function(){\n              this.$vm && this.$vm.__call_hook('onPullDownRefresh')\n            }\n        })\n    "},p))||[]).join("")}\n${afterCode}\n${p.sourceMap&&p.sourceMap.toSourceMapUrl()||""}\n`}];s&&s(h)})}function generateServiceHtml(e,n){const t=fs$1.readFileSync(path.join(__dirname,"../template/webview/__uniappservice.html"),"utf-8");e.nvue&&e.nvue.pages&&(e.nvue.entryPagePath&&(e.entryPagePath=e.nvue.entryPagePath),e.pages=e.pages.concat(Object.keys(e.nvue.pages).map(e=>e.replace(".html",""))));const o=`var __wxConfig = ${JSON.stringify(e)}`;n("__uniappservice.html",t.replace("/*CONFIG*/",function(){return o}).replace("\x3c!--TOPTABBAR--\x3e",function(){return e.secondary?'<div id="app"></div>\n<script type="text/javascript" src="__uniappsecondary.js"><\/script>':""}))}const beforeCode="var __pageFrameStartTime__ = Date.now();\nvar __webviewId__;\nvar __wxAppCode__ = {};\nvar __WXML_GLOBAL__ = {\n  entrys: {},\n  defines: {},\n  modules: {},\n  ops: [],\n  wxs_nf_init: undefined,\n  total_ops: 0\n};\nvar $gwx;\n";let afterCode$1=";var __pageFrameEndTime__ = Date.now();\n(function() {\n       plus.webview.getLaunchWebview().evalJS('__uniAppViewReadyCallback__(\"' + plus.webview.currentWebview()\n           .id + '\")')\n})();\n";process.env.UNI_USING_V8&&(afterCode$1=";var __pageFrameEndTime__ = Date.now();\n(function() {\n        window.UniLaunchWebviewReady = function(isWebviewReady){\n          // !isWebviewReady && console.log('launchWebview fallback ready')\n          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');\n        }\n        UniLaunchWebviewReady(true);\n})();");const wxAppCode$1=function(e,n){return Object.keys(e).map(e=>{const t="./"+e.replace(".json",".wxml"),o="./"+e.replace(".json",".wxss");return`\n__wxAppCode__['${e.replace(".json",".wxss")}']=${n[o]};    \n__wxAppCode__['${e.replace(".json",".wxml")}']=$gwx('${t}');\n`}).join("")};function generateViewJs(e,n,t,o,a){const r=[];r.push(function(n){generateWxml("cc",e,t,o,n)}),async__default.parallel(r,function(e,o){e&&console.error(e);const r=o[0]||"",s=n.comm;a&&a("app-view.js",`${beforeCode}\n${r}\n${s}\n${wxAppCode$1(t,n)}\n${afterCode$1}\n`)})}function generateServiceHtml$1(e,n){const t=fs$1.readFileSync(path.join(__dirname,"../template/common/__uniappview.html"),"utf-8");e.nvue&&(e.nvue.entryPagePath&&(e.entryPagePath=e.nvue.entryPagePath),e.pages=e.pages.concat(Object.keys(e.nvue.pages).map(e=>e.replace(".html",""))));const o=`var __wxConfig = ${JSON.stringify(e)}`;n("__uniappview.html",t.replace("/*CONFIG*/",function(){return o}))}function generatePageCssJs(e,n,t){t&&t(n.map(n=>{const t=e["./"+n],o="./"+n.replace(".wxss",".wxml"),a=(t&&t+"();\n"||"")+`document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('${o}') } }));`;return{path:n.replace(".wxss",".js"),content:a}}))}function generateConfigJs(e,n){e.nvue&&e.nvue.pages&&(e.nvue.entryPagePath&&(e.entryPagePath=e.nvue.entryPagePath),e.pages=e.pages.concat(Object.keys(e.nvue.pages).map(e=>e.replace(".html","")))),n&&n("app-config.js",`"use weex:vue";var __wxConfig = ${JSON.stringify(e)};`)}function index(e,n,t,o,a){const r=normalizePath(path.resolve(e,"./")),s=normalizePath(path.resolve(n));a=a||{};const i=parseConfig(r);if(!i)return error("ERROR","读取app.json失败..."),void(o&&o(!1));const{wxjs:c,wxml:p,wxss:l,componentJsons:u}=parseResource(i,r);parseWxss(r,function(e,n){if(e)throw new Error(e);const t=[],a=function(e){return function(n,t){Array.isArray(n)?e(null,n):e(null,[{path:n,content:t}])}};process.env.UNI_USING_V8&&t.push(function(e){generateConfigJs(i,a(e))}),process.env.UNI_USING_V8||t.push(function(e){generateServiceHtml(i,a(e))}),t.push(function(e){generateServiceJs(i,r,u,p,c,!1,a(e))}),t.push(function(e){generateServiceHtml$1(i,a(e))}),t.push(function(e){generateViewJs(r,n,u,p,a(e))}),t.push(function(e){generatePageCssJs(n,l,a(e))}),async.parallel(t,function(e,n){e&&console.error(e),n.forEach(function(e){e.forEach(function(e){fs$1.outputFileSync(path.join(s,e.path),e.content,{override:!0})})}),copyResource(r,s),copyTemplate(s),o&&o(!0)})})}module.exports=index;
