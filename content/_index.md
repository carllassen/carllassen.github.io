<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Two Animations + Text</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: #002544;
            color: #f2f2f2;
        }
 /* 🌟 Video Header */
        .video-header {
            position: relative;
            width: 100%;
            height: 50vh; /* height of your video section */
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: #01293f
        }
        .video-header video {
            position: fixed;
            top: -60;
            left: 0;
            width: 100%;
            height: 140vh;
            object-fit: cover;
            z-index: -1; /* behind the text */
        }
        .video-header .header-text {
            position: relative;
            z-index: 1;
            font-size: 3rem;
            font-weight: bold;
            padding: 0 20px;
            color: #f2f2f2;
        }
        .section {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 20px;
            width: 100%;
        }
        .section:nth-child(even) {
            background: #06151d; /* alternating section background if desired */
        }
        .section:nth-child(odd) {
            background: #01293f; /* solid background */
            position: relative;  /* ensures it appears above the fixed video */
    z-index: 1;          /* puts the section over the video */
}
        .text-block {
            padding-left: 3%;
            padding-right: 3%;
            flex: 1;
            font-size: 2rem;
            font-weight: bold;
            text-align: left;
        }
        .anim-block {
            flex: 1;
            max-width: 500px;
            width: 100%;
        }
        /* Responsive stacking */
        @media (max-width: 768px) {
            .section {
                flex-direction: column;
                text-align: center;
            }
            .text-block {
                font-size: 1.6rem;
            }
        }
    </style>
</head>

<body>
           <!-- 🎥 Video Header -->
    <div class="video-header">
        <div class="header-text">
            AWE will change the game for wind energy
        </div>
    </div>
    <!-- Section 1 -->
    <div class="section">
        <div class="anim-block" id="anim2"></div>
        <div class="text-block">
            <strong>Only the outer third</strong> of the wings contribute to 80% of energy production. 
        </div>
    </div>
    <!-- Section 2 -->
    <div class="section">
        <div class="anim-block" id="anim1"></div>
        <div class="text-block">
            AWE only moves in the efficient area and uses
            <strong>10x fewer materials</strong>
        </div>
    </div>
    <!-- Section 3 -->
    <div class="section">
        <div class="anim-block" id="anim3"></div>
        <div class="text-block">
            Cheaper transportation and installation equals
            <strong>3x faster Return of Investment</strong>
        </div>
    </div>
        <!-- Section 4 -->
    <div class="section">
        <div class="anim-block" id="anim4"></div>
        <div class="text-block">
            Operating at greater altitudes with more wind 
            <strong>increases full load hours by 60%</strong>
        </div>
    </div>
    <div class="section">
        <div class="text-block">
            <h4>The existing AWE technology can mainly be divided into four groups. 
There are rigid versus flexible and ground-gen versus fly-gen. 
<br><br>The flexible kite type is cheaper to produce and can survive crashes, but it has lower 
aerodynamics. 
<br><br>The fixed kite type has higher aerodynamics, and a longer 
lifetime as long as it does not collide with anything.
<br><br> Fly-gen kite generates energy in the air with propellers and is theoretically more efficient than ground-gen, but it is also riskier because the 
expensive equipment is flying around in the air. </h4>
        </div>
    </div>
    <!-- Lottie Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"></script>
    <script>
        // Animation 1
        lottie.loadAnimation({
            container: document.getElementById('anim1'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'lottie/animation1.json'
        });
        // Animation 2
        lottie.loadAnimation({
            container: document.getElementById('anim2'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'lottie/animation2.json'
        });
        // Truck Animation
        lottie.loadAnimation({
            container: document.getElementById('anim3'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'lottie/Truck.json'
        });
        // Altitude Animation
        lottie.loadAnimation({
            container: document.getElementById('anim4'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'lottie/Altitude.json'
        });
    </script>
    </script>
</body>
</html>







