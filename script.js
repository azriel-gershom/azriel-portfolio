/* ============================
   KILLIAN HERZER PORTFOLIO — EXACT CLONE
   JavaScript - All interactions
   ============================ */

// --- PROJECT DATA (from original site) ---
const PROJECTS = [
    { id:"01", title:"Célia", type:"Expérience 3D", tags:["Narration","3D","WebGL","Expérience"], cadre:"Scolaire", isEcole:true, client:"Gobelins", duree:"3 mois", date:"Juin 2025", stack:["React","Three.js","GSAP","React three/drei/fiber","Zustand","Theatre.js","Howler.js"], intro:"\"Célia\" est une expérience narrative immersive sensibilisant à l'impact environnemental du numérique.", description:"\"Célia\" est une expérience narrative immersive sensibilisant à l'impact environnemental du numérique. L'utilisateur incarne un photographe animalier cherchant un vison d'Europe dans une forêt, découvrant progressivement la face cachée des datacenters.", contexte:"Réalisé en partenariat avec La Quadrature du Net, ce projet visait à vulgariser la pollution numérique non par la morale, mais par l'émotion et la poésie.", role:"En collaboration étroite avec l'autre développeur du projet, Valentin Gassend, et les designers, j'ai pris en charge plusieurs aspects techniques clés de l'expérience.", img:"https://killianherzer.com/uploads/1765236356700.webp", inner1:"https://killianherzer.com/api/uploads/1768307767856.webp", inner2:"https://killianherzer.com/api/uploads/1768307750175.webp", link:"https://webgl-c4d-celia.gobelinsannecy.fr/", credits:["Killian Herzer — Développeur","Valentin Gassend — Développeur","Louise Music — Designer","La Quadrature du Net — Partenaire"], usefulLinks:[{label:"Voir le site",url:"https://webgl-c4d-celia.gobelinsannecy.fr/"}], gallery:["https://killianherzer.com/api/uploads/1768307767856.webp","https://killianherzer.com/api/uploads/1768307750175.webp","https://killianherzer.com/api/uploads/1768307834690.webp","https://killianherzer.com/api/uploads/1768307841815.webp","https://killianherzer.com/api/uploads/1768307846628.webp","https://killianherzer.com/api/uploads/1768307860071.webp","https://killianherzer.com/api/uploads/1768307864431.webp","https://killianherzer.com/api/uploads/1768307867840.webp","https://killianherzer.com/api/uploads/1768307872125.webp","https://killianherzer.com/api/uploads/1768307881684.webp","https://killianherzer.com/api/uploads/1768420054960.webp","https://killianherzer.com/api/uploads/1768420059264.webp","https://killianherzer.com/api/uploads/1768420063435.webp","https://killianherzer.com/api/uploads/1768420067175.webp","https://killianherzer.com/api/uploads/1768420070554.webp","https://killianherzer.com/api/uploads/1768420076623.webp"] },
    { id:"02", title:"J. Pancras", type:"Portfolio", tags:["Vitrine","Interactif","Refonte","Portfolio"], cadre:"Professionnel", isEcole:false, client:"Genesii", duree:"1,5 semaine", date:"2025", stack:["React","Next.js","TypeScript","Tailwind CSS","GSAP"], intro:"Cette refonte complète a transformé le portfolio du photographe Jeremy Pancras en une expérience immersive.", description:"Cette refonte complète a transformé le portfolio du photographe Jeremy Pancras en une expérience immersive. Le site met en valeur son travail via un design épuré, des animations fluides et de nombreuses micro-interactions.", contexte:"Le site existant étant techniquement instable et daté, l'objectif était double : assurer la pérennité technique et offrir un écrin visuel à la hauteur des productions de l'artiste.", role:"Mon rôle a couvert toutes les étapes, depuis l'audit technique de l'ancien site pour évaluer la charge de travail et définir un plan d'action.", img:"https://killianherzer.com/api/uploads/1768418982533.webp", inner1:"https://killianherzer.com/api/uploads/1768419016009.webp", inner2:"https://killianherzer.com/api/uploads/1768419007994.webp", link:"http://jeremypancras.com/", credits:["Killian Herzer — Développeur","Genesii — Direction","Jeremy Pancras — Photographe"], usefulLinks:[{label:"jeremypancras.com",url:"http://jeremypancras.com/"}], gallery:["https://killianherzer.com/api/uploads/1768419016009.webp","https://killianherzer.com/api/uploads/1768419007994.webp","https://killianherzer.com/api/uploads/1768420216219.webp","https://killianherzer.com/api/uploads/1768420222575.webp","https://killianherzer.com/api/uploads/1768420227802.webp","https://killianherzer.com/api/uploads/1768420232407.webp","https://killianherzer.com/api/uploads/1768420194374.webp","https://killianherzer.com/api/uploads/1768420237304.webp","https://killianherzer.com/api/uploads/1768420240403.webp","https://killianherzer.com/api/uploads/1768463257229.webp"] },
    { id:"03", title:"Voeux 2026", type:"Expérience 3D", tags:["3D","WebGL","Gamification","Sound Design"], cadre:"Professionnel", isEcole:false, client:"Genesii", duree:"3 jours", date:"Janvier 2026", stack:["JavaScript","Three.js","WebGL","HTML/CSS","Web Audio API"], intro:"Une expérience web 3D interactive et ludique conçue pour présenter les vœux 2026 de l'agence digitale Genesii.", description:"Dans cette expérience immersive, l'utilisateur se retrouve dans un hangar virtuel avec pour mission d'assembler le véhicule d'intervention de l'agence.", contexte:"Ce projet est né d'un défi interne : 'carte blanche' sur 3 jours pour créer les vœux de l'agence.", role:"J'ai piloté ce projet en autonomie complète de A à Z.", img:"https://killianherzer.com/api/uploads/1768465381784.webp", inner1:"https://killianherzer.com/api/uploads/1768465375850.webp", inner2:"https://killianherzer.com/api/uploads/1768465381784.webp", link:"https://voeux.genesii.fr/", credits:["Killian Herzer — Développeur & Créateur"], usefulLinks:[{label:"voeux.genesii.fr",url:"https://voeux.genesii.fr/"}], gallery:["https://killianherzer.com/api/uploads/1768465375850.webp","https://killianherzer.com/api/uploads/1768465381784.webp","https://killianherzer.com/api/uploads/1768465388508.webp","https://killianherzer.com/api/uploads/1768465558026.webp","https://killianherzer.com/api/uploads/1768465406091.webp","https://killianherzer.com/api/uploads/1768466471759.webp"] },
    { id:"04", title:"Ciao", type:"Site vitrine", tags:["Bar","Restaurant","Vitrine"], cadre:"Professionnel", isEcole:false, client:"Genesii", duree:"1 semaine", date:"2025", stack:["WordPress","JavaScript","PHP","GSAP"], intro:"Le site du bar \"Ciao\" est une expérience web immersive retranscrivant l'ambiance vivante de l'établissement.", description:"Le site du bar \"Ciao\" est une expérience web immersive retranscrivant l'ambiance vivante de l'établissement via un design riche en animations.", contexte:"Réalisé pour l'entreprise Genesii, l'enjeu était de dépasser le site vitrine classique pour traduire la direction artistique du bar en une expérience numérique énergique et mémorable.", role:"Mon rôle a couvert l'intégralité de la chaîne de production.", img:"https://killianherzer.com/api/uploads/1770797708499.webp", inner1:"https://killianherzer.com/api/uploads/1768315220662.webp", inner2:"https://killianherzer.com/api/uploads/1768315225920.webp", link:"https://ciao-annecy.fr/", credits:["Killian Herzer — Développeur","Genesii — Direction & Design"], usefulLinks:[{label:"ciao-annecy.fr",url:"https://ciao-annecy.fr/"}], gallery:["https://killianherzer.com/api/uploads/1768315220662.webp","https://killianherzer.com/api/uploads/1768315225920.webp","https://killianherzer.com/api/uploads/1768315235066.webp","https://killianherzer.com/api/uploads/1768315240628.webp","https://killianherzer.com/api/uploads/1768315245476.webp","https://killianherzer.com/api/uploads/1768315263178.webp","https://killianherzer.com/api/uploads/1768315269441.webp","https://killianherzer.com/api/uploads/1768315277127.webp","https://killianherzer.com/api/uploads/1768315281162.webp","https://killianherzer.com/api/uploads/1768315284892.webp"] },
    { id:"05", title:"H.A.N.D.S.", type:"Expérience interactive", tags:["Webcam","Canvas 2D","Interactif","Expérimentation"], cadre:"Expérimentation", isEcole:false, client:"/", duree:"3 jours", date:"2025", stack:["JavaScript","MediaPipe Hands","TensorFlow.js"], intro:"\"H.A.N.D.S.\" est une expérience web interactive qui permet de contrôler une interface futuriste uniquement par les gestes de la main.", description:"\"H.A.N.D.S.\" est une expérience web interactive qui permet de contrôler une interface futuriste uniquement par les gestes de la main, capturés via la webcam.", contexte:"Ce projet personnel visait à explorer des interactions homme-machine alternatives.", role:"J'ai réalisé ce projet de A à Z.", img:"https://killianherzer.com/uploads/1765238806060.webp", inner1:"https://killianherzer.com/uploads/1765274796645.webp", inner2:"https://killianherzer.com/uploads/1765274796645.webp", link:"https://handtracking.killianherzer.com/", credits:["Killian Herzer — Créateur"], usefulLinks:[{label:"handtracking.killianherzer.com",url:"https://handtracking.killianherzer.com/"}], gallery:["https://killianherzer.com/uploads/1765274796645.webp","https://killianherzer.com/api/uploads/1768470113405.webp","https://killianherzer.com/api/uploads/1769682646853.webp"] },
    { id:"06", title:"Apogée", type:"Expérience 3D", tags:["Web App","Jeu","Expérimentation"], cadre:"Personnel", isEcole:false, client:"/", duree:"3 semaines", date:"2025", stack:["React","Three.js","React Three/fiber","React Three/drei","Vite"], intro:"\"Apogée\" est un jeu de stratégie et de gestion en 3D jouable dans le navigateur.", description:"\"Apogée\" est un jeu de stratégie et de gestion en 3D jouable dans le navigateur, où le joueur étend sa civilisation sur une carte hexagonale.", contexte:"Développé pour démontrer mes compétences en applications web complexes.", role:"J'ai mené ce projet de bout en bout.", img:"https://killianherzer.com/uploads/1765236775820.webp", inner1:"https://killianherzer.com/api/uploads/1769553836829.webp", inner2:"https://killianherzer.com/api/uploads/1769553851349.webp", link:"https://apogee.killianherzer.com/", credits:["Killian Herzer — Créateur"], usefulLinks:[{label:"apogee.killianherzer.com",url:"https://apogee.killianherzer.com/"}], gallery:["https://killianherzer.com/api/uploads/1769553836829.webp","https://killianherzer.com/api/uploads/1769553851349.webp","https://killianherzer.com/api/uploads/1769553666900.webp","https://killianherzer.com/api/uploads/1769553714905.webp","https://killianherzer.com/api/uploads/1769553724840.webp","https://killianherzer.com/api/uploads/1769553732979.webp","https://killianherzer.com/api/uploads/1769553743902.webp","https://killianherzer.com/api/uploads/1769553751739.webp","https://killianherzer.com/api/uploads/1769553759246.webp","https://killianherzer.com/api/uploads/1769553764345.webp"] },
    { id:"07", title:"K. Herzer", type:"Portfolio", tags:["Portfolio","3D","Expérience"], cadre:"Personnel", isEcole:false, client:"Killian Herzer", duree:"2 mois", date:"2026", stack:["React","Next.js","Three.js","WebGL","React Fiber/Drei","GSAP","Tailwind CSS","Zustand","Ably"], intro:"Mon portfolio personnel conçu comme une double expérience.", description:"Mon portfolio personnel conçu comme une double expérience : une interface web rapide pour l'accès à l'information, et une immersion 3D dans un bureau d'enquêteur.", contexte:"Au-delà de la simple vitrine, je voulais démontrer ma capacité à produire du Three.js de qualité sous une contrainte de temps serrée.", role:"J'ai réalisé ce projet de A à Z.", img:"https://killianherzer.com/api/uploads/1770235495522.webp", inner1:"https://killianherzer.com/api/uploads/1770235501000.webp", inner2:"https://killianherzer.com/api/uploads/1770752273853.webp", link:"https://killianherzer.com", credits:["Killian Herzer — Développeur & Designer"], usefulLinks:[{label:"killianherzer.com",url:"https://killianherzer.com"}], gallery:["https://killianherzer.com/api/uploads/1770235501000.webp","https://killianherzer.com/api/uploads/1770752273853.webp","https://killianherzer.com/api/uploads/1770235512841.webp","https://killianherzer.com/api/uploads/1770752284244.webp","https://killianherzer.com/api/uploads/1770235518333.webp","https://killianherzer.com/api/uploads/1770752295069.webp","https://killianherzer.com/api/uploads/1770235694079.webp","https://killianherzer.com/api/uploads/1770752306439.webp","https://killianherzer.com/api/uploads/1770752313187.webp","https://killianherzer.com/api/uploads/1770752316991.webp"] },
    { id:"08", title:"HUMAN?", type:"Expérience interactive", tags:["React","Fun","UX","Expérimentation"], cadre:"Personnel", isEcole:false, client:"/", duree:"En continu", date:"2024", stack:["React","SCSS","Vite","GSAP"], intro:"Un projet un peu absurde né d'un tweet, où je m'amuse à créer les captchas les plus absurdes.", description:"L'idée est venue d'un tweet montrant un meuble en 3D à construire servant de captcha. Je me suis demandé jusqu'où on pouvait pousser le concept de vérification de sécurité en le rendant totalement ridicule.", contexte:"C'est simplement un bac à sable. Je voulais détourner le widget reCAPTCHA que tout le monde déteste pour en faire un terrain de jeu.", role:"J'ai tout fait de A à Z : le template global qui imite le vrai reCAPTCHA et chaque mini-jeu à l'intérieur.", img:"https://killianherzer.com/api/uploads/1770639961896.webp", inner1:"https://killianherzer.com/api/uploads/1770639965841.webp", inner2:"https://killianherzer.com/api/uploads/1770651158191.webp", link:"https://captchas.killianherzer.com/", credits:["Killian Herzer — Créateur"], usefulLinks:[{label:"captchas.killianherzer.com",url:"https://captchas.killianherzer.com/"}], gallery:["https://killianherzer.com/api/uploads/1770639965841.webp","https://killianherzer.com/api/uploads/1770651158191.webp","https://killianherzer.com/api/uploads/1770640209978.webp","https://killianherzer.com/api/uploads/1770651185500.webp","https://killianherzer.com/api/uploads/1770640216528.webp","https://killianherzer.com/api/uploads/1770640227744.webp","https://killianherzer.com/api/uploads/1770640236404.webp","https://killianherzer.com/api/uploads/1770640243942.webp","https://killianherzer.com/api/uploads/1770640319470.webp","https://killianherzer.com/api/uploads/1770640327763.webp","https://killianherzer.com/api/uploads/1770640335228.webp","https://killianherzer.com/api/uploads/1770651215302.webp"] }
];

// ===== TOUCH DETECTION =====
const IS_TOUCH = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
if (IS_TOUCH) document.body.classList.add('is-touch');

// ===== SOUND EFFECTS ENGINE (Real MP3s from original site) =====
const SFX = (() => {
    let enabled = false;
    let thetaCtx = null;
    let thetaSource = null;
    let thetaGain = null;

    // Preload all SFX (same files as original killianherzer.com)
    const sounds = {
        hover:  new Audio('/audio/sfx/hover.mp3'),
        click:  new Audio('/audio/sfx/click.mp3'),
        open:   new Audio('/audio/sfx/open.mp3'),
        close:  new Audio('/audio/sfx/close.mp3'),
        glitch: new Audio('/audio/sfx/glitch.mp3'),
        scan:   new Audio('/audio/sfx/scan.mp3'),
    };

    // Preload all
    Object.values(sounds).forEach(s => { s.preload = 'auto'; s.load(); });

    function enable() {
        if (enabled) return;
        enabled = true;
        // Start ambient theta drone (same as original — very quiet)
        startTheta();
    }

    function play(name, vol = 0.3) {
        if (!enabled) return;
        const s = sounds[name];
        if (!s) return;
        try {
            s.currentTime = 0;
            s.volume = vol;
            s.play().catch(() => {});
        } catch(e) {}
    }

    // --- Public sound methods (matching original trigger points) ---
    function hoverIn()    { play('hover', 0.4); }
    function hoverOut()   { /* original only plays on hover-in */ }
    function click()      { play('click', 0.6); }
    function openPanel()  { play('open', 0.6); }
    function closePanel() { play('close', 0.6); }
    function glitch()     { play('glitch', 0.6); }
    function scanBeep()   { play('scan', 0.35); }
    function navTick()    { play('click', 0.5); }
    function systemReady(){ play('open', 0.5); }

    // --- Theta ambient drone (Web Audio API for looping + fade) ---
    function startTheta() {
        try {
            thetaCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (thetaCtx.state === 'suspended') thetaCtx.resume();

            fetch('/audio/theta.mp3')
                .then(r => r.arrayBuffer())
                .then(buf => thetaCtx.decodeAudioData(buf))
                .then(decoded => {
                    thetaSource = thetaCtx.createBufferSource();
                    thetaGain = thetaCtx.createGain();
                    thetaSource.buffer = decoded;
                    thetaSource.loop = true;
                    thetaGain.gain.setValueAtTime(0, thetaCtx.currentTime);
                    thetaSource.connect(thetaGain);
                    thetaGain.connect(thetaCtx.destination);
                    thetaSource.start(0);
                    // Fade in over 5 seconds — audible ambient loop
                    thetaGain.gain.linearRampToValueAtTime(0.06, thetaCtx.currentTime + 5);
                })
                .catch(() => {});
        } catch(e) {}
    }

    return { enable, play, hoverIn, hoverOut, click, openPanel, closePanel, scanBeep, systemReady, navTick, glitch };
})();

// Enable SFX on first interaction (browser autoplay policy)
document.addEventListener('click', () => SFX.enable(), { once: true });
document.addEventListener('mousemove', () => SFX.enable(), { once: true });

// ===== LENIS SMOOTH SCROLL (same as original site) =====
const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    smoothTouch: false
});

// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
lenis.stop(); // Stop during loader, will start after curtains open

// ===== LOADER =====
(function initLoader() {
    const counter = document.getElementById('loaderCounter');
    const status = document.getElementById('loaderStatus');
    const terminal = document.getElementById('loaderTerminal');
    const matrix = document.getElementById('loaderMatrix');
    const freqNum = document.getElementById('loaderFreqNum');
    const polygraphLine = document.getElementById('polygraphLine');
    const radarCoords = document.getElementById('radarCoords');
    const radarStatus = document.getElementById('radarStatus');

    const logMessages = [
        'INIT_PROTOCOL: v4.2.1',
        'CONNECTING_NODE: 192.168.0.1',
        'HANDSHAKE: RSA-4096',
        'AUTH: TOKEN_VALID',
        'DECRYPT_MODULE: LOADED',
        'CHANNEL: ENCRYPTED_AES-256',
        'SAT_LINK: ESTABLISHING...',
        'LATENCY: 12ms',
        'FIREWALL: PASS',
        'IDENTITY: CONFIRMED',
        'DATABASE_SYNC: OK',
        'RENDERING_ENGINE: ACTIVE',
        'LOADING_SHADERS...',
        'GPU_ALLOCATION: 512MB',
        'BUFFER: READY',
        'ANALYSIS_MODULE: INIT',
        'SCAN_ACTIVE: TRUE',
        'SIGNAL: STRONG',
    ];

    // Populate matrix
    if (matrix) {
        for (let i = 0; i < 16; i++) {
            const cell = document.createElement('div');
            cell.className = 'matrix-cell';
            cell.textContent = Math.random().toString(16).substr(2, 4).toUpperCase();
            matrix.appendChild(cell);
        }
        setInterval(() => {
            const cells = matrix.querySelectorAll('.matrix-cell');
            cells.forEach(c => {
                if (Math.random() > 0.7) c.textContent = Math.random().toString(16).substr(2, 4).toUpperCase();
            });
        }, 300);
    }

    // Freq fluctuation
    if (freqNum) {
        setInterval(() => { freqNum.textContent = (10 + Math.random() * 5).toFixed(1); }, 200);
    }

    // Radar
    if (radarCoords) {
        const coords = ['SAT_LINK: SEARCHING...','SAT_LINK: 48.8566°N','LAT: 48.8566 N','LON: 2.3522 E'];
        let ci = 0;
        setInterval(() => { radarCoords.textContent = coords[ci++ % coords.length]; }, 1500);
    }

    // Terminal log
    let logIdx = 0;
    const logInterval = setInterval(() => {
        if (terminal && logIdx < logMessages.length) {
            const line = document.createElement('div');
            line.className = 'log-line';
            line.textContent = logMessages[logIdx++];
            terminal.appendChild(line);
            SFX.scanBeep();
        }
    }, 200);

    // Polygraph line
    let pathD = 'M0,100';
    const svgW = window.innerWidth;
    const segCount = 60;
    const segW = svgW / segCount;
    let currentSeg = 0;

    function animatePolygraph() {
        if (currentSeg >= segCount) return;
        const y = 80 + (Math.random() * 40 - 20);
        pathD += ` L${currentSeg * segW},${y}`;
        currentSeg++;
        if (polygraphLine) polygraphLine.setAttribute('d', pathD);
        requestAnimationFrame(animatePolygraph);
    }
    animatePolygraph();

    // Counter animation
    let currentValue = 0;
    const targetValue = 100;
    const duration = 3500;
    const startTime = performance.now();

    function animateCounter(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        currentValue = Math.floor(easedProgress * targetValue);

        if (counter) counter.textContent = String(currentValue).padStart(2, '0') + '%';

        // Status updates
        if (status) {
            if (currentValue < 30) status.textContent = 'SIGNAL TRACING...';
            else if (currentValue < 60) { status.textContent = 'DECRYPTING...'; status.style.borderColor = '#555'; }
            else if (currentValue < 90) { status.textContent = 'LOADING DATA...'; status.style.borderColor = '#777'; }
            else { status.textContent = 'ACCESS GRANTED'; status.style.borderColor = 'var(--accent-red)'; status.style.background = 'rgba(255,42,42,0.15)'; }
        }
        if (radarStatus) radarStatus.textContent = currentValue < 80 ? 'ENCRYPTED' : 'DECRYPTED';

        if (progress < 1) {
            requestAnimationFrame(animateCounter);
        } else {
            clearInterval(logInterval);
            setTimeout(openCurtains, 400);
        }
    }
    requestAnimationFrame(animateCounter);

    function openCurtains() {
        const loader = document.getElementById('loader');
        const curtainTop = document.querySelector('.curtain-top');
        const curtainBottom = document.querySelector('.curtain-bottom');

        if (curtainTop) { curtainTop.style.transition = 'transform 1.2s cubic-bezier(.77,0,.18,1)'; curtainTop.style.transform = 'scaleY(0)'; }
        if (curtainBottom) { curtainBottom.style.transition = 'transform 1.2s cubic-bezier(.77,0,.18,1)'; curtainBottom.style.transform = 'scaleY(0)'; }
        SFX.systemReady();

        setTimeout(() => {
            if (loader) { loader.style.transition = 'opacity 0.5s'; loader.style.opacity = '0'; }
            setTimeout(() => {
                if (loader) loader.style.display = 'none';
                document.body.classList.add('is-loaded');
                lenis.start();
                animateHeroIn();
                initScrollReveals();
            }, 500);
        }, 1200);
    }
})();

// ===== HERO ANIMATION =====
function animateHeroIn() {
    const label = document.getElementById('heroLabel');
    const back = document.getElementById('heroBack');
    const front = document.getElementById('heroFront');
    const sub = document.getElementById('heroSub');
    const scanner = document.querySelector('.scanner-line');
    const floats = document.querySelectorAll('.float-item');

    if (label) { setTimeout(() => { label.style.transition = 'all 0.8s cubic-bezier(.19,1,.22,1)'; label.style.opacity = '1'; }, 100); }
    if (back)  { setTimeout(() => { back.style.transition = 'all 1.2s cubic-bezier(.19,1,.22,1)'; back.style.opacity = '1'; back.style.filter = 'blur(0)'; back.style.transform = 'scale(1)'; }, 300); }
    if (front) { setTimeout(() => { front.style.transition = 'all 1.2s cubic-bezier(.19,1,.22,1)'; front.style.opacity = '1'; front.style.filter = 'blur(0)'; front.style.transform = 'scale(1)'; }, 500); }
    if (sub)   { setTimeout(() => { sub.style.transition = 'all 1s cubic-bezier(.19,1,.22,1)'; sub.style.opacity = '1'; sub.style.transform = 'translateY(0)'; }, 800); }
    if (scanner) { setTimeout(() => { scanner.style.opacity = '1'; }, 1000); }

    floats.forEach((f, i) => {
        setTimeout(() => {
            f.style.transition = 'all 1.5s cubic-bezier(.19,1,.22,1)';
            f.style.opacity = '0.8'; f.style.transform = 'scale(1)';
        }, 1200 + i * 200);
    });
}

// ===== SCROLL REVEAL (GSAP-powered) =====
function initScrollReveals() {
    gsap.registerPlugin(ScrollTrigger);

    // Reveal text elements with stagger
    document.querySelectorAll('.reveal-text').forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
                opacity: 1, y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Reveal lines with scale animation
    document.querySelectorAll('.reveal-line').forEach(el => {
        gsap.fromTo(el,
            { scaleX: 0 },
            {
                scaleX: 1,
                duration: 1.2,
                ease: 'power3.inOut',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Contact terminal entrance
    const contactTerminalEl = document.querySelector('.contact-terminal');
    if (contactTerminalEl) {
        gsap.fromTo(contactTerminalEl,
            { opacity: 0, y: 60, scale: 0.95 },
            {
                opacity: 1, y: 0, scale: 1,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: contactTerminalEl,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }

    // Section titles — slide in from left with stagger
    gsap.utils.toArray('.section-header').forEach(header => {
        const children = header.querySelectorAll('.section-title, .section-subtitle, .section-status');
        gsap.fromTo(children,
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Project strips — stagger entrance on scroll
    gsap.fromTo('.slider-container',
        { opacity: 0, y: 40 },
        {
            opacity: 1, y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.slider-container',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );

    // About section — profiler modules slide in
    gsap.utils.toArray('.profiler-module').forEach((mod, i) => {
        gsap.fromTo(mod,
            { opacity: 0, y: 50, scale: 0.97 },
            {
                opacity: 1, y: 0, scale: 1,
                duration: 1,
                delay: i * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: mod,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Tech chips — stagger pop-in
    gsap.utils.toArray('.chips-grid').forEach(grid => {
        const chips = grid.querySelectorAll('.tech-chip');
        if (chips.length === 0) return;
        gsap.fromTo(chips,
            { opacity: 0, scale: 0.8, y: 10 },
            {
                opacity: 1, scale: 1, y: 0,
                duration: 0.5,
                stagger: 0.04,
                ease: 'back.out(1.5)',
                scrollTrigger: {
                    trigger: grid,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Immersive CTA parallax effect
    const ctaBlock = document.querySelector('.immersive-cta');
    if (ctaBlock) {
        gsap.fromTo(ctaBlock,
            { opacity: 0, y: 80 },
            {
                opacity: 1, y: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ctaBlock,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }

    // BG marquee parallax (scrub-based)
    const bgMarquee = document.querySelector('.bg-marquee');
    if (bgMarquee) {
        gsap.to(bgMarquee, {
            x: 200,
            ease: 'none',
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

    // HUD elements subtle parallax
    const hudElements = document.querySelectorAll('.hud-tl, .hud-tr, .hud-bl, .hud-br');
    hudElements.forEach(hud => {
        gsap.to(hud, {
            y: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: '30% top',
                scrub: 1
            }
        });
    });
}

// ===== HUD TIME =====
(function initHudTime() {
    const hudTime = document.getElementById('hudTime');
    if (!hudTime) return;
    function updateTime() {
        const now = new Date();
        const hh = String(now.getHours()).padStart(2, '0');
        const mm = String(now.getMinutes()).padStart(2, '0');
        const ss = String(now.getSeconds()).padStart(2, '0');
        const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
        hudTime.textContent = `${hh}:${mm}:${ss}:${ms}`;
    }
    setInterval(updateTime, 50);
})();

// ===== CUSTOM CURSOR =====
(function initCursor() {
    if (IS_TOUCH) return;

    const cursorMain = document.getElementById('cursorMain');
    const cursorData = document.getElementById('cursorData');
    const cursorTextVal = cursorData?.querySelector('.cursor-text-val');
    let mouseX = 0, mouseY = 0, cx = 0, cy = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
    });

    function animateCursor() {
        cx += (mouseX - cx) * 0.45;
        cy += (mouseY - cy) * 0.45;
        if (cursorMain) { cursorMain.style.left = cx + 'px'; cursorMain.style.top = cy + 'px'; }
        if (cursorData) { cursorData.style.left = cx + 'px'; cursorData.style.top = cy + 'px'; }
        if (cursorTextVal) cursorTextVal.textContent = `X: ${Math.round(mouseX)} Y: ${Math.round(mouseY)}`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover state
    const hoverTargets = 'a, button, .project-strip, .project-list-item, .contact-btn, .status-wrapper, .tech-chip, .img-display, .close-btn, .slider-arrow, .nav-btn, .lightbox-close, .lightbox-nav-btn, .icta-btn, .lang-btn, .view-mode-btn';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverTargets)) {
            document.body.classList.add('is-hovering');
            SFX.hoverIn();
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverTargets)) {
            document.body.classList.remove('is-hovering');
            SFX.hoverOut();
        }
    });
})();

// ===== SPOTLIGHT MASK =====
(function initSpotlight() {
    if (IS_TOUCH) return;
    const mask = document.getElementById('spotlightMask');
    if (!mask) return;

    document.addEventListener('mousemove', (e) => {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        mask.style.setProperty('--x', x + '%');
        mask.style.setProperty('--y', y + '%');
    });
})();

// ===== SLIDER =====
(function initSlider() {
    const track = document.getElementById('sliderTrack');
    const container = document.getElementById('sliderContainer');
    if (!track || !container) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;
    let animId = null;
    let currentOffset = 0;

    const strips = track.querySelectorAll('.project-strip');
    const STRIP_COUNT = 8;
    const TOTAL_STRIPS = strips.length;

    function getStripWidth() {
        return strips[0] ? strips[0].offsetWidth : 250;
    }

    function getOneSetWidth() {
        return getStripWidth() * STRIP_COUNT;
    }

    // Initialize position at start of second set
    function initPosition() {
        currentOffset = -getOneSetWidth();
        track.style.transform = `translateX(${currentOffset}px)`;
    }

    // Loop logic for infinite scroll
    function checkLoop() {
        const oneSet = getOneSetWidth();
        if (currentOffset > 0) {
            currentOffset -= oneSet;
        } else if (currentOffset < -oneSet * 2) {
            currentOffset += oneSet;
        }
    }

    // DRAG EVENTS
    function onPointerDown(e) {
        isDragging = true;
        document.body.classList.add('is-slider-dragging');
        startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        scrollLeft = currentOffset;
        lastX = startX;
        lastTime = performance.now();
        velocity = 0;
        if (animId) cancelAnimationFrame(animId);
        track.style.transition = 'none';
    }

    function onPointerMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const dx = x - startX;
        const now = performance.now();
        const dt = now - lastTime;
        if (dt > 0) velocity = (x - lastX) / dt;
        lastX = x;
        lastTime = now;
        currentOffset = scrollLeft + dx;
        checkLoop();
        track.style.transform = `translateX(${currentOffset}px)`;
    }

    function onPointerUp() {
        if (!isDragging) return;
        isDragging = false;
        document.body.classList.remove('is-slider-dragging');

        // Momentum
        function momentum() {
            velocity *= 0.95;
            if (Math.abs(velocity) < 0.01) return;
            currentOffset += velocity * 16;
            checkLoop();
            track.style.transform = `translateX(${currentOffset}px)`;
            animId = requestAnimationFrame(momentum);
        }
        momentum();
    }

    // Mouse events
    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    // Touch events
    container.addEventListener('touchstart', onPointerDown, { passive: true });
    container.addEventListener('touchmove', onPointerMove, { passive: false });
    container.addEventListener('touchend', onPointerUp);

    // Arrow buttons
    document.getElementById('sliderPrev')?.addEventListener('click', () => {
        SFX.navTick();
        const stripW = getStripWidth();
        currentOffset += stripW;
        checkLoop();
        track.style.transition = 'transform 0.6s cubic-bezier(.19,1,.22,1)';
        track.style.transform = `translateX(${currentOffset}px)`;
        setTimeout(() => { track.style.transition = 'none'; }, 600);
    });
    document.getElementById('sliderNext')?.addEventListener('click', () => {
        SFX.navTick();
        const stripW = getStripWidth();
        currentOffset -= stripW;
        checkLoop();
        track.style.transition = 'transform 0.6s cubic-bezier(.19,1,.22,1)';
        track.style.transform = `translateX(${currentOffset}px)`;
        setTimeout(() => { track.style.transition = 'none'; }, 600);
    });

    // Init
    window.addEventListener('load', initPosition);
    window.addEventListener('resize', initPosition);
})();

// ===== VIEW MODE TOGGLE =====
(function initViewToggle() {
    const sliderBtn = document.getElementById('viewSlider');
    const listBtn = document.getElementById('viewList');
    const sliderContainer = document.getElementById('sliderContainer');
    const listContainer = document.getElementById('projectsList');
    const sliderControls = document.querySelector('.slider-controls');

    if (!sliderBtn || !listBtn) return;

    sliderBtn.addEventListener('click', () => {
        SFX.click();
        sliderBtn.classList.add('active');
        listBtn.classList.remove('active');
        if (sliderContainer) sliderContainer.classList.remove('view-hidden');
        if (listContainer) listContainer.classList.add('view-hidden');
        if (sliderControls) sliderControls.style.display = '';
    });

    listBtn.addEventListener('click', () => {
        SFX.click();
        listBtn.classList.add('active');
        sliderBtn.classList.remove('active');
        if (listContainer) listContainer.classList.remove('view-hidden');
        if (sliderContainer) sliderContainer.classList.add('view-hidden');
        if (sliderControls) sliderControls.style.display = 'none';
    });
})();

// ===== PROJECT VIEWER =====
(function initProjectViewer() {
    const viewer = document.getElementById('projectViewer');
    const closeBtn = document.getElementById('closeViewer');
    const controlsHeader = document.querySelector('.controls-header');
    const navBtns = document.querySelectorAll('.nav-btn');

    if (!viewer) return;

    let currentProjectIdx = 0;

    function openProject(idx) {
        SFX.openPanel();
        const p = PROJECTS[idx];
        if (!p) return;
        currentProjectIdx = idx;

        // Fill data
        const viewerBg = viewer.querySelector('.viewer-bg');
        if (viewerBg) viewerBg.src = p.img;

        const overlayId = viewer.querySelector('.overlay-id');
        if (overlayId) overlayId.textContent = `PREUVE #${p.id}`;

        const overlayType = viewer.querySelector('.overlay-type');
        if (overlayType) overlayType.textContent = p.type;

        const overlayDate = viewer.querySelector('.overlay-date');
        if (overlayDate) overlayDate.textContent = p.date;

        const overlayCadre = viewer.querySelector('.overlay-cadre');
        if (overlayCadre) overlayCadre.textContent = p.cadre;

        const overlayClient = viewer.querySelector('.overlay-ecole-client');
        if (overlayClient) overlayClient.textContent = p.client;

        const overlayDuree = viewer.querySelector('.overlay-duree');
        if (overlayDuree) overlayDuree.textContent = p.duree;

        const overlayDesc = viewer.querySelector('.overlay-desc');
        if (overlayDesc) overlayDesc.textContent = p.description;

        const overlayContext = viewer.querySelector('.overlay-context');
        if (overlayContext) overlayContext.textContent = p.contexte;

        const overlayRole = viewer.querySelector('.overlay-role');
        if (overlayRole) overlayRole.textContent = p.role;

        const overlayImg1 = viewer.querySelector('.overlay-img-1');
        if (overlayImg1) overlayImg1.src = p.inner1;

        const overlayImg2 = viewer.querySelector('.overlay-img-2');
        if (overlayImg2) overlayImg2.src = p.inner2;


        // Stack chips
        const stackContainer = viewer.querySelector('.overlay-stack');
        if (stackContainer) {
            stackContainer.innerHTML = '';
            p.stack.forEach(s => {
                const chip = document.createElement('div');
                chip.className = 'tech-chip';
                chip.textContent = s;
                stackContainer.appendChild(chip);
            });
        }

        // Tags chips
        const tagsContainer = viewer.querySelector('.overlay-tags');
        if (tagsContainer) {
            tagsContainer.innerHTML = '';
            (p.tags || []).forEach(t => {
                const chip = document.createElement('div');
                chip.className = 'tech-chip';
                chip.textContent = t;
                tagsContainer.appendChild(chip);
            });
        }

        // Client / École label
        const labelEcole = viewer.querySelector('.label-ecole-client');
        if (labelEcole) {
            labelEcole.textContent = p.isEcole ? 'ÉCOLE' : 'CLIENT';
        }

        // Credits list
        const creditsList = viewer.querySelector('.overlay-credits-list');
        if (creditsList) {
            creditsList.innerHTML = '';
            (p.credits || []).forEach(c => {
                const li = document.createElement('li');
                li.textContent = c;
                creditsList.appendChild(li);
            });
        }

        // Useful Links
        const usefulLinks = viewer.querySelector('.overlay-useful-links');
        if (usefulLinks) {
            usefulLinks.innerHTML = '';
            (p.usefulLinks || []).forEach(l => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = l.url;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                a.textContent = l.label;
                li.appendChild(a);
                usefulLinks.appendChild(li);
            });
        }

        // Evidence gallery
        const evidenceGrid = viewer.querySelector('.evidence-grid');
        if (evidenceGrid) {
            evidenceGrid.innerHTML = '';
            (p.gallery || []).forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = `Evidence - ${p.title}`;
                img.loading = 'lazy';
                img.className = 'expandable-img';
                evidenceGrid.appendChild(img);
            });
        }

        // Hide link if no link
        const overlayLink = viewer.querySelector('.overlay-link');
        if (overlayLink) {
            overlayLink.href = p.link;
            overlayLink.style.display = p.link ? '' : 'none';
        }

        // Enable scroll in overlay
        const detailsOverlay = viewer.querySelector('.project-details-overlay');
        if (detailsOverlay) {
            detailsOverlay.style.overflowY = 'auto';
            detailsOverlay.scrollTop = 0;
        }

        // Show viewer
        viewer.style.display = 'block';
        viewer.style.position = 'fixed';
        viewer.style.inset = '0';
        viewer.style.zIndex = '100';
        document.body.classList.add('project-open');
        lenis.stop();

        // Reset anim-items
        const animItems = viewer.querySelectorAll('.anim-item');
        animItems.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
        });

        // Animate in
        requestAnimationFrame(() => {
            viewer.style.transition = 'opacity 0.5s';
            viewer.style.opacity = '1';
            if (controlsHeader) { controlsHeader.style.transition = 'opacity 0.3s 0.3s'; controlsHeader.style.opacity = '1'; }
            navBtns.forEach(btn => { btn.style.transition = 'opacity 0.3s 0.3s'; btn.style.opacity = '1'; });

            // Stagger anim-items
            setTimeout(() => {
                animItems.forEach((el, i) => {
                    setTimeout(() => {
                        el.style.transition = 'opacity 0.6s cubic-bezier(.19,1,.22,1), transform 0.6s cubic-bezier(.19,1,.22,1)';
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, i * 100);
                });
            }, 200);
        });
    }

    function closeProject() {
        SFX.closePanel();
        viewer.style.opacity = '0';
        if (controlsHeader) controlsHeader.style.opacity = '0';
        navBtns.forEach(btn => { btn.style.opacity = '0'; });

        setTimeout(() => {
            viewer.style.display = 'none';
            document.body.classList.remove('project-open');
            lenis.start();
        }, 500);
    }

    // Click handlers on strips and list items
    document.addEventListener('click', (e) => {
        const strip = e.target.closest('.project-strip');
        const listItem = e.target.closest('.project-list-item');
        const target = strip || listItem;
        if (!target) return;

        // Don't open during drag
        if (document.body.classList.contains('is-slider-dragging')) return;

        const idx = parseInt(target.dataset.project);
        if (!isNaN(idx)) openProject(idx);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeProject);

    // Nav buttons for switching projects in viewer
    document.querySelector('.prev-btn')?.addEventListener('click', () => {
        SFX.navTick();
        currentProjectIdx = (currentProjectIdx - 1 + PROJECTS.length) % PROJECTS.length;
        openProject(currentProjectIdx);
    });
    document.querySelector('.next-btn')?.addEventListener('click', () => {
        SFX.navTick();
        currentProjectIdx = (currentProjectIdx + 1) % PROJECTS.length;
        openProject(currentProjectIdx);
    });

    // ESC to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            SFX.closePanel();
            closeProject();
        }
    });

    // Image click for lightbox
    viewer.addEventListener('click', (e) => {
        const img = e.target.closest('.expandable-img');
        if (img && img.src && !img.src.includes('data:image/gif')) {
            openLightbox(img.src);
        }
    });
})();

// ===== LIGHTBOX =====
function openLightbox(src) {
    const overlay = document.querySelector('.lightbox-overlay');
    const content = overlay.querySelector('.lightbox-content');
    if (!overlay || !content) return;

    content.innerHTML = `<img src="${src}" class="lightbox-img" alt="Evidence">`;
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
    SFX.openPanel();
}

function closeLightbox() {
    const overlay = document.querySelector('.lightbox-overlay');
    if (!overlay) return;
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    SFX.closePanel();
}

document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
document.querySelector('.lightbox-overlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// ===== THREAD LINE (Red string connecting hero to projects) =====
(function initThread() {
    gsap.registerPlugin(ScrollTrigger);

    function drawThread(animate) {
        const line = document.getElementById('redLine');
        const startPin = document.getElementById('startPin');
        const endPin = document.getElementById('endPin');
        const heroPinAnchor = document.getElementById('heroPinAnchor');
        if (!line || !startPin || !endPin || !heroPinAnchor) return;

        const W = window.innerWidth;
        const pageH = document.body.scrollHeight;
        const viewH = window.innerHeight;

        // Set container & SVG to full page height
        const container = document.querySelector('.thread-container');
        const svg = document.getElementById('threadSvg');
        if (container) container.style.height = pageH + 'px';
        if (svg) svg.style.height = pageH + 'px';

        // Start point: hero pin anchor
        const heroRect = heroPinAnchor.getBoundingClientRect();
        const startX = heroRect.left + heroRect.width / 2;
        const startY = heroRect.top + window.scrollY + heroRect.height / 2 - 50;

        // End point: near bottom of page
        const endY = pageH - 0.8 * viewH;
        const endX = 0.5 * W;

        // Position pins
        startPin.setAttribute('cx', String(startX));
        startPin.setAttribute('cy', String(startY));
        endPin.setAttribute('cx', String(endX));
        endPin.setAttribute('cy', String(endY));

        // S-curve path (exact same formula as original)
        const d = `M ${startX},${startY} C ${startX - 200},${startY + 500} ${0.1 * W},${0.3 * pageH} ${0.5 * W},${0.5 * pageH} S ${0.9 * W},${0.75 * pageH} ${endX},${endY}`;
        line.setAttribute('d', d);

        // Stroke-dasharray for progressive reveal
        const totalLength = line.getTotalLength();
        line.style.strokeDasharray = totalLength;
        line.style.strokeDashoffset = totalLength;

        if (animate) {
            // Start pin entrance animation
            gsap.set(startPin, { attr: { r: 0 }, opacity: 0 });
            gsap.to(startPin, {
                attr: { r: 12 },
                opacity: 1,
                duration: 0.6,
                ease: 'back.out(2)',
                delay: 0.5
            });

            // Line draws as user scrolls (scrub)
            gsap.to(line, {
                strokeDashoffset: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1
                }
            });
        } else {
            // On resize, just reset pin
            gsap.set(startPin, { attr: { r: 12 }, opacity: 1 });
        }

        // End pin fades in when contact section is reached
        gsap.set(endPin, { opacity: 0, scale: 1 });
        gsap.to(endPin, {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top 70%'
            }
        });
    }

    // Initial draw after page load
    setTimeout(() => drawThread(true), 2000);

    // Redraw on resize (without re-animating)
    window.addEventListener('resize', () => {
        ScrollTrigger.getAll().forEach(st => st.kill());
        drawThread(true);
    });
})();

// ===== PARALLAX FLOATING ITEMS =====
(function initParallax() {
    if (IS_TOUCH) return;
    const floats = document.querySelectorAll('.float-item');
    if (floats.length === 0) return;

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        floats.forEach((f, i) => {
            const speed = 10 + i * 8;
            const rotX = y * 3;
            const rotY = -x * 3;
            f.style.transform = `translate(${x * speed}px, ${y * speed}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        });
    });
})();

// ===== BG MARQUEE SCROLL =====
// (Now handled by GSAP ScrollTrigger in initScrollReveals)

// Prevent drag opening (if velocity was significant)
let sliderDragDistance = 0;
document.querySelector('.slider-container')?.addEventListener('mousedown', () => { sliderDragDistance = 0; });
document.querySelector('.slider-container')?.addEventListener('mousemove', () => { sliderDragDistance++; });
document.addEventListener('click', (e) => {
    if (sliderDragDistance > 5 && e.target.closest('.project-strip')) {
        e.stopPropagation();
        e.preventDefault();
    }
    sliderDragDistance = 0;
}, true);

// ===== LANGUAGE SWITCHER =====
(function initLangSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    const langTransition = document.getElementById('langTransition');
    if (!langTransition) return;

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) return;

            // Toggle active state
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Quick visual feedback - trigger shutter animation
            SFX.glitch();
            langTransition.classList.add('is-active');
            setTimeout(() => {
                langTransition.classList.remove('is-active');
            }, 1200);
        });
    });
})();

// ===== STATUS WRAPPER CLICK (link to contact) =====
(function initStatusWrapperClick() {
    const statusWrapper = document.querySelector('.status-wrapper');
    if (!statusWrapper) return;
    statusWrapper.style.cursor = 'none';
    statusWrapper.addEventListener('click', () => {
        SFX.scanBeep();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            lenis.scrollTo(contactSection);
        }
    });
})();

// ===== HUD CAM CLICK =====
(function initHudCamClick() {
    const camTrigger = document.querySelector('.hud-tl');
    if (!camTrigger) return;
    camTrigger.style.pointerEvents = 'auto';
    let camNum = 4;
    camTrigger.addEventListener('click', () => {
        SFX.click();
        camNum = (camNum % 9) + 1;
        const span = camTrigger.querySelector('span');
        if (span) span.textContent = `CAM_0${camNum} [REC]`;
    });
})();
