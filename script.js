document.addEventListener("DOMContentLoaded", () => {

  // Accordion Toggle
  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.style.display === 'block';

      // Close all
      document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');

      // Open current
      content.style.display = isOpen ? 'none' : 'block';
    });
  });

  // Smooth Scrolling
  document.querySelectorAll('.navbar nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for sticky navbar
          behavior: 'smooth'
        });
      }
    });
  });

  // Form Submission (Simple Feedback)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Form submitted! Thank you 🎉");
      form.reset();
    });
  });

  // Animate cards on scroll using Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s forwards';
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.choose-item').forEach(item => observer.observe(item));
});