var $pic = $("#wrap ul.pic li");
var $lib = $("#wrap ul.lib li");
var $next = $("#wrap ul.btn li.next");
var $prev = $("#wrap ul.btn li.prev");
var index = 0;
var length = $pic.length;
var autoBool=true;
var time=180;

    $("#wrap").mouseenter(function () {
        autoBool=false;
    });
    $("#wrap").mouseleave(function () {
        autoBool=true;
    });

    function autoPlay() {
        if (!autoBool) return;
        time--;
        if (time === 0) {
            time = 180;
            $next.click()
        }
    }
    var num=0,max=5,intervalId=null;
    function incrementNumber() {
        num++;
        if (num===num){
            clearInterval(intervalId);
            play();
        }
    }
    intervalId=setInterval(incrementNumber,2);

    $pic.eq(0).fadeIn().siblings().fadeOut()
    $next.click(function(){
        index++;
        index%=length;
        play();
    });
    $prev.click(function(){
        index--;
        index = index<0 ? length-1:index;
        play();
    });
    function play(){
        $pic.eq(index).fadeIn().siblings().fadeOut();
        $lib.eq(index).addClass("on").siblings().removeClass("on");
    }
$lib.mouseenter(function(){
    index = $(this).index();
    $lib.eq(index).addClass("on").siblings().removeClass();
    $pic.eq(index).fadeIn().siblings().fadeOut();
});

$(".promotion").mouseenter(function () {
    $(".promotion").parent().parent().children(".animation-div").children(".sliding-block").css({
    "position":"absolute"
    }).animate({
        left:"0px"
    })
    $(".sliding-block-2").css("display","none")
    $(".sliding-block-1").css("display","block")
});
$(".announcement").mouseenter(function () {
    $(".promotion").parent().parent().children(".animation-div").children(".sliding-block").css({
        "position":"absolute"
    }).animate({
        left:"54px"
    })
    $(".sliding-block-1").css("display","none")
    $(".sliding-block-2").css("display","block")
});
// 下面是触摸变样式
$(".telephone-charge div a").mouseenter(function () {
    $(this).parent().siblings().children().removeClass()
    $(this).addClass("red")
    if ($(this).text()==="话费"){
        $(this).parent().parent().parent().children("div.telephone-charge-div2").css("display","none")
        $(this).parent().parent().parent().children("div.telephone-charge-div3").css("display","none")
        $(this).parent().parent().parent().children("div.telephone-charge-div4").css("display","none")
        $(this).parent().parent().parent().children("div.telephone-charge-div1").css("display","block")
    }
    if ($(this).text()==="机票"){
        $(this).parent().parent().parent().children("div.telephone-charge-div1").css("display","none")
        $(this).parent().parent().parent().children("div.telephone-charge-div3").css("display","none")
        $(this).parent().parent().parent().children("div.telephone-charge-div4").css("display","none")
        $(this).parent().parent().parent().children("div.telephone-charge-div2").css("display","block")
    }
    if ($(this).text()==="酒店"){
        $(this).parent().parent().parent().children("div.telephone-charge-div1").css("display","none")
        $(this).parent().parent().parent().children("div.telephone-charge-div2").css("display","none")
        $(this).parent().parent().parent().children("div.telephone-charge-div4").css("display","none")
        $(this).parent().parent().parent().children("div.telephone-charge-div3").css("display","block")
    }
    if ($(this).text()==="游戏"){
        $(this).parent().parent().parent().children("div.telephone-charge-div1").css("display","none")
        $(this).parent().parent().parent().children("div.telephone-charge-div3").css("display","none")
        $(this).parent().parent().parent().children("div.telephone-charge-div2").css("display","none")
        $(this).parent().parent().parent().children("div.telephone-charge-div4").css("display","block")
    }

});
$(".telephone-charge-div1 ul li a").mouseenter(function () {
    $(this).parent().siblings().children().removeClass()
    $(this).addClass("red")
});
// 入住时间和离店时间
var date=new Date();
var year=date.getYear();
var month=date.getMonth();
var day=date.getDate();
$("#enter").attr("placeholder",(year+1900)+"-"+(month+1)+"-"+day)
$("#leave").attr("placeholder",(year+1900)+"-"+(month+1)+"-"+(day+1))
//搜索框的变动值
var inputValueArr=["奶瓶消毒器","逛手机好店","联想一体机","黑五很时尚","满400减50","建材暖冬季","性感内衣","特价笔记本","程序员眼镜","固态硬盘","电脑主机i7","雷神笔记本","小米净化器","九阳榨汁机","笔记本内存条","服饰狂欢五折","电钢琴","苹果耳机","智能电器","小天才点读机","防水手表"];
resetTime(inputValueArr);
function resetTime(arr){
    var num1=Math.floor(Math.random()*arr.length);
    $("#frame").attr("value",arr[num1]);
    var num2=Math.floor(Math.random()*arr.length);
    $(".cow").text(arr[num2]);
}
var timer=setInterval(function(){resetTime(inputValueArr)},2000);
$("#frame,.cow").mouseenter(function(){
    clearInterval(timer);//关闭
}).mouseleave(function(){
    timer=setInterval(function(){resetTime(inputValueArr)},2000) ;//重新启动
});
//倒计时
function overTime(time) {
    var timer = null;
    var t = time;
    var m = 0;
    var s = 0;
    var h = 0;
    h = Math.floor(t/3600);
    m = Math.floor(t / 60 % 60);
    m < 10 && (m = '0' + m);
    h < 10 && (h = '0' + h);
    s = Math.floor(t % 60);

    function countDown() {
        s--;
        s < 10 && (s = '0' + s);
        if (s.length >= 3) {
            s = 59;
            m = "0" + (Number(m) - 1);
        }
        if (m.length >= 3) {
            m = 59;
            h = "0" + (Number(h) - 1);
        }
        if (h.length >= 3) {
            m = '00';
            s = '00';
            h = '00';
            clearInterval(timer);
        }
        // console.log(m + "分钟" + s + "秒");
        $(".sk-cd-1").text(h)
        $(".sk-cd-2").text(m)
        $(".sk-cd-3").text(s)
    }
    timer = setInterval(countDown, 1000);
}
// 还没逛够
// $(function () {
//     $.ajax({
//         type:"post",
//         dataType:"json",
//         url:"../json/tsconfig.json",
//         success:function (result) {
//
//             $.each(result,function (index,obj) {
//                 $("<img/>").attr("src",obj["icon"]).appendTo(function () {
//                     $("<div></div>").css({
//                         "width":"230px",
//                         "height":"305px",
//                         "margin":"0 5px 10px 5px",
//                         "float":"left"
//                     }).addClass("tuWen")
//                 });
//
//             })
//
//         }
//     })
//     $.each()
// });
// createImg()
// function createImg() {
//     $.getJSON("json/tsconfig.json",function(data){
//         var $div = $(".more_inner");
//         var strHtml = "";
//         $div.empty();
//         $.each(data,function(infoIndex,arr){
//             console.log(arr[0].icon)
//             for(var i=0;i<arr.length;i++){
//                 strHtml+="<div style='width: 230px;height: 305px;margin: 0 5px 10px 5px;float: left;'><img src='"+arr[i].icon+"'></div>";
//             }
//             //strHtml +=info["ElementId"];
//         });
//         $div.html(strHtml);
//     })
// }
createDiv();
function createDiv() {
    $.getJSON("./assets/json/tsconfig.json",function (res) {
        $(res).each(function (index,elem) {
            // console.log(index)
            // console.log(elem["icon"])
            // if(!){
            // console.log(/^*[jpg]$/.test(elem["icon"]))
            $("<div></div>").css({
                            "width":"230px",
                            "height":"305px",
                            "background":"#fff"
                        }).appendTo($(".more_inner")).addClass("tuWen").append($("<img/>").attr("src",elem["icon"]).appendTo($("<div></div>"))).append($("<p></p>").attr("title",elem["name"]).text(elem["name"]).css({
                "width":"198px",
                "height":"36px",
                "display":"block",
                "margin":"20px auto",
                "overflow":"hidden"
            })).append($("<span></span>").text(elem["price"]).css({
                "color":"red",
                "text-align":"center",
                "display":"block",
            })).wrap($("<a></a>").css({
                "width":"230px",
                "height":"305px",
                "position":"relative",
                "display":"block",
                "margin":"0 4px 10px 4px",
                "color":"#333",
                "float":"left"
            }).attr("href","assets/html/particulars.html?"+elem["icon"]+"?'"+encodeURIComponent(elem["name"])+"'?"+encodeURIComponent(elem["price"]))).append($("<div></div>").addClass("black").text("找相似").css({
                "position":"absolute",
                "width":"60px",
                "height":"60px",
                "border-radius":"30px",
                "background":"#333",
                "text-align":"center",
                "line-height":"60px",
                "color":"#fff",
                "left":"50%",
                "margin-left":"-30px",
                "display":"none",
                "top":"200px"
            })).mouseenter(function () {
                $(this).children("div").css("display","block")
                $(this).children("span").css("color","#f9b6b6")
                $(this).children("p").css("color","#a4a1a1")
            }).mouseleave(function () {
                $(this).children("div").css("display","none")
                $(this).children("span").css("color","red")
                $(this).children("p").css("color","black")
            });
        // }

            // $(".more_inner").append($("<img/>"))
            // .appendTo(function () {
            //         $("<div></div>").css({
            //             "width":"230px",
            //             "height":"305px",
            //             "margin":"0 5px 10px 5px",
            //             "float":"left"
            //         }).addClass("tuWen")
        })
    })
}
// 模态窗



//botn是带双引号的
function popupDiv(botn) {
    $(botn).on("click",function(){    //模态窗口的点击
        var appends = '<div class="pop-box" style="overflow: hidden;">'+

            '<div style="width: 346px;height: 40px;line-height: 40px;text-align: center;background: #fff8f0;color: #999999">京东不会以任何理由要求您转账汇款，谨防诈骗。</div>'+

            '<div style="width: 346px;height: 54px;border-bottom: 1px solid #f4f4f4;">' +
            '<div class="saoma" style=" cursor: pointer; width: 171px;height: 54px;border-right:1px solid #f4f4f4;text-align: center;line-height: 54px;font-size: 18px;float: left;color: #e4393c;font-weight: bold">扫码登录</div>' +
            '<div class="yonghu" style="cursor:pointer; width: 171px;height: 54px;text-align: center;line-height: 54px;font-size: 18px;color: #322e28;float: left">用户登录</div>' +
            '</div>'+

            '<div class="remove-div1" style="display: block">'+
            '<div style="width: 346px;height: 182px;"><img style="padding: 8px 12px;border: 1px solid #f4f4f4;margin-top: 20px" src="assets/img/ma.jpg"/></div>'+
            '<div style="width: 346px;height: 32px;line-height: 32px;text-align: center;"><span>打开</span><span style="color: #e4393c;font-size: 16px">手机京东</span><span style="margin-left: 12px">扫描二维码</span></div>'+
            '<div style="width: 346px;height: 42px;padding-top:10px;line-height: 42px;text-align: center;">' +
            '<img src="assets/img/s1.jpg" style="display: inline-block;vertical-align:middle;"/><span style="color: #999999;margin: 0 16px 0 6px;">免输入</span>' +
            '<img src="assets/img/s2.jpg" style="display: inline-block;vertical-align:middle;"/><span style="color: #999999;margin: 0 16px 0 6px;">更快</span>' +
            '<img src="assets/img/s3.jpg" style="display: inline-block;vertical-align:middle;"/><span style="color: #999999;margin: 0 0 0 6px;">更安全</span></div>'+
            '</div>'+

            '<div class="remove-div2" style="display: none;height: 253px">'+
            '<div style="width: 306px;height: 40px;margin:33px 0 0 20px;">'+
            '<img src="assets/img/ren.jpg" style="position:relative;float:left;border-left: 1px solid #bdbdbd;border-top: 1px solid #bdbdbd;border-bottom: 1px solid #bdbdbd;"/>' +
            '<input class="user1" type="text" style="width:262px;height:36px;float:left;" placeholder="邮箱/用户名/已验证手机"><p class="user-yanzhen11" style="position: absolute;right: -8px;top: 42px;color:red;width: 120px;height: 12px;font-size: 10px;"></p></div>'+
            '<div style="width: 306px;height: 40px;margin:20px 0 0 20px;">'+
            '<img src="assets/img/renn.jpg" style="position:relative;float:left;border-left: 1px solid #bdbdbd;border-top: 1px solid #bdbdbd;border-bottom: 1px solid #bdbdbd;"/>' +
            '<input class="user11" type="password" style="width:262px;height:36px;float:left;" placeholder="密码"><p class="user-yanzhen22" style="position: absolute;right: -8px;top: 42px;color:red;width: 120px;height: 12px;font-size: 10px;"></p></div>'+
            '<div style="margin-top:23px;float:right;margin-right:22px ;cursor: pointer;">忘记密码</div>'+
            '<div class="register-user" style="width: 302px;height: 32px;border: 1px solid #ef8b8d;background: #e4393c;color: #fff;text-align: center;line-height:32px;cursor: pointer;font-size: 20px;float: right;margin-right: 21px;margin-top:24px;">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</div>'+
            '</div>'+

            '<div style="width: 346px;height: 50px;border-top: 1px solid #f4f4f4;background: #fcfcfc;line-height: 50px;text-align: center;">' +
            '<img src="assets/img/s4.jpg" style="display: inline-block;vertical-align:middle;"/><span style="color: #999999;padding: 0 7px 0 6px;border-right:1px solid #d5ccd5; ">QQ</span>' +
            '<img src="assets/img/s5.jpg" style="display: inline-block;vertical-align:middle;padding-left: 7px;"/><span style="color: #999999;margin: 0 114px 0 6px;">微信</span>' +
            '<img src="assets/img/s6.jpg" style="display: inline-block;vertical-align:middle;"/><span style="color: #999999;margin: 0 6px 0 20px;">更安全</span></div>'+

            '</div>';
        $("body").append(appends);// 放入body

        $('.yonghu').click(function () {
            $('.remove-div1').css("display", "none");
            $('.remove-div2').css("display", "block");
            $(this).css({
                color: "#e4393c",
                "font-weight": "bold"
            });
            $('.saoma').css({
                color: "#000",
                "font-weight": "none"
            })
        });
        $('.saoma').click(function () {
                $('.remove-div2').css("display","none");
                $('.remove-div1').css("display","block");
                $(this).css({
                    color:"#e4393c",
                    "font-weight": "bold"
                });
            $('.yonghu').css({
                color: "#000",
                "font-weight": "none"
            })
        }) ;
        var windowWidth = $(window).width();// 计算机屏幕高度
        var windowHeight = $(window).height();// 计算机屏幕长度

        $("<div id='bg'></div>").width(windowWidth * 0.99)// // 添加并显示遮罩层
            .height(windowHeight * 0.99).appendTo("body").click(function () {
            hideDiv($(this))
            hideDiv($(".pop-box"))
        });
        // 显示弹出的DIV
        $(".pop-box").css({
            "width":"346px",
            "height":"428px",
            "background":"#fff",
            "top":windowHeight-windowHeight*0.9+"px",
            "position" : "fixed" ,
            "display" : "block",
            "left":"0",
            "right":"0",
            "margin":"auto"
        })

        $('.user1').blur(function () {     //失焦
            var user = $(this).val();
            if (!/[a-zA-Z0-9\u0391-\uFFE5]{4,10}/.test(user)) {
                $('.user-yanzhen11').text("用户名格式不正确")
                $(this).attr("bool", "false")
                return
            } else {
                $('.user-yanzhen11').text("")
                $(this).attr("bool", "true")
                return
            }

        })

        $('.user11').blur(function () {
            var password = $(this).val();
            if (!/[a-zA-Z0-9]{6,16}/.test(password)) {
                $('.user-yanzhen22').text("密码格式不正确")
                $(this).attr("bool", "false")
                return false
            } else {
                $('.user-yanzhen22').text("")
                $(this).attr("bool", "true")
                return
            }
        })

        $(".register-user").click(function () {
            if ($('.user1').attr("bool") == "true" && $('.user11').attr("bool") == "true") {
                //   登录
                ajax({
                    type: 2,
                    message: {
                        user: $('.user1').val(),
                        passwrod: $('.user11').val()
                    }
                });
            }
        })
    });
}

// ---------------------------------注册
function register(zhuCe){
    $(zhuCe).on("click",function() {    //模态窗口的点击
        var appends = '<div class="zhu-box" style="overflow: hidden;">' +

            '<div style="width: 100%;height: 80px;text-align: center;background: #fff;">' +
            '<img class="fanhui" src="assets/img/logojd.jpg" style="float: left;margin: 16px 0px 0px 117px;"/><div style="font-size: 24px;float: left;margin: 26px 0px 0px 24px;">欢迎注册</div>' +
            '<div style="float: right;margin-right: 151px;margin-top: 55px;color: #999999;font-size: 12px;cursor: pointer">注册页面,调查问卷</div></div>' +

            '<div style="width: 100%;height: 38px;background: #fff8f0;color: #999999;line-height: 38px;text-align: center;">依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版 <span style="color: #000">《京东隐私政策》</span>已上线，将更有利于保护您的个人隐私。</div>' +

            '<div style="width: 346px;height: 402px;margin-top: 10px;margin-left: 810px;background: #fff;border-radius: 12px;padding-top: 24px;">' +
            '<div style="margin: 24px auto 0;width: 306px;height: 40px;position: relative;"><img src="assets/img/ren.jpg" style="float:left;border-left: 1px solid #bdbdbd;border-top: 1px solid #bdbdbd;border-bottom: 1px solid #bdbdbd;"/>' +
            '<input class="user" type="text" style="width:262px;height:36px;float:left;" placeholder="请填写用户名(4-9位数字、字母或汉字)"><p class="user-yanzhen" style="position: absolute;right: -8px;top: 42px;color:red;width: 120px;height: 12px;font-size: 10px;"></p></div>' +
            '<div style="width: 306px;height: 40px;margin:26px 0 0 20px;position: relative;">' +
            '<img src="assets/img/renn.jpg" style="float:left;border-left: 1px solid #bdbdbd;border-top: 1px solid #bdbdbd;border-bottom: 1px solid #bdbdbd;"/>' +
            '<input class="user1" type="password" style="width:262px;height:36px;float:left;" placeholder="请填写密码(6-16位数字和字母)"><p class="user-yanzhen1" style="position: absolute;right: -8px;top: 42px;color:red;width: 120px;height: 12px;font-size: 10px;"></p></div>' +
            '<div style="width: 306px;height: 40px;margin:26px 0 0 20px;position: relative;">' +
            '<img src="assets/img/renn.jpg" style="float:left;border-left: 1px solid #bdbdbd;border-top: 1px solid #bdbdbd;border-bottom: 1px solid #bdbdbd;"/>' +
            '<input class="user2" type="password" style="width:262px;height:36px;float:left;" placeholder="请重新填写密码"><p class="user-yanzhen2" style="position: absolute;right: -8px;top: 42px;color:red;width: 120px;height: 12px;font-size: 10px;"></p></div>' +
            '<div class="zhuce-bn" style="width: 302px;height: 36px;border: 1px solid #ef8b8d;background: #e4393c;color: #fff;text-align: center;line-height:32px;cursor: pointer;font-size: 20px;float: right;margin-right: 21px;margin-top:44px;">注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</div>' +
            '<a href="#" style="color: #333333;display: block;float: right;margin-top: 66px;margin-right: 22px" class="fanhui">我已注册,返回登录</a>' +
            '</div>' +

            '<div style="height: 64px;width: 100%;background: #fff;position: absolute;bottom: 0;">' +
            '<div></div>' +
            '<div class="bottom-ul"><ul><li>关于我们' +
            '</li><li>联系我们</li><li>人才招聘</li><li>商家入驻</li><li>广告服务</li><li>手机京东</li><li>友情链接</li><li>销售联盟</li><li>京东社区</li><li>京东公益</li><li>English Site</li></ul>' +
            '<div class="banquan">Copyright © 2004-2018  京东JD.com 版权所有</div></div>';
        $("body").append(appends);// 放入body

        $('.fanhui').click(function () {
            hideDiv($('.zhu-box'))
        })

        $('.user').blur(function () {     //失焦
            var user = $(this).val();
            if (!/[a-zA-Z0-9\u0391-\uFFE5]{4,10}/.test(user)) {
                $('.user-yanzhen').text("用户名格式不正确")
                $(this).attr("bool", "false")
                return
            } else {
                $('.user-yanzhen').text("")
                $(this).attr("bool", "true")
                return
            }
        })

        $('.user').blur(function () {
            var password = $(this).val();
            if (!/[a-zA-Z0-9]{6,16}/.test(password)) {
                $('.user-yanzhen1').text("密码格式不正确")
                $(this).attr("bool", "false")
                return false
            } else {
                $('.user-yanzhen1').text("")
                $(this).attr("bool", "true")
                return
            }
        })

        $('.user2').blur(function () {
            var password1 = $(this).val();
            var password2 = $(".user1").val();
            if (password1 != password2) {
                $('.user-yanzhen2').text("与上次密码不符合")
                $(this).attr("bool", "false")
                return
            } else {
                $('.user-yanzhen2').text("")
                $(this).attr("bool", "true")
                return
            }
        })

        $('.zhuce-bn').click(function () {  //点击注册注册注册注册ajax验证
            if ($('.user').attr("bool") == "true" && $('.user2').attr("bool") == "true" && $('.user2').attr("bool") == "true") {
                //验证正确时
                ajax({
                    type: 0,
                    message: {
                        user: $('.user').val(),
                        passwrod: $('.user1').val()
                    }
                });
            }
        });
    })
}

//   -------------------  ajax
function ajax(data) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", readyStateHandler);
    xhr.open("POST","http://10.9.48.246:3111");
    xhr.send(encodeURIComponent(JSON.stringify(data)));
}

function readyStateHandler(e) {
    if (this.readyState === 4 && this.status === 200) {
        var obj = JSON.parse(decodeURIComponent(this.response));
        console.log(obj)
        if (obj.error) {
            console.log(obj.error);
            return;
        }
        switch (obj.type) {
            case 0:
                hideDiv($('.zhu-box'))
                alert("注册成功")
                break;
            case 1:
                $('.user-yanzhen').text("用户名已存在!");
                // $('.user-yanzhen').text("可以注册");
                break;
            case 2:
                alert("登录失败,重新登录!")
                break;
            case 3:
                alert("登录成功")
                hideDiv($("#bg"))
                hideDiv($(".pop-box"))
                $('.register-jd-id').text("用户名:"+obj.message.user).css("color","red");
                break;
        }
    }
}

/*隐藏弹出DIV*/
function hideDiv(div) {
    // $("#bg").remove();
    div.remove()
}






