// 4th grade. Format: [question, [options], correctIndex, why, passageKey or null, 'quiet' = don't read options aloud]
addSubject({ grade:'4', id:'reading', name:'Reading', icon:'📖', color:'#3d6fd8',
  passages: {
    tree: `<h3>The Treehouse Plan</h3><p>Marcus had been drawing plans for weeks. His treehouse would have a rope ladder, a lookout window, and a trapdoor. There was only one problem: the best tree on the block stood in Priya's yard.</p><p>"Absolutely not," Priya said when he asked. "That's my reading tree." She crossed her arms and turned back to her book.</p><p>Marcus stomped home, but that night he couldn't stop thinking about it. The next morning, he knocked on Priya's door holding a new drawing. This plan had something extra: a cozy corner with a bookshelf and a beanbag chair.</p><p>Priya studied the paper for a long time. "Who would be in charge of the bookshelf?" she asked.</p><p>"You would," said Marcus. "And I'd be in charge of the trapdoor."</p><p>By the end of summer, the treehouse was finished. Most afternoons, you could find Priya reading in her corner while Marcus kept watch from the lookout window.</p>`,
    volcano: `<h3>Volcanoes</h3><p>Deep beneath Earth's surface, it is hot enough to melt rock. This melted rock is called magma. Magma is lighter than the solid rock around it, so it slowly rises. Sometimes it collects in an underground pocket called a magma chamber.</p><p>When pressure in the chamber builds up, magma can push through cracks to the surface. Once magma reaches the surface, it is called lava. Some eruptions are explosive, blasting ash high into the sky. Others are gentle, with lava flowing slowly down the sides of the volcano.</p><p>Volcanoes can be dangerous, but they also help build new land. The Hawaiian Islands were formed by volcanoes over millions of years. Volcanic soil is also very rich, so farmers often grow crops near volcanoes.</p><p>Scientists called volcanologists study volcanoes. They measure earthquakes and gases to predict when a volcano might erupt, which helps keep people safe.</p>`
  },
  tests: [
    { id:'story', name:'Reading: Treehouse & Volcanoes', blurb:'A story and an article, 17 questions', qs:[
      ["What problem does Marcus have at the beginning?",["He can't draw.","The best tree is in Priya's yard.","He has no wood.","His parents said no."],1,"The first paragraph names the problem.","tree"],
      ["Why does Priya say no at first?",["She doesn't like Marcus.","It's her favorite reading spot.","The tree is too small.","She is moving away."],1,"She calls it her reading tree.","tree"],
      ["\"She crossed her arms and turned back to her book.\" This shows Priya is…",["excited to help","not willing to change her mind","scared of heights","confused"],1,"Crossed arms and turning away show she has made up her mind.","tree"],
      ["What did Marcus change in his new plan?",["He made it smaller.","He added a reading corner for Priya.","He picked a different tree.","He removed the trapdoor."],1,"The new plan had a cozy reading corner.","tree"],
      ["What does Marcus's new plan show about him?",["He gives up easily.","He thinks about what other people want.","He only cares about himself.","He is bad at drawing."],1,"He changed the plan so Priya would get something she loves.","tree"],
      ["What is the theme of the story?",["Treehouses are dangerous.","Thinking about others' needs can solve a problem.","Reading is boring.","Always build alone."],1,"Both kids got what they wanted by working together.","tree"],
      ["From what point of view is the story told?",["first person (I, me)","third person (he, she)","second person (you)"],1,"A narrator outside the story tells it using he and she.","tree"],
      ["In the story, \"studied the paper\" means Priya…",["did homework on it","looked at it carefully","tore it up","copied it"],1,"She took a long time looking it over.","tree"],
      ["What is magma?",["cooled lava","melted rock under the ground","volcanic ash","a type of crystal"],1,"Paragraph 1 defines magma.","volcano"],
      ["What is magma called once it reaches the surface?",["ash","lava","steam","rock"],1,"At the surface it's called lava.","volcano"],
      ["Why does magma rise?",["Wind pulls it up.","It is lighter than the solid rock around it.","The sun heats it.","Animals dig it up."],1,"Lighter material rises.","volcano"],
      ["What causes magma to push to the surface?",["Pressure builds up in the chamber.","It rains.","The ocean pushes it.","Earth stops spinning."],0,"Building pressure forces magma up through cracks.","volcano"],
      ["What is one way volcanoes help people?",["They make the air cooler.","They build new land and make rich soil.","They stop earthquakes.","They make rain."],1,"Paragraph 3 explains this.","volcano"],
      ["Which islands were formed by volcanoes?",["the Hawaiian Islands","the British Isles","Long Island","the Florida Keys"],0,"The article names the Hawaiian Islands.","volcano"],
      ["What does the word \"predict\" mean in the last paragraph?",["to stop something","to tell what will happen before it happens","to measure gas","to build"],1,"Scientists try to know about an eruption before it happens.","volcano"],
      ["Which sentence best states the main idea of the article?",["Hawaii is a nice place to visit.","Volcanoes form when magma rises, and they can be both dangerous and helpful.","Ash is gray.","Farmers grow crops."],1,"The main idea covers the whole article, not just one detail.","volcano"],
      ["How is \"Volcanoes\" different from \"The Treehouse Plan\"?",["It is fiction.","It gives facts to inform the reader.","It has a theme about friendship.","It is a poem."],1,"Nonfiction informs; the treehouse story is fiction.","volcano"]
    ]},
    { id:'grammar', name:'Grammar & Language', blurb:'Pronouns, verb tenses, commonly confused words', qs:[
      ["The girl ___ won the race is my cousin.",["who","which","whose","what"],0,"Use who for people."],
      ["The dog ___ tail is wagging is mine.",["who","whose","which","who's"],1,"Whose shows ownership."],
      ["Right now, I ___ my homework.",["am doing","did","will do","done"],0,"\"Right now\" needs the present progressive: am doing."],
      ["Yesterday at 5:00, we ___ dinner.",["are eating","were eating","will be eating","eats"],1,"An action happening at a past time uses the past progressive."],
      ["You ___ wear a helmet when you ride a bike. (It's a rule.)",["might","must","could","may"],1,"Must shows something is required."],
      ["Which words are the prepositional phrase? The cat hid under the bed.",["The cat","hid under","under the bed","cat hid"],2,"A prepositional phrase starts with a preposition (under) and ends with a noun (bed)."],
      ["Which is a sentence fragment?",["The dog barked.","Running down the hill.","We ate lunch.","She smiled."],1,"It doesn't tell who is running, so it's not a complete thought."],
      ["Which correctly fixes this run-on? I like soccer it is fun.",["I like soccer. It is fun.","I like, soccer it is fun.","I like soccer it, is fun."],0,"Split it into two complete sentences."],
      ["___ going to the park after school.",["Their","There","They're"],2,"They're = they are."],
      ["I want to come, ___!",["to","too","two"],1,"Too means also."],
      ["The bird flapped ___ wings.",["it's","its","its'"],1,"Its shows ownership. It's means it is."],
      ["Which sentence is punctuated correctly?",["\"Let's go,\" said Mom.","\"Let's go\" said Mom.","\"Let's go\", said Mom."],0,"The comma goes inside the quotation marks."],
      ["Which book title is capitalized correctly?",["The Cat In The Hat","The Cat in the Hat","the cat in the hat"],1,"Small words like in and the stay lowercase unless they come first."],
      ["Which is in the correct order?",["a red small ball","a small red ball","a ball small red"],1,"Size usually comes before color."]
    ]},
    { id:'vocab', name:'Vocabulary & Word Roots', blurb:'Greek and Latin roots, figurative language', qs:[
      ["Tele means \"far.\" What does a telescope help you do?",["see things that are far away","hear music","write fast","see tiny germs"],0,"tele (far) + scope (look) = look at faraway things."],
      ["Port means \"carry.\" Something portable can be…",["eaten","carried","painted","broken"],1,"A portable speaker is easy to carry."],
      ["Bio means \"life.\" Biology is the study of…",["rocks","living things","numbers","weather"],1,"bio (life) + logy (study of)."],
      ["Auto means \"self\" and graph means \"write.\" An autograph is…",["a person writing their own name","a type of car","a map","a drawing of a graph"],0,"It's your own written name."],
      ["Mis- means \"wrongly.\" To misspell is to…",["spell again","spell wrong","spell fast","not spell"],1,"mis + spell = spell wrongly."],
      ["Which is a simile?",["She is as fast as a cheetah.","She is a cheetah.","She runs fast.","The cheetah ran."],0,"A simile compares using like or as."],
      ["Which is a metaphor?",["The classroom was as loud as a zoo.","The classroom was a zoo.","The zoo had a classroom.","We went to the zoo."],1,"A metaphor says something IS something else."],
      ["The idiom \"a piece of cake\" means…",["something very easy","a dessert","something broken","a small part"],0,"\"The test was a piece of cake\" means it was easy."],
      ["\"It's raining cats and dogs\" means…",["pets are falling","it's raining very hard","it's sunny","animals are outside"],1,"It's an idiom for heavy rain."],
      ["The wind ___ the leaves across the yard.",["blue","blew"],1,"Blew is the past of blow. Blue is a color."],
      ["\"The hikers were exhausted after the ten-mile trek, so they collapsed onto the grass.\" Exhausted means…",["very tired","very happy","lost","hungry"],0,"Collapsing after ten miles is the clue."],
      ["Which word is an antonym of ancient?",["old","modern","huge","broken"],1,"Ancient means very old; modern means new."],
      ["Which word shows the STRONGEST feeling?",["annoyed","upset","furious"],2,"Furious means extremely angry."],
      ["-able means \"can be.\" Something readable…",["can be read","can't be read","was read","is a book"],0,"read + able = can be read."]
    ]}
  ]
});

addSubject({ grade:'4', id:'math', name:'Math', icon:'🔢', color:'#e0702b',
  tests: [
    { id:'place', name:'Big Numbers & Place Value', blurb:'Numbers to 1,000,000, rounding, adding', qs:[
      ["What is the value of the 6 in 462,035?",["6","600","6,000","60,000"],3,"The 6 is in the ten-thousands place."],
      ["Round 47,382 to the nearest thousand.",["47,000","48,000","47,400","50,000"],0,"The hundreds digit is 3, so round down."],
      ["Round 685,219 to the nearest hundred thousand.",["600,000","690,000","700,000","685,000"],2,"The ten-thousands digit is 8, so round up."],
      ["3,456 + 2,789 = ?",["5,135","6,245","6,145","5,245"],1,"Line up the places and carry: 6,245."],
      ["7,003 − 2,458 = ?",["4,545","5,455","4,655","5,545"],0,"Check it: 4,545 + 2,458 = 7,003."],
      ["52,390 − 18,745 = ?",["33,645","34,645","33,655","44,355"],0,"Check it: 33,645 + 18,745 = 52,390."],
      ["Which number is the greatest?",["405,210","450,120","445,999","405,999"],1,"Compare the ten-thousands: 5 is the biggest."],
      ["300,000 + 40,000 + 500 + 6 = ?",["345,600","340,506","304,506","340,560"],1,"3 hundred thousands, 4 ten thousands, 0 thousands, 5 hundreds, 0 tens, 6 ones."],
      ["How do you write twenty-three thousand, four hundred five?",["23,405","2,345","23,450","230,405"],0,"23 thousand, 4 hundred, 0 tens, 5 ones."],
      ["In 5,500, the 5 in the thousands place is how many times the 5 in the hundreds place?",["5","10","100","2"],1,"Each place is 10 times the place to its right."]
    ]},
    { id:'mult', name:'Multiplying & Factors', blurb:'Multi-digit multiplication, primes, multiples', qs:[
      ["34 × 6 = ?",["184","204","214","194"],1,"30 × 6 = 180 and 4 × 6 = 24. 180 + 24 = 204."],
      ["1,253 × 4 = ?",["4,012","5,012","5,102","4,812"],1,"1,000×4 + 200×4 + 50×4 + 3×4 = 4,000 + 800 + 200 + 12 = 5,012."],
      ["23 × 15 = ?",["345","335","245","355"],0,"23 × 10 = 230 and 23 × 5 = 115. 230 + 115 = 345."],
      ["46 × 32 = ?",["1,372","1,472","1,482","1,462"],1,"46 × 30 = 1,380 and 46 × 2 = 92. 1,380 + 92 = 1,472."],
      ["70 × 80 = ?",["560","5,600","56,000","150"],1,"7 × 8 = 56, then add the two zeros."],
      ["A store has 24 boxes with 36 crayons in each. How many crayons?",["764","864","854","60"],1,"24 × 36 = 864."],
      ["Which is the best estimate for 49 × 21?",["100","1,000","10,000","70"],1,"About 50 × 20 = 1,000."],
      ["Which list shows ALL the factors of 12?",["1, 2, 3, 4, 6, 12","2, 4, 6, 12","1, 12","12, 24, 36"],0,"1×12, 2×6, 3×4 all make 12."],
      ["Which number is prime (only factors are 1 and itself)?",["9","15","13","21"],2,"13 can only be made by 1 × 13."],
      ["Which number is composite (has more than 2 factors)?",["11","17","21","23"],2,"21 = 3 × 7."],
      ["Which is a multiple of 7?",["27","36","42","50"],2,"7 × 6 = 42."]
    ]},
    { id:'div', name:'Dividing & Remainders', blurb:'Long division and what to do with leftovers', qs:[
      ["84 ÷ 4 = ?",["21","24","20","22"],0,"80 ÷ 4 = 20 and 4 ÷ 4 = 1."],
      ["96 ÷ 8 = ?",["11","12","13","14"],1,"8 × 12 = 96."],
      ["432 ÷ 6 = ?",["62","72","82","70"],1,"6 × 72 = 432."],
      ["1,236 ÷ 3 = ?",["412","402","414","312"],0,"3 × 412 = 1,236."],
      ["3,600 ÷ 9 = ?",["40","400","4,000","360"],1,"36 ÷ 9 = 4, then add the two zeros."],
      ["29 ÷ 4 = ?",["7 R1","7 R2","6 R5","8 R1"],0,"4 × 7 = 28, with 1 left over."],
      ["50 ÷ 6 = ?",["8 R2","8 R1","7 R8","9 R2"],0,"6 × 8 = 48, with 2 left over."],
      ["75 students are going on a trip. Each bus holds 20. How many buses are needed?",["3","4","3 R15","5"],1,"3 buses only hold 60, so you need a 4th for the other 15."],
      ["58 cookies go into bags of 6. How many bags can be filled all the way?",["9","10","8","6"],0,"6 × 9 = 54, so 9 full bags with 4 left over."],
      ["Which division fact goes with 7 × 9 = 63?",["63 ÷ 9 = 7","63 ÷ 3 = 21","9 ÷ 7 = 63","63 − 9 = 54"],0,"They use the same three numbers."]
    ]},
    { id:'frac', name:'Fractions', blurb:'Equivalent, comparing, adding, mixed numbers', qs:[
      ["Which fraction is equal to 2/3?",["3/4","4/6","2/6","3/2"],1,"Multiply top and bottom by 2."],
      ["What is 6/8 in simplest form?",["3/4","2/3","6/8","1/2"],0,"Divide top and bottom by 2."],
      ["Which is greater?",["3/4","2/3"],0,"3/4 = 9/12 and 2/3 = 8/12."],
      ["Which fraction is greater than 1/2?",["3/8","2/6","5/8","1/4"],2,"4/8 is half, so 5/8 is more."],
      ["2/5 + 1/5 = ?",["3/10","3/5","2/5","1/5"],1,"Same bottoms: add the tops."],
      ["7/8 − 3/8 = ?",["4/8","4/0","10/8","4/16"],0,"Subtract the tops: 7 − 3 = 4. (4/8 is the same as 1/2.)"],
      ["Write 1 3/4 as an improper fraction.",["7/4","4/7","13/4","5/4"],0,"1 whole = 4/4, plus 3/4 = 7/4."],
      ["Write 11/4 as a mixed number.",["2 3/4","3 1/4","2 1/4","11 1/4"],0,"4 goes into 11 two times with 3 left: 2 3/4."],
      ["3 × 2/5 = ?",["6/15","6/5","2/15","5/6"],1,"Multiply the top by 3: 6/5."],
      ["2 1/3 + 1 1/3 = ?",["3 2/3","3 1/3","4 2/3","3 2/6"],0,"Add wholes (3) and thirds (2/3)."],
      ["Which list is in order from least to greatest?",["1/8, 1/2, 3/4","3/4, 1/2, 1/8","1/2, 1/8, 3/4"],0,"1/8 is smallest and 3/4 is biggest."]
    ]},
    { id:'dec', name:'Decimals', blurb:'Tenths, hundredths, and money', qs:[
      ["Write 0.7 as a fraction.",["7/100","7/10","70/10","1/7"],1,"0.7 is seven tenths."],
      ["Write 3/10 as a decimal.",["3.10","0.03","0.3","30"],2,"Three tenths = 0.3."],
      ["Write 45/100 as a decimal.",["4.5","0.45","0.045","45.0"],1,"Forty-five hundredths = 0.45."],
      ["Which is greater?",["0.5","0.45"],0,"0.5 = 0.50, which is more than 0.45."],
      ["Which is the greatest?",["0.09","0.9","0.19"],1,"0.9 = 0.90, the most hundredths."],
      ["0.6 is the same as…",["6/100","60/100","0.06","6.0"],1,"6 tenths = 60 hundredths."],
      ["4 tenths and 3 hundredths = ?",["0.43","4.3","0.34","43"],0,"Tenths go right after the decimal point, then hundredths."],
      ["$3.75 + $1.40 = ?",["$4.15","$5.15","$5.05","$4.55"],1,"Line up the decimal points: $5.15."],
      ["$2.50 − $0.75 = ?",["$1.75","$2.25","$1.25","$3.25"],0,"$2.50 − $0.50 = $2.00, then − $0.25 = $1.75."],
      ["Which decimal is equal to 1/4?",["0.14","0.4","0.25","1.4"],2,"1/4 = 25/100 = 0.25."]
    ]},
    { id:'geo', name:'Angles, Area & Measurement', blurb:'Angles, lines, area, conversions', qs:[
      ["An angle that is less than 90° is…",["acute","right","obtuse","straight"],0,"Acute angles are smaller than a square corner."],
      ["An angle that is exactly 90° is…",["acute","right","obtuse","straight"],1,"A right angle is a square corner."],
      ["An angle between 90° and 180° is…",["acute","right","obtuse","straight"],2,"Obtuse angles are wider than a square corner."],
      ["Lines that never cross are…",["perpendicular","parallel","intersecting","curved"],1,"Like railroad tracks."],
      ["Lines that cross to make square corners are…",["parallel","perpendicular","rays","segments"],1,"Perpendicular lines form right angles."],
      ["How many degrees are in a full turn?",["90°","180°","270°","360°"],3,"A full circle is 360°."],
      ["How many lines of symmetry does a square have?",["1","2","4","8"],2,"Up-down, side-to-side, and two diagonals."],
      ["A room is 8 feet by 6 feet. What is its area?",["14 sq ft","28 sq ft","48 sq ft","86 sq ft"],2,"8 × 6 = 48."],
      ["A room is 8 feet by 6 feet. What is its perimeter?",["14 ft","28 ft","48 ft","24 ft"],1,"8 + 6 + 8 + 6 = 28."],
      ["A rectangle has an area of 36 square inches. One side is 4 inches. How long is the other side?",["9 in","8 in","32 in","12 in"],0,"4 × 9 = 36."],
      ["3 feet = ? inches",["30","36","24","12"],1,"12 × 3 = 36."],
      ["5 kilograms = ? grams",["50","500","5,000","50,000"],2,"1 kg = 1,000 g."],
      ["How many quarts are in 2 gallons?",["4","6","8","16"],2,"4 quarts = 1 gallon, so 8 quarts = 2 gallons."]
    ]}
  ]
});

addSubject({ grade:'4', id:'science', name:'Science', icon:'🔬', color:'#2e9d5b',
  tests: [
    { id:'energy', name:'Energy & Electricity', blurb:'Forms of energy, circuits, resources', qs:[
      ["What kind of energy is stored in food and batteries?",["chemical energy","sound energy","light energy","wind energy"],0,"Food and batteries store chemical energy."],
      ["Which has the most motion energy?",["a parked car","a car going 60 mph","a car going 10 mph"],1,"Faster objects have more energy."],
      ["What does a light bulb in a circuit need to turn on?",["a closed (complete) circuit","an open circuit","no wires","water"],0,"Electricity flows only through a complete loop."],
      ["Which material lets electricity flow easily (a conductor)?",["rubber","copper wire","wood","plastic"],1,"Metals are good conductors."],
      ["Which material blocks electricity (an insulator)?",["rubber","aluminum foil","a steel nail","copper"],0,"That's why wires are covered in rubber or plastic."],
      ["A solar panel changes light energy into…",["sound","electrical energy","food","wind"],1,"Solar panels make electricity from sunlight."],
      ["When you rub your hands together, motion energy changes into…",["light","heat","sound only","chemical energy"],1,"Friction makes heat."],
      ["Which energy source is renewable (won't run out)?",["coal","oil","wind","natural gas"],2,"Wind keeps blowing; fossil fuels run out."],
      ["Which is a fossil fuel?",["sunlight","coal","wind","water"],1,"Coal formed from ancient plants over millions of years."],
      ["When a moving ball hits another ball, what happens to energy?",["It disappears.","Some moves to the other ball.","It turns into water.","It doubles."],1,"Energy transfers when objects collide."]
    ]},
    { id:'waves', name:'Light, Sound & Waves', blurb:'How we see and hear', qs:[
      ["Sound is made when something…",["vibrates","freezes","melts","glows"],0,"Vibrations travel as sound waves."],
      ["How do we see an object, like a book?",["Light reflects off it into our eyes.","Our eyes shoot out light.","The book makes light.","Sound bounces off it."],0,"Light bounces off objects and enters our eyes."],
      ["What does a mirror do to light?",["absorbs all of it","reflects it","makes it","bends it into colors"],1,"Mirrors bounce light back."],
      ["Light travels in…",["straight lines","circles","zigzags only"],0,"That's why shadows have sharp edges."],
      ["An echo is…",["reflected sound","reflected light","a type of wave in water","an animal"],0,"Sound bounces off a wall or cliff and comes back."],
      ["Which makes a higher-pitched sound?",["a short, tight rubber band","a long, loose rubber band"],0,"Faster vibrations make higher pitch."],
      ["What does a prism do to white light?",["makes it darker","splits it into colors","turns it into sound","stops it"],1,"White light is made of all the colors."],
      ["Which material is opaque (blocks all light)?",["clear glass","wax paper","a wooden board"],2,"Light can't pass through wood."],
      ["Ocean waves carry…",["energy","sand only","light"],0,"Waves move energy through the water."],
      ["Which part of the eye lets light in?",["the pupil","the eyelash","the eyebrow"],0,"The pupil is the dark opening in the middle of the eye."]
    ]},
    { id:'earth', name:'Earth\'s Changing Surface', blurb:'Weathering, erosion, fossils, earthquakes', qs:[
      ["Weathering is when…",["rock breaks into smaller pieces","it rains","rock melts","plants grow"],0,"Water, ice, wind, and roots break rock down."],
      ["Erosion is when…",["broken rock and soil are moved to a new place","rocks are born","volcanoes erupt","ice melts"],0,"Water, wind, and ice carry sediment away."],
      ["Deposition is when…",["moving water or wind drops sediment","rocks crack","a volcano forms"],0,"Sediment piles up where the water or wind slows down."],
      ["In layers of rock, which layer is usually the oldest?",["the top","the bottom","the middle"],1,"Layers pile up over time, so the bottom came first."],
      ["A fossil of a fish is found on a mountain. What does that tell you?",["Fish can climb.","The area was once covered by water.","Someone left it there.","Mountains make fish."],1,"Fossils show what an area was like long ago."],
      ["What causes most earthquakes?",["moving plates of Earth's crust","strong wind","heavy rain","the moon"],0,"Earth's crust is broken into plates that move."],
      ["What carved the Grand Canyon?",["a glacier","the Colorado River","an earthquake","a volcano"],1,"The river eroded rock over millions of years."],
      ["Glaciers change the land by…",["carving valleys as they slowly move","making volcanoes","growing trees"],0,"Glaciers scrape and carry rock."],
      ["How can people reduce damage from earthquakes?",["build stronger buildings","paint houses","plant flowers","turn off lights"],0,"Engineers design buildings that can sway without falling."],
      ["Plant roots growing into cracks in rock is an example of…",["weathering","deposition","melting","an earthquake"],0,"Roots slowly break the rock apart."]
    ]},
    { id:'body', name:'Plant & Animal Structures', blurb:'Body parts and how they help', qs:[
      ["What does the heart do?",["pumps blood through the body","helps you think","digests food","helps you see"],0,"The heart is a muscle that pumps blood."],
      ["What do lungs do?",["take in oxygen from the air","pump blood","break down food","hold up the body"],0,"Lungs bring oxygen into the body."],
      ["What does the brain do with information from the senses?",["processes it and decides what to do","stores food","pumps it","nothing"],0,"The brain takes in signals and sends messages."],
      ["How do fish get oxygen?",["with gills","with lungs","through their fins","they don't need it"],0,"Gills take oxygen from water."],
      ["What does a plant's stem do?",["carries water and food through the plant","makes seeds","takes in sunlight only"],0,"The stem moves water up and food around."],
      ["How do thorns help a rose bush?",["protect it from animals","help it drink","make it smell nice","help it make seeds"],0,"Thorns keep animals from eating it."],
      ["Why do many flowers have bright colors?",["to attract pollinators like bees","to scare animals","to stay warm"],0,"Pollinators help flowers make seeds."],
      ["Why do owls have very large eyes?",["to see well at night","to look scary","to swim","to smell"],0,"Big eyes gather more light in the dark."],
      ["What does the skeleton do?",["supports and protects the body","digests food","makes blood only"],0,"Bones hold you up and protect organs like the brain."],
      ["Which structure helps an eagle catch prey?",["sharp talons","soft feathers only","webbed feet"],0,"Talons grab and hold food."]
    ]}
  ]
});

addSubject({ grade:'4', id:'social', name:'Social Studies', icon:'🌎', color:'#8a52c7',
  tests: [
    { id:'regions', name:'U.S. Regions & Geography', blurb:'Regions, rivers, mountains', qs:[
      ["The United States is often divided into five regions. Which is one of them?",["the Midwest","the Far North","Central America","the Arctic"],0,"The five are the Northeast, Southeast, Midwest, Southwest, and West."],
      ["Pennsylvania is in which region?",["the Northeast","the Southwest","the West","the Southeast"],0,"Pennsylvania is a Northeast state."],
      ["Which large river flows from Minnesota all the way to the Gulf of Mexico?",["the Mississippi River","the Hudson River","the Colorado River","the Ohio River"],0,"The Mississippi runs down the middle of the country."],
      ["Which mountains are in the western United States?",["the Rocky Mountains","the Appalachian Mountains","the Alps"],0,"The Rockies stretch through the West."],
      ["Which mountains run through Pennsylvania?",["the Appalachian Mountains","the Rocky Mountains","the Andes"],0,"The Appalachians are in the East."],
      ["How many Great Lakes are there?",["3","5","7","10"],1,"Huron, Ontario, Michigan, Erie, and Superior (HOMES)."],
      ["What is the capital of the United States?",["New York City","Philadelphia","Washington, D.C.","Boston"],2,"Washington, D.C. is the nation's capital."],
      ["Which region has large deserts, like in Arizona?",["the Southwest","the Northeast","the Midwest"],0,"The Southwest is hot and dry."],
      ["The Midwest is known for…",["large farms growing corn and wheat","deserts","tropical beaches"],0,"Its flat, rich land is great for farming."],
      ["Lines of latitude run…",["east and west, around the globe","north and south, pole to pole"],0,"Latitude lines are like the rungs of a ladder."]
    ]},
    { id:'gov', name:'How Our Government Works', blurb:'Three branches, Constitution, rights', qs:[
      ["How many branches does the U.S. government have?",["2","3","4","5"],1,"Legislative, executive, and judicial."],
      ["Which branch makes laws?",["legislative (Congress)","executive (President)","judicial (courts)"],0,"Congress writes and passes laws."],
      ["Which branch carries out laws?",["legislative","executive","judicial"],1,"The President leads the executive branch."],
      ["Which branch decides if laws follow the Constitution?",["legislative","executive","judicial"],2,"The Supreme Court leads the judicial branch."],
      ["Congress has two parts. What are they?",["the Senate and the House of Representatives","the President and the Vice President","the Supreme Court and the Senate"],0,"Together they make laws."],
      ["What are the first 10 amendments to the Constitution called?",["the Bill of Rights","the Declaration of Independence","the Preamble"],0,"They protect people's basic rights."],
      ["Freedom of speech is protected by which amendment?",["the First Amendment","the Tenth Amendment","the Fifth Amendment"],0,"The First Amendment protects speech, religion, press, and more."],
      ["Why does the government have checks and balances?",["so no branch gets too powerful","to save money","so the President can make all the laws"],0,"Each branch can limit the others."],
      ["In what city was the Constitution written in 1787?",["Philadelphia","Boston","Washington, D.C.","New York City"],0,"It was written at Independence Hall in Philadelphia."],
      ["How old must citizens be to vote for president?",["16","18","21","25"],1,"Citizens can vote at 18."]
    ]},
    { id:'history', name:'Native Peoples & Early America', blurb:'First peoples, explorers, and colonies', qs:[
      ["Which Native American people lived in the area that is now Pennsylvania?",["the Lenape (Delaware)","the Navajo","the Cherokee","the Inuit"],0,"The Lenape lived along the Delaware River."],
      ["Many Plains peoples depended on which animal for food, clothing, and shelter?",["bison (buffalo)","salmon","alligators","penguins"],0,"Bison provided almost everything they needed."],
      ["Peoples of the Pacific Northwest were known for…",["carving totem poles and fishing for salmon","farming in the desert","hunting bison"],0,"The rivers were full of salmon."],
      ["The Iroquois Confederacy was…",["a group of nations that joined together","a ship","a type of crop","a city in Spain"],0,"Several nations united to keep peace and make decisions."],
      ["In 1492, Christopher Columbus sailed for which country?",["England","Spain","France","Portugal"],1,"He sailed with three ships paid for by Spain."],
      ["What was the first permanent English settlement in America (1607)?",["Plymouth","Jamestown","Philadelphia","Boston"],1,"Jamestown was in Virginia."],
      ["The Pilgrims sailed to Plymouth in 1620 on the…",["Mayflower","Titanic","Santa María","Half Moon"],0,"The Mayflower carried about 100 passengers."],
      ["Who founded the colony of Pennsylvania?",["William Penn","George Washington","Ben Franklin","John Smith"],0,"Penn wanted a place with religious freedom."],
      ["Lewis and Clark explored…",["the land of the Louisiana Purchase","Antarctica","Europe","the moon"],0,"They traveled west all the way to the Pacific."],
      ["Why did many European explorers sail west?",["to find new trade routes and riches","to go on vacation","to visit friends"],0,"They hoped to find faster routes to Asia and new wealth."]
    ]},
    { id:'econ', name:'Money & Economics', blurb:'Supply, demand, and choices', qs:[
      ["If lots of people want a toy but there are only a few, the price will probably…",["go up","go down","stay at zero"],0,"High demand and low supply raise prices."],
      ["Someone who starts their own business is called an…",["entrepreneur","employee","explorer","engineer"],0,"Entrepreneurs take a risk to start something new."],
      ["You choose soccer instead of art class. What you gave up (art) is your…",["opportunity cost","profit","tax","income"],0,"Opportunity cost is the next-best choice you gave up."],
      ["Money you earn from a job is called…",["income","a budget","a tax","a loan"],0,"Income is money coming in."],
      ["A plan for how to spend and save money is a…",["budget","bank","receipt","coin"],0,"Budgets help you plan."],
      ["When you keep money in a savings account, the bank may pay you…",["interest","taxes","rent","nothing ever"],0,"Interest is extra money for saving."],
      ["Goods brought INTO a country from another country are…",["imports","exports","taxes","services"],0,"Imports come in; exports go out."],
      ["Workers who each do one part of a job are using…",["specialization","bartering","saving","voting"],0,"Specializing helps make things faster."],
      ["Which is a capital resource (a tool used to make goods)?",["a tractor","a tree","a farmer","rain"],0,"Capital resources are things people made to help produce goods."],
      ["Scarcity means…",["there isn't enough of something for everyone who wants it","there is too much","everything is free"],0,"Scarcity forces people to make choices."]
    ]}
  ]
});
