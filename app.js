// Learning practice site. Question banks live in data/*.js and register with addSubject().
// Question format: [question, [options...], indexOfCorrectOption, "why it's right", "passageKey"(optional)]

const app = document.getElementById('app');
const S = window.SUBJECTS;
let quiz = null;

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function shuffle(a){ a = a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
function load(k){ try{ return JSON.parse(localStorage.getItem('learn:'+k)) }catch(e){ return null } }
function save(k,v){ try{ localStorage.setItem('learn:'+k, JSON.stringify(v)) }catch(e){} }
function starsFor(score,total){ const p=score/total; return p>=0.9?3:p>=0.7?2:p>=0.5?1:0; }
function shortDate(d){ try{ return new Date(d+'T12:00').toLocaleDateString('en-US',{month:'short',day:'numeric'}) }catch(e){ return d } }
function starText(n){ return '★'.repeat(n)+'☆'.repeat(3-n); }
function stripTags(h){ const d=document.createElement('div'); d.innerHTML=h; return d.textContent; }
function speak(text){
  try{
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.9; u.lang = 'en-US';
    speechSynthesis.speak(u);
  }catch(e){}
}
const canSpeak = 'speechSynthesis' in window;

/* ---------- routing (#math, #progress) ---------- */
function route(){
  if (canSpeak) speechSynthesis.cancel();
  quiz = null;
  const h = location.hash.slice(1);
  if (h === 'progress') return progress();
  const s = S.find(x => x.id === h);
  if (s) return subjectPage(s);
  home();
}
window.addEventListener('hashchange', route);
function go(h){ if (location.hash.slice(1) === h) route(); else location.hash = h; }

/* ---------- pages ---------- */
function home(){
  document.body.style.removeProperty('--sc');
  app.innerHTML = `
    <h1>Let's Practice!</h1>
    <p class="sub">Pick a subject. Tap an answer to see if you got it right.</p>
    <div class="grid">${S.map(s => {
      const done = s.tests.filter(t => load(s.id+':'+t.id)).length;
      return `<button class="subject" style="background:${s.color}" data-id="${s.id}">
        <div class="icon">${s.icon}</div>
        <div><b>${esc(s.name)}</b><span>${s.tests.length} tests · ${done} tried</span></div>
      </button>`;}).join('')}
    </div>
    <div class="parent"><button class="link" id="prog">Grown-ups: see progress</button></div>`;
  app.querySelectorAll('.subject').forEach(b => b.onclick = () => go(b.dataset.id));
  document.getElementById('prog').onclick = () => go('progress');
  window.scrollTo(0,0);
}

function subjectPage(s){
  document.body.style.setProperty('--sc', s.color);
  const tile = (t, extra='') => {
    const r = load(s.id+':'+t.id);
    return `<button class="tile ${extra}" data-id="${t.id}">
      <div><b>${esc(t.name)}</b><span>${esc(t.blurb)}</span></div>
      ${r ? `<div class="best"><span class="stars">${starText(starsFor(r.best,r.total))}</span><br>Best ${r.best}/${r.total}</div>` : ''}
    </button>`;
  };
  app.innerHTML = `
    <div class="bar"><button class="link" id="back">← All subjects</button></div>
    <h1>${s.icon} ${esc(s.name)}</h1>
    <p class="sub">Pick a test.</p>
    <div class="list">
      ${s.tests.map(t => tile(t)).join('')}
      ${tile({id:'mixed', name:'Mixed Practice', blurb:'10 random questions from every test'}, 'mixed')}
    </div>`;
  document.getElementById('back').onclick = () => go('');
  app.querySelectorAll('.tile').forEach(b => b.onclick = () => startQuiz(s, b.dataset.id));
  window.scrollTo(0,0);
}

function startQuiz(s, testId){
  let qs, name;
  if (testId === 'mixed'){
    const all = s.tests.flatMap(t => t.qs.filter(q => !q[4]).map(q => q));
    qs = shuffle(all).slice(0, 10);
    name = 'Mixed Practice';
  } else {
    const t = s.tests.find(x => x.id === testId);
    // Keep story questions in order so the passage reads naturally; shuffle the rest.
    qs = t.qs.some(q => q[4]) ? t.qs.slice() : shuffle(t.qs);
    name = t.name;
  }
  quiz = {
    s, testId, name, i:0, score:0, log:[],
    qs: qs.map(([text, opts, ans, why, p]) => {
      const order = t_noShuffle(opts) ? opts.map((_,k)=>k) : shuffle(opts.map((_,k)=>k));
      return { text, why, p, opts: order.map(k => opts[k]), ans: order.indexOf(ans) };
    })
  };
  renderQ();
}
// Don't scramble options that are numbers in order or end marks; they read better as written.
function t_noShuffle(opts){ return opts.every(o => /^[\d.?!$¢:\/ ]+$/.test(o)); }

function renderQ(){
  const {s, qs, i, name} = quiz, q = qs[i];
  const passage = q.p ? s.passages[q.p] : null;
  const prev = i > 0 ? qs[i-1].p : null;
  const fresh = passage && q.p !== prev;
  app.innerHTML = `
    <div class="bar"><button class="link" id="back">← ${esc(s.name)}</button><span class="num">${i+1} of ${qs.length}</span></div>
    <div class="prog"><i style="width:${(i/qs.length)*100}%"></i></div>
    ${passage ? `<details class="passage" ${fresh?'open':''}><summary>${fresh?'Read the story':'Look back at the story'}</summary>
      ${canSpeak?'<button class="say" id="sayp">🔊 Read story to me</button>':''}${passage}</details>` : ''}
    <div class="q">
      <div class="qhead"><span class="num">${esc(name)}</span>${canSpeak?'<button class="say" id="sayq">🔊 Read to me</button>':''}</div>
      <div class="qtext">${esc(q.text)}</div>
      <div class="opts">${q.opts.map((o,k)=>`<button class="opt" data-k="${k}">${String.fromCharCode(97+k)}) ${esc(o)}</button>`).join('')}</div>
      <div id="fb"></div>
    </div>`;
  document.getElementById('back').onclick = () => { if (canSpeak) speechSynthesis.cancel(); subjectPage(s); };
  if (canSpeak){
    document.getElementById('sayq').onclick = () => speak(q.text + '. ' + q.opts.map((o,k)=>String.fromCharCode(97+k)+'. '+o).join('. '));
    const sp = document.getElementById('sayp'); if (sp) sp.onclick = e => { e.preventDefault(); speak(stripTags(passage)); };
  }
  app.querySelectorAll('.opt').forEach(b => b.onclick = () => answer(+b.dataset.k));
  window.scrollTo(0,0);
}

function answer(k){
  const q = quiz.qs[quiz.i], ok = k === q.ans;
  if (ok) quiz.score++;
  quiz.log.push({ text:q.text, ok, correct:q.opts[q.ans] });
  app.querySelectorAll('.opt').forEach((b,j) => { b.disabled = true; if (j===q.ans) b.classList.add('right'); else if (j===k) b.classList.add('wrong'); });
  const last = quiz.i === quiz.qs.length-1;
  const cheers = ['Great job!','You got it!','Nice work!','Awesome!','Correct!'];
  document.getElementById('fb').innerHTML = `
    <div class="fb ${ok?'good':'bad'}"><b>${ok ? cheers[Math.floor(Math.random()*cheers.length)] : 'Not quite.'}</b> ${esc(q.why)}</div>
    <button class="btn" id="next">${last ? 'See my score' : 'Next question →'}</button>`;
  document.getElementById('next').onclick = () => { if (canSpeak) speechSynthesis.cancel(); if (last) done(); else { quiz.i++; renderQ(); } };
  document.getElementById('next').scrollIntoView({behavior:'smooth', block:'nearest'});
}

function done(){
  const {s, testId, name, score, qs, log} = quiz, n = qs.length;
  const key = s.id+':'+testId, prev = load(key);
  save(key, { best: Math.max(score, prev ? prev.best : 0), total:n, last:score, date:new Date().toISOString().slice(0,10), tries:(prev?prev.tries:0)+1 });
  const st = starsFor(score,n);
  const msg = score===n ? 'Perfect score!' : st===3 ? 'Awesome work!' : st===2 ? 'Good job! Keep practicing!' : 'Nice try! Let\'s practice these again!';
  app.innerHTML = `
    <div class="result">
      <div class="num">${esc(s.name)} · ${esc(name)}</div>
      <div class="stars">${starText(st)}</div>
      <div class="big">${score} / ${n}</div>
      <p><b>${msg}</b></p>
      <button class="btn" id="again">Try again</button>
      <button class="btn ghost" id="more">Pick another test</button>
      <div class="review"><b>Grown-up review</b>${log.map((l,i)=>`<div><span class="${l.ok?'ok':'no'}">${l.ok?'✓':'✗'}</span> ${i+1}. ${esc(l.text)}${l.ok?'':`<br><small>Answer: ${esc(l.correct)}</small>`}</div>`).join('')}</div>
    </div>`;
  document.getElementById('again').onclick = () => startQuiz(s, testId);
  document.getElementById('more').onclick = () => subjectPage(s);
  window.scrollTo(0,0);
}

function progress(){
  document.body.style.removeProperty('--sc');
  app.innerHTML = `
    <div class="bar"><button class="link" id="back">← All subjects</button></div>
    <h1>Progress</h1>
    <p class="sub">Scores are saved on this device only. Low stars show what to practice next.</p>
    ${S.map(s => `<h2>${s.icon} ${esc(s.name)}</h2>
      <table><tr><th>Test</th><th>Best</th><th>Last</th><th>Tries</th></tr>
      ${[...s.tests, {id:'mixed', name:'Mixed Practice'}].map(t => {
        const r = load(s.id+':'+t.id);
        return `<tr><td>${esc(t.name)}</td>${r
          ? `<td class="n"><span class="stars">${starText(starsFor(r.best,r.total))}</span> ${r.best}/${r.total}</td><td class="n">${r.last}/${r.total}<br><small>${shortDate(r.date)}</small></td><td class="n">${r.tries}</td>`
          : '<td colspan="3" class="note">Not tried yet</td>'}</tr>`;
      }).join('')}</table>`).join('')}
    <button class="btn ghost" id="reset">Clear all scores</button>
    <div id="confirm"></div>`;
  document.getElementById('back').onclick = () => go('');
  document.getElementById('reset').onclick = () => {
    document.getElementById('confirm').innerHTML = `<p>Clear every score on this device?</p><button class="btn" id="yes">Yes, clear them</button>`;
    document.getElementById('yes').onclick = () => {
      try { Object.keys(localStorage).filter(k => k.startsWith('learn:')).forEach(k => localStorage.removeItem(k)); } catch(e){}
      progress();
    };
  };
  window.scrollTo(0,0);
}

route();
