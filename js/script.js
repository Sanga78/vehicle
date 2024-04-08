

document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');
  
    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
      el.addEventListener('click', function(event) {
        event.preventDefault();
        mobileNavToogle();
      })
    });
  
    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
    }
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navbar a').forEach(navbarlink => {
  
      if (!navbarlink.hash) return;
  
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
  
      navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
  
    });
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

    // nextButton.addEventListener('click', nextPerson);
    // prevButton.addEventListener('click', prevPerson);

    setInterval(nextPerson, interval);
  });
  let currentIndex = 0;
  const images = document.querySelectorAll('.carousel-image');
  const changeImage = () => {
      images[currentIndex].classList.add('hidden');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.remove('hidden');
  }
  setInterval(changeImage, 3000); // Change image every 3 seconds

