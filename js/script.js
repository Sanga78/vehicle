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
window.onscroll = () => {
    menubtn.style.display="none";
}