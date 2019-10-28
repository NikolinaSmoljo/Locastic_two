const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        //toggle nav
        nav.classList.toggle('nav-active');

        /*//animate links
        navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                }
                else {
                    link.style.animation = `navLinkFade 0.4s ease forwards ${index / 2 + 0.5}s`;
                }
            });*/

        //Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-submenu") {
        x.className += " responsive";
    } else {
        x.className = "nav-submenu";
    }
}