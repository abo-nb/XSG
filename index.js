var v =true;

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
    }else
    {
        document.getElementById('v').src='img/visibility_FILL0_wght400_GRAD0_opsz48.png';
        v=true
        document.getElementById("qb").style.visibility="visible";

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
