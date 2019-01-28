const splashCanvas = document.querySelector('.splashes');
let splashCanvasWidth = 1;
let splashCanvasHeight = 1;

const splashCount = 0;
const splashCountMax = 30;

const colors = ['lightblue', 'yellow', 'tomato', 'lightgreen'];

splashCanvas.addEventListener('click', (e) => {
    const clickCenterX = e.clientX;
    const clickCenterY = e.clientY;

    const randomColor = colors[Math.floor(Math.random() * 4)];

    const splashElement = document.createElement('div');
    splashElement.className += `splash splash${splashCount + 1}`;
    splashElement.setAttribute(
        'style',
        `transform: translate(${clickCenterX}px, ${clickCenterY}px) scale(0);
         background: radial-gradient(ellipse at center, ${randomColor}, transparent 70%);
        `
    );

    setTimeout(() => {
        splashElement.setAttribute(
            'style',
            `transform: translate(${clickCenterX}px, ${clickCenterY}px) scale(${Math.random() + 0.5});
             background: radial-gradient(ellipse at center, ${randomColor}, transparent 70%);
            `
        );
    }, 100);

    splashCanvas.prepend(splashElement);
});


const getSplashCanvasDimensions = () => {
    const splashCanvasRect = splashCanvas.getBoundingClientRect();
    splashCanvasHeight = splashCanvasRect.height;
    splashCanvasWidth = splashCanvasRect.width;
};

getSplashCanvasDimensions();