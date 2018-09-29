let path=require('path');
let url=require('url');
//resolve把一个路径或路径片段的序列解析为一个绝对路径
let str=path.resolve('./a.js?a=1&b=2');
console.log("str:",str);
let obj=url.parse(str,true);
console.log("obj:",obj);