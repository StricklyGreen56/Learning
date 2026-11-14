// Code Lab: a beginner block-coding game. Kids tap blocks to build a program, press Run, and a robot follows it.
// Uses helpers from app.js at run time (st, DB, screen, esc, $, speak, kidPath, bestKey, starText, setColor, kidHome).
// Progress saves under best/C_coding_<level> and attempts with g:'C', s:'coding'.

const LAB_COLOR = '#0b7285';

/* ---------------- levels ----------------
   Grid: x goes right, y goes down, from 0. dir: N E S W. gems must all be collected; star must be reached (if there is one).
   blocks: which blocks the palette offers. max: block limit (optional). par: blocks for 3 stars. start: a pre-built (buggy) program. */
const LAB_LEVELS = [
  { id:'s1', ch:'1. Sequence', name:'Your First Code', n:5, robot:[0,2,'E'], star:[2,2], blocks:['F'], par:2,
    learn:'Code is a list of steps that a computer follows, in order. Tap ⬆ Forward to add a step to your program. Add enough steps to reach the star, then press ▶ Run!',
    tip:'The star is 2 squares away.' },
  { id:'s2', ch:'1. Sequence', name:'Turning Corners', n:5, robot:[0,3,'E'], star:[2,1], blocks:['F','L','R'], par:5,
    learn:'Robots only do exactly what you tell them. To go a new way, the robot has to turn first. Turn left and turn right spin the robot without moving it.',
    tip:'Go forward 2, turn left, then go forward 2.' },
  { id:'s3', ch:'1. Sequence', name:'Around the Rock', n:5, robot:[0,2,'E'], star:[4,2], rocks:[[2,2]], blocks:['F','L','R'], par:10,
    learn:'Plan your path before you code! The robot can\'t go through rocks, so find a way around.',
    tip:'Step up a row to get past the rock, then come back down.' },
  { id:'s4', ch:'1. Sequence', name:'Gem Collector', n:5, robot:[0,4,'E'], star:[4,2], gems:[[2,4],[2,2]], blocks:['F','L','R'], par:8,
    learn:'Now pick up every 💎 gem on the way to the star. The robot grabs a gem when it drives over it.',
    tip:'Both gems are in the middle column.' },
  { id:'d1', ch:'2. Debugging', name:'Fix the Turn', n:5, robot:[0,3,'E'], star:[2,1], blocks:['F','L','R'], par:5, start:['F','F','R','F','F'],
    learn:'A mistake in code is called a BUG. Fixing it is called DEBUGGING. Every coder makes bugs, even the pros! Run this code, watch where it goes wrong, then fix it. Tap ✕ on a block to remove it.',
    tip:'The robot turns the wrong way. Swap one block.' },
  { id:'d2', ch:'2. Debugging', name:'One Step Short', n:5, robot:[0,2,'E'], star:[4,2], blocks:['F'], par:4, start:['F','F','F'],
    learn:'Sometimes code is ALMOST right. Run it and count the squares. What\'s missing?',
    tip:'Count how far the star is.' },
  { id:'l1', ch:'3. Loops', name:'Meet the Loop', n:5, robot:[0,2,'E'], star:[4,2], blocks:['F','rep'], max:2, par:2,
    learn:'A LOOP repeats steps for you. Instead of Forward, Forward, Forward, Forward, you can say "repeat 4 times: Forward." Tap 🔁 Repeat, then tap ⬆ Forward to put it INSIDE the loop. Use + and − to change the number.',
    tip:'Only 2 blocks allowed: one Repeat with one Forward inside.' },
  { id:'l2', ch:'3. Loops', name:'Long Hallway', n:7, robot:[0,3,'E'], star:[6,3], blocks:['F','rep'], max:2, par:2,
    learn:'Loops are great for long trips. How many times should it repeat?',
    tip:'Count the squares to the star.' },
  { id:'l3', ch:'3. Loops', name:'Staircase', n:5, robot:[0,4,'E'], star:[4,0], blocks:['F','L','R','rep'], max:5, par:5,
    learn:'You can put MORE than one step inside a loop. The whole group repeats each time. Look for a pattern you can repeat!',
    tip:'One stair = Forward, Turn left, Forward, Turn right. How many stairs?' },
  { id:'l4', ch:'3. Loops', name:'Square Dance', n:5, robot:[0,4,'E'], gems:[[3,4],[3,1],[0,1]], blocks:['F','L','R','rep'], max:5, par:5,
    learn:'Collect all 3 gems by driving in a square! A square has 4 sides that are all the same, so it\'s a perfect loop.',
    tip:'One side = Forward 3 times, then Turn left. Repeat that 4 times.' },
  { id:'l5', ch:'3. Loops', name:'Zigzag', n:5, robot:[0,0,'S'], star:[4,4], gems:[[1,1],[2,2],[3,3]], blocks:['F','L','R','rep'], max:5, par:5,
    learn:'The robot is facing down. Find the zigzag pattern and loop it!',
    tip:'Forward, Turn left, Forward, Turn right… repeated.' },
  { id:'c1', ch:'4. If-Statements', name:'Smart Robot', n:5, robot:[0,0,'E'], star:[3,4], rocks:[[4,0]], blocks:['F','ifb','until'], max:3, par:3,
    learn:'An IF-STATEMENT lets code make a choice: "IF the way is blocked, THEN turn right." Put it inside a "Repeat until ⭐" loop and the robot checks before every step, so it can find its own way!',
    tip:'Repeat until ⭐ with two blocks inside: first "If blocked: turn right", then Forward.' },
  { id:'c2', ch:'4. If-Statements', name:'Same Code, New Maze', n:5, robot:[0,4,'N'], star:[4,4], rocks:[[0,0]], blocks:['F','ifb','until'], max:3, par:3,
    learn:'Here\'s the cool part: smart code works on a NEW maze without changing it. Build the same program as last time and see!',
    tip:'Use the same 3 blocks as Smart Robot.' }
];

const BLOCKS = {
  F:     { label:'Forward',           icon:'⬆', cls:'b-move' },
  L:     { label:'Turn left',         icon:'↶', cls:'b-turn' },
  R:     { label:'Turn right',        icon:'↷', cls:'b-turn' },
  rep:   { label:'Repeat',            icon:'🔁', cls:'b-loop', container:true },
  until: { label:'Repeat until ⭐',   icon:'🔁', cls:'b-loop', container:true },
  ifb:   { label:'If blocked: turn right', icon:'❓', cls:'b-if' }
};

/* ---------------- engine (pure: also used by the tests) ---------------- */
let labIds = 0;
function labBlock(type){ const b = { id:'b' + (++labIds), type }; if (type === 'rep') { b.n = 2; b.body = []; } if (type === 'until') b.body = []; return b; }
// Short text form for tests: 'F','L','R','ifb', ['rep',4,[...]], ['until',[...]]
function labFromShort(list){ return list.map(x => { if (typeof x === 'string') return labBlock(x); const b = labBlock(x[0]); if (x[0] === 'rep'){ b.n = x[1]; b.body = labFromShort(x[2]); } else b.body = labFromShort(x[1]); return b; }); }
function labCount(prog){ return prog.reduce((a,b) => a + 1 + (b.body ? labCount(b.body) : 0), 0); }

// Runs a program. Returns { events:[{id, x, y, dir, got?}], result:'win'|'rock'|'edge'|'short'|'gems'|'loop'|'empty' }
function labRun(level, prog){
  const n = level.n, rocks = level.rocks || [], gems = (level.gems || []).map(g => g.join(','));
  const got = new Set(); let [x, y, dir] = level.robot; const events = []; let steps = 0, fail = null;
  const D = ['N','E','S','W'], MV = { N:[0,-1], E:[1,0], S:[0,1], W:[-1,0] };
  const isRock = (a,b) => rocks.some(r => r[0]===a && r[1]===b);
  const blocked = () => { const a = x + MV[dir][0], b = y + MV[dir][1]; return a<0 || b<0 || a>=n || b>=n || isRock(a,b); };
  const atStar = () => level.star && x === level.star[0] && y === level.star[1];
  function exec(list){
    for (const b of list){
      if (fail) return;
      if (++steps > 300){ fail = 'loop'; return; }
      if (b.type === 'F'){
        const a = x + MV[dir][0], c = y + MV[dir][1];
        if (a<0 || c<0 || a>=n || c>=n){ events.push({ id:b.id, x, y, dir, bump:true }); fail = 'edge'; return; }
        if (isRock(a,c)){ events.push({ id:b.id, x, y, dir, bump:true }); fail = 'rock'; return; }
        x = a; y = c; const k = x+','+y, e = { id:b.id, x, y, dir };
        if (gems.includes(k) && !got.has(k)){ got.add(k); e.got = k; }
        events.push(e);
      } else if (b.type === 'L' || b.type === 'R'){
        dir = D[(D.indexOf(dir) + (b.type === 'L' ? 3 : 1)) % 4]; events.push({ id:b.id, x, y, dir, turn:b.type });
      } else if (b.type === 'ifb'){
        if (blocked()){ dir = D[(D.indexOf(dir)+1)%4]; events.push({ id:b.id, x, y, dir, turn:'R' }); }
        else events.push({ id:b.id, x, y, dir });
      } else if (b.type === 'rep'){
        for (let i = 0; i < b.n && !fail; i++) exec(b.body);
      } else if (b.type === 'until'){
        let guard = 0;
        while (!atStar() && !fail){ if (++guard > 60 || !b.body.length){ fail = 'loop'; return; } exec(b.body); }
      }
    }
  }
  if (!prog.length) return { events, result:'empty' };
  exec(prog);
  if (fail) return { events, result:fail };
  if (got.size < gems.length) return { events, result:'gems' };
  if (level.star && !atStar()) return { events, result:'short' };
  return { events, result:'win' };
}

/* ---------------- screens ---------------- */
function labRec(level){ return st.best[bestKey('C','coding',level.id)]; }
function labUnlocked(i){ return i === 0 || ((labRec(LAB_LEVELS[i-1]) || {}).best || 0) >= 1; }

function labHome(){
  setColor(LAB_COLOR);
  let html = '', ch = '';
  LAB_LEVELS.forEach((l, i) => {
    if (l.ch !== ch){ ch = l.ch; html += `<h2>${esc(ch)}</h2>`; }
    const r = labRec(l), open = labUnlocked(i);
    html += `<button class="tile ${open ? '' : 'locked'}" data-i="${i}" ${open ? '' : 'disabled'}>
      <div><b>${i+1}. ${esc(l.name)}</b><span>${open ? esc(l.learn.split(/(?<=[.!?])\s/)[0]) : '🔒 Finish the level before it to unlock'}</span></div>
      ${r && r.best ? `<div class="best"><span class="stars">${starText(r.best)}</span></div>` : (open ? `<div class="best">${r ? 'Keep trying' : 'Play ▶'}</div>` : '')}
    </button>`;
  });
  screen(`
    <div class="bar"><button class="link" id="back">← ${esc(st.kid.name)}'s subjects</button></div>
    <h1>🤖 Code Lab</h1>
    <p class="sub">Build code with blocks and make the robot reach the ⭐. Each level teaches something new!</p>
    <div class="list">${html}</div>`);
  $('back').onclick = kidHome;
  app.querySelectorAll('.tile[data-i]').forEach(b => b.onclick = () => labPlay(+b.dataset.i));
}

let lab = null;
function labPlay(i){
  const level = LAB_LEVELS[i];
  lab = { i, level, prog: level.start ? labFromShort(level.start) : [], target:null, running:false, gems:new Set(), angle:{N:-90,E:0,S:90,W:180}[level.robot[2]] };
  setColor(LAB_COLOR);
  const firstTime = !labRec(level);
  screen(`
    <div class="bar"><button class="link" id="back">← Code Lab</button><span class="num">Level ${i+1} of ${LAB_LEVELS.length}</span></div>
    <h1 class="labtitle">${esc(level.name)}</h1>
    <details class="learn" ${firstTime ? 'open' : ''}><summary>💡 ${esc(level.ch.replace(/^\d+\.\s*/,''))}: what to know</summary>
      <p>${esc(level.learn)}</p>${canSpeak ? '<button class="say" id="saylearn">🔊 Read to me</button>' : ''}</details>
    <div class="goal">${level.gems && level.gems.length ? `Collect all 💎${level.star ? ' then reach the ⭐' : ''}` : 'Reach the ⭐'}${level.max ? ` · Use at most <b>${level.max}</b> blocks` : ''}</div>
    <div class="labboard" id="board"></div>
    <div class="labmsg" id="msg"></div>
    <div class="labprog" id="prog"></div>
    <div class="palette" id="pal">${level.blocks.map(t => `<button class="pblk ${BLOCKS[t].cls}" data-t="${t}"><span>${BLOCKS[t].icon}</span>${esc(BLOCKS[t].label)}</button>`).join('')}</div>
    <div class="labbtns"><button class="btn run" id="run">▶ Run</button><button class="btn ghost" id="clear">Clear</button><button class="btn ghost" id="hint">Hint</button></div>`);
  $('back').onclick = () => { lab.running = false; labHome(); };
  if ($('saylearn')) $('saylearn').onclick = e => { e.preventDefault(); speak(level.learn); };
  if (firstTime && st.kid.readAloud) speak(level.learn);
  $('pal').onclick = e => { const b = e.target.closest('[data-t]'); if (b) labAdd(b.dataset.t); };
  $('run').onclick = labGo;
  $('clear').onclick = () => { if (lab.running) return; lab.prog = []; lab.target = null; labDraw(); labMsg(''); labBoard(); };
  $('hint').onclick = () => { labMsg('💡 ' + level.tip, 'hint'); if (st.kid.readAloud) speak(level.tip); };
  $('prog').onclick = labProgClick;
  labBoard(); labDraw();
}

function labFind(list, id, parent){ for (const b of list){ if (b.id === id) return { b, list, parent }; if (b.body){ const r = labFind(b.body, id, b); if (r) return r; } } return null; }
function labAdd(type){
  if (lab.running) return;
  const max = lab.level.max;
  if (max && labCount(lab.prog) >= max){ labMsg(`Only ${max} block${max>1?'s':''} allowed here. ${lab.level.blocks.includes('rep') ? 'Can a loop do the work?' : ''}`, 'bad'); return; }
  const b = labBlock(type);
  const into = lab.target ? labFind(lab.prog, lab.target) : null;
  (into ? into.b.body : lab.prog).push(b);
  if (BLOCKS[type].container) lab.target = b.id;
  labMsg(''); labDraw(); labBoard();
}
function labProgClick(e){
  if (lab.running) return;
  const el = e.target.closest('[data-act]'); if (!el) return;
  const id = el.closest('[data-id]') ? el.closest('[data-id]').dataset.id : null, act = el.dataset.act;
  if (act === 'main'){ lab.target = null; }
  else if (act === 'del'){ const f = labFind(lab.prog, id); if (f){ f.list.splice(f.list.indexOf(f.b), 1); if (lab.target && !labFind(lab.prog, lab.target)) lab.target = null; } }
  else if (act === 'inc' || act === 'dec'){ const f = labFind(lab.prog, id); if (f) f.b.n = Math.max(1, Math.min(10, f.b.n + (act === 'inc' ? 1 : -1))); }
  else if (act === 'sel'){ lab.target = lab.target === id ? null : id; }
  labDraw(); labBoard();
}
function labBlockHTML(b){
  const B = BLOCKS[b.type];
  if (!B.container) return `<div class="blk ${B.cls}" data-id="${b.id}"><span class="bi">${B.icon}</span> ${esc(B.label)}<button class="x" data-act="del" aria-label="Remove">✕</button></div>`;
  const sel = lab.target === b.id;
  return `<div class="blk cont ${B.cls} ${sel ? 'sel' : ''}" data-id="${b.id}">
    <div class="chead" data-act="sel"><span class="bi">${B.icon}</span> ${b.type === 'rep' ? `Repeat <button class="nb" data-act="dec">−</button><b>${b.n}</b><button class="nb" data-act="inc">+</button> times` : 'Repeat until ⭐'}<button class="x" data-act="del" aria-label="Remove">✕</button></div>
    <div class="cbody">${b.body.map(labBlockHTML).join('')}${sel ? '<div class="drop">⬇ new blocks go in here</div>' : (b.body.length ? '' : '<div class="drop dim">tap here, then add blocks</div>')}</div>
  </div>`;
}
function labDraw(){
  const used = labCount(lab.prog), max = lab.level.max;
  $('prog').innerHTML = `<div class="ptitle" data-act="main"><b>My program</b><span>${used} block${used===1?'':'s'}${max ? ' / ' + max + ' max' : ''}</span></div>
    ${lab.prog.map(labBlockHTML).join('')}
    ${lab.target ? `<button class="link done" data-act="main">⤴ Done with loop (add blocks below it)</button>` : '<div class="drop main">' + (lab.prog.length ? '⬇ new blocks go here' : 'Tap a block below to start your program') + '</div>'}`;
  app.querySelectorAll('#prog .blk.cont > .cbody > .drop.dim').forEach(d => d.dataset.act = 'sel');
}

function labBoard(robot, gemsGot){
  const L = lab.level, n = L.n, C = 52, P = 6, S = n*C + P*2, o = [];
  const [rx, ry] = robot || L.robot; const got = gemsGot || new Set();
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) o.push(`<rect x="${P+x*C}" y="${P+y*C}" width="${C}" height="${C}" fill="${(x+y)%2 ? '#e3fafc' : '#fff'}" stroke="#99e9f2"/>`);
  const cx = x => P + x*C + C/2, cy = y => P + y*C + C/2;
  (L.rocks || []).forEach(([x,y]) => o.push(`<path d="M${cx(x)-18} ${cy(y)+15}l7-22 11-7 13 9 5 20z" fill="#868e96" stroke="#495057" stroke-width="2"/>`));
  (L.gems || []).forEach(([x,y]) => { if (!got.has(x+','+y)) o.push(`<path d="M${cx(x)} ${cy(y)-14}l12 10-12 16-12-16z" fill="#be4bdb" stroke="#862e9c" stroke-width="2"/><path d="M${cx(x)-6} ${cy(y)-9}l6 5" stroke="#fff" stroke-width="2"/>`); });
  if (L.star){ const X = cx(L.star[0]), Y = cy(L.star[1]); o.push(`<path d="M${X} ${Y-19}l6 11 12 2-9 9 2 12-11-6-11 6 2-12-9-9 12-2z" fill="#fab005" stroke="#f08c00" stroke-width="1.5"/>`); }
  o.push(`<g id="bot" style="transform:translate(${cx(rx)}px,${cy(ry)}px) rotate(${lab.angle}deg)"><g><rect x="-16" y="-15" width="28" height="30" rx="8" fill="#4263eb"/><circle cx="3" cy="-6" r="4" fill="#fff"/><circle cx="3" cy="6" r="4" fill="#fff"/><circle cx="4" cy="-6" r="1.8" fill="#212529"/><circle cx="4" cy="6" r="1.8" fill="#212529"/><path d="M14 -9l9 9-9 9z" fill="#4263eb"/></g></g>`);
  $('board').innerHTML = `<svg viewBox="0 0 ${S} ${S}">${o.join('')}</svg>`;
}
function labMsg(t, kind){ const m = $('msg'); if (!m) return; m.className = 'labmsg' + (kind ? ' ' + kind : ''); m.textContent = t; }

const LAB_FAIL = {
  empty:'Your program is empty! Tap some blocks first.',
  rock:'Bonk! 🪨 The robot bumped into a rock. Find the block where it went wrong.',
  edge:'Whoa! The robot almost drove off the edge. Check your turns and counts.',
  short:'So close! The robot stopped before the star. Does it need more steps?',
  gems:'The robot missed a 💎 gem. Plan a path over every gem.',
  loop:'The robot got stuck going around and around (an endless loop). Check what\'s inside your loop.'
};
async function labGo(){
  if (lab.running) return;
  const L = lab.level, { events, result } = labRun(L, lab.prog);
  lab.running = true; lab.angle = {N:-90,E:0,S:90,W:180}[L.robot[2]];
  labBoard(); labMsg('Running…');
  document.querySelectorAll('#prog .blk').forEach(b => b.classList.remove('now','oops'));
  const got = new Set(), wait = ms => new Promise(r => setTimeout(r, ms));
  await wait(250);
  for (const e of events){
    if (!lab.running || !$('board')) return;
    document.querySelectorAll('#prog .blk.now').forEach(b => b.classList.remove('now'));
    const el = document.querySelector(`#prog [data-id="${e.id}"]`); if (el) el.classList.add('now');
    if (e.turn) lab.angle += e.turn === 'L' ? -90 : 90;
    if (e.got) got.add(e.got);
    const bot = $('bot'), P = 6, C = 52;
    if (e.bump){ if (el) el.classList.add('oops'); bot.classList.add('bump'); }
    bot.style.transform = `translate(${P + e.x*C + C/2}px,${P + e.y*C + C/2}px) rotate(${lab.angle}deg)`;
    if (e.got) labBoard([e.x, e.y], got), $('bot').style.transform = `translate(${P + e.x*C + C/2}px,${P + e.y*C + C/2}px) rotate(${lab.angle}deg)`;
    await wait(e.turn ? 380 : 430);
  }
  lab.running = false;
  document.querySelectorAll('#prog .blk.now').forEach(b => b.classList.remove('now'));
  if (result !== 'win'){ labMsg(LAB_FAIL[result], 'bad'); if (st.kid.readAloud) speak(LAB_FAIL[result]); labSave(0); return; }
  labWin();
}
function labWin(){
  const L = lab.level, used = labCount(lab.prog), stars = used <= L.par ? 3 : 2, next = LAB_LEVELS[lab.i+1];
  const praise = ['You did it!','Awesome coding!','Nice work, coder!','The robot made it!'][Math.floor(Math.random()*4)];
  labMsg('', '');
  $('msg').innerHTML = `<div class="labwin"><div class="stars">${starText(stars)}</div><b>${praise}</b>
    <p>${stars === 3 ? `Perfect! You used ${used} block${used===1?'':'s'}.` : `You used ${used} blocks. Can you do it in ${L.par} for 3 stars?`}</p>
    ${next ? `<button class="btn" id="nextlvl">Next level: ${esc(next.name)} →</button>` : '<p><b>🏆 You finished every level in the Code Lab!</b></p>'}
    <button class="btn ghost" id="again">Play again</button></div>`;
  if (st.kid.readAloud) speak(praise);
  if (next) $('nextlvl').onclick = () => labPlay(lab.i + 1);
  $('again').onclick = () => labPlay(lab.i);
  labSave(stars);
}
async function labSave(stars){
  const L = lab.level, key = bestKey('C','coding',L.id), prev = st.best[key], used = labCount(lab.prog);
  const rec = { g:'C', s:'coding', t:L.id, name:L.name, total:3, best:Math.max(stars, prev ? prev.best : 0), last:stars,
    blocks: stars ? Math.min(used, prev && prev.blocks ? prev.blocks : 99) : (prev ? prev.blocks || null : null), date:Date.now(), tries:(prev ? prev.tries : 0) + 1 };
  st.best[key] = { id:key, ...rec };
  const kp = kidPath(st.kid.id);
  try{
    await DB.set(kp+'/best/'+key, rec);
    if (stars) await DB.add(kp+'/attempts', { g:'C', s:'coding', t:L.id, name:L.name, score:stars, total:3, blocks:used, at:Date.now(), missed:[] });
  }catch(e){}
}

if (typeof module !== 'undefined') module.exports = { LAB_LEVELS, labRun, labFromShort, labCount };
