const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    
    // Completely freeze the background website scroll
    body.classList.toggle("no-scroll");
});

// Automatically close the page overlay when clicking any link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        body.classList.remove("no-scroll");
    });
});
