const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const backdrop = document.querySelector(".menu-backdrop");
const body = document.body;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    backdrop.classList.toggle("active");

    // Completely freeze the background website scroll
    body.classList.toggle("no-scroll");
});

// Close the menu when clicking the dark backdrop
backdrop.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    backdrop.classList.remove("active");
    body.classList.remove("no-scroll");
});

// Automatically close the page overlay when clicking any link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        backdrop.classList.remove("active");
        body.classList.remove("no-scroll");
    });
});