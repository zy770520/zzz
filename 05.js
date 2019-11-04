var express = require('express');
//express 基于node封装  是一个方法
var session = require('express-session');
var app = express();

//使用session中间件
app.use(session({ 
  name: 'safe',
  secret: 'safe', 
  cookie: ('username',{maxAge:90000,httpOnly:true}),
  //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
  resave: true, 
  //强制“未初始化”的会话保存到存储。 
  saveUninitialized: true,  
  
}))

//设置session
app.get('/send', function(req, res) {
   var obj=req.query.username
   req.session.username=obj
   console.log(req.session.username)
     res.send("")
  });

  //获取session
app.get('/', function(req, res) {
    var sess = req.session//用这个属性获取session中保存的数据，而且返回的JSON数据
    if (sess.username) {  
      res.send("欢迎"+sess.username+"回来")
    } else {
     res.send("未保存session")
    }
  })
app.listen(3000);//挂服务器


