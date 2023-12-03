document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('.buttons');

    menuIcon.addEventListener('click', function () {
        console.log('Menu icon clicked');
        navList.classList.toggle('show');
    });

    // Close the menu when a link is clicked
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function () {
            console.log('Link clicked');
            navList.classList.remove('show');
        });
    });
});
