// Computer Skills, Kindergarten–5th grade. Each test opens with a short lesson (a passage) the questions use.
// Format: [question, [options], correctIndex, why, lessonKey, 'quiet' = don't read options aloud]
const CS = { id:'computers', name:'Computer Skills', icon:'💻', color:'#0f8a8a', lessons:true };

addSubject({ ...CS, grade:'K',
  passages: {
    parts: `<h3>Lesson: Parts of a Computer</h3><p>🖥️ The <b>screen</b> (or monitor) shows pictures and words.</p><p>⌨️ The <b>keyboard</b> has keys with letters and numbers. You press keys to type.</p><p>🖱️ The <b>mouse</b> moves the arrow on the screen. You click the mouse button to pick things.</p><p>🎧 <b>Headphones</b> let you hear sounds without bothering others.</p><p>A <b>tablet</b> is a computer you touch with your finger.</p>`,
    safe: `<h3>Lesson: Safe and Kind on the Computer</h3><p>Always ask a grown-up before you go on the computer or open something new.</p><p>If you see something scary or that makes you feel yucky, <b>tell a grown-up right away</b>. You won't be in trouble.</p><p>Never tell people online your name, where you live, or your school.</p><p>Be kind with your words, just like at school.</p><p>Take breaks to move your body and rest your eyes.</p>`
  },
  tests: [
    { id:'parts', name:'Parts of a Computer', blurb:'Screen, keyboard, mouse, and more', qs:[
      ["Which part shows pictures and words?",["the screen","the mouse","the headphones"],0,"The screen shows what the computer is doing.","parts"],
      ["What do you press to type letters?",["the keyboard","the screen","the headphones"],0,"The keyboard has letter keys.","parts"],
      ["What moves the arrow on the screen?",["the mouse","the keyboard","the speaker"],0,"Moving the mouse moves the arrow.","parts"],
      ["What do you wear to hear sounds quietly?",["headphones","a mouse","a keyboard"],0,"Headphones go on your ears.","parts"],
      ["Which computer do you touch with your finger?",["a tablet","a keyboard","a printer"],0,"Tablets have touch screens.","parts"],
      ["Which one is a mouse?",["🖱️","⌨️","🖥️"],0,"The mouse fits in your hand.","parts"],
      ["Which one is a keyboard?",["🖱️","⌨️","🎧"],1,"The keyboard has lots of keys.","parts"],
      ["To pick something on the screen, you…",["click the mouse","shake the screen","yell at it"],0,"Clicking chooses things.","parts"]
    ]},
    { id:'safe', name:'Safe & Kind Online', blurb:'Staying safe and being kind', qs:[
      ["What should you do before using the computer?",["Ask a grown-up.","Hide.","Turn it upside down."],0,"Grown-ups help keep you safe.","safe"],
      ["You see something scary on the screen. What should you do?",["Tell a grown-up right away.","Keep it a secret.","Show your little brother."],0,"Telling a grown-up is always the right choice.","safe"],
      ["Someone online asks where you live. What should you do?",["Don't tell them, and tell a grown-up.","Tell them.","Send a picture of your house."],0,"Keep private things private.","safe"],
      ["How should you talk to others online?",["Be kind.","Be mean.","Say nothing ever."],0,"Use kind words online, just like at school.","safe"],
      ["Your eyes feel tired. What should you do?",["Take a break.","Keep going for hours.","Get closer to the screen."],0,"Breaks help your eyes and body.","safe"],
      ["Is it okay to tell people online your name and school?",["No","Yes"],0,"Strangers online don't need to know that.","safe"]
    ]}
  ]
});

addSubject({ ...CS, grade:'1',
  passages: {
    mouse: `<h3>Lesson: Mouse and Keyboard</h3><p><b>Click:</b> press the mouse button once to pick something.</p><p><b>Double-click:</b> click two times fast to open something.</p><p><b>Drag:</b> hold the button down, move the mouse, then let go to move something.</p><p>On the keyboard:</p><p>• The <b>space bar</b> is the long key. It puts a space between words.</p><p>• <b>Enter</b> starts a new line.</p><p>• <b>Backspace</b> erases the letter before the blinking line.</p><p>• Hold <b>Shift</b> and press a letter to make a capital letter.</p>`,
    care: `<h3>Lesson: Taking Care of Devices</h3><p>Keep food and drinks away from computers and tablets. A spill can break them.</p><p>Carry a tablet with two hands.</p><p>Use gentle fingers. Don't bang on keys or the screen.</p><p>A <b>password</b> is a secret word that keeps your account safe. Share it only with your parents, never with friends.</p><p>When you are done, close what you opened and put the device away.</p>`
  },
  tests: [
    { id:'mouse', name:'Mouse & Keyboard', blurb:'Click, double-click, and important keys', qs:[
      ["How do you open something with the mouse?",["double-click it","drag it","shake the mouse"],0,"Click two times fast to open.","mouse"],
      ["To move a picture to a new spot, you…",["drag it","double-click it","press Enter"],0,"Hold, move, and let go.","mouse"],
      ["Which key puts a space between words?",["the space bar","Enter","Shift"],0,"It's the long key at the bottom.","mouse"],
      ["Which key starts a new line?",["Enter","Backspace","the space bar"],0,"Enter moves you down a line.","mouse"],
      ["You typed a wrong letter. Which key erases it?",["Backspace","Enter","Shift"],0,"Backspace erases the letter before the cursor.","mouse"],
      ["How do you make a capital letter?",["Hold Shift and press the letter.","Press Enter twice.","Press the space bar."],0,"Shift makes capitals.","mouse"],
      ["To choose one thing, you…",["click once","double-click","drag"],0,"A single click picks something.","mouse"]
    ]},
    { id:'care', name:'Caring for Devices', blurb:'Be gentle and keep passwords secret', qs:[
      ["Where should your juice go when you use the computer?",["away from the computer","next to the keyboard","on top of the tablet"],0,"Spills can break computers.","care"],
      ["How should you carry a tablet?",["with two hands","by one corner","by throwing it"],0,"Two hands keep it from falling.","care"],
      ["What is a password?",["a secret word that keeps your account safe","a kind of game","a type of mouse"],0,"Passwords protect your stuff.","care"],
      ["Who can you share your password with?",["your parents","your best friend","everyone"],0,"Only trusted grown-ups at home.","care"],
      ["How should you touch the keys?",["gently","as hard as you can","with your feet"],0,"Gentle hands keep devices working.","care"],
      ["What should you do when you are done?",["close what you opened and put it away","leave it on the floor","hide it"],0,"Clean up like you do with toys.","care"]
    ]}
  ]
});

addSubject({ ...CS, grade:'2',
  passages: {
    typing: `<h3>Lesson: Typing and Saving Your Work</h3><p>Good typists use the <b>home row</b>. Put your left fingers on <b>A S D F</b> and your right fingers on <b>J K L ;</b>. Feel the little bumps on F and J? Your pointer fingers go there, so you can find home without looking.</p><p>Keep your thumbs on the space bar and sit up straight.</p><p>When you make something, <b>save</b> it so it doesn't disappear. Give it a <b>file name</b> that tells what it is, like "Dog Story," not "asdf."</p><p>A <b>folder</b> holds files together, like a folder in your backpack holds papers.</p>`,
    internet: `<h3>Lesson: Internet Safety</h3><p><b>Private information</b> is information about you that strangers shouldn't know: your full name, address, phone number, school, and passwords. Never share it online.</p><p>People online may not be who they say they are. A "kid" could really be a grown-up stranger.</p><p><b>Ads</b> try to get you to click or buy something. <b>Pop-ups</b> are boxes that appear suddenly. Don't click them. Ask a grown-up.</p><p>If anything online makes you uncomfortable, close it and tell a grown-up.</p>`
  },
  tests: [
    { id:'typing', name:'Typing & Saving', blurb:'Home row keys, files, and folders', qs:[
      ["Which keys are on the home row for your left hand?",["A S D F","Q W E R","Z X C V"],0,"Left fingers rest on A S D F.","typing"],
      ["Which keys have little bumps to help you find home?",["F and J","A and ;","Q and P"],0,"Your pointer fingers go on F and J.","typing"],
      ["Where do your thumbs go?",["on the space bar","on Enter","in your lap"],0,"Thumbs rest on the space bar.","typing"],
      ["Why should you save your work?",["so it doesn't disappear","to make it louder","to delete it"],0,"Saved work can be opened later.","typing"],
      ["Which is the best file name for a story about your dog?",["Dog Story","asdf","file1"],0,"Good names tell what's inside.","typing"],
      ["What does a folder do?",["holds files together","prints pages","types for you"],0,"Folders keep files organized.","typing"],
      ["Which right-hand keys are on the home row?",["J K L ;","U I O P","M , . /"],0,"Right fingers rest on J K L ;.","typing"]
    ]},
    { id:'internet', name:'Internet Safety', blurb:'Private info, strangers, ads, and pop-ups', qs:[
      ["Which is private information?",["your home address","your favorite color","your favorite animal"],0,"Your address tells strangers where you live.","internet"],
      ["Someone in a game says they're 8 and asks your school. What should you do?",["Don't tell them, and tell a grown-up.","Tell them.","Ask them over."],0,"People online may not be who they say.","internet"],
      ["A pop-up says \"Click here to win!\" What should you do?",["Don't click it. Ask a grown-up.","Click it fast.","Type your name in it."],0,"Pop-ups can be tricks.","internet"],
      ["What is an ad trying to do?",["get you to click or buy something","help you with homework","keep you safe"],0,"Ads want your attention and money.","internet"],
      ["Something online makes you feel uncomfortable. What should you do?",["Close it and tell a grown-up.","Keep watching.","Share it with friends."],0,"Grown-ups can help.","internet"],
      ["Is your password private?",["Yes","No"],0,"Never share passwords online.","internet"]
    ]}
  ]
});

addSubject({ ...CS, grade:'3',
  passages: {
    shortcuts: `<h3>Lesson: Shortcuts and Files</h3><p>Keyboard <b>shortcuts</b> let you do things fast. On Windows and Chromebooks you hold <b>Ctrl</b>; on a Mac you hold <b>Command (⌘)</b>.</p><p>• <b>Ctrl + C</b> = Copy</p><p>• <b>Ctrl + V</b> = Paste</p><p>• <b>Ctrl + X</b> = Cut (copy and remove)</p><p>• <b>Ctrl + Z</b> = Undo your last step</p><p>• <b>Ctrl + S</b> = Save</p><p>Files have <b>extensions</b> at the end of their names that tell what kind they are: <b>.docx</b> is a document, <b>.jpg</b> or <b>.png</b> is a picture, <b>.mp3</b> is music.</p><p><b>Save As</b> lets you save a copy with a new name or in a new folder.</p>`,
    search: `<h3>Lesson: Searching the Internet</h3><p>A <b>web browser</b> is the app you use to visit websites, like Chrome, Edge, or Safari.</p><p>A <b>URL</b> is a website's address, like <b>www.nasa.gov</b>.</p><p>A <b>search engine</b>, like Google, helps you find websites. Use <b>keywords</b>: a few important words, not a whole sentence. For example, search <b>"how long do sea turtles live"</b> or <b>"sea turtle lifespan."</b></p><p>Not everything online is true! Good sites tell who wrote them. Sites ending in <b>.gov</b> (government) and <b>.edu</b> (schools) are usually reliable. Check more than one site.</p>`,
    citizen: `<h3>Lesson: Being a Good Digital Citizen</h3><p>A <b>digital citizen</b> is anyone who uses the internet. Good digital citizens are safe, kind, and honest.</p><p><b>Cyberbullying</b> is being mean to someone online, like posting hurtful comments or leaving someone out on purpose. If you see it, don't join in. Tell a trusted adult and save proof.</p><p>Your <b>digital footprint</b> is everything you post or do online. It can stay there forever, even if you delete it.</p><p>A strong <b>password</b> is long and hard to guess. Don't use your name or "1234."</p><p>Think before you post: Is it true? Is it kind? Is it necessary?</p>`
  },
  tests: [
    { id:'shortcuts', name:'Shortcuts & Files', blurb:'Copy, paste, undo, and file types', qs:[
      ["What does Ctrl + C do?",["Copy","Close","Cut"],0,"C is for Copy.","shortcuts"],
      ["What does Ctrl + V do?",["Paste","View","Save"],0,"V comes right after C on the keyboard.","shortcuts"],
      ["You deleted a whole paragraph by accident. Which shortcut brings it back?",["Ctrl + Z (Undo)","Ctrl + S","Ctrl + P"],0,"Undo reverses your last step.","shortcuts"],
      ["Which shortcut saves your work?",["Ctrl + S","Ctrl + X","Ctrl + V"],0,"S for Save.","shortcuts"],
      ["What does Ctrl + X do?",["cuts (copies and removes) the selection","closes the window","makes text bigger"],0,"Cut then paste moves things.","shortcuts"],
      ["On a Mac, which key do you hold instead of Ctrl?",["Command (⌘)","Shift","Tab"],0,"Mac shortcuts use Command.","shortcuts"],
      ["What kind of file is cat.jpg?",["a picture","a song","a document"],0,".jpg is a picture.","shortcuts"],
      ["What kind of file is report.docx?",["a document","a picture","a video game"],0,".docx is a word processing document.","shortcuts"],
      ["What does Save As let you do?",["save a copy with a new name or place","delete the file","print it"],0,"Save As makes a new copy.","shortcuts"]
    ]},
    { id:'search', name:'Searching the Internet', blurb:'Browsers, URLs, keywords, good sources', qs:[
      ["What is a web browser?",["the app you use to visit websites","a type of keyboard","a search word"],0,"Chrome, Edge, and Safari are browsers.","search"],
      ["What is a URL?",["a website's address","a password","a kind of virus"],0,"Like www.nasa.gov.","search"],
      ["Which is the best search for how long sea turtles live?",["sea turtle lifespan","turtles","I want to know about stuff in the ocean please"],0,"Use a few important keywords.","search"],
      ["Is everything on the internet true?",["No","Yes"],0,"Anyone can post online, so check your facts.","search"],
      ["Which website ending usually belongs to the government?",[".gov",".com",".net"],0,".gov sites are run by the government.","search"],
      ["Sites ending in .edu usually belong to…",["schools and colleges","video games","stores"],0,"edu = education.","search"],
      ["How can you check if a fact is true?",["look for it on more than one good site","believe the first site","ask a pop-up"],0,"Reliable facts show up on several trusted sites.","search"],
      ["What is a search engine?",["a tool that helps you find websites","a car part","a computer's power cord"],0,"Google and Bing are search engines.","search"]
    ]},
    { id:'citizen', name:'Digital Citizenship', blurb:'Kindness, footprints, and passwords', qs:[
      ["What is cyberbullying?",["being mean to someone online","playing games online","writing an email"],0,"Hurtful posts and messages are cyberbullying.","citizen"],
      ["You see someone being cyberbullied. What should you do?",["Don't join in, and tell a trusted adult.","Add a mean comment.","Ignore it forever."],0,"Being an upstander helps.","citizen"],
      ["What is a digital footprint?",["everything you post or do online","a shoe size","a mouse pad"],0,"It can stay online for a long time.","citizen"],
      ["If you delete a post, is it always gone forever?",["No, someone may have saved or copied it.","Yes, always."],0,"That's why you think before you post.","citizen"],
      ["Which password is the strongest?",["Purple!Tiger7Rocket","1234","yourname"],0,"Long, with mixed words, numbers, and symbols.","citizen"],
      ["Before you post, ask: Is it true? Is it kind? Is it…",["necessary","funny","long"],0,"True, kind, and necessary.","citizen"],
      ["A good digital citizen is…",["safe, kind, and honest online","sneaky","mean when nobody's watching"],0,"Act online the way you would in person.","citizen"]
    ]}
  ]
});

addSubject({ ...CS, grade:'4',
  passages: {
    how: `<h3>Lesson: How Computers Work</h3><p><b>Hardware</b> is the parts you can touch: keyboard, screen, mouse. <b>Software</b> is the programs and apps that tell the hardware what to do.</p><p><b>Input</b> devices send information <i>into</i> the computer (keyboard, mouse, microphone, camera). <b>Output</b> devices send information <i>out</i> (screen, speakers, printer).</p><p>The <b>CPU</b> (processor) is the computer's "brain." It follows instructions very fast.</p><p><b>Memory (RAM)</b> holds what you're working on right now and clears when the computer turns off. <b>Storage</b> (a hard drive or SSD) keeps files saved even when it's off.</p><p>The <b>operating system</b>, like Windows, macOS, or ChromeOS, runs the computer and lets you open apps.</p>`,
    coding: `<h3>Lesson: Coding Basics</h3><p>An <b>algorithm</b> is a set of step-by-step instructions to solve a problem, like a recipe.</p><p>A <b>program</b> is an algorithm written in a language a computer understands.</p><p><b>Sequence</b> means the steps happen in order. Order matters! You put on socks before shoes.</p><p>A <b>loop</b> repeats steps. Instead of writing "jump, jump, jump," you write "repeat 3 times: jump."</p><p>A <b>conditional</b> makes a choice: <i>if</i> it is raining, <i>then</i> take an umbrella, <i>else</i> wear sunglasses.</p><p>A <b>bug</b> is a mistake in code. <b>Debugging</b> means finding and fixing bugs.</p>`,
    research: `<h3>Lesson: Researching Online</h3><p>Start with good <b>keywords</b>. Put quotation marks around exact phrases, like <b>"Liberty Bell"</b>.</p><p>Check a source with these questions: <b>Who</b> wrote it? <b>When</b> was it updated? <b>Why</b> was it written (to teach, or to sell)? Can you find the same fact on <b>another</b> trusted site?</p><p>Most things online are protected by <b>copyright</b>, which means they belong to the person who made them. Don't copy someone's words and say they're yours. That's <b>plagiarism</b>. Put information in your own words and <b>cite</b> (list) your sources.</p>`
  },
  tests: [
    { id:'how', name:'How Computers Work', blurb:'Hardware, software, input, output, CPU', qs:[
      ["Which is hardware?",["a keyboard","a game app","a web browser"],0,"Hardware is what you can touch.","how"],
      ["Which is software?",["a drawing app","a monitor","a mouse"],0,"Software is programs and apps.","how"],
      ["Which is an input device?",["a microphone","speakers","a printer"],0,"A microphone sends sound into the computer.","how"],
      ["Which is an output device?",["a printer","a keyboard","a camera"],0,"A printer puts information out onto paper.","how"],
      ["Which part is called the computer's \"brain\"?",["the CPU (processor)","the mouse","the screen"],0,"The CPU follows instructions.","how"],
      ["Which keeps your files saved even when the computer is off?",["storage (hard drive or SSD)","RAM (memory)","the screen"],0,"RAM clears when the power goes off; storage doesn't.","how"],
      ["What is RAM used for?",["holding what you're working on right now","printing","charging"],0,"It's short-term working memory.","how"],
      ["Which is an operating system?",["Windows","a keyboard","Google Search"],0,"Windows, macOS, and ChromeOS run computers.","how"]
    ]},
    { id:'coding', name:'Coding Basics', blurb:'Algorithms, loops, ifs, and bugs', qs:[
      ["What is an algorithm?",["step-by-step instructions to solve a problem","a type of computer","a video game"],0,"Like a recipe.","coding"],
      ["Why does sequence (order) matter in code?",["Steps in the wrong order can give the wrong result.","It doesn't matter.","Computers pick the order."],0,"Socks before shoes!","coding"],
      ["A robot should step forward 5 times. What's the best code?",["repeat 5 times: step forward","step forward","step forward, step back"],0,"A loop repeats steps.","coding"],
      ["\"If it is raining, take an umbrella\" is an example of a…",["conditional","loop","bug"],0,"Conditionals make choices.","coding"],
      ["A bug in code is…",["a mistake","an insect","a fast computer"],0,"Bugs make programs act wrong.","coding"],
      ["Finding and fixing mistakes in code is called…",["debugging","downloading","deleting"],0,"De-bug = remove the bugs.","coding"],
      ["Code: repeat 3 times: clap. How many claps?",["1","3","6"],1,"The loop runs 3 times.","coding"],
      ["Code: if score > 10, say \"You win!\" else say \"Try again.\" The score is 8. What does it say?",["You win!","Try again."],1,"8 is not greater than 10, so the else part runs.","coding"]
    ]},
    { id:'research', name:'Researching Online', blurb:'Checking sources and using information fairly', qs:[
      ["Which question helps you check if a website is reliable?",["Who wrote it?","What color is it?","How many ads does it have?"],0,"Knowing the author helps you judge it.","research"],
      ["Why check when a page was updated?",["Old information may be out of date.","Old pages are always better.","It doesn't matter."],0,"Facts can change.","research"],
      ["A page selling vitamins says vitamins cure everything. Why be careful?",["It's trying to sell something, not just teach.","It's always true.","Vitamins are bad."],0,"Ask why the page was written.","research"],
      ["What do quotation marks do in a search, like \"Liberty Bell\"?",["search for that exact phrase","make the search louder","delete words"],0,"They keep words together.","research"],
      ["Copying someone's writing and saying it's yours is…",["plagiarism","research","citing"],0,"Use your own words and give credit.","research"],
      ["To cite a source means to…",["list where you got your information","copy it","delete it"],0,"Citing gives credit.","research"],
      ["Copyright means a work…",["belongs to the person who made it","is free for anyone to claim","is broken"],0,"Creators own their work.","research"],
      ["The best way to use facts from a website in a report is to…",["put them in your own words and cite the source","copy and paste everything","make up facts"],0,"That's honest research.","research"]
    ]}
  ]
});

addSubject({ ...CS, grade:'5',
  passages: {
    code: `<h3>Lesson: Loops, Conditionals, and Variables</h3><p>A <b>variable</b> is a named box that stores a value, like <b>score = 0</b>. The value can change: <b>score = score + 5</b> makes score 5.</p><p>A <b>loop</b> repeats code. <b>repeat 4 times</b> runs the steps inside it 4 times. A <b>while loop</b> keeps going while something is true: <b>while lives > 0: keep playing</b>.</p><p>A <b>conditional</b> checks if something is true: <b>if</b> … <b>else</b> …</p><p>Comparisons: <b>&gt;</b> greater than, <b>&lt;</b> less than, <b>==</b> equal to.</p><p>An <b>event</b> starts code when something happens, like <b>when space key pressed: jump</b>.</p>`,
    privacy: `<h3>Lesson: Online Safety and Privacy</h3><p><b>Phishing</b> is when someone sends a fake message, pretending to be a company or friend, to trick you into giving passwords or personal information. Warning signs: urgent threats, prizes that seem too good to be true, misspellings, and strange links.</p><p>A <b>strong password</b> is long (at least 12 characters), unique for each account, and hard to guess. A passphrase like <b>Blue-Pancake-River-42</b> works well.</p><p><b>Two-factor authentication (2FA)</b> adds a second step, like a code sent to a parent's phone, so a stolen password alone isn't enough.</p><p><b>Privacy settings</b> control who can see what you share. Set accounts to private.</p><p><b>Scams</b> like "You won a free tablet! Click here" are traps. Don't click; tell an adult.</p>`,
    net: `<h3>Lesson: Networks and Data</h3><p>A <b>network</b> is computers connected so they can share information. The <b>internet</b> is a giant network of networks around the world.</p><p><b>Wi-Fi</b> connects devices to a <b>router</b> without wires. The router connects your home to the internet.</p><p><b>The cloud</b> means files saved on other computers (servers) on the internet, so you can open them from any device.</p><p>Computers store everything as <b>binary</b>: only 0s and 1s. One 0 or 1 is a <b>bit</b>. 8 bits make a <b>byte</b>.</p><p>File sizes from small to big: <b>kilobyte (KB) → megabyte (MB) → gigabyte (GB) → terabyte (TB)</b>. A short text file might be a few KB; a movie can be several GB.</p>`
  },
  tests: [
    { id:'code', name:'Coding: Variables, Loops & Ifs', blurb:'Read code and figure out what it does', qs:[
      ["What is a variable?",["a named box that stores a value","a type of loop","a computer part"],0,"Variables hold values that can change.","code"],
      ["Code: score = 0, then score = score + 5, then score = score + 5. What is score?",["5","10","0","55"],1,"0 + 5 = 5, then 5 + 5 = 10.","code"],
      ["Code: repeat 4 times: move 10 steps. How many steps total?",["4","10","14","40"],3,"4 × 10 = 40.","code"],
      ["Code: if temperature > 80, say \"Hot!\" else say \"Nice!\" The temperature is 72. What does it say?",["Hot!","Nice!"],1,"72 is not greater than 80.","code"],
      ["Code: lives = 3. while lives > 0: play a round, then lives = lives − 1. How many rounds are played?",["2","3","4","forever"],1,"3, then 2, then 1 → 3 rounds, then lives is 0 and it stops.","code"],
      ["What does == mean in code?",["is equal to","is greater than","add"],0,"Two equals signs check if things are equal.","code"],
      ["\"When space key pressed: jump\" is an example of…",["an event","a variable","a bug"],0,"Events start code when something happens.","code"],
      ["A loop that never stops is called an infinite loop. Which would never stop?",["while 5 > 1: say hi","repeat 3 times: say hi","if 5 > 1: say hi"],0,"5 is always greater than 1, so it never ends.","code"]
    ]},
    { id:'privacy', name:'Online Safety & Privacy', blurb:'Phishing, passwords, 2FA, scams', qs:[
      ["What is phishing?",["a fake message that tries to trick you into giving information","a fishing game","a type of Wi-Fi"],0,"Phishers pretend to be someone you trust.","privacy"],
      ["An email says: \"Your account will be deleted in 1 hour! Click here and type your password.\" This is probably…",["phishing","a real warning","a game"],0,"Urgent threats and password requests are warning signs.","privacy"],
      ["Which is the strongest password?",["Blue-Pancake-River-42","password","Max2015"],0,"Long passphrases are hard to guess.","privacy"],
      ["Should you use the same password for every account?",["No, each account should have its own.","Yes, it's easier."],0,"If one gets stolen, the others stay safe.","privacy"],
      ["What does two-factor authentication add?",["a second step, like a code, to sign in","a second keyboard","faster internet"],0,"A stolen password alone isn't enough.","privacy"],
      ["What do privacy settings control?",["who can see what you share","how bright the screen is","how loud games are"],0,"Set accounts to private.","privacy"],
      ["A pop-up says \"You won a free tablet! Click to claim!\" What should you do?",["Don't click; tell an adult.","Click and enter your address.","Share it with friends."],0,"Too good to be true usually means a scam.","privacy"],
      ["Which is a warning sign of a phishing message?",["misspellings and a strange link","a message from your teacher in class","a book you checked out"],0,"Scammers often make small mistakes.","privacy"]
    ]},
    { id:'net', name:'Networks & Data', blurb:'Internet, Wi-Fi, the cloud, bits and bytes', qs:[
      ["What is a network?",["computers connected to share information","one computer alone","a type of keyboard"],0,"Networks let computers talk to each other.","net"],
      ["The internet is…",["a giant network of networks around the world","a single computer","a website"],0,"It connects millions of networks.","net"],
      ["What connects your home devices to the internet?",["a router","a printer","a mouse"],0,"Wi-Fi devices connect to the router.","net"],
      ["Saving a file \"in the cloud\" means…",["it's stored on internet servers you can reach from any device","it's in the sky","it's deleted"],0,"The cloud is other computers online.","net"],
      ["Computers store everything using…",["only 0s and 1s (binary)","letters only","pictures"],0,"Binary is the computer's language.","net"],
      ["How many bits are in one byte?",["2","8","10","100"],1,"8 bits = 1 byte.","net"],
      ["Which is the biggest?",["1 kilobyte (KB)","1 megabyte (MB)","1 gigabyte (GB)"],2,"KB → MB → GB → TB, smallest to biggest.","net"],
      ["Which would probably be the biggest file?",["a full movie","a short text note","a small picture"],0,"Videos take up the most space.","net"]
    ]}
  ]
});
