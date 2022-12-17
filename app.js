let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle("active", windowPosition);
});

hamburgerMenu.addEventListener("click", () => {
    header.classList.toggle("menu-open");
});

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        header.classList.toggle("menu-open");
    });
});
