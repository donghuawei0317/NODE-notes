/*
· npm 是全球最大的开源模块管理系统
·在npm这个系统中包都是第三方模块；可以通过npm命令去下载对应的模块：
    - 第一次使用要先执行 npm init -y 【进行初始化，产生 package.json 文件】
    - npm install(可简写为i) 模块名 -g【将相应模块下载到全局中（电脑C盘）】
    - npm i 模块名【安装当前目录下的生产依赖中】
    - npm i 模块名 --save-dev【安装当前目录下的开发依赖】
    - npm i【安装所有依赖】
·使用yarn下载第三方模块：
    - yarn add 模块名
    - yarn 【安装所有依赖】
    - yarn remove 模块名【移除相应模块】
·使用nrm：
    - npm i nrm -g
    - nrm ls【查看当前可用的源】
    - nrm test【测试各个源的速度】
    - nrm use 源名称【使用对应的源】
*/