
let express = require('express');
let app = express();
//在项目中，如果需要中间件，一般会放到所有路径的最上面
app.use((req,res,next)=>{
    //req：请求信息
    //res：响应信息
    //next：下一步；用于对请求的拦截，对响应或者请求的处理；只要执行此函数，一定要执行next，再继续向下执行
    next();
});
app.get('/login',(req,res)=>{
    res.send("登陆");
});
app.listen(8080);