var express =require("express")
var path = require("path")
var app =express()
var static =path.resolve(__dirname,"public")
app.use(express.static(static))
console.log(static)
// app.use(express.static("public"))
app.get("/",async (req,res)=>{
    res.send("服务搭建成功")
})

app.listen(3000)
