const navMenu = document.querySelector('.nav__list');
const toggleButton = document.querySelector('.mobile__nav__toggle');

toggleButton.addEventListener('click', () => {
    const visibility = navMenu.getAttribute('data-visible');

    if(visibility === "false"){
        navMenu.setAttribute('data-visible', true); //show menu on mobile
        toggleButton.setAttribute('aria-expanded',true) //search purpose
        toggleButton.firstElementChild.classList.replace('ri-menu-line','ri-close-line') //change icon
    }else{
        navMenu.setAttribute('data-visible', false)
        toggleButton.setAttribute('aria-expanded',false)
        toggleButton.firstElementChild.classList.replace('ri-close-line','ri-menu-line')
    }
})