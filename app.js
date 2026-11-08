// Let's Practice! Family practice site.
// Question banks live in data/<grade>/*.js and register with addSubject({grade, id, name, ...}).
// Question format: [question, [options...], indexOfCorrectOption, "why it's right", "passageKey" or null, 'quiet'(optional)]
//
// Data (Firestore, locked to the parent's Google account):
//   families/{uid}                          { pinHash, at }
//   families/{uid}/kids/{kid}               { name, grade, avatar, readAloud, at }
//   families/{uid}/kids/{kid}/best/{key}    { g, s, t, name, best, total, last, date, tries }
//   families/{uid}/kids/{kid}/attempts/{id} { g, s, t, name, score, total, at, missed:[{q,a,their}] }

const app = document.getElementById('app');
const SUBJECTS = window.SUBJECTS;
const GRADES = [
  { id:'K', name:'Kindergarten', short:'K' },
  { id:'1', name:'1st Grade', short:'1st' },
  { id:'2', name:'2nd Grade', short:'2nd' },
  { id:'3', name:'3rd Grade', short:'3rd' }
];
const AVATARS = ['🦊','🐻','🐼','🐯','🦁','🐸','🐵','🦄','🐙','🦖','🐶','🐱','🐰','🐧','🦋','🚀','⚽','🎨'];
const DEMO = new URLSearchParams(location.search).has('demo');

const st = { user:null, family:null, kids:[], kid:null, best:{}, grade:null, quiz:null, parentOk:false, parentKid:null };

/* ---------------- helpers ---------------- */
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const $ = id => document.getElementById(id);
function shuffle(a){ a = a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
function local(k, v){ try{ if (v === undefined) return localStorage.getItem('learn:'+k); if (v === null) localStorage.removeItem('learn:'+k); else localStorage.setItem('learn:'+k, v); }catch(e){ return null; } }
function starsFor(score,total){ const p = total ? score/total : 0; return p>=0.9?3:p>=0.7?2:p>=0.5?1:0; }
function starText(n){ return '★'.repeat(n)+'☆'.repeat(3-n); }
function shortDate(ms){ try{ return new Date(ms).toLocaleDateString('en-US',{month:'short',day:'numeric'}); }catch(e){ return ''; } }
function gradeName(id){ return (GRADES.find(g => g.id === id) || {}).name || ''; }
function subjectsFor(g){ return SUBJECTS.filter(s => s.grade === g); }
function bestKey(g,s,t){ return g+'_'+s+'_'+t; }
function uid8(){ return Math.random().toString(36).slice(2,10); }
async function hashPin(pin){
  const data = new TextEncoder().encode('learn-pin:'+pin);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2,'0')).join('');
}
function stripTags(h){ const d = document.createElement('div'); d.innerHTML = h; return d.textContent; }
const canSpeak = 'speechSynthesis' in window;
function speak(text){
  if (!canSpeak) return;
  try{
    speechSynthesis.cancel();
    const clean = String(text).replace(/\p{Extended_Pictographic}|️|‍/gu, '').replace(/\s+/g,' ').trim();
    if (!clean) return;
    const u = new SpeechSynthesisUtterance(clean); u.rate = 0.88; u.lang = 'en-US';
    speechSynthesis.speak(u);
  }catch(e){}
}
function hush(){ if (canSpeak) try{ speechSynthesis.cancel(); }catch(e){} }
function setColor(c){ if (c) document.body.style.setProperty('--sc', c); else document.body.style.removeProperty('--sc'); }
function screen(html){ hush(); app.innerHTML = html; window.scrollTo(0,0); }
function toast(msg){ const t = $('toast'); if (!t) return; t.textContent = msg; t.hidden = !msg; }

/* ---------------- storage: Firestore, or a local fake for ?demo ---------------- */
let DB, AUTH;
function makeFirebase(){
  const cfg = window.FIREBASE_CONFIG;
  firebase.initializeApp(cfg);
  const fs = firebase.firestore();
  try{ fs.enablePersistence({ synchronizeTabs:true }).catch(()=>{}); }catch(e){}
  const auth = firebase.auth();
  DB = {
    async get(p){ const d = await fs.doc(p).get(); return d.exists ? d.data() : null; },
    async set(p, data, merge){ await fs.doc(p).set(data, merge ? {merge:true} : {}); },
    async add(col, data){ const r = await fs.collection(col).add(data); return r.id; },
    async del(p){ await fs.doc(p).delete(); },
    async list(col, o={}){
      let q = fs.collection(col);
      if (o.order) q = q.orderBy(o.order, o.desc ? 'desc' : 'asc');
      if (o.limit) q = q.limit(o.limit);
      const s = await q.get(); return s.docs.map(d => ({ id:d.id, ...d.data() }));
    }
  };
  AUTH = {
    onChange(cb){ auth.getRedirectResult().catch(()=>{}); auth.onAuthStateChanged(cb); },
    async signIn(){
      const prov = new firebase.auth.GoogleAuthProvider();
      try{ await auth.signInWithPopup(prov); }
      catch(e){
        if (e && e.code === 'auth/popup-blocked') return auth.signInWithRedirect(prov);
        if (e && /popup-closed|cancelled-popup/.test(e.code || '')) return;
        throw e;
      }
    },
    async signOut(){ await auth.signOut(); }
  };
}
function makeDemo(){
  const KEY = 'learn-demo-db';
  const load = () => { try{ return JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){ return {}; } };
  const save = m => { try{ localStorage.setItem(KEY, JSON.stringify(m)); }catch(e){} };
  DB = {
    async get(p){ return load()[p] || null; },
    async set(p, data, merge){ const m = load(); m[p] = merge ? { ...(m[p]||{}), ...data } : data; save(m); },
    async add(col, data){ const id = uid8(); await DB.set(col+'/'+id, data); return id; },
    async del(p){ const m = load(); delete m[p]; save(m); },
    async list(col, o={}){
      const m = load(), pre = col + '/';
      let r = Object.keys(m).filter(k => k.startsWith(pre) && !k.slice(pre.length).includes('/')).map(k => ({ id:k.slice(pre.length), ...m[k] }));
      if (o.order) r.sort((a,b) => (a[o.order] > b[o.order] ? 1 : -1) * (o.desc ? -1 : 1));
      if (o.limit) r = r.slice(0, o.limit);
      return r;
    }
  };
  let cb = null, user = local('demo-signed') ? { uid:'demo', displayName:'Demo Parent' } : null;
  AUTH = {
    onChange(f){ cb = f; setTimeout(() => cb(user), 0); },
    async signIn(){ local('demo-signed','1'); user = { uid:'demo', displayName:'Demo Parent' }; cb(user); },
    async signOut(){ local('demo-signed', null); user = null; cb(null); }
  };
}
const famPath = () => 'families/' + st.user.uid;
const kidPath = id => famPath() + '/kids/' + id;

/* ---------------- start ---------------- */
function boot(){
  screen(`<div class="center"><div class="big">📚</div><p>Loading…</p></div>`);
  try{
    if (DEMO) makeDemo();
    else if (window.firebase && window.FIREBASE_CONFIG) makeFirebase();
    else return screen(`<div class="center"><h1>Can't connect</h1><p class="sub">Check your internet connection and reload.</p></div>`);
  }catch(e){ return screen(`<div class="center"><h1>Can't connect</h1><p class="sub">Reload the page to try again.</p></div>`); }
  AUTH.onChange(async u => {
    st.user = u; st.parentOk = false;
    if (!u) return signInPage();
    try{
      st.family = await DB.get(famPath());
      await loadKids();
    }catch(e){
      return screen(`<div class="center"><h1>Couldn't load your family</h1><p class="sub">${esc(e && e.code === 'permission-denied' ? 'The database rules need to be published in Firebase.' : 'Check your internet connection and reload.')}</p><button class="btn ghost" id="out">Sign out</button></div>`), $('out').onclick = () => AUTH.signOut();
    }
    if (!st.family || !st.family.pinHash || !st.kids.length) return setupPage();
    const last = local('kid:'+u.uid);
    const k = st.kids.find(x => x.id === last);
    if (k && st.kids.length === 1) return pickKid(k);
    whoPage();
  });
}
async function loadKids(){
  st.kids = (await DB.list(famPath()+'/kids')).sort((a,b) => (a.at||0) - (b.at||0));
}

/* ---------------- sign in & setup ---------------- */
function signInPage(){
  setColor();
  screen(`
    <div class="center">
      <div class="big">📚</div>
      <h1>Let's Practice!</h1>
      <p class="sub">A grown-up signs in once on this device. Then each kid picks their name and starts practicing.</p>
      <button class="btn google" id="g">Sign in with Google</button>
      <p class="err" id="err"></p>
      <p class="note">Only you can see your kids' scores.</p>
    </div>`);
  $('g').onclick = async () => {
    $('err').textContent = '';
    try{ await AUTH.signIn(); }
    catch(e){ $('err').textContent = (e && /unauthorized-domain/.test(e.code||'')) ? 'This site needs to be added to Firebase\'s authorized domains.' : 'Couldn\'t sign in. Try again.'; }
  };
}

function setupPage(){
  setColor();
  const needPin = !st.family || !st.family.pinHash;
  screen(`
    <h1>Welcome! Let's set up</h1>
    <p class="sub">Signed in as ${esc(st.user.displayName || st.user.email || 'you')}.</p>
    ${needPin ? `
    <div class="card">
      <h2>1. Grown-up PIN</h2>
      <p class="note">You'll type this to see scores and change settings, so kids can't.</p>
      <input class="pin" id="pin1" inputmode="numeric" maxlength="4" placeholder="4 digits" autocomplete="off">
      <input class="pin" id="pin2" inputmode="numeric" maxlength="4" placeholder="Type it again" autocomplete="off">
    </div>` : ''}
    <div class="card">
      <h2>${needPin ? '2. ' : ''}Add your kids</h2>
      <div id="kidlist">${st.kids.map(k => `<div class="row"><span class="av">${k.avatar}</span> ${esc(k.name)} · ${gradeName(k.grade)}</div>`).join('') || '<p class="note">No kids yet.</p>'}</div>
      <button class="btn ghost" id="addkid">+ Add a kid</button>
    </div>
    <p class="err" id="err"></p>
    <button class="btn" id="done">Done</button>
    <div class="parent"><button class="link" id="out">Sign out</button></div>`);
  $('addkid').onclick = () => kidForm(null, setupPage);
  $('out').onclick = () => AUTH.signOut();
  $('done').onclick = async () => {
    $('err').textContent = '';
    if (needPin){
      const a = $('pin1').value.trim(), b = $('pin2').value.trim();
      if (!/^\d{4}$/.test(a)) return $('err').textContent = 'The PIN needs to be 4 numbers.';
      if (a !== b) return $('err').textContent = 'The two PINs don\'t match.';
      try{ await DB.set(famPath(), { pinHash: await hashPin(a), at: Date.now() }, true); st.family = await DB.get(famPath()); }
      catch(e){ return $('err').textContent = 'Couldn\'t save. Check your connection and try again.'; }
    }
    if (!st.kids.length) return $('err').textContent = 'Add at least one kid.';
    whoPage();
  };
}

function kidForm(kid, back){
  setColor();
  const k = kid || { name:'', grade:'K', avatar:AVATARS[st.kids.length % AVATARS.length], readAloud:true };
  let avatar = k.avatar;
  screen(`
    <div class="bar"><button class="link" id="back">← Back</button></div>
    <h1>${kid ? 'Edit ' + esc(kid.name) : 'Add a kid'}</h1>
    <div class="card">
      <label class="lbl">First name</label>
      <input class="txt" id="name" maxlength="20" value="${esc(k.name)}" autocomplete="off">
      <label class="lbl">Grade</label>
      <div class="chips" id="grades">${GRADES.map(g => `<button class="chip ${g.id===k.grade?'on':''}" data-g="${g.id}">${g.name}</button>`).join('')}</div>
      <label class="lbl">Picture</label>
      <div class="avatars" id="avs">${AVATARS.map(a => `<button class="avbtn ${a===avatar?'on':''}" data-a="${a}">${a}</button>`).join('')}</div>
      <label class="check"><input type="checkbox" id="ra" ${k.readAloud?'checked':''}> Read questions out loud automatically <span class="note">(great for kids still learning to read)</span></label>
    </div>
    <p class="err" id="err"></p>
    <button class="btn" id="save">Save</button>
    ${kid ? `<button class="btn ghost danger" id="del">Remove ${esc(kid.name)}</button><div id="confirm"></div>` : ''}`);
  let grade = k.grade;
  $('back').onclick = back;
  $('grades').querySelectorAll('.chip').forEach(b => b.onclick = () => { grade = b.dataset.g; $('grades').querySelectorAll('.chip').forEach(x => x.classList.toggle('on', x === b)); });
  $('avs').querySelectorAll('.avbtn').forEach(b => b.onclick = () => { avatar = b.dataset.a; $('avs').querySelectorAll('.avbtn').forEach(x => x.classList.toggle('on', x === b)); });
  $('save').onclick = async () => {
    const name = $('name').value.trim().slice(0,20);
    if (!name) return $('err').textContent = 'Type a name.';
    const data = { name, grade, avatar, readAloud: $('ra').checked, at: kid ? (kid.at || Date.now()) : Date.now() };
    try{
      await DB.set(kidPath(kid ? kid.id : uid8()), data);
      await loadKids();
      if (st.kid && kid && st.kid.id === kid.id) st.kid = st.kids.find(x => x.id === kid.id);
      back();
    }catch(e){ $('err').textContent = 'Couldn\'t save. Check your connection and try again.'; }
  };
  if (kid) $('del').onclick = () => {
    $('confirm').innerHTML = `<p>This deletes ${esc(kid.name)} and all of ${esc(kid.name)}'s scores.</p><button class="btn danger-fill" id="yes">Yes, remove ${esc(kid.name)}</button>`;
    $('yes').onclick = async () => {
      try{
        for (const sub of ['best','attempts']) for (const d of await DB.list(kidPath(kid.id)+'/'+sub)) await DB.del(kidPath(kid.id)+'/'+sub+'/'+d.id);
        await DB.del(kidPath(kid.id));
        await loadKids();
        if (st.kid && st.kid.id === kid.id) st.kid = null;
        st.parentKid = null;
        back();
      }catch(e){ $('err').textContent = 'Couldn\'t remove. Try again.'; }
    };
  };
}

/* ---------------- kid side ---------------- */
function whoPage(){
  setColor(); st.kid = null;
  screen(`
    <h1>Who's practicing?</h1>
    <div class="who">${st.kids.map(k => `<button class="kidbtn" data-id="${k.id}"><span class="av">${k.avatar}</span><b>${esc(k.name)}</b><span>${gradeName(k.grade)}</span></button>`).join('')}</div>
    <div class="parent"><button class="link" id="par">🔒 Grown-ups</button></div>`);
  app.querySelectorAll('.kidbtn').forEach(b => b.onclick = () => pickKid(st.kids.find(k => k.id === b.dataset.id)));
  $('par').onclick = () => parentGate();
}

async function pickKid(k){
  st.kid = k; st.grade = k.grade; st.best = {};
  local('kid:'+st.user.uid, k.id);
  try{ (await DB.list(kidPath(k.id)+'/best')).forEach(b => st.best[b.id] = b); }catch(e){}
  kidHome();
}

function kidHome(){
  const k = st.kid; setColor();
  const subs = subjectsFor(st.grade);
  screen(`
    <div class="bar"><button class="link" id="switch">← Not ${esc(k.name)}?</button><span class="gradetag">${gradeName(st.grade)}</span></div>
    <h1>Hi, ${esc(k.name)}! ${k.avatar}</h1>
    <p class="sub">Pick a subject.</p>
    <div class="grid">${subs.map(s => {
      const tried = s.tests.filter(t => st.best[bestKey(s.grade,s.id,t.id)]).length;
      return `<button class="subject" style="background:${s.color}" data-id="${s.id}">
        <div class="icon">${s.icon}</div>
        <div><b>${esc(s.name)}</b><span>${s.tests.length} tests · ${tried} tried</span></div>
      </button>`; }).join('') || '<p class="note">No tests for this grade yet.</p>'}
    </div>
    <div class="othergrades">
      <p class="note">Want it easier or harder? Try another grade:</p>
      <div class="chips">${GRADES.map(g => `<button class="chip ${g.id===st.grade?'on':''}" data-g="${g.id}">${g.name}</button>`).join('')}</div>
    </div>`);
  $('switch').onclick = () => whoPage();
  app.querySelectorAll('.subject').forEach(b => b.onclick = () => subjectPage(subs.find(s => s.id === b.dataset.id)));
  app.querySelectorAll('.othergrades .chip').forEach(b => b.onclick = () => { st.grade = b.dataset.g; kidHome(); });
}

function subjectPage(s){
  setColor(s.color);
  const tile = (t, extra='') => {
    const r = st.best[bestKey(s.grade,s.id,t.id)];
    return `<button class="tile ${extra}" data-id="${t.id}">
      <div><b>${esc(t.name)}</b><span>${esc(t.blurb)}</span></div>
      ${r ? `<div class="best"><span class="stars">${starText(starsFor(r.best,r.total))}</span><br>Best ${r.best}/${r.total}</div>` : ''}
    </button>`;
  };
  screen(`
    <div class="bar"><button class="link" id="back">← ${esc(st.kid.name)}'s subjects</button><span class="gradetag">${gradeName(s.grade)}</span></div>
    <h1>${s.icon} ${esc(s.name)}</h1>
    <p class="sub">Pick a test.</p>
    <div class="list">
      ${s.tests.map(t => tile(t)).join('')}
      ${tile({id:'mixed', name:'Mixed Practice', blurb:'10 random questions from every test'}, 'mixed')}
    </div>`);
  $('back').onclick = kidHome;
  app.querySelectorAll('.tile').forEach(b => b.onclick = () => startQuiz(s, b.dataset.id));
}

// Don't scramble options that are numbers in order or end marks; they read better as written.
function keepOrder(opts){ return opts.every(o => /^[\d.?!$¢:\/ ]+$/.test(o)); }

function startQuiz(s, testId){
  let qs, name;
  if (testId === 'mixed'){
    qs = shuffle(s.tests.flatMap(t => t.qs.filter(q => !q[4]))).slice(0, 10);
    name = 'Mixed Practice';
  } else {
    const t = s.tests.find(x => x.id === testId);
    qs = t.qs.some(q => q[4]) ? t.qs.slice() : shuffle(t.qs);
    name = t.name;
  }
  st.quiz = {
    s, testId, name, i:0, score:0, log:[],
    qs: qs.map(([text, opts, ans, why, p, flag]) => {
      const order = keepOrder(opts) ? opts.map((_,k)=>k) : shuffle(opts.map((_,k)=>k));
      return { text, why, p, quiet: flag === 'quiet', opts: order.map(k => opts[k]), ans: order.indexOf(ans) };
    })
  };
  renderQ();
}

// 'quiet' questions (like "find the word see") read only the question, since saying the options gives the answer away.
function readQ(q){ speak(q.quiet ? q.text : q.text + '. ' + q.opts.map((o,k) => String.fromCharCode(97+k)+'. '+o).join('. ')); }

function renderQ(){
  const z = st.quiz, {s, qs, i, name} = z, q = qs[i];
  const passage = q.p ? s.passages[q.p] : null;
  const fresh = passage && q.p !== (i > 0 ? qs[i-1].p : null);
  screen(`
    <div class="bar"><button class="link" id="back">← ${esc(s.name)}</button><span class="num">${i+1} of ${qs.length}</span></div>
    <div class="prog"><i style="width:${(i/qs.length)*100}%"></i></div>
    ${passage ? `<details class="passage" ${fresh?'open':''}><summary>${fresh?'Read the story':'Look back at the story'}</summary>
      ${canSpeak?'<button class="say" id="sayp">🔊 Read story to me</button>':''}${passage}</details>` : ''}
    <div class="q">
      <div class="qhead"><span class="num">${esc(name)}</span>${canSpeak?'<button class="say" id="sayq">🔊 Read to me</button>':''}</div>
      <div class="qtext">${esc(q.text)}</div>
      <div class="opts">${q.opts.map((o,k)=>`<button class="opt" data-k="${k}">${String.fromCharCode(97+k)}) ${esc(o)}</button>`).join('')}</div>
      <div id="fb"></div>
    </div>`);
  $('back').onclick = () => subjectPage(s);
  if (canSpeak){
    $('sayq').onclick = () => readQ(q);
    const sp = $('sayp'); if (sp) sp.onclick = e => { e.preventDefault(); speak(stripTags(passage)); };
    if (st.kid.readAloud && !fresh) readQ(q);
  }
  app.querySelectorAll('.opt').forEach(b => b.onclick = () => answer(+b.dataset.k));
}

function answer(k){
  const z = st.quiz, q = z.qs[z.i], ok = k === q.ans;
  if (ok) z.score++;
  z.log.push({ text:q.text, ok, correct:q.opts[q.ans], their:q.opts[k] });
  app.querySelectorAll('.opt').forEach((b,j) => { b.disabled = true; if (j===q.ans) b.classList.add('right'); else if (j===k) b.classList.add('wrong'); });
  const last = z.i === z.qs.length-1;
  const cheers = ['Great job!','You got it!','Nice work!','Awesome!','Correct!'];
  const head = ok ? cheers[Math.floor(Math.random()*cheers.length)] : 'Not quite.';
  $('fb').innerHTML = `
    <div class="fb ${ok?'good':'bad'}"><b>${head}</b> ${esc(q.why)}</div>
    <button class="btn" id="next">${last ? 'See my score' : 'Next question →'}</button>`;
  if (st.kid.readAloud) speak(head + ' ' + q.why);
  $('next').onclick = () => { if (last) done(); else { z.i++; renderQ(); } };
  $('next').scrollIntoView({behavior:'smooth', block:'nearest'});
}

async function done(){
  const z = st.quiz, {s, testId, name, score, qs, log} = z, n = qs.length;
  const key = bestKey(s.grade, s.id, testId), prev = st.best[key];
  const rec = { g:s.grade, s:s.id, t:testId, name, best:Math.max(score, prev ? prev.best : 0), total:n, last:score, date:Date.now(), tries:(prev ? prev.tries : 0) + 1 };
  st.best[key] = { id:key, ...rec };
  const stars = starsFor(score, n);
  const msg = score===n ? 'Perfect score!' : stars===3 ? 'Awesome work!' : stars===2 ? 'Good job! Keep practicing!' : 'Nice try! Let\'s practice these again!';
  screen(`
    <div class="result">
      <div class="num">${esc(st.kid.name)} · ${esc(s.name)} · ${esc(name)}</div>
      <div class="stars">${starText(stars)}</div>
      <div class="big">${score} / ${n}</div>
      <p><b>${msg}</b></p>
      <p class="note" id="saved">Saving…</p>
      <button class="btn" id="again">Try again</button>
      <button class="btn ghost" id="more">Pick another test</button>
      <div class="review"><b>Look back</b>${log.map((l,i)=>`<div><span class="${l.ok?'ok':'no'}">${l.ok?'✓':'✗'}</span> ${i+1}. ${esc(l.text)}${l.ok?'':`<br><small>Answer: ${esc(l.correct)}</small>`}</div>`).join('')}</div>
    </div>`);
  if (st.kid.readAloud) speak(`You got ${score} out of ${n}. ${msg}`);
  $('again').onclick = () => startQuiz(s, testId);
  $('more').onclick = () => subjectPage(s);
  const kp = kidPath(st.kid.id);
  try{
    await DB.set(kp+'/best/'+key, rec);
    await DB.add(kp+'/attempts', { g:s.grade, s:s.id, t:testId, name, score, total:n, at:Date.now(),
      missed: log.filter(l => !l.ok).map(l => ({ q:String(l.text).slice(0,300), a:String(l.correct).slice(0,200), their:String(l.their).slice(0,200) })) });
    if ($('saved')) $('saved').textContent = 'Saved for ' + st.kid.name + '.';
  }catch(e){ if ($('saved')) $('saved').textContent = 'Saved on this device. It will sync when you\'re back online.'; }
}

/* ---------------- grown-up side ---------------- */
function parentGate(){
  setColor();
  if (st.parentOk) return parentHome();
  screen(`
    <div class="bar"><button class="link" id="back">← Back</button></div>
    <div class="center">
      <h1>🔒 Grown-ups only</h1>
      <p class="sub">Enter your PIN.</p>
      <input class="pin" id="pin" inputmode="numeric" maxlength="4" autocomplete="off" placeholder="PIN">
      <p class="err" id="err"></p>
      <button class="btn" id="go">Open</button>
    </div>`);
  $('back').onclick = whoPage;
  const go = async () => {
    if (await hashPin($('pin').value.trim()) === st.family.pinHash){ st.parentOk = true; parentHome(); }
    else { $('err').textContent = 'That PIN isn\'t right.'; $('pin').value = ''; }
  };
  $('go').onclick = go;
  $('pin').onkeydown = e => { if (e.key === 'Enter') go(); };
  $('pin').focus();
}

async function parentHome(){
  setColor();
  if (!st.kids.length) return setupPage();
  const kid = st.kids.find(k => k.id === st.parentKid) || st.kids[0];
  st.parentKid = kid.id;
  screen(`
    <div class="bar"><button class="link" id="back">← Kids</button><button class="link" id="lock">Lock</button></div>
    <h1>Scores</h1>
    <div class="chips kidtabs">${st.kids.map(k => `<button class="chip ${k.id===kid.id?'on':''}" data-id="${k.id}">${k.avatar} ${esc(k.name)}</button>`).join('')}</div>
    <div id="body"><p class="note">Loading ${esc(kid.name)}'s scores…</p></div>
    <h2>Settings</h2>
    <div class="list">
      <button class="tile" id="edit"><div><b>Edit ${esc(kid.name)}</b><span>Name, grade, picture, read-aloud</span></div></button>
      <button class="tile" id="add"><div><b>+ Add a kid</b><span>Each kid gets their own scores</span></div></button>
      <button class="tile" id="pinc"><div><b>Change PIN</b><span>The PIN that opens this page</span></div></button>
      <button class="tile" id="out"><div><b>Sign out</b><span>Signed in as ${esc(st.user.displayName || st.user.email || '')}</span></div></button>
    </div>`);
  $('back').onclick = whoPage;
  $('lock').onclick = () => { st.parentOk = false; whoPage(); };
  app.querySelectorAll('.kidtabs .chip').forEach(b => b.onclick = () => { st.parentKid = b.dataset.id; parentHome(); });
  $('edit').onclick = () => kidForm(kid, parentHome);
  $('add').onclick = () => kidForm(null, parentHome);
  $('pinc').onclick = changePin;
  $('out').onclick = () => { local('kid:'+st.user.uid, null); AUTH.signOut(); };

  let best = [], attempts = [];
  try{
    best = await DB.list(kidPath(kid.id)+'/best');
    attempts = await DB.list(kidPath(kid.id)+'/attempts', { order:'at', desc:true, limit:30 });
  }catch(e){ if ($('body')) $('body').innerHTML = '<p class="err">Couldn\'t load scores. Check your connection.</p>'; return; }
  if (!$('body') || st.parentKid !== kid.id) return;
  const bmap = {}; best.forEach(b => bmap[b.id] = b);
  const tried = best.filter(b => b.t !== 'mixed');
  const avg = tried.length ? Math.round(100 * tried.reduce((a,b) => a + b.best/b.total, 0) / tried.length) : 0;
  const lastAt = attempts[0] ? attempts[0].at : 0;
  const testName = (g,s,t) => { const sub = SUBJECTS.find(x => x.grade===g && x.id===s); const tt = sub && sub.tests.find(x => x.id===t); return (tt ? tt.name : t === 'mixed' ? 'Mixed Practice' : t); };
  const subName = (g,s) => { const sub = SUBJECTS.find(x => x.grade===g && x.id===s); return sub ? sub.icon+' '+sub.name : s; };
  const weak = tried.filter(b => b.best/b.total < 0.7).sort((a,b) => a.best/a.total - b.best/b.total);
  const grades = GRADES.filter(g => g.id === kid.grade || best.some(b => b.g === g.id));

  $('body').innerHTML = `
    <div class="stats">
      <div><b>${tried.length}</b><span>tests tried</span></div>
      <div><b>${tried.length ? avg+'%' : '–'}</b><span>average best</span></div>
      <div><b>${lastAt ? shortDate(lastAt) : '–'}</b><span>last practiced</span></div>
    </div>
    ${weak.length ? `<h2>Needs practice</h2><div class="card weak">${weak.slice(0,6).map(b => `<div class="row"><span>${esc(subName(b.g,b.s))} · ${esc(testName(b.g,b.s,b.t))} <small class="note">(${gradeName(b.g)})</small></span><b class="no">${b.best}/${b.total}</b></div>`).join('')}</div>` : ''}
    ${grades.map(g => `<details class="gradebox" ${g.id===kid.grade?'open':''}><summary><h2>${g.name}${g.id===kid.grade?` <small class="note">(${esc(kid.name)}'s grade)</small>`:''}</h2></summary>
      ${subjectsFor(g.id).map(s => `<table><tr><th>${s.icon} ${esc(s.name)}</th><th>Best</th><th>Last</th><th>Tries</th></tr>
        ${[...s.tests, {id:'mixed', name:'Mixed Practice'}].map(t => { const r = bmap[bestKey(g.id,s.id,t.id)];
          return `<tr><td>${esc(t.name)}</td>${r
            ? `<td class="n"><span class="stars">${starText(starsFor(r.best,r.total))}</span>${r.best}/${r.total}</td><td class="n">${r.last}/${r.total}<br><small>${shortDate(r.date)}</small></td><td class="n">${r.tries}</td>`
            : '<td colspan="3" class="note">Not tried yet</td>'}</tr>`; }).join('')}
      </table>`).join('')}</details>`).join('')}
    <h2>Recent tests</h2>
    ${attempts.length ? `<div class="list">${attempts.map(a => `
      <details class="attempt"><summary><span>${shortDate(a.at)} · ${esc(subName(a.g,a.s))} · ${esc(a.name || testName(a.g,a.s,a.t))}${a.g!==kid.grade?` <small class="note">(${gradeName(a.g)})</small>`:''}</span><b class="${a.score/a.total>=0.7?'ok':'no'}">${a.score}/${a.total}</b></summary>
        ${a.missed && a.missed.length ? a.missed.map(m => `<div class="miss"><div>${esc(m.q)}</div><small><span class="no">Picked: ${esc(m.their)}</span> · <span class="ok">Answer: ${esc(m.a)}</span></small></div>`).join('') : '<p class="note">No misses. Perfect score!</p>'}
      </details>`).join('')}</div>` : `<p class="note">${esc(kid.name)} hasn't taken a test yet.</p>`}`;
}

function changePin(){
  screen(`
    <div class="bar"><button class="link" id="back">← Back</button></div>
    <h1>Change PIN</h1>
    <div class="card">
      <input class="pin" id="p1" inputmode="numeric" maxlength="4" placeholder="New PIN" autocomplete="off">
      <input class="pin" id="p2" inputmode="numeric" maxlength="4" placeholder="Type it again" autocomplete="off">
    </div>
    <p class="err" id="err"></p>
    <button class="btn" id="save">Save PIN</button>`);
  $('back').onclick = parentHome;
  $('save').onclick = async () => {
    const a = $('p1').value.trim(), b = $('p2').value.trim();
    if (!/^\d{4}$/.test(a)) return $('err').textContent = 'The PIN needs to be 4 numbers.';
    if (a !== b) return $('err').textContent = 'The two PINs don\'t match.';
    try{ await DB.set(famPath(), { pinHash: await hashPin(a), at: Date.now() }, true); st.family = await DB.get(famPath()); parentHome(); }
    catch(e){ $('err').textContent = 'Couldn\'t save. Try again.'; }
  };
}

boot();
