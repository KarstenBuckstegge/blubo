const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.globalCompositeOperation = 'multiply';

const background = new Image();
background.onload = () => {
    console.log('BG!');
    ctx.drawImage(background, 0, 0, 60, 60);
}
background.src = './static/background.jpg';

const blubo = new Image();
blubo.onload = () => {
    console.log('IMG!');
    ctx.drawImage(blubo, 30, 30, 60, 60);
}
blubo.src = './static/elephant.png';