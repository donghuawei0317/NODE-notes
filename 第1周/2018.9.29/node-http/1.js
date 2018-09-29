let http=require('http');
let fs=require('fs');
http.createServer((req,res)=>{
    //获取 1.html
    fs.readFile('./1.html','utf8',(err,data)=>{
        res.end(data);
    })
    console.log("回调函数执行");
    //res.end('<html></html>');
    switch(req.url){
        case '/': 
            fs.readFile('./1.html','utf8',(err,data)=>{
                re.end(data);
            })
            break;
        case '/index.js':
            let data=fs.
    }
}).listen(8000,()=>{
    console.log("OK");
});