//加载库中http.js，加载进入赋值给变量http，是一个对象
var http=require("http");
//别人封装的字符串转换对象和解析的方法
var strs=require("querystring");
var arr=[];
//req就是客户端向服务器端请求的数据
//res就服务器项客户端发送的数据
//http.createServer创建服务
var server=http.createServer(function (req,res) {
    //客户端请求的数据正在接收中的事件
    req.on("data",function (d) {
        
    });
    //客户端请求的数据接收完成的后事件
    req.on("end",function () {
        var obj=strs.parse(req.url.split("?")[1]);
        obj.login="ok";
        //写入头部信息，允许传输任意文本信息，并且允许任意域访问
        res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"*"});
        res.write(JSON.stringify(obj));
        res.end();
    })
});
server.listen(3001,"10.9.48.162",function () {
    console.log("服务开启，开始侦听");
});