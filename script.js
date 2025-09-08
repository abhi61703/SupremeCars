// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

// Smooth scroll with easing
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50, // adjust for sticky header
      behavior: 'smooth'
    });

    // close menu on mobile after clicking
    navUl.classList.remove('show');
  });
});
