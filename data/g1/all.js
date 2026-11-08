// 1st grade. Format: [question, [options], correctIndex, why, passageKey or null, 'quiet' = don't read options aloud]
addSubject({ grade:'1', id:'reading', name:'Reading', icon:'📖', color:'#3d6fd8',
  passages: {
    puppy: `<h3>Lily's Lost Puppy</h3><p>Lily has a puppy named Max. One day, Max ran out the door!</p><p>Lily looked under the bed. Max was not there. She looked in the yard. Max was not there.</p><p>Then Lily heard a bark by the big tree. It was Max! He was digging a hole.</p><p>Lily gave Max a big hug and took him home.</p>`,
    frogs: `<h3>From Egg to Frog</h3><p>A frog starts life as a tiny egg in the water. The egg hatches into a tadpole.</p><p>A tadpole has a tail and swims like a fish. As it grows, it gets legs and loses its tail.</p><p>Now it is a frog! A frog can swim in the water and hop on land.</p>`
  },
  tests: [
    { id:'phonics', name:'Phonics', blurb:'Short and long vowels, sh, ch, th', qs:[
      ["Which word has a short a, like in cat?",["map","cake","rain","see"],0,"M-a-p has the short a sound."],
      ["Which word has a long e, like in bee?",["tree","bed","pen","net"],0,"Tree has the long e sound."],
      ["Which word rhymes with cake?",["lake","cat","kite","back"],0,"Cake and lake both end in -ake."],
      ["Add an e to the end of cap. What word do you get?",["cape","cop","cup"],0,"The silent e makes the a say its name: cape."],
      ["Which word starts with sh?",["ship","chip","sip"],0,"Sh-ip starts with sh."],
      ["Which word starts with ch?",["chair","shoe","think"],0,"Ch-air starts with ch."],
      ["Which word starts with th?",["three","tree","free"],0,"Th-ree starts with th."],
      ["Which word has 2 parts (syllables)?",["rabbit","cat","dog","sun"],0,"Clap it: rab-bit."],
      ["s - t - o - p. What word is it?",["stop","spot","top"],0,"s-t-o-p makes stop.",null,'quiet'],
      ["🐟 Which word is spelled right?",["fish","fsh","fich"],0,"F-I-S-H spells fish.",null,'quiet'],
      ["🐸 Which word is spelled right?",["frog","forg","frogg"],0,"F-R-O-G spells frog.",null,'quiet'],
      ["Which word ends with ck?",["duck","dug","dune"],0,"Du-ck ends with ck."]
    ]},
    { id:'grammar', name:'Words & Sentences', blurb:'Nouns, verbs, and sentences', qs:[
      ["Which word fits? I ___ a dog.",["have","has","haves"],0,"I have a dog."],
      ["Which word fits? She ___ to school every day.",["go","goes","going"],1,"She goes to school."],
      ["Which word is the naming word (noun)? The dog runs.",["dog","runs","the"],0,"Dog names an animal."],
      ["Which word is the action word (verb)? Birds fly.",["fly","birds"],0,"Fly is what the birds do."],
      ["Which sentence is written correctly?",["the cat is big.","The cat is big.","The cat is big"],1,"Start with a capital letter and end with a period."],
      ["Which end mark goes here? Do you like pizza___",[".","?","!"],1,"It's a question, so use a question mark."],
      ["What is more than one cat?",["cats","cat","cates"],0,"Add s: cats."],
      ["What is more than one box?",["boxs","boxes","boxen"],1,"Words that end in x add -es: boxes."],
      ["Which word is the opposite of hot?",["cold","warm","sun"],0,"Hot and cold are opposites."],
      ["Which word means the same as big?",["large","little","short"],0,"Big and large mean the same."],
      ["Which word needs a capital letter? my friend ava is here.",["Ava","friend","here"],0,"Names always start with a capital letter."]
    ]},
    { id:'story', name:'Story Time', blurb:'Two short stories', qs:[
      ["Who is Max?",["Lily's puppy","Lily's brother","a cat"],0,"Max is Lily's puppy.","puppy"],
      ["What happened first?",["Max ran out the door.","Lily hugged Max.","Max dug a hole."],0,"The story starts when Max runs out the door.","puppy"],
      ["Where did Lily look first?",["under the bed","in the yard","by the tree"],0,"First she looked under the bed.","puppy"],
      ["How did Lily find Max?",["She heard him bark.","He came home.","A friend called."],0,"She heard a bark by the big tree.","puppy"],
      ["What was Max doing?",["digging a hole","sleeping","eating"],0,"He was digging a hole.","puppy"],
      ["How did Lily feel at the end?",["happy","sad","mad"],0,"She gave Max a big hug.","puppy"],
      ["Where are frog eggs laid?",["in the water","in a tree","in the sand"],0,"Frog eggs are in the water.","frogs"],
      ["What hatches from a frog egg?",["a tadpole","a frog","a fish"],0,"The egg hatches into a tadpole.","frogs"],
      ["What does a tadpole have?",["a tail","wings","fur"],0,"A tadpole has a tail and swims like a fish.","frogs"],
      ["What happens as a tadpole grows?",["It gets legs and loses its tail.","It gets wings.","It gets smaller."],0,"Legs grow and the tail goes away.","frogs"],
      ["Is \"From Egg to Frog\" made up or true facts?",["true facts","made up"],0,"It teaches real facts about frogs.","frogs"]
    ]}
  ]
});

addSubject({ grade:'1', id:'math', name:'Math', icon:'🔢', color:'#e0702b',
  tests: [
    { id:'addsub', name:'Adding & Subtracting to 20', blurb:'Facts and story problems', qs:[
      ["7 + 5 = ?",["11","12","13","2"],1,"7 + 3 = 10, and 2 more is 12."],
      ["9 + 4 = ?",["12","13","14","5"],1,"9 + 1 = 10, and 3 more is 13."],
      ["8 + 8 = ?",["14","15","16","18"],2,"Double 8 is 16."],
      ["6 + 3 = ?",["8","9","10","3"],1,"Count on from 6: 7, 8, 9."],
      ["15 − 5 = ?",["5","10","11","20"],1,"15 take away 5 is 10."],
      ["12 − 4 = ?",["6","7","8","9"],2,"12 − 2 = 10, then 2 more is 8."],
      ["14 − 7 = ?",["6","7","8","21"],1,"7 + 7 = 14, so 14 − 7 = 7."],
      ["10 + 7 = ?",["17","3","71","107"],0,"10 and 7 more is 17."],
      ["Sam has 8 marbles. He gets 6 more. How many does he have now?",["2","13","14","15"],2,"8 + 6 = 14."],
      ["11 birds sit on a fence. 3 fly away. How many are left?",["7","8","9","14"],1,"11 − 3 = 8."],
      ["Which one is a doubles fact?",["6 + 6","6 + 5","5 + 7"],0,"Doubles add the same number twice."],
      ["3 + ___ = 10",["6","7","8","13"],1,"3 + 7 = 10."]
    ]},
    { id:'tens', name:'Tens & Ones', blurb:'Place value and counting to 120', qs:[
      ["How many tens are in 34?",["3","4","7","34"],0,"34 is 3 tens and 4 ones."],
      ["How many ones are in 52?",["2","5","7","52"],0,"52 is 5 tens and 2 ones."],
      ["4 tens and 6 ones make what number?",["10","46","64","406"],1,"4 tens = 40, plus 6 = 46."],
      ["Which number is greater?",["47","74"],1,"74 has 7 tens. 47 has only 4 tens."],
      ["Which number is less?",["29","92"],0,"29 has fewer tens."],
      ["What is 10 more than 35?",["25","36","45","55"],2,"Add one ten: 45."],
      ["What is 1 less than 60?",["50","59","61","70"],1,"Count back one: 59."],
      ["What comes next? 97, 98, 99, ___",["90","100","101","200"],1,"After 99 comes 100."],
      ["20 + 30 = ?",["5","23","50","2030"],2,"2 tens and 3 tens make 5 tens: 50."],
      ["Count by 5s: 5, 10, 15, ___",["16","20","25","50"],1,"5, 10, 15, 20."],
      ["Which sign makes it true? 23 ___ 32",["<",">","="],0,"23 is less than 32, so use <."]
    ]},
    { id:'time', name:'Time, Shapes & Graphs', blurb:'Clocks, shapes, halves, and charts', qs:[
      ["The short hand is on 7 and the long hand is on 12. What time is it?",["7:00","12:07","7:12","12:00"],0,"Long hand on 12 means o'clock."],
      ["What time is half past 2?",["2:00","2:30","3:30","12:02"],1,"Half past means 30 minutes after."],
      ["Which takes about 1 minute?",["washing your hands","sleeping all night","a school day"],0,"Washing hands is quick."],
      ["Which shape has no corners?",["circle","square","triangle"],0,"A circle is round all the way around."],
      ["How many sides does a rectangle have?",["3","4","5","6"],1,"A rectangle has 4 sides."],
      ["Which solid shape looks like a box or a die? 🎲",["cube","cone","sphere"],0,"A cube has 6 flat square faces."],
      ["You cut a sandwich into 2 equal parts. Each part is a…",["half","fourth","third"],0,"2 equal parts are halves."],
      ["A pizza is cut into 4 equal parts. Each part is a…",["fourth (quarter)","half","third"],0,"4 equal parts are fourths."],
      ["Which is taller?",["🦒 giraffe","🐈 cat"],0,"A giraffe is much taller."],
      ["Votes: 🍎 Apple 3, 🍌 Banana 5, 🍇 Grapes 2. Which fruit got the most votes?",["apple","banana","grapes"],1,"Banana has 5, the most."],
      ["Votes: 🍎 Apple 3, 🍌 Banana 5, 🍇 Grapes 2. How many more votes did banana get than apple?",["1","2","3","8"],1,"5 − 3 = 2."]
    ]}
  ]
});

addSubject({ grade:'1', id:'science', name:'Science', icon:'🔬', color:'#2e9d5b',
  tests: [
    { id:'animals', name:'Plants, Animals & Babies', blurb:'How plants and animals survive', qs:[
      ["A baby duck is called a…",["duckling","puppy","cub"],0,"Baby ducks are ducklings."],
      ["A baby frog is called a…",["tadpole","kitten","chick"],0,"Frogs start as tadpoles."],
      ["Which part of a plant is under the ground?",["roots","flower","leaves"],0,"Roots grow underground and drink water."],
      ["Which part of a plant is often colorful and makes seeds?",["flower","root","stem"],0,"Flowers make seeds."],
      ["How does a mother bird help her babies?",["She brings them food.","She teaches them to read.","She buys them toys."],0,"Parent birds feed their babies."],
      ["How does a hard shell help a turtle?",["It keeps the turtle safe.","It helps it fly.","It keeps it cold."],0,"The turtle can hide inside its shell."],
      ["How do sharp spines help a cactus?",["Animals won't eat it.","They help it swim.","They make it pretty."],0,"Spines protect the cactus."],
      ["Which animal is covered in feathers?",["🐦 bird","🐻 bear","🐟 fish"],0,"Birds have feathers."],
      ["What do plants need to grow?",["sunlight and water","ice cream","darkness"],0,"Plants need sunlight and water."],
      ["Do baby animals look a lot like their parents?",["Yes, most do.","No, never."],0,"Most babies look like their parents, but not exactly the same."]
    ]},
    { id:'sky', name:'Sky, Light & Sound', blurb:'Sun, moon, light, and sound', qs:[
      ["When can we see the sun?",["in the day","at night"],0,"The sun is in the sky during the day."],
      ["What can we see in the sky at night?",["the moon and stars","rainbows","the sun"],0,"The moon and stars shine at night."],
      ["When does the sun come up?",["in the morning","at night","at lunch"],0,"The sun rises in the morning."],
      ["Which season has the longest days?",["summer","winter"],0,"Summer days are long and sunny."],
      ["When you pluck a guitar string, it…",["shakes (vibrates) and makes sound","gets cold","turns blue"],0,"Sound is made when things vibrate."],
      ["What do we need to see things?",["light","sound","wind"],0,"Without light, we can't see."],
      ["Which lets light pass through?",["a clear glass window","a wood door","a cardboard box"],0,"Clear glass lets light through."],
      ["What do you get when you block light?",["a shadow","a rainbow","a cloud"],0,"Blocking light makes a shadow."],
      ["Which is a quiet sound?",["a whisper","a fire truck","a drum"],0,"A whisper is very soft."],
      ["Where does the sun go at night?",["It shines on the other side of Earth.","It turns off.","It falls down."],0,"Earth spins, so the sun lights up the other side."]
    ]}
  ]
});

addSubject({ grade:'1', id:'social', name:'Social Studies', icon:'🌎', color:'#8a52c7',
  tests: [
    { id:'rules', name:'Rules, Jobs & Community', blurb:'Rules, jobs, and good citizens', qs:[
      ["Why do we have rules?",["to keep us safe and be fair","to make us sad","to stop all fun"],0,"Rules keep people safe."],
      ["Which is a good classroom rule?",["Raise your hand to talk.","Run in the halls.","Yell loudly."],0,"Raising your hand lets everyone have a turn."],
      ["What does a baker make?",["bread","houses","shoes"],0,"Bakers make bread and treats."],
      ["Who grows food on a farm?",["farmer","pilot","dentist"],0,"Farmers grow food."],
      ["Who helps keep our town safe?",["police officer","cashier","painter"],0,"Police officers keep people safe."],
      ["Which is a NEED?",["a home","a video game","a toy"],0,"Everyone needs a home (shelter)."],
      ["Where can you keep money you save?",["a piggy bank","a trash can","a lunchbox"],0,"A piggy bank keeps money safe."],
      ["How can you be a good citizen?",["take turns","cut in line","litter"],0,"Taking turns is fair."],
      ["Where can you borrow books for free?",["the library","the gas station","the zoo"],0,"Libraries lend books."],
      ["Which is a job someone does to help you (a service)?",["a haircut","a ball","an apple"],0,"A haircut is something someone does for you."]
    ]},
    { id:'america', name:'Maps & America', blurb:'Maps, flags, and holidays', qs:[
      ["What does a map key show?",["what the pictures on the map mean","what time it is","who drew the map"],0,"The key explains the map's symbols."],
      ["A globe is a round model of…",["Earth","the moon","the sun"],0,"A globe shows Earth."],
      ["On most maps, what does blue show?",["water","roads","trees"],0,"Blue usually means water."],
      ["What do the stars on the American flag stand for?",["the states","the presidents","the planets"],0,"There is one star for each state."],
      ["Who was the first president of the United States?",["George Washington","Abraham Lincoln","Martin Luther King Jr."],0,"George Washington was the first president."],
      ["What do we celebrate on the Fourth of July?",["our country's birthday","the new year","the first day of school"],0,"July 4th is Independence Day."],
      ["Martin Luther King Jr. worked so that all people would be…",["treated fairly","rich","famous"],0,"He worked for equal rights for everyone."],
      ["Long ago, people traveled in a…",["horse and buggy","jet plane","electric car"],0,"Before cars, many people rode horses and buggies."],
      ["What do we call the place where we live, with houses and stores nearby?",["a community","a planet","an ocean"],0,"A community is where people live, work, and play."],
      ["Which direction is up on most maps?",["north","south","east"],0,"North is usually at the top."]
    ]}
  ]
});
