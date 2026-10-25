
/* ========================================
   RACHITHA PAI - PORTFOLIO INTERACTIONS
======================================== */

// Update the copyright year automatically
const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Reveal sections smoothly as they enter the screen
const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .skill-card, " +
    ".timeline-item, .project-card, .hackathon-card, " +
    ".education-card, .contact-content"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });
} else {
    // Fallback for browsers without IntersectionObserver
    revealElements.forEach((element) => {
        element.classList.add("is-visible");
    });
}

// Close navigation behaviour is not required because
// this version uses ordinary anchor links.
console.log("Rachitha's portfolio is ready!");
