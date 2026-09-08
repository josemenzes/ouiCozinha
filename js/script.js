const sideBar = document.getElementById('side-bar');
const menuButton = document.getElementById('menu-button');
const navbar = document.getElementById('navbar');
const closeNavbar = document.getElementById('close-navbar');
const lista = document.querySelectorAll('#side-bar li');

let navBarFechada = false;

function fecharNavBar() {
    
    if (window.innerWidth <= 760){

        if (navBarFechada) return;
        navBarFechada = true;
    
        sideBar.style.transition = 'right 0.6s ease-in-out, visibility 1.3s ease, opacity 1.3s ease'
        
        menuButton.style.opacity = 1;
        menuButton.style.visibility = 'visible';
        sideBar.style.visibility = 'hidden'
        sideBar.style.right = '-100%'
    }
}

menuButton.addEventListener("click", () => {
    navBarFechada = false;

    navbar.style.display = 'relative';
    menuButton.style.visibility = 'hidden';
    menuButton.style.opacity = '0';

    sideBar.style.transition = 'right 0.6s ease-in-out, visibility 1.3s ease, opacity 1.3s ease'
    menuButton.style.transition = 'visibility 0.3s ease-in-out, opacity 0.5s ease-in-out'


    sideBar.style.display = 'flex';
    sideBar.style.visibility = 'visible';
    sideBar.style.opacity = '1';

    sideBar.style.flexDirection = 'column';
    sideBar.style.padding = '2rem';
    sideBar.style.position = 'absolute';
    sideBar.style.top = 0;
    sideBar.style.right = 0;
    sideBar.style.width = "50vw";
    sideBar.style.backgroundColor = 'rgb(56, 56, 56)'
    sideBar.style.borderLeft = 'solid black 1rem'
    sideBar.style.minHeight = '100vh';

});

closeNavbar.addEventListener('click', () => {
    fecharNavBar();
});

lista.forEach(li => {
    li.addEventListener('click', () => {
        fecharNavBar();
    })
})

window.addEventListener('scroll', () => {
    fecharNavBar();
})



