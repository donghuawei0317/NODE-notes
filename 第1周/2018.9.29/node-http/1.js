let http=require('http');
let fs=require('fs');
let mime=require('mime');

http.createServer((req,res)=>{
    //获取 1.html
    // fs.readFile('./1.html','utf8',(err,data)=>{
    //     res.end(data);
    // })
    // console.log("回调函数执行");
    //res.end('<html></html>');
    console.log(req.url);
    switch(req.url){
        case '/': 
        case '/index.html':
            let t=mime.getType('./index.html');
            console.log(t);
            fs.readFile('./1.html','utf8',(err,data)=>{
                res.end(data);
            })
            break;
        case '/index.js':
            let data=fs.readFileSync('./index.js','utf8');
            res.end(data);
            break;
        case '/favicon.ico':
            res.end();
            break;
        case '/add':
            break;
        default:
            fs.readFile('./404.html','utf8',(err,data)=>{
                res.end(data);
            })
            break;
    }
}).listen(8000,()=>{
    console.log("OK");
});