const sitePreference=document.documentElement.getAttribute("data-default-appearance"),userPreference=localStorage.getItem("appearance");(sitePreference==="dark"&&userPreference===null||userPreference==="dark")&&document.documentElement.classList.add("dark"),document.documentElement.getAttribute("data-auto-appearance")==="true"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&userPreference!=="light"&&document.documentElement.classList.add("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{e.matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}));var updateMeta,updateLogo,getTargetAppearance,updateMermaidTheme=()=>{if(typeof mermaid!="undefined"){const e=document.documentElement.classList.contains("dark"),t=document.querySelectorAll("pre.mermaid");t.forEach(e=>{e.getAttribute("data-processed")?(e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-graph")):e.setAttribute("data-graph",e.textContent)}),e?(initMermaidDark(),mermaid.run()):(initMermaidLight(),mermaid.run())}};window.addEventListener("DOMContentLoaded",e=>{const t=document.getElementById("appearance-switcher"),n=document.getElementById("appearance-switcher-mobile");updateMeta(),this.updateLogo?.(getTargetAppearance()),updateMermaidTheme(),t&&(t.addEventListener("click",()=>{document.documentElement.classList.toggle("dark");var e=getTargetAppearance();localStorage.setItem("appearance",e),updateMeta(),updateMermaidTheme(),this.updateLogo?.(e)}),t.addEventListener("contextmenu",e=>{e.preventDefault(),localStorage.removeItem("appearance")})),n&&(n.addEventListener("click",()=>{document.documentElement.classList.toggle("dark");var e=getTargetAppearance();localStorage.setItem("appearance",e),updateMeta(),updateMermaidTheme(),this.updateLogo?.(e)}),n.addEventListener("contextmenu",e=>{e.preventDefault(),localStorage.removeItem("appearance")}))}),updateMeta=()=>{var e=document.querySelector("body"),t=getComputedStyle(e);document.querySelector('meta[name="theme-color"]').setAttribute("content",t.backgroundColor)},updateLogo=e=>{var t=document.querySelectorAll("img.logo"),n=document.querySelectorAll("span.logo");targetLogoPath=e=="light"?"/img/Logo_Y.svg":"/img/Logo_Y.svg";for(const e of t)e.setAttribute("src",targetLogoPath);targetContent=e=="light"?`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="1000mm"
   height="1000mm"
   viewBox="0 0 1000 1000"
   version="1.1"
   id="svg1"
   inkscape:version="1.4.2 (f4327f4, 2025-05-13)"
   sodipodi:docname="Text_Logo - Y.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showguides="true"
     inkscape:zoom="0.08838835"
     inkscape:cx="169.70562"
     inkscape:cy="1052.1749"
     inkscape:window-width="1920"
     inkscape:window-height="986"
     inkscape:window-x="-11"
     inkscape:window-y="1609"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs1" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <g
       id="g4"
       transform="matrix(3.7030488,0,0,3.7030488,-1147.3886,-1572.4926)"
       style="fill:#00ffcc;stroke:#00ffcc;stroke-opacity:1">
      <path
         d="m 444.86938,469.8444 v -33.96859 l -85.05777,50.1096 9.1678,28.5679 z"
         style="fill:#00ffcc;stroke:#00ffcc;stroke-width:0.1;stroke-linecap:square;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1"
         id="path5-1-2-2-8-0" />
      <path
         d="m 444.87784,469.80108 v -33.96883 l 85.05774,50.10963 -9.16777,28.56787 z"
         style="fill:#00ffcc;stroke:#00ffcc;stroke-width:0.1;stroke-linecap:square;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1"
         id="path5-4-6-7-7-9-6" />
    </g>
    <text
       xml:space="preserve"
       style="font-weight:600;font-size:146.954px;line-height:1.2;font-family:Inter;-inkscape-font-specification:'Inter Semi-Bold';text-align:center;letter-spacing:7.9375px;writing-mode:lr-tb;direction:ltr;text-anchor:middle;fill:#00aad4;stroke-width:0.1;stroke-linecap:square;stroke-miterlimit:0"
       x="97.366669"
       y="569.3833"
       id="text1"><tspan
         sodipodi:role="line"
         id="tspan1"
         style="stroke-width:0.1"
         x="97.366669"
         y="569.3833" /></text>
    <g
       id="g5"
       transform="translate(-17.862673)">
      <rect
         style="fill:#5555ff;stroke-width:0.419616;stroke-linecap:square;stroke-miterlimit:0"
         id="rect4-1"
         width="74.207397"
         height="346.30115"
         x="96.945602"
         y="462.43607"
         transform="rotate(-30.486801)" />
      <rect
         style="fill:#5555ff;stroke-width:0.5793;stroke-linecap:square;stroke-miterlimit:0"
         id="rect4-8"
         width="74.207397"
         height="660.02338"
         x="721.9613"
         y="-62.417091"
         transform="rotate(30.518089)" />
    </g>
  </g>
</svg>
`:`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="1000mm"
   height="1000mm"
   viewBox="0 0 1000 1000"
   version="1.1"
   id="svg1"
   inkscape:version="1.4.2 (f4327f4, 2025-05-13)"
   sodipodi:docname="Text_Logo - Y.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showguides="true"
     inkscape:zoom="0.08838835"
     inkscape:cx="169.70562"
     inkscape:cy="1052.1749"
     inkscape:window-width="1920"
     inkscape:window-height="986"
     inkscape:window-x="-11"
     inkscape:window-y="1609"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs1" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <g
       id="g4"
       transform="matrix(3.7030488,0,0,3.7030488,-1147.3886,-1572.4926)"
       style="fill:#00ffcc;stroke:#00ffcc;stroke-opacity:1">
      <path
         d="m 444.86938,469.8444 v -33.96859 l -85.05777,50.1096 9.1678,28.5679 z"
         style="fill:#00ffcc;stroke:#00ffcc;stroke-width:0.1;stroke-linecap:square;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1"
         id="path5-1-2-2-8-0" />
      <path
         d="m 444.87784,469.80108 v -33.96883 l 85.05774,50.10963 -9.16777,28.56787 z"
         style="fill:#00ffcc;stroke:#00ffcc;stroke-width:0.1;stroke-linecap:square;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1"
         id="path5-4-6-7-7-9-6" />
    </g>
    <text
       xml:space="preserve"
       style="font-weight:600;font-size:146.954px;line-height:1.2;font-family:Inter;-inkscape-font-specification:'Inter Semi-Bold';text-align:center;letter-spacing:7.9375px;writing-mode:lr-tb;direction:ltr;text-anchor:middle;fill:#00aad4;stroke-width:0.1;stroke-linecap:square;stroke-miterlimit:0"
       x="97.366669"
       y="569.3833"
       id="text1"><tspan
         sodipodi:role="line"
         id="tspan1"
         style="stroke-width:0.1"
         x="97.366669"
         y="569.3833" /></text>
    <g
       id="g5"
       transform="translate(-17.862673)">
      <rect
         style="fill:#5555ff;stroke-width:0.419616;stroke-linecap:square;stroke-miterlimit:0"
         id="rect4-1"
         width="74.207397"
         height="346.30115"
         x="96.945602"
         y="462.43607"
         transform="rotate(-30.486801)" />
      <rect
         style="fill:#5555ff;stroke-width:0.5793;stroke-linecap:square;stroke-miterlimit:0"
         id="rect4-8"
         width="74.207397"
         height="660.02338"
         x="721.9613"
         y="-62.417091"
         transform="rotate(30.518089)" />
    </g>
  </g>
</svg>
`;for(const e of n)e.innerHTML=targetContent},getTargetAppearance=()=>document.documentElement.classList.contains("dark")?"dark":"light",window.addEventListener("DOMContentLoaded",e=>{const t=document.getElementById("top-scroller"),n=document.getElementById("site-footer");t&&n&&t.getBoundingClientRect().top>n.getBoundingClientRect().top&&(t.hidden=!0)})