const menuIcon = document.getElementById('menu-icon');
const dropdownMenu = document.getElementById('dropdown-menu');
const menuImg = document.getElementById('menu-img');
const closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', () => {
    dropdownMenu.style.display = 'block';
    menuImg.src = 'close.svg';
});

closeIcon.addEventListener('click', () => {
    dropdownMenu.style.display = 'none';
    menuImg.src = 'menu.svg';
});