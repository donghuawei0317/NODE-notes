//node的核心模块，也叫内置模块，跟着node一起下载下来的模块都是内置模块

//后端：增 删 改 查
let fs = require("fs");
fs.readFile("./custom.json", "utf8", function (err, data) {
    console.log(err);
    console.log("readFile",data);
    console.log(typeof data);
});
let test = fs.readFileSync('./custom.json', "utf8");
console.log("readFileSync",test);
/*
 fs.readFile(path ,option ,callback);
 - path：文件路径
 - option：编码格式
 - callpack：回调函数。参数有两个：
 + 第一个参数是读取文件出错时的错误信息，没有错时，默认是null
 + 第二个参数是读取出来的文件的数据
 1、readFile：是一个异步读取文件的方法
 2、readFileSync（path,option）
 */
fs.writeFile('./custom_1.json',123,'utf8',function(err){
    console.log("OK");
    console.log(err);
});
fs.readFile('./custom.json','utf8',function(err,data){
    let ary=JSON.parse(data);
    ary.push({"name":"内容"});
    data=JSON.stringify(ary);
    fs.writeFile('./custom.json',data,'utf8',()=>{
        console.log("OK");
    })
});
let test_1=fs.writeFileSync('./custom_2.json','456','utf8');
console.log("test_1",test_1);