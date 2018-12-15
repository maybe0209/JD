var Method=(function () {
     return {
         getObject:function (url) {
             if(!~url.indexOf("?")) return;//查找url中是否有？，如果没有直接跳出
             url=url.split("?")[1];//如果有？，我们取出？后面的内容重新赋给url
             var obj={};//新建一个对象
             var arr;//新建变量arr
             if(!~url.indexOf("&")){//查找url中是否有&如果没有&做下面的内容
                 if(!~url.indexOf("=")) return;//在查找是否有=，如果没有=，就直接跳出
                 arr=url.split("=");//如果查找到=号，我们用=号分成一个数组，两个元素
                 obj[arr[0]]=isNaN(Number(arr[1])) ? arr[1] : Number(arr[1]);//用=前面的内容作为obj的属性，=后面的内容作为该属性的值
                 return obj;//因为没有&，还有一个值，因此直接将对象返回
             }
             arr=url.split("&");//用&切割为数组，因为上面判断了，这里就有&符
             var arr1;//定义arr1变量
             var bool=false;//初始是false
             for(var i=0;i<arr.length;i++){//循环上面用&切割的数组
                 if(!~arr[i].indexOf("=")) continue;//如果数组中那一个字符中没有=，就跳到下一个循环
                 arr1=arr[i].split("=");//用=将这个字符切割两个元素的数组
                 obj[arr1[0]]=isNaN(Number(arr1[1])) ? arr1[1] : Number(arr1[1]);//将这个字符的=前的值作为属性，=后作为这个属性的值
                 bool=true;//如果给obj中写入一个属性和值，这时候，就让bool为true
             }
             //如果bool是true
             if(bool) return obj;//最后返回这个对象

         },
         createElem:function (type,parent,content,style,eventType,eventCallBack) {
             var elem=document.createElement(type);
             if(parent){
                 parent.appendChild(elem);
             }
             if(type==="input"){
                 elem.value=content;
             }else if(type==="img"){
                 elem.src=content;
             }else{
                 if(content){
                     var text=document.createTextNode(content);
                     elem.appendChild(text);
                 }
             }
             if(style){
                 Method.setStyle(elem,style);
             }
             if(eventType && eventCallBack){
                 elem.addEventListener(eventType,eventCallBack);
             }
             return elem;
         },
         setStyle:function (elem,style) {
             for(var str in style){
                 elem.style[str]=style[str];
             }
         },
         randomColor:function (alpha) {
             var color="rgba(";
             for(var i=0;i<3;i++){
                 color+=Math.floor(Math.random()*256)+",";
             }
             if(!isNaN(alpha) && (alpha || alpha===0)){
                 if(alpha>1) alpha=1;
                 return color+alpha+")";
             }
             return color+Number(Math.random().toFixed(1))+")";
         },
         random:function (min,max) {
             return Math.floor(Math.random()*(max-min)+min);
         },
         getDistance:function (point1,point2) {
             return Math.sqrt(Math.pow(point2.x-point1.x,2)+Math.pow(point2.y-point1.y,2));
         },
         tweenTo:function (elem,begin,end,time,easing) {
             if(!begin){
                 begin={left:elem.offsetLeft,top:elem.offsetTop};
             }
             begin.elem=elem;
             var tween=new TWEEN.Tween(begin);
             tween.onUpdate(Method.tweenUpdate);
             // tween.onComplete(Method.tweenComplete);
             if(easing){
                 tween.easing(easing);
             }
             if(!time) time=2000;
             end.elem=elem;
             tween.to(end,time);
             tween.start();
             return tween;
         },
         tweenUpdate:function () {
             for(var str in this){
                 if(str==="elem"){
                     continue;
                 }
                 this.elem.style[str]=this[str]+"px";
             }
         },
         loadImg:function (arr,callBack,type) {
             var img=new Image();
             img.arr=arr;
             img.list=[];
             img.num=0;
             img.type=type;
             img.callBack=callBack;
             img.addEventListener("load",Method.loadHandler);
             img.src=arr[img.num];
         },
         LOAD_IMAGE_FINISH:"load_image_finish",
         loadHandler:function (e) {
         //    this--->img
             this.list.push(this.cloneNode(false));
             this.num++;
             if(this.num===this.arr.length){
                 if(this.callBack){
                     this.callBack(this.list,this.type);
                     return;
                 }
                 var evt=new Event(Method.LOAD_IMAGE_FINISH);
                 evt.list=this.list;
                 evt.types=this.type;
                 document.dispatchEvent(evt);
                 return;
             }
             this.src=this.arr[this.num];
         }
     }
})();