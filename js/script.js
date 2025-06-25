const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#nav-hamburger').onclick =()=> {
    navbarNav.classList.toggle('active')
}

const hamburger = document.querySelector('#nav-hamburger')

document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});

