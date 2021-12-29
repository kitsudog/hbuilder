const fs=require("fs");async function excuteJql({jqlPath:jqlPath,jqlContent:jqlContent}={},context){let jqlRes;if(jqlPath)try{jqlContent=fs.readFileSync(jqlPath).toString()}catch(e){return{code:e.code||"READ_JQL_ERROR",message:e.message||"读取jql文件出错"}}try{const db=require("./db");jqlRes=eval(jqlContent)}catch(e){return{code:e.code||"EXECUTE_JQL_ERROR",message:"执行jql文件出错，当前执行的数据库指令不正确，详细错误信息为："+e.message,detail:e.stack}}try{jqlRes=JSON.parse(JSON.stringify(jqlRes))}catch(e){return{code:"EXECUTE_JQL_ERROR",message:"数据库指令不正确，请检查传参是否有误"}}if(!jqlRes.command&&!jqlRes.multiCommand)return{code:"EXECUTE_JQL_ERROR",message:"数据库指令不正确，请检查传参是否有误"};const uniCurd=require("./client-db/index");return uniCurd({event:jqlRes,context:context})}exports.main=async function({jqlPath:e,jqlContent:t}={},n){let s;try{s=await excuteJql({jqlPath:e,jqlContent:t},n)}catch(e){s={code:e.code||"EXECUTE_JQL_ERROR",message:"执行jql文件出错，详细错误信息为："+e.message,detail:e.stack}}return process.send({type:"ExecuteResult",result:s}),s};