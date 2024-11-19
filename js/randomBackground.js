// List of images for the background
const backgrounds = [
    '../images/Bleach/tybw_1.png',
    '../images/Bleach/tybw_2.png',
    '../images/Bleach/tybw_3.png',
    '../images/Bleach/tybw_4.png',
    '../images/Bleach/tybw_5.png',
    '../images/Bleach/tybw_6.png'
];

// Function to change background randomly
function changeBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const featuredContent = document.querySelector('.featured-content');
    featuredContent.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515), url(${backgrounds[randomIndex]})`;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Initial background change on page load
changeBackground();

