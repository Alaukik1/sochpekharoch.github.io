document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
            console.log('Menu clicked'); // For debugging
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    } else {
        console.error('Menu elements not found'); // For debugging
    }

    // Handle search
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Implement your search functionality here
            console.log('Searching for:', searchTerm);
            // You can redirect to a search results page or handle the search as needed
        } else {
            searchInput.focus();
        }
    });

    // Handle enter key in search input
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}); 