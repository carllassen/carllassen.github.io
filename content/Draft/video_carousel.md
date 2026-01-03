hi
<div class="home_hero-visual-container">
<style>
    /* Embla + video poster styles (minimal, copy to site CSS if desired) */
    #emblaHero { padding:1.5rem 0; }
    .embla__container{display:flex;gap:1rem;overflow:hidden}
    .embla__slide{min-width:100%;box-sizing:border-box;position:relative;border-radius:10px;overflow:hidden;background:#000}
    .video-poster{position:relative;width:100%;height:0;padding-bottom:56.25%;background:#000;display:flex;align-items:center;justify-content:center}
    .video-poster img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
    .play-btn{position:relative;z-index:2;width:72px;height:72px;border-radius:50%;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 6px 18px rgba(0,0,0,.35)}
    .play-btn:after{content:'';border-style:solid;border-width:12px 0 12px 20px;border-color:transparent transparent transparent #fff;margin-left:4px;display:inline-block}
    .embla__dots-wrapper{margin-top:1rem;text-align:center}
    .embla__dots{display:inline-flex;gap:.5rem;padding:.25rem .5rem;background:rgba(255,255,255,.04);border-radius:999px}
    .embla__dot{padding:.4rem .7rem;border-radius:999px;cursor:pointer;opacity:.7;user-select:none}
    .embla__dot.is-active{opacity:1;background:linear-gradient(90deg,#2b6cb0,#805ad5);color:#fff}
    .iframe-fill{position:absolute;inset:0;border:0;width:100%;height:100%}
  </style>

  <div id="emblaHero" class="embla" data-embla>
    <div class="embla__container">
      <!-- Slide 1 -->
      <div class="embla__slide">
        <div class="video-poster" data-video-id="F6NW0QeKLZA">
          <!-- poster image file should live next to this index.md in assets/ -->
            <img src="assets/airborne-poster-1.png" alt="Airborne video 2 poster">
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="embla__slide">
        <div class="" data-video-id="">
          <img src="content/assets/airborne-poster-2.png" alt="Airborne video 2 poster">
          <div class="play-btn" title="Play video"></div>
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="embla__slide">
        <div class="video-poster" data-video-id="koMuF4o4BCk">
          <img src="content/assets/airborne-poster-3.png" alt="Airborne video 3 poster">
          <div class="play-btn" title="Play video"></div>
        </div>
      </div>
    </div>
    <div class="embla__dots-wrapper">
      <div class="embla__dots" aria-hidden="false">
        <div class="embla__dot">Install</div>
        <div class="embla__dot">Preview</div>
        <div class="embla__dot">Publish</div>
      </div>
    </div>
  </div>

  <script type="module">
    import EmblaCarousel  from 'https://cdn.jsdelivr.net/npm/embla-carousel@7.1.0/embla-carousel.esm.js';
    // initialize Embla
    const root = document.querySelector('#emblaHero');
    if (root) {
      const embla = EmblaCarousel(root, { loop: true, align: 'center', draggable: true, speed: 10 });
      // dots
      const dots = Array.from(root.querySelectorAll('.embla__dot'));
      dots.forEach((dot, i) => dot.addEventListener('click', () => embla.scrollTo(i)));
      function syncDots(){ const i = embla.selectedScrollSnap(); dots.forEach((d, idx)=> d.classList.toggle('is-active', idx===i)); }
      embla.on('select', syncDots); setTimeout(syncDots,100);

      // poster -> iframe logic (click poster to load YouTube iframe, autoplay muted)
      root.querySelectorAll('.video-poster').forEach((posterWrapper, idx)=>{
        const playBtn = posterWrapper.querySelector('.play-btn');
        const loadIframe = ()=>{
          if (posterWrapper.querySelector('iframe')) return;
          const ytId = posterWrapper.dataset.videoId?.trim();
          if (!ytId) return;
          const iframe = document.createElement('iframe');
          iframe.className = 'iframe-fill';
          iframe.allow = 'autoplay; fullscreen; picture-in-picture';
          // autoplay=1&mute=1 to allow autoplay; adjust params as needed
          iframe.src = `https://www.youtube.com/embed/${ytId}?rel=0&playsinline=1&autoplay=1&mute=1`;
          posterWrapper.appendChild(iframe);
        };
        // click the poster or play button
        posterWrapper.addEventListener('click', ()=> loadIframe());
        playBtn?.addEventListener('click', (e)=>{ e.stopPropagation(); loadIframe(); });
        // pause other iframes when slide changes
        embla.on('select', ()=> {
          // unload iframe on non-active slides to stop playback and free resources
          const active = embla.selectedScrollSnap();
          const slideIndex = idx;
          if (slideIndex !== active) {
            const ifr = posterWrapper.querySelector('iframe');
            if (ifr) ifr.remove();
          }
        });
      });
    }
  </script>
</div>