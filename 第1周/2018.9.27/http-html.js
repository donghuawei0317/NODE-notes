let http = require('http');
//一个端口号只能运行一个服务
let fs = require("fs");
let server = http.createServer(function (req, res) {
    console.log(req.url);
    if (req.url === "/") {
        fs.readFile('./index.html', 'utf8', function (err, data) {
            //当读取数据完毕之后，才把数据响应给客户端
            //如果服务器端读取HTML的类型，那么客户端接收到数据之后，会检测出当前是一个HTML类型的数据，会默认按照
            res.end(data);
        });
    } else if (req.url === "/index.css") {
        fs.readFile('./index.css', 'utf8', function (err, data) {
            res.end(data);
        });
    } else if (req.url === "/index.js") {
        fs.readFile('./index.js', 'utf8', function (err, data) {
            res.end(data);
        });
    }
});
server.listen(8080, function () {
    console.log("OK");
});