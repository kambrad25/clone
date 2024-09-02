const { log } = console;

const openMenu = document.querySelector(".open"),
      closeMenu = document.querySelector(".close"),
      menuOverlay = document.querySelector(".x-menu-overlay"),
      next = document.querySelector(".next"),
      prev = document.querySelector(".prev"),
      slideRow = document.querySelectorAll(".slide-row "),
      slides = document.querySelector(".slides");
;

openMenu.addEventListener('click', (e) => {
    let target = e.target;
    if (!target.classList.contains("none")) {
        closeMenu.classList.remove("none");
        e.target.classList.add("none");
        menuOverlay.classList.remove("x-menu-none");
        setTimeout(()=> {
            menuOverlay.classList.add("x-menu-start");
        }, 200);
        target.parentElement.classList.add("nav-menu-show-close");
    } else 
    {
        closeMenu.classList.add("none");
        e.target.classList.remove("none");
    }
})

closeMenu.addEventListener('click', (e) => {
    let target = e.target;
    if (!target.classList.contains("none")) {
        openMenu.classList.remove("none");
        e.target.classList.add("none");
        menuOverlay.classList.remove("x-menu-start");
        setTimeout(()=> {
            menuOverlay.classList.add("x-menu-none");
        }, 300);
        target.parentElement.classList.remove("nav-menu-show-close");

    } else 
    {
        openMenu.classList.add("none");
        e.target.classList.remove("none");
    }
})


let px = 0;
var slideinterval = setInterval(slideshow, 3000);
if (window.innerWidth >= 1300)
    {
        clearInterval(slideinterval);
    }
    
    window.addEventListener("resize", (e) => {
        if (this.innerWidth >= 1300) {
            clearInterval(slideinterval);
        } else 
        {
            clearInterval(slideinterval);
            slideinterval = setInterval(slideshow, 3000);
        }
    })
function slideshow() {
    px = px - 100;
    if (px == (-300)) {
        px = 0;
    }
    slides.style.transform = `translate(${px}rem)`;
}
next.addEventListener("click" , (e) => {
    clearInterval(slideinterval);
    px = px - 100;
    if (px == (-300)) {
        px = 0;
    }
    slides.style.transform = `translate(${px}rem)`;
})

prev.addEventListener("click" , (e) => {
    clearInterval(slideinterval);
    if (px == 0) {
        px = (-200);
        slides.style.transform = `translate(${px}rem)`;
    } else 
    {
        px = (px + 100) + 0;
        if (px == (300)) {
            px = 0;
        }
        slides.style.transform = `translate(${px}rem)`;
}   
})

var sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'ease'
});

var srlogo = ScrollReveal({
    distance: '10px',
    duration: 800,
    easing: 'ease-in'
});

var srinfo = ScrollReveal(
    {
        distance: '30px',
        duration: 1000,
        easing: 'ease'
    }
)

sr.reveal('.hero', { origin: 'top', opacity: '0', delay: '400'});
sr.reveal('nav', { opacity: '0', delay: '400' })
sr.reveal('.hero-img', { scale: '0.1', delay: '800'});
srlogo.reveal('.one-svg', { origin: 'bottom', opacity: '0', delay: '100', scale: '0'});
srlogo.reveal('.two-svg', { origin: 'bottom', opacity: '0', delay: '200', scale: '0'});
srlogo.reveal('.three-svg', { origin: 'bottom', opacity: '0', delay: '300', scale: '0'});
srlogo.reveal('.four-svg', { origin: 'bottom', opacity: '0', delay: '400', scale: '0'});
srlogo.reveal('.five-svg', { origin: 'bottom', opacity: '0', delay: '500', scale: '0'});
srinfo.reveal('.expertise-info', {origin: 'bottom', opacity: '0', delay: '500'});




let w13 = 0;

function displaynone() {
    for (let i = 0; i < slideRow.length; ++i){
        slideRow[i].style.display = 'none';
    }
}
























// slideshow();