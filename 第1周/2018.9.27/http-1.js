let http=require('http');
let server=http.createServer(function(req,res){
    //请求一次，该函数就执行一次
    //req：请求信息
    //res：响应信息
    res.setHeader("Content-Type","text/plain;charset=utf-8");//设置响应头,告诉浏览器按照什么类型进行解析和渲染
    res.end("文字");//1、结束请求；2、把数据返回给客户端；3、参数是一个字符串或者buffer
});
server.listen(8080,function(){
    //如果端口启动成功，那么服务就可以监听到请求
    console.log("OK");
});