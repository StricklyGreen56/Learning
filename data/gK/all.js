// Kindergarten. Format: [question, [options], correctIndex, why, passageKey or null, 'quiet' = don't read options aloud]
addSubject({ grade:'K', id:'reading', name:'Reading', icon:'📖', color:'#3d6fd8',
  passages: {
    ball: `<h3>Ben's Red Ball</h3><p>Ben has a red ball. He takes it to the park.</p><p>Oh no! The ball rolls into the pond.</p><p>A duck swims to the ball. The duck pushes the ball back to Ben.</p><p>Ben smiles. "Thank you, duck!"</p>`
  },
  tests: [
    { id:'letters', name:'Letters & Sounds', blurb:'Letters and the sounds they make', qs:[
      ["Which one is the letter B?",["B","D","P","R"],0,"B has a straight line and two bumps.",null,'quiet'],
      ["Which one is the small letter m?",["m","n","w","u"],0,"Small m has two humps.",null,'quiet'],
      ["Which letter comes after A?",["B","C","Z","D"],0,"A, B, C…"],
      ["Which letter comes before D?",["C","E","B","F"],0,"A, B, C, D."],
      ["🐍 Snake starts with which letter?",["s","m","t","b"],0,"Ssssnake starts with the sss sound: s."],
      ["🍎 Apple starts with which letter?",["a","e","o","p"],0,"Apple starts with a."],
      ["🐶 Dog starts with which letter?",["d","b","g","p"],0,"D-d-dog starts with d."],
      ["☀️ Sun starts with which letter?",["s","c","z","n"],0,"Sss-sun starts with s."],
      ["Which word starts with the same sound as 🐝 bee?",["ball","cat","sun","dog"],0,"Bee and ball both start with b."],
      ["Which word ends with the t sound?",["cat","cap","can","cab"],0,"Ca-t ends with t."]
    ]},
    { id:'words', name:'Rhymes & Words', blurb:'Rhyming words and sight words', qs:[
      ["Which word rhymes with cat?",["hat","cup","dog","sun"],0,"Cat and hat both end in -at."],
      ["Which word rhymes with bug?",["rug","bed","pig","top"],0,"Bug and rug both end in -ug."],
      ["Which word rhymes with bee?",["tree","cat","ball","fish"],0,"Bee and tree both end with the ee sound."],
      ["Which word rhymes with star?",["car","moon","dog","hat"],0,"Star and car both end in -ar."],
      ["Find the word: the",["the","and","see","to"],0,"T-H-E spells the.",null,'quiet'],
      ["Find the word: see",["see","said","she","so"],0,"S-E-E spells see.",null,'quiet'],
      ["Find the word: is",["is","it","in","at"],0,"I-S spells is.",null,'quiet'],
      ["Find the word: and",["and","can","an","said"],0,"A-N-D spells and.",null,'quiet'],
      ["c - a - t. Put the sounds together. What word is it?",["cat","cot","cut"],0,"c-a-t makes cat.",null,'quiet'],
      ["How many words are in this sentence? I see a cat.",["3","4","5","2"],1,"I · see · a · cat. That is 4 words."]
    ]},
    { id:'story', name:'Story Time', blurb:'Listen to a story and answer', qs:[
      ["Who is the story about?",["Ben","a cat","Mom"],0,"The story is about Ben.","ball"],
      ["What color is the ball?",["red","blue","green"],0,"Ben has a red ball.","ball"],
      ["Where does Ben go?",["the park","school","the store"],0,"He takes the ball to the park.","ball"],
      ["Where does the ball roll?",["into the pond","up a tree","into the street"],0,"The ball rolls into the pond.","ball"],
      ["Who helps Ben?",["a duck","a dog","a frog"],0,"A duck pushes the ball back.","ball"],
      ["What does Ben say?",["Thank you, duck!","Go away!","Good night!"],0,"Ben says thank you to the duck.","ball"],
      ["How does Ben feel at the end?",["happy","sad","mad"],0,"Ben smiles, so he is happy.","ball"]
    ]}
  ]
});

addSubject({ grade:'K', id:'math', name:'Math', icon:'🔢', color:'#e0702b',
  tests: [
    { id:'count', name:'Counting', blurb:'Count and compare numbers', qs:[
      ["How many apples? 🍎🍎🍎",["2","3","4","5"],1,"Count them: 1, 2, 3."],
      ["How many stars? ⭐⭐⭐⭐⭐",["3","4","5","6"],2,"Count them: 1, 2, 3, 4, 5."],
      ["How many ducks? 🦆🦆🦆🦆🦆🦆🦆",["6","7","8","9"],1,"Count them: 1, 2, 3, 4, 5, 6, 7."],
      ["What number comes after 4?",["3","4","5","6"],2,"1, 2, 3, 4, 5."],
      ["What number comes before 9?",["7","8","10","11"],1,"…7, 8, 9."],
      ["Which number is bigger?",["2","6"],1,"6 is more than 2."],
      ["Count by tens: 10, 20, 30, ___",["31","35","40","50"],2,"10, 20, 30, 40."],
      ["Which group has MORE fish?",["🐟🐟🐟","🐟🐟🐟🐟🐟"],1,"5 fish is more than 3 fish."],
      ["How many fingers are on one hand?",["4","5","6","10"],1,"Count your fingers: 5."],
      ["Which number is eleven?",["1","7","11","17"],2,"Eleven is written 1-1."]
    ]},
    { id:'shapes', name:'Shapes & Sizes', blurb:'Shapes, sizes, and patterns', qs:[
      ["Which shape is a circle?",["🔴","🟥","🔺"],0,"A circle is round."],
      ["Which shape is a square?",["🔴","🟥","🔺"],1,"A square has 4 equal sides."],
      ["Which shape is a triangle?",["🔴","🟥","🔺"],2,"A triangle has 3 sides."],
      ["How many sides does a triangle have?",["2","3","4","5"],1,"Tri means 3."],
      ["How many corners does a square have?",["0","3","4","5"],2,"A square has 4 corners."],
      ["Which one is shaped like a ball?",["🏀 basketball","📦 box","🍕 pizza slice"],0,"A basketball is round all over, like a ball."],
      ["Which is bigger?",["🐘 elephant","🐭 mouse"],0,"An elephant is much bigger."],
      ["Which is longer?",["🚌 school bus","🚗 car"],0,"A school bus is longer than a car."],
      ["Which is heavier?",["🍉 watermelon","🍃 leaf"],0,"A watermelon is much heavier."],
      ["What comes next? 🔴🔵🔴🔵🔴 ___",["🔵","🔴","🟢"],0,"The pattern is red, blue, red, blue. Next is blue."]
    ]},
    { id:'addsub', name:'Adding & Taking Away', blurb:'Add and subtract up to 10', qs:[
      ["🍪🍪 and 🍪 more. How many cookies?",["2","3","4","1"],1,"2 and 1 more make 3."],
      ["2 + 2 = ?",["2","3","4","5"],2,"2 and 2 make 4."],
      ["3 + 1 = ?",["2","3","4","5"],2,"3 and 1 more make 4."],
      ["5 + 0 = ?",["0","4","5","6"],2,"Adding 0 doesn't change the number."],
      ["4 − 1 = ?",["2","3","4","5"],1,"Take 1 away from 4 to get 3."],
      ["5 − 2 = ?",["2","3","4","7"],1,"Take 2 away from 5 to get 3."],
      ["You have 3 balloons 🎈🎈🎈. 1 flies away. How many are left?",["1","2","3","4"],1,"3 take away 1 is 2."],
      ["2 birds sit in a tree. 3 more come. How many birds now?",["4","5","6","1"],1,"2 + 3 = 5."],
      ["6 − 6 = ?",["0","1","6","12"],0,"Take all of them away and none are left."],
      ["Which one makes 5?",["2 + 3","1 + 1","4 + 2"],0,"2 + 3 = 5."],
      ["5 + ___ = 10",["4","5","6","10"],1,"5 + 5 = 10."]
    ]}
  ]
});

addSubject({ grade:'K', id:'science', name:'Science', icon:'🔬', color:'#2e9d5b',
  tests: [
    { id:'living', name:'Living Things & Senses', blurb:'Plants, animals, and your 5 senses', qs:[
      ["Which one is living?",["🌳 tree","🧸 teddy bear","🚗 car"],0,"A tree grows and needs water. It is living."],
      ["What do plants need to grow?",["water and sun","candy","toys"],0,"Plants need water and sunlight."],
      ["What do you use to see?",["eyes","ears","nose"],0,"You see with your eyes."],
      ["What do you use to hear?",["ears","eyes","hands"],0,"You hear with your ears."],
      ["What do you use to smell a flower?",["nose","ears","feet"],0,"You smell with your nose."],
      ["What do you use to taste food?",["tongue","eyes","ears"],0,"Your tongue tastes food."],
      ["What can you use to feel if a blanket is soft?",["hands","ears","nose"],0,"You feel things with your hands and skin."],
      ["What do animals need to live?",["food and water","toys","phones"],0,"All animals need food and water."],
      ["A baby dog is called a…",["puppy","kitten","calf"],0,"A baby dog is a puppy."],
      ["Where do fish live?",["in water","in trees","in the sky"],0,"Fish live in water."]
    ]},
    { id:'weather', name:'Weather & Seasons', blurb:'Sun, rain, snow, and seasons', qs:[
      ["What should you wear when it is cold and snowy? ❄️",["coat and hat","swimsuit","sandals"],0,"A coat and hat keep you warm."],
      ["What do you need when it rains? 🌧️",["umbrella","sunglasses","shovel"],0,"An umbrella keeps you dry."],
      ["Which season is cold and snowy?",["winter","summer","spring"],0,"Winter is the coldest season."],
      ["In which season do leaves fall off the trees?",["fall","summer","spring"],0,"That's why it's called fall!"],
      ["Where does rain come from?",["clouds","the ground","trees"],0,"Rain falls from clouds."],
      ["What gives us light in the daytime?",["the sun","the moon","a lamp"],0,"The sun lights up the day."],
      ["When is it easiest to see the moon?",["at night","at lunch","in the morning"],0,"The moon is easiest to see in the dark night sky."],
      ["Is ice hot or cold?",["cold","hot"],0,"Ice is frozen water. It is cold."],
      ["How can you tell it is windy?",["Leaves and trees move.","The grass is green.","The sky is blue."],0,"Wind makes things move."],
      ["Which season comes after winter?",["spring","summer","fall"],0,"Winter, then spring, then summer, then fall."]
    ]}
  ]
});

addSubject({ grade:'K', id:'social', name:'Social Studies', icon:'🌎', color:'#8a52c7',
  tests: [
    { id:'me', name:'Me, Family & Helpers', blurb:'Helpers, safety, and manners', qs:[
      ["Who helps you learn at school?",["teacher","firefighter","chef"],0,"Teachers help you learn."],
      ["Who helps you when you are sick?",["doctor","mail carrier","farmer"],0,"A doctor helps you get better."],
      ["Who brings letters to your house?",["mail carrier","doctor","pilot"],0,"The mail carrier brings the mail."],
      ["Who puts out fires?",["firefighter","teacher","baker"],0,"Firefighters put out fires."],
      ["What should you do before you eat?",["wash your hands","jump up and down","go to sleep"],0,"Washing hands gets rid of germs."],
      ["When someone is talking, you should…",["listen","yell","walk away"],0,"Good listeners pay attention."],
      ["How do you cross the street safely?",["Hold a grown-up's hand and look both ways.","Run fast.","Close your eyes."],0,"Always look both ways with a grown-up."],
      ["What does a red light mean? 🚦",["stop","go","dance"],0,"Red means stop."],
      ["What does a green light mean?",["go","stop","sleep"],0,"Green means go."],
      ["What do you say when someone gives you something?",["thank you","go away","no"],0,"Saying thank you is good manners."]
    ]},
    { id:'world', name:'Our World', blurb:'Places, America, and being a good friend', qs:[
      ["What does a map show?",["where places are","what time it is","how hot it is"],0,"A map shows where things are."],
      ["What is the name of our country?",["the United States","Canada","Mexico"],0,"We live in the United States of America."],
      ["What colors are on the American flag?",["red, white, and blue","green and yellow","pink and purple"],0,"The flag is red, white, and blue."],
      ["Who is the leader of our country?",["the president","the teacher","the mayor"],0,"The president leads the whole country."],
      ["Which holiday has a big turkey dinner? 🦃",["Thanksgiving","Halloween","Valentine's Day"],0,"Many families eat turkey on Thanksgiving."],
      ["A place with lots of tall buildings is a…",["city","farm","forest"],0,"Cities have tall buildings and lots of people."],
      ["Where do cows and pigs live?",["on a farm","in the ocean","at school"],0,"Cows and pigs live on farms."],
      ["How can you be a good friend?",["share","grab toys","yell"],0,"Sharing shows you care."],
      ["Which one is a WANT, not a need?",["a toy","food","water"],0,"You need food and water. A toy is nice, but you don't need it."],
      ["How often is your birthday?",["once a year","every day","every week"],0,"Your birthday comes once a year."]
    ]}
  ]
});
