/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 

/* menu hidden */

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}

window.addEventListener('scroll', bgHeader)
bgHeader()
/*=============== SWIPER SERVICES ===============*/ 
const swiperServices = new Swiper('.services__swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

});


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-croll')
}

window.addEventListener('scroll', scrollUp)
scrollUp()

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '100px',
//     duration: 2500,
//     delay: 400,
//     reset: true,
// })

// sr.reveal('.home__content, .services__data, .services__swiper, .footer__container')
// sr.reveal('.home__images', {origin:'bottom', delay: 1000})

// sr.reveal(' .contact__img' , {origin:'left'})
// sr.reveal(' .contact__data', {origin:'right'})




// // sr.reveal('.about__images2', {origin:'right'})
// // sr.reveal('.about__list', {origin:'left'})

// sr.reveal('.projects__card', {interval:100})



//scroll 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/*=============== FAQ QUESTIONS ===============*/



//MAPA 

const mapSelector = document.getElementById('mapSelector');
const mapContainer = document.getElementById('mapContainer');

const maps = {
  buenosaires: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289.4006710447015!2d-58.08849925487924!3d-34.85133151404635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2ded7dd255529%3A0x66ca5164ca4b726c!2sCam.%20Parque%20Centenario%20%26%20C.%2051%2C%20B1894%20Villa%20Elisa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1761426192618!5m2!1ses-419!2sar',
  cordoba: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.188911139053!2d-58.211801887949825!3d-34.77601927277992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a328b782eaefa3%3A0xc459b52e4353340a!2sC.%2024%204089%2C%20B1884%20Berazategui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1761426341565!5m2!1ses-419!2sar',
  rosario: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.335240039931!2d-58.31804454644652!3d-34.77233490321808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32c43679a8941%3A0xf2b5995ececfe6b6!2sC.%20893%203385%2C%20B1881%20San%20Francisco%20Solano%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1761426440771!5m2!1ses-419!2sar'
};

mapSelector.addEventListener('change', () => {
  const selected = mapSelector.value;
  if (maps[selected]) {
    mapContainer.innerHTML = `<iframe src="${maps[selected]}" allowfullscreen></iframe>`;
  } else {
    mapContainer.innerHTML = '';
  }
});
