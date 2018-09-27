let http = require('http');
let fs = require('fs');
let url=require('url');
http.createServer(function (req, res) {
//url.path：用来处理路径
    //pathname：当前路径
    //query：参数组合的对象
    console.log(req.url);
    if(req.url==="/index.html"){

    }
}).listen(8080, function () {
    console.log("OK");
});