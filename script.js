const menuButton = document.getElementById('menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    if(nav.classList.contains('visible')) {
        nav.classList.remove('visible');
        menuButton.innerHTML = `<img src="images/icon-hamburger.svg" alt=""></img>`;
    }else {
        nav.classList.add('visible');
        menuButton.innerHTML = `<img src="images/icon-close.svg" alt="">`;
    }
})