/*
fs 是文件管理模块
*/
let fs=require('fs');
// console.log(fs);
const path =__dirname+ '/index.html';
fs.readFile(path,'utf8',(err,data)=>{
    //err 读取数据时出错的错误信息，读取成功时，err 默认是“ null ”
    console.log(err);
    console.log(data);
});
let path2=__dirname+'/1.txt';
let obj={name:'A'};

fs.writeFile(path2,JSON.stringify(obj),'utf8',(err,data)=>{
    console.log(data);
});
fs.writeFileSync(path2,JSON.stringify(obj),'utf8',()=>{
    console.log("OK"); 
});
fs.appendFile(path2,'qwer','utf8',(err,data)=>{
    console.log(data);
})