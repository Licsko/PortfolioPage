const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.close-btn');

const secondNAV = document.querySelector('.nav-2');
const dropdownMenu = document.querySelector('.nav-2 .nav-list-column');

menuButton.addEventListener('click', function () {
    secondNAV.classList.remove('elrejt');
    menuButton.classList.add('elrejt');
    closeButton.classList.remove('elrejt');
    dropdownMenu.classList.remove('elrejt');
});

closeButton.addEventListener('click', function () {
    secondNAV.classList.add('elrejt');
    menuButton.classList.remove('elrejt');
    closeButton.classList.add('elrejt');
    dropdownMenu.classList.add('elrejt');
});