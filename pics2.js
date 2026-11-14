// More pictures for 4th and 5th grade Computer Skills. Uses addPic, F, tag and gridPic from pics.js.

/* ---------- inside the computer (4th) ---------- */
addPic('cpu', 'CPU (processor) chip', `<svg viewBox="0 0 120 100"><g fill="#adb5bd">${Array.from({length:7},(_,i)=>`<rect x="${31+i*9}" y="8" width="4" height="10"/><rect x="${31+i*9}" y="82" width="4" height="10"/><rect x="18" y="${21+i*9}" width="10" height="4"/><rect x="92" y="${21+i*9}" width="10" height="4"/>`).join('')}</g><rect x="28" y="18" width="64" height="64" rx="5" fill="#343a40"/><rect x="40" y="30" width="40" height="40" rx="3" fill="#868e96"/><text x="60" y="56" text-anchor="middle" font-size="14" font-weight="800" fill="#fff" ${F}>CPU</text></svg>`);
addPic('ram', 'RAM memory stick', `<svg viewBox="0 0 120 100"><rect x="6" y="30" width="108" height="34" rx="2" fill="#2b8a3e"/>${[0,1,2,3,4,5,6,7].map(i=>`<rect x="${11+i*13}" y="35" width="10" height="16" rx="1" fill="#212529"/>`).join('')}<g fill="#fab005">${Array.from({length:24},(_,i)=>`<rect x="${9+i*4.3}" y="56" width="2.6" height="8"/>`).join('')}</g><rect x="57" y="56" width="5" height="9" fill="#fff"/></svg>`);
addPic('ssd', 'SSD storage drive', `<svg viewBox="0 0 120 100"><rect x="18" y="20" width="84" height="60" rx="6" fill="#495057"/><rect x="26" y="28" width="68" height="44" rx="3" fill="#212529"/><text x="60" y="50" text-anchor="middle" font-size="15" font-weight="800" fill="#fff" ${F}>SSD</text><text x="60" y="64" text-anchor="middle" font-size="9" fill="#adb5bd" ${F}>1 TB</text></svg>`);
addPic('hdd', 'Hard disk drive (opened)', `<svg viewBox="0 0 120 100"><rect x="14" y="10" width="92" height="80" rx="5" fill="#ced4da" stroke="#868e96" stroke-width="2"/><circle cx="52" cy="48" r="32" fill="#e9ecef" stroke="#adb5bd" stroke-width="2"/><circle cx="52" cy="48" r="26" fill="none" stroke="#dee2e6"/><circle cx="52" cy="48" r="7" fill="#868e96"/><circle cx="92" cy="74" r="6" fill="#495057"/><path d="M92 74L60 40" stroke="#495057" stroke-width="5" stroke-linecap="round"/></svg>`);
addPic('fan', 'Cooling fan', `<svg viewBox="0 0 120 100"><rect x="18" y="8" width="84" height="84" rx="10" fill="#343a40"/><circle cx="60" cy="50" r="36" fill="#212529"/><g fill="#74c0fc">${[0,72,144,216,288].map(a=>`<path d="M60 50c4-16 16-26 26-22c-4 10-14 18-26 22z" transform="rotate(${a} 60 50)"/>`).join('')}</g><circle cx="60" cy="50" r="9" fill="#495057"/></svg>`);
addPic('motherboard', 'Motherboard', `<svg viewBox="0 0 120 100"><rect x="8" y="8" width="104" height="84" rx="4" fill="#2b8a3e"/><g stroke="#8ce99a" stroke-width="1" fill="none"><path d="M20 80h30v-20M60 85v-25h20M90 20v30h10"/></g><rect x="22" y="20" width="26" height="26" rx="2" fill="#343a40"/><rect x="28" y="26" width="14" height="14" fill="#868e96"/>${[0,1,2,3].map(i=>`<rect x="${62+i*9}" y="16" width="5" height="40" rx="1" fill="#212529"/>`).join('')}<rect x="20" y="64" width="50" height="7" rx="1" fill="#212529"/><rect x="20" y="76" width="50" height="7" rx="1" fill="#212529"/><circle cx="98" cy="78" r="6" fill="#fab005"/></svg>`);
addPic('psu', 'Power supply', `<svg viewBox="0 0 120 100"><rect x="14" y="16" width="92" height="68" rx="5" fill="#495057"/><circle cx="50" cy="50" r="24" fill="#343a40"/><g stroke="#868e96" stroke-width="2">${[-16,-8,0,8,16].map(d=>`<line x1="${30}" y1="${50+d}" x2="${70}" y2="${50+d}"/>`).join('')}</g><rect x="82" y="34" width="16" height="22" rx="3" fill="#212529"/><path d="M90 60v16" stroke="#fab005" stroke-width="3"/><path d="M84 76h12" stroke="#fab005" stroke-width="3"/></svg>`);

/* ---------- ports (4th) ---------- */
const portPanel = inner => `<svg viewBox="0 0 120 100"><rect x="6" y="18" width="108" height="64" rx="10" fill="#ced4da"/>${inner}</svg>`;
addPic('port_usba', 'USB-A port', portPanel(`<rect x="34" y="38" width="52" height="24" rx="2" fill="#212529"/><rect x="38" y="42" width="44" height="8" fill="#e9ecef"/>`));
addPic('port_usbc', 'USB-C port', portPanel(`<rect x="38" y="40" width="44" height="20" rx="10" fill="#212529"/><rect x="46" y="47" width="28" height="6" rx="3" fill="#868e96"/>`));
addPic('port_hdmi', 'HDMI port', portPanel(`<path d="M28 38h64v14l-8 10H36l-8-10z" fill="#212529"/><rect x="36" y="43" width="48" height="6" fill="#adb5bd"/>`));
addPic('port_eth', 'Ethernet (network) port', portPanel(`<path d="M40 32h40v32H68v6H52v-6H40z" fill="#212529"/><g fill="#fab005">${Array.from({length:8},(_,i)=>`<rect x="${44+i*4.2}" y="36" width="2.4" height="8"/>`).join('')}</g><circle cx="30" cy="40" r="3" fill="#51cf66"/>`));
addPic('port_audio', 'Headphone jack', portPanel(`<circle cx="60" cy="50" r="12" fill="#212529"/><circle cx="60" cy="50" r="5" fill="#495057"/><text x="88" y="56" font-size="18" ${F}>🎧</text>`));
addPic('cable_hdmi', 'HDMI cable', `<svg viewBox="0 0 120 100"><path d="M10 70c30 0 30-40 60-40" fill="none" stroke="#212529" stroke-width="8"/><rect x="66" y="22" width="22" height="18" rx="2" fill="#343a40"/><path d="M88 24h22v10l-5 6H93l-5-6z" fill="#adb5bd"/></svg>`);
addPic('cable_usbc', 'USB-C cable', `<svg viewBox="0 0 120 100"><path d="M10 70c30 0 30-40 60-40" fill="none" stroke="#f1f3f5" stroke-width="8"/><path d="M10 70c30 0 30-40 60-40" fill="none" stroke="#ced4da" stroke-width="2"/><rect x="66" y="22" width="24" height="18" rx="5" fill="#f1f3f5" stroke="#adb5bd"/><rect x="90" y="25" width="18" height="12" rx="6" fill="#adb5bd"/></svg>`);

/* ---------- real vs fake websites (4th) ---------- */
function sitePic({ url, secure, title, lines, flashy }){
  const lock = secure
    ? `<rect x="22" y="24" width="9" height="7" rx="1.5" fill="#2f9e44"/><path d="M24 24v-2.5a2.5 2.5 0 0 1 5 0V24" fill="none" stroke="#2f9e44" stroke-width="1.6"/>`
    : `<text x="18" y="31" font-size="9" font-weight="800" fill="#e03131" ${F}>⚠ Not secure</text>`;
  return `<svg viewBox="0 0 360 230"><rect x="4" y="4" width="352" height="222" rx="10" fill="#fff" stroke="#adb5bd" stroke-width="2"/>
    <rect x="10" y="12" width="340" height="26" rx="13" fill="#f1f3f5"/>${lock}
    <text x="${secure ? 38 : 84}" y="30" font-size="12" fill="#343a40" ${F}>${url}</text>
    <rect x="4" y="46" width="352" height="36" fill="${flashy ? '#e03131' : '#1864ab'}"/>
    <text x="180" y="70" text-anchor="middle" font-size="16" font-weight="800" fill="#fff" ${F}>${title}</text>
    ${lines.map((l,i) => `<text x="180" y="${108 + i*20}" text-anchor="middle" font-size="12" ${l.startsWith('!') ? 'font-weight="800" fill="#c92a2a"' : 'fill="#495057"'} ${F}>${l.replace(/^!/,'')}</text>`).join('')}
    <rect x="110" y="172" width="140" height="24" rx="4" fill="#fff" stroke="#adb5bd"/><text x="120" y="188" font-size="10" fill="#adb5bd" ${F}>Username</text>
    <rect x="110" y="200" width="140" height="18" rx="4" fill="${flashy ? '#e03131' : '#1864ab'}"/><text x="180" y="213" text-anchor="middle" font-size="10" font-weight="800" fill="#fff" ${F}>Sign in</text></svg>`;
}
addPic('site_real', 'A bank website with a secure address', sitePic({ url:'https://www.brightbank.com/sign-in', secure:true, title:'BrightBank', lines:['Welcome back! Sign in to your account.'] }));
addPic('site_fake', 'A fake bank website with a strange address', sitePic({ url:'http://brightbank-login-secure.xyz', secure:false, title:'BrightBank – VERIFY NOW', lines:['!Your account is LOCKED!!','Enter your password and card number to unlock.'], flashy:true }));
addPic('site_typo', 'A website with a misspelled address', sitePic({ url:'https://www.brigthbank.com/sign-in', secure:true, title:'BrightBank', lines:['Welcome back! Sign in to your account.'] }));

addPic('searchres', 'Search results for "how far away is the moon"', `<svg viewBox="0 0 360 250"><rect x="4" y="4" width="352" height="242" rx="10" fill="#fff" stroke="#adb5bd" stroke-width="2"/>
  <rect x="16" y="14" width="328" height="28" rx="14" fill="#f1f3f5"/><text x="30" y="33" font-size="12" fill="#343a40" ${F}>🔍 how far away is the moon</text>
  ${[
    ['A','Sponsored · shopstarz.biz','BUY Moon Telescopes – 70% OFF TODAY!','Free shipping! Limited time only!'],
    ['B','science.nasa.gov','How Far Away Is the Moon? – NASA Science','The Moon is about 238,900 miles from Earth on average…'],
    ['C','moonfanz.blogspot.com','moon facts lol','i think its like a million miles away haha'],
    ['D','kids.britannica.com','The Moon – Britannica Kids','Learn about the Moon’s distance, size, and phases.']
  ].map(([l,site,t,d],i) => { const y = 58 + i*47; return `${tag(24, y+14, l)}<text x="42" y="${y+6}" font-size="9.5" fill="${l==='A'?'#e8590c':'#2b8a3e'}" font-weight="${l==='A'?800:400}" ${F}>${site}</text><text x="42" y="${y+21}" font-size="12.5" font-weight="700" fill="#1864ab" ${F}>${t}</text><text x="42" y="${y+36}" font-size="10" fill="#495057" ${F}>${d}</text>`; }).join('')}
</svg>`);

/* ---------- 5x5 robot grids (4th and 5th) ---------- */
addPic('g5a', 'Robot grid: square path', gridPic({ n:5, robot:[0,4,'E'], marks:{ B:[2,2], C:[2,4], D:[0,2] } }));
addPic('g5b', 'Robot grid: tall staircase', gridPic({ n:5, robot:[0,4,'E'], star:[4,0] }));
addPic('g5c', 'Robot grid: rock in the middle', gridPic({ n:5, robot:[0,2,'E'], star:[4,2], rocks:[[2,2]] }));
addPic('g5d', 'Robot grid: one short of the star', gridPic({ n:5, robot:[0,4,'E'], star:[4,4] }));
addPic('g5e', 'Robot grid: turn around', gridPic({ n:5, robot:[2,2,'N'], marks:{ A:[2,1], B:[2,0], C:[2,3], D:[3,1] } }));
addPic('g5f', 'Robot grid: rock ahead (if/else)', gridPic({ n:5, robot:[0,0,'E'], rocks:[[3,0]], marks:{ A:[2,1], B:[2,0], C:[3,1], D:[1,1] } }));
addPic('g5g', 'Robot grid: zigzag', gridPic({ n:5, robot:[0,0,'S'], star:[4,4] }));
addPic('g5h', 'Robot grid: around the wall', gridPic({ n:5, robot:[0,4,'N'], star:[4,4], rocks:[[2,4],[2,3],[2,2]] }));

/* ---------- code blocks (5th) ---------- */
// blocks: [type, text] or ['repeat', text, [inner blocks]] / ['ifelse', cond, [then], [else]]
const BC = { event:'#ffab19', motion:'#4c97ff', control:'#ffbf00', var:'#ff8c1a', looks:'#9966ff', op:'#59c059' };
function blocksPic(prog){
  const out = []; let y = 10; const W = 250;
  function draw(list, x){
    for (const b of list){
      const [type] = b;
      if (type === 'repeat' || type === 'if'){
        const top = y; out.push(`<rect x="${x}" y="${y}" width="${W - x + 10}" height="26" rx="5" fill="${BC.control}"/><text x="${x+10}" y="${y+17}" font-size="12" font-weight="700" fill="#fff" ${F}>${b[1]}</text>`); y += 26;
        draw(b[2], x + 16);
        out.push(`<rect x="${x}" y="${top+20}" width="14" height="${y - top - 20 + 4}" fill="${BC.control}"/><rect x="${x}" y="${y}" width="${W - x + 10}" height="12" rx="5" fill="${BC.control}"/>`); y += 16;
      } else if (type === 'ifelse'){
        const top = y; out.push(`<rect x="${x}" y="${y}" width="${W - x + 10}" height="26" rx="5" fill="${BC.control}"/><text x="${x+10}" y="${y+17}" font-size="12" font-weight="700" fill="#fff" ${F}>${b[1]}</text>`); y += 26;
        draw(b[2], x + 16);
        const ey = y;
        out.push(`<rect x="${x}" y="${y}" width="${W - x + 10}" height="22" rx="4" fill="${BC.control}"/>`); y += 22;
        draw(b[3], x + 16);
        out.push(`<rect x="${x}" y="${top+20}" width="14" height="${y - top - 20 + 4}" fill="${BC.control}"/><rect x="${x}" y="${y}" width="${W - x + 10}" height="12" rx="5" fill="${BC.control}"/>`);
        out.push(`<text x="${x+10}" y="${ey+15}" font-size="12" font-weight="700" fill="#fff" ${F}>else</text>`); y += 16;
      } else {
        const h = type === 'event' ? 30 : 26;
        out.push(`<rect x="${x}" y="${y}" width="${W - x + 10}" height="${h}" rx="${type==='event'?12:5}" fill="${BC[type]}"/><text x="${x+10}" y="${y + (type==='event'?20:17)}" font-size="12" font-weight="700" fill="#fff" ${F}>${b[1]}</text>`); y += h + 4;
      }
    }
  }
  draw(prog, 10);
  return `<svg viewBox="0 0 280 ${y + 8}" style="max-width:320px">${out.join('')}</svg>`;
}
addPic('code_score', 'Code blocks: add to score in a loop', blocksPic([['event','when green flag clicked'],['var','set score to 0'],['repeat','repeat 4',[['var','change score by 5']]],['looks','say (score)']]));
addPic('code_ifelse', 'Code blocks: if / else', blocksPic([['event','when green flag clicked'],['var','set x to 10'],['ifelse','if x > 5 then',[['looks','say "big"']],[['looks','say "small"']]]]));
addPic('code_square', 'Code blocks: move and turn in a loop', blocksPic([['event','when green flag clicked'],['motion','pen down'],['repeat','repeat 4',[['motion','move 50 steps'],['motion','turn right 90 degrees']]]]));
addPic('code_double', 'Code blocks: doubling a number', blocksPic([['event','when green flag clicked'],['var','set count to 1'],['repeat','repeat 3',[['var','set count to (count × 2)']]],['looks','say (count)']]));
addPic('code_event', 'Code blocks: when space key pressed', blocksPic([['event','when space key pressed'],['motion','change y by 20'],['motion','change y by -20']]));
addPic('code_nested', 'Code blocks: a loop inside a loop', blocksPic([['event','when green flag clicked'],['repeat','repeat 2',[['repeat','repeat 3',[['looks','say "hi" for 1 second']]]]]]));
addPic('code_join', 'Code blocks: joining words', blocksPic([['event','when green flag clicked'],['var','set name to "Sam"'],['looks','say (join "Hi, " name)']]));
addPic('code_bug', 'Code blocks: counting to 10', blocksPic([['event','when green flag clicked'],['var','set n to 1'],['repeat','repeat 10',[['looks','say (n) for 1 second']]]]));

/* ---------- binary bulbs and pixels (5th) ---------- */
function bitsPic(bits){
  const vals = [128,64,32,16,8,4,2,1], o = [];
  vals.forEach((v,i) => { const on = bits[i] === '1', x = 12 + i*42;
    o.push(`<circle cx="${x+18}" cy="30" r="15" fill="${on ? '#ffd43b' : '#495057'}" stroke="${on ? '#f08c00' : '#343a40'}" stroke-width="3"/>${on ? `<circle cx="${x+18}" cy="30" r="21" fill="none" stroke="#ffe066" stroke-width="2" opacity=".7"/>` : ''}<rect x="${x+12}" y="45" width="12" height="8" rx="2" fill="#868e96"/>`);
    o.push(`<text x="${x+18}" y="75" text-anchor="middle" font-size="15" font-weight="800" fill="${on ? '#343a40' : '#adb5bd'}" ${F}>${bits[i]}</text><text x="${x+18}" y="95" text-anchor="middle" font-size="11" fill="#868e96" ${F}>${v}</text>`);
  });
  return `<svg viewBox="0 0 354 104"><rect x="2" y="2" width="350" height="100" rx="10" fill="#f8f9fa"/>${o.join('')}</svg>`;
}
addPic('bits5', 'Binary bulbs showing 00000101', bitsPic('00000101'));
addPic('bits10', 'Binary bulbs showing 00001010', bitsPic('00001010'));
addPic('bits19', 'Binary bulbs showing 00010011', bitsPic('00010011'));
addPic('bits255', 'Binary bulbs showing 11111111', bitsPic('11111111'));
addPic('bits0', 'Binary bulbs showing 00000000', bitsPic('00000000'));
const HEART = ['01100110','11111111','11111111','11111111','01111110','00111100','00011000','00000000'];
addPic('pixels', 'A heart made of 8 by 8 pixels', `<svg viewBox="0 0 170 170" style="max-width:200px">${HEART.map((row,y) => [...row].map((c,x) => `<rect x="${5+x*20}" y="${5+y*20}" width="20" height="20" fill="${c==='1' ? '#e03131' : '#fff'}" stroke="#dee2e6"/>`).join('')).join('')}</svg>`);

/* ---------- how the internet reaches you (5th) ---------- */
addPic('network', 'Home network diagram', `<svg viewBox="0 0 360 200">
  <text x="30" y="40" font-size="26" ${F}>💻</text><text x="30" y="96" font-size="26" ${F}>📱</text><text x="30" y="152" font-size="26" ${F}>🎮</text>
  <g stroke="#74c0fc" stroke-width="3" stroke-dasharray="5 4"><line x1="66" y1="32" x2="118" y2="92"/><line x1="66" y1="88" x2="118" y2="96"/><line x1="66" y1="144" x2="118" y2="100"/></g>
  <rect x="118" y="80" width="54" height="32" rx="6" fill="#343a40"/><line x1="128" y1="80" x2="124" y2="62" stroke="#343a40" stroke-width="4"/><line x1="162" y1="80" x2="166" y2="62" stroke="#343a40" stroke-width="4"/><circle cx="135" cy="96" r="2.5" fill="#51cf66"/><circle cx="145" cy="96" r="2.5" fill="#51cf66"/>
  <line x1="172" y1="96" x2="200" y2="96" stroke="#495057" stroke-width="4"/>
  <rect x="200" y="82" width="40" height="28" rx="4" fill="#868e96"/><circle cx="210" cy="96" r="2.5" fill="#51cf66"/><circle cx="220" cy="96" r="2.5" fill="#fab005"/>
  <line x1="240" y1="96" x2="262" y2="96" stroke="#495057" stroke-width="4"/>
  <path d="M268 112h70a18 18 0 0 0 0-36a24 24 0 0 0-46-6a18 18 0 0 0-24 42z" fill="#d0ebff" stroke="#74c0fc" stroke-width="2"/><text x="303" y="100" text-anchor="middle" font-size="11" font-weight="800" fill="#1864ab" ${F}>Internet</text>
  <line x1="303" y1="112" x2="303" y2="140" stroke="#495057" stroke-width="3"/>
  <rect x="285" y="140" width="36" height="46" rx="3" fill="#495057"/><g fill="#868e96"><rect x="290" y="146" width="26" height="6"/><rect x="290" y="157" width="26" height="6"/><rect x="290" y="168" width="26" height="6"/></g>
  ${tag(145,128,'A')}${tag(220,128,'B')}${tag(303,58,'C')}${tag(337,163,'D')}
</svg>`);

/* ---------- privacy and passwords (5th) ---------- */
const toggle = (y, label, val, on) => `<text x="20" y="${y}" font-size="12.5" fill="#343a40" ${F}>${label}</text>${val ? `<rect x="230" y="${y-14}" width="112" height="20" rx="4" fill="#f1f3f5" stroke="#ced4da"/><text x="238" y="${y}" font-size="11.5" fill="#343a40" ${F}>${val} ▾</text>` : `<rect x="298" y="${y-14}" width="40" height="20" rx="10" fill="${on ? '#2f9e44' : '#ced4da'}"/><circle cx="${on ? 328 : 308}" cy="${y-4}" r="8" fill="#fff"/>`}`;
addPic('privacy', 'Account privacy settings', `<svg viewBox="0 0 360 220"><rect x="4" y="4" width="352" height="212" rx="10" fill="#fff" stroke="#adb5bd" stroke-width="2"/>
  <rect x="4" y="4" width="352" height="34" rx="10" fill="#7048e8"/><rect x="4" y="26" width="352" height="12" fill="#7048e8"/><text x="16" y="27" font-size="14" font-weight="800" fill="#fff" ${F}>⚙ Privacy Settings</text>
  ${tag(16,70,'1')}<g transform="translate(14 0)">${toggle(74,'Who can see my posts','Everyone')}</g>
  ${tag(16,110,'2')}<g transform="translate(14 0)">${toggle(114,'Show my location on posts','',true)}</g>
  ${tag(16,150,'3')}<g transform="translate(14 0)">${toggle(154,'Let strangers message me','',true)}</g>
  ${tag(16,190,'4')}<g transform="translate(14 0)">${toggle(194,'Two-step sign-in','',false)}</g>
</svg>`);
const meter = (y, pw, n, word, color) => `<text x="20" y="${y}" font-size="14" font-weight="700" fill="#343a40" font-family="ui-monospace,Menlo,Consolas,monospace">${pw}</text>${[0,1,2,3].map(i => `<rect x="${20+i*48}" y="${y+8}" width="44" height="7" rx="3" fill="${i < n ? color : '#dee2e6'}"/>`).join('')}<text x="220" y="${y+15}" font-size="12" font-weight="800" fill="${color}" ${F}>${word}</text>`;
addPic('passwords', 'Three passwords with strength meters', `<svg viewBox="0 0 320 200"><rect x="4" y="4" width="312" height="192" rx="10" fill="#fff" stroke="#adb5bd" stroke-width="2"/>
  ${tag(300,30,'A')}${meter(34,'sam2016',1,'Weak','#e03131')}
  ${tag(300,90,'B')}${meter(94,'Password123!',2,'Fair','#f08c00')}
  ${tag(300,150,'C')}${meter(154,'Pickle-Rocket-Lamp-82',4,'Strong','#2f9e44')}
</svg>`);
addPic('twofa', 'A phone showing a sign-in code', `<svg viewBox="0 0 200 230" style="max-width:220px"><rect x="40" y="6" width="120" height="218" rx="16" fill="#212529"/><rect x="48" y="22" width="104" height="186" rx="6" fill="#f8f9fa"/>
  <text x="100" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="#343a40" ${F}>🔐 Sign-in code</text>
  <text x="100" y="92" text-anchor="middle" font-size="22" font-weight="800" fill="#1864ab" font-family="ui-monospace,Menlo,Consolas,monospace">482 913</text>
  <text x="100" y="122" text-anchor="middle" font-size="9" fill="#495057" ${F}>Use this code to finish</text><text x="100" y="134" text-anchor="middle" font-size="9" fill="#495057" ${F}>signing in. It expires</text><text x="100" y="146" text-anchor="middle" font-size="9" fill="#495057" ${F}>in 5 minutes.</text>
  <text x="100" y="172" text-anchor="middle" font-size="9" font-weight="800" fill="#c92a2a" ${F}>Never share this code</text><text x="100" y="184" text-anchor="middle" font-size="9" font-weight="800" fill="#c92a2a" ${F}>with anyone.</text>
</svg>`);
