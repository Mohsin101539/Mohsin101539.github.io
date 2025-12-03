// 1. Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        if(navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#0a0a0a';
            navLinks.style.padding = '20px';
        }
    });
}

// 2. Auto-Active Link Highlighter
// This checks the current URL and adds the 'active' class to the correct link
const currentPage = window.location.pathname.split("/").pop(); // Gets 'index.html', 'education.html' etc.
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(link => {
    // Remove active class from all first
    link.classList.remove('active');
    
    // Get the href of the link (e.g., 'education.html')
    const linkPage = link.getAttribute('href');

    // If the link matches the current page, add active class
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});