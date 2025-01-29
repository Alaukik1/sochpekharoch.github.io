document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    // Only run menu code if both elements exist
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Search functionality
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            searchInput.classList.toggle('active');
            if (searchInput.classList.contains('active')) {
                searchInput.focus();
            }
        });

        // Close search when clicking outside
        document.addEventListener('click', function(e) {
            const searchContainer = document.querySelector('.search-container');
            if (searchContainer && !searchContainer.contains(e.target)) {
                searchInput.classList.remove('active');
            }
        });

        // Handle enter key in search input
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                // Implement your search functionality here
                console.log('Searching for:', this.value.trim());
            }
        });
    }

    // Add touch events for mobile interactions
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, false);

    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const swipeDistance = touchStartY - touchEndY;
        const backToTop = document.getElementById('back-to-top');
        
        // Show/hide back to top button based on scroll position
        if (swipeDistance > 50 && window.scrollY > window.innerHeight) {
            backToTop.classList.add('visible');
        } else if (swipeDistance < -50) {
            backToTop.classList.remove('visible');
        }
    }

    // Track when users click specific buttons
    document.querySelector('.cta-button').addEventListener('click', function() {
        gtag('event', 'click', {
            'event_category': 'engagement',
            'event_label': 'CTA Button'
        });
    });

    // Track when users view specific sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gtag('event', 'view', {
                    'event_category': 'section_view',
                    'event_label': entry.target.id
                });
            }
        });
    });

    // Observe important sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}); 