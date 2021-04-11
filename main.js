const toggleButton = document.getElementsByClassName('toggle-button');
const navBarLinks = document.getElementsByClassName('nav-links');

function toggleButton () {
    toggleButton.classList.toggle('nav-active');
}

toggleButton.addEventListener('click', ()=> {
    navBarLinks.classList.toggle('active')
    toggleButton();
})



// Bonus: Creating a Smart Navbar

let previousScrolledPosition = 0;

const isScrollingDown = function () {
    let currentScrolledPosition = window.pageYOffset || window.scrollY;
    let scrollingDown;

    if (currentScrolledPosition > previousScrolledPosition) {
        scrollingDown = true;
    } else {
        scrollingDown = false;
    }
    currentScrolledPosition = previousScrolledPosition;
    return scrollingDown;
}

const nav = document.querySelector('nav');

const handleNavScroll = function () {
    if (isScrollingDown()) {
        nav.classList.add('scroll-down');
        nav.classList.remove('scroll-up');
    } else {
        nav.classList.add('scroll-up');
        nav.classList.remove('scroll-down')
    }
}