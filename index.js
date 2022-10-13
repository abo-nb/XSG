var v =true;
var gdopen = false;

document.onkeydown=function(e){    //对整个页面监听  
    var keyNum=window.event ? e.keyCode :e.which;       //获取被按下的键值  
    //判断如果用户按下了回车键（keycody=13）  
    if(keyNum==13){  
        var url = 'https://www.google.com/search?q=' + document.getElementById("sch").value;
        
        window.location.replace(url)
    }  
}

function set(){
   
    if(v){
        document.getElementById('v').src='img/visibility_off_FILL0_wght400_GRAD0_opsz48.png';
        v=false
        document.getElementById("qb").style.visibility="hidden";
        document.getElementById("sch").style.visibility="hidden";
    }else
    {
        document.getElementById('v').src='img/visibility_FILL0_wght400_GRAD0_opsz48.png';
        v=true
        document.getElementById("qb").style.visibility="visible";
        document.getElementById("sch").style.visibility="visible";

    }
}

function r18(){
   
alert("？想瑟瑟？");
window.location.replace("https://youtu.be/dQw4w9WgXcQ");
}

function v(){
    alert("123");

}

var nowTime ;
function play(){
var time = new Date();
nowTime = time.getHours()+":"+time.getMinutes();
document.getElementById("time").innerHTML = nowTime;
}
setInterval(play,1000);//每一秒执行一次

//二级菜单
window.oncontextmenu = function(e){
    //取消默认的浏览器自带右键
    e.preventDefault();
if(gdopen){
    document.getElementById("gd").className = "cy";
    document.getElementById("sch").className = "sch";
    document.getElementById("sch").style.visibility="visible";
    document.getElementById("rjcd").className = "rjcd";
    gdopen = false;
}else
{
    document.getElementById("gd").className = "cyon";
    document.getElementById("sch").className = "schoff";
    document.getElementById("sch").style.visibility="hidden";
    document.getElementById("rjcd").className = "rjcdon";


    gdopen = true;
}


    
}

function setpl(){
    // document.getElementById("setp").style.visibility="visible";
}

function load(){
    

    const Http = new XMLHttpRequest();
    const url='https://api.uixsj.cn/hitokoto/get';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    document.getElementById("yy").textContent = Http.responseText;

    }
}

function resp(){
    

    const Http = new XMLHttpRequest();
    const url='https://api.uixsj.cn/hitokoto/get';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    document.getElementById("yy").textContent = Http.responseText;

    }
}