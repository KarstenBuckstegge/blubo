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

const disablePaypalButton = () => {
    const paypalButton = document.querySelector('#ppplus_continueButton');
    paypalButton.setAttribute('disabled', true);

    const warningMessage = document.querySelector('.buy__payment__warning');
    warningMessage.classList.remove('hidden');
}

const enablePaypalButton = () => {
    const paypalButton = document.querySelector('#ppplus_continueButton');
    paypalButton.removeAttribute('disabled');

    const warningMessage = document.querySelector('.buy__payment__warning');
    warningMessage.classList.add('hidden');
}

const paypalIframeLoaded = () => {
    const loadingIndicator = document.querySelector('.js__buy__payment__loading');
    loadingIndicator.classList.add('hidden');

    const paypalContainer = document.querySelector('#ppplus');
    paypalContainer.classList.add('buy__payment__ppp__loaded');
}

const initPaypal = () => {
    fetch('https://28lysztg6d.execute-api.eu-west-1.amazonaws.com/dev/get-approval-url').then(
        async (body) => {
            const approvalUrl = await body.json();

            window.ppp = PAYPAL.apps.PPP({
                'approvalUrl': approvalUrl,
                'buttonLocation': 'outside',
                'disableContinue': disablePaypalButton,
                'enableContinue': enablePaypalButton,
                'country': 'DE',
                'mode': 'sandbox',
                'onLoad': paypalIframeLoaded,
                'placeholder': 'ppplus',
                'styles': {
                    "psp": {
                        "font-family": ["Helvetica", "sans-serif"],
                        "font-size": "16px",
                        "color": "#4255a2"
                    }
                }
            });
        });
}

initPaypal();