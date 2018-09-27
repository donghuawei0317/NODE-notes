//当前代码运行在了服务器上node环境，自己的电脑就是一台服务器
//console.log(1)
function sum(){
    let total=null;
    for(var i=0;i<arguments.length;i++){
        let cur = Number(arguments[i]);
        if(!isNaN(cur)){
            total += cur;
        }
    };
    return total;
}
function fn(){
    console.log(1);
}
//模块导出
//方法一：module.exports.sum=sum
//方法二：exports.sum=sum
//module.exports.sum=sum;
//exports.sum=sum;
module.exports={
    sum,
    b:fn,
}