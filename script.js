document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    hamburgerMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.hamburger-menu') && !e.target.closest('.nav-links')) {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });

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