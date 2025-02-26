document.addEventListener("DOMContentLoaded", function () {
    // Fade-in animation for header
    gsap.from(".testimonials-header", {
        opacity: 0,
        y: -30,
        duration: 1
    });

    // Card fade-in animation
    gsap.from(".testimonial-card", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.3
    });

    // Button hover effect
    const ctaButton = document.querySelector(".cta-button");
    ctaButton.addEventListener("mouseenter", () => {
        gsap.to(ctaButton, { scale: 1.1, duration: 0.2 });
    });

    ctaButton.addEventListener("mouseleave", () => {
        gsap.to(ctaButton, { scale: 1, duration: 0.2 });
    });
});
