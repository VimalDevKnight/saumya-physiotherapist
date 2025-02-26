
// // about animation
// document.addEventListener("DOMContentLoaded", function () {
//     gsap.from(".about-img", { opacity: 0, scale: 0.8, duration: 1, ease: "power2.out" });
//     gsap.from(".about-title", { opacity: 0, x: -50, duration: 1, ease: "power2.out", delay: 0.3 });
//     gsap.from(".about-text", { opacity: 0, y: 30, duration: 1, ease: "power2.out", delay: 0.5 });
//   });
  

// // services animation
// document.addEventListener("DOMContentLoaded", function () {
//   gsap.from(".service-card", { opacity: 0, y: 50, duration: 0.8, stagger: 0.3, ease: "power2.out" });
// });



document.addEventListener("DOMContentLoaded", function () {
  // GSAP Animation for About Section
  gsap.from(".about-img", { 
    opacity: 0, 
    scale: 0.8, 
    duration: 1, 
    ease: "power2.out" 
  });

  gsap.from(".about-title", { 
    opacity: 0, 
    x: -50, 
    duration: 1, 
    ease: "power2.out", 
    delay: 0.3 
  });

  gsap.from(".about-text", { 
    opacity: 0, 
    y: 30, 
    duration: 1, 
    ease: "power2.out", 
    delay: 0.5 
  });

  // GSAP Animation for Services Section (Staggered Effect)
  gsap.from(".service-card", { 
    opacity: 0, 
    y: 50, 
    duration: 0.8, 
    stagger: 0.3, 
    ease: "power2.out" 
  });

  // Scroll Trigger Animations for Sections
  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
});



// contact section 
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent!");
    contactForm.reset();
  });
});


