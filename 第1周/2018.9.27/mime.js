let http = require("http");
let fs = require("fs");
let mime = require("mime");
let url = require('url');
http.createServer(function (req, res) {
    let {pathname}=url.parse(req.url, true);
    //mime：有个getType方法，返回值是当前文件对应的mime类型
    console.log(mime.getType(pathname));
    res.setHeader("Content-Type",mime.getType(pathname));
    fs.readFile("."+pathname,function(err,data){
        res.end(data);
    })
}).listen(8080, function () {
    console.log("OK");
});