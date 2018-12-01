const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header-navigation__list')
    const navLinks = document.querySelectorAll('.header-navigation__list-item');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('header-navigation__list--active');
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });
        burger.classList.toggle('toggle');
    });
}

navSlide();
const activeNav= () => {
var links = document.querySelectorAll('a[href="'+document.URL+'"]');
console.log(document.URL);
links.forEach(link => {
    link.classList.toggle('header-navigation__text--active');
});
}

activeNav();

const profileDropDown = (x) => {
    if (x.matches) {
        const icon = document.querySelector('.profile-dropdown-icon');
        const dropdown = document.querySelector('.profile-dropdown');

        icon.addEventListener('click',()=>{
            icon.classList.toggle('profile-dropdown-icon--active');
            dropdown.classList.toggle('profile-dropdown--active');
        });
    }

    else {
        const icon = document.querySelector('.profile-dropdown-icon');
        icon.addEventListener('click',()=>{
            window.location.href = './profile.html';
        });
    }
}

var x = window.matchMedia("(min-width: 768px)")
profileDropDown(x)
x.addListener(profileDropDown)