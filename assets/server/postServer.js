//加载库中http.js，加载进入赋值给变量http，是一个对象
var http=require("http");
//别人封装的字符串转换对象和解析的方法
var strs=require("querystring");
//req就是客户端向服务器端请求的数据
//res就服务器项客户端发送的数据
//http.createServer创建服务
var server=http.createServer(function (req,res) {
    //客户端请求的数据正在接收中的事件
    //当使用get形式接收时，是使用URL地址获取接收的参数
    //当使用POST形式接收时，使用请求数据接收过来的数据不断累加的结果做处理完成的参数
    var data="";
    req.on("data",function (d) {
        // console.log(d.toString());//如果二进制流数据是字符串类型的二进制流可以通过转换为字符串就能解析
        //使用""+二进制数据流就相当于将这个数据流快速转换为字符串
        data+=d;
    });
    //客户端请求的数据接收完成的后事件
    req.on("end",function () {
        // console.log(data);
        // var obj=strs.parse(data);
        var obj=JSON.parse(data);
        obj.login="ok";
        //写入头部信息，允许传输任意文本信息，并且允许任意域访问
        res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"*"});
        res.write(JSON.stringify(obj));
        res.end();
    })
});
server.listen(3002,"10.9.170.152",function () {
    console.log("服务开启，开始侦听");
});