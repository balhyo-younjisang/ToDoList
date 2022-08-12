const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenBackgroundImage = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = `${chosenBackgroundImage}`;

document.body.style.background = `url(${bgImage}) no-repeat`;
document.body.style.backgroundSize = "cover";
