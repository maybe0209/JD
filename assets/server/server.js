var http=require("http");
// var cors=require("cors")
// app.use(cors()) //解决跨域
   //存储数据
var shoppingList=[ { user: '123123', passwrod: '123123' }
];
var server=http.createServer(function (req,res) {
    var data="";
    req.on("data",function (d) {
        data+=d;
    });
    req.on("end",function () {
        var resObj={error:null};
        var reqObj=JSON.parse(decodeURIComponent(data));
        console.log("接受",reqObj)

        resObj.type=reqObj.type;
        switch (reqObj.type){
            case 0:    //注册
                resObj=addUser(reqObj.message);
                break;
            case 2:    //登录
                resObj=dengLu(reqObj.message);
                break;
        }
        res.writeHead(200,{"Content-Type":"text/html","Access-Control-Allow-Origin":"*"});
        res.write(encodeURIComponent(JSON.stringify(resObj)));
        res.end();
    })
});
server.listen(3111,"10.9.48.246",function () {
    console.log("开启服务")
});


function addUser(message) {
    var bool=false;
    for(var i=0;i<shoppingList.length;i++){
        if (shoppingList[i].user===message.user){
            bool=true;
        }
    }
    if (!bool){
        shoppingList.push(message);
        return {
            type:0,
            error:null
        };
    }else {
        console.log("注册",shoppingList)
        return {
            type:1,
            error:null
        };
    }


}

function dengLu(message) {
   var bool=false;
    for(var i=0;i<shoppingList.length;i++){
        if (message.user===shoppingList[i].user && message.passwrod===shoppingList[i].passwrod) {
            bool=true;
            break;
        }
    }
    console.log(bool)
    if(bool){
        return {
            type: 3,
            message:{user:message.user},
            error: null
        }
    }else{
        return {
            type:2,
            error:null
        }
    }

        // shoppingList.map(function (t) {
      //     if(t.user===message.user && t.passwrod===message.passwrod){
        //
        //     }else {
        //         return {
        //             type:2,
        //             user:t.user,
        //             error:null
        //         }
        //     }
        // })
}