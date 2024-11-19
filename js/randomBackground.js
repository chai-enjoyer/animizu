window.addEventListener('load', function() {
    function changeBackground() {

        const title = document.body.className;

        const backgrounds = [
            `../images/${title}/bg_1.png`,
            `../images/${title}/bg_2.png`,
            `../images/${title}/bg_3.png`,
            `../images/${title}/bg_4.png`,
            `../images/${title}/bg_5.png`,
            `../images/${title}/bg_6.png`
        ];

        const randomIndex = Math.floor(Math.random() * backgrounds.length);

        const featuredContent = document.querySelector('.featured-content');
        featuredContent.style.transition = 'background-image 1s ease-in-out';
        featuredContent.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515), url(${backgrounds[randomIndex]})`;
    }


    setInterval(changeBackground, 5000);

    changeBackground();
});

