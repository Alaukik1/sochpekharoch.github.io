document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
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