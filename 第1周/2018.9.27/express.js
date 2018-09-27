let express=require("express");
//express创建一个服务
let app=express();
//监听端口
app.get('/login',function(req,res){
    res.end('文字')
});
//只有发送的是post请求，且路径是“ /register ”时，才会拦截住这个方法
app.post('/register',function(req,res){
    res.end('文字')
});
//不管是什么方式的请求，只要路径对了就可以
app.all('/login',function(req,res){
    res.end('文字')
});
//* ：通配符，可以匹配所有路径
app.get('*',function(req,res){
    res.end('文字')
});
app.listen(8081,function(){
    console.log("OK");
});
