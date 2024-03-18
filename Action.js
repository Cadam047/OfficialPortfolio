function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Check if the element is intersecting
        if (entry.isIntersecting) {
          // Add the animation class to play the animation
          entry.target.classList.add('blur-effect');
          // Optional: Remove the class after animation ends to reset the animation
          // Adjust the timing based on your animation duration
          setTimeout(() => {
            entry.target.classList.remove('blur-effect');
          }, 1500); // 1500ms = 1.5s, match this with your CSS animation duration
        }
      });
    }, {
      threshold: 0.1 // This value determines how much of the item must be visible before the animation triggers
    });
  
    // Select all sections you want to apply the animation to
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });
  });
