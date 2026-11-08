// Science. Format: [question, [options], correctIndex, why]
addSubject({ grade: '3',
  id: 'science', name: 'Science', icon: '🔬', color: '#2e9d5b',
  tests: [
    { id:'life', name:'Life Cycles & Traits', blurb:'How living things grow and change', qs:[
      ["What is the correct order of a butterfly's life cycle?",["egg → caterpillar → chrysalis → butterfly","caterpillar → egg → butterfly → chrysalis","butterfly → chrysalis → egg → caterpillar","egg → butterfly → caterpillar → chrysalis"],0,"It starts as an egg, hatches into a caterpillar, makes a chrysalis, then comes out as a butterfly."],
      ["What hatches from a frog egg?",["a baby frog","a tadpole","a fish","a caterpillar"],1,"A tadpole hatches first, then grows legs and becomes a frog."],
      ["What does a seed grow into first?",["a flower","a seedling","a tree","a fruit"],1,"A seed sprouts into a small seedling."],
      ["Which of these is NOT a living thing?",["a tree","a rock","a mushroom","a worm"],1,"A rock does not grow, eat, or make babies."],
      ["Which trait do animals get from their parents?",["the color of their fur","a scar from a fall","knowing a trick","their name"],0,"Fur color is passed down from parents. The others are not."],
      ["Which is a LEARNED skill, not a trait you are born with?",["eye color","riding a bike","hair color","how tall you can grow"],1,"You have to learn how to ride a bike."],
      ["Why can puppies from the same litter look different?",["They eat different food.","Each gets a different mix of traits from its parents.","They were born on different days.","They live in different houses."],1,"Each puppy gets its own mix of traits from mom and dad."],
      ["How does living in a pack help wolves?",["They can hunt larger animals together.","They grow faster.","They don't need to eat.","They can fly."],0,"Working together helps them hunt and stay safe."],
      ["What can a fossil tell us?",["what tomorrow's weather will be","about plants and animals that lived long ago","how old you are","what time it is"],1,"Fossils are remains or prints of living things from long ago."],
      ["How does camouflage help an animal?",["It helps it fly.","It helps it hide by blending in.","It keeps it warm.","It helps it swim fast."],1,"Blending in keeps it hidden from enemies or prey."]
    ]},
    { id:'habitats', name:'Plants, Animals & Habitats', blurb:'Where living things live and what they need', qs:[
      ["What do plants use to make their own food?",["sunlight, water, and air","candy and milk","rocks and sand","only soil"],0,"Plants use sunlight, water, and air to make food in their leaves."],
      ["What job do roots do?",["make seeds","take in water from the soil","catch sunlight","make flowers"],1,"Roots hold the plant and soak up water."],
      ["Where does a plant make most of its food?",["roots","stem","leaves","flowers"],2,"Leaves catch sunlight to make food."],
      ["What is a habitat?",["a kind of food","the place where an animal lives and gets what it needs","a type of weather","a baby animal"],1,"A habitat gives an animal food, water, and shelter."],
      ["How does thick fur help a polar bear?",["It keeps it warm in the cold Arctic.","It helps it climb trees.","It keeps it cool in the desert.","It helps it hide in the jungle."],0,"Thick fur is an adaptation for very cold places."],
      ["Where would a cactus that stores water grow best?",["a rainforest","a desert","a pond","the Arctic"],1,"Deserts are dry, so storing water helps the cactus survive."],
      ["How do webbed feet help a duck?",["They help it swim.","They help it dig.","They help it climb.","They keep it warm."],0,"Webbed feet push water like paddles."],
      ["In this food chain, what does the rabbit eat? Sun → grass → rabbit → fox",["the sun","grass","the fox","nothing"],1,"Each arrow points to who eats it. The rabbit eats grass."],
      ["What happens to the fish if a pond dries up?",["They grow legs.","Most cannot survive.","They fly away.","Nothing happens."],1,"Fish need water to live."],
      ["Mushrooms and worms that break down dead plants are called…",["producers","decomposers","predators","herbivores"],1,"Decomposers break down dead things and put nutrients back in the soil."]
    ]},
    { id:'weather', name:'Weather & Climate', blurb:'Tools, the water cycle, and seasons', qs:[
      ["What tool measures temperature?",["ruler","thermometer","scale","clock"],1,"A thermometer shows how hot or cold it is."],
      ["What tool measures how much rain fell?",["rain gauge","thermometer","wind vane","magnifying glass"],0,"A rain gauge collects and measures rain."],
      ["What tool shows which way the wind is blowing?",["thermometer","rain gauge","wind vane","balance"],2,"A wind vane points to show wind direction."],
      ["What is the difference between weather and climate?",["They mean the same thing.","Weather is today; climate is the usual weather in a place over many years.","Climate is today; weather is over many years.","Weather is only rain."],1,"Climate is the pattern of weather over a long time."],
      ["When water is heated and turns into vapor (a gas), it is called…",["freezing","melting","evaporation","condensation"],2,"Evaporation turns liquid water into water vapor."],
      ["How do clouds form?",["Water vapor cools and turns into tiny drops.","The sun makes them.","Wind blows dirt into the sky.","Airplanes make them."],0,"This is called condensation."],
      ["Which of these is precipitation?",["fog on a window","snow","wind","sunshine"],1,"Precipitation is water falling from clouds: rain, snow, sleet, or hail."],
      ["Which season is usually the hottest in most of the United States?",["winter","spring","summer","fall"],2,"Summer is usually the hottest season."],
      ["Which would help protect a town from flooding?",["building walls (levees) along a river","cutting down all the trees","painting houses","turning off lights"],0,"Levees help keep river water from flooding the town."],
      ["A scientist who studies and predicts weather is called a…",["meteorologist","dentist","chef","pilot"],0,"Meteorologists study the weather."]
    ]},
    { id:'forces', name:'Forces, Motion & Magnets', blurb:'Pushes, pulls, and magnets', qs:[
      ["A push or a pull is called a…",["force","magnet","machine","shadow"],0,"Any push or pull is a force."],
      ["In tug-of-war, both teams pull equally hard. What happens to the rope?",["It moves left.","It moves right.","It stays still.","It breaks."],2,"Equal (balanced) forces mean no change in motion."],
      ["If one team pulls harder, what happens?",["The rope stays still.","The rope moves toward the stronger team.","The rope moves toward the weaker team.","Nothing."],1,"Unbalanced forces make things move."],
      ["Which object will a magnet pick up?",["a steel paper clip","a wooden block","a plastic spoon","a paper cup"],0,"Magnets attract iron and steel."],
      ["What happens when you put the north end of one magnet near the north end of another?",["They pull together.","They push apart.","Nothing happens.","They melt."],1,"Same poles repel, or push apart."],
      ["What happens when you put a north end near a south end?",["They push apart.","They pull together.","They spin.","Nothing happens."],1,"Opposite poles attract, or pull together."],
      ["Can a magnet pull a paper clip through a sheet of paper?",["Yes","No"],0,"Magnetic force can pass through thin things like paper."],
      ["What force pulls things down toward Earth?",["friction","gravity","magnetism","wind"],1,"Gravity pulls everything toward the ground."],
      ["Why does a ball rolling on grass slow down and stop?",["gravity pushes it up","friction from the grass","magnetism","it gets tired"],1,"Friction slows moving things."],
      ["If you kick a ball harder, it will usually…",["go a shorter distance","go farther","stop right away","go backward"],1,"A bigger force makes a bigger change in motion."]
    ]},
    { id:'matter', name:'Matter & Energy', blurb:'Solids, liquids, gases, and heat', qs:[
      ["Which is a solid?",["milk","a rock","steam","juice"],1,"A solid keeps its own shape."],
      ["Which is a liquid?",["ice","water","a book","air"],1,"A liquid flows and takes the shape of its container."],
      ["Which is a gas?",["the air in a balloon","a pencil","orange juice","a brick"],0,"A gas spreads out to fill its container."],
      ["What happens when ice is heated?",["It melts into water.","It turns into a rock.","It gets bigger and harder.","Nothing."],0,"Heat melts solid ice into liquid water."],
      ["What happens when water is put in a freezer?",["It evaporates.","It freezes into ice.","It turns into steam.","It disappears."],1,"Cold freezes liquid water into solid ice."],
      ["Which gives Earth light and heat?",["the Moon","the Sun","clouds","the ocean"],1,"The Sun gives us light and heat."],
      ["Which material lets electricity flow through it best?",["rubber","wood","copper metal","plastic"],2,"Metals like copper conduct electricity."],
      ["Why do we wear a coat in winter?",["to keep heat in our body","to get colder","to look taller","to stay wet"],0,"Coats trap our body heat."],
      ["Rubbing your hands together fast makes them…",["colder","warmer","wet","sticky"],1,"Friction makes heat."],
      ["Which would you use to describe how an object feels?",["texture","color","smell","sound"],0,"Texture is how something feels, like rough or smooth."]
    ]}
  ]
});
