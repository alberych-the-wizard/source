var header = document.getElementsByClassName('menu')[0];
var mobile_btn = document.getElementsByClassName('mobile_btn_menu')[0];
function scroll_to(){
    var home, about, project, contact;
    home = document.querySelector("#home").offsetTop;
    about = document.querySelector("#about").offsetTop;
    project = document.querySelector("#project").offsetTop;
    contact = document.querySelector("#contact").offsetTop;

    if(window.pageYOffset >= about){
        //alert(window.pageYOffset + ' | ' + about);
        header.classList.add('recolor');
    }
    else{
        header.classList.remove('recolor');
    }
}
let i = 0;
function show_mobile_menu(){
    i++;
    if(i == 1){
        mobile_btn.classList.add('actived');
        document.querySelector(".mobile").style.left=0;
    }
    else if(i > 1){
        mobile_btn.classList.remove('actived');
        document.querySelector(".mobile").style.left= '-100%';
        i=0;
    }
}

mobile_btn.onclick = function(){
    show_mobile_menu();
}


window.onscroll = function(){
    scroll_to();
}

let play_video = document.getElementById('myVideo');

window.onload = function(){
    play_video.autoplay = true;
    play_video.loop = true;
    play_video.load();
}

/*var player_btn = document.querySelector(".player_btn");
let change_player_text = document.querySelector(".player_text");
player_btn.onmouseover = function(){
    change_player_text.children[0].style.marginTop='-40px';
}

player_btn.onmouseout = function(){
    change_player_text.children[0].style.marginTop='inherit';
}*/
