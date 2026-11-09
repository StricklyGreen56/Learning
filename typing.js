// Typing Game. Uses helpers from app.js (st, DB, screen, esc, $, speak, kidPath, bestKey, starText, setColor, kidHome).
// Scores save like tests, under best/T_typing_<level> and attempts with { wpm, acc, keys }.

const TYPING_COLOR = '#d6336c';
const TYPING_LEVELS = [
  { id:'hunt', name:'Letter Hunt', blurb:'Find each letter on the keyboard', mode:'letters', count:20, wpm:0, grades:['K'],
    pool:'asdfghjklqwertyuiopzxcvbnm' },
  { id:'home', name:'Home Row Keys', blurb:'A S D F and J K L ; — the most important keys', mode:'lines', count:6, wpm:6, grades:['1'],
    lines:['asdf jkl;','ff jj ff jj','dd kk dd kk','ss ll ss ll','aa ;; aa ;;','fj dk sl a;','fdsa jkl;','jf kd ls ;a','fff jjj ddd kkk','asdf asdf jkl; jkl;'] },
  { id:'homewords', name:'Home Row Words', blurb:'Real words with home row keys plus G and H', mode:'lines', count:6, wpm:8, grades:['2'],
    lines:['dad has a flag','half a salad','a glad lad','ask dad','all fall','flash a flag','a lad has a sash','dad asks hal','had a salad','glad dads'] },
  { id:'top', name:'Top Row', blurb:'Add Q W E R T Y U I O P', mode:'lines', count:6, wpm:10, grades:['3'],
    lines:['we are here','your top pet','the red kite flies','i like to type','our dog is happy','she said yes','we eat pie','this is fast','go up the hill','write it out'] },
  { id:'bottom', name:'Bottom Row', blurb:'Add Z X C V B N M , and .', mode:'lines', count:6, wpm:10, grades:['3'],
    lines:['come back now.','a big brown box.','zebras can swim.','my cat naps.','move the van.','bring a snack.','fix the bike, mom.','a cozy cabin.','name six birds.','jump and climb.'] },
  { id:'caps', name:'Capitals & Periods', blurb:'Use Shift for capital letters', mode:'lines', count:6, wpm:10, grades:['4'],
    lines:['Sam ran home.','I like pizza.','We go to school.','Ava has a red bike.','Max is my dog.','Dad made tacos.','Mia can swim fast.','Leo likes math.','The sun is hot.','Pennsylvania is big.'] },
  { id:'numbers', name:'Number Row', blurb:'Type numbers 0 to 9', mode:'lines', count:6, wpm:10, grades:['4'],
    lines:['I am 9 years old.','We have 3 cats and 2 dogs.','There are 365 days in a year.','My team scored 12 points.','I read 20 pages.','Call me at 4 or 5.','The bus comes at 7.','We need 8 cups.','I got 10 out of 10.','It is 60 degrees.'] },
  { id:'sentences', name:'Sentences', blurb:'Longer sentences with everything', mode:'lines', count:5, wpm:14, grades:['5'],
    lines:['The quick brown fox jumps over the lazy dog.','My dog likes to play fetch in the park.','I can type faster every day.','Reading books helps my brain grow.','We built a fort out of blankets.','The rocket zoomed into space.','Practice makes progress, not perfect.','My favorite subject is science.','Pack your lunch and grab your coat.','Volcanoes can build new islands.'] },
  { id:'speed', name:'Speed Challenge', blurb:'Type as much as you can in 60 seconds', mode:'timed', seconds:60, wpm:18, grades:[],
    lines:['The quick brown fox jumps over the lazy dog.','My dog likes to play fetch in the park.','I can type faster every day.','Reading books helps my brain grow.','We built a fort out of blankets.','The rocket zoomed into space.','Practice makes progress, not perfect.','My favorite subject is science.','Pack your lunch and grab your coat.','Volcanoes can build new islands.','Owls hunt for mice at night.','Bees make honey in their hives.'] }
];

// Which finger presses which key (standard touch typing).
const FINGERS = {
  lp:{ name:'left pinky', color:'#e8590c', keys:"1qaz`" }, lr:{ name:'left ring', color:'#f59f00', keys:'2wsx' },
  lm:{ name:'left middle', color:'#37b24d', keys:'3edc' }, li:{ name:'left pointer', color:'#1c7ed6', keys:'45rtfgvb' },
  ri:{ name:'right pointer', color:'#7048e8', keys:'67yuhjnm' }, rm:{ name:'right middle', color:'#37b24d', keys:'8ik,' },
  rr:{ name:'right ring', color:'#f59f00', keys:'9ol.' }, rp:{ name:'right pinky', color:'#e8590c', keys:"0-p;'/[]=" },
  th:{ name:'thumb', color:'#868e96', keys:' ' }
};
function fingerFor(ch){
  const c = ch.toLowerCase();
  for (const k in FINGERS) if (FINGERS[k].keys.includes(c)) return k;
  return null;
}
const KB_ROWS = ['1234567890-', 'qwertyuiop', "asdfghjkl;'", 'zxcvbnm,./'];

function typingStarsFor(level, wpm, acc){
  if (acc >= 95 && wpm >= level.wpm) return 3;
  if (acc >= 90) return 2;
  if (acc >= 75) return 1;
  return 0;
}
function typingRec(level){ return st.best[bestKey('T','typing',level.id)]; }
// Everyone starts at Home Row Keys (Kindergarten starts at Letter Hunt) and moves up after earning 2+ stars.
function suggestedLevel(){
  const g = st.kid ? st.kid.grade : 'K';
  let i = g === 'K' ? 0 : 1;
  while (i < TYPING_LEVELS.length-1 && (typingRec(TYPING_LEVELS[i]) || {}).best >= 2) i++;
  return TYPING_LEVELS[i];
}

function typingHome(){
  setColor(TYPING_COLOR);
  const sug = suggestedLevel();
  screen(`
    <div class="bar"><button class="link" id="back">← ${esc(st.kid.name)}'s subjects</button></div>
    <h1>⌨️ Typing Game</h1>
    <p class="sub">Try <b>${esc(sug.name)}</b> next. Get 95% right and reach the speed goal for 3 stars!</p>
    <div class="list">${TYPING_LEVELS.map((l,i) => { const r = typingRec(l);
      return `<button class="tile ${l===sug?'suggest':''}" data-id="${l.id}">
        <div><b>${i+1}. ${esc(l.name)}</b><span>${esc(l.blurb)}${l.wpm ? ` · goal ${l.wpm} WPM` : ''}</span></div>
        ${r ? `<div class="best"><span class="stars">${starText(r.best)}</span><br>${r.wpm ? r.wpm+' WPM · ' : ''}${r.acc}%</div>` : (l===sug ? '<div class="best">Start here</div>' : '')}
      </button>`; }).join('')}</div>
    <p class="note" style="margin-top:16px">WPM = words per minute. Keep your fingers on the home row and try not to look at your hands!</p>`);
  $('back').onclick = kidHome;
  app.querySelectorAll('.tile').forEach(b => b.onclick = () => startTyping(TYPING_LEVELS.find(l => l.id === b.dataset.id)));
}

let tz = null;
function startTyping(level){
  const pick = (arr, n) => shuffle(arr).slice(0, n);
  let lines;
  if (level.mode === 'letters'){ lines = Array.from({length:level.count}, () => level.pool[Math.floor(Math.random()*level.pool.length)]); }
  else if (level.mode === 'timed'){ lines = shuffle(level.lines).concat(shuffle(level.lines)); }
  else { lines = pick(level.lines, level.count); }
  if (tz && tz.timer) clearInterval(tz.timer);
  tz = { level, lines, li:0, pos:0, correct:0, errors:0, missed:{}, start:0, end:0, timer:null, done:false };
  setColor(TYPING_COLOR);
  screen(`
    <div class="bar"><button class="link" id="back">← Typing levels</button><span class="num" id="tstat"></span></div>
    <div class="prog"><i id="tprog" style="width:0%"></i></div>
    <div class="typebox" id="typebox">
      <div class="tline" id="tline"></div>
      <div class="tnext" id="tnext"></div>
      <div class="thint" id="thint"></div>
      <div class="tfocus" id="tfocus">Tap here and start typing</div>
    </div>
    <input id="tin" class="tin" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" aria-label="Type here">
    <div class="kb" id="kb">${KB_ROWS.map((row,ri) => `<div class="kbrow r${ri}">${ri===3?'<span class="key wide" data-k="shiftL">Shift</span>':''}${[...row].map(k => `<span class="key" data-k="${esc(k)}" style="--fc:${(FINGERS[fingerFor(k)]||{}).color||'#adb5bd'}">${esc(k)}</span>`).join('')}${ri===3?'<span class="key wide" data-k="shiftR">Shift</span>':''}</div>`).join('')}
      <div class="kbrow"><span class="key space" data-k=" " style="--fc:${FINGERS.th.color}">space</span></div>
    </div>`);
  $('back').onclick = () => { stopTyping(); typingHome(); };
  const inp = $('tin');
  const focus = () => { try{ inp.focus({preventScroll:true}); }catch(e){ inp.focus(); } };
  $('typebox').onclick = focus;
  inp.onfocus = () => $('tfocus').hidden = true;
  inp.onblur = () => { if (!tz.done) $('tfocus').hidden = false; };
  let composing = false;
  inp.addEventListener('compositionstart', () => composing = true);
  inp.addEventListener('compositionend', () => { composing = false; flushInput(); });
  inp.addEventListener('input', () => { if (!composing) flushInput(); });
  function flushInput(){
    const v = inp.value; inp.value = '';
    for (const ch of v) typeChar(ch);
  }
  // Keep Enter/Tab from doing anything odd; Backspace is not needed (you must type the right key to move on).
  inp.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === 'Tab') e.preventDefault(); });
  drawTyping();
  focus();
  if (level.mode === 'letters' && st.kid.readAloud) speak('Find the letter ' + tz.lines[0]);
}
function stopTyping(){ if (tz){ if (tz.timer) clearInterval(tz.timer); tz.done = true; } }

function typeChar(ch){
  if (!tz || tz.done) return;
  const line = tz.lines[tz.li];
  const want = line[tz.pos];
  if (!tz.start){
    tz.start = Date.now();
    if (tz.level.mode === 'timed') tz.timer = setInterval(() => { drawStat(); if (Date.now() - tz.start >= tz.level.seconds*1000) finishTyping(); }, 250);
  }
  if (ch === want || (want === ' ' && ch === ' ')){
    tz.correct++; tz.pos++;
    if (tz.pos >= line.length){
      tz.li++; tz.pos = 0;
      if (tz.li >= tz.lines.length) return finishTyping();
      if (tz.level.mode === 'letters' && st.kid.readAloud) speak(tz.lines[tz.li]);
    }
    drawTyping();
  } else {
    tz.errors++;
    const k = want === ' ' ? 'space' : want;
    tz.missed[k] = (tz.missed[k] || 0) + 1;
    const cur = document.querySelector('#tline .cur');
    if (cur){ cur.classList.remove('oops'); void cur.offsetWidth; cur.classList.add('oops'); }
    drawStat();
  }
}

function typingNumbers(){
  const ms = Math.max(1, (tz.end || Date.now()) - (tz.start || Date.now()));
  const wpm = tz.start ? Math.round((tz.correct / 5) / (ms / 60000)) : 0;
  const total = tz.correct + tz.errors;
  const acc = total ? Math.round(100 * tz.correct / total) : 100;
  return { wpm, acc };
}
function drawStat(){
  const s = $('tstat'); if (!s) return;
  const { wpm, acc } = typingNumbers();
  const left = tz.level.mode === 'timed' && tz.start ? ` · ${Math.max(0, Math.ceil(tz.level.seconds - (Date.now()-tz.start)/1000))}s left` : tz.level.mode === 'timed' ? ` · ${tz.level.seconds}s` : '';
  const warm = tz.start && Date.now() - tz.start >= 3000;
  s.textContent = (tz.level.mode === 'letters' ? '' : `${warm ? wpm : '–'} WPM · `) + `${acc}%` + left;
  const p = $('tprog');
  if (p) p.style.width = (tz.level.mode === 'timed'
    ? Math.min(100, tz.start ? 100*(Date.now()-tz.start)/(tz.level.seconds*1000) : 0)
    : 100 * tz.li / tz.lines.length) + '%';
}
function drawTyping(){
  const line = tz.lines[tz.li], pos = tz.pos;
  const big = tz.level.mode === 'letters';
  $('tline').className = 'tline' + (big ? ' huge' : '');
  $('tline').innerHTML = [...line].map((c,i) => `<span class="${i<pos?'ok':i===pos?'cur':''}${c===' '?' sp':''}">${c===' '?'&nbsp;':esc(c)}</span>`).join('');
  $('tnext').textContent = !big && tz.lines[tz.li+1] ? 'Next: ' + tz.lines[tz.li+1] : '';
  const want = line[pos];
  const f = fingerFor(want);
  const upper = want !== want.toLowerCase();
  const shiftSide = upper ? (f && f[0] === 'l' ? 'shiftR' : 'shiftL') : null;
  $('thint').innerHTML = f ? `<span class="dot" style="background:${FINGERS[f].color}"></span> Use your <b>${FINGERS[f].name}</b>${upper ? ` and hold <b>Shift</b> with your ${shiftSide==='shiftR'?'right':'left'} pinky` : ''}` : '';
  document.querySelectorAll('#kb .key').forEach(k => {
    const on = k.dataset.k === want.toLowerCase() || k.dataset.k === shiftSide;
    k.classList.toggle('on', on);
    k.classList.toggle('home', 'fj'.includes(k.dataset.k) && k.dataset.k !== '');
  });
  drawStat();
}

async function finishTyping(){
  if (tz.done) return;
  tz.done = true; tz.end = Date.now();
  if (tz.timer) clearInterval(tz.timer);
  const level = tz.level;
  const { wpm, acc } = typingNumbers();
  const stars = typingStarsFor(level, level.mode === 'letters' ? 999 : wpm, acc);
  const keys = Object.entries(tz.missed).sort((a,b) => b[1]-a[1]).slice(0,5).map(e => e[0]);
  const key = bestKey('T','typing',level.id), prev = st.best[key];
  const rec = { g:'T', s:'typing', t:level.id, name:level.name, total:3,
    best: Math.max(stars, prev ? prev.best : 0), last: stars,
    wpm: Math.max(wpm, prev ? (prev.wpm||0) : 0), acc: Math.max(acc, prev ? (prev.acc||0) : 0),
    lastWpm: wpm, lastAcc: acc, date: Date.now(), tries: (prev ? prev.tries : 0) + 1 };
  st.best[key] = { id:key, ...rec };
  const msg = stars === 3 ? 'Amazing typing!' : stars === 2 ? (wpm < level.wpm && level.mode !== 'letters' ? `Great accuracy! Now try to reach ${level.wpm} WPM.` : 'Great job!') : stars === 1 ? 'Nice work! Slow down a little to make fewer mistakes.' : 'Keep practicing! Go slow and look at the screen, not your hands.';
  const idx = TYPING_LEVELS.indexOf(level), next = TYPING_LEVELS[idx+1];
  setColor(TYPING_COLOR);
  screen(`
    <div class="result">
      <div class="num">${esc(st.kid.name)} · ⌨️ ${esc(level.name)}</div>
      <div class="stars">${starText(stars)}</div>
      <div class="tresult">
        ${level.mode === 'letters' ? '' : `<div><b>${wpm}</b><span>words per minute</span></div>`}
        <div><b>${acc}%</b><span>accuracy</span></div>
      </div>
      <p><b>${msg}</b></p>
      ${keys.length ? `<p class="note">Keys to practice: ${keys.map(k => `<span class="kchip">${esc(k)}</span>`).join(' ')}</p>` : ''}
      <p class="note" id="saved">Saving…</p>
      <button class="btn" id="again">Try again</button>
      ${next && stars >= 2 ? `<button class="btn" id="next">Next level: ${esc(next.name)} →</button>` : ''}
      <button class="btn ghost" id="levels">All typing levels</button>
    </div>`);
  if (st.kid.readAloud) speak(level.mode === 'letters' ? `${acc} percent right. ${msg}` : `${wpm} words per minute, ${acc} percent right. ${msg}`);
  $('again').onclick = () => startTyping(level);
  if ($('next')) $('next').onclick = () => startTyping(next);
  $('levels').onclick = typingHome;
  const kp = kidPath(st.kid.id);
  try{
    await DB.set(kp+'/best/'+key, rec);
    await DB.add(kp+'/attempts', { g:'T', s:'typing', t:level.id, name:level.name, score:stars, total:3, wpm, acc, keys, at:Date.now(), missed:[] });
    if ($('saved')) $('saved').textContent = 'Saved for ' + st.kid.name + '.';
  }catch(e){ if ($('saved')) $('saved').textContent = 'Saved on this device. It will sync when you\'re back online.'; }
}
