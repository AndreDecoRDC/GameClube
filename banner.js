var number = 0;

var minibanner1 = document.getElementById("mini-banner1");
var minibanner2 = document.getElementById("mini-banner2");
var banner = document.getElementById("banner");
var logo = document.getElementById("logo");
var titulo = document.getElementById("titulo");
var subtitulo = document.getElementById("subtitulo");

function click2(){

    minibanner2.style.animationName = "scaling1";
    minibanner2.style.animationDuration = "0.4s";
    minibanner2.style.animationFillMode = "forwards";

    minibanner1.style.animationName = "scaling2";
    minibanner1.style.animationDuration = "0.4s";
    minibanner1.style.animationFillMode = "forwards";

    banner.src = "imgs/call-of-duty-modern-warfare-3-s5-hero-desktop-01-en-17jul24.webp";
    logo.src = "imgs/cod_logo.png";

    titulo.innerHTML = "Entre no ringue";
    titulo.style.top = "50.5%";

    subtitulo.innerHTML = "Torne-se o melhor pugilista derrotando<br>os adversarios e levando uma maleta de troféu<br>para casa em Call of Duty.";

}

function click1(){

    minibanner2.style.animationName = "scaling2";
    minibanner2.style.animationDuration = "0.4s";
    minibanner2.style.animationFillMode = "forwards";

    minibanner1.style.animationName = "scaling1";
    minibanner1.style.animationDuration = "0.4s";
    minibanner1.style.animationFillMode = "forwards";

    banner.src = "imgs/NBA-2K25-launch-hero-desktop-01-en-26jun24.webp";
    logo.src = "imgs/logo_nba.png";

    titulo.innerHTML = "Jogue onde estiver,<br>ganhe em todo lugar";
    titulo.style.top = "44%";

    subtitulo.innerHTML = "Acumule Vitorias,desbloqueie<br> banners e faça história<br>no NBA2K25";

}

function exect(){

    if(number == 0){

        click2();

        number = 1;

    }else{

        click1();

        number = 0;

    }

}

minibanner2.addEventListener("click",click2);
minibanner1.addEventListener("click",click1);

setInterval(exect, 6000);