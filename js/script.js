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

    document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelector('.testimonials');
    const persons = document.querySelectorAll('.person');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let index = 0;
    const interval = 3000; // Change slide every 3 seconds

    function showPerson(idx) {
        persons.forEach((person, i) => {
            person.style.display = (i === idx) ? 'inline-block' : 'none';
        });
    }

    function nextPerson() {
        index = (index + 1) % persons.length;
        showPerson(index);
    }

    function prevPerson() {
        index = (index - 1 + persons.length) % persons.length;
        showPerson(index);
    }

    nextButton.addEventListener('click', nextPerson);
    prevButton.addEventListener('click', prevPerson);

    setInterval(nextPerson, interval);
});


