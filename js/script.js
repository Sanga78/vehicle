var menubtn = document.getElementById("menu-btn");
var crossbtn = document.getElementById("crossbtn");
var navbar = document.getElementById("navbar");
let timeoutID;

function displayNavbar(){
 menubtn.style.display="none";
 crossbtn.style.display="block";
 navbar.style.display="initial";
}
function closeNavbar(){
    navbar.style.display="none";
    menubtn.style.display="block";
    crossbtn.style.display="none";
}
if (menubtn.style.display="block"){
    crossbtn.style.display="none";
}else{
    menubtn.style.display="none";
}

function widthChangeCallback(){
    if(window.innerWidth<768){
        menubtn.style.display="initial";
        navbar.style.display="none";
    }else{
        crossbtn.style.display="none";
        menubtn.style.display="none";
        navbar.style.display="initial";
    }
}
window.addEventListener("resize",
widthChangeCallback);
widthChangeCallback();