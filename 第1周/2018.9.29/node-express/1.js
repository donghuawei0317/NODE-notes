let express=require('express');
let app=express();
app.get('/listen',(req,res)=>{
    res.send('hello');
});
app.post('./listen2',(req,res)=>{
    res.send('post');
});
app.all('/listen3',(req,res)=>{
    res.send('all');
});
app.listen(8000,()=>{
    console.log('OK');
});