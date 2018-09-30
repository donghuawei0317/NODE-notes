let http = require('http');
let fs = require('fs');
let url = require('url');

//读取文件
function read(cb){
    fs.readFile('./list.json','utf8',(err,data)=>{
        //console.log(data);
        cb && cb(err,data);
    });
}
//写入文件
function write(ary,cb){
    fs.writeFile('./list.json',JSON.stringify(ary),'utf8',(err)=>{
        // //写入成功才算修改成功
        // if(!err){
        //     //obj 中的 errorCode 是 0 ，对于前端就是代表成功状态
        //     res.end(JSON.stringify(obj));
        // }
        cb(err);
    });
}
http.createServer((req,res)=>{
    // let path = './list.json';
    let obj = {errorCode:0};//返回给前端的数据对象
    res.setHeader("Content-Type","text/plain;charset=utf-8");
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader("Access-Control-Allow-Headers",'*');

    let {pathname,query}=url.parse(req.url,true);

    console.log(req.method);
    if(req.method == 'OPTIONS'){
        res.end();
        return;
    }
    
    switch(pathname){
        case '/list'://请求列表接口
            read((err,data)=>{
                if(!err){
                    obj.data=JSON.parse(data);
                    res.end(JSON.stringify(obj));
                }else{
                    boj.errorCode = 1;
                    res.end(JSON.stringify(obj));
                }
            });
            break;
        case '/remove'://删除数据中 id 对应的那一项数据
            //先拿到文件中的数据；
            //再循环数据，从中删除 id 对应的那一项
            //再把修改后的数据写入文件
            read((err,data)=>{
                if(!err){
                    let ary=JSON.parse(data);//将字符床转化成数组
                    console.log(query);
                    ary = ary.filter((item)=>{
                        return item.id != query.id;
                        //item.id 是数字，query.id  是字符串
                    });
                    // fs.writeFile(path,JSON.stringify(ary),'utf8',(err,data)=>{
                    //     //写入成功才算修改成功
                    //     if(!err){
                    //         //obj 中的 errorCode 是 0 ，对于前端就是代表成功状态
                    //         res.end(JSON.stringify(obj));
                    //     }
                    // })
                    write(ary,(err)=>{
                        if(!err){
                            //         //obj 中的 errorCode 是 0 ，对于前端就是代表成功状态
                                res.end(JSON.stringify(obj));
                        }else{
                            obj.errorCode = 1;
                            res.end(JSON.stringify(obj));
                        }
                    })
                }
            });
            break;
        case '/info'://根据id获取id所在项的信息
            read((err,data)=>{
                if(!err){
                    let ary = JSON.parse(data);
                    let option = ary.find((item)=>{
                        return item.id == query.id;
                    });
                    obj.data = option;
                    res.end(JSON.stringify(obj));
                }else{
                    obj.errorCode = 1;
                    res.end(JSON.stringify(obj));
                }
            });
            break;
        case '/edit'://编辑用户信息，根据 id 更新用户信息
            let str='';
            req.on('data',(chunk)=>{
                //接收请求体中的数据时会触发这个回调函数
                console.log(chunk);//buffer 转换成能看的字符串 tostring或者用字符串拼接
                str+=chunk;
            });
            req.on('end',()=>{
                //接收完毕请求体中的数据会触发这个函数
                let item = JSON.parse(str);//从前端传过来的对象
                read((err,data)=>{
                    if(!err){
                        let ary = JSON.parse(data);
                        //用 item 替换 ary 中 id 与 item 相同的那一项
                        ary = ary.map((val)=>{
                            if(val.id == item.id){
                                //若当前项的 id 与 item 的 id 相同，就用 item 替换当前项
                                return item;
                            }else{
                                return val;
                            }
                        });
                        while(ary,(err)=>{
                            if(!err){
                                res.end(JSON.stringify(obj));
                            }else{
                                obj.errorCode = 1;
                                res.end(JSON.stringify(obj));
                            }
                        });
                    }
                });
            });
            res.end('123');
            break;
        case '/add':
            //添加新数据
            let str2 = '';
            req.on('data',(chunk)=>{
                str2 += chunk;
            });
            req.on('end',()=>{
                let item = JSON.parse(str2);
                //为了保证 id 的唯一性，我们要把从文件获取的数据的最后一项的 id +1 赋给新数据的 id
                read((err,data)=>{
                    let ary = JSON.parse(data);
                    item.id = ary[ary.length-1].id*1 + 1 + '';
                    ary.push(item);
                    write(ary,(err)=>{
                        if(!err){
                            res.end(JSON.stringify(obj));
                        }else{
                            obj.errorCode = 1;
                            res.end(JSON.stringify(obj));
                        }
                    })
                })
            })
        default:
            res.statusCode = 404;
            res.statusMessage = 'NO FOUND';
            break;
    }

    
}).listen(8001,()=>{
    console.log("OK");
})