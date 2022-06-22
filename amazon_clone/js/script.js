const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const openMenuDesktop = document.querySelector('.open-menu-desktop')
const closeMenuDesktop = document.querySelector('.close-menu-desktop')

openMenu.addEventListener('click', () => {
    document.querySelector('.sidebar').style.width = "250px";
});

closeMenu.addEventListener('click', () => {
    document.querySelector('.sidebar').style.width = "0";
});

openMenuDesktop.addEventListener('click', () => {
    document.querySelector('.sidebar-desktop').style.width = "350px";
});

closeMenuDesktop.addEventListener('click', () => {
    document.querySelector('.sidebar-desktop').style.width = "0";
});

// Media Query

if (window.screen.width >= 400) {
    document.querySelector(".mobile").style.display = 'none'
    document.querySelector(".desktop").style.display = 'block'
}
else if (window.screen.width <= 400) {
    document.querySelector(".mobile").style.display = 'block'
    document.querySelector(".desktop").style.display = 'none'
}

// Dropdown

let dropdownBtn = document.querySelector(".dropdown-btn")
let menuContent = document.querySelector(".menu")

dropdownBtn.addEventListener('click', () => {

    if (menuContent.style.display === "") {
        menuContent.style.display = "block"
    }
    else {
        menuContent.style.display = ""
    }
})