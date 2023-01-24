const images = ["00.jpg", "01.jpg", "02.jpg"];

const todaysPic = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement(`img`);
bgImage.classList.add("background")



bgImage.src = `img/${todaysPic}`;


document.body.appendChild(bgImage);
