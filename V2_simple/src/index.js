import animateScrollTo from 'animated-scroll-to';

const scrollToAnchor = (e) => {
    e.preventDefault();
    const target = e.currentTarget;

    const scrollTargetName = target.getAttribute('href');

    const scrollTarget = document.querySelector(scrollTargetName);

    animateScrollTo(scrollTarget);
}

const navItems = document.querySelectorAll('.js__navigation__item');
navItems.forEach(navItem => {
    navItem.addEventListener('click', scrollToAnchor);
});