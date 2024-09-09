const { log } = console;

const header = document.querySelector("header");

let 
    hero = document.querySelector(".hero");
    navMenu = document.querySelector(".nav-links-menu"),
    navMenuUL = document.querySelector(".nav-links-menu ul")
    menu = document.querySelector(".menu-btn"),
    close = document.querySelector(".close-btn"),
    menuTag = document.querySelectorAll(".menu-tag"),
    navLinksBottom = document.querySelector(".nav-links-menu-bottom"),
    cHeaderOne = document.querySelector(".ch-1"),
    cHeaderTwo = document.querySelector(".ch-2"),
    scaleImg = document.querySelector(".scale-img"),
    scaleTxt = document.querySelector(".scale-txt"),
    speedTitle = document.querySelector(".speed-title"),
    speedTag = document.querySelector(".speed-tag"),
    powerTitle = document.querySelector(".power-title"),
    powerTag = document.querySelector(".power-tag")
    ;

// manipultate opacity on scroll
let getOpac = (scroll) => {
    let opac = (1 * scroll) * 0.01;
    return opac;
}

window.addEventListener("scroll", (e) => {
    header.style.backgroundColor = `rgba(0,0,0, ${getOpac(this.scrollY)})`;    
})

menu.addEventListener("click", (e) => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
    setTimeout(() => {
    document.body.style.overflow = "hidden";
    navMenu.style.animation = "d-menu 650ms forwards";
    navMenuUL.style.animation = "t-menu 650ms forwards";
    if (!navMenu.classList.contains("active")) {
        menu.classList.add("hide");
        menu.classList.remove("show");
        close.classList.add("reveal");
        close.classList.remove("close");
        close.classList.add("show");
        navMenu.classList.add("active");
    }
    menuTag.forEach(tag => {
        tag.style.animation = "m-tag 650ms 250ms forwards";
        tag.style.transform = "rotateX(90deg)";
    })
}, 500);
})

close.addEventListener("click", (e) => {
    setTimeout(() => {
        document.body.style.overflow = "scroll";
    }, 1000)
   
    navMenu.style.animation = "unset";
    navMenuUL.style.animation = "unset";
    if (navMenu.classList.contains("active")) {
        navMenu.style.perspective = "110px";
        menu.classList.remove("hide");
        menu.classList.add("show");
        menu.classList.add("reveal");
        close.classList.remove("reveal");
        close.classList.add("close");
        close.classList.remove("show");
        navMenuUL.style.animation = "c-menu 1050ms forwards";
    
        // navLinksBottom.style.transform = "rotateX(125deg)";

        menuTag.forEach(tag => {
            tag.style.animation = "rm-tag 650ms ease";
            // tag.style.transform = "rotateX(90deg)";
            // tag.style.transition = "transform 650ms 1s ease";
        })
        setTimeout(() => {
            navMenu.classList.remove("active");
        }, 1000)
    }
})


log (cHeaderOne.parentElement.clientHeight);

window.addEventListener("scroll", (e) => {
    // move div from left to right or right to left
    // fixed values => css code => left: -30; left: 6;
    // put values inside scroll listener
    let _x1_350 = -30; 
    let _x2_350 = 6;

    let [ x1, x2 ] =  [ cHeaderOne , cHeaderTwo] ;

    let y = window.pageYOffset;

    let height = window.innerHeight;

    let o = (y / height);

    _x1_350 += o * 20;
    _x2_350 += o * -20;
    
    x1.style.left = `${_x1_350}rem`;
    x2.style.left = `${_x2_350}rem`;
})


window.addEventListener("scroll", (e) => {
    let height = this.innerHeight;
    let target = scaleImg;
    let targetTop = (scaleImg.getBoundingClientRect().top);
    // scale img on scroll
    let y = this.pageYOffset;
    
    
    if (targetTop < height ){
        // scaling logic
        y = y / 3000;
        target.style.transform = `scale(${y})`;
        scaleTxt.classList.add("scale-txt-start");
    } else {
        target.style.transform = `scale(0)`;
        target.style.transition = '350ms';
        scaleTxt.classList.remove("scale-txt-start");
    }
})

window.addEventListener("scroll", (e) => {
    let speedTop = speedTitle.getBoundingClientRect().top,
        height = window.innerHeight;

        let speedList = [speedTitle, speedTag];

    if ((speedTop + 500) < height) {
        for (let i = 0; i < speedList.length; ++i) 
            speedList[i].classList.add("opac");
    } else {
        for (let i = 0; i < speedList.length; ++i)
            speedList[i].classList.remove("opac");
    }
})

window.addEventListener("scroll", (e) => {
    let powerTop = powerTitle.getBoundingClientRect().top,
        height = window.innerHeight;

        let powerList = [powerTitle, powerTag]
    if ((powerTop + 500)< height) {
        document.body.classList.add("body-color-1");
        header.style.backgroundColor = "transparent";
        header.style.transition = "none";

        powerList.forEach(power => power.classList.add("opac"));
    } else {
        document.body.classList.remove("body-color-1");

        powerList.forEach(power => power.classList.remove("opac"));
    }
})
