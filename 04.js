var express = require('express');
//express 基于node封装  是一个方法
var art = require('express-art-template');
var app = express();
app.engine("html",art)
app.get('/', function(req, res) {
    var list =["tom","jack","rose"]
    res.render("home.html",{list:list}) 
});

app.listen(3000);//挂服务器