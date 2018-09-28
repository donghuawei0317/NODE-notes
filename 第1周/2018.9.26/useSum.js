let a = require('./sum.js');//“ ./ ”必须写，如果文件的后缀名是“ .js/.json ”可以不写后缀名
//“ require ”不在全局对象中。require导入的模块会将模块中的代码从上到下执行
console.log(a);
//console.log(a.sum(1,2,3));
//console.log(window);//在node环境中没有“ window ”，全局对象是“ global ”
//在每个自定义模块的最外层，会默认添加一个闭包函数
~function(module,exports,require,__dirname,__filename){
    /*
    __dirname：当前文件的父级目录的绝对路径
    __filename：当前文件的绝对路径
    */
}();
console.log("__dirname:",__dirname);
console.log('__filename:',__filename);
/*
导入模块：
    1、require 导入一个模块，如果是同级的自定义模块，必须加上“ ./ ”
    2、如果文件后缀名是“ .js/.json ”，可以省略
    3、require这个方法不在全局对象global中
    4、require导入的模块，会将模块中的代码自上而下执行
module.exports/exports：导出：
    1、把当前模块中的北荣进行暴露，使其他模块可以使用
    2、module.exports 可以利用其他空间地址进行覆盖；exports不能用其他空间地址进行覆盖，只能给其新增属性
    3、module.exports 不仅支持空间地址，还支持基本数据类型
    4、module 下有一个属性exports，这个属性是将当前模块的属性和方法导出
*/