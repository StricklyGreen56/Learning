// Picture tests for 4th and 5th grade Computer Skills. Pictures come from pics.js and pics2.js.
// Format: [question, [options], correctIndex, why, null, flag or null, 'pictureKey']
(function(){
  const add = (grade, tests) => { const s = window.SUBJECTS.find(x => x.id === 'computers' && x.grade === grade); if (s) s.tests.push(...tests); };

  add('4', [
    { id:'inside', name:'Picture Quiz: Inside the Computer', blurb:'CPU, memory, storage, and more', qs:[
      ["What is this part?",["the CPU (processor)","the RAM","the power supply","the fan"],0,"The CPU is the computer's brain. It follows instructions very fast.",null,null,'cpu'],
      ["What is this part?",["RAM (memory)","a hard drive","a motherboard","a USB drive"],0,"RAM sticks are long and thin with chips and gold contacts.",null,null,'ram'],
      ["What does this part do?",["holds what you're working on right now, and clears when the power goes off","keeps files saved forever","cools the computer"],0,"RAM is short-term memory.",null,null,'ram'],
      ["What does this part do?",["stores your files, even when the computer is off","shows pictures","makes sound"],0,"An SSD is long-term storage.",null,null,'ssd'],
      ["This is an older kind of storage with a spinning disk inside. What is it called?",["a hard disk drive (HDD)","a CPU","a fan","RAM"],0,"Hard drives spin a disk and read it with a little arm.",null,null,'hdd'],
      ["Why does a computer need this part?",["to keep the parts from getting too hot","to type faster","to connect to Wi-Fi"],0,"Fans blow hot air out so the CPU doesn't overheat.",null,null,'fan'],
      ["What is this big board that everything plugs into?",["the motherboard","the keyboard","the monitor","the router"],0,"The motherboard connects the CPU, RAM, storage, and everything else.",null,null,'motherboard'],
      ["What does this part do?",["turns electricity from the wall into power the parts can use","stores games","prints pages"],0,"It's the power supply.",null,null,'psu'],
      ["Which part is the computer's \"brain\"?",['pic:cpu','pic:ram','pic:fan','pic:ssd'],0,"The CPU does the thinking."],
      ["Which part keeps your saved files?",['pic:ssd','pic:fan','pic:psu','pic:cpu'],0,"Storage (an SSD or hard drive) keeps files."]
    ]},
    { id:'ports', name:'Picture Quiz: Ports & Cables', blurb:'Which plug goes where?', qs:[
      ["What kind of port is this?",["USB-A","HDMI","Ethernet","headphone jack"],0,"USB-A is the classic flat rectangle port.",null,null,'port_usba'],
      ["What kind of port is this?",["USB-C","USB-A","HDMI","Ethernet"],0,"USB-C is small and rounded, and the plug works either way up.",null,null,'port_usbc'],
      ["What do you usually plug into this port?",["a TV or monitor","a mouse","headphones"],0,"HDMI sends video and sound to a screen.",null,null,'port_hdmi'],
      ["What does this port connect to?",["a network cable for wired internet","a TV","headphones"],0,"It's an Ethernet port. Wired internet is often faster than Wi-Fi.",null,null,'port_eth'],
      ["What plugs into this round port?",["headphones or speakers","a monitor","a printer cable"],0,"It's a headphone (audio) jack.",null,null,'port_audio'],
      ["You want to show your laptop on the TV. Which cable do you need?",['pic:cable_hdmi','pic:cable_usbc'],0,"HDMI carries the picture to the TV."],
      ["Which port would you use for a wired internet connection?",['pic:port_eth','pic:port_audio','pic:port_hdmi','pic:port_usbc'],0,"Ethernet is for networks."],
      ["Many new phones and laptops charge with this. What is it?",["a USB-C cable","an HDMI cable","an Ethernet cable"],0,"USB-C can carry power, data, and even video.",null,null,'cable_usbc'],
      ["Which port fits a flash drive with a flat rectangle plug?",['pic:port_usba','pic:port_eth','pic:port_audio','pic:port_hdmi'],0,"Most flash drives use USB-A."]
    ]},
    { id:'realfake', name:'Picture Quiz: Real or Fake Website?', blurb:'Check the address, the lock, and the search results', qs:[
      ["Is this website safe to sign in to?",["Probably yes: the address is the real company name and starts with https with a lock.","No, it's fake."],0,"brightbank.com with https and a lock is a good sign.",null,null,'site_real'],
      ["What is the biggest warning sign on this page?",["the strange address and \"Not secure\"","the blue color","it has a sign-in box"],0,"The real bank's address is brightbank.com, not brightbank-login-secure.xyz.",null,null,'site_fake'],
      ["What does this fake page ask for that a real bank would never ask for this way?",["your password AND your card number to \"unlock\" your account","your username","nothing"],0,"Scammers create panic so you type secrets without thinking.",null,null,'site_fake'],
      ["Look closely at the address. Is this the real BrightBank?",["No. It's spelled brigthbank, with the letters swapped.","Yes, it has a lock, so it's real."],0,"Scammers buy misspelled addresses. A lock only means the connection is private, not that the site is honest.",null,null,'site_typo'],
      ["You saw these three pages. Which address is the real BrightBank?",["https://www.brightbank.com","https://www.brigthbank.com","http://brightbank-login-secure.xyz"],0,"Spelled right, the real company name, and https. Fake sites use misspellings and extra words.",null,null,'site_real'],
      ["Which result is an ad (paid to be at the top)?",["A","B","C","D"],0,"It says Sponsored.",null,null,'searchres'],
      ["Which result is the most trustworthy for a science report?",["B (NASA)","A","C"],0,"NASA studies space, and .gov sites are run by the government.",null,null,'searchres'],
      ["Why is result C a poor source?",["It's someone's guess on a blog, not facts from experts.","It's too short to read.","It's in blue."],0,"Check who wrote it and whether they're an expert.",null,null,'searchres'],
      ["Results B and D both say the Moon is about 239,000 miles away. Why does that help?",["Two trusted sources agree, so the fact is more likely true.","It doesn't matter.","It means both are ads."],0,"Checking more than one good source is how researchers confirm facts.",null,null,'searchres']
    ]},
    { id:'robot2', name:'Picture Quiz: Robot Coding 2', blurb:'Bigger grids, loops, and debugging', qs:[
      ["The robot runs: repeat 4 times: forward 2, turn left. Where does it end up?",["back where it started","B","C","D"],0,"It traces a square: right 2, up 2, left 2, down 2.",null,null,'g5a'],
      ["Which loop climbs the staircase to the star?",["repeat 4 times: forward 1, turn left, forward 1, turn right","repeat 4 times: forward 1, turn right, forward 1, turn left","repeat 4 times: forward 2","repeat 8 times: forward 1"],0,"Each loop: one step right, then one step up.",null,null,'g5b'],
      ["Which code gets around the rock to the star?",["forward 1, turn left, forward 1, turn right, forward 2, turn right, forward 1, turn left, forward 1","forward 4","turn left, forward 4","forward 1, turn right, forward 3"],0,"Go up one row to pass the rock, then come back down.",null,null,'g5c'],
      ["This code stops one square before the star: repeat 3 times: forward 1. How do you fix it?",["change 3 to 4","change 3 to 2","add turn left"],0,"The star is 4 squares away.",null,null,'g5d'],
      ["The robot runs: forward 2, turn right, turn right, forward 1. Where does it end up?",["A","B","C","D"],0,"Up 2, turn all the way around, then back down 1.",null,null,'g5e'],
      ["Which code gets around the wall to the star?",["forward 3, turn right, forward 4, turn right, forward 3","forward 2, turn right, forward 4, turn right, forward 2","turn right, forward 4","forward 3, turn left, forward 4, turn left, forward 3"],0,"Go up past the top of the wall, across, then down.",null,null,'g5h'],
      ["Which is a shorter way to write forward 1, forward 1, forward 1, forward 1?",["repeat 4 times: forward 1","repeat 1 time: forward 4 times","forward 1 × forward 1"],0,"Loops make code shorter and easier to read."],
      ["The robot faces down. Which loop zigzags it to the star?",["repeat 4 times: forward 1, turn left, forward 1, turn right","repeat 4 times: forward 1, turn right, forward 1, turn left","repeat 4 times: forward 2"],0,"Down one, turn left to face right, over one, turn right to face down again.",null,null,'g5g']
    ]}
  ]);

  add('5', [
    { id:'blocks', name:'Picture Quiz: Read the Code Blocks', blurb:'Figure out what block code does', qs:[
      ["What will the sprite say?",["20","5","4","0"],0,"score starts at 0 and gets 5 added 4 times: 5, 10, 15, 20.",null,null,'code_score'],
      ["What will the sprite say?",["big","small","x","nothing"],0,"x is 10, and 10 > 5 is true, so the \"then\" part runs.",null,null,'code_ifelse'],
      ["If you changed the code to set x to 3, what would the sprite say?",["small","big","3"],0,"3 > 5 is false, so the else part runs.",null,null,'code_ifelse'],
      ["What shape does this code draw?",["a square","a triangle","a circle","a straight line"],0,"4 equal sides with 90° turns make a square.",null,null,'code_square'],
      ["What will the sprite say?",["8","6","3","2"],0,"1 → 2 → 4 → 8. It doubles 3 times.",null,null,'code_double'],
      ["When does this code run?",["every time the space key is pressed","once, when the green flag is clicked","never"],0,"Event blocks start code when something happens.",null,null,'code_event'],
      ["How many times does the sprite say \"hi\"?",["6","5","3","2"],0,"The inner loop runs 3 times, and the outer loop does that 2 times. 2 × 3 = 6.",null,null,'code_nested'],
      ["What will the sprite say?",["Hi, Sam","Hi, name","name","Sam"],0,"join puts the two pieces of text together, using the value stored in name.",null,null,'code_join'],
      ["This code should count 1, 2, 3, … 10, but it says 1 ten times. What's the bug?",["n never changes. Add \"change n by 1\" inside the loop.","The loop should repeat 1 time.","The green flag is wrong."],0,"The variable must grow each time through the loop.",null,null,'code_bug']
    ]},
    { id:'binary', name:'Picture Quiz: Binary & Pixels', blurb:'How computers store numbers and pictures', qs:[
      ["Each lit bulb is 1 and each dark bulb is 0. Add the numbers under the lit bulbs. What number is this?",["5","4","101","6"],0,"4 + 1 = 5.",null,null,'bits5'],
      ["What number do these bulbs show?",["10","8","12","1010"],0,"8 + 2 = 10.",null,null,'bits10'],
      ["What number do these bulbs show?",["19","17","21","13"],0,"16 + 2 + 1 = 19.",null,null,'bits19'],
      ["All 8 bulbs are on. What number is that?",["255","256","128","8"],0,"128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255, the biggest number 8 bits can hold.",null,null,'bits255'],
      ["What number do these bulbs show?",["0","1","8","256"],0,"No bulbs are on, so it's zero.",null,null,'bits0'],
      ["There are 8 bulbs (bits). 8 bits together are called a…",["byte","kilobyte","pixel","code"],0,"8 bits = 1 byte.",null,null,'bits19'],
      ["Pictures on a screen are made of tiny colored squares called…",["pixels","bits","bytes","icons"],0,"Zoom in far enough on any screen and you'll see pixels.",null,null,'pixels'],
      ["How many pixels are in this 8 by 8 picture?",["64","16","8","32"],0,"8 rows × 8 columns = 64 pixels.",null,null,'pixels'],
      ["If each pixel is either red (1) or white (0), how could the computer store the top row of this heart?",["01100110","11111111","00000000"],0,"Read the top row left to right: white, red, red, white, white, red, red, white.",null,null,'pixels']
    ]},
    { id:'network', name:'Picture Quiz: How the Internet Reaches You', blurb:'Routers, modems, the cloud, and servers', qs:[
      ["Part A connects your laptop, phone, and game console with Wi-Fi. What is it?",["a router","a server","a modem","a satellite"],0,"The router makes your home network.",null,null,'network'],
      ["Part B connects your home to your internet provider. What is it?",["a modem","a router","a printer","a server"],0,"The modem brings the internet into your house.",null,null,'network'],
      ["What is part C?",["the internet, a huge network of networks around the world","one big computer","a cloud in the sky"],0,"The internet connects millions of networks.",null,null,'network'],
      ["Part D stores websites and sends them when you ask. What is it called?",["a server","a monitor","a router","a modem"],0,"Servers are powerful computers that serve websites, games, and files.",null,null,'network'],
      ["The dashed lines between the devices and part A stand for…",["Wi-Fi (wireless)","rope","electricity from the wall"],0,"Wi-Fi uses radio waves instead of cables.",null,null,'network'],
      ["If part A (the router) turns off, what happens?",["the devices can't reach the internet","the internet turns off for the whole world","nothing changes"],0,"Your home network goes down, but the internet keeps running for everyone else.",null,null,'network'],
      ["When you watch a video, where does it come from?",["a server, through the internet, to your router, then to your device","from inside your router","from the modem's memory"],0,"Data travels from the server to you in small pieces called packets.",null,null,'network'],
      ["Saving a file \"in the cloud\" really means saving it on…",["servers like part D, reached through the internet","the router","a real cloud"],0,"The cloud is other people's computers (servers).",null,null,'network']
    ]},
    { id:'picprivacy', name:'Picture Quiz: Privacy & Passwords', blurb:'Settings, strong passwords, and sign-in codes', qs:[
      ["Setting 1 lets EVERYONE see your posts. What is a safer choice?",["Friends only","Everyone","Strangers only"],0,"Only people you know in real life should see your posts.",null,null,'privacy'],
      ["Setting 2 is ON. Why should you turn it OFF?",["It shows strangers where you are.","It uses too much battery.","It makes posts blurry."],0,"Never share your location publicly.",null,null,'privacy'],
      ["Setting 3 is ON. What should it be?",["OFF, so strangers can't message you","ON, so you meet new people"],0,"Strangers online may not be who they say they are.",null,null,'privacy'],
      ["Setting 4 is OFF. Should you turn it on?",["Yes. A second step (like a code) protects your account even if someone learns your password.","No, it makes signing in harder for no reason."],0,"This is two-step (two-factor) sign-in.",null,null,'privacy'],
      ["Which password is the strongest?",["C","A","B"],0,"Long passphrases of random words, with numbers and symbols, are hardest to guess.",null,null,'passwords'],
      ["Why is password A weak?",["It's short and uses a name and a year someone could guess.","It's too long.","It has no letters."],0,"Names, birthdays, and pets are easy to guess.",null,null,'passwords'],
      ["Password B has a capital, a number, and a symbol. Why is it only \"Fair\"?",["\"Password\" plus 123 is one of the most common passwords, so hackers try it first.","It's too long.","It has no letters."],0,"Common patterns are easy to guess, even with symbols.",null,null,'passwords'],
      ["Someone messages you: \"I'm from the game company. Send me the code on your phone.\" What should you do?",["Never share it. Real companies never ask for your code.","Send it quickly.","Send half of it."],0,"The code lets someone sign in as you.",null,null,'twofa'],
      ["Why does this code expire in 5 minutes?",["So a stolen code stops working quickly","Because phones get tired","So you have to buy a new one"],0,"Short-lived codes are harder for scammers to use.",null,null,'twofa']
    ]},
    { id:'robot3', name:'Picture Quiz: Robot Coding 3', blurb:'If/else, loops, and debugging', qs:[
      ["The robot runs: repeat 4 times: if the path ahead is clear, forward 1, else turn right. Where does it end up?",["A","B","C","D"],0,"Forward to the square before the rock (2 moves), then turn right to face down, then forward 1.",null,null,'g5f'],
      ["In that code, why does the robot turn right on the 3rd time through the loop?",["The rock blocks the path, so the else part runs.","It always turns on the 3rd time.","It reached the edge of the grid."],0,"if/else checks the condition every time through the loop.",null,null,'g5f'],
      ["The robot runs: repeat 4 times: forward 2, turn left. How many squares does it move in all?",["8","4","6","2"],0,"2 squares × 4 times = 8 squares.",null,null,'g5a'],
      ["Which code gets around the wall to the star?",["forward 3, turn right, forward 4, turn right, forward 3","turn right, forward 4","forward 2, turn right, forward 4, turn right, forward 2"],0,"Go above the wall, across, then back down.",null,null,'g5h'],
      ["A coder wrote a block called \"step up\": forward 1, turn left, forward 1, turn right. Then: repeat 4 times: step up. Where does the robot go?",["to the star","off the bottom of the grid","nowhere"],0,"Making your own block (a function) lets you reuse steps.",null,null,'g5b'],
      ["Which loop zigzags the robot (facing down) to the star?",["repeat 4 times: forward 1, turn left, forward 1, turn right","repeat 4 times: forward 1, turn right, forward 1, turn left","repeat 8 times: forward 1"],0,"Down, turn left to face right, over, turn right to face down.",null,null,'g5g'],
      ["Which code gets around the rock to the star?",["forward 1, turn left, forward 1, turn right, forward 2, turn right, forward 1, turn left, forward 1","forward 4","forward 1, turn right, forward 3"],0,"The rock blocks the straight path, so step around it.",null,null,'g5c'],
      ["The robot runs: forward 2, turn right, turn right, forward 1. Where does it end up?",["A","B","C","D"],0,"Two right turns make a U-turn.",null,null,'g5e']
    ]}
  ]);
})();
