const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.close-btn');

const dropdownMenu = document.querySelector('.column');

menuButton.addEventListener('click', function () {
    menuButton.classList.add('elrejt');
    closeButton.classList.remove('elrejt');
    dropdownMenu.classList.remove('elrejt');
});

closeButton.addEventListener('click', function () {
    menuButton.classList.remove('elrejt');
    closeButton.classList.add('elrejt');
    dropdownMenu.classList.add('elrejt');
});