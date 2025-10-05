// Navbar scroll behavior - show after hero section
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    const heroSection = document.getElementById('hero');
    const heroHeight = heroSection.offsetHeight;
    
    if (window.scrollY > heroHeight * 0.7) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scroll for navigation links (optional enhancement)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });