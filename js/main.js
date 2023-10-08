const toggleButton = document.querySelector('.mobile__nav__toggle');
const navMenu = document.querySelector('.nav__menu');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('hide__menu')
})