// Picture tests for 3rd grade Computer Skills. Pictures come from pics.js.
// Format: [question, [options], correctIndex, why, null, flag or null, 'pictureKey']
// An option written 'pic:key' shows that picture as the answer choice.
(function(){
  const cs3 = window.SUBJECTS.find(s => s.id === 'computers' && s.grade === '3');
  if (!cs3) return;
  cs3.tests.push(
    { id:'picparts', name:'Picture Quiz: Computer Parts', blurb:'Name the device and what it does', qs:[
      ["What is this?",["a monitor (screen)","a printer","a keyboard","a router"],0,"The monitor shows pictures and words.",null,null,'monitor'],
      ["Which one is a mouse?",['pic:mouse','pic:headphones','pic:usb','pic:webcam'],0,"The mouse moves the arrow on the screen."],
      ["What does this do?",["lets the computer see you, like for video calls","prints pages","plays music","stores files"],0,"It's a webcam, a camera for the computer.",null,null,'webcam'],
      ["What is this used for?",["saving files and carrying them to another computer","charging a phone","making sound","typing"],0,"A USB flash drive stores files.",null,null,'usb'],
      ["What does this box do?",["connects the devices in your home to the internet with Wi-Fi","prints photos","plays games","cools the computer"],0,"It's a Wi-Fi router.",null,null,'router'],
      ["Which one is an OUTPUT device (sends information out to you)?",['pic:printer','pic:mouse','pic:microphone','pic:keyboard'],0,"A printer puts information out onto paper."],
      ["Which one is an INPUT device (puts information into the computer)?",['pic:microphone','pic:headphones','pic:monitor','pic:speakers'],0,"A microphone sends your voice into the computer."],
      ["Are these input or output devices?",["output, because sound comes out of them","input, because you type on them"],0,"Headphones send sound out to your ears.",null,null,'headphones'],
      ["What is this?",["a laptop","a tablet","a monitor","a router"],0,"A laptop folds up and has the screen and keyboard together.",null,null,'laptop'],
      ["How do you usually control this computer?",["by touching the screen","with a mouse only","by shaking it"],0,"Tablets have touch screens.",null,null,'tablet']
    ]},
    { id:'icons', name:'Picture Quiz: Icons & Buttons', blurb:'What do these buttons mean?', qs:[
      ["What does this button do?",["saves your work","deletes your work","prints your work","closes the app"],0,"This old floppy-disk picture means Save.",null,null,'save'],
      ["What happens if you drag a file here?",["it gets deleted","it gets saved","it gets printed","it gets bigger"],0,"The trash can (Recycle Bin) is for deleting.",null,null,'trash'],
      ["What does this button usually do?",["search for something","close the window","turn up the volume"],0,"The magnifying glass means search.",null,null,'search'],
      ["Clicking this usually opens…",["settings","the trash","a game","the camera"],0,"The gear means settings.",null,null,'gear'],
      ["What does this symbol show?",["the Wi-Fi (wireless internet) signal","the battery","the volume","the time"],0,"More curved lines = a stronger signal.",null,null,'wifi'],
      ["What does this mean?",["the battery is low, so plug in the charger","the battery is full","the sound is off"],0,"The tiny red bar means almost empty.",null,null,'battery'],
      ["What does this control?",["the sound (volume)","the brightness","the internet"],0,"A speaker with sound waves means volume.",null,null,'volume'],
      ["In a web browser, this button…",["reloads the page","goes to the next page","prints the page"],0,"It's the refresh button.",null,null,'refresh'],
      ["What does this button do?",["downloads (saves a copy of) a file onto your device","sends your files to a friend","deletes a file"],0,"The arrow points down into your device.",null,null,'download'],
      ["What happens if you click this on a window?",["the window closes","the window gets bigger","the window prints"],0,"X means close.",null,null,'close'],
      ["You made a mistake. This button will…",["undo your last step","save","print"],0,"The curved arrow going backward means undo (Ctrl + Z).",null,null,'undo'],
      ["In a web browser, this arrow takes you…",["back to the page you were just on","to a brand new tab","to the bottom of the page"],0,"It's the back button.",null,null,'back'],
      ["Which button would you click to SAVE your work?",['pic:save','pic:trash','pic:print','pic:home'],0,"The floppy disk means save."],
      ["Which button would you click to PRINT?",['pic:print','pic:download','pic:gear','pic:volume'],0,"The printer picture prints."]
    ]},
    { id:'browser', name:'Picture Quiz: Parts of a Web Browser', blurb:'Tabs, address bar, back, refresh, bookmarks', qs:[
      ["What is part A?",["a tab","the address bar","the back button","a bookmark"],0,"Tabs let you have more than one website open.",null,null,'browser'],
      ["What does part B do?",["goes back to the last page","reloads the page","closes the browser","saves a bookmark"],0,"The arrow pointing left is the back button.",null,null,'browser'],
      ["What does part C do?",["reloads (refreshes) the page","goes forward","prints the page"],0,"The circle arrow is refresh.",null,null,'browser'],
      ["What is part D called?",["the address bar, where the URL goes","the search engine","a tab","the menu"],0,"It shows the website's address.",null,null,'browser'],
      ["What does the star (part E) do?",["bookmarks the page so you can find it again later","gives the website a rating","closes the page"],0,"Bookmarks save your favorite sites.",null,null,'browser'],
      ["Which website is open?",["nasa.gov","google.com","youtube.com"],0,"Look in the address bar.",null,null,'browser'],
      ["What does the little lock next to the address mean?",["the connection is secure (https)","the page is locked forever","you need a key to open it"],0,"https and the lock mean your information is scrambled so others can't read it.",null,null,'browser'],
      ["What does the + next to the tab do?",["opens a new tab","zooms in","adds a bookmark"],0,"New tabs let you visit another site without closing this one.",null,null,'browser'],
      ["Which part would you click to load the page again?",["C","A","D","E"],0,"C is the refresh button.",null,null,'browser'],
      ["This website ends in .gov. Whose website is it?",["the government's","a store's","anyone's"],0,"NASA is part of the U.S. government.",null,null,'browser']
    ]},
    { id:'scams', name:'Picture Quiz: Spot the Scam', blurb:'Pop-ups, fake emails, and strangers', qs:[
      ["What should you do?",["close it and tell a grown-up","click CLAIM NOW","type in your address"],0,"Prizes you never entered to win are almost always scams.",null,null,'popup'],
      ["Which is a warning sign on this pop-up?",["a countdown timer rushing you","it is yellow","it has a button"],0,"Scammers rush you so you don't stop and think.",null,null,'popup'],
      ["What does it ask for that you should NEVER give?",["your name, address, and phone number","your favorite color","nothing"],0,"That's private information.",null,null,'popup'],
      ["Which is a warning sign in this email?",["the strange sender address, with a zero instead of an o","it has a subject line","it says Dear player"],0,"gamez0ne-prizes.biz is not a real company's address.",null,null,'phish'],
      ["Should you type your password here?",["No. Real companies never ask for your password in an email.","Yes, so you don't lose your account."],0,"This kind of trick is called phishing.",null,null,'phish'],
      ["Which other clue shows the email is fake?",["mistakes like \"you're account\" and lots of !!!","it is an email","it has a SEND button"],0,"Scam messages often have mistakes and try to scare you.",null,null,'phish'],
      ["What should you do?",["don't answer, block and report them, and tell a grown-up","tell them your school","send a picture"],0,"Never share private info or pictures with strangers online.",null,null,'chat'],
      ["Why is \"dont tell ur parents\" a BIG red flag?",["Safe people don't ask kids to keep secrets from their parents.","It's just a joke.","Parents don't play games."],0,"If someone asks you to keep a secret from your parents, tell a grown-up right away.",null,null,'chat'],
      ["Is this message probably safe?",["Yes. It's from your teacher in the class app and doesn't ask for private info.","No. All messages are scams."],0,"It's a normal class reminder.",null,null,'teacher'],
      ["Which message should make you stop and get a grown-up?",['pic:popup','pic:teacher'],0,"The pop-up promises a prize and wants private information."]
    ]},
    { id:'keys', name:'Picture Quiz: Keyboard Keys', blurb:'Find and name the lit-up key', qs:[
      ["What is the lit-up key?",["Backspace","Enter","Shift","Tab"],0,"Backspace erases the letter before the cursor.",null,null,'kb_backspace'],
      ["What is the lit-up key?",["Enter","Shift","Backspace","Caps Lock"],0,"Enter starts a new line or sends what you typed.",null,null,'kb_enter'],
      ["What is the lit-up key?",["Shift","Ctrl","Tab","Caps Lock"],0,"Hold Shift and press a letter to make a capital.",null,null,'kb_shift'],
      ["What does the lit-up key do?",["puts a space between words","deletes a word","makes capital letters"],0,"It's the space bar.",null,null,'kb_space'],
      ["What is the lit-up key?",["Tab","Esc","Shift","Caps Lock"],0,"Tab jumps to the next box or indents a line.",null,null,'kb_tab'],
      ["What does the lit-up key do?",["makes ALL letters capital until you press it again","erases letters","starts a new line"],0,"It's Caps Lock.",null,null,'kb_caps'],
      ["What is the lit-up key usually used for?",["canceling or closing a menu","typing numbers","saving"],0,"It's Esc (Escape).",null,null,'kb_esc'],
      ["The lit-up key is used with other keys for…",["shortcuts, like Ctrl + C to copy","capital letters","spaces"],0,"It's Ctrl (Control).",null,null,'kb_ctrl'],
      ["What do the lit-up keys do?",["move the cursor up, down, left, and right","change the volume","turn off the computer"],0,"They're the arrow keys.",null,null,'kb_arrows'],
      ["Why do F and J have little bumps?",["so your fingers can find the home row without looking","because they are broken","because they are used the most"],0,"Your pointer fingers rest on F and J.",null,null,'kb_fj']
    ]},
    { id:'files', name:'Picture Quiz: Files & Folders', blurb:'Read a file window like a pro', qs:[
      ["What folder is open?",["School","Pictures","Music","Downloads"],0,"The top bar shows Documents › School.",null,null,'files'],
      ["Which file is a picture?",["volcano.jpg","class song.mp3","Science Report.docx","Math Homework.pdf"],0,".jpg is a picture file.",null,null,'files'],
      ["Which file is a song?",["class song.mp3","volcano.jpg","Science Report.docx"],0,".mp3 is a music file.",null,null,'files'],
      ["Which file would you open to keep writing your report?",["Science Report.docx","volcano.jpg","class song.mp3"],0,".docx is a document you can type in.",null,null,'files'],
      ["What kind of file is Math Homework.pdf?",["a document that looks the same on every device","a song","a video game"],0,"PDFs keep their layout everywhere.",null,null,'files'],
      ["Where is Science Report.docx saved?",["Documents › School","Downloads","Music","Pictures"],0,"It's in the School folder, inside Documents.",null,null,'files'],
      ["\"Pictures\" (with the folder icon) is a…",["folder that can hold other files","picture file","song"],0,"Folders hold files, like a folder in your backpack.",null,null,'files'],
      ["How could you move volcano.jpg into the Pictures folder?",["drag it onto the Pictures folder","delete it","double-click Music"],0,"Drag and drop moves files.",null,null,'files'],
      ["Which folder is selected in the list on the left?",["School","Documents","Music"],0,"It's highlighted in blue.",null,null,'files'],
      ["Your new photo is named IMG_0042.jpg. Which is the best new name?",["volcano project.jpg","asdfgh.jpg","IMG_0042 copy.jpg"],0,"Good file names tell what's inside."]
    ]},
    { id:'robot', name:'Picture Quiz: Robot Coding', blurb:'Write code to get the robot to the star', qs:[
      ["Which code gets the robot to the star?",["forward 3","forward 2","turn right, forward 3","turn left, forward 3"],0,"The robot already faces the star, 3 squares away.",null,null,'maze1'],
      ["Which code gets the robot to the star?",["forward 2, turn left, forward 2","forward 2, turn right, forward 2","turn left, forward 3","forward 1, turn left, forward 2"],0,"Go 2 squares, turn left to face up, then go 2 more.",null,null,'maze2'],
      ["Ava wrote: forward 2, turn right, forward 2. The robot went the wrong way! What should she change?",["turn right should be turn left","forward 2 should be forward 3","nothing is wrong"],0,"Turning right faces down, but the star is up. That mistake is a bug.",null,null,'maze2'],
      ["Why won't \"forward 3\" work here?",["a rock is in the way","the robot faces the wrong way","the star is too far"],0,"The robot has to go around the rock.",null,null,'maze3'],
      ["Which code goes around the rock to the star?",["forward 1, turn right, forward 1, turn left, forward 2, turn left, forward 1","forward 3","turn right, forward 3","forward 1, turn left, forward 2"],0,"Step down below the rock, go past it, then come back up.",null,null,'maze3'],
      ["Which loop climbs the stairs to the star?",["repeat 3 times: forward 1, turn left, forward 1, turn right","repeat 3 times: forward 1, turn right, forward 1, turn left","repeat 3 times: forward 1","repeat 6 times: forward 1"],0,"Each time: one step right, then one step up.",null,null,'maze4'],
      ["The robot runs: forward 1, turn right, forward 2. Where does it end up?",["B","A","C","D"],0,"Forward 1 goes right, turn right faces down, forward 2 goes down two squares.",null,null,'maze5'],
      ["The robot runs: forward 2, turn right, forward 2. Where does it end up?",["A","B","C","D"],0,"It goes up 2, turns right, then goes right 2.",null,null,'maze6'],
      ["Which loop gets the robot to the star?",["repeat 3 times: forward 1","repeat 1 time: forward 1","repeat 3 times: turn right"],0,"A loop repeats the step 3 times.",null,null,'maze7'],
      ["Which code avoids the rock and reaches the star?",["turn left, forward 3, turn right, forward 3","forward 3, turn left, forward 3","turn right, forward 3, turn left, forward 3"],0,"Go left along the bottom first, then straight up.",null,null,'maze8']
    ]}
  );
})();
