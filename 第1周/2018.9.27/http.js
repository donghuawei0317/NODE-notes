//只要修改了server文件，那么一定要重新跑一下
let http = require('http');//导入模块
let server = http.createServer(function (req,res) {
    //req：请求
    //res：相应
    //当客户端请求时，会把当前的请求信息放入到这个函数的第一个参数
    //当客户端访问对应的端口时执行
    //只要客户端请求一次，当前函数就执行一次
    console.log(1);
    res.end();//结束当前的请求；把后端整理的数据返回给客户端
});
//端口号：0-65535.http，默认端口号80；https，默认端口号443
server.listen(8000,function(){
    //listen的回调函数，当前服务启动成功就会马上执行，且只执行一次；如果端口启动不成功，则不执行
});//【让当前的服务监听8000这个端口，当客户端访问8000这个端口时，会触发当前server的回调函数】