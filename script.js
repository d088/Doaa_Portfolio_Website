

// Scroll animation for fade-in sections using Intersection Observer API
document.addEventListener('DOMContentLoaded', () => {
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

  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");
 toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
