// NAVIGATION TOGGLE END

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line" : "ri-menu-line")
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

// NAVIGATION TOGGLE END


// SCROLL-REVEAL START
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container img", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_container h3", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-btns", {
    ...scrollRevealOption,
    delay: 1500,
});


// PROJECTS 
ScrollReveal().reveal(".project_card", {
    ...scrollRevealOption,
    interval: 500,
});


// EXPERIENCE
ScrollReveal().reveal(".experience_list li", {
    ...scrollRevealOption,
    interval: 500,
});


// FOOTER
ScrollReveal().reveal(".footer_container h2", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".footer_container p", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".footer_container .mail_to", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".footer_socials", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal("#copyright", {
    ...scrollRevealOption,
    delay: 1500,
});


// SCROLL-REVEAL END


// FOOD BG

const foods = [
    'url("./images/cookieSandwichIcon.png")',
    'url("./images/cakeIcon.png")',
    'url("./images/cheesecakeIcon.png")',
    'url("./images/cookieIcone.png")',
    'url("./images/cremepuffIcon.png")',
    'url("./images/flanIcon.png")',
    'url("./images/donutIcon.png")',
    'url("./images/pancakesIcon.png")',

];


//  COOKIE SANDWHICH
function food(){
    let e = document.createElement('div');
    e.setAttribute('class', 'food');
    document.body.appendChild(e);
    e.style.left = Math.random() * + innerWidth + 'px';

    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 12 + size + 'px'
    e.style.animationDuration = 2 + duration + 's';

    setTimeout(function(){
        document.body.removeChild(e);
    },5000)
}
setInterval(function(){
    food()
},2000)

// CAKE ICON ---------------------------------------------------------------------
function cake(){
    let e = document.createElement('div');
    e.setAttribute('class', 'cake');
    document.body.appendChild(e);
    e.style.left = Math.random() * + innerWidth + 'px';

    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 12 + size + 'px'
    e.style.animationDuration = 2 + duration + 's';

    setTimeout(function(){
        document.body.removeChild(e);
    },5000)
}
setInterval(function(){
    cake()
},2000)


// CHEESECAKE ICON ---------------------------------------------------------------------
function cheesecake(){
    let e = document.createElement('div');
    e.setAttribute('class', 'cheesecake');
    document.body.appendChild(e);
    e.style.left = Math.random() * + innerWidth + 'px';

    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 12 + size + 'px'
    e.style.animationDuration = 2 + duration + 's';

    setTimeout(function(){
        document.body.removeChild(e);
    },5000)
}
setInterval(function(){
    cheesecake()
},2000)


// CREMEPUFF ICON ---------------------------------------------------------------------
function cremepuff(){
    let e = document.createElement('div');
    e.setAttribute('class', 'cremepuff');
    document.body.appendChild(e);
    e.style.left = Math.random() * + innerWidth + 'px';

    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 12 + size + 'px'
    e.style.animationDuration = 2 + duration + 's';

    setTimeout(function(){
        document.body.removeChild(e);
    },5000)
}
setInterval(function(){
    cremepuff()
},2000)


// COOKIE ICON ---------------------------------------------------------------------
function cookie(){
    let e = document.createElement('div');
    e.setAttribute('class', 'cookie');
    document.body.appendChild(e);
    e.style.left = Math.random() * + innerWidth + 'px';

    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 12 + size + 'px'
    e.style.animationDuration = 2 + duration + 's';

    setTimeout(function(){
        document.body.removeChild(e);
    },5000)
}
setInterval(function(){
    cookie()
},2000)


// FLAN ICON ---------------------------------------------------------------------
function flan(){
    let e = document.createElement('div');
    e.setAttribute('class', 'flan');
    document.body.appendChild(e);
    e.style.left = Math.random() * + innerWidth + 'px';

    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 12 + size + 'px'
    e.style.animationDuration = 2 + duration + 's';

    setTimeout(function(){
        document.body.removeChild(e);
    },5000)
}
setInterval(function(){
    flan()
},2000)


// FLAN ICON ---------------------------------------------------------------------
function donut(){
    let e = document.createElement('div');
    e.setAttribute('class', 'donut');
    document.body.appendChild(e);
    e.style.left = Math.random() * + innerWidth + 'px';

    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 12 + size + 'px'
    e.style.animationDuration = 2 + duration + 's';

    setTimeout(function(){
        document.body.removeChild(e);
    },5000)
}
setInterval(function(){
    donut()
},2000)