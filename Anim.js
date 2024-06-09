window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');

  sections.forEach(function(section) {
    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight * 0.8) {
      section.classList.add('animate-on-scroll', 'fade-in');
    }
  });
});
