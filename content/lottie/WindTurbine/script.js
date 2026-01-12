var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'), // Required
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation.json' // Path to your Lottie JSON file
});