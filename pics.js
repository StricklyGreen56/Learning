// Picture library for questions. Every picture is drawn here as SVG (no downloads), so it loads instantly everywhere.
// Use in a question: [question, options, answer, why, passageKey or null, flag or null, 'pictureKey']
// Use as an answer choice: 'pic:pictureKey' (the label is used in reviews and the parent page).
window.PICS = {};
function addPic(key, label, svg){ window.PICS[key] = { label, svg }; }
const F = 'font-family="Nunito,Arial,sans-serif"';

/* ---------- icons ---------- */
addPic('save', 'Save icon', `<svg viewBox="0 0 100 100"><rect x="15" y="15" width="70" height="70" rx="6" fill="#3b5bdb"/><rect x="30" y="15" width="40" height="24" fill="#dee2e6"/><rect x="58" y="19" width="8" height="16" fill="#3b5bdb"/><rect x="27" y="52" width="46" height="33" rx="2" fill="#fff"/><line x1="33" y1="62" x2="67" y2="62" stroke="#adb5bd" stroke-width="3"/><line x1="33" y1="72" x2="67" y2="72" stroke="#adb5bd" stroke-width="3"/></svg>`);
addPic('trash', 'Trash can icon', `<svg viewBox="0 0 100 100"><rect x="38" y="12" width="24" height="9" rx="3" fill="#495057"/><rect x="22" y="21" width="56" height="10" rx="3" fill="#495057"/><path d="M28 34h44l-5 52H33z" fill="#868e96"/><g stroke="#dee2e6" stroke-width="4" stroke-linecap="round"><line x1="40" y1="44" x2="41" y2="76"/><line x1="50" y1="44" x2="50" y2="76"/><line x1="60" y1="44" x2="59" y2="76"/></g></svg>`);
addPic('search', 'Magnifying glass (search) icon', `<svg viewBox="0 0 100 100"><circle cx="42" cy="42" r="24" fill="#e7f5ff" stroke="#1c7ed6" stroke-width="9"/><line x1="60" y1="60" x2="84" y2="84" stroke="#1c7ed6" stroke-width="12" stroke-linecap="round"/></svg>`);
addPic('gear', 'Gear (settings) icon', `<svg viewBox="0 0 100 100"><g fill="#868e96">${[0,45,90,135,180,225,270,315].map(a => `<rect x="42" y="8" width="16" height="22" rx="3" transform="rotate(${a} 50 50)"/>`).join('')}<circle cx="50" cy="50" r="28"/></g><circle cx="50" cy="50" r="11" fill="#fff"/></svg>`);
addPic('wifi', 'Wi-Fi icon', `<svg viewBox="0 0 100 100"><g fill="none" stroke="#1c7ed6" stroke-width="9" stroke-linecap="round"><path d="M14 44a52 52 0 0 1 72 0"/><path d="M27 58a33 33 0 0 1 46 0"/><path d="M40 72a14 14 0 0 1 20 0"/></g><circle cx="50" cy="84" r="6" fill="#1c7ed6"/></svg>`);
addPic('battery', 'Low battery icon', `<svg viewBox="0 0 100 100"><rect x="12" y="32" width="70" height="36" rx="6" fill="none" stroke="#495057" stroke-width="6"/><rect x="83" y="42" width="7" height="16" rx="2" fill="#495057"/><rect x="19" y="39" width="12" height="22" rx="2" fill="#e03131"/></svg>`);
addPic('volume', 'Speaker (volume) icon', `<svg viewBox="0 0 100 100"><path d="M16 40h14l20-16v52L30 60H16z" fill="#495057"/><g fill="none" stroke="#495057" stroke-width="6" stroke-linecap="round"><path d="M60 38a16 16 0 0 1 0 24"/><path d="M70 28a30 30 0 0 1 0 44"/></g></svg>`);
addPic('print', 'Printer icon', `<svg viewBox="0 0 100 100"><rect x="30" y="14" width="40" height="22" fill="#fff" stroke="#495057" stroke-width="5"/><rect x="14" y="34" width="72" height="36" rx="6" fill="#495057"/><rect x="30" y="56" width="40" height="30" fill="#fff" stroke="#495057" stroke-width="5"/><line x1="37" y1="66" x2="63" y2="66" stroke="#adb5bd" stroke-width="3"/><line x1="37" y1="75" x2="63" y2="75" stroke="#adb5bd" stroke-width="3"/><circle cx="76" cy="44" r="4" fill="#51cf66"/></svg>`);
addPic('refresh', 'Refresh icon', `<svg viewBox="0 0 100 100"><path d="M76 58a28 28 0 1 1-6-30" fill="none" stroke="#495057" stroke-width="9" stroke-linecap="round"/><path d="M80 12v24H56z" fill="#495057"/></svg>`);
addPic('back', 'Back arrow icon', `<svg viewBox="0 0 100 100"><path d="M82 50H26M46 28L24 50l22 22" fill="none" stroke="#495057" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`);
addPic('download', 'Download icon', `<svg viewBox="0 0 100 100"><path d="M50 14v46M30 42l20 20 20-20" fill="none" stroke="#2f9e44" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 66v16h64V66" fill="none" stroke="#495057" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>`);
addPic('close', 'Close (X) icon', `<svg viewBox="0 0 100 100"><rect x="14" y="14" width="72" height="72" rx="12" fill="#e03131"/><path d="M34 34l32 32M66 34L34 66" stroke="#fff" stroke-width="10" stroke-linecap="round"/></svg>`);
addPic('home', 'Home icon', `<svg viewBox="0 0 100 100"><path d="M14 50L50 18l36 32" fill="none" stroke="#495057" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 46v38h18V64h12v20h18V46" fill="#495057"/></svg>`);
addPic('lock', 'Padlock icon', `<svg viewBox="0 0 100 100"><path d="M32 46V32a18 18 0 0 1 36 0v14" fill="none" stroke="#495057" stroke-width="9"/><rect x="22" y="44" width="56" height="42" rx="8" fill="#f59f00"/><circle cx="50" cy="61" r="6" fill="#495057"/><rect x="47" y="62" width="6" height="13" rx="2" fill="#495057"/></svg>`);
addPic('undo', 'Undo arrow icon', `<svg viewBox="0 0 100 100"><path d="M28 42h36a20 20 0 0 1 0 40H40" fill="none" stroke="#495057" stroke-width="9" stroke-linecap="round"/><path d="M40 22L20 42l20 20" fill="none" stroke="#495057" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></svg>`);

/* ---------- devices ---------- */
addPic('monitor', 'Monitor (screen)', `<svg viewBox="0 0 120 100"><rect x="10" y="8" width="100" height="64" rx="5" fill="#343a40"/><rect x="16" y="14" width="88" height="52" fill="#74c0fc"/><path d="M16 66l28-22 18 14 14-10 28 18z" fill="#69db7c"/><circle cx="84" cy="28" r="7" fill="#ffe066"/><rect x="52" y="72" width="16" height="12" fill="#495057"/><rect x="36" y="84" width="48" height="6" rx="3" fill="#495057"/></svg>`);
addPic('keyboard', 'Keyboard', `<svg viewBox="0 0 120 100"><rect x="6" y="28" width="108" height="46" rx="6" fill="#495057"/>${[0,1,2].map(r => Array.from({length:10 - r}, (_,i) => `<rect x="${12 + r*4 + i*10}" y="${33 + r*10}" width="8" height="8" rx="1.5" fill="#f1f3f5"/>`).join('')).join('')}<rect x="32" y="63" width="56" height="7" rx="2" fill="#f1f3f5"/></svg>`);
addPic('mouse', 'Mouse', `<svg viewBox="0 0 120 100"><path d="M60 12c-18 0-26 14-26 32v18c0 18 10 30 26 30s26-12 26-30V44c0-18-8-32-26-32z" fill="#dee2e6" stroke="#495057" stroke-width="4"/><line x1="60" y1="14" x2="60" y2="44" stroke="#495057" stroke-width="4"/><line x1="35" y1="44" x2="85" y2="44" stroke="#495057" stroke-width="4"/><rect x="56" y="22" width="8" height="14" rx="4" fill="#495057"/></svg>`);
addPic('printer', 'Printer', `<svg viewBox="0 0 120 100"><rect x="38" y="6" width="44" height="26" fill="#fff" stroke="#495057" stroke-width="4"/><rect x="14" y="30" width="92" height="40" rx="8" fill="#868e96"/><rect x="24" y="40" width="20" height="5" rx="2" fill="#495057"/><circle cx="92" cy="42" r="4" fill="#51cf66"/><rect x="34" y="60" width="52" height="34" fill="#fff" stroke="#495057" stroke-width="4"/><line x1="42" y1="72" x2="78" y2="72" stroke="#adb5bd" stroke-width="3"/><line x1="42" y1="82" x2="70" y2="82" stroke="#adb5bd" stroke-width="3"/></svg>`);
addPic('headphones', 'Headphones', `<svg viewBox="0 0 120 100"><path d="M24 66V54a36 36 0 0 1 72 0v12" fill="none" stroke="#343a40" stroke-width="8"/><rect x="14" y="56" width="22" height="34" rx="8" fill="#e64980"/><rect x="84" y="56" width="22" height="34" rx="8" fill="#e64980"/></svg>`);
addPic('microphone', 'Microphone', `<svg viewBox="0 0 120 100"><rect x="46" y="6" width="28" height="48" rx="14" fill="#868e96"/><g stroke="#495057" stroke-width="2.5">${[16,24,32,40].map(y => `<line x1="50" y1="${y}" x2="70" y2="${y}"/>`).join('')}</g><path d="M34 40a26 26 0 0 0 52 0" fill="none" stroke="#343a40" stroke-width="6"/><line x1="60" y1="66" x2="60" y2="86" stroke="#343a40" stroke-width="6"/><rect x="42" y="84" width="36" height="7" rx="3" fill="#343a40"/></svg>`);
addPic('webcam', 'Webcam (camera)', `<svg viewBox="0 0 120 100"><circle cx="60" cy="42" r="30" fill="#343a40"/><circle cx="60" cy="42" r="16" fill="#1c7ed6"/><circle cx="60" cy="42" r="7" fill="#0b2a4a"/><circle cx="54" cy="36" r="3" fill="#fff"/><circle cx="82" cy="22" r="3" fill="#51cf66"/><path d="M46 72h28l8 18H38z" fill="#495057"/></svg>`);
addPic('usb', 'USB flash drive', `<svg viewBox="0 0 120 100"><rect x="18" y="34" width="64" height="32" rx="6" fill="#7048e8"/><rect x="82" y="40" width="24" height="20" fill="#ced4da" stroke="#868e96" stroke-width="2"/><rect x="89" y="45" width="4" height="4" fill="#495057"/><rect x="96" y="45" width="4" height="4" fill="#495057"/><circle cx="30" cy="50" r="4" fill="#fff"/><text x="50" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#fff" ${F}>USB</text></svg>`);
addPic('laptop', 'Laptop', `<svg viewBox="0 0 120 100"><rect x="22" y="14" width="76" height="50" rx="4" fill="#343a40"/><rect x="27" y="19" width="66" height="40" fill="#a5d8ff"/><rect x="33" y="26" width="30" height="4" rx="2" fill="#fff"/><rect x="33" y="34" width="44" height="4" rx="2" fill="#fff"/><path d="M10 68h100l-8 12H18z" fill="#adb5bd"/><rect x="50" y="70" width="20" height="3" rx="1" fill="#868e96"/></svg>`);
addPic('tablet', 'Tablet', `<svg viewBox="0 0 120 100"><rect x="32" y="4" width="56" height="92" rx="9" fill="#343a40"/><rect x="37" y="12" width="46" height="74" rx="2" fill="#ffe8cc"/>${[0,1,2].map(r => [0,1,2].map(c => `<rect x="${42 + c*13}" y="${18 + r*15}" width="10" height="10" rx="3" fill="${['#ff8787','#74c0fc','#8ce99a','#ffd43b','#b197fc','#ffa94d','#63e6be','#f783ac','#a5d8ff'][r*3+c]}"/>`).join('')).join('')}<circle cx="60" cy="91" r="2.5" fill="#868e96"/></svg>`);
addPic('router', 'Wi-Fi router', `<svg viewBox="0 0 120 100"><rect x="16" y="58" width="88" height="26" rx="6" fill="#343a40"/><line x1="34" y1="58" x2="26" y2="22" stroke="#343a40" stroke-width="5" stroke-linecap="round"/><line x1="86" y1="58" x2="94" y2="22" stroke="#343a40" stroke-width="5" stroke-linecap="round"/><g fill="#51cf66"><circle cx="42" cy="71" r="3"/><circle cx="54" cy="71" r="3"/><circle cx="66" cy="71" r="3"/></g><g fill="none" stroke="#1c7ed6" stroke-width="4" stroke-linecap="round"><path d="M50 40a14 14 0 0 1 20 0"/><path d="M43 32a24 24 0 0 1 34 0"/></g></svg>`);
addPic('speakers', 'Speakers', `<svg viewBox="0 0 120 100">${[14,66].map(x => `<rect x="${x}" y="16" width="40" height="72" rx="6" fill="#495057"/><circle cx="${x+20}" cy="36" r="9" fill="#868e96"/><circle cx="${x+20}" cy="64" r="14" fill="#868e96"/><circle cx="${x+20}" cy="64" r="5" fill="#343a40"/>`).join('')}</svg>`);

/* ---------- web browser (labeled A–E) ---------- */
const tag = (x, y, l) => `<circle cx="${x}" cy="${y}" r="11" fill="#e64980"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="14" font-weight="800" fill="#fff" ${F}>${l}</text>`;
addPic('browser', 'Web browser window', `<svg viewBox="0 0 360 230">
  <rect x="4" y="4" width="352" height="222" rx="10" fill="#f1f3f5" stroke="#adb5bd" stroke-width="2"/>
  <path d="M18 40V20a6 6 0 0 1 6-6h104a6 6 0 0 1 6 6v20z" fill="#fff" stroke="#ced4da"/>
  <text x="30" y="32" font-size="12" ${F} fill="#343a40">🚀 NASA Kids</text><text x="118" y="32" font-size="12" ${F} fill="#868e96">✕</text>
  <text x="146" y="32" font-size="16" ${F} fill="#868e96">+</text>
  <rect x="4" y="40" width="352" height="36" fill="#fff"/>
  <path d="M28 58h14M34 52l-6 6 6 6" fill="none" stroke="#495057" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M74 58a7 7 0 1 1-2-5" fill="none" stroke="#495057" stroke-width="2.5" stroke-linecap="round"/><path d="M73 49v6h-6" fill="none" stroke="#495057" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="92" y="46" width="226" height="24" rx="12" fill="#f1f3f5"/>
  <rect x="103" y="56" width="9" height="7" rx="1.5" fill="#495057"/><path d="M105 56v-2.5a2.5 2.5 0 0 1 5 0V56" fill="none" stroke="#495057" stroke-width="1.6"/>
  <text x="118" y="63" font-size="12" ${F} fill="#343a40">https://www.nasa.gov/kids</text>
  <path d="M336 49l3.5 7 7.5 1-5.5 5 1.5 7.5-7-4-7 4 1.5-7.5-5.5-5 7.5-1z" fill="#fab005"/>
  <rect x="4" y="76" width="352" height="150" fill="#fff"/>
  <rect x="24" y="92" width="150" height="14" rx="3" fill="#1c7ed6"/>
  <rect x="24" y="116" width="200" height="8" rx="3" fill="#dee2e6"/><rect x="24" y="130" width="180" height="8" rx="3" fill="#dee2e6"/><rect x="24" y="144" width="190" height="8" rx="3" fill="#dee2e6"/>
  <circle cx="290" cy="140" r="34" fill="#4263eb"/><circle cx="278" cy="130" r="8" fill="#bac8ff"/><circle cx="300" cy="152" r="5" fill="#bac8ff"/>
  ${tag(76,12,'A')}${tag(18,84,'B')}${tag(88,86,'C')}${tag(200,88,'D')}${tag(340,88,'E')}
</svg>`);

/* ---------- scams and messages ---------- */
addPic('popup', 'A pop-up saying you won a free tablet', `<svg viewBox="0 0 360 230">
  <rect x="4" y="4" width="352" height="222" rx="10" fill="#fff3bf" stroke="#f08c00" stroke-width="4"/>
  <rect x="4" y="4" width="352" height="34" rx="10" fill="#f03e3e"/><rect x="4" y="26" width="352" height="12" fill="#f03e3e"/>
  <text x="180" y="27" text-anchor="middle" font-size="16" font-weight="800" fill="#fff" ${F}>🎉 CONGRATULATIONS!!! 🎉</text>
  <text x="180" y="68" text-anchor="middle" font-size="15" font-weight="700" fill="#343a40" ${F}>You are the 1,000,000th visitor!</text>
  <text x="180" y="94" text-anchor="middle" font-size="18" font-weight="800" fill="#c92a2a" ${F}>You WON a FREE tablet!!</text>
  <text x="180" y="120" text-anchor="middle" font-size="13" fill="#495057" ${F}>Just enter your name, address, and phone number.</text>
  <rect x="95" y="136" width="170" height="40" rx="20" fill="#2f9e44"/><text x="180" y="162" text-anchor="middle" font-size="17" font-weight="800" fill="#fff" ${F}>CLAIM NOW ▶</text>
  <text x="180" y="204" text-anchor="middle" font-size="13" font-weight="700" fill="#e03131" ${F}>⏰ Offer ends in 00:59!</text>
</svg>`);
addPic('phish', 'An email asking for your password', `<svg viewBox="0 0 360 230">
  <rect x="4" y="4" width="352" height="222" rx="10" fill="#fff" stroke="#adb5bd" stroke-width="2"/>
  <rect x="4" y="4" width="352" height="30" rx="10" fill="#e7f5ff"/><rect x="4" y="24" width="352" height="10" fill="#e7f5ff"/>
  <text x="16" y="24" font-size="13" font-weight="800" fill="#1971c2" ${F}>✉ Inbox</text>
  <text x="16" y="56" font-size="12" fill="#495057" ${F}><tspan font-weight="800">From:</tspan> GameZone Support &lt;help@gamez0ne-prizes.biz&gt;</text>
  <text x="16" y="76" font-size="12" fill="#495057" ${F}><tspan font-weight="800">Subject:</tspan> <tspan fill="#c92a2a" font-weight="800">URGENT!!! Your account will be DELETED</tspan></text>
  <line x1="16" y1="88" x2="344" y2="88" stroke="#dee2e6"/>
  <text x="16" y="110" font-size="13" fill="#343a40" ${F}>Dear player,</text>
  <text x="16" y="130" font-size="13" fill="#343a40" ${F}>We found a problem with you're account. Type your</text>
  <text x="16" y="148" font-size="13" fill="#343a40" ${F}>password below in 1 hour or lose everything!!</text>
  <rect x="16" y="162" width="200" height="30" rx="6" fill="#fff" stroke="#adb5bd"/><text x="26" y="182" font-size="12" fill="#adb5bd" ${F}>Enter your password…</text>
  <rect x="226" y="162" width="90" height="30" rx="6" fill="#e03131"/><text x="271" y="182" text-anchor="middle" font-size="13" font-weight="800" fill="#fff" ${F}>SEND</text>
</svg>`);
addPic('chat', 'A chat message from a stranger in a game', `<svg viewBox="0 0 360 230">
  <rect x="4" y="4" width="352" height="222" rx="10" fill="#212529"/>
  <text x="16" y="26" font-size="13" font-weight="800" fill="#adb5bd" ${F}>🎮 Game Chat</text>
  <circle cx="30" cy="62" r="14" fill="#7048e8"/><text x="30" y="67" text-anchor="middle" font-size="13" fill="#fff" ${F}>C</text>
  <text x="52" y="54" font-size="12" font-weight="800" fill="#b197fc" ${F}>CoolGamer99</text>
  <rect x="52" y="60" width="290" height="58" rx="10" fill="#343a40"/>
  <text x="64" y="82" font-size="13" fill="#f1f3f5" ${F}>hey!! im 9 too 😀 what school do u go to?</text>
  <text x="64" y="104" font-size="13" fill="#f1f3f5" ${F}>send me a pic of u. dont tell ur parents ok</text>
  <rect x="16" y="150" width="328" height="32" rx="16" fill="#343a40"/><text x="32" y="171" font-size="12" fill="#868e96" ${F}>Type a message…</text>
  <rect x="16" y="192" width="80" height="24" rx="12" fill="#e03131"/><text x="56" y="208" text-anchor="middle" font-size="12" font-weight="800" fill="#fff" ${F}>🚫 Block</text>
  <rect x="104" y="192" width="86" height="24" rx="12" fill="#f08c00"/><text x="147" y="208" text-anchor="middle" font-size="12" font-weight="800" fill="#fff" ${F}>⚑ Report</text>
</svg>`);
addPic('teacher', 'A message from your teacher in the class app', `<svg viewBox="0 0 360 230">
  <rect x="4" y="4" width="352" height="222" rx="10" fill="#fff" stroke="#adb5bd" stroke-width="2"/>
  <rect x="4" y="4" width="352" height="34" rx="10" fill="#2f9e44"/><rect x="4" y="26" width="352" height="12" fill="#2f9e44"/>
  <text x="16" y="27" font-size="14" font-weight="800" fill="#fff" ${F}>🏫 Class App · Room 12</text>
  <circle cx="34" cy="70" r="16" fill="#ffd8a8"/><text x="34" y="76" text-anchor="middle" font-size="14" ${F}>👩‍🏫</text>
  <text x="58" y="66" font-size="13" font-weight="800" fill="#343a40" ${F}>Your teacher</text>
  <text x="58" y="84" font-size="11" fill="#868e96" ${F}>Posted to the whole class</text>
  <text x="20" y="120" font-size="14" fill="#343a40" ${F}>Reminder: library books are due Friday.</text>
  <text x="20" y="142" font-size="14" fill="#343a40" ${F}>Don't forget your spelling list! 📚</text>
</svg>`);

/* ---------- keyboard with one key lit (its label hidden so you have to know it by its spot) ---------- */
function kbPic(lit, showLit){
  const rows = [
    [['Esc',1.2],...'1234567890'.split('').map(k=>[k,1]),['Backspace',2]],
    [['Tab',1.6],...'QWERTYUIOP'.split('').map(k=>[k,1]),['\\',1.6]],
    [['Caps Lock',1.9],...'ASDFGHJKL'.split('').map(k=>[k,1]),['Enter',2.3]],
    [['Shift',2.4],...'ZXCVBNM'.split('').map(k=>[k,1]),['Shift ',2.4],['↑',1]],
    [['Ctrl',1.5],['Alt',1.3],['Space',6.6],['Alt ',1.3],['←',1],['↓',1],['→',1]]
  ];
  const U = 24, G = 3, out = [];
  rows.forEach((row, r) => {
    let x = 8;
    row.forEach(([k, w]) => {
      const W = w*U + (w-1)*G, on = lit.includes(k.trim()) && (k.trim() !== 'Shift' || lit.includes(k)), y = 8 + r*(U+G);
      out.push(`<rect x="${x}" y="${y}" width="${W}" height="${U}" rx="4" fill="${on ? '#ffd43b' : '#fff'}" stroke="${on ? '#f08c00' : '#adb5bd'}" stroke-width="${on ? 2.5 : 1}"/>`);
      if (!on || showLit) out.push(`<text x="${x + W/2}" y="${y + 16}" text-anchor="middle" font-size="${k.trim().length > 3 ? 8.5 : 11}" font-weight="700" fill="#495057" ${F}>${k.trim()}</text>`);
      if (on && !showLit) out.push(`<text x="${x + W/2}" y="${y + 17}" text-anchor="middle" font-size="14" font-weight="800" fill="#e8590c" ${F}>?</text>`);
      if ((k === 'F' || k === 'J')) out.push(`<rect x="${x + W/2 - 4}" y="${y + 19}" width="8" height="2" rx="1" fill="#495057"/>`);
      x += W + G;
    });
  });
  return `<svg viewBox="0 0 382 145"><rect x="2" y="2" width="378" height="141" rx="8" fill="#e9ecef"/>${out.join('')}</svg>`;
}
addPic('kb_backspace', 'Keyboard with Backspace lit', kbPic(['Backspace']));
addPic('kb_enter', 'Keyboard with Enter lit', kbPic(['Enter']));
addPic('kb_shift', 'Keyboard with Shift lit', kbPic(['Shift']));
addPic('kb_space', 'Keyboard with the space bar lit', kbPic(['Space']));
addPic('kb_tab', 'Keyboard with Tab lit', kbPic(['Tab']));
addPic('kb_caps', 'Keyboard with Caps Lock lit', kbPic(['Caps Lock']));
addPic('kb_esc', 'Keyboard with Esc lit', kbPic(['Esc']));
addPic('kb_ctrl', 'Keyboard with Ctrl lit', kbPic(['Ctrl']));
addPic('kb_arrows', 'Keyboard with the arrow keys lit', kbPic(['↑','←','↓','→']));
addPic('kb_fj', 'Keyboard with F and J lit', kbPic(['F','J'], true));

/* ---------- file explorer ---------- */
const fileRow = (y, icon, name, kind) => `<text x="142" y="${y}" font-size="16" ${F}>${icon}</text><text x="166" y="${y-1}" font-size="12" fill="#343a40" ${F}>${name}</text><text x="300" y="${y-1}" font-size="10" fill="#868e96" ${F}>${kind}</text>`;
addPic('files', 'A file explorer window showing the School folder', `<svg viewBox="0 0 360 230">
  <rect x="4" y="4" width="352" height="222" rx="10" fill="#fff" stroke="#adb5bd" stroke-width="2"/>
  <rect x="4" y="4" width="352" height="30" rx="10" fill="#f1f3f5"/><rect x="4" y="24" width="352" height="10" fill="#f1f3f5"/>
  <text x="16" y="24" font-size="12" font-weight="800" fill="#343a40" ${F}>📁 Documents  ›  School</text>
  <rect x="4" y="34" width="122" height="192" fill="#f8f9fa"/>
  <text x="14" y="58" font-size="11" fill="#495057" ${F}>💻 This PC</text>
  <text x="24" y="80" font-size="11" fill="#495057" ${F}>📁 Documents</text>
  <rect x="30" y="88" width="90" height="20" rx="4" fill="#d0ebff"/><text x="36" y="102" font-size="11" font-weight="800" fill="#1971c2" ${F}>📂 School</text>
  <text x="24" y="126" font-size="11" fill="#495057" ${F}>📁 Downloads</text>
  <text x="24" y="148" font-size="11" fill="#495057" ${F}>📁 Music</text>
  ${fileRow(62,'📁','Pictures','Folder')}
  ${fileRow(92,'📄','Science Report.docx','Document')}
  ${fileRow(122,'🖼️','volcano.jpg','Picture')}
  ${fileRow(152,'🎵','class song.mp3','Music')}
  ${fileRow(182,'📕','Math Homework.pdf','PDF')}
</svg>`);

/* ---------- robot coding grid ---------- */
// x goes right, y goes down, starting at 0. dir: 'E','W','N','S'. marks: {A:[x,y],...}
function gridPic({ n = 4, robot, star, rocks = [], marks = {} }){
  const C = 46, P = 8, S = n*C + P*2, o = [];
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) o.push(`<rect x="${P + x*C}" y="${P + y*C}" width="${C}" height="${C}" fill="${(x+y)%2 ? '#e6fcf5' : '#fff'}" stroke="#96f2d7"/>`);
  const cx = x => P + x*C + C/2, cy = y => P + y*C + C/2;
  rocks.forEach(([x,y]) => o.push(`<path d="M${cx(x)-16} ${cy(y)+14}l6-20 10-6 12 8 4 18z" fill="#868e96" stroke="#495057" stroke-width="2"/>`));
  Object.entries(marks).forEach(([l,[x,y]]) => o.push(`<circle cx="${cx(x)}" cy="${cy(y)}" r="13" fill="#e64980"/><text x="${cx(x)}" y="${cy(y)+5}" text-anchor="middle" font-size="14" font-weight="800" fill="#fff" ${F}>${l}</text>`));
  if (star){ const [x,y] = star, X = cx(x), Y = cy(y); o.push(`<path d="M${X} ${Y-17}l5 10 11 2-8 8 2 11-10-5-10 5 2-11-8-8 11-2z" fill="#fab005" stroke="#f08c00" stroke-width="1.5"/>`); }
  if (robot){
    const [x,y,d] = robot, X = cx(x), Y = cy(y), rot = { E:0, S:90, W:180, N:270 }[d];
    o.push(`<g transform="translate(${X} ${Y}) rotate(${rot})"><rect x="-15" y="-14" width="26" height="28" rx="7" fill="#4263eb"/><circle cx="2" cy="-5" r="3.5" fill="#fff"/><circle cx="2" cy="5" r="3.5" fill="#fff"/><path d="M13 -9l9 9-9 9z" fill="#4263eb"/></g>`);
  }
  return `<svg viewBox="0 0 ${S} ${S}" style="max-width:240px">${o.join('')}</svg>`;
}
addPic('maze1', 'Robot grid puzzle 1', gridPic({ robot:[0,3,'E'], star:[3,3] }));
addPic('maze2', 'Robot grid puzzle 2', gridPic({ robot:[0,3,'E'], star:[2,1] }));
addPic('maze3', 'Robot grid puzzle 3', gridPic({ robot:[0,0,'E'], star:[3,0], rocks:[[2,0]] }));
addPic('maze4', 'Robot grid puzzle 4', gridPic({ robot:[0,3,'E'], star:[3,0] }));
addPic('maze5', 'Robot grid puzzle 5', gridPic({ robot:[0,0,'E'], marks:{ A:[2,0], B:[1,2], C:[2,2], D:[0,2] } }));
addPic('maze6', 'Robot grid puzzle 6', gridPic({ robot:[1,3,'N'], marks:{ A:[3,1], B:[1,1], C:[3,3], D:[0,1] } }));
addPic('maze7', 'Robot grid puzzle 7', gridPic({ robot:[0,2,'E'], star:[3,2] }));
addPic('maze8', 'Robot grid puzzle 8', gridPic({ robot:[3,3,'N'], star:[0,0], rocks:[[3,1]] }));

// Simulates robot code so puzzle answers can be checked: returns final [x,y] or null if it leaves the grid or hits a rock.
window.runRobot = function(start, steps, n = 4, rocks = []){
  let [x, y, d] = start; const dirs = ['N','E','S','W'], mv = { N:[0,-1], E:[1,0], S:[0,1], W:[-1,0] };
  for (const s of steps){
    if (s === 'L') d = dirs[(dirs.indexOf(d)+3)%4];
    else if (s === 'R') d = dirs[(dirs.indexOf(d)+1)%4];
    else { x += mv[d][0]; y += mv[d][1]; if (x<0||y<0||x>=n||y>=n||rocks.some(r => r[0]===x && r[1]===y)) return null; }
  }
  return [x, y];
};
