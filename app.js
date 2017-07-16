
const express = require("express");
//引入自己写的包
const router = require("./controller");

let app = express();

app.set("view engin","ejs");
//静态服务
app.use( express.static("./public") );
//首页
app.get("/",router.showIndex);
//相册页
app.get("/:albumname",router.showAlbum);




//设置监听端口
app.listen("3000","192.168.1.100");




