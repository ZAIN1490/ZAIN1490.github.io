const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const backdrop = document.querySelector(".menu-backdrop");
const body = document.body;

let scrollPosition = 0;

function openMenu() {
    scrollPosition = window.scrollY;
    body.style.top = `-${scrollPosition}px`;
    body.classList.add("no-scroll");

    hamburger.classList.add("active");
    navLinks.classList.add("active");
    backdrop.classList.add("active");
}

function closeMenu() {
    body.classList.remove("no-scroll");
    body.style.top = "";
    window.scrollTo(0, scrollPosition);

    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    backdrop.classList.remove("active");
}

hamburger.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
});

backdrop.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", closeMenu);
});