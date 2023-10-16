document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerMenu = document.querySelector('.HamburgerMenu');
    const closingMenu = document.querySelector('.Closing_Menu');
    
    // Function to open the menu
    function openMenu() {
        menuLinks.style.display = 'block';
        mobileMenu.classList.add('active'); // Add the 'active' class
        hamburgerMenu.style.display = 'none';
        closingMenu.style.display = 'block';
        closingMenu.classList.add('active'); // Add the 'active' class
    }

    // Function to close the menu
    function closeMenu() {
        menuLinks.style.display = 'none';
        mobileMenu.classList.remove('active'); // Remove the 'active' class
        hamburgerMenu.style.display = 'block';
        closingMenu.style.display = 'none';
        closingMenu.classList.remove('active'); // Remove the 'active' class
    }

    mobileMenu.addEventListener('click', function () {
        if (menuLinks.style.display === 'block') {
            closeMenu();
        } else {
            openMenu();
        }
    });

    closingMenu.addEventListener('click', function () {
        closeMenu();
    });
});