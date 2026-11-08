// 2nd grade. Format: [question, [options], correctIndex, why, passageKey or null, 'quiet' = don't read options aloud]
addSubject({ grade:'2', id:'reading', name:'Reading', icon:'📖', color:'#3d6fd8',
  passages: {
    lemon: `<h3>The Lemonade Stand</h3><p>Jada and her brother Leo wanted money to buy a new kite. "Let's make a lemonade stand!" said Jada.</p><p>They squeezed lemons, added water and sugar, and made a big sign. Then they waited by the sidewalk.</p><p>At first, nobody stopped. Leo felt sad. "Maybe nobody likes lemonade," he said.</p><p>Then Jada had an idea. She put a plate of cookies on the table. Soon, lots of neighbors came to buy a snack and a drink.</p><p>By the end of the day, they had enough money for the kite. "Let's fly it tomorrow!" said Leo.</p>`,
    monarch: `<h3>Monarch Butterflies</h3><p>Monarch butterflies are orange and black. They are easy to spot in a garden.</p><p>Every fall, many monarchs fly south to Mexico, where it stays warm in winter. Some fly more than 2,000 miles!</p><p>Monarch caterpillars eat only one kind of plant. It is called milkweed. Without milkweed, monarchs can't grow.</p><p>People can help monarchs by planting milkweed in their yards and gardens.</p>`
  },
  tests: [
    { id:'phonics', name:'Phonics & Spelling', blurb:'Vowel teams, contractions, word parts', qs:[
      ["Which word is spelled correctly?",["rain","rane","rayn"],0,"Ai makes the long a sound in the middle of a word.",null,'quiet'],
      ["Which word is spelled correctly?",["play","plai","plae"],0,"Ay makes the long a sound at the end of a word.",null,'quiet'],
      ["Which word is spelled correctly?",["night","nite","nigt"],0,"Igh makes the long i sound.",null,'quiet'],
      ["Which word has the same vowel sound as moon?",["blue","book","mop"],0,"Moon and blue have the same oo sound."],
      ["Which word has ar, like in car?",["star","stair","store"],0,"St-ar has the ar sound."],
      ["do + not = ?",["don't","dont'","do'nt"],0,"The apostrophe takes the place of the o in not.",null,'quiet'],
      ["can + not = ?",["can't","cant","ca'nt"],0,"The apostrophe takes the place of the missing letters.",null,'quiet'],
      ["What is more than one berry?",["berries","berrys","berryes"],0,"Change y to i and add -es."],
      ["rain + bow = ?",["rainbow","rainbowe","rainboe"],0,"Two small words make one compound word.",null,'quiet'],
      ["Re- means again. What does redo mean?",["do again","not do","do before"],0,"re + do = do again."],
      ["-less means without. What does fearless mean?",["without fear","full of fear","fear again"],0,"fear + less = without fear."],
      ["How many syllables are in basket?",["1","2","3","4"],1,"Clap it: bas-ket."]
    ]},
    { id:'grammar', name:'Grammar', blurb:'Nouns, verbs, capitals, and more', qs:[
      ["Which word is a noun? The girl kicked the ball.",["girl","kicked","the"],0,"Girl names a person."],
      ["Yesterday we ___ tag.",["play","played","playing"],1,"Yesterday means past tense: played."],
      ["Yesterday I ___ a cookie.",["eat","eated","ate"],2,"The past tense of eat is ate."],
      ["Which word is an adjective? The tall man waved.",["tall","man","waved"],0,"Tall describes the man."],
      ["A ___ of fish swam by.",["school","pack","herd"],0,"A group of fish is called a school."],
      ["Which word can replace \"Maria and I\"?",["We","They","She"],0,"Maria and I = we."],
      ["Which words need capital letters? we went to texas in july.",["We, Texas, July","went, to, in","only we"],0,"Capitalize the first word, places, and months."],
      ["The bone belongs to the dog. It is the ___ bone.",["dog's","dogs","dogs'"],0,"Add 's to show something belongs to one dog."],
      ["Which date is written correctly?",["July 4, 1776","July, 4 1776","July 4 1776,"],0,"Put a comma between the day and the year."],
      ["Which is a complete sentence?",["The bird sang a song.","The bird.","Sang a song."],0,"It tells who (the bird) and what it did (sang)."],
      ["I built the fort all by ___.",["myself","me","mine"],0,"Use myself when you did it alone."]
    ]},
    { id:'story', name:'Story Time', blurb:'A story and an article', qs:[
      ["Why did Jada and Leo want money?",["to buy a new kite","to buy candy","to buy a bike"],0,"They wanted a new kite.","lemon"],
      ["What did they sell?",["lemonade","pizza","toys"],0,"They had a lemonade stand.","lemon"],
      ["What was the problem?",["Nobody stopped to buy.","It started to rain.","They ran out of lemons."],0,"At first, nobody stopped.","lemon"],
      ["How did Leo feel when nobody came?",["sad","excited","angry"],0,"The story says Leo felt sad.","lemon"],
      ["How did Jada solve the problem?",["She added cookies.","She went home.","She made the cups bigger."],0,"Cookies brought the neighbors.","lemon"],
      ["What happened at the end?",["They had enough money for the kite.","They lost their money.","They gave up."],0,"They earned enough for the kite.","lemon"],
      ["What colors are monarch butterflies?",["orange and black","blue and white","green and yellow"],0,"Monarchs are orange and black.","monarch"],
      ["Where do many monarchs fly every fall?",["Mexico","Canada","the North Pole"],0,"They fly south to Mexico.","monarch"],
      ["Why do they fly there?",["It stays warm in winter.","There is more snow.","To find the ocean."],0,"Mexico stays warm in winter.","monarch"],
      ["What do monarch caterpillars eat?",["milkweed","grass","apples"],0,"They eat only milkweed.","monarch"],
      ["How can people help monarchs?",["plant milkweed","catch them in jars","cut down flowers"],0,"Planting milkweed gives caterpillars food.","monarch"],
      ["Why did the author write \"Monarch Butterflies\"?",["to teach facts","to tell a funny story","to sell butterflies"],0,"It gives true facts.","monarch"]
    ]}
  ]
});

addSubject({ grade:'2', id:'math', name:'Math', icon:'🔢', color:'#e0702b',
  tests: [
    { id:'addsub', name:'Adding & Subtracting to 100', blurb:'Two-digit math and story problems', qs:[
      ["34 + 25 = ?",["49","59","69","9"],1,"3 tens + 2 tens = 5 tens, 4 + 5 = 9 ones → 59."],
      ["47 + 38 = ?",["75","85","815","95"],1,"7 + 8 = 15 (carry 1 ten). 4 + 3 + 1 = 8 tens → 85."],
      ["63 − 21 = ?",["42","84","32","44"],0,"6 − 2 = 4 tens, 3 − 1 = 2 ones → 42."],
      ["80 − 36 = ?",["56","54","44","46"],2,"Check it: 44 + 36 = 80."],
      ["56 + 27 = ?",["73","83","713","93"],1,"6 + 7 = 13 (carry 1). 5 + 2 + 1 = 8 → 83."],
      ["92 − 48 = ?",["44","56","54","46"],0,"Check it: 44 + 48 = 92."],
      ["100 − 45 = ?",["65","55","45","145"],1,"45 + 55 = 100."],
      ["Which number is even?",["7","9","14","21"],2,"Even numbers end in 0, 2, 4, 6, or 8."],
      ["Is 15 odd or even?",["odd","even"],0,"15 ends in 5, so it is odd."],
      ["Kim has 45 stickers. She gets 28 more. How many does she have now?",["63","73","17","83"],1,"45 + 28 = 73."],
      ["There are 64 kids at the park. 29 go home. How many are still there?",["35","45","93","25"],0,"64 − 29 = 35."],
      ["50 + 40 + 5 = ?",["95","59","945","90"],0,"9 tens and 5 ones = 95."]
    ]},
    { id:'place', name:'Place Value & Money', blurb:'Hundreds, tens, ones, and coins', qs:[
      ["In 352, which digit is in the hundreds place?",["3","5","2","352"],0,"352 = 3 hundreds, 5 tens, 2 ones."],
      ["7 hundreds, 4 tens, and 2 ones make…",["247","742","724","13"],1,"700 + 40 + 2 = 742."],
      ["600 + 50 + 8 = ?",["658","685","568","6508"],0,"6 hundreds, 5 tens, 8 ones."],
      ["Which number is greater?",["413","431"],1,"Both have 4 hundreds. 431 has more tens."],
      ["Count by 100s: 200, 300, 400, ___",["401","410","500","1000"],2,"200, 300, 400, 500."],
      ["What is 10 more than 245?",["246","255","345","235"],1,"Add one ten: 255."],
      ["What is 100 more than 512?",["513","522","612","412"],2,"Add one hundred: 612."],
      ["How much is 1 quarter, 1 dime, and 2 pennies?",["37¢","28¢","35¢","40¢"],0,"25 + 10 + 1 + 1 = 37¢."],
      ["How many pennies make one dollar?",["10","25","50","100"],3,"100 pennies = $1.00."],
      ["How much are 2 quarters?",["25¢","40¢","50¢","75¢"],2,"25 + 25 = 50¢."],
      ["Which coin is worth the most?",["quarter","dime","nickel","penny"],0,"A quarter is 25¢."],
      ["How much is 3 dimes and 1 nickel?",["31¢","35¢","40¢","15¢"],1,"10 + 10 + 10 + 5 = 35¢."]
    ]},
    { id:'measure', name:'Time, Measuring & Shapes', blurb:'Clocks, inches, shapes, and graphs', qs:[
      ["What time is 15 minutes after 6:00?",["6:15","6:30","7:15","6:45"],0,"Count 15 minutes past 6:00."],
      ["The long hand is on 6 and the short hand is between 4 and 5. What time is it?",["4:30","5:30","6:20","4:06"],0,"Long hand on 6 = 30 minutes past 4."],
      ["A.M. means the time is in the…",["morning","night"],0,"A.M. is from midnight to noon."],
      ["How many inches are in 1 foot?",["10","12","24","100"],1,"12 inches = 1 foot."],
      ["What is the best unit to measure the length of your room?",["feet","inches","miles"],0,"A room is many feet long."],
      ["A pencil goes from 0 to 7 on a ruler. How long is it?",["6 inches","7 inches","8 inches","0 inches"],1,"It starts at 0 and ends at 7."],
      ["How many sides does a pentagon have?",["4","5","6","8"],1,"Penta means 5."],
      ["How many faces does a cube have?",["4","6","8","12"],1,"Top, bottom, and 4 sides = 6 faces."],
      ["A rectangle is split into 3 equal parts. Each part is a…",["half","third","fourth"],1,"3 equal parts are thirds."],
      ["An array has 3 rows with 4 dots in each row. How many dots?",["7","10","12","34"],2,"4 + 4 + 4 = 12."],
      ["A bar graph shows 6 kids like dogs and 4 like cats. How many more like dogs?",["2","4","6","10"],0,"6 − 4 = 2."]
    ]}
  ]
});

addSubject({ grade:'2', id:'science', name:'Science', icon:'🔬', color:'#2e9d5b',
  tests: [
    { id:'matter', name:'Matter & Materials', blurb:'Solids, liquids, gases, and changes', qs:[
      ["Which is a solid?",["a wooden block","juice","steam"],0,"A solid keeps its shape."],
      ["Which is a liquid?",["juice","a rock","a pencil"],0,"A liquid flows and takes the shape of its cup."],
      ["Which is a gas?",["the air in a balloon","milk","a shoe"],0,"Gas spreads out to fill its space."],
      ["What happens to ice cream left in the hot sun?",["It melts.","It freezes.","It gets bigger."],0,"Heat melts it."],
      ["Which material is best for a raincoat?",["plastic","paper","cotton"],0,"Plastic keeps water out."],
      ["Which object bends and stretches?",["a rubber band","a rock","a glass cup"],0,"Rubber is flexible."],
      ["Melted chocolate cools down. What happens?",["It gets hard again.","It turns into juice.","It disappears."],0,"Cooling can turn a liquid back into a solid."],
      ["Can burned paper turn back into paper?",["No","Yes"],0,"Some changes, like burning, can't be undone."],
      ["Which object floats in water?",["a cork","a rock","a coin"],0,"A cork is light and floats."],
      ["A block tower is taken apart. What can you do with the blocks?",["Build something new.","Nothing.","Eat them."],0,"Small pieces can be used to build new things."]
    ]},
    { id:'earth', name:'Plants, Animals & Earth', blurb:'Habitats and how land changes', qs:[
      ["How can animals help plants?",["They carry seeds to new places.","They paint the flowers.","They water them."],0,"Seeds stick to fur or get eaten and dropped."],
      ["How do bees help flowers?",["They move pollen from flower to flower.","They eat the roots.","They dig holes."],0,"Moving pollen helps flowers make seeds."],
      ["What do plants need to grow?",["sunlight and water","darkness","salt"],0,"Plants need light and water."],
      ["Where do polar bears live?",["in the cold Arctic","in the desert","in the jungle"],0,"Polar bears live where it is icy and cold."],
      ["Which habitat has lots of trees and lots of rain?",["rainforest","desert","tundra"],0,"Rainforests are wet and full of trees."],
      ["Wind and water slowly wearing away rock is called…",["erosion","melting","growing"],0,"Erosion changes land over a long time."],
      ["Which changes land very fast?",["a volcano erupting","a river cutting a canyon","a mountain wearing down"],0,"A volcano can change land in hours or days."],
      ["Which is a body of water?",["a lake","a hill","a valley"],0,"A lake is water with land around it."],
      ["What is a very tall, rocky landform?",["mountain","plain","pond"],0,"Mountains are very tall."],
      ["How can people stop soil from washing away?",["plant grass and trees","dig more holes","pour water on it"],0,"Roots hold soil in place."]
    ]}
  ]
});

addSubject({ grade:'2', id:'social', name:'Social Studies', icon:'🌎', color:'#8a52c7',
  tests: [
    { id:'gov', name:'Communities & Government', blurb:'Leaders, laws, and citizens', qs:[
      ["A community with farms and lots of space is…",["rural","urban","suburban"],0,"Rural means country areas."],
      ["A community near a big city, with houses and yards, is…",["suburban","rural","an ocean"],0,"Suburbs are near cities."],
      ["Who is the leader of a town or city?",["the mayor","the governor","the president"],0,"Mayors lead towns and cities."],
      ["Who is the leader of a state?",["the governor","the mayor","the principal"],0,"Each state has a governor."],
      ["How do citizens choose leaders?",["They vote.","They race.","They flip a coin."],0,"Voting lets people choose."],
      ["Why do we have laws?",["to keep people safe","to make people sad","so no one has fun"],0,"Laws help keep order and safety."],
      ["The rules for our whole country are written in the…",["Constitution","dictionary","newspaper"],0,"The Constitution is the plan for our government."],
      ["What do taxes help pay for?",["roads and schools","toys for kids","vacations"],0,"Taxes pay for things everyone uses."],
      ["Which shows being a good citizen?",["following the rules","littering","being unkind"],0,"Good citizens follow rules and help others."],
      ["What does the Statue of Liberty stand for?",["freedom","sports","money"],0,"It is a symbol of freedom."]
    ]},
    { id:'maps', name:'Maps, Money & History', blurb:'Directions, economics, and the past', qs:[
      ["What are the four main directions?",["north, south, east, west","up, down, left, right","front, back, top, bottom"],0,"These are shown on a compass rose."],
      ["How many continents are there?",["5","7","10","50"],1,"There are 7 continents."],
      ["Which one is an ocean?",["Atlantic","Mississippi","Rocky"],0,"The Atlantic Ocean is east of the United States."],
      ["Which is a service?",["a dentist cleaning teeth","a pair of shoes","a book"],0,"A service is work done for someone."],
      ["Someone who makes or grows things to sell is a…",["producer","consumer"],0,"Producers make goods."],
      ["Someone who buys things is a…",["consumer","producer"],0,"Consumers buy goods and services."],
      ["Which is a want, not a need?",["a new bike","food","clothes"],0,"You can live without a bike."],
      ["Long ago, people used candles for light. Today we use…",["light bulbs","torches","nothing"],0,"Electricity powers our lights."],
      ["Which president helped end slavery?",["Abraham Lincoln","George Washington","Thomas Edison"],0,"Abraham Lincoln was the 16th president."],
      ["Who was the first president?",["George Washington","Abraham Lincoln","Benjamin Franklin"],0,"George Washington was first."]
    ]}
  ]
});
