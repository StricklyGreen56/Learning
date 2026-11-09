// 5th grade. Format: [question, [options], correctIndex, why, passageKey or null, 'quiet' = don't read options aloud]
addSubject({ grade:'5', id:'reading', name:'Reading', icon:'📖', color:'#3d6fd8',
  passages: {
    shop: `<h3>The Repair Shop</h3><p>Grandpa Leo's repair shop smelled of oil and old metal. For forty years, people had brought him broken toasters, radios, and once, a robot dog named Bolt.</p><p>Now the shop was closing. "Nobody fixes things anymore," Grandpa sighed, packing tools into a box. "They just buy new ones."</p><p>Nia picked up a tiny screwdriver. She remembered the summer Grandpa taught her to fix Bolt's wobbly leg, and how he made her try five times before she got it right. "Mistakes are just instructions in disguise," he had said.</p><p>That evening, Nia filmed Grandpa explaining how to repair a lamp. She posted the video with the title "Don't Throw It Away—Fix It!"</p><p>By morning, the video had thousands of views. Comments poured in: "Can he teach a class?" "My grandpa used to fix things too!"</p><p>Grandpa read the comments slowly, his eyebrows rising higher with each one. Then, without a word, he began taking the tools back out of the box.</p>`,
    reef: `<h3>Coral Reefs in Trouble</h3><p>Coral reefs cover less than one percent of the ocean floor, yet they are home to about a quarter of all ocean species. Although they look like colorful rocks, corals are actually animals. Each coral is made of tiny creatures called polyps, which build hard skeletons out of limestone.</p><p>Many corals get their bright colors from algae that live inside them. The algae make food from sunlight and share it with the coral. In return, the coral gives the algae a safe place to live. This kind of relationship, where both living things benefit, is called mutualism.</p><p>Today, reefs face serious threats. When ocean water gets too warm, corals push out their algae and turn white. This is called coral bleaching. Without their algae, corals can starve. Pollution and careless fishing also damage reefs.</p><p>Scientists and volunteers are working to protect reefs. They grow young corals in underwater nurseries and then replant them on damaged reefs.</p>`
  },
  tests: [
    { id:'story', name:'Reading: Repair Shop & Coral Reefs', blurb:'A story and an article, 18 questions', qs:[
      ["Why is Grandpa Leo's shop closing?",["He is moving away.","People buy new things instead of fixing old ones.","The building is falling down.","He lost his tools."],1,"Grandpa says nobody fixes things anymore.","shop"],
      ["What does Grandpa mean by \"Mistakes are just instructions in disguise\"?",["Mistakes teach you how to do it right.","Never make mistakes.","Instructions are hard to read.","Mistakes are funny."],0,"Each wrong try shows you something to change.","shop"],
      ["What detail shows Grandpa was a patient teacher?",["He made Nia try five times until she got it right.","His shop smelled of oil.","He fixed toasters.","He packed a box."],0,"Letting her try again and again shows patience.","shop"],
      ["Which word best describes Nia?",["lazy","creative and caring","rude","bored"],1,"She thought of a new idea to help her grandpa.","shop"],
      ["\"Comments poured in\" means…",["comments were spilled","many comments came in quickly","nobody commented","it rained"],1,"It's figurative language, like water pouring.","shop"],
      ["\"His eyebrows rising higher\" shows that Grandpa felt…",["surprised","angry","sleepy","bored"],0,"Raised eyebrows show surprise.","shop"],
      ["What can you infer when Grandpa takes the tools back out?",["He is cleaning them.","He has decided to keep sharing his skills.","He is selling them.","He wants to fix the box."],1,"The comments changed his mind about closing.","shop"],
      ["What is the theme of the story?",["Old skills still matter and are worth sharing.","Robots are better than people.","Never use the internet.","Shops always close."],0,"Nia's video showed people still value fixing things.","shop"],
      ["What are corals?",["rocks","plants","animals","algae"],2,"The article says corals are actually animals.","reef"],
      ["What do coral polyps build their skeletons out of?",["sand","limestone","wood","shells from fish"],1,"Polyps build hard limestone skeletons.","reef"],
      ["How do algae help corals?",["They share food made from sunlight.","They scare away fish.","They build the skeleton.","They keep the water cold."],0,"Paragraph 2 explains the trade.","reef"],
      ["Mutualism is a relationship where…",["both living things benefit","one living thing is harmed","nobody benefits","animals fight"],0,"The article defines it.","reef"],
      ["What causes coral bleaching?",["ocean water getting too warm","too many fish","cold winters","sunlight"],0,"Warm water makes corals push out their algae.","reef"],
      ["Why is bleaching dangerous for corals?",["Without algae, corals can starve.","White corals sink.","Fish eat white coral.","It makes the water salty."],0,"The algae were their food source.","reef"],
      ["Which detail best supports the idea that reefs are important?",["They are home to about a quarter of ocean species.","They look like rocks.","They cover less than 1% of the ocean floor."],0,"Many species depend on reefs.","reef"],
      ["In the first sentence, the word \"yet\" signals…",["a contrast (something surprising)","a time","a list","an example"],0,"Reefs are small, YET they hold lots of life.","reef"],
      ["How are the last two paragraphs organized?",["problem and solution","in time order","compare and contrast","as a list of steps"],0,"Paragraph 3 gives the problem; paragraph 4 gives a solution.","reef"],
      ["What is the author's main purpose?",["to inform readers about reefs and why they need protecting","to tell a funny story","to sell fish","to describe a vacation"],0,"It's an informational article.","reef"]
    ]},
    { id:'grammar', name:'Grammar & Language', blurb:'Perfect tenses, conjunctions, commas', qs:[
      ["By the time we arrived, the movie ___ started.",["has","had","will have","have"],1,"Past perfect (had started) shows it happened before another past event."],
      ["I ___ lived here for five years.",["have","had","will","am"],0,"Present perfect: started in the past and still true."],
      ["By next June, she ___ finished fifth grade.",["has","had","will have","is"],2,"Future perfect: done before a future time."],
      ["Either you clean your room ___ you lose screen time.",["nor","or","but","so"],1,"Either goes with or."],
      ["Neither Sam ___ Ava wants to go.",["or","nor","and","but"],1,"Neither goes with nor."],
      ["Which word is the interjection? \"Wow! That was amazing.\"",["Wow","That","was","amazing"],0,"An interjection shows strong feeling."],
      ["I wanted to play outside, ___ it was raining.",["and","but","or","so"],1,"But shows contrast."],
      ["Which sentence uses a comma correctly?",["After dinner, we played games.","After, dinner we played games.","After dinner we, played games."],0,"Put a comma after an introductory phrase."],
      ["Which sentence uses a comma correctly?",["Sam, please close the door.","Sam please, close the door.","Sam please close, the door."],0,"Use a comma when talking directly to someone."],
      ["Which title should be in quotation marks instead of italics?",["the name of a song","the name of a book","the name of a movie"],0,"Short works like songs and poems go in quotation marks."],
      ["Fix the verb tense: \"Yesterday I walk to school and saw a dog.\"",["walked","walks","walking","will walk"],0,"Both actions happened yesterday: walked and saw."],
      ["Each of the students ___ a pencil.",["have","has","are having","were"],1,"Each is singular, so use has."],
      ["Which sentence is correct?",["Me and him went home.","He and I went home.","Him and I went home."],1,"Use subject pronouns: he and I."]
    ]},
    { id:'vocab', name:'Vocabulary & Figurative Language', blurb:'Roots, analogies, figurative language', qs:[
      ["Which is personification?",["The wind whispered through the trees.","The wind was strong.","It was windy today.","The tree is tall."],0,"Wind can't really whisper; it's given a human action."],
      ["Which is hyperbole (big exaggeration)?",["I'm hungry.","I'm so hungry I could eat a horse.","I ate a sandwich.","Lunch is at noon."],1,"Nobody could really eat a horse!"],
      ["Which is alliteration?",["Sally sells seashells.","The cat sat.","I like pie.","Run fast."],0,"Many words start with the same sound."],
      ["Hot is to cold as up is to ___.",["high","down","warm","over"],1,"They're opposites."],
      ["Pen is to write as knife is to ___.",["fork","sharp","cut","kitchen"],2,"A pen is used to write; a knife is used to cut."],
      ["Struct means \"build.\" Construction means…",["the act of building","breaking","a road","a tool"],0,"con + struct + ion = building something."],
      ["Spect means \"see.\" To inspect something is to…",["look at it closely","throw it away","build it","say it"],0,"in + spect = look into."],
      ["Dict means \"say\" and pre means \"before.\" To predict is to…",["say what will happen before it happens","say something again","not say","write a dictionary"],0,"pre + dict = say before."],
      ["Trans- means \"across.\" To transport is to…",["carry across from one place to another","stay still","destroy","grow"],0,"trans + port (carry)."],
      ["Geology is the study of…",["the Earth and rocks","stars","animals","numbers"],0,"geo = Earth, -ology = study of."],
      ["\"The sky was overcast, so we brought umbrellas.\" Overcast means…",["cloudy","bright","starry","clear"],0,"Bringing umbrellas is the clue."],
      ["Which word has the most positive feeling?",["cheap","stingy","thrifty"],2,"Thrifty means careful with money in a good way."],
      ["\"Hit the books\" means…",["study","punch a book","throw books","read fast"],0,"It's an idiom for studying."],
      ["\"He never studied, so failing the test seemed inevitable.\" Inevitable means…",["certain to happen","impossible","exciting","funny"],0,"Not studying made failing almost certain."]
    ]}
  ]
});

addSubject({ grade:'5', id:'math', name:'Math', icon:'🔢', color:'#e0702b',
  tests: [
    { id:'dec', name:'Decimals & Powers of 10', blurb:'Place value, rounding, decimal math', qs:[
      ["What is the value of the 4 in 3.045?",["4","0.4","0.04","0.004"],2,"The 4 is in the hundredths place."],
      ["10 × 3.6 = ?",["0.36","36","360","3.60"],1,"Multiplying by 10 moves digits one place left."],
      ["4.2 ÷ 10 = ?",["42","0.42","0.042","4.02"],1,"Dividing by 10 moves digits one place right."],
      ["10³ = ?",["30","100","1,000","10,000"],2,"10 × 10 × 10 = 1,000."],
      ["Round 6.478 to the nearest tenth.",["6.4","6.5","6.48","7"],1,"The hundredths digit is 7, so round up."],
      ["Which is greater?",["0.307","0.37"],1,"0.37 = 0.370, which is more than 0.307."],
      ["2.35 + 1.8 = ?",["2.53","4.15","3.15","4.33"],1,"Line up the decimal points: 2.35 + 1.80 = 4.15."],
      ["5 − 1.25 = ?",["3.75","4.75","3.25","4.25"],0,"5.00 − 1.25 = 3.75."],
      ["0.6 × 4 = ?",["0.24","2.4","24","0.64"],1,"6 × 4 = 24, with one decimal place: 2.4."],
      ["1.5 × 0.2 = ?",["3","0.3","0.03","1.7"],1,"15 × 2 = 30, with two decimal places: 0.30."],
      ["7.2 ÷ 3 = ?",["2.4","24","0.24","2.1"],0,"3 × 2.4 = 7.2."],
      ["Movie tickets cost $12.50 each. How much do 3 tickets cost?",["$36.50","$37.50","$37.00","$15.50"],1,"12.50 × 3 = 37.50."]
    ]},
    { id:'whole', name:'Multiplying, Dividing & Order of Operations', blurb:'Big multiplication, long division, expressions', qs:[
      ["324 × 26 = ?",["8,424","8,324","7,424","6,480"],0,"324 × 20 = 6,480 and 324 × 6 = 1,944. Together: 8,424."],
      ["1,050 × 12 = ?",["12,600","11,600","12,060","10,500"],0,"1,000 × 12 = 12,000 and 50 × 12 = 600."],
      ["2,016 ÷ 24 = ?",["84","74","94","82"],0,"24 × 84 = 2,016."],
      ["945 ÷ 15 = ?",["53","63","73","61"],1,"15 × 63 = 945."],
      ["1,200 ÷ 40 = ?",["3","30","300","120"],1,"120 ÷ 4 = 30."],
      ["3 + 4 × 2 = ?",["14","11","10","9"],1,"Multiply first: 4 × 2 = 8, then 3 + 8 = 11."],
      ["(8 − 3) × 2 = ?",["2","10","13","5"],1,"Parentheses first: 5 × 2 = 10."],
      ["2 × [5 + (6 ÷ 3)] = ?",["14","16","22","12"],0,"6 ÷ 3 = 2, then 5 + 2 = 7, then 2 × 7 = 14."],
      ["Which expression means \"add 7 and 3, then multiply by 5\"?",["7 + 3 × 5","(7 + 3) × 5","7 + (3 × 5)","5 × 7 + 3"],1,"Parentheses make you add first."],
      ["18 − 6 ÷ 3 = ?",["4","16","12","2"],1,"Divide first: 6 ÷ 3 = 2, then 18 − 2 = 16."]
    ]},
    { id:'frac', name:'Fractions', blurb:'Unlike denominators, multiplying, dividing', qs:[
      ["1/2 + 1/3 = ?",["2/5","5/6","2/6","1/6"],1,"3/6 + 2/6 = 5/6."],
      ["3/4 − 1/8 = ?",["2/4","5/8","1/2","2/8"],1,"6/8 − 1/8 = 5/8."],
      ["2 1/2 + 1 3/4 = ?",["3 4/6","4 1/4","3 3/4","4 1/2"],1,"2 2/4 + 1 3/4 = 3 5/4 = 4 1/4."],
      ["2/3 × 3/4 = ?",["1/2","5/7","6/7","2/4"],0,"Multiply tops and bottoms: 6/12 = 1/2."],
      ["1/2 × 6 = ?",["12","3","1/12","6/12"],1,"Half of 6 is 3."],
      ["What is 3/5 of 20?",["12","15","4","3"],0,"20 ÷ 5 = 4, and 4 × 3 = 12."],
      ["3 ÷ 1/2 = ?",["1 1/2","6","3/2","1/6"],1,"How many halves are in 3 wholes? 6."],
      ["1/4 ÷ 2 = ?",["1/2","1/8","2/4","8"],1,"Splitting a fourth into 2 parts makes eighths."],
      ["Write 12/18 in simplest form.",["2/3","6/9","4/6","3/4"],0,"Divide top and bottom by 6."],
      ["A recipe uses 3/4 cup of flour. How much flour for 2 batches?",["1 1/4 cups","1 1/2 cups","6/8 cup","3/8 cup"],1,"3/4 + 3/4 = 6/4 = 1 1/2."],
      ["Which product is greater than 7?",["7 × 3/4","7 × 1","7 × 5/4"],2,"Multiplying by a number greater than 1 makes it bigger."],
      ["6 friends share 4 pizzas equally. How much does each friend get?",["2/3 of a pizza","1 1/2 pizzas","3/2 of a pizza","1/6 of a pizza"],0,"4 ÷ 6 = 4/6 = 2/3."]
    ]},
    { id:'geo', name:'Volume, Graphing & Shapes', blurb:'Volume, coordinate plane, shapes, units', qs:[
      ["A box is 4 units long, 3 units wide, and 2 units tall. What is its volume?",["9 cubic units","24 cubic units","14 cubic units","20 cubic units"],1,"4 × 3 × 2 = 24."],
      ["A cube has sides of 5 cm. What is its volume?",["15 cm³","25 cm³","125 cm³","100 cm³"],2,"5 × 5 × 5 = 125."],
      ["Cubic units measure…",["volume","length","perimeter","temperature"],0,"Volume is the space inside a 3D shape."],
      ["To plot the point (3, 5), you start at 0 and move…",["right 3, then up 5","up 3, then right 5","left 3, then down 5"],0,"The first number is x (across), the second is y (up)."],
      ["Which point is on the x-axis?",["(4, 0)","(0, 4)","(4, 4)"],0,"Points on the x-axis have a y of 0."],
      ["What are the coordinates of the origin?",["(1, 1)","(0, 0)","(0, 1)","(10, 10)"],1,"The origin is where the axes cross."],
      ["A square is always a…",["rectangle","triangle","pentagon","circle"],0,"A square has four right angles, so it is a special rectangle."],
      ["A triangle with all three sides equal is…",["equilateral","isosceles only","scalene","right"],0,"Equi means equal."],
      ["A right triangle has…",["one 90° angle","three 90° angles","no angles","two 90° angles"],0,"Exactly one right angle."],
      ["3 meters = ? centimeters",["30","300","3,000","0.3"],1,"1 meter = 100 cm."],
      ["2.5 kilograms = ? grams",["25","250","2,500","25,000"],2,"1 kg = 1,000 g."],
      ["48 inches = ? feet",["3","4","6","12"],1,"48 ÷ 12 = 4."]
    ]}
  ]
});

addSubject({ grade:'5', id:'science', name:'Science', icon:'🔬', color:'#2e9d5b',
  tests: [
    { id:'matter', name:'Matter & Its Changes', blurb:'Particles, mixtures, chemical changes', qs:[
      ["All matter is made of…",["tiny particles too small to see","water","light","energy only"],0,"Everything is made of tiny particles."],
      ["In which state do particles move around the most freely?",["solid","liquid","gas"],2,"Gas particles spread out and move fast."],
      ["When salt dissolves completely in water, it makes a…",["solution","solid","gas","fossil"],0,"A solution is a mixture where one substance dissolves evenly in another."],
      ["What is the best way to separate sand from water?",["pour it through a filter","stir it","freeze it","shake it"],0,"The filter catches the sand and lets the water through."],
      ["100 grams of ice melts. How much does the water weigh?",["less than 100 g","100 g","more than 100 g"],1,"Mass stays the same when matter changes state."],
      ["Which is a chemical change (makes a new substance)?",["baking a cake","cutting paper","melting ice","tearing cloth"],0,"Baking changes the ingredients into something new."],
      ["Which is a physical change?",["rusting metal","burning wood","folding paper","baking bread"],2,"Folded paper is still paper."],
      ["Mixing baking soda and vinegar makes bubbles. This shows…",["a new substance (a gas) formed","nothing happened","the vinegar froze"],0,"Bubbles of a new gas show a chemical change."],
      ["Does air have mass?",["Yes, a ball full of air weighs more than an empty one.","No, air weighs nothing."],0,"Air is matter, so it has mass."],
      ["Which property could you use to pull iron filings out of sand?",["magnetism","color","smell","taste"],0,"Iron is attracted to magnets."]
    ]},
    { id:'eco', name:'Ecosystems & Food Webs', blurb:'Producers, consumers, decomposers', qs:[
      ["Which living things make their own food?",["producers, like plants","consumers, like foxes","decomposers, like mushrooms"],0,"Plants make food using sunlight."],
      ["Consumers get energy by…",["eating other living things","making food from sunlight","drinking only water"],0,"Animals are consumers."],
      ["Which are decomposers?",["fungi and bacteria","hawks and eagles","grass and trees"],0,"Decomposers break down dead plants and animals."],
      ["Where did the energy in your food originally come from?",["the sun","the soil","the refrigerator","water"],0,"Plants capture sunlight; animals eat plants or other animals."],
      ["A tree gets most of the material it needs to grow from…",["air and water","soil only","rocks"],0,"Plants build themselves mostly from carbon dioxide in the air and water."],
      ["In a food web, arrows point…",["from the food to the animal that eats it","from the eater to the food","randomly"],0,"Arrows show which way energy flows."],
      ["If all the snakes in a field disappeared, the number of mice would probably…",["go up","go down","stay exactly the same"],0,"Fewer predators means more mice survive."],
      ["An animal that eats only plants is an…",["herbivore","carnivore","omnivore","decomposer"],0,"Herbi- means plant."],
      ["An animal that eats both plants and animals is an…",["omnivore","herbivore","producer"],0,"Omni- means all."],
      ["How do decomposers help an ecosystem?",["They return nutrients to the soil.","They make sunlight.","They eat all the plants."],0,"Plants use those nutrients to grow."]
    ]},
    { id:'space', name:'Earth, Sun & Space', blurb:'Day and night, seasons, gravity, spheres', qs:[
      ["Why does the sun look bigger and brighter than other stars?",["It is much closer to Earth.","It is the biggest star.","It is the only star."],0,"The sun is a star, but much closer than any other."],
      ["What causes day and night?",["Earth spinning on its axis","Earth going around the sun","the moon blocking the sun"],0,"Earth rotates once about every 24 hours."],
      ["How long does it take Earth to travel around the sun?",["one day","one month","one year"],2,"One trip around the sun is about 365 days."],
      ["When are shadows shortest?",["around noon","early morning","late evening"],0,"The sun is highest in the sky around noon."],
      ["Gravity pulls objects…",["toward Earth's center","up into space","sideways"],0,"That's why things fall down."],
      ["Why do we see different constellations in different seasons?",["Earth moves around the sun, so we face different parts of space at night.","Stars move away.","The moon covers them."],0,"Our night sky view changes as Earth orbits."],
      ["Where is most of Earth's water?",["in the oceans","in rivers","in clouds","in glaciers"],0,"About 97% of Earth's water is salty ocean water."],
      ["The atmosphere is the…",["layer of air around Earth","rock layer","all living things","water on Earth"],0,"The other spheres are the geosphere, hydrosphere, and biosphere."],
      ["What causes the seasons?",["the tilt of Earth's axis","Earth getting closer to the sun","clouds"],0,"The tilt changes how directly sunlight hits us."],
      ["Why does the moon seem to change shape?",["We see different amounts of its sunlit side as it orbits Earth.","Clouds cover it.","Earth's shadow always covers it.","It actually changes shape."],0,"Those changes are called phases."]
    ]}
  ]
});

addSubject({ grade:'5', id:'social', name:'Social Studies', icon:'🌎', color:'#8a52c7',
  tests: [
    { id:'colonies', name:'Colonies & the Revolution', blurb:'Thirteen colonies to independence', qs:[
      ["How many original English colonies were there?",["10","13","15","50"],1,"The 13 colonies became the first states."],
      ["The New England colonies made money mostly from…",["fishing and shipbuilding","growing tobacco","gold mining"],0,"Rocky soil made farming hard, but the ocean was close."],
      ["The Southern colonies grew crops like…",["tobacco and rice on plantations","oranges only","nothing"],0,"Warm weather and long growing seasons helped."],
      ["What did colonists mean by \"No taxation without representation\"?",["They didn't want to pay taxes without a vote in Parliament.","They wanted higher taxes.","They wanted to join Britain's army."],0,"They had no say in Britain's government."],
      ["The Boston Tea Party (1773) was a protest against…",["a tax on tea","a tea shortage","a new king"],0,"Colonists dumped British tea into Boston Harbor."],
      ["Who wrote most of the Declaration of Independence?",["Thomas Jefferson","George Washington","Abraham Lincoln","Ben Franklin"],0,"Jefferson was the main writer."],
      ["When was the Declaration of Independence signed?",["1492","1607","1776","1865"],2,"July 4, 1776."],
      ["Who led the Continental Army?",["George Washington","King George III","Thomas Jefferson"],0,"Washington later became the first president."],
      ["Which country helped the colonists win the Revolution?",["France","Spain","China","Russia"],0,"France sent soldiers, ships, and money."],
      ["What happened at the end of the American Revolution (1783)?",["Britain recognized the United States as independent.","The colonies rejoined Britain.","France took over."],0,"The Treaty of Paris ended the war."]
    ]},
    { id:'nation', name:'A New Nation Grows', blurb:'The Constitution and moving west', qs:[
      ["What was the first plan of government, which turned out to be too weak?",["the Articles of Confederation","the Bill of Rights","the Mayflower Compact"],0,"It was replaced by the Constitution."],
      ["The Constitution begins with the words…",["\"We the People\"","\"Four score and seven years ago\"","\"I pledge allegiance\""],0,"The government gets its power from the people."],
      ["Who is called the \"Father of the Constitution\"?",["James Madison","John Adams","Paul Revere"],0,"Madison planned much of it."],
      ["The Louisiana Purchase (1803) bought land from…",["France","Spain","Britain","Mexico"],0,"It about doubled the size of the country."],
      ["Who helped guide Lewis and Clark on their journey?",["Sacagawea","Pocahontas","Sitting Bull"],0,"Sacagawea, a Shoshone woman, helped them travel and talk with tribes."],
      ["The Trail of Tears was…",["the forced removal of the Cherokee and other nations from their homelands","a hiking trail","a river"],0,"Thousands died on the forced march west."],
      ["Many families traveled west on the Oregon Trail in…",["covered wagons","trains","airplanes"],0,"The trip took months."],
      ["What brought thousands of people to California in 1849?",["the Gold Rush","the Oregon Trail","a war"],0,"Gold was discovered in 1848."],
      ["Why did many people move west?",["for land and new opportunities","to escape the ocean","because cities were full of gold"],0,"They hoped for farms and better lives."],
      ["The Bill of Rights was added to the Constitution to…",["protect people's freedoms","raise taxes","choose the president"],0,"Many states wanted rights written down."]
    ]},
    { id:'world', name:'Geography & Economics', blurb:'Maps, hemispheres, and markets', qs:[
      ["Which hemispheres is the United States in?",["Northern and Western","Southern and Eastern","Northern and Eastern","Southern and Western"],0,"It's north of the equator and west of the prime meridian."],
      ["Lines of longitude run…",["north to south, from pole to pole","east to west"],0,"They measure distance east or west."],
      ["How many continents are there?",["5","6","7","8"],2,"Africa, Antarctica, Asia, Australia, Europe, North America, South America."],
      ["Which is the largest ocean?",["Atlantic","Indian","Pacific","Arctic"],2,"The Pacific is the biggest and deepest."],
      ["In a free market, prices are mostly set by…",["supply and demand","the president","the weather"],0,"Buyers and sellers decide prices together."],
      ["If a new phone is very popular and stores run out, the price will probably…",["rise","fall","stay at zero"],0,"High demand with low supply raises prices."],
      ["Which is an example of a human resource?",["a teacher's skills","oil","a hammer","a river"],0,"Human resources are people's work and skills."],
      ["Goods a country sells to other countries are…",["exports","imports","taxes"],0,"Exports go out."],
      ["Why do countries trade?",["to get things they can't easily make themselves","because they have to","to lose money"],0,"Trade helps both sides get what they need."],
      ["Because of scarcity, people and countries must…",["make choices","stop working","print more money"],0,"There isn't enough of everything for everyone."]
    ]}
  ]
});
