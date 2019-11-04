var express = require('express');
//express 基于node封装  是一个方法
//路由中间件
var router =express.Router()
var app = express()
app.use(router)
router.get("/",(req,res)=>{
    res.send("router")
})
//验证码
router.get("/code",(req,res)=>{
    var randomNum  = function(min,max){
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var str ="ABCDJKHHUUGHKKH157895345"
    var result=""
    for(var i=0;i<4;i++){
        result += str[randomNum(0,str.length - 1)]
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.send({
        "success":"请求成功",
        "data":result
    })
})

app.listen(3000)