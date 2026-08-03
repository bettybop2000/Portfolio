// ================================
// Smooth Fade-in Animation
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach((section) => {
    observer.observe(section);
});

// ================================
// Active Navigation Link
// ================================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ================================
// Back To Top Button
// ================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.classList.add("top-btn");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ================================
// Current Year in Footer
// ================================

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Fola Dada | Designed & Developed by Me`;