import animateScrollTo from 'animated-scroll-to';

const scrollToAnchor = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const scrollTargetName = target.getAttribute('href');
    const scrollTarget = document.querySelector(scrollTargetName);

    animateScrollTo(scrollTarget);

    // toggle mobile menu
    const menuToggleCheckbox = document.querySelector('#navigation__toggle');
    menuToggleCheckbox.checked = false;
}

const navItems = document.querySelectorAll('.js__navigation__item');
navItems.forEach(navItem => {
    navItem.addEventListener('click', scrollToAnchor);
});

const initPaypal = () => {
    fetch('https://28lysztg6d.execute-api.eu-west-1.amazonaws.com/dev/get-approval-url').then(
        async (body) => {
        const approvalUrl = await body.json();

        PAYPAL.apps.PPP({
            'approvalUrl': approvalUrl,
            'placeholder': 'ppplus',
            'mode': 'sandbox',
            'country': 'DE'
        });
    });
}

initPaypal();