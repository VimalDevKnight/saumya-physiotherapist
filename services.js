// Wait for the document to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero-content");

    // Function to add fade-in effect when in view
    const fadeInOnScroll = () => {
        const rect = heroSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            heroSection.classList.add("show");
        }
    };

    // Run animation on scroll
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run initially in case it's already in view
});


// services and hiirirng section 
document.addEventListener("DOMContentLoaded", () => {
    // Flip Card Hover Effect
    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.querySelector(".skill-card-inner").style.transform = "rotateY(180deg)";
        });
        card.addEventListener("mouseleave", () => {
            card.querySelector(".skill-card-inner").style.transform = "rotateY(0deg)";
        });
    });

    // Form Submit Event
    const form = document.querySelector(".hiring-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Your request has been submitted successfully!");
        form.reset();
    });
});


// contact section
document.addEventListener("DOMContentLoaded", () => {
    // Button Click Effects
    document.querySelector(".whatsapp-btn").addEventListener("click", () => {
        window.open("https://wa.me/your-whatsapp-number", "_blank");
    });

    document.querySelector(".email-btn").addEventListener("click", () => {
        window.location.href = "mailto:your-email@example.com";
    });
});
