

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
  });
  let currentIndex = 0;
  const images = document.querySelectorAll('.carousel-image');
  const changeImage = () => {
      images[currentIndex].classList.add('hidden');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.remove('hidden');
  }
  setInterval(changeImage, 3000); // Change image every 3 seconds

  const slider = document.querySelector('.slider');
  const items = document.querySelectorAll('.item');
  const btns = document.querySelectorAll('.slider-btn');
  
  function reset() {
    for (let i = 0; i < items.length; i++) {
      btns[i].classList.remove('expand');
      items[i].classList.remove('animation');
    } 
  }
  
  function animate(i) {
    btns[i].classList.add('expand');
    items[i].classList.add('animation');
  }
  
  function scrollTo(i) {
    slider.style.transform = `translateX(${-i * slider.offsetWidth}px)`;
    reset();
    animate(i);
  }
  
  const activate = (e) => e.target.matches('.slider-btn') && scrollTo(e.target.dataset.index);
  
  const init = () => animate(0);
  
  window.addEventListener('load',init,false);
  window.addEventListener('click',activate,false);