window.onload = function () {
    var objDemo = document.getElementById("demo");
    var objSmallBox = document.getElementById("small-box");
    var objMark = document.getElementById("mark");
    var objFloatBox = document.getElementById("float-box");
    var objBigBox = document.getElementById("big-box");
    var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];
    objMark.onmouseover = function () {
        objFloatBox.style.display = "block"
        objBigBox.style.display = "block"
    }

    objMark.onmouseout = function () {
        objFloatBox.style.display = "none"
        objBigBox.style.display = "none"
    }

    objMark.onmousemove = function (ev) {

        var _event = ev || window.event;  //兼容多个浏览器的event参数模式
        var left = _event.pageX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
        var top = _event.pageY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;

        //设置边界处理，防止移出小图片
        if (left < 0) {
            left = 0;
        } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
            left = objMark.offsetWidth - objFloatBox.offsetWidth;
        }

        if (top < 0) {
            top = 0;
        } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
            top = objMark.offsetHeight - objFloatBox.offsetHeight;

        }

        objFloatBox.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
        objFloatBox.style.top = top + "px";

        //求其比值
        var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
        var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);

        //方向相反，小图片鼠标移动方向与大图片相反，故而是负值
        objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
        objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
    }
}
// 获取location
var loc=window.location.href;
var res=loc.split("?")[1];
res=res.replace("assets","..");
var name=loc.split("?")[2];
var price=loc.split("?")[3];
$(".magnify").attr("src",res);

$(".sku-name").text(decodeURIComponent(name));
$(".item-hide a").text(decodeURIComponent(name));
$("#price").text(decodeURIComponent(price));
$("#price-jia").text(parseInt(decodeURIComponent(price).split("￥")[1])+Math.floor(parseInt(decodeURIComponent(price).split("￥")[1])/2)+".00]")
$(".jianjia").text(decodeURIComponent(price));
$(".yuanjia").text("￥"+(parseInt(decodeURIComponent(price).split("￥")[1])+Math.floor(parseInt(decodeURIComponent(price).split("￥")[1])/3)+".00"))


// 加减
$("#jian").click(function () {
   $("#iput-jia-jian").val(parseInt($("#iput-jia-jian").val())-1)
    if($("#iput-jia-jian").val()>0) return
        $("#iput-jia-jian").val("1")
})
$("#jia").click(function () {
    $("#iput-jia-jian").val(parseInt($("#iput-jia-jian").val())+1)
})