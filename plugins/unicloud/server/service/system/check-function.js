const Service=require("../service"),path=require("path"),fs=require("fs"),{ErrorWithCode:ErrorWithCode,getRealWorkspace:getRealWorkspace}=require("../../utils/index");function checkEncrypt(e,r=!1){if(fs.existsSync(path.resolve(e,"encrypt")))throw new ErrorWithCode({code:r?"FUNCTION_ENCRYPTED":"MODULE_ENCRYPTED",message:r?"云函数已加密不支持本地运行":"云函数依赖加密公共模块不可本地调试"});let s;try{s=require(path.resolve(e,"package.json"))}catch(e){}if(!s)return;const c=s.dependencies;if(!c)return;const t=Object.keys(c);for(let r=0;r<t.length;r++){const s=c[t[r]];s.indexOf("file:")>-1&&checkEncrypt(path.resolve(e,s.slice(5)))}}class CheckFunctionService extends Service{async exec(){const{name:e,platform:r,provider:s,spaceId:c}=this.ctx.data,{hxConfig:t,logger:o}=this.ctx,n=getRealWorkspace({provider:s});if(!n)return{code:"SWITCH_TO_CLOUD",message:"此服务空间不在本项目下，需要切换为已部署的云函数"};let a,i;if(t){a=t.provider;i=Object.assign({},t.default,t[r]).launchtype}let d=[];try{d=JSON.parse(process.env.UNICLOUD_INFO)}catch(e){return o.error("项目关联的uniCloud服务空间信息不正确"),{code:"INTERNAL_ERROR",message:"项目关联的uniCloud服务空间信息不正确"}}if(d.every((e=>e.spaceId!==c)))return{code:"SWITCH_TO_CLOUD",message:"此服务空间不在本项目下，需要切换为已部署的云函数"};if(a&&!a.split(",").includes(s))return{code:"SWITCH_TO_CLOUD",message:"当前provider需使用云端云函数"};if(!a)switch(d.length){case 0:return{code:"INTERNAL_ERROR",message:"项目未关联uniCloud服务空间"};case 1:break;case 2:return{code:"INTERNAL_ERROR",message:"项目关联了多个服务空间（一个阿里云一个腾讯云），需要指定调试服务使用的服务空间"};default:return{code:"INTERNAL_ERROR",message:"未知错误"}}if("local"!==i)return{code:"SWITCH_TO_CLOUD",message:"切换至云端"};const u=path.resolve(n,`uniCloud-${process.env.SPACE_PROVIDER}`),l=path.resolve(u,"cloudfunctions",e);try{checkEncrypt(l,!0)}catch(e){return{code:e.code,message:e.message}}return{code:0,message:"使用本地云函数"}}}module.exports=CheckFunctionService;