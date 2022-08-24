$(document).ready(function(){
    $('.c2_carousel').slick({
        slidesToShow: 3,
        dots:false,
        arrows: false,
        infinite:true,
        slidesToScroll: 1,
        autoplay: true,
        speed:2000,
        autoplaySpeed: 1000,
    });
    window.onresize=function(){
        var element=document.getElementById("navbar");
        var w=window.innerWidth;
        if(w>1200){
            element.classList.remove("navbar_notshow");
            element.classList.add("navbar_show");
        }
    }
    window.onload=function(){
        var element=document.getElementById("navbar");
        var w=window.innerWidth;
        if(w<=1200){
            element.classList.remove("navbar_show");
            element.classList.add("navbar_notshow");
        }
    }
    document.getElementById("navbar_dropdown").onclick=function(){
        var element=document.getElementById("navbar");
        if(element.classList.contains("navbar_show")){
            element.classList.remove("navbar_show");
            element.classList.add("navbar_notshow");
        }
        else{
            element.classList.remove("navbar_notshow");
            element.classList.add("navbar_show");
        }
    }
});

function includeNavbar(){
    var text="<div id=\'navbar_img1\'>\ <a href=\'index.html\'><img style=\'width: 100%;\' class=\'js_sigla\' src=\'img/sigla.png\'></a>\ </div>\ <a href=\'CariereDeSucces.html\' id=\'navbar_link\'>\ <div id=\'navbar_text\'>\ <p>Cariere de succes</p>\ </div>\ </a>\ <a href=\'Activitati.html\' id=\'navbar_link\'>\ <div id=\'navbar_text\'>\ <p>Activităţi</p>\ </div>\ </a>\ <a href=\'Oportunitati.html\' id=\'navbar_link\'>\ <div id=\'navbar_text\'>\ <p>Oportunităţi</p>\ </div>\ </a>\ <div id=\'navbar_link\' class=\'navbar_parteneri\'>\ <a>\ <div id=\'navbar_text\'>\ <p>Parteneri/<br>Sponsori</p>\ </div>\ </a>\ <div id=\'parteneri_arrow\'>\ <p>></p>\ </div>\ <div id=\'dropdown_part\'>\ <a href=\'Parteneri.html\'>\ <div>\ <p>Pagină principală</p>\ </div>\ </a>\ <a href=\'Thinslices.html\'>\ <div>\ <p>Thinslices</p>\ </div>\ </a>\ <a href=\'Grupsoft.html\'>\ <div>\ <p>Grupsoft</p>\ </div>\ </a>\ <a href=\'Funzone.html\'>\ <div>\ <p>Funzone</p>\ </div>\ </a>\ <a href=\'Bytex.html\'>\ <div>\ <p>Bytex</p>\ </div>\ </a>\ <a href=\'Crowdfavorite.html\'>\ <div>\ <p>Crowd Favorite</p>\ </div>\ </a>\ <a href=\'Publica.html\'>\ <div>\ <p>Publica</p>\ </div>\ </a>\ <a href=\'Hama.html\'>\ <div>\ <p>Hama</p>\ </div>\ </a>\ <a href=\'Teos%20Cafe.html\'>\ <div>\ <p>Teo\'s Cafe</p>\ </div>\ </a>\ <a href=\'DiscoverIasi.html\'>\ <div>\ <p>Discover Iaşi</p>\ </div>\ </a>\ <a href=\'Vitesco.html\'>\ <div>\ <p>Vitesco</p>\ </div>\ </a>\ </div>\ </div>\ <a href=\'DespreBEST.html\' id=\'navbar_link\'>\ <div id=\'navbar_text\'>\ <p>Despre BEST</p>\ </div>\ </a>\ <a href=\'#footer_copyright\' style=\'border-style: none;\' id=\'navbar_link\'>\ <div id=\'navbar_text\' style=\'border-style: none;\'>\ <p>Contact</p>\ </div>\ </a>\ <div id=\'navbar_img2\' class=\'racheta\'>\ <a href=\'https://jobshop.ro/\'\' target=\'_blank\'>\ <img src=\'img/racheta_noua2.png\'>\ </a>\ </div>";

    document.getElementById("navbar").innerHTML=text;
}

function showSlides(slideIndex,className){
    var i;
    slides=document.getElementsByClassName(className);
    for(i=0;i<slides.length;i++)
        slides[i].style.display="none";
    slideIndex++;
    if(slideIndex>slides.length)
        slideIndex=1;
    slides[slideIndex-1].style.display="block";
    setTimeout(function(){
        showSlides(slideIndex,className);
    },2500);
}

function stickyNavbar(){
    window.onscroll = function() {getSticky()};
    //removeNavbarContent();

    var navbar=document.getElementById("navbar");
    var sticky=navbar.offsetTop;
    var img=document.createElement("img");
    img.src="img/racheta.png";
    var src=document.getElementById("demo");
    var oneTime=true;

    function getSticky(){
        if(window.pageYOffset >= sticky){
            if(oneTime){
                navbar.classList.add("sticky");
                navbar.classList.remove("notsticky");
                var src=document.getElementById("demo2");
                src.appendChild(img);
                document.getElementById("demo1").innerHTML="<h2>JobShop<span>&#174;</span> 2021!</h2>";
                oneTime=false;
                addNavbarContent();
            }
        }
        else{
            navbar.classList.add("notsticky");
            navbar.classList.remove("sticky");
            document.getElementById("demo2").innerHTML="";
            document.getElementById("demo1").innerHTML="";
            oneTime=true;
            removeNavbarContent();
        }
    }
}

var item1,item2;
item1=document.getElementById("navbar_temp1");
item2=document.getElementById("navbar_temp2");

function addNavbarContent(){
    var list=document.getElementById("navbar");
    list.appendChild(item1);
    list=document.getElementById("navbar_temp2");
    list.appendChild(item2);
}

function removeNavbarContent(){
    item1.parentNode.removeChild(item1);
    item2.parentNode.removeChild(item2);
}

filterSelection("all");

function repeatSpawn(){
    var element=document.getElementById("op_content_el_container");
    element.style.animation="spawn 0.75s";
    setTimeout(function(){
        element.style.animation="none";
    },750);
}

function filterSelection(c){
    var x, i;
    x = document.getElementsByClassName("op_content_fe");
    if(c == "all") c= "";
    for(i=0;i<x.length;i++){
        removeClass(x[i],"show");
        if(x[i].className.indexOf(c)>-1)
            addClass(x[i],"show");
    }
}

function addClass(element, name){
    var i, arr1, arr2;
    arr1=element.className.split(" ");
    arr2=name.split(" ");
    for(i=0;i<arr2.length;i++){
        if(arr1.indexOf(arr2[i])==-1){
            element.className+=" "+arr2[i];
        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2;
    arr1=element.className.split(" ");
    arr2=name.split(" ");
    for(i=0;i<arr2.length;i++){
        while(arr1.indexOf(arr2[i])>-1)
            arr1.splice(arr1.indexOf(arr2[i]),1);
    }
    element.className=arr1.join(" ");
}

function showContact(contact,job){
    window.alert("Te rog să trimiţi cv-ul la adresa: "+contact+" cu subiectul ''[BEST Iaşi] Aplicare "+
                job+"''");
}

function signIn(){
    document.getElementById("cs_inscriere1").onclick=function(){
        window.open("https://forms.gle/YWKWLwCWya1H4mVK8","_blank");
    }
    document.getElementById("cs_inscriere2").onclick=function(){
        window.open("https://forms.gle/YWKWLwCWya1H4mVK8","_blank");
    }
}

function redirectAct(){
    document.getElementById("act_inscriere1").onclick=function(){
        window.open("https://forms.gle/bUMhWoZUhGoYULG2A","_blank");
    }
}

function redirectOp(dir){
    window.open(dir,"_blank");
}

function showNavbar(){
    window.onresize=function(){
        var element=document.getElementById("navbar");
        var w=window.innerWidth;
        if(w>1200){
            element.classList.remove("navbar_notshow");
            element.classList.add("navbar_show");
        }
    }
    window.onload=function(){
        var element=document.getElementById("navbar");
        var w=window.innerWidth;
        if(w<=1200){
            element.classList.remove("navbar_show");
            element.classList.add("navbar_notshow");
        }
    }
    document.getElementById("navbar_dropdown").onclick=function(){
        var element=document.getElementById("navbar");
        if(element.classList.contains("navbar_show")){
            element.classList.remove("navbar_show");
            element.classList.add("navbar_notshow");
        }
        else{
            element.classList.remove("navbar_notshow");
            element.classList.add("navbar_show");
        }
    }
}

function redirect(){
    document.getElementById("facebook").onclick=function(){
        window.open("https://www.facebook.com/bestiasi","_blank");
    }
    document.getElementById("insta").onclick=function(){
        window.open("https://www.instagram.com/bestiasi/","_blank");
    }
    document.getElementById("youtube").onclick=function(){
        window.open("https://www.youtube.com/channel/UC1DuRUKQkxWv7cgeihAm79w","_blank");
    }
    document.getElementById("linkedin").onclick=function(){
        window.open("https://www.linkedin.com/company/best-iasi/?originalSubdomain=ro","_blank");
    }
    document.getElementById("fsigla").onclick=function(){
        window.open("https://bestis.ro/","_blank");
    }
    document.getElementById("univ").onclick=function(){
        window.open("https://www.tuiasi.ro/","_blank");
    }
    document.getElementById("c2_text").onclick=function(){
        /*window.open("Oportunitati.html");*/
        location.href="Oportunitati.html";
    }
    document.getElementById("js_sigla").onclick=function(){
        window.open("index.html");
    }
}

function showDropdownPart(){
    var arrow=document.getElementById("parteneri_arrow");
    document.getElementById("parteneri_arrow").onclick=function(){
        var ddp=document.getElementById("dropdown_part");
        if(ddp.style.display=="block")
            ddp.style.display="none";
        else
            ddp.style.display="block";
    }
}

/*var btnContainer=document.getElementById("op_content_fl_container");
var btns=btnContainer.getElementsByClassName("op_content_fl_btn");
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
        var current=document.getElementsByClassName("active");
        current[0].className=current[0].className.replace(" active", "");
        this.className+=" active";
    });
}*/

/*function changeAnimation(divId){
    document.getElementById(divId).get
}*/














