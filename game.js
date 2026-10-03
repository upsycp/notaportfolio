(() => {
'use strict';
/* =========================================================
   NOT A PORTFOLIO · UCP Entertainment System
   ========================================================= */

/* ---------------- CONTENT ---------------- */
const CONTACT = { email: 'upagnya.cp@gmail.com', linkedin: 'https://www.linkedin.com/in/upagnya-chinmayi-purigilla-842451287', linkedinLabel: 'linkedin.com/in/upagnya-chinmayi-purigilla' };
const PROFILE = {
  name: 'Upagnya Chinmayi Purigilla',
  handle: 'UCP',
  loadout: 'img/cw.jpg',
  quote: '“I’m making you an offer you can’t refuse. Hire me :>”',
  powers: ['can empathize with a rock too', 'dreams about becoming an indie art filmmaker at least 30 times a day', 'WILL laugh in a serious situation']
};
const PHOTOS = [
  ['my ammamma', '2020', 'A portrait of my grandmother, a constant source of wisdom and warmth.'],
  ['my roommate painting her nails', '2023', 'Capturing a quiet, everyday moment of focus and self-care.'],
  ['a rare full rainbow', '2021', 'The beauty of a complete rainbow arc stretching across the sky.'],
  ['my akka and her curly mess', '2022', 'A candid shot of my sister and her beautiful, wild curly hair.'],
  ['kabaddi kabaddi', '2024', 'Capturing the intensity and movement of a traditional sport.'],
  ['I am big! It’s the pictures that got small', '2024', 'An abstract take on identity and perspective, inspired by classic cinema.'],
  ['two 2s', '2023', 'A visual play on patterns and everyday coincidences.'],
  ['tiny birds vol 2', '2024', 'A delicate moment of nature captured in silence.'],
  ['you had me at hello', '2025', 'A striking portrait that speaks through the eyes.']
].map(([title, year, desc], i) => ({ id: 'p' + (i + 1), kind: 'photo', zone: 'darkroom', title, year, desc, img: `img/p${i + 1}.jpg` }));
const MISSIONS = [
  ['B2B Segmentation Framework', 'Built a segmentation model to focus the platform on the highest-fit founder segments and define clear pricing.', 'Used a 3-layer segmentation: stage, functional need, economics. Focused on where demand is concentrated and delivery stays scalable.', 'Delivered an offer matrix, pricing logic, and a repeatable acquisition workflow with measurable KPIs.'],
  ['Education Scale Strategy', 'Built a 3-year plan to scale Udaan from 5,000 to 50,000 learners across 5 states, without breaking cost or community trust.', 'Used a clear framework (NEXUS + IPOOI) to connect program design, operating model, donor ROI, and community engagement into one scalable system.', 'Designed a hub-and-spoke rollout with a donor-ready value proposition: ₹2,200 per learner/year, targeted attendance uplift 68% to 78%, and a quantified social ROI narrative.'],
  ['Heritage Brand + Ecosystem Design', 'Repositioned Phulkari from “traditional dupattas” to a modern, premium craft brand, while improving artisan income stability and visibility.', 'Designed a women-led cooperative model with digital enablement: product innovation + governance + market access, backed by traceability and anti-counterfeit thinking.', 'Shipped a scalable blueprint: QR/blockchain traceability, product expansion, storytelling-led brand film concept, partnerships, and a phased rollout.'],
  ['Circular Fashion Platform Design', 'Created a concept for a single platform that makes circular fashion convenient while solving trust and logistics friction.', 'Combined C2C thrift/rental with B2B textile-scrap flows to build a differentiated ecosystem. Designed for trust via authentication and transparent product grading.', 'Defined product modules, key features like Eco Score and AR try-ons, plus a practical tech architecture. Built both consumer and corporate gateways.'],
  ['Campus Animal Welfare Flywheel', 'Turn passive sympathy into action by building a repeatable campus engine for animal welfare awareness, volunteers, and events.', 'Multi-phase rollout: health interventions, funding channels, advocacy, and community support loops.', 'Built a mascot persona (“Billu Maharaj”) to drive content consistency and recall, and launched a structured ambassador program.'],
  ['Safety-First Dating Growth Loop', 'Build a dating experience that works across demographics by making privacy, safety, and social acceptance the default.', 'Map features to funnel stages using a PIRATE-style KPI view, and reduce taboo + trust barriers with privacy controls and safer profile interactions.', 'Feature stack includes screen privacy and trust-forward community mechanics. KPI set includes conversion, churn, NPS, and privacy engagement metrics.'],
  ['Appointment Reliability Engine', 'Cut telehealth no-shows and cancellations by making appointments feel valuable, easy to manage, and hard to forget.', 'Diagnose drop-offs and prioritize trust, ease, and privacy-first UX (security, simple flows, multilingual support).', 'Point system + subtle WhatsApp nudges + instant follow-up if late. Improve booking confidence via doctor profiles + auto-rescheduling prompts.'],
  ['Product Relaunch GTM', 'Re-ignite Crystal Popsi by fixing past failure drivers and relaunching with a clearer value proposition for Gen Z + health-curious buyers.', 'Diagnose failure drivers, then rebuild positioning around clear, caffeine-free, no added sugar with transparent ingredient messaging.', 'Defined a full GTM: target segments, product upgrades, channel mix, and a multi-platform campaign #BeCrystalClear using transparency as the creative idea.']
].map(([title, objective, approach, execution], i) => ({ id: 'c' + (i + 1), kind: 'mission', zone: 'hq', title, objective, approach, execution, img: `img/c${i + 1}.jpg` }));
const FILMS = [
  ['From Request to Verified', 'v1151703597', 'https://vimeo.com/1151703597', 'Animated explainer', 'An animated explainer built to make a complex workflow feel intuitive, lightweight, and instantly understandable.'],
  ['Green Flag Energy', 'v1151703541', 'https://vimeo.com/1151703541', 'Competition film', 'A competition film concept targeting “green flag men”, showing how small Vaseline habits signal care, and yes, help you win points with girls.'],
  ['Gokuldham x Blinkit: Warehouse Mode', 'v1151823576', 'https://vimeo.com/1151823576', 'Pitch film', 'An internship pitch film for Blinkit that uses pop-culture humor to make warehouse managers more visible and memorable.'],
  ['Raksha Bandhan, But Make It Loud', 'v1151703674', 'https://vimeo.com/1151703674', 'Festive reel', 'A meme-y festive reel with max attitude, quick cuts, and peak sibling energy.'],
  ['Brand Gods (Donna & Upsy Co.)', 'bg', '', 'LinkedIn series', 'Our flagship LinkedIn series breaking down iconic brand legends into sharp, scroll-friendly lessons.'],
  ['Mahita NGO: STEM Lab Reel', 'v1151704144', 'https://vimeo.com/1151704144', 'Instagram reel', 'Shot and edited for Mahita’s Instagram to capture the energy of learning-by-doing in the STEM lab.'],
  ['Sankalp: You’re Not Alone', 'v1151704703', 'https://vimeo.com/1151704703', 'Campaign film', 'Built for a mental health campaign to spotlight awareness through people-first storytelling.']
].map(([title, im, link, format, desc], i) => ({ id: 'f' + (i + 1), kind: 'film', zone: 'cinema', title, link, format, desc, img: `img/${im}.jpg` }));
const ITEMS = {}; [...PHOTOS, ...MISSIONS, ...FILMS].forEach(it => ITEMS[it.id] = it);
const TOTAL = PHOTOS.length + MISSIONS.length + FILMS.length;
const ZONES = {
  town: { name: 'World map' },
  cinema: { name: 'Unlabeled', lvl: 'LVL 1', kind: 'Films & creative work', list: FILMS },
  hq: { name: 'Beyond the Bullet Points', lvl: 'LVL 2', kind: 'Case studies', list: MISSIONS },
  darkroom: { name: 'Light, Shadows & Stories', lvl: 'LVL 3', kind: 'Photography', list: PHOTOS }
};

/* ---------------- SETUP ---------------- */
const $ = id => document.getElementById(id);
const cv = $('game'), ctx = cv.getContext('2d');
const VW = 320, VH = 180, TS = 16;
ctx.imageSmoothingEnabled = false;
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const hash = (x, y) => { let h = x * 374761393 + y * 668265263; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
const C = { ink: '#1d1418', paper: '#f3ead3', gold: '#e0b44a', red: '#c2412d', teal: '#2f6f6a' };

const IMG = {};
[...PHOTOS, ...MISSIONS, ...FILMS].forEach(it => { const im = new Image(); im.src = it.img; IMG[it.id] = im; });
const LOADOUT = new Image(); LOADOUT.src = PROFILE.loadout;

function font(size, bold) { return `${bold ? 'bold ' : ''}${size}px Silkscreen, "Courier New", monospace`; }
function text(s, x, y, col, size = 8, align = 'left', shadow) {
  ctx.font = font(size); ctx.textAlign = align; ctx.textBaseline = 'top';
  if (shadow) { ctx.fillStyle = shadow; ctx.fillText(s, Math.round(x) + 1, Math.round(y) + 1); }
  ctx.fillStyle = col; ctx.fillText(s, Math.round(x), Math.round(y));
}
function thumb(g, img, x, y, w, h, top) {
  if (img && img.complete && img.naturalWidth) {
    const ar = w / h, iw = img.naturalWidth, ih = img.naturalHeight;
    let sw = iw, sh = iw / ar; if (sh > ih) { sh = ih; sw = ih * ar; }
    const sx = (iw - sw) / 2, sy = top ? 0 : (ih - sh) / 2;
    g.imageSmoothingEnabled = true; g.drawImage(img, sx, sy, sw, sh, x, y, w, h); g.imageSmoothingEnabled = false;
  } else { g.fillStyle = '#3a3036'; g.fillRect(x, y, w, h); }
}

/* ---------------- PIXEL SPRITES ---------------- */
const PAL = { H: '#2a1a17', h: '#4d3229', S: '#d08a55', s: '#a8683d', p: '#e08a6a', E: '#2a1a17', T: '#fff8ec', G: '#e7c46a', W: '#f6f3ec', w: '#9aa6c4', c: '#5b78b0', b: '#6e4224', B: '#9c5a2e', J: '#4f74ad', j: '#38598c', F: '#f4f4f2', f: '#b9bcc4' };
const OUT = '#1d1418';
function sprite(rows, w = 16, h = 24, pal = PAL, outline = true) {
  const c = document.createElement('canvas'); c.width = w + 2; c.height = h + 2; const g = c.getContext('2d');
  const grid = rows.map(r => r.padEnd(w, '.').slice(0, w));
  grid.forEach((r, y) => { for (let x = 0; x < w; x++) { const col = pal[r[x]]; if (col) { g.fillStyle = col; g.fillRect(x + 1, y + 1, 1, 1); } } });
  if (outline) {
    const d = g.getImageData(0, 0, c.width, c.height), a = (x, y) => (x < 0 || y < 0 || x >= c.width || y >= c.height) ? 0 : d.data[(y * c.width + x) * 4 + 3];
    g.fillStyle = OUT;
    for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) if (!a(x, y) && (a(x - 1, y) || a(x + 1, y) || a(x, y - 1) || a(x, y + 1))) g.fillRect(x, y, 1, 1);
  }
  return c;
}
function mirror(c) { const m = document.createElement('canvas'); m.width = c.width; m.height = c.height; const g = m.getContext('2d'); g.translate(c.width, 0); g.scale(-1, 1); g.drawImage(c, 0, 0); return m; }

const TOP = {
  down: ['.....hHHHHh.....', '....HHHHhHHH....', '...HHhHHHHHHH...', '...HHSSSSSSHH...', '..HHSSSSSSSSHh..', '..HHSESSSSESHh..', '..HHSpSSSSpSH.h.', '..HGSSTTTTSSGh..', '..HHsSSSSSSsH.h.', '.HH..sSSSSs.....', '.HHbWWWssWWW....', '.H.bWcWWWWcWW...', '..SbWwWwWwWwWS..', '..SbWwWwWwWwWS..', '..BBBwWwWwWwWS..', '..BBBwWwWwWwWS..', '..BBBWWWWWWWWS..', '..SBBJJJJJJJJ...', '...JJJJJJJJJJ...'],
  up: ['.....hHHHHh.....', '....HHHHhHHH....', '...HHhHHHHHHH...', '...HHHHHHHhHH...', '...HHHhHHHHHH...', '...HHHHHHHHHH...', '...HHHHHHhHHH...', '....HHHHHHHH....', '.....sHGGHs.....', '......hHHh......', '...WWWHhHHWWbB..', '...WWhHHHHWWbB..', '..SWwWHHhHwWbS..', '..SWwWWHHWwWWS..', '..SWwWwWhWwWBBB.', '..SWwWwWwWwWBBB.', '..SWWWWWWWWWBBB.', '...JJJJJJJJJBBS.', '...JJJJJJJJJJ...'],
  side: ['.....hHHHHH.....', '....HHHHHhHH....', '...HHhHHHHHHH...', '...HHHHHHSSSH...', '..HHHHHHSSSSS...', '..HHHHHSSSSES...', '..HHhHGSSSSpSS..', '.HHHHHHSSSSTT...', '.HHH.HHsSSSS....', '.HhH...sSSs.....', '..HH..WWWWW.....', '..H..WcWWWWW....', '.....WwWwWwS....', '....bWwWwWwS....', '...BBWwWwWwS....', '...BBWwWwWwS....', '...BBWWWWWWS....', '....BJJJJJJ.....', '.....JJJJJJ.....']
};
const LEGS = {
  front: [['...JJJJ..JJJJ...', '...JJJj..jJJJ...', '...JJJj..jJJJ...', '...JJJj..jJJJ...', '..FFFff..ffFFF..'],
    ['...JJJJ..JJJJ...', '...JJJj..jJJJ...', '...JJJj..jJJJ...', '..FFFff..jJJJ...', '.........ffFFF..'],
    ['...JJJJ..JJJJ...', '...JJJj..jJJJ...', '...JJJj..jJJJ...', '...JJJj..ffFFF..', '..FFFff.........']],
  side: [['......JJJJ......', '......JJJJ......', '......JJJj......', '......JJJj......', '......FFFff.....'],
    ['.....JJ.JJJ.....', '....JJJ..JJJ....', '....JJj...JJJ...', '...JJj.....JJj..', '..FFf......FFff.'],
    ['......JJJJ......', '.....JJJJ.......', '.....JJJj.......', '.....JJJj.......', '.....FFFff......']]
};
const FR = { down: [], up: [], right: [], left: [] };
[0, 1, 0, 2].forEach(i => {
  FR.down.push(sprite([...TOP.down, ...LEGS.front[i]]));
  FR.up.push(sprite([...TOP.up, ...LEGS.front[i]]));
  const r = sprite([...TOP.side, ...LEGS.side[i]]); FR.right.push(r); FR.left.push(mirror(r));
});
function makePortrait(){
  const N=32,g=[];for(let y=0;y<N;y++)g.push(Array(N).fill(null));
  const H='#1f1417',k='#4a3236',S='#b9784f',l='#cf916a',s='#94593a',E='#1a1012',gl='#fff8ec',B='#2a1a1c',M='#6e2e28',T='#fff4e2',p='#d27a63',G='#e0b44a',W='#f1ece0',w='#5f6f95';
  const set=(x,y,c)=>{x=Math.round(x);y=Math.round(y);if(x>=0&&y>=0&&x<N&&y<N)g[y][x]=c;};
  const ell=(cx,cy,rx,ry,c,f)=>{for(let y=0;y<N;y++)for(let x=0;x<N;x++){const nx=(x+.5-cx)/rx,ny=(y+.5-cy)/ry;if(nx*nx+ny*ny<=1&&(!f||f(x,y)))g[y][x]=c;}};
  const hh=(x,y)=>{let h=x*374761393+y*668265263;h=(h^(h>>>13))*1274126177;return((h^(h>>>16))>>>0)/4294967296;};
  // hair mass + ponytail + curls
  ell(16,13.5,11,10.6,H); ell(27,20,3,4.2,H); ell(26.6,25,2.4,3,H);
  for(let a=0;a<Math.PI*2;a+=Math.PI/8){const sy=Math.sin(a);if(sy>.55)continue;ell(16+Math.cos(a)*11,13.5+sy*10.6,2.1,2.1,H);}
  // shirt
  ell(16,34,13.5,8.5,W,(x,y)=>y<32);
  for(let y=26;y<32;y++)for(let x=0;x<N;x++)if(g[y][x]===W&&x%3===0)g[y][x]=w;
  // neck + collar V
  for(let y=21;y<27;y++)for(let x=13;x<=18;x++)set(x,y,y<23?s:S);
  for(let i=0;i<4;i++){set(14+i*.5,26+i,S);set(18-i*.5,26+i,S);for(let x=Math.ceil(14+i*.5);x<=Math.floor(18-i*.5);x++)set(x,26+i,S);}
  [[11,25],[12,26],[13,27],[13,26],[20,25],[19,26],[18,27],[18,26]].forEach(([x,y])=>set(x,y,W));
  // face (rounder, chibi)
  ell(16,17,8,7.6,S);
  for(let y=0;y<N;y++)for(let x=0;x<N;x++){if(g[y][x]!==S)continue;if(y>=23)g[y][x]=s;else if(x<=12&&y<=14)g[y][x]=l;}
  // fringe with curls
  ell(16,10.6,9.2,3.6,H);
  [[8,12],[8,13],[8,14],[9,12],[9,13],[23,12],[24,12],[23,13],[24,13],[24,14],[12,13],[13,13],[19,13],[20,13],[16,13]].forEach(([x,y])=>set(x,y,H));
  for(let y=0;y<N;y++)for(let x=0;x<N;x++){if(g[y][x]!==H)continue;const r=hh(x,y);if(r<.13)g[y][x]=k;else if(r<.2&&g[y][x+1]===H)g[y][x+1]=k;}
  // tiny brows
  [[11,14],[12,14],[20,14],[21,14]].forEach(([x,y])=>set(x,y,B));
  // big sparkly eyes
  for(const ex of [11,19]){for(let y=15;y<=18;y++)for(let x=ex;x<=ex+2;x++)set(x,y,E);set(ex+2,15,gl);set(ex+1,16,'#fff8ec');set(ex,18,'#4a3550');set(ex+2,15,gl);}
  set(10,15,E);set(22,15,E);
  // rosy cheeks
  const pk='#e9837a';[[9,19],[10,19],[11,19],[21,19],[22,19],[23,19],[10,20],[22,20]].forEach(([x,y])=>set(x,y,pk));
  // button nose + smile
  set(16,19,s);
  [[13,20],[14,21],[15,21],[16,21],[17,21],[18,21],[19,20]].forEach(([x,y])=>set(x,y,M));
  // gold hoops
  [[8,20],[8,21],[24,20],[24,21]].forEach(([x,y])=>set(x,y,G));
  // little sparkle
  [[27,4],[26,5],[27,5],[28,5],[27,6]].forEach(([x,y])=>set(x,y,'#ffe08a'));
  // to canvas with outline
  const c=document.createElement('canvas');c.width=N+2;c.height=N+2;const x2=c.getContext('2d');
  for(let y=0;y<N;y++)for(let x=0;x<N;x++)if(g[y][x]){x2.fillStyle=g[y][x];x2.fillRect(x+1,y+1,1,1);}
  const d=x2.getImageData(0,0,c.width,c.height),a=(x,y)=>(x<0||y<0||x>=c.width||y>=c.height)?0:d.data[(y*c.width+x)*4+3];
  x2.fillStyle='#160e10';for(let y=0;y<c.height;y++)for(let x=0;x<c.width;x++)if(!a(x,y)&&(a(x-1,y)||a(x+1,y)||a(x,y-1)||a(x,y+1)))x2.fillRect(x,y,1,1);
  return c;
}

const PORTRAIT = makePortrait();

// Billu Maharaj, the campus cat
const CAT = sprite(['..o.......o.', '.ooo.....ooo', '.oOooooooOo.', '.ooEoooooEo.', '.oooooNoooo.', '..oooooooo..', '..oOoOoOoo.t', '..oooooooo.t', '..oo....oot.', '..oo....oo..'], 12, 10, { o: '#e39a4a', O: '#c06f2c', E: '#221519', N: '#d9846f', t: '#e39a4a' });

function blob(w, h, col) {
  const c = document.createElement('canvas'); c.width = w + 2; c.height = h + 2; const g = c.getContext('2d');
  const cx = w / 2, cy = h / 2;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const nx = (x + .5 - cx) / (w / 2), ny = (y + .5 - cy) / (h / 2); if (nx * nx + ny * ny > 1) continue;
    const s = nx + ny * 1.2 + (hash(x, y) - .5) * .5;
    g.fillStyle = s < -.75 ? col.l : s > .55 ? col.d : col.m; g.fillRect(x + 1, y + 1, 1, 1);
  }
  const d = g.getImageData(0, 0, c.width, c.height), a = (x, y) => (x < 0 || y < 0 || x >= c.width || y >= c.height) ? 0 : d.data[(y * c.width + x) * 4 + 3];
  g.fillStyle = col.o || OUT;
  for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) if (!a(x, y) && (a(x - 1, y) || a(x + 1, y) || a(x, y - 1) || a(x, y + 1))) g.fillRect(x, y, 1, 1);
  return c;
}
const LEAF = { l: '#7fae5c', m: '#4f8442', d: '#335a2f', o: '#1f2e1c' };
function makeTree() {
  const c = document.createElement('canvas'); c.width = 22; c.height = 28; const g = c.getContext('2d');
  g.fillStyle = OUT; g.fillRect(8, 16, 6, 11); g.fillStyle = '#6b4428'; g.fillRect(9, 16, 4, 10); g.fillStyle = '#4a2e1b'; g.fillRect(11, 16, 2, 10);
  g.drawImage(blob(20, 18, LEAF), 0, 0); g.drawImage(blob(10, 8, LEAF), 2, 3);
  return c;
}
const TREE = makeTree(), BUSH = blob(14, 10, LEAF);

/* ---------------- TOWN MAP ---------------- */
const TW = 40, TH = 24;
const BUILDINGS = [
  { id: 'cinema', x: 3, y: 5, w: 9, h: 8, door: 7, name: 'UNLABELED', roof: '#6b2737', wall: '#e6c98f' },
  { id: 'hq', x: 15, y: 3, w: 10, h: 10, door: 20, name: 'BEYOND THE BULLET POINTS', roof: '#47555e', wall: '#d9d2c0' },
  { id: 'darkroom', x: 28, y: 5, w: 9, h: 8, door: 32, name: 'LIGHT, SHADOWS & STORIES', roof: '#3d3a46', wall: '#b07a5c' }
];
const SPAWN = [20, 14];
function townGrid() {
  const g = Array.from({ length: TH }, () => Array(TW).fill('g'));
  for (let x = 0; x < TW; x++) { g[0][x] = 'T'; g[TH - 1][x] = 'T'; }
  for (let y = 0; y < TH; y++) { g[y][0] = 'T'; g[y][TW - 1] = 'T'; }
  for (let y = 13; y <= 14; y++) for (let x = 1; x < TW - 1; x++) g[y][x] = 'p';
  BUILDINGS.forEach(b => {
    for (let y = b.y; y < b.y + b.h; y++) for (let x = b.x; x < b.x + b.w; x++) g[y][x] = 'B';
    b.dy = b.y + b.h - 1; g[b.dy][b.door] = 'D';
  });
  for (let y = 16; y <= 21; y++) for (let x = 15; x <= 25; x++) g[y][x] = 'p';
  for (let x = 19; x <= 21; x++) g[15][x] = 'p';
  [[19, 18], [20, 18], [19, 19], [20, 19]].forEach(([x, y]) => g[y][x] = 'F');
  for (let y = 16; y <= 20; y++) for (let x = 3; x <= 9; x++) g[y][x] = 'w';
  [[3, 16], [9, 16], [3, 20], [9, 20]].forEach(([x, y]) => g[y][x] = 'g');
  [[13, 3], [26, 3], [2, 4], [37, 4], [12, 17], [14, 22], [29, 17], [32, 20], [35, 17], [28, 22], [36, 22], [2, 16], [37, 15], [10, 22], [18, 22], [23, 22], [1, 8], [38, 8], [13, 7], [26, 7]].forEach(([x, y]) => { if (g[y][x] === 'g') g[y][x] = 'T'; });
  [[13, 10], [26, 10], [2, 10], [37, 10], [12, 12], [27, 12]].forEach(([x, y]) => { if (g[y][x] === 'g') g[y][x] = 'h'; });
  [[14, 12], [25, 12], [2, 12], [37, 12]].forEach(([x, y]) => g[y][x] = 'L');
  g[17][23] = 'C'; g[20][16] = 'b'; g[20][24] = 'b';
  for (let y = 1; y < TH - 1; y++) for (let x = 1; x < TW - 1; x++) if (g[y][x] === 'g' && hash(x * 3, y * 7) < .07) g[y][x] = 'f';
  return g;
}

/* ---------------- ROOMS ---------------- */
const RW = 20, RH = 11;
function roomGrid() { const g = Array.from({ length: RH }, (_, y) => Array(RW).fill(y < 2 ? 'W' : 'o')); g[10][10] = 'X'; return g; }
const DFR = [[2, 4], [6, 4], [10, 4], [14, 4], [18, 4], [4, 7], [8, 7], [12, 7], [16, 7]];
const FRAMECOL = ['#c9a24a', '#2b2026', '#f1ece0', '#8a5a34', '#c9a24a', '#f1ece0', '#2b2026', '#8a5a34', '#c9a24a'];
const CFR = [[3, 4], [7, 4], [12, 4], [16, 4], [5, 7], [9, 7], [14, 7]];
const ROOMS = {
  darkroom: () => {
    const g = roomGrid(), it = {};
    DFR.forEach(([x, y], i) => { g[y][x] = 'd'; g[y - 1][x] = 'd'; it[`${x},${y}`] = { item: PHOTOS[i].id }; it[`${x},${y - 1}`] = { item: PHOTOS[i].id }; });
    [[1, 9], [18, 9]].forEach(([x, y]) => g[y][x] = 'd');
    return { g, it };
  },
  hq: () => {
    const g = roomGrid(), it = {};
    [[3, 4], [7, 4], [12, 4], [16, 4], [3, 7], [7, 7], [12, 7], [16, 7]].forEach(([x, y], i) => { g[y][x] = 'd'; g[y - 1][x] = 'd'; it[`${x},${y}`] = { item: MISSIONS[i].id }; it[`${x},${y - 1}`] = { item: MISSIONS[i].id }; });
    [[18, 2], [1, 2], [1, 9], [18, 9]].forEach(([x, y]) => g[y][x] = 'd');
    return { g, it };
  },
  cinema: () => {
    const g = roomGrid(), it = {};
    CFR.forEach(([x, y], i) => { g[y][x] = 'd'; g[y - 1][x] = 'd'; it[`${x},${y}`] = { item: FILMS[i].id }; it[`${x},${y - 1}`] = { item: FILMS[i].id }; });
    [9].forEach(y => { for (let x = 1; x <= 5; x++) g[y][x] = 'd'; for (let x = 14; x <= 18; x++) g[y][x] = 'd'; });
    g[2][18] = 'd'; g[2][1] = 'd';
    return { g, it };
  }
};

/* ---------------- PRE-RENDERED LAYERS ---------------- */
let TOWN, GROUND, BLD = {};
function drawGroundTile(g, t, x, y, grid) {
  const px = x * TS, py = y * TS;
  const grass = () => {
    g.fillStyle = '#679a4e'; g.fillRect(px, py, TS, TS);
    for (let i = 0; i < 7; i++) { const a = hash(x * 16 + i, y * 9 + i * 3), b = hash(x * 5 + i * 7, y * 13 + i); g.fillStyle = a < .5 ? '#5a8b45' : '#78ab5b'; g.fillRect(px + Math.floor(a * 15), py + Math.floor(b * 15), 1, 1); }
    if (hash(x, y * 3) < .35) { const tx = px + 3 + Math.floor(hash(x * 2, y) * 9), ty = py + 4 + Math.floor(hash(x, y * 2) * 8); g.fillStyle = '#4f7f3c'; g.fillRect(tx, ty, 1, 2); g.fillRect(tx + 2, ty, 1, 2); g.fillRect(tx + 1, ty + 1, 1, 2); }
  };
  if (t === 'p' || t === 'D') {
    g.fillStyle = '#d4b27a'; g.fillRect(px, py, TS, TS);
    for (let i = 0; i < 5; i++) { const a = hash(x * 11 + i, y * 3 + i), b = hash(x * 2 + i, y * 17 + i * 5); g.fillStyle = a < .5 ? '#b8955f' : '#e4c690'; g.fillRect(px + 1 + Math.floor(a * 13), py + 1 + Math.floor(b * 13), 2, 1); }
    const n = (dx, dy) => { const r = grid[y + dy]; const v = r && r[x + dx]; return v === 'p' || v === 'D' || v === 'F' || v === 'S' || v === 'C' || v === 'b' || v === 'B'; };
    g.fillStyle = '#a8864f';
    if (!n(0, -1)) g.fillRect(px, py, TS, 1); if (!n(0, 1)) g.fillRect(px, py + 15, TS, 1);
    if (!n(-1, 0)) g.fillRect(px, py, 1, TS); if (!n(1, 0)) g.fillRect(px + 15, py, 1, TS);
  } else if (t === 'w') {
    g.fillStyle = '#3d6e8e'; g.fillRect(px, py, TS, TS);
    const n = (dx, dy) => { const r = grid[y + dy]; return r && r[x + dx] === 'w'; };
    g.fillStyle = '#d4b27a';
    if (!n(0, -1)) g.fillRect(px, py, TS, 2); if (!n(0, 1)) g.fillRect(px, py + 14, TS, 2);
    if (!n(-1, 0)) g.fillRect(px, py, 2, TS); if (!n(1, 0)) g.fillRect(px + 14, py, 2, TS);
    g.fillStyle = '#2d5670';
    if (!n(0, -1)) g.fillRect(px, py + 2, TS, 1);
  } else {
    grass();
    if (t === 'f') { const cols = ['#e7889a', '#f2d16b', '#f5efe4', '#c79be0']; for (let i = 0; i < 3; i++) { const a = hash(x * 7 + i, y * 5 + i * 11), b = hash(x * 3 + i * 5, y * 2 + i); g.fillStyle = cols[Math.floor(a * 4)]; const fx = px + 2 + Math.floor(a * 11), fy = py + 2 + Math.floor(b * 11); g.fillRect(fx, fy, 2, 2); g.fillStyle = '#2f5a2a'; g.fillRect(fx, fy + 2, 1, 1); } }
  }
}
function makeBuilding(b) {
  const W = b.w * TS, H = b.h * TS + 10, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  const top = 10, roofH = Math.round(b.h * TS * (b.id === 'hq' ? .28 : .46)), wallY = top + roofH, base = H;
  const R = (x, y, w, h, col) => { g.fillStyle = col; g.fillRect(x, y, w, h); };
  const shade = (hex, f) => { const n = parseInt(hex.slice(1), 16); let r = n >> 16, gg = n >> 8 & 255, bb = n & 255; r = clamp(Math.round(r * f), 0, 255); gg = clamp(Math.round(gg * f), 0, 255); bb = clamp(Math.round(bb * f), 0, 255); return `rgb(${r},${gg},${bb})`; };
  // wall
  R(0, wallY, W, base - wallY, b.wall);
  if (b.id === 'darkroom') { for (let y = wallY + 2; y < base - 4; y += 4) for (let x = ((y / 4) % 2) * 4; x < W; x += 8) R(x, y, 7, 3, shade(b.wall, .9 + hash(x, y) * .15)); }
  else for (let x = 3; x < W; x += 6) R(x, wallY, 1, base - wallY, shade(b.wall, .93));
  R(0, base - 4, W, 4, shade(b.wall, .62)); R(0, wallY, W, 2, shade(b.wall, .7));
  // roof
  if (b.id === 'cinema') {
    R(0, top, W, roofH, b.roof);
    for (let x = 0; x < W; x += 8) { R(x, top - 4, 4, 4, b.roof); }
    for (let y = top + 3; y < top + roofH; y += 4) R(0, y, W, 1, shade(b.roof, .8));
    R(0, top, W, 2, shade(b.roof, 1.25));
  } else if (b.id === 'hq') {
    R(0, top, W, roofH, b.roof); R(0, top, W, 2, shade(b.roof, 1.3)); R(0, top + roofH - 3, W, 3, shade(b.roof, .7));
    R(W - 22, top - 10, 2, 12, '#3a3a3a'); R(W - 26, top - 10, 10, 2, '#3a3a3a'); R(W - 21, top - 12, 1, 2, C.red);
    R(12, top - 9, 2, 11, '#3a3a3a'); R(14, top - 9, 9, 5, C.gold); R(14, top - 9, 9, 1, '#fff2c0');
  } else {
    for (let y = 0; y < roofH; y++) { const inset = Math.max(0, Math.round((roofH - y) * 0.0)); R(inset, top + y, W - inset * 2, 1, y % 4 === 0 ? shade(b.roof, .78) : b.roof); }
    for (let y = top + 2; y < top + roofH - 2; y += 4) for (let x = (y % 8 ? 0 : 4); x < W; x += 8) R(x, y, 1, 3, shade(b.roof, .8));
    R(0, top, W, 2, shade(b.roof, 1.3)); R(0, top + roofH - 3, W, 3, shade(b.roof, .62));
    if (b.id === 'home') { R(W - 26, top - 8, 9, 14, '#8a4b3b'); R(W - 27, top - 9, 11, 3, '#5d3027'); }
  }
  R(0, wallY - 1, W, 1, OUT);
  // windows
  const dx = (b.door - b.x) * TS;
  const win = (x, y, w = 10, h = 10) => { R(x - 1, y - 1, w + 2, h + 2, OUT); R(x, y, w, h, '#9cc3d6'); R(x, y, w, 2, '#c9e3ee'); R(x + Math.floor(w / 2), y, 1, h, OUT); R(x, y + Math.floor(h / 2), w, 1, OUT); R(x - 1, y + h + 1, w + 2, 2, shade(b.wall, .6)); };
  if (b.id === 'hq') {
    for (let y = wallY + 8; y < base - 30; y += 16) for (let x = 6; x < W - 10; x += 16) if (Math.abs(x + 5 - (dx + 8)) > 12 || y < base - 46) win(x, y, 9, 9);
  } else if (b.id !== 'cinema') {
    const wy = wallY + 10;
    for (let x = 8; x < W - 12; x += 22) if (Math.abs(x + 5 - (dx + 8)) > 14) { win(x, wy); if (b.id === 'home') { R(x - 2, wy + 13, 14, 3, '#7a4f29'); R(x - 1, wy + 12, 2, 2, '#e7889a'); R(x + 4, wy + 12, 2, 2, '#f2d16b'); R(x + 9, wy + 12, 2, 2, '#e7889a'); } }
  }
  // door
  const dX = dx + 2, dY = base - 22;
  R(dX - 2, dY - 2, 16, 24, OUT); R(dX, dY, 12, 20, b.id === 'darkroom' ? '#3a1616' : '#6b4428'); R(dX, dY, 12, 2, shade('#6b4428', 1.3)); R(dX + 9, dY + 10, 2, 2, C.gold);
  if (b.id === 'hq') { R(dX, dY, 12, 20, '#9cc3d6'); R(dX + 5, dY, 2, 20, OUT); R(dX, dY, 12, 3, '#c9e3ee'); }
  // sign
  g.font = font(8); const tw = Math.ceil(g.measureText(b.name).width);
  if (b.id === 'cinema') {
    const sw = W - 16, sx = 8, sy = wallY + 4; R(sx - 2, sy - 2, sw + 4, 22, OUT); R(sx, sy, sw, 18, '#2a1620');
    g.fillStyle = C.gold; g.textAlign = 'center'; g.textBaseline = 'top'; g.fillText(b.name, W / 2, sy + 5);
    b.bulbs = []; for (let x = sx + 2; x < sx + sw - 1; x += 5) { b.bulbs.push([x, sy + 1]); b.bulbs.push([x, sy + 15]); }
  } else {
    const sw = tw + 10, sx = Math.round(clamp(dx + 8 - sw / 2, 2, W - sw - 2)), sy = dY - 14;
    R(sx - 1, sy - 1, sw + 2, 13, OUT); R(sx, sy, sw, 11, b.id === 'darkroom' ? '#2a1214' : C.paper);
    g.fillStyle = b.id === 'darkroom' ? '#ff6b5a' : C.ink; g.textAlign = 'left'; g.textBaseline = 'top'; g.fillText(b.name, sx + 5, sy + 2);
    if (b.id === 'darkroom') b.bulb = [Math.min(W - 6, sx + sw + 3), sy + 3];
  }
  return c;
}
function buildTown() {
  TOWN = townGrid();
  GROUND = document.createElement('canvas'); GROUND.width = TW * TS; GROUND.height = TH * TS; const g = GROUND.getContext('2d');
  for (let y = 0; y < TH; y++) for (let x = 0; x < TW; x++) drawGroundTile(g, TOWN[y][x], x, y, TOWN);
  BUILDINGS.forEach(b => BLD[b.id] = makeBuilding(b));
}

/* ---------------- STATE ---------------- */
const P = { tx: 20, ty: 14, x: 20 * TS, y: 14 * TS, dir: 'up', moving: false, t: 0, fx: 0, fy: 0, anim: 0 };
let scene = 'boot';           // boot | intro | title | play
let where = 'town';           // town | room id
let room = null;              // { g, it, id }
let path = [], pendingUse = null, marker = null;
let trans = null;             // iris transition
let introT = 0, playT = 0, lastTs = 0;
const held = []; const seen = new Set();
let sound = false;
try { JSON.parse(localStorage.getItem('np-seen') || '[]').forEach(id => ITEMS[id] && seen.add(id)); } catch (e) { }
const saveSeen = () => { try { localStorage.setItem('np-seen', JSON.stringify([...seen])); } catch (e) { } };

/* ---------------- WORLD QUERIES ---------------- */
const grid = () => where === 'town' ? TOWN : room.g;
const GW = () => where === 'town' ? TW : RW, GH = () => where === 'town' ? TH : RH;
function walkable(x, y) {
  const g = grid(); if (y < 0 || x < 0 || y >= GH() || x >= GW()) return false;
  const t = g[y][x]; return t === 'g' || t === 'f' || t === 'p' || t === 'D' || t === 'o' || t === 'X';
}
function interAt(x, y) {
  if (where === 'town' || !room) return null;
  const r = room.it[`${x},${y}`]; if (!r || !r.item) return null;
  return { ...r, label: ITEMS[r.item].title };
}
const D = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
function facingTile() { const [dx, dy] = D[P.dir]; return [P.tx + dx, P.ty + dy]; }
function nearbyInter() {
  const [fx, fy] = facingTile(); let i = interAt(fx, fy); if (i) return { ...i, x: fx, y: fy };
  for (const k of ['up', 'left', 'right', 'down']) { const [dx, dy] = D[k]; i = interAt(P.tx + dx, P.ty + dy); if (i) return { ...i, x: P.tx + dx, y: P.ty + dy, dir: k }; }
  return null;
}
function doorAhead() {
  if (where !== 'town') return null; const [fx, fy] = facingTile();
  return BUILDINGS.find(b => b.door === fx && b.dy === fy) || null;
}

/* ---------------- PATHFINDING ---------------- */
function bfs(goal) {
  const W = GW(), H = GH(), prev = new Map(), key = (x, y) => y * W + x, q = [[P.tx, P.ty]]; prev.set(key(P.tx, P.ty), null);
  while (q.length) {
    const [x, y] = q.shift(); if (goal(x, y)) { const out = []; let k = key(x, y); while (k !== key(P.tx, P.ty)) { out.unshift([k % W, Math.floor(k / W)]); k = prev.get(k); } return out; }
    for (const [dx, dy] of Object.values(D)) { const nx = x + dx, ny = y + dy; if (!walkable(nx, ny) || prev.has(key(nx, ny))) continue; prev.set(key(nx, ny), key(x, y)); q.push([nx, ny]); }
  }
  return null;
}
function walkTo(tx, ty) {
  if (tx < 0 || ty < 0 || tx >= GW() || ty >= GH()) return;
  const inter = interAt(tx, ty), door = where === 'town' && BUILDINGS.find(b => b.door === tx && b.dy === ty);
  pendingUse = null;
  if (walkable(tx, ty)) { const p = bfs((x, y) => x === tx && y === ty); if (p) { path = p; marker = { x: tx, y: ty, t: 0 }; if (!p.length && door) enter(door); } return; }
  if (inter || (where === 'town' && TOWN[ty][tx] === 'B')) {
    let target = [tx, ty];
    if (!inter) { const b = BUILDINGS.find(b => tx >= b.x && tx < b.x + b.w && ty >= b.y && ty < b.y + b.h); if (b) { walkTo(b.door, b.dy); return; } }
    const p = bfs((x, y) => Math.abs(x - target[0]) + Math.abs(y - target[1]) === 1);
    if (p) { path = p; pendingUse = { x: tx, y: ty }; marker = { x: tx, y: ty, t: 0 }; if (!p.length) useAt(tx, ty); }
  }
}

/* ---------------- INTERACTION ---------------- */
function faceTo(x, y) { const dx = x - P.tx, dy = y - P.ty; P.dir = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up'); }
function useAt(x, y) { faceTo(x, y); const i = interAt(x, y); if (i) use(i); }
function use(i) { blip(660, .06); if (i.item) openItem(i.item); }
function act() {
  if (!$('modal').hidden || !$('lightbox').hidden) return;
  if (scene === 'intro') { skipIntro(); return; }
  if (scene === 'title') { startGame(); return; }
  if (scene !== 'play' || trans || P.moving) return;
  const i = nearbyInter(); if (i) { if (i.dir) P.dir = i.dir; use(i); return; }
  const d = doorAhead(); if (d) { path = [[d.door, d.dy]]; }
}
function back() {
  if (!$('lightbox').hidden) { $('lightbox').hidden = true; return; }
  if (!$('modal').hidden) { closeModal(); return; }
  if (scene === 'play' && where !== 'town' && !trans) { held.length = 0; P.moving = false; P.x = P.tx * TS; P.y = P.ty * TS; leave(); return; }
}

/* ---------------- SCENES ---------------- */
function enter(b) {
  path = []; pendingUse = null; marker = null; tone([392, 523, 659], .07);
  iris(() => { where = b.id; room = { ...ROOMS[b.id](), id: b.id }; P.tx = 10; P.ty = 9; P.x = P.tx * TS; P.y = P.ty * TS; P.dir = 'up'; setZone(); });
}
function leave() {
  path = []; pendingUse = null; marker = null; tone([659, 523, 392], .07);
  const b = BUILDINGS.find(b => b.id === where);
  iris(() => { where = 'town'; room = null; P.tx = b.door; P.ty = b.dy + 1; P.x = P.tx * TS; P.y = P.ty * TS; P.dir = 'down'; setZone(); });
}
function iris(cb) { trans = { t: 0, cb, done: false }; }
function setZone() {
  const z = ZONES[where], el = $('zone');
  el.innerHTML = z.lvl ? `<span class="back">◀ World map</span><span>${z.lvl} · ${esc(z.name)}</span>` : 'World map';
  el.classList.toggle('link', !!z.lvl);
}
function updateFound() { $('found').textContent = seen.size; }

function startGame() {
  if (scene === 'play') { $('menu').hidden = true; return; }
  scene = 'play'; $('menu').hidden = true; $('skip').hidden = true; $('hud').hidden = false;
  where = 'town'; room = null; P.tx = SPAWN[0]; P.ty = SPAWN[1]; P.x = P.tx * TS; P.y = P.ty * TS; P.dir = 'up';
  setZone(); updateFound(); trans = { t: .5, cb: null, done: true }; playT = 0;
  tone([523, 659, 784, 1046], .09);
}
function skipIntro() { if (introT < 7.8) introT = 7.8; }
function replayIntro() { closeModal(); scene = 'intro'; introT = 0; $('hud').hidden = true; $('menu').hidden = true; $('skip').hidden = false; }
function showMenu() {
  const m = $('menu');
  m.innerHTML = `<button type="button" data-m="start">Start game</button><button type="button" data-m="index">Quick view (no game)</button><button type="button" data-m="sound">Sound: ${sound ? 'on' : 'off'}</button>`;
  m.hidden = false;
}
$('menu').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return; const k = b.dataset.m;
  if (k === 'start') startGame();
  else if (k === 'index') openIndex();
  else if (k === 'sound') { toggleSound(); b.textContent = `Sound: ${sound ? 'on' : 'off'}`; }
});

/* ---------------- RENDER: TOWN ---------------- */
let cam = { x: 0, y: 0 };
function camera() {
  if (where === 'town') { cam.x = clamp(Math.round(P.x + 8 - VW / 2), 0, TW * TS - VW); cam.y = clamp(Math.round(P.y + 8 - VH * .62), 0, TH * TS - VH); }
  else { cam.x = 0; cam.y = -2; }
}
function drawTown(t) {
  ctx.drawImage(GROUND, cam.x, cam.y, VW, VH, 0, 0, VW, VH);
  const x0 = Math.floor(cam.x / TS), y0 = Math.floor(cam.y / TS), x1 = Math.ceil((cam.x + VW) / TS), y1 = Math.ceil((cam.y + VH) / TS);
  // water shimmer
  for (let y = y0; y <= y1 && y < TH; y++) for (let x = x0; x <= x1 && x < TW; x++) if (TOWN[y][x] === 'w') {
    const px = x * TS - cam.x, py = y * TS - cam.y, ph = Math.floor(t * 2 + hash(x, y) * 4) % 4;
    ctx.fillStyle = '#6fa2c2'; ctx.fillRect(px + 3 + ph * 2, py + 6, 4, 1); ctx.fillRect(px + 9 - ph, py + 11, 3, 1);
  }
  // drawables sorted by base y
  const list = [];
  BUILDINGS.forEach(b => list.push({ y: (b.y + b.h) * TS, d: () => drawBuilding(b, t) }));
  for (let y = Math.max(0, y0 - 2); y <= Math.min(TH - 1, y1 + 2); y++) for (let x = Math.max(0, x0 - 1); x <= Math.min(TW - 1, x1 + 1); x++) {
    const k = TOWN[y][x], px = x * TS - cam.x, py = y * TS - cam.y;
    if (k === 'T') list.push({ y: (y + 1) * TS, d: () => ctx.drawImage(TREE, px - 3, py - 12) });
    else if (k === 'h') list.push({ y: (y + 1) * TS, d: () => ctx.drawImage(BUSH, px, py + 4) });
    else if (k === 'L') list.push({ y: (y + 1) * TS, d: () => drawLamp(px, py, t) });
    else if (k === 'S') list.push({ y: (y + 1) * TS, d: () => drawSign(px, py) });
    else if (k === 'M') list.push({ y: (y + 1) * TS, d: () => drawMailbox(px, py) });
    else if (k === 'C') list.push({ y: (y + 1) * TS, d: () => ctx.drawImage(CAT, px + 1, py + 5 + (Math.floor(t * 2) % 2)) });
    else if (k === 'b') list.push({ y: (y + 1) * TS, d: () => drawBench(px, py) });
    else if (k === 'F' && TOWN[y][x - 1] !== 'F' && TOWN[y - 1][x] !== 'F') list.push({ y: (y + 2) * TS, d: () => drawFountain(px, py, t) });
  }
  list.push({ y: P.y + TS + .5, d: () => drawPlayer() });
  list.sort((a, b) => a.y - b.y).forEach(o => o.d());
}
function drawBuilding(b, t) {
  const px = b.x * TS - cam.x, py = b.y * TS - 10 - cam.y; if (px > VW || px + b.w * TS < 0) return;
  ctx.fillStyle = 'rgba(29,20,24,.25)'; ctx.fillRect(px + 3, py + 10 + b.h * TS, b.w * TS - 2, 3);
  ctx.drawImage(BLD[b.id], px, py);
  if (b.bulbs) b.bulbs.forEach(([x, y], i) => { ctx.fillStyle = (i + Math.floor(t * 4)) % 3 ? '#ffe08a' : '#7a5a2a'; ctx.fillRect(px + x, py + y, 2, 2); });
  if (b.bulb) { const on = Math.floor(t * 1.5) % 2; ctx.fillStyle = on ? '#ff4a3a' : '#7a2018'; ctx.fillRect(px + b.bulb[0], py + b.bulb[1], 4, 4); if (on) { ctx.fillStyle = 'rgba(255,74,58,.25)'; ctx.fillRect(px + b.bulb[0] - 3, py + b.bulb[1] - 3, 10, 10); } }
  if (b.id === 'home') { for (let i = 0; i < 3; i++) { const s = (t * .6 + i / 3) % 1; ctx.fillStyle = `rgba(230,225,215,${.6 - s * .6})`; const r = 2 + Math.floor(s * 3); ctx.fillRect(px + b.w * TS - 23 + Math.round(Math.sin(s * 6 + i) * 2), py - 2 - Math.floor(s * 18), r, r); } }
}
function drawLamp(px, py, t) {
  ctx.fillStyle = OUT; ctx.fillRect(px + 6, py - 10, 4, 25); ctx.fillStyle = '#3b3b40'; ctx.fillRect(px + 7, py - 9, 2, 23);
  ctx.fillStyle = OUT; ctx.fillRect(px + 3, py - 16, 10, 8); ctx.fillStyle = '#ffe08a'; ctx.fillRect(px + 4, py - 15, 8, 6); ctx.fillStyle = '#fff4c8'; ctx.fillRect(px + 5, py - 14, 3, 2);
  ctx.fillStyle = 'rgba(255,224,138,.12)'; ctx.fillRect(px - 2, py - 20, 20, 16);
}
function drawSign(px, py) {
  ctx.fillStyle = OUT; ctx.fillRect(px + 6, py + 4, 4, 12); ctx.fillStyle = '#6b4428'; ctx.fillRect(px + 7, py + 5, 2, 11);
  ctx.fillStyle = OUT; ctx.fillRect(px, py - 2, 16, 11); ctx.fillStyle = '#c9a26b'; ctx.fillRect(px + 1, py - 1, 14, 9);
  ctx.fillStyle = '#8a6a3e'; for (let i = 0; i < 3; i++) ctx.fillRect(px + 3, py + 1 + i * 2, 10 - i * 3, 1);
}
function drawMailbox(px, py) {
  ctx.fillStyle = OUT; ctx.fillRect(px + 6, py + 6, 4, 10); ctx.fillStyle = '#6b4428'; ctx.fillRect(px + 7, py + 7, 2, 9);
  ctx.fillStyle = OUT; ctx.fillRect(px + 1, py - 1, 14, 9); ctx.fillStyle = C.red; ctx.fillRect(px + 2, py, 12, 7); ctx.fillStyle = '#e2604b'; ctx.fillRect(px + 2, py, 12, 2);
  ctx.fillStyle = C.gold; ctx.fillRect(px + 13, py - 4, 2, 5); ctx.fillRect(px + 11, py - 4, 3, 2);
}
function drawBench(px, py) {
  ctx.fillStyle = OUT; ctx.fillRect(px, py + 4, 16, 9); ctx.fillStyle = '#8a5a34'; ctx.fillRect(px + 1, py + 5, 14, 3); ctx.fillRect(px + 1, py + 9, 14, 2);
  ctx.fillStyle = OUT; ctx.fillRect(px + 2, py + 12, 2, 3); ctx.fillRect(px + 12, py + 12, 2, 3);
}
function drawFountain(px, py, t) {
  ctx.fillStyle = OUT; ctx.fillRect(px - 1, py + 3, 34, 28); ctx.fillStyle = '#b9b2a3'; ctx.fillRect(px, py + 4, 32, 26); ctx.fillStyle = '#9c9586'; ctx.fillRect(px, py + 26, 32, 4);
  ctx.fillStyle = '#3d6e8e'; ctx.fillRect(px + 3, py + 7, 26, 18); ctx.fillStyle = '#5a8db0'; ctx.fillRect(px + 3, py + 7, 26, 3);
  ctx.fillStyle = OUT; ctx.fillRect(px + 13, py + 6, 6, 14); ctx.fillStyle = '#cfc8b8'; ctx.fillRect(px + 14, py + 7, 4, 12);
  for (let i = 0; i < 6; i++) { const s = (t * 1.4 + i / 6) % 1, a = i / 6 * Math.PI * 2, r = s * 10; ctx.fillStyle = '#bfe0f0'; ctx.fillRect(Math.round(px + 16 + Math.cos(a) * r), Math.round(py + 4 - Math.sin(s * Math.PI) * 7 + s * 8), 1, 2); }
  ctx.fillStyle = '#9cd0ea'; ctx.fillRect(px + 15, py + 1, 2, 6);
}
function drawPlayer() {
  const set = FR[P.dir], f = P.moving ? 1 + (Math.floor(P.anim * 8) % 3) : 0;
  const fr = set[f === 3 ? 0 : f] || set[0];
  const px = Math.round(P.x - cam.x), py = Math.round(P.y - cam.y);
  ctx.fillStyle = 'rgba(29,20,24,.3)'; ctx.fillRect(px + 3, py + 13, 10, 3);
  ctx.drawImage(fr, px - 1, py - 10);
}

/* ---------------- RENDER: ROOMS ---------------- */
function drawRoom(t) {
  const id = room.id, oy = -cam.y;
  const R = (x, y, w, h, c) => { ctx.fillStyle = c; ctx.fillRect(x, y + oy, w, h); };
  ctx.fillStyle = '#0b0b0d'; ctx.fillRect(0, 0, VW, VH);
  const S = {
    darkroom: { wall: '#4a1d22', wall2: '#3c161a', trim: '#22090c', f1: '#2a2024', f2: '#33282b' },
    hq: { wall: '#7c9a95', wall2: '#6e8b86', trim: '#3f524f', f1: '#b99a6c', f2: '#a98a5e' },
    cinema: { wall: '#5c1c2c', wall2: '#4a1624', trim: '#c9a24a', f1: '#3a2240', f2: '#45294c' },
    home: { wall: '#d9c7a0', wall2: '#cbb78e', trim: '#7a5a3a', f1: '#a77a4c', f2: '#98703f' }
  }[id];
  // floor
  for (let y = 2; y < RH; y++) for (let x = 0; x < RW; x++) {
    const px = x * TS, py = y * TS;
    if (id === 'darkroom') R(px, py, TS, TS, (x + y) % 2 ? S.f1 : S.f2);
    else if (id === 'cinema') { R(px, py, TS, TS, S.f1); if ((x + y) % 2) { R(px + 6, py + 6, 4, 4, S.f2); } }
    else { R(px, py, TS, TS, S.f1); R(px, py + 7, TS, 1, S.f2); R(px, py + 15, TS, 1, S.f2); R(px + ((y % 2) ? 4 : 12), py, 1, 7, S.f2); R(px + ((y % 2) ? 10 : 2), py + 8, 1, 7, S.f2); }
  }
  // wall
  R(0, 0, VW, 32, S.wall);
  if (id === 'cinema') for (let x = 0; x < VW; x += 8) R(x, 0, 4, 32, S.wall2);
  else if (id === 'home') for (let y = 4; y < 30; y += 8) for (let x = (y % 16 ? 4 : 0); x < VW; x += 8) R(x, y, 2, 2, S.wall2);
  else for (let x = 0; x < VW; x += 16) R(x, 0, 1, 32, S.wall2);
  R(0, 29, VW, 3, S.trim); R(0, 32, VW, 2, 'rgba(0,0,0,.35)');
  // rug in home
  if (id === 'home') { R(104, 72, 112, 64, '#7a2f2a'); R(108, 76, 104, 56, '#b8574a'); for (let x = 112; x < 208; x += 8) { R(x, 80, 4, 4, C.gold); R(x + 4, 124, 4, 4, C.gold); } }
  // exit mat
  R(144, 160, 32, 16, '#6b4b32'); R(146, 162, 28, 12, '#8a6440'); text('EXIT', 160, 165, '#f3ead3', 8, 'center');
  // per room content
  if (id === 'darkroom') { drawDarkroom(R, t); ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = '#ffb0a0'; ctx.fillRect(0, 0, VW, VH); ctx.restore(); drawFrames(R, t, false); }
  if (id === 'hq') drawHQ(R, t);
  if (id === 'cinema') drawCinema(R, t);
  // player + depth: draw objects below player rows after
  drawPlayer();
  if (id === 'cinema') { drawPosters(R, t, true); drawSeats(R, true); }
  if (id === 'darkroom') drawFrames(R, t, true);
  if (id === 'darkroom') { ctx.fillStyle = `rgba(255,60,40,${.04 + Math.sin(t * 2) * .015})`; ctx.fillRect(0, 0, VW, VH); }
  // seen ticks
  Object.entries(room.it).forEach(([k, v]) => { if (!v.item || !seen.has(v.item)) return; const [x, y] = k.split(',').map(Number); if ((id === 'hq' && (y === 3 || y === 6)) || id === 'darkroom' || id === 'cinema') return; const px = x * TS + 11, py = y * TS - (id === 'hq' ? 10 : -1) + oy; ctx.fillStyle = OUT; ctx.fillRect(px - 1, py - 1, 7, 7); ctx.fillStyle = C.gold; ctx.fillRect(px, py, 5, 5); ctx.fillStyle = OUT; ctx.fillRect(px + 1, py + 2, 1, 1); ctx.fillRect(px + 2, py + 3, 1, 1); ctx.fillRect(px + 3, py + 1, 1, 2); });
}
function frameImg(id, x, y, w, h, R, border = '#f5efe4') { R(x - 2, y - 2, w + 4, h + 4, OUT); R(x - 1, y - 1, w + 2, h + 2, border); thumb(ctx, IMG[id], x, y + (-cam.y), w, h, ITEMS[id].kind !== 'photo'); }
function drawDarkroom(R, t) {
  // clothesline with drying film strips
  R(8, 8, VW - 16, 1, '#c9b08a');
  for (let x = 24; x < VW - 20; x += 36) { R(x, 6, 3, 4, '#c9a26b'); R(x - 2, 10, 7, 16, '#1a1214'); for (let k = 0; k < 4; k++) R(x - 1, 11 + k * 4, 5, 3, ['#6b4a44', '#8a5a4a', '#5a3a36', '#7a524a'][(k + x) % 4]); }
  // safelight
  R(0, 0, 10, 10, '#ff3b2a'); ctx.fillStyle = `rgba(255,59,42,${.25 + Math.sin(t * 3) * .08})`; ctx.fillRect(0, 0 - cam.y, 40, 30);
  // gallery runner rug
  R(16, 56, 288, 88, '#3a1c20'); R(18, 58, 284, 84, '#4e2328'); for (let x = 24; x < 300; x += 12) { R(x, 60, 4, 2, '#7a3a38'); R(x + 6, 138, 4, 2, '#7a3a38'); }
  // plants
  [[1, 9], [18, 9]].forEach(([x, y]) => { const px = x * TS, py = y * TS; R(px + 3, py + 8, 10, 8, OUT); R(px + 4, py + 9, 8, 6, '#6b4428'); ctx.drawImage(BUSH, px + 1, py - 1 - cam.y); });
}
function drawFrames(R, t, front) {
  DFR.forEach(([x, y], i) => {
    if (front !== (y * TS > P.y)) return;
    const p = PHOTOS[i], im = IMG[p.id], sq = im && im.naturalWidth && Math.abs(im.naturalWidth - im.naturalHeight) < 20;
    const pw = sq ? 16 : 22, ph = sq ? 16 : 15, cx = x * TS + 8, base = y * TS + 14;
    const fx = cx - pw / 2 - 3, fy = base - ph - 14, fw = pw + 6, fh = ph + 6;
    // warm pool of light on the floor
    ctx.fillStyle = 'rgba(255,214,140,.10)'; ctx.fillRect(cx - 14, base - 2 - cam.y, 28, 5); ctx.fillRect(cx - 10, base - 4 - cam.y, 20, 9);
    // easel
    R(cx - 7, fy + fh - 2, 2, base - (fy + fh) + 2, OUT); R(cx + 5, fy + fh - 2, 2, base - (fy + fh) + 2, OUT); R(cx - 1, fy - 4, 2, base - fy + 2, OUT);
    R(cx - 6, fy + fh - 2, 1, base - (fy + fh) + 1, '#8a5a34'); R(cx + 6, fy + fh - 2, 1, base - (fy + fh) + 1, '#8a5a34'); R(cx - 9, fy + fh, 18, 2, '#6b4428');
    // frame, mat, photo
    ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.fillRect(fx + 2, fy + 2 - cam.y, fw, fh);
    R(fx - 1, fy - 1, fw + 2, fh + 2, OUT); R(fx, fy, fw, fh, FRAMECOL[i]); R(fx + 2, fy + 2, fw - 4, fh - 4, '#f8f3e6');
    thumb(ctx, im, fx + 3, fy + 3 - cam.y, pw, ph);
    R(fx, fy, fw, 1, 'rgba(255,255,255,.25)');
    if (seen.has(p.id)) { R(fx + fw - 3, fy - 3, 7, 7, OUT); R(fx + fw - 2, fy - 2, 5, 5, C.gold); }
  });
}
function drawHQ(R, t) {
  for (const x of [1, 4, 14, 17]) { R(x * TS - 2, 6, 28, 18, OUT); R(x * TS, 8, 24, 14, '#a9d0e0'); R(x * TS, 8, 24, 3, '#d3ebf3'); R(x * TS + 11, 8, 2, 14, OUT); }
  R(140, 4, 40, 22, OUT); R(142, 6, 36, 18, '#f4f1e8'); ctx.fillStyle = '#2f6f6a'; ctx.fillRect(146, 10 - cam.y, 12, 1); ctx.fillRect(146, 14 - cam.y, 22, 1); ctx.fillRect(146, 18 - cam.y, 16, 1); ctx.fillStyle = C.red; ctx.fillRect(166, 9 - cam.y, 6, 6);
  MISSIONS.forEach((m, i) => { const [x, y] = [[3, 4], [7, 4], [12, 4], [16, 4], [3, 7], [7, 7], [12, 7], [16, 7]][i]; const px = x * TS, py = y * TS;
    R(px - 4, py + 2, 24, 12, OUT); R(px - 3, py + 3, 22, 6, '#8a5a34'); R(px - 3, py + 9, 22, 2, '#6b4428'); R(px - 3, py + 11, 2, 3, OUT); R(px + 17, py + 11, 2, 3, OUT);
    R(px + 1, py - 10, 14, 13, OUT); R(px + 2, py - 9, 12, 11, '#d8cfb6'); R(px + 3, py - 8, 10, 8, '#0f1a14');
    ctx.globalAlpha = .85; thumb(ctx, IMG[m.id], px + 3, py - 8 - cam.y, 10, 8, true); ctx.globalAlpha = 1;
    if (Math.floor(t * 2 + i) % 4 === 0) { ctx.fillStyle = 'rgba(120,255,160,.25)'; ctx.fillRect(px + 3, py - 8 - cam.y, 10, 8); }
    R(px + 5, py + 3, 6, 1, '#d8cfb6'); });
  R(18 * TS + 2, 2 * TS - 6, 12, 22, OUT); R(18 * TS + 3, 2 * TS - 5, 10, 8, '#bfe0f0'); R(18 * TS + 3, 2 * TS + 3, 10, 12, '#e8e4da');
  [[1, 2], [1, 9], [18, 9]].forEach(([x, y]) => { const px = x * TS, py = y * TS; R(px + 3, py + 8, 10, 8, OUT); R(px + 4, py + 9, 8, 6, '#a8483c'); ctx.drawImage(BUSH, px + 1, py - 1 - cam.y); });
}
function drawCinema(R, t) {
  // screen with curtains, cycling through the films
  const sx = 96, sw = 128;
  R(sx - 6, 1, sw + 12, 30, '#2a0e16');
  R(sx - 1, 3, sw + 2, 25, OUT);
  ctx.fillStyle = '#1a0d14'; ctx.fillRect(sx, 4 - cam.y, sw, 23);
  for (let x = sx + 3; x < sx + sw - 2; x += 6) { const on = (Math.floor(t * 4) + x / 6) % 2 < 1; ctx.fillStyle = on ? '#ffe08a' : '#6b4a2a'; ctx.fillRect(x, 5 - cam.y, 2, 2); ctx.fillRect(x, 24 - cam.y, 2, 2); }
  text('NOW SHOWING', sx + sw / 2, 9 - cam.y, '#ffd67a', 8, 'center', '#7a2018');
  text('UNLABELED', sx + sw / 2, 16 - cam.y, '#f3ead3', 8, 'center');
  for (const side of [0, 1]) { const cx = side ? sx + sw - 4 : sx - 10; R(cx, 1, 14, 30, '#8f1f2e'); for (let k = 0; k < 14; k += 4) R(cx + k, 1, 1, 30, '#6b1622'); R(cx, 1, 14, 2, C.gold); }
  R(sx - 6, 0, sw + 12, 3, C.gold);
  // wall sconces
  for (const x of [24, 64, 256, 296]) { R(x - 3, 8, 8, 10, OUT); R(x - 2, 9, 6, 8, '#ffd67a'); ctx.fillStyle = `rgba(255,214,122,${.18 + Math.sin(t * 2 + x) * .04})`; ctx.fillRect(x - 10, 4 - cam.y, 22, 22); }
  // aisle runner with lights
  R(136, 34, 48, 126, '#5a2236'); for (let y = 40; y < 158; y += 10) { R(138, y, 2, 2, (Math.floor(t * 3 + y / 10) % 2) ? '#ffe08a' : '#7a5a2a'); R(180, y, 2, 2, (Math.floor(t * 3 + y / 10) % 2) ? '#7a5a2a' : '#ffe08a'); }
  drawPosters(R, t, false);
  drawSeats(R, false);
  // popcorn + ticket stand
  R(18 * TS, 2 * TS - 4, 16, 20, OUT); R(18 * TS + 1, 2 * TS - 3, 14, 18, C.red); R(18 * TS + 1, 2 * TS - 3, 14, 6, '#f3ead3'); for (let i = 0; i < 4; i++) R(18 * TS + 2 + i * 3, 2 * TS - 6, 3, 3, '#ffe08a');
  R(1 * TS + 1, 2 * TS - 2, 14, 18, OUT); R(1 * TS + 2, 2 * TS - 1, 12, 16, '#c9a24a'); R(1 * TS + 4, 2 * TS + 2, 8, 5, '#f3ead3');
}
function drawPosters(R, t, front) {
  CFR.forEach(([x, y], i) => {
    if (front !== (y * TS > P.y)) return;
    const f = FILMS[i], cx = x * TS + 8, base = y * TS + 14, pw = 16, ph = 22;
    const fx = cx - pw / 2 - 3, fy = base - ph - 12, fw = pw + 6, fh = ph + 6;
    ctx.fillStyle = 'rgba(255,214,140,.10)'; ctx.fillRect(cx - 13, base - 3 - cam.y, 26, 6);
    // stand
    R(cx - 1, fy + fh - 2, 2, base - (fy + fh) + 2, OUT); R(cx - 6, base - 1, 12, 2, OUT); R(cx - 5, base - 1, 10, 1, '#c9a24a');
    // frame with marquee bulbs
    ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.fillRect(fx + 2, fy + 2 - cam.y, fw, fh);
    R(fx - 1, fy - 1, fw + 2, fh + 2, OUT); R(fx, fy, fw, fh, '#c9a24a'); R(fx + 1, fy + 1, fw - 2, fh - 2, '#8a6a2a'); R(fx + 2, fy + 2, fw - 4, fh - 4, '#1a1014');
    thumb(ctx, IMG[f.id], fx + 3, fy + 3 - cam.y, pw, ph, true);
    for (let k = 0; k < 4; k++) { const on = (Math.floor(t * 3) + k + i) % 2; R(fx + 2 + k * 6, fy - 3, 2, 2, on ? '#ffe08a' : '#7a5a2a'); }
    if (seen.has(f.id)) { R(fx + fw - 3, fy - 3, 7, 7, OUT); R(fx + fw - 2, fy - 2, 5, 5, C.gold); }
  });
}
function drawSeats(R, front) {
  [9].forEach(y => { if (front !== (y * TS > P.y)) return; [[1, 5], [14, 18]].forEach(([a, b]) => { for (let x = a; x <= b; x++) { const px = x * TS, py = y * TS; R(px, py + 2, 16, 14, OUT); R(px + 1, py + 3, 14, 7, '#8f2d3a'); R(px + 1, py + 10, 14, 4, '#6b1f2b'); R(px + 1, py + 3, 14, 2, '#b04050'); } }); });
}
function drawHome(R, t) {
  // mirror with her reflection
  R(4 * TS - 1, 2, 18, 28, OUT); R(4 * TS, 3, 16, 26, C.gold); R(4 * TS + 2, 5, 12, 22, '#bcd3da'); ctx.drawImage(PORTRAIT, 4 * TS + 1, 7 - cam.y, 14, 15);
  R(4 * TS + 3, 6, 2, 6, 'rgba(255,255,255,.6)');
  // bookshelf
  R(8 * TS - 1, 2, 34, 28, OUT); R(8 * TS, 3, 32, 26, '#6b4428'); for (let s = 0; s < 2; s++) { R(8 * TS + 2, 5 + s * 12, 28, 10, '#3a2618'); for (let i = 0; i < 9; i++) R(8 * TS + 3 + i * 3, 6 + s * 12 + (i % 3 ? 1 : 0), 2, 9 - (i % 3 ? 1 : 0), ['#c2412d', '#e0b44a', '#2f6f6a', '#62739b', '#f3ead3'][(i + s) % 5]); }
  // window
  R(13 * TS - 2, 4, 36, 22, OUT); R(13 * TS, 6, 32, 18, '#9cc3d6'); R(13 * TS + 15, 6, 2, 18, OUT); R(13 * TS - 2, 4, 6, 24, '#c2412d'); R(14 * TS + 12, 4, 6, 24, '#c2412d');
  // desk + computer
  R(16 * TS - 4, 2 * TS + 2, 24, 12, OUT); R(16 * TS - 3, 2 * TS + 3, 22, 6, '#8a5a34'); R(16 * TS + 1, 2 * TS - 10, 14, 13, OUT); R(16 * TS + 2, 2 * TS - 9, 12, 11, '#d8cfb6'); R(16 * TS + 3, 2 * TS - 8, 10, 8, '#0f2a1a');
  ctx.fillStyle = '#7dff9a'; ctx.fillRect(16 * TS + 4, 2 * TS - 7 - cam.y, 6, 1); ctx.fillRect(16 * TS + 4, 2 * TS - 5 - cam.y, 4, 1); if (Math.floor(t * 2) % 2) ctx.fillRect(16 * TS + 9, 2 * TS - 5 - cam.y, 2, 1);
  // bed
  R(2 * TS - 1, 4 * TS - 1, 34, 50, OUT); R(2 * TS, 4 * TS, 32, 48, '#6b4428'); R(2 * TS + 2, 4 * TS + 2, 28, 10, '#f3ead3'); R(2 * TS + 2, 4 * TS + 12, 28, 34, '#2f6f6a'); for (let y = 4 * TS + 16; y < 6 * TS + 14; y += 6) R(2 * TS + 2, y, 28, 2, '#3f8a84');
  // plants
  [[18, 2], [17, 9]].forEach(([x, y]) => { const px = x * TS, py = y * TS; R(px + 3, py + 8, 10, 8, OUT); R(px + 4, py + 9, 8, 6, '#a8483c'); ctx.drawImage(BUSH, px + 1, py - 1 - cam.y); });
}

/* ---------------- RENDER: INTRO & TITLE ---------------- */
function dither(y0, y1, c1, c2) { for (let y = y0; y < y1; y++) for (let x = 0; x < VW; x++) { const tt = (y - y0) / (y1 - y0), th = ((x & 1) + (y & 1) * 2) / 4; ctx.fillStyle = tt > th + .125 ? c2 : c1; ctx.fillRect(x, y, 1, 1); } }
let SKY = null;
function titleBg() {
  if (!SKY) {
    const c = document.createElement('canvas'); c.width = VW; c.height = VH; const g = c.getContext('2d'); const old = ctx;
    const bands = ['#1f1530', '#3a2347', '#6b2f52', '#a8424f', '#d8714a', '#f0a95a'];
    for (let i = 0; i < bands.length - 1; i++) { const y0 = Math.round(i * 22), y1 = Math.round((i + 1) * 22); for (let y = y0; y < y1; y++) for (let x = 0; x < VW; x++) { const tt = (y - y0) / (y1 - y0), th = ((x & 1) + (y & 1) * 2) / 4 + .125; g.fillStyle = tt > th ? bands[i + 1] : bands[i]; g.fillRect(x, y, 1, 1); } }
    g.fillStyle = bands[5]; g.fillRect(0, 110, VW, 20);
    // striped retro sun
    for (let y = -34; y <= 0; y++) { const w = Math.round(Math.sqrt(34 * 34 - y * y)); if (y > -18 && (y % 5 === 0 || y % 5 === -1)) continue; g.fillStyle = y < -22 ? '#ffe08a' : y < -10 ? '#ffc36a' : '#ff9a5a'; g.fillRect(160 - w, 118 + y, w * 2, 1); }
    // skyline: the four buildings
    g.fillStyle = '#24162c';
    const sk = [[0, 108, 40, 30], [36, 100, 18, 40], [54, 112, 30, 30], [86, 92, 30, 50], [120, 104, 22, 40], [196, 98, 26, 44], [222, 84, 34, 60], [256, 102, 24, 40], [280, 110, 40, 40]];
    sk.forEach(([x, y, w, h]) => g.fillRect(x, y, w, h));
    g.fillRect(232, 76, 2, 8); g.fillRect(96, 86, 12, 6);
    g.fillStyle = '#ffd67a'; for (let i = 0; i < 40; i++) { const [x, y, w, h] = sk[i % sk.length]; const wx = x + 3 + Math.floor(hash(i, 3) * (w - 6)), wy = y + 4 + Math.floor(hash(i, 7) * (h - 20)); g.fillRect(wx, wy, 2, 2); }
    g.fillStyle = '#1d1418'; g.fillRect(0, 132, VW, 48);
    g.fillStyle = '#2b1f2b'; for (let x = -320; x < 640; x += 24) { g.beginPath(); g.moveTo(160 + (x - 160) * .2, 132); g.lineTo(x, 180); g.lineTo(x + 1, 180); g.lineTo(160 + (x - 160) * .2 + 1, 132); g.fill(); }
    for (const y of [136, 142, 151, 164]) g.fillRect(0, y, VW, 1);
    SKY = c;
  }
  ctx.drawImage(SKY, 0, 0);
}
function bigText(s, x, y, size, col, sh) { ctx.font = font(size, true); ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillStyle = OUT; for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1], [2, 2], [3, 3]]) ctx.fillText(s, x + dx, y + dy); if (sh) { ctx.fillStyle = sh; ctx.fillText(s, x + 2, y + 2); } ctx.fillStyle = col; ctx.fillText(s, x, y); }
function drawIntro(t) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  if (t < 1) {
    ctx.fillStyle = '#05050a'; ctx.fillRect(0, 0, VW, VH);
    for (let i = 0; i < 18; i++) { ctx.fillStyle = `rgba(255,255,255,${Math.random() * .25})`; ctx.fillRect(0, Math.random() * VH, VW, Math.random() * 2); }
  } else if (t < 4.6) {
    const k = (t - 1) / 1.2, n = 3 - Math.floor(k), fr = k % 1, jx = Math.random() < .3 ? 1 : 0, jy = Math.random() < .2 ? -1 : 0;
    ctx.fillStyle = '#b9a477'; ctx.fillRect(0, 0, VW, VH);
    ctx.translate(jx, jy);
    ctx.fillStyle = '#8c7a52';
    ctx.beginPath(); ctx.moveTo(160, 90); ctx.arc(160, 90, 120, -Math.PI / 2, -Math.PI / 2 + fr * Math.PI * 2); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#2b2216'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(160, 90, 62, 0, Math.PI * 2); ctx.stroke(); ctx.beginPath(); ctx.arc(160, 90, 50, 0, Math.PI * 2); ctx.stroke();
    ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, 90); ctx.lineTo(VW, 90); ctx.moveTo(160, 0); ctx.lineTo(160, VH); ctx.stroke();
    bigText(String(Math.max(1, n)), 160, 62, 48, '#f3ead3');
    ctx.fillStyle = '#e8dcbc'; for (let y = 4; y < VH; y += 16) { ctx.fillRect(6, y, 8, 9); ctx.fillRect(VW - 14, y, 8, 9); }
    for (let i = 0; i < 3; i++) { ctx.fillStyle = `rgba(40,30,20,${Math.random() * .5})`; ctx.fillRect(Math.random() * VW, 0, 1, VH); }
    for (let i = 0; i < 120; i++) { ctx.fillStyle = `rgba(40,30,20,${Math.random() * .35})`; ctx.fillRect(Math.random() * VW, Math.random() * VH, 1, 1); }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const g = ctx.createRadialGradient(160, 90, 60, 160, 90, 200); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(30,20,10,.65)'); ctx.fillStyle = g; ctx.fillRect(0, 0, VW, VH);
  } else if (t < 7.8) {
    const k = t - 4.6;
    ctx.fillStyle = '#100c12'; ctx.fillRect(0, 0, VW, VH);
    const a = clamp(k / .8, 0, 1) * clamp((3.2 - k) / .5, 0, 1);
    ctx.globalAlpha = a;
    bigText('U C P', 160, 50, 24, C.gold);
    text('PRESENTS', 160, 82, '#cfc4ad', 8, 'center');
    ctx.globalAlpha = 1;
    const wx = clamp(-24 + k * 95, -24, 152), walking = wx < 152;
    const f = walking ? FR.right[1 + Math.floor(k * 8) % 3] || FR.right[0] : FR.down[0];
    ctx.globalAlpha = clamp((3.2 - k) / .5, 0, 1);
    ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.fillRect(0, 140, VW, 1);
    ctx.drawImage(f, Math.round(wx) - 1, 114);
    ctx.globalAlpha = 1;
  } else {
    const k = t - 7.8;
    titleBg();
    const word = 'PORTFOLIO';
    bigText('NOT A', 160, 20 - Math.max(0, (1 - k * 3)) * 40, 16, '#f3ead3');
    for (let i = 0; i < word.length; i++) { const d = clamp((k - .2 - i * .06) * 4, 0, 1), bounce = d < 1 ? (1 - d) * -50 : Math.sin(Math.max(0, k - 1.5) * 3 + i * .5) * .6; ctx.globalAlpha = d > 0 ? 1 : 0; bigText(word[i], 160 - (word.length - 1) * 12 + i * 24, 40 + bounce, 32, '#ffd67a', C.red); }
    ctx.globalAlpha = 1;
    if (k > .9) { ctx.fillStyle = 'rgba(29,20,24,.85)'; ctx.fillRect(84, 80, 152, 12); text('AN ARCHIVE OF BRAIN FARTS', 160, 82, '#f3ead3', 8, 'center'); }
    const fr = FR.down[k > 1.2 && Math.floor(k * 2) % 4 === 0 ? 1 : 0];
    ctx.save(); ctx.imageSmoothingEnabled = false; ctx.drawImage(fr, 40, 104, 36, 52); ctx.restore();
    ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.fillRect(44, 154, 28, 3);
    ctx.drawImage(CAT, 266, 141);
    if ($('menu').hidden && k > 1.3 && Math.floor(k * 2) % 2 === 0) text('PRESS START', 160, 128, '#f3ead3', 8, 'center', OUT);
    text('© 2026 UCP', 160, 170, 'rgba(243,234,211,.55)', 8, 'center');
  }
  // VHS OSD
  if (t < 7.8) {
    text('PLAY ▶', 12, 10, '#f3ead3', 8, 'left', OUT);
    text('SP', VW - 24, 10, '#f3ead3', 8, 'left', OUT);
    const s = Math.floor(t); text(`0:00:${String(s).padStart(2, '0')}`, 12, VH - 18, '#f3ead3', 8, 'left', OUT);
    if (Math.random() < .25) { ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.fillRect(0, Math.random() * VH, VW, 3); }
  }
}

/* ---------------- MAIN LOOP ---------------- */
const STEP = .15;
function update(dt) {
  if (scene === 'intro') { introT += dt; if (introT >= 7.8) { scene = 'title'; $('skip').hidden = true; } return; }
  if (scene === 'title') { introT += dt; if (introT > 9.1 && $('menu').hidden && $('modal').hidden) showMenu(); return; }
  if (scene !== 'play') return;
  playT += dt;
  if (trans) { trans.t += dt; if (!trans.done && trans.t >= .35) { trans.done = true; trans.cb && trans.cb(); trans.t = .35; } if (trans.t >= .75) trans = null; }
  const blocked = !$('modal').hidden || (trans && !trans.done);
  if (marker) marker.t += dt;
  if (!P.moving && !blocked) {
    const hd = held[held.length - 1];
    let dir = null, next = null;
    if (hd) { dir = hd; path = []; pendingUse = null; marker = null; }
    else if (path.length) { next = path.shift(); const dx = next[0] - P.tx, dy = next[1] - P.ty; dir = dx > 0 ? 'right' : dx < 0 ? 'left' : dy > 0 ? 'down' : 'up'; }
    if (dir) {
      P.dir = dir; const [dx, dy] = D[dir], nx = P.tx + dx, ny = P.ty + dy;
      if (walkable(nx, ny)) { P.moving = true; P.t = 0; P.fx = P.tx; P.fy = P.ty; P.tx = nx; P.ty = ny; if (sound) blip(140 + Math.random() * 30, .02, 'square', .015); }
      else { path = []; }
    } else if (pendingUse) { const u = pendingUse; pendingUse = null; marker = null; useAt(u.x, u.y); }
  }
  if (P.moving) {
    P.t += dt / STEP; P.anim += dt;
    const k = Math.min(1, P.t); P.x = (P.fx + (P.tx - P.fx) * k) * TS; P.y = (P.fy + (P.ty - P.fy) * k) * TS;
    if (P.t >= 1) {
      P.moving = false; P.x = P.tx * TS; P.y = P.ty * TS;
      if (where === 'town') { const b = BUILDINGS.find(b => b.door === P.tx && b.dy === P.ty); if (b) enter(b); }
      else if (room.g[P.ty][P.tx] === 'X') leave();
      if (!path.length && !pendingUse) marker = null;
    }
  } else P.anim = 0;
  // hint
  let hint = '';
  if (!blocked && !P.moving) { const i = nearbyInter(); if (i) hint = `<kbd>E</kbd>${esc(i.label)}`; else { const d = doorAhead(); if (d) hint = `<kbd>↑</kbd>Enter ${ZONES[d.id].lvl} · ${esc(ZONES[d.id].name)}`; else if (where !== 'town' && P.ty >= 9 && Math.abs(P.tx - 10) <= 1) hint = '<kbd>↓</kbd>Back to the map'; else if (where === 'town' && playT < 8) hint = 'Arrows / WASD or click to walk · walk into a door to enter'; else if (where !== 'town' && playT < 30 && !P.moving) hint = 'Walk up to a piece · A or E to look · B or Esc to leave'; } }
  const h = $('hint'); if (h._v !== hint) { h._v = hint; h.innerHTML = hint; h.hidden = !hint; }
}
function render(t) {
  ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1;
  if (scene === 'intro' || scene === 'title' || scene === 'boot') { if (scene === 'boot') { ctx.fillStyle = '#05050a'; ctx.fillRect(0, 0, VW, VH); } else drawIntro(introT); return; }
  camera();
  if (where === 'town') drawTown(t); else drawRoom(t);
  if (marker && path.length) { const px = marker.x * TS - cam.x, py = marker.y * TS - cam.y; if (Math.floor(marker.t * 4) % 2 === 0) { ctx.strokeStyle = C.gold; ctx.lineWidth = 1; ctx.strokeRect(px + 1.5, py + 1.5, 13, 13); } }
  // prompt bubble
  if (!P.moving && $('modal').hidden) { const i = nearbyInter() || doorAhead(); if (i) { const px = Math.round(P.x - cam.x) + 4, py = Math.round(P.y - cam.y) - 22 + (Math.floor(t * 3) % 2); ctx.fillStyle = OUT; ctx.fillRect(px - 1, py - 1, 10, 10); ctx.fillStyle = C.paper; ctx.fillRect(px, py, 8, 8); ctx.fillRect(px + 3, py + 8, 2, 2); text(i.door !== undefined ? '↑' : 'E', px + 4, py, OUT, 8, 'center'); } }
  if (trans) { const k = trans.t < .35 ? 1 - trans.t / .35 : (trans.t - .35) / .4; const r = Math.max(0, k) * 220; const cx = Math.round(P.x - cam.x) + 8, cy = Math.round(P.y - cam.y) + 4; ctx.fillStyle = '#000'; ctx.beginPath(); ctx.rect(0, 0, VW, VH); ctx.arc(cx, cy, r, 0, Math.PI * 2, true); ctx.fill('evenodd'); }
}
function loop(ts) {
  const dt = Math.min(.05, (ts - (lastTs || ts)) / 1000); lastTs = ts;
  update(dt); render(ts / 1000);
  requestAnimationFrame(loop);
}

/* ---------------- INPUT ---------------- */
const KEYS = { arrowup: 'up', w: 'up', arrowdown: 'down', s: 'down', arrowleft: 'left', a: 'left', arrowright: 'right', d: 'right' };
function press(dir) { if (!held.includes(dir)) held.push(dir); }
function release(dir) { const i = held.indexOf(dir); if (i >= 0) held.splice(i, 1); }
document.addEventListener('keydown', e => {
  const k = e.key.toLowerCase(), inUI = e.target.closest && e.target.closest('.modal,.menu,.below,a,input');
  if (!$('lightbox').hidden) { if (k === 'escape') { e.preventDefault(); back(); } return; }
  if (!$('modal').hidden) {
    if (k === 'escape') { e.preventDefault(); back(); }
    else if (k === 'arrowleft' && modalNav) { e.preventDefault(); modalNav(-1); }
    else if (k === 'arrowright' && modalNav) { e.preventDefault(); modalNav(1); }
    return;
  }
  if (KEYS[k] && scene === 'play') { e.preventDefault(); press(KEYS[k]); return; }
  if (k === 'e' || ((k === 'enter' || k === ' ') && !inUI)) { e.preventDefault(); act(); return; }
  if (k === 'escape' || k === 'backspace') { e.preventDefault(); back(); return; }
  if (k === 'm') { e.preventDefault(); openIndex(); return; }
  if (k === 'p') { e.preventDefault(); openProfile(); return; }
  if (scene === 'intro') skipIntro();
});
document.addEventListener('keyup', e => { const k = KEYS[e.key.toLowerCase()]; if (k) release(k); });
window.addEventListener('blur', () => { held.length = 0; });
cv.addEventListener('pointerdown', e => {
  if (scene === 'intro') { skipIntro(); return; }
  if (scene === 'title') { if (!$('menu').hidden) return; showMenu(); return; }
  if (scene !== 'play' || trans) return;
  const r = cv.getBoundingClientRect(), x = (e.clientX - r.left) * VW / r.width + cam.x, y = (e.clientY - r.top) * VH / r.height + cam.y;
  walkTo(Math.floor(x / TS), Math.floor(y / TS));
});
document.querySelectorAll('.dpad button').forEach(b => {
  const dir = b.dataset.dir;
  b.addEventListener('pointerdown', e => { e.preventDefault(); b.setPointerCapture(e.pointerId); b.classList.add('on'); if (scene === 'play') press(dir); else if (scene === 'intro') skipIntro(); });
  const up = () => { b.classList.remove('on'); release(dir); };
  b.addEventListener('pointerup', up); b.addEventListener('pointercancel', up); b.addEventListener('lostpointercapture', up);
});
$('aBtn').addEventListener('click', act);
$('bBtn').addEventListener('click', back);
$('pBtn').addEventListener('click', openProfile);
$('zone').addEventListener('click', () => { if (scene === 'play' && where !== 'town') back(); });
$('skip').addEventListener('click', skipIntro);
$('bIndex').addEventListener('click', openIndex);
$('bProfile').addEventListener('click', openProfile);
$('bContact').addEventListener('click', openContact);
$('bReplay').addEventListener('click', replayIntro);

/* ---------------- WINDOWS ---------------- */
let modalNav = null, lastFocus = null;
function openModal(title, html, opts = {}) {
  if ($('modal').hidden) lastFocus = document.activeElement;
  const win = $('win');
  win.innerHTML = `<div class="bar"><span class="z" id="winTitle">${title}</span><span class="sp"></span>${opts.index !== false ? '<button type="button" data-w="index">Index</button>' : ''}<button type="button" data-w="close">Close ✕</button></div>${html}`;
  $('modal').hidden = false; held.length = 0;
  modalNav = opts.nav || null;
  win.querySelector('[data-w="close"]').focus({ preventScroll: true });
  win.querySelectorAll('[data-zoom]').forEach(el => el.addEventListener('click', () => lightbox(el.dataset.zoom, el.dataset.cap, !!el.dataset.big)));
  win.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', () => {
    const v = b.dataset.copy, ok = () => { b.textContent = 'Copied'; setTimeout(() => b.textContent = 'Copy', 1500); };
    const sel = () => { const t = win.querySelector('code'); const r = document.createRange(); r.selectNodeContents(t); const g = getSelection(); g.removeAllRanges(); g.addRange(r); toast('Selected. Press Ctrl/Cmd+C'); };
    try { navigator.clipboard.writeText(v).then(ok, sel); } catch (e) { sel(); }
  }));
  win.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => { const k = b.dataset.open; if (ITEMS[k]) openItem(k); else if (k === 'profile') openProfile(); else if (k === 'contact') openContact(); }));
}
$('win').addEventListener('click', e => {
  const b = e.target.closest('[data-w]'); if (!b) return;
  if (b.dataset.w === 'close') closeModal(); else if (b.dataset.w === 'index') openIndex(); else if (b.dataset.w === 'prev') modalNav(-1); else if (b.dataset.w === 'next') modalNav(1);
});
$('modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
function closeModal() { $('modal').hidden = true; modalNav = null; if (lastFocus && lastFocus.focus && document.contains(lastFocus)) try { lastFocus.focus({ preventScroll: true }); } catch (e) { } }
function lightbox(src, cap, zoomable) { const lb = $('lightbox'); $('lbImg').src = src; $('lbImg').alt = cap || ''; $('lbCap').textContent = (cap || '') + (zoomable ? ' · tap to zoom · Esc to close' : ' · tap or Esc to close'); lb.classList.remove('zoomed'); lb.dataset.z = zoomable ? '1' : ''; lb.hidden = false; }
$('lightbox').addEventListener('click', e => { const lb = $('lightbox'); if (lb.dataset.z && !lb.classList.contains('zoomed') && e.target.id === 'lbImg') { lb.classList.add('zoomed'); return; } lb.hidden = true; });

function markSeen(id) {
  const had = seen.has(id); seen.add(id); saveSeen(); updateFound();
  if (!had && seen.size === TOTAL) setTimeout(() => toast('All 24 pieces found'), 400);
}
function openItem(id) {
  const it = ITEMS[id], z = ZONES[it.zone], list = z.list, i = list.indexOf(it);
  markSeen(id);
  let body;
  if (it.kind === 'photo') body = `<div class="body"><div class="media"><div class="frame zoom" data-zoom="${it.img}" data-cap="${esc(it.title)}, ${it.year}"><img src="${it.img}" alt="${esc(it.title)}"></div></div>
    <div class="txt"><span class="kicker">Memory log #${String(i + 1).padStart(3, '0')}</span><h2>${esc(it.title)}</h2><p style="font-family:var(--pixel);font-size:13px;color:var(--muted)">${it.year}</p><p>${esc(it.desc)}</p>
    <div class="actions"><button class="btn alt" type="button" data-zoom="${it.img}" data-cap="${esc(it.title)}, ${it.year}">View full size</button></div></div></div>`;
  else if (it.kind === 'mission') body = `<div class="body"><div class="media"><div class="frame zoom" data-zoom="${it.img}" data-cap="${esc(it.title)}" data-big="1"><img src="${it.img}" alt="Case study slide: ${esc(it.title)}"></div><p style="margin:0;font-family:var(--pixel);font-size:11px;letter-spacing:.1em;color:var(--muted)">TAP THE SLIDE TO READ IT FULL SIZE</p></div>
    <div class="txt"><span class="kicker">Mission ${String(i + 1).padStart(3, '0')} · case study</span><h2>${esc(it.title)}</h2>
    <div class="field"><b>01 · Objective</b><p>${esc(it.objective)}</p></div><div class="field"><b>02 · Approach</b><p>${esc(it.approach)}</p></div><div class="field"><b>03 · Execution</b><p>${esc(it.execution)}</p></div></div></div>`;
  else body = `<div class="body"><div class="media"><div class="frame zoom" data-zoom="${it.img}" data-cap="${esc(it.title)}"><img src="${it.img}" alt="${esc(it.title)}"></div></div>
    <div class="txt"><span class="kicker">Reel ${String(i + 1).padStart(2, '0')} · ${esc(it.format)}</span><h2>${esc(it.title)}</h2><p>${esc(it.desc)}</p>
    <div class="actions">${it.link ? `<a class="btn" href="${it.link}" target="_blank" rel="noopener noreferrer">▶ Watch on Vimeo</a>` : ''}<button class="btn alt" type="button" data-zoom="${it.img}" data-cap="${esc(it.title)}">View ${it.link ? 'still' : 'full image'}</button></div></div></div>`;
  const nav = `<div class="nav"><button type="button" data-w="prev">◀ Prev</button><span>${i + 1} / ${list.length}</span><button type="button" data-w="next">Next ▶</button></div>`;
  openModal(`${z.lvl} · ${esc(z.name)}`, body + nav, { nav: d => openItem(list[(i + d + list.length) % list.length].id) });
}
function openProfile() {
  const html = `<div class="body prof"><div class="pcard"><div class="stage"><span class="spin"></span><img src="img/me-full.png" alt="Pixel portrait of Upagnya"></div>
     <div class="p1">Player 1</div><div class="ptag">UCP (Upagnya Chinmayi Purigilla)</div><p class="pquote">${esc(PROFILE.quote)}</p></div>
   <div class="txt"><span class="kicker">Equipped loadout</span><div class="frame zoom loadout" data-zoom="${PROFILE.loadout}" data-cap="Equipped loadout"><img src="${PROFILE.loadout}" alt="What’s in my bag: colour wheel, books, alternative music, Canon EOS 1300D, typography, heart cake, pop culture references, laptop"></div><p class="credit">@sofia.vienny inspo · equipment loadout</p>
   <div class="field"><b>Special powers</b><ul class="powers">${PROFILE.powers.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>
   <div class="field"><b>Contact</b>${contactRows()}</div></div></div>`;
  openModal('Character profile', html);
}
function contactRows() {
  return `<div class="copyrow"><code>${esc(CONTACT.email)}</code><button class="btn" type="button" data-copy="${esc(CONTACT.email)}">Copy</button></div>
   <div class="actions"><a class="btn" href="${CONTACT.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>`;
}
function openContact() {
  openModal('Contact', `<div class="body one"><div class="txt"><span class="kicker">Player 1 · contact</span><h2>Get in touch</h2><div class="field"><b>Email</b>${contactRows()}</div></div></div>`);
}
function openIndex() {
  const sec = (z, list) => `<section><h3>${ZONES[z].lvl} · ${esc(ZONES[z].name)} <span>${esc(ZONES[z].kind)} · ${list.filter(x => seen.has(x.id)).length}/${list.length}</span></h3><div class="tiles">${list.map(it => `<button type="button" class="tile ${seen.has(it.id) ? 'seen' : ''}" data-open="${it.id}"><img src="${it.img}" alt="" loading="lazy"><span>${esc(it.title)}</span></button>`).join('')}</div></section>`;
  const html = `<div class="body one"><div class="grid"><p style="margin:0;font-size:22px">Everything in the game, in one place. Found: <b>${seen.size}</b> / ${TOTAL}.</p>
    <div class="actions"><button class="btn" type="button" data-open="profile">Character profile</button><button class="btn alt" type="button" data-open="contact">Contact</button></div>
    ${sec('cinema', FILMS)}${sec('hq', MISSIONS)}${sec('darkroom', PHOTOS)}</div></div>`;
  openModal('Index · all work', html, { index: false });
}
let tt; function toast(m) { const t = $('toast'); t.textContent = m; t.hidden = false; clearTimeout(tt); tt = setTimeout(() => t.hidden = true, 2600); }

/* ---------------- SOUND ---------------- */
let AC = null;
function toggleSound() { sound = !sound; if (sound) { try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); AC.resume && AC.resume(); } catch (e) { sound = false; } if (sound) tone([523, 659, 784, 1046, 784, 1046], .08); } toast(sound ? 'Sound on' : 'Sound off'); }
function blip(f, d = .05, type = 'square', vol = .05) {
  if (!sound || !AC) return;
  try { const o = AC.createOscillator(), g = AC.createGain(); o.type = type; o.frequency.value = f; g.gain.value = vol; g.gain.exponentialRampToValueAtTime(.0001, AC.currentTime + d); o.connect(g).connect(AC.destination); o.start(); o.stop(AC.currentTime + d + .02); } catch (e) { }
}
function tone(fs, d) { fs.forEach((f, i) => setTimeout(() => blip(f, d * 1.4, 'square', .04), i * d * 1000)); }

/* ---------------- BOOT ---------------- */
function favicon() { try { const l = document.createElement('link'); l.rel = 'icon'; l.href = 'img/favicon.png'; document.head.appendChild(l); } catch (e) { } }
function favicon_old() { try { const c = document.createElement('canvas'); c.width = 32; c.height = 32; const g = c.getContext('2d'); g.fillStyle = '#2f6f6a'; g.fillRect(0, 0, 32, 32); g.imageSmoothingEnabled = false; g.drawImage(PORTRAIT, -1, -1, 34, 34); const l = document.createElement('link'); l.rel = 'icon'; l.href = c.toDataURL(); document.head.appendChild(l); } catch (e) { } }
async function boot() {
  try { await Promise.race([Promise.all([document.fonts.load('8px Silkscreen'), document.fonts.load('bold 32px Silkscreen'), document.fonts.load('20px VT323')]), new Promise(r => setTimeout(r, 2500))]); } catch (e) { }
  buildTown(); favicon(); updateFound(); 
  const imgs = Object.values(IMG).filter(i => !i.complete); await Promise.race([Promise.all(imgs.map(i => new Promise(r => { i.onload = i.onerror = r; }))), new Promise(r => setTimeout(r, 2500))]);
  BUILDINGS.forEach(b => BLD[b.id] = makeBuilding(b));
  scene = 'intro'; introT = 0; $('skip').hidden = false;
  requestAnimationFrame(loop);
}

boot();
})();
