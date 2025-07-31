// Scroll animation for fade-in sections using Intersection Observer API
document.addEventListener('DOMContentLoaded', () => {
  // Fade-in animation
  const sections = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.25,
    rootMargin: '0px 0px -50px 0px'
  };
  const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  sections.forEach(section => observer.observe(section));

  // Mobile menu toggle
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");

  // Toggle open/close on button click
  toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent triggering document click
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (navLinks.classList.contains("active") &&
        !navLinks.contains(e.target) &&
        e.target !== toggle &&
        !toggle.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });

  // Close menu when clicking a menu link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
