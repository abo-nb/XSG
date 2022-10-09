document.onkeydown=function(e){    //对整个页面监听  
    var keyNum=window.event ? e.keyCode :e.which;       //获取被按下的键值  
    //判断如果用户按下了回车键（keycody=13）  
    if(keyNum==13){  
        var url = 'https://www.google.com/search?q=' + document.getElementById("sch").value;
        
        window.location.replace(url)
    }  
}