window.onload = function(){
    //alert();
}
var slide = document.getElementsByClassName("banner")[0];
var buttons = document.getElementsByClassName("buttons")[0];
var btn = buttons.children;

var n = 0;

function slider(){
    if(n > 2){
        n = 0;
    }
    check();
    c = (n * 100);
    slide.style.marginLeft = ('-' + c + '%');
}

function check(){
    if(n == 1){
        x = n;
        btn[(n-n)].style.opacity="";
        btn[(n+1)].style.opacity="";
    }
    else if(n == 2){
        x = n;
        btn[(n-1)].style.opacity="";
        btn[(n-2)].style.opacity="";
    }
    else{
        x = n;
        btn[(n+1)].style.opacity="";
        btn[(n+2)].style.opacity="";
    }
    btn[n].style.opacity="0.75";
}

check();
setInterval(function(){
    slider();
    n++;
}, 2000);

btn[0].onclick = function(){
    n = 0;
    slider();
}
btn[1].onclick = function(){
    n = 1;
    slider();
}
btn[2].onclick = function(){
    n = 2;
    slider();
}
