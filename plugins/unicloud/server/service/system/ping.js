const Service=require("../service");class PingService extends Service{async exec(){return{code:0,message:"服务可用"}}}module.exports=PingService;