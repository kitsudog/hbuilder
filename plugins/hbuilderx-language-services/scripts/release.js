const fs=require("fs-extra"),f=require("fs"),path=require("path"),execa=require("execa"),glob=require("glob"),os=require("os");function traverseDir(e){const s=[];let t=e;if(fs.lstatSync(e).isSymbolicLink()&&(t=fs.realpathSync(e)),!fs.existsSync(t))return console.error(`[PathError] path: ${t} is not exist.`),[];return fs.readdirSync(t).forEach((t=>{const r=path.join(e,t);if(fs.lstatSync(r).isSymbolicLink())return;if(fs.statSync(r).isDirectory())s.push(...traverseDir(r));else if("package.json"===t){const e=fs.readFileSync(r,"utf-8");let t;try{t=JSON.parse(e)}catch(e){console.log(e+`[JSONError] path: ${r}`)}if(!t)return;const o=t.name,i=t.version;if(!o)return;s.push({name:o,version:i})}})),s}function convertToMap(e){const s=new Map;return e.forEach((e=>{s.set(e.name,e.version)})),s}function mapToObj(e){return Object.fromEntries(e)}function objToMap(e){let s=new Map;return"object"==typeof e&&(s=new Map(Object.entries(e))),s}function getCacheMap(e){return objToMap(JSON.parse(fs.readFileSync(e,{encoding:"utf-8"})))}function compareMap(e,s){const t=[];s.forEach(((s,r)=>{e.has(r)||t.push(r)}));const r=[];e.forEach(((e,t)=>{s.has(t)||r.push(t)}));const o=[];return s.forEach(((s,r)=>{t.includes(r)||e.get(r)!==s&&o.push({npmName:r,oldVersion:e.get(r),newVersion:s})})),{addKeyList:t,deleteKeyList:r,diffMap:o}}async function run(){let e=execa("npm",["run","clean"],{stdio:"inherit"});try{await e}catch(s){console.error(s),process.exit(e.exitCode)}let s=execa("npm",["run","build"],{stdio:"inherit"});try{await s}catch(e){console.error(e),process.exit(s.exitCode)}let t=path.dirname(__dirname),r=path.join(t,"preDist"),o=path.join(t,"dist"),i=path.join(o,"node_modules"),n=path.join(t,"scripts/npmVersion.json");fs.pathExistsSync(r)&&fs.removeSync(r),fs.pathExistsSync(o)&&fs.removeSync(o);let c=path.join(os.tmpdir(),"hbuilderx-language-services-tmp");fs.pathExistsSync(c)&&fs.removeSync(c),f.mkdirSync(c),fs.copySync(path.dirname(__dirname),c,{filter:(e,s)=>f.lstatSync(e).isDirectory()?!(e.indexOf("/builtin-dts/")<0&&(e.endsWith("/node_modules")||e.endsWith("/.vscode")||e.endsWith("/.git"))):!/package-lock\.json$/.test(e)&&(!!(/.*\.js$/.test(e)||/.*\.json/.test(e)||e.indexOf("/builtin-dts/")>=0||e.indexOf("/frameworkdts/")>=0)&&(console.log("+"+e),!0))},(e=>{if(e)return console.error(e);console.log("success!")})),fs.moveSync(c,r,{overwrite:!0},(e=>{if(e)return console.error(e);console.log("copy to dist success!")})),fs.copySync(path.dirname(__dirname)+"/jsservice/out/tsplugins",r+"/jsservice/out/tsplugins",{filter:()=>!0},(e=>{if(e)return console.error(e);console.log("copy dcloudio插件 success!")})),fs.copySync(path.join(__dirname,"../lib/img"),path.join(r,"/lib/img"),{recursive:!1},(()=>{if(err)return console.error(err);console.log("copy imgs successed!")})),console.log("RUN COPY COMPRESS"),await execa("gulp",[],{stdio:"inherit",cwd:t}),console.log("RUN COPY COMPRESS END"),await execa("npm",["install","--production","--registry=https://registry.npmmirror.com"],{stdio:"inherit",cwd:o});["/node_modules/typescript/bin/","/node_modules/typescript/loc/","/node_modules/typescript/lib/typescript.js","/node_modules/typescript/lib/tsserver.js","/node_modules/typescript/lib/tsserverlibrary.js","/node_modules/typescript/lib/typescript.d.ts","/node_modules/typescript/lib/typescriptServices.js","/node_modules/typescript/lib/typescriptServices.d.ts","/node_modules/typescript/lib/tsc.js"].forEach((e=>{fs.removeSync(o+e)}));["tsserver.js","tsserverlibrary.js"].forEach((e=>{fs.copyFileSync(path.join(t,"node_modules/typescript/lib",e),path.join(o,"node_modules/typescript/lib",e));let s=fs.readFileSync(path.join(o,"node_modules/typescript/lib",e));"tsserverlibrary.js"===e&&s.indexOf("sayHelloWorld")<0&&(console.error("typescript库文件["+e+"],未检查到修改的代码！"),process.exit(999)),"tsserver.js"===e&&s.length>102400&&(console.error("typescript库文件["+e+"],大小不符合要求！",s.length),process.exit(999))}));let l=path.join(o,"node_modules/typescript/package.json"),a=require(l);a.main="./lib/tsserverlibrary.js",fs.writeFileSync(l,JSON.stringify(a)),removeFilterFiles([".d.ts",".js.map",".md"],path.join(o,"node_modules"),["typescript"]),console.log("BUILD RELEASE PKG:OK");const p=convertToMap(traverseDir(i)),d=getCacheMap(n),{addKeyList:y,deleteKeyList:u,diffMap:m}=compareMap(d,p),h=mapToObj(p);let j=JSON.stringify(h,null,4);fs.writeFileSync(n,j),y.length>0&&console.warn("[WARNING] addKeyList: ",y),u.length>0&&console.warn("[WARNING] deleteKeyList: ",u),m.length>0&&console.warn("[WARNING] diffMap: ",m)}function removeFilterFiles(e,s,t){let r=fs.readdirSync(s,{withFileTypes:!0});for(let o=0;o<r.length;o++){let i=r[o];if(i.isDirectory()){if(t&&t.indexOf(i.name)>=0)continue;removeFilterFiles(e,path.join(s,i.name))}else i.isFile()&&e.forEach((e=>{i.name.endsWith(e)&&(fs.removeSync(path.join(s,i.name)),console.log("-"+path.join(s,i.name)))}))}}run();