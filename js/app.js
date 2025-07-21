// Handle scroll to smoothly navigate to sections
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Back to top button
        const backToTopButton = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Mobile menu toggle would go here
        // For simplicity, we'll skip implementing the mobile menu functionality
        
        // Form submission would be handled here
        const contactForm = document.querySelector('form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Form submitted! In a real implementation, this would send the data to a server.');
                contactForm.reset();
            });
        }


  const certImages = [
    "img/ch.jpg",
    "img/ic.jpg",
    "img/nb.jpg",
    "img/op.jpg",
  ];

  let currentIndex = 0;

  function updateImage() {
    document.getElementById("certImage").src = certImages[currentIndex];
  }

  function nextCert() {
    currentIndex = (currentIndex + 1) % certImages.length;
    updateImage();
  }

  function prevCert() {
    currentIndex = (currentIndex - 1 + certImages.length) % certImages.length;
    updateImage();
  }

  // Optional: Auto-switch every 5s
  setInterval(nextCert, 5000);

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('button.md\\:hidden');
    const mobileNav = document.getElementById('mobileNav');

    burger.addEventListener('click', function () {
        mobileNav.classList.toggle('opacity-0');
        mobileNav.classList.toggle('invisible');
    });
});