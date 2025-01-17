document.addEventListener('DOMContentLoaded', () => {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed');
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });

    // Back to top functionality
    const backToTop = document.getElementById('back-to-top');
    const heroSection = document.querySelector('.hero-content');
    
    const handleScroll = () => {
        if (heroSection) {
            const heroHeight = heroSection.offsetHeight;
            const scrolled = window.pageYOffset;
            
            // Show button when scrolled 70% of hero height
            if (scrolled > (heroHeight * 0.7)) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    };

    // Smooth scroll to top
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', handleScroll);
}); 