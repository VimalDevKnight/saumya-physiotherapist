document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateX(0)";
            }
        });
    }, { threshold: 0.3 });

    items.forEach((item) => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", function () {
    const expertiseCards = document.querySelectorAll(".expertise-card");
    expertiseCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Contact Form Submit
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        this.reset();
    });
});
