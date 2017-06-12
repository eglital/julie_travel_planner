const locationsExample = {
  food: [
    {
      name: 'Revival Food Hall',
      address: '125 S Clark St',
      lat: 41.8797704672721,
      long: -87.63060092926025,
      category: 'Food Court',
      tip: "The chef-driven food hall has a kiosk where Mindy Segal's staff serve her famous hot chocolate that includes the all-important homemade marshmallows. Get it to go.",
      isOpen: true,
      hours: 'Open until 7:00 PM'
    },
    {
      name: 'Garrett Popcorn Shops',
      address: '27 W Jackson Blvd',
      lat: 41.87816283895944,
      long: -87.62890752059629,
      category: 'Snack Place',
      tip: "Something strange happens when you mix the CaramelCrisp® and CheeseCorn™ together evenly - Garrett's dubs this the Chicago Mix, and it's a huge seller because it's salty and sweet.",
      isOpen: true,
      hours: 'Open until 8:00 PM'
    },
    {
      name: 'Cafecito',
      address: '26 E Congress Pkwy',
      lat: 41.87574423890672,
      long: -87.6264445685823,
      category: 'Cuban Restaurant',
      tip: 'Wifi pass is cubano01',
      isOpen: true,
      hours: 'Open until 9:00 PM'
    },
    {
      name: "Cindy's",
      address: '12 S Michigan Ave',
      lat: 41.881693802109076,
      long: -87.62455509077787,
      category: 'Gastropub',
      tip: 'Cindy’s at the CAA is open till the wee hours all week, and it has wild-Michigan-blueberry tarts topped with vanilla crème fraîche and almond streusel.',
      isOpen: false,
      hours: 'Closed until 3:00 PM'
    },
    {
      name: 'Native Foods',
      address: '218 South Clark',
      lat: 41.87883442,
      long: -87.63058332,
      category: 'Vegetarian / Vegan Restaurant',
      tip: 'Monday is double points day for your reward card',
      isOpen: true,
      hours: 'Open until 9:00 PM'
    },
    {
      name: 'Do-Rite Donuts & Coffee',
      address: '50 W Randolph St',
      lat: 41.88441568651257,
      long: -87.62990519528252,
      category: 'Donut Shop',
      tip: "Pistachio-Meyer Lemon Doughnut: a bright, citrus glaze holds the toasted pistachios perfectly in place, but isn't too sweet as to overwhelm the actual taste of the old-fashioned doughnut itself.",
      isOpen: false,
      hours: 'Closed until 6:30 AM tomorrow'
    },
    {
      name: "Nando's Peri-Peri",
      address: '22 S Wabash Ave',
      lat: 41.88134800924981,
      long: -87.62607342732032,
      category: 'African Restaurant',
      tip: 'The grilled chicken was fantastic with side of fries and coleslaw, try the many dipping sauces. Good, healthy food.',
      photo: 'https://igx.4sqi.net/img/general/original/19253330_eX2RQOn1A-sBzKm1d80OPBpfCwV8P0Hb1WqQy3eE1iY.jpg',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'The Gage',
      address: '24 S Michigan Ave',
      lat: 41.88131924185583,
      long: -87.6246421465911,
      category: 'Gastropub',
      tip: 'Try the Regular burger  - maybe the best burger in the city.',
      isOpen: true,
      hours: 'Open until Midnight'
    },
    {
      name: 'The Dearborn',
      address: '108 N State St',
      lat: 41.884437507952946,
      long: -87.6294714263561,
      category: 'Gastropub',
      tip: 'The portions here are massive! Highly recommend the pastrami hash and if you have a sweet tooth, the giant cinnamon roll.',
      photo: 'https://igx.4sqi.net/img/general/original/53301909_P00VWeHKjnq2EjzPReUMGJ-XVYnvXkiaNAAPA3gSAA4.jpg',
      isOpen: true,
      hours: 'Open until 10:30 PM'
    },
    {
      name: 'Cafecito',
      address: '7 N Wells St',
      lat: 41.882248670138814,
      long: -87.63384748407303,
      category: 'Cuban Restaurant',
      tip: 'The Cafe con Leche is amazing, a large is $2.52.  Much better coffee and so much cheaper than that other coffee place. :)',
      isOpen: true,
      hours: 'Open until 6:00 PM'
    },
    {
      name: 'Wildberry Pancakes & Cafe',
      address: '130 E Randolph St',
      lat: 41.88459910689705,
      long: -87.62320339679718,
      category: 'Breakfast Spot',
      tip: "If you don't get some pancakes, I will punch you in the face.",
      isOpen: true,
      hours: 'Open until 2:30 PM'
    },
    {
      name: 'Cherry Circle Room',
      address: '12 S Michigan Ave',
      lat: 41.88195900649664,
      long: -87.62484430162644,
      category: 'American Restaurant',
      tip: "Waitstaff doesn't have time for your dad jokes.",
      isOpen: true,
      hours: 'Open until 2:30 PM, reopens later'
    },
    {
      name: 'Toni Patisserie & Café',
      address: '65 E Washington St',
      lat: 41.88316734011368,
      long: -87.62543877172408,
      category: 'Bakery',
      tip: 'This right off Michigan Ave. gem has so much to offer from extravagant pastries to delicious sandwiches. Perfect spot to take a break from shopping and a must try for any foodie or coffee lover.',
      isOpen: true,
      hours: 'Open until 8:00 PM'
    },
    {
      name: 'UB Dogs',
      address: '185 N Franklin St',
      lat: 41.88540983525773,
      long: -87.63521432876587,
      category: 'Hot Dog Joint',
      tip: 'Food is awesome!!!',
      isOpen: true,
      hours: 'Open until 4:00 PM'
    },
    {
      name: "Lou Malnati's Pizzeria",
      address: '805 S State St',
      lat: 41.87155265110659,
      long: -87.62746639648644,
      category: 'Pizza Place',
      tip: 'Great place for Deep dish.  Pre-order if you are going to eat in.  Get the butter crust.',
      isOpen: true,
      hours: 'Open until 11:00 PM'
    },
    {
      name: 'Blaze Pizza',
      address: '24 S Clinton St',
      lat: 41.88109539680838,
      long: -87.64137929768023,
      category: 'Pizza Place',
      tip: 'The Chipotle of personal pizza. Very tasty considering the speed with which it is made!',
      isOpen: true,
      hours: 'Open until 8:00 PM'
    },
    {
      name: 'Firecakes Donuts',
      address: '68 W Hubbard St',
      lat: 41.89000907393167,
      long: -87.63066187122017,
      category: 'Donut Shop',
      tip: "Firecakes' donut ice cream sandwich is held together with chocolate espresso or vanilla bean gelato, and adorned with rich chocolate, caramel sauces, and cocoa nibs. Hell to the yes.",
      photo: 'https://igx.4sqi.net/img/general/original/268135_D8hVqV0FalsrzFWErwVKU_b_PVGZbhkJA-QTGzC9ask.png',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Avec',
      address: '615 W Randolph St',
      lat: 41.88449042863341,
      long: -87.64339817157251,
      category: 'New American Restaurant',
      tip: 'avec, a wine bar from the award-winning team behind Blackbird restaurant, opened in October 2003.',
      isOpen: false,
      hours: 'Closed until 3:30 PM'
    },
    {
      name: 'Eleven City Diner',
      address: '1112 S Wabash Ave',
      lat: 41.868634249471725,
      long: -87.62577458411407,
      category: 'Diner',
      tip: 'Unlock our special!!!!!!!',
      isOpen: true,
      hours: 'Open until 9:00 PM'
    },
    {
      name: "Shaw's Crab House",
      address: '21 E Hubbard St',
      lat: 41.89003205068848,
      long: -87.62710008344948,
      category: 'Seafood Restaurant',
      tip: 'Lobster rolls are a must!',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Garrett Popcorn Shops - Citigroup Center',
      address: '500 W Madison St Fl 2',
      lat: 41.88222197589005,
      long: -87.64060834376093,
      category: 'Snack Place',
      tip: 'Get the Chicago Mix',
      isOpen: true,
      hours: 'Open until 8:00 PM'
    },
    {
      name: "Bavette's Bar and Boeuf",
      address: '218 W Kinzie St',
      lat: 41.889193396375326,
      long: -87.63472457296976,
      category: 'Steakhouse',
      tip: 'The wine cellar is stocked with Old World vintages, while the signature cocktails start with powerful brown spirits.',
      isOpen: false,
      hours: 'Closed until 5:00 PM'
    },
    {
      name: 'Grace',
      address: '652 W Randolph St',
      lat: 41.88444826161645,
      long: -87.64489660974124,
      category: 'New American Restaurant',
      tip: '4 of 4 stars. "So good, the $400 one spends for dinner here (based on the $185 tasting menu, wine pairing, tax and tip; your mileage may vary) seems like a sensible investment." -- Phil Vettel',
      isOpen: false,
      hours: 'Closed until 5:30 PM tomorrow'
    },
    {
      name: 'Nonnina',
      address: '340 N Clark St',
      lat: 41.888840169008816,
      long: -87.63082573569623,
      category: 'Italian Restaurant',
      tip: 'Italian sandwich was great',
      isOpen: true,
      hours: 'Open until 10:30 PM'
    },
    {
      name: 'Sunda',
      address: '110 W Illinois St',
      lat: 41.89080910359245,
      long: -87.63171672821045,
      category: 'Sushi Restaurant',
      tip: 'Pad Thai is excellent !',
      isOpen: true,
      hours: 'Open until 3:00 PM, reopens later'
    },
    {
      name: 'RPM Italian',
      address: '52 W Illinois St',
      lat: 41.89097981495487,
      long: -87.62971240960132,
      category: 'Italian Restaurant',
      tip: 'Did someone say Tartufo? Hazelnut gelato with a chocolate shell.',
      isOpen: true,
      hours: 'Open until 9:30 PM'
    },
    {
      name: 'The Purple Pig',
      address: '500 N Michigan Ave',
      lat: 41.890826159768324,
      long: -87.62475753856398,
      category: 'Mediterranean Restaurant',
      tip: 'Thought you’d want to know: Purple Pig has been nominated for Best New Patio and Scott Harris has been nominated for Restaurateur of the Year in Time Out Chicago’s 2011 Eat Out Awards. Vote now!',
      isOpen: true,
      hours: 'Open until Midnight'
    },
    {
      name: "Joe's Seafood, Prime Steak & Stone Crab",
      address: '60 E Grand Ave',
      lat: 41.8918586261065,
      long: -87.62552393991848,
      category: 'Seafood Restaurant',
      tip: 'The crab cakes might as well be your sins because they are to die for.',
      isOpen: true,
      hours: 'Open until 11:00 PM'
    },
    {
      name: 'Xoco',
      address: '449 N Clark St',
      lat: 41.890850435336525,
      long: -87.63078717940178,
      category: 'Mexican Restaurant',
      tip: 'Delicious. Go with friends, order a bunch of different things and share so you can try more stuff.',
      isOpen: false,
      hours: 'Closed until 8:00 AM tomorrow'
    },
    {
      name: 'The Doughnut Vault',
      address: '111 N Canal St',
      lat: 41.8839693769242,
      long: -87.63964463305578,
      category: 'Donut Shop',
      tip: "You can only get cake doughnuts, by they're still good. Metropolis Coffee is very good. Staff is the bees knees. Oh how I wish they had raised doughnuts here, though!",
      isOpen: true,
      hours: 'Open until 3:00 PM'
    },
    {
      name: "Hannah's Bretzel",
      address: '400 N La Salle Dr',
      lat: 41.8896909493925,
      long: -87.63292908668518,
      category: 'Sandwich Place',
      tip: 'Sergio Special is the way to go! Delish!!!',
      isOpen: true,
      hours: 'Open until 7:00 PM'
    },
    {
      name: 'Frontera Grill',
      address: '445 N Clark St',
      lat: 41.89051958340065,
      long: -87.63090670108795,
      category: 'Mexican Restaurant',
      tip: 'This brunch from celeb chef Rick Bayless is not to be missed—too bad it’s served only on Saturdays. Be sure to check out the huevos “Fronterizos” with sausage and biscuits.',
      isOpen: false,
      hours: 'Closed until 11:30 AM tomorrow'
    },
    {
      name: 'Siena Tavern',
      address: '51 W Kinzie St',
      lat: 41.88916849472129,
      long: -87.629683491679,
      category: 'Italian Restaurant',
      tip: 'Best tiramisu ever!!',
      photo: 'https://igx.4sqi.net/img/general/original/65641358_A7hZspBEIPTlj19fxrZkUCYW-2YrzMiI7-Ui0efixyU.jpg',
      isOpen: true,
      hours: 'Open until 2:00 AM'
    },
    {
      name: 'Beatrix',
      address: '519 N Clark St',
      lat: 41.89130697608296,
      long: -87.63100405813482,
      category: 'New American Restaurant',
      tip: 'The caramel pie at Beatrix is one of the 100 best things we ate this year. http://tmout.us/rLOtk',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Au Cheval',
      address: '800 W Randolph St',
      lat: 41.88451860120726,
      long: -87.64742601594278,
      category: 'Diner',
      tip: 'The generous schmear of mayo, the melted American cheese and the chopped raw onions that cut through the beef with a piquant bite are the real stars of this burger. http://tmoutchi.us/YmTIHi',
      isOpen: true,
      hours: 'Open until 1:00 AM'
    },
    {
      name: '3 Greens Market',
      address: '354 W Hubbard St',
      lat: 41.88996714877728,
      long: -87.63783762066299,
      category: 'Café',
      tip: "3 Greens brings together Small Cheval burgers, Dillman's pastrami, a massive salad bar, coffee drinks and cocktails in a cozy cafe environment with a putting green in River North.",
      isOpen: true,
      hours: 'Open until 8:00 PM'
    },
    {
      name: 'Yolk',
      address: '1120 S Michigan Ave',
      lat: 41.86895489913808,
      long: -87.62414537227707,
      category: 'Breakfast Spot',
      tip: "Bring champagne!  Yolk's strawberry-orange juice is fresh and tastes INCREDIBLE with champagne!  And, order a cinnamon roll as an appetizer as you wait for your food.",
      isOpen: true,
      hours: 'Open until 3:00 PM'
    },
    {
      name: "Manny's Cafeteria & Delicatessen",
      address: '1141 S Jefferson St',
      lat: 41.867852,
      long: -87.642037,
      category: 'Sandwich Place',
      tip: "Stop in this coffee shop and deli for a corned beef sandwich lunch! Manny's staff says it's a local favorite.",
      isOpen: true,
      hours: 'Open until 8:00 PM'
    },
    {
      name: "Maude's Liquor Bar",
      address: '840 W Randolph St',
      lat: 41.884499262791394,
      long: -87.64899015426634,
      category: 'French Restaurant',
      tip: 'Thought you’d want to know: Brendan Sodikoff has been nominated for Restaurateur of the Year in Time Out Chicago’s 2011 Eat Out Awards. Vote now!',
      isOpen: false,
      hours: 'Closed until 4:45 PM'
    },
    {
      name: "Portillo's",
      address: '520 W Taylor St',
      lat: 41.87006262671106,
      long: -87.64016985791197,
      category: 'Hot Dog Joint',
      tip: 'Classic Chicago style hotdogs!',
      photo: 'https://igx.4sqi.net/img/general/original/23713_K8b8fnnzWxxMS1NbUXRI4tTNpVm_ppNn2TMObjTGPu0.jpg',
      isOpen: true,
      hours: 'Open until 10:30 PM'
    },
    {
      name: 'Green Street Smoked Meats',
      address: '112 N Green St',
      lat: 41.8838037026529,
      long: -87.64895322761954,
      category: 'BBQ Joint',
      tip: "Don't bring vegetarians here",
      isOpen: true,
      hours: 'Open until 11:00 PM'
    },
    {
      name: 'Mercadito',
      address: '108 W Kinzie St',
      lat: 41.88921339594723,
      long: -87.63151010450869,
      category: 'Mexican Restaurant',
      tip: "Try the Camaron tacos. It's shrimp, roasted garlic, chipotle mayo, avocado and it's amazing!",
      isOpen: true,
      hours: 'Open until Midnight'
    },
    {
      name: 'GT Fish and Oyster',
      address: '531 N Wells St',
      lat: 41.89165591571521,
      long: -87.63403543311142,
      category: 'Seafood Restaurant',
      tip: "If it were just fish and chips and chowdah, we'd still be won over; but everything you'd think you're on one of the coasts. [Eater 38 Member]",
      isOpen: false,
      hours: 'Closed until 5:00 PM'
    },
    {
      name: 'Little Goat Diner',
      address: '820 W Randolph St',
      lat: 41.8846411,
      long: -87.6484209,
      category: 'Diner',
      tip: 'Will the combination of Stephanie Izard, rooftop deck and spinning, illuminated goat cause the universe to explode? http://tmout.us/lKTEo',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Girl & the Goat',
      address: '809 W Randolph St',
      lat: 41.884339,
      long: -87.647825,
      category: 'New American Restaurant',
      tip: "Sure it's tough to get in, but Stephanie Izard's hamachi crudo with crisp pork belly; pappardelle with goat, pork and veal sugo; and intricate veggie dishes make it worth the wait. [Eater 38 Member]",
      photo: 'https://igx.4sqi.net/img/general/original/3343327_LqLn36VlZE_zuKf2rZo_YLOEgjZD-LA38I9D8ALoucw.png',
      isOpen: false,
      hours: 'Closed until 4:30 PM'
    },
    {
      name: 'Bandera Restaurant',
      address: '535 N Michigan Ave',
      lat: 41.892025444505414,
      long: -87.62400558512492,
      category: 'Latin American Restaurant',
      tip: 'Start out with the Queso Dip and Tortilla chips!',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Roka Akor',
      address: '456 N Clark St',
      lat: 41.89058941479246,
      long: -87.63120647735691,
      category: 'Japanese Restaurant',
      tip: 'Try the chef’s selection steak from our 100 Best list: Go for the chef’s selection, they’re beautifully marbled, expertly grilled over Japanese binchotan charcoal, and the best value in the house.',
      isOpen: true,
      hours: 'Open until 2:30 PM, reopens later'
    },
    {
      name: "Eggy's",
      address: '333 E Benton Pl Ste 103',
      lat: 41.88557106315538,
      long: -87.61891029275834,
      category: 'Diner',
      tip: "Chicago's little breakfast secret. Tucked inside of River West Eggy's is a nice, warm spot for great food and never a long line. Try the chilaquiles for a good time",
      isOpen: true,
      hours: 'Open until 3:00 PM'
    },
    {
      name: 'Publican Quality Meats',
      address: '825 W Fulton Market',
      lat: 41.886673121438456,
      long: -87.64858226923059,
      category: 'Deli / Bodega',
      tip: 'The arctic char tartine at Publican Quality Meats is one of the 100 best things we ate this year. http://tmout.us/rLOtk',
      isOpen: true,
      hours: 'Open until 6:00 PM'
    },
    {
      name: 'LYFE Kitchen',
      address: '413 N Clark St',
      lat: 41.890006,
      long: -87.631113,
      category: 'Restaurant',
      tip: "This place is so awesome and healthy! Caters to whatever dietary restriction you have. I'm Paleo and it's great! People are so nice!",
      isOpen: true,
      hours: 'Open until 9:30 PM'
    }
  ],
  places: [
    {
      name: 'Revival Food Hall',
      address: '125 S Clark St',
      lat: 41.8797704672721,
      long: -87.63060092926025,
      category: 'Food Court',
      tip: "The chef-driven food hall has a kiosk where Mindy Segal's staff serve her famous hot chocolate that includes the all-important homemade marshmallows. Get it to go.",
      isOpen: true,
      hours: 'Open until 7:00 PM'
    },
    {
      name: 'Symphony Center (Chicago Symphony Orchestra)',
      address: '220 S Michigan Ave',
      lat: 41.87927535633318,
      long: -87.62468041570357,
      category: 'Concert Hall',
      tip: 'Come an hour early to hear some background about the pieces. Schmooze with your fellow socialites. You know you want to...',
      isOpen: false
    },
    {
      name: 'Auditorium Theatre',
      address: '50 E Congress Pkwy',
      lat: 41.875664438682605,
      long: -87.6252794265747,
      category: 'Theater',
      tip: 'If you wait by the bus stop on Michigan avenue, you will see the dancers walking out of backstage',
      isOpen: false
    },
    {
      name: 'The Art Institute of Chicago',
      address: '111 S Michigan Ave',
      lat: 41.879560730667116,
      long: -87.62351873687919,
      category: 'Art Museum',
      tip: 'The collection encompasses more than 5,000 years of human expression from around the world & more than 260,000 pieces. The Modern Wing was opened in 2009 & is the largest expansion in their history.',
      isOpen: true,
      hours: 'Open until 5:00 PM'
    },
    {
      name: 'Hamilton The Musical',
      address: '18 W Monroe St',
      lat: 41.880713,
      long: -87.62921,
      category: 'Theater',
      tip: 'Incredible show! Especially if you like hip hop or history!',
      photo: 'https://igx.4sqi.net/img/general/original/58871330_ZH7mJalw7RCDl_ruMxiqcbfRZDon3CpgO9gqZjjnuHo.jpg',
      isOpen: false
    },
    {
      name: 'Chicago Architecture Foundation',
      address: '224 S Michigan Ave',
      lat: 41.878548008827416,
      long: -87.62467559552046,
      category: 'Museum',
      tip: 'The Bungalows By Bus Tour features the Chicago bungalows built between 1910-1940, & the Frank Lloyd Wright Bus Tour shows samples of his unique architecture in the Frank Lloyd Wright Historic District',
      isOpen: true,
      hours: 'Open until 9:00 PM'
    },
    {
      name: 'Grant Park',
      address: '337 E Randolph Dr',
      lat: 41.87602777433412,
      long: -87.62243415531665,
      category: 'Park',
      tip: 'Chicago: Any park that plays host to a Barack Obama victory speech and a Radiohead show in the same year deserves to be at the top of this list. -IFC Viewer',
      isOpen: true,
      hours: 'Open until 11:00 PM'
    },
    {
      name: 'Millennium Park',
      address: '201 E Randolph St',
      lat: 41.88258606618012,
      long: -87.62355729930553,
      category: 'Park',
      tip: 'This 24.5-acre park features the work of world-renowned architects, planners, artists and designers.',
      isOpen: true,
      hours: 'Open until 11:00 PM'
    },
    {
      name: "Cindy's",
      address: '12 S Michigan Ave',
      lat: 41.881693802109076,
      long: -87.62455509077787,
      category: 'Gastropub',
      tip: 'Cindy’s at the CAA is open till the wee hours all week, and it has wild-Michigan-blueberry tarts topped with vanilla crème fraîche and almond streusel.',
      isOpen: false,
      hours: 'Closed until 3:00 PM'
    },
    {
      name: 'Broadway In Chicago',
      address: '17 N State St Ste 810',
      lat: 41.88281805369688,
      long: -87.62799658120859,
      category: 'Performing Arts Venue',
      tip: 'the cool part of town',
      isOpen: true,
      hours: 'Open until 5:30 PM'
    },
    {
      name: 'Cloud Gate by Anish Kapoor',
      address: 'N Michigan Ave',
      lat: 41.882668094222694,
      long: -87.62331873178482,
      category: 'Outdoor Sculpture',
      tip: "It's a cloud! It's a gate! No, it's the Bean!",
      isOpen: true,
      hours: 'Likely open'
    },
    {
      name: 'The Chicago Theatre',
      address: '175 N State St',
      lat: 41.88548822321372,
      long: -87.62745193681695,
      category: 'Theater',
      tip: 'In "The Dark Knight" (2008), Harvey Dent (Aaron Eckhart) and his girlfriend Rachel Dawes (Maggie Gyllenhaal) show up for a ballet performance in scenes shot in the Chicago Theatre.',
      isOpen: false
    },
    {
      name: 'Oriental Theatre',
      address: '24 W Randolph St',
      lat: 41.884495269023915,
      long: -87.62864828109741,
      category: 'Theater',
      tip: 'Beautiful Theater. At Once, get here when the doors open and have a drink on the stage. They also repeat this at intermission.',
      isOpen: false
    },
    {
      name: 'Jay Pritzker Pavilion',
      address: 'Millennium Park',
      lat: 41.882614176795556,
      long: -87.62178182601929,
      category: 'Amphitheater',
      tip: 'Check out the free Monday evening shows.',
      isOpen: true,
      hours: 'Open until 11:00 PM'
    },
    {
      name: 'Game Room',
      address: '12 S Michigan Ave',
      lat: 41.88160770980414,
      long: -87.62500047683716,
      category: 'Bar',
      tip: "A hidden gem! There isn't a sign with the name. Inside is amazing. It's huge. It looks like a hogwarts style bar. With games. Bocce was awesome but a long wait. Fish tacos were on point. 😋",
      isOpen: true,
      hours: 'Open until 2:00 AM'
    },
    {
      name: 'Do-Rite Donuts & Coffee',
      address: '50 W Randolph St',
      lat: 41.88441568651257,
      long: -87.62990519528252,
      category: 'Donut Shop',
      tip: "Pistachio-Meyer Lemon Doughnut: a bright, citrus glaze holds the toasted pistachios perfectly in place, but isn't too sweet as to overwhelm the actual taste of the old-fashioned doughnut itself.",
      isOpen: false,
      hours: 'Closed until 6:30 AM tomorrow'
    },
    {
      name: 'Chicago Cultural Center',
      address: '78 E Washington St',
      lat: 41.883640263310966,
      long: -87.62467077533687,
      category: 'Museum',
      tip: "Completed in 1897 it was dedicated as the city's original Chicago Public Library. This monument was inspired by the neo-classical style of the World's Columbian Exposition held in Chicago in 1893.",
      isOpen: true,
      hours: 'Open until 7:00 PM'
    },
    {
      name: 'Intelligentsia Coffee',
      address: '53 E Randolph St',
      lat: 41.88448905085375,
      long: -87.6256974629695,
      category: 'Coffee Shop',
      tip: 'Thought you’d want to know: Intelligentsia has been nominated for Best Local Coffee Roaster in Time Out Chicago’s 2011 Eat Out Awards. Vote now!',
      isOpen: true,
      hours: 'Open until 8:00 PM'
    },
    {
      name: 'Cadillac Palace Theatre',
      address: '151 W Randolph St',
      lat: 41.884323536786475,
      long: -87.63289153575897,
      category: 'Theater',
      tip: 'Respect the theater, dress up!',
      isOpen: false
    },
    {
      name: 'Maggie Daley Park',
      address: '337 E Randolph Dr',
      lat: 41.882240235555706,
      long: -87.6188186976348,
      category: 'Park',
      tip: 'Sorry, dog lovers, leave your pup at home. In the winter, bring your skates and tackle the skating ribbon (or rent them). Even on the opening day Saturday, not too crowded.❄️👍',
      photo: 'https://igx.4sqi.net/img/general/original/26315465_51CXZg5qVhhvYKWw_kX64Zre0acFyTDdmdB1iId35W8.jpg',
      isOpen: true,
      hours: 'Open until 11:00 PM'
    },
    {
      name: 'Chicago Riverwalk',
      address: 'Chicago River',
      lat: 41.88788326499458,
      long: -87.62764473203397,
      category: 'Waterfront',
      tip: 'Urban Kayaks are open for the season! Located at 270 E. Riverwalk South. Mon - Fri 10 a.m. - 6 p.m. and Sat - Sun 9 a.m. - 5 p.m. (312) 965-0035 http://urbankayaks.com/',
      photo: 'https://igx.4sqi.net/img/general/original/14923118_aCe0MurL1KJ3lXKdd_jGyrJpahKMgOxFJFgRvpZvBlc.jpg',
      isOpen: true,
      hours: 'Likely open'
    },
    null,
    {
      name: 'Wildberry Pancakes & Cafe',
      address: '130 E Randolph St',
      lat: 41.88459910689705,
      long: -87.62320339679718,
      category: 'Breakfast Spot',
      tip: "If you don't get some pancakes, I will punch you in the face.",
      isOpen: true,
      hours: 'Open until 2:30 PM'
    },
    {
      name: 'House of Blues',
      address: '329 N Dearborn St',
      lat: 41.88824233237108,
      long: -87.62924490094687,
      category: 'Music Venue',
      tip: 'Burgers and a show!',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    null,
    {
      name: 'Lakefront Trail',
      lat: 41.88099824431514,
      long: -87.61674570631227,
      category: 'Trail',
      tip: 'The best view of the entire skyline is from a trail near the aquarium. Go at sunset to see the city in lights',
      isOpen: true,
      hours: 'Likely open'
    },
    {
      name: 'Firecakes Donuts',
      address: '68 W Hubbard St',
      lat: 41.89000907393167,
      long: -87.63066187122017,
      category: 'Donut Shop',
      tip: "Firecakes' donut ice cream sandwich is held together with chocolate espresso or vanilla bean gelato, and adorned with rich chocolate, caramel sauces, and cocoa nibs. Hell to the yes.",
      photo: 'https://igx.4sqi.net/img/general/original/268135_D8hVqV0FalsrzFWErwVKU_b_PVGZbhkJA-QTGzC9ask.png',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Avec',
      address: '615 W Randolph St',
      lat: 41.88449042863341,
      long: -87.64339817157251,
      category: 'New American Restaurant',
      tip: 'avec, a wine bar from the award-winning team behind Blackbird restaurant, opened in October 2003.',
      isOpen: false,
      hours: 'Closed until 3:30 PM'
    },
    {
      name: 'Eleven City Diner',
      address: '1112 S Wabash Ave',
      lat: 41.868634249471725,
      long: -87.62577458411407,
      category: 'Diner',
      tip: 'Unlock our special!!!!!!!',
      isOpen: true,
      hours: 'Open until 9:00 PM'
    },
    {
      name: "Shaw's Crab House",
      address: '21 E Hubbard St',
      lat: 41.89003205068848,
      long: -87.62710008344948,
      category: 'Seafood Restaurant',
      tip: 'Lobster rolls are a must!',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Gilt Bar',
      address: '230 W Kinzie St',
      lat: 41.88923572519122,
      long: -87.63534623567077,
      category: 'Bar',
      tip: "Death's Door Daisy is arguably the best drink on the menu;  You've never had a vodka drink this good.",
      isOpen: false,
      hours: 'Closed until 4:45 PM'
    },
    {
      name: 'Ghirardelli Ice Cream And Chocolate Shop - Wrigley',
      address: '400 N Michigan Ave',
      lat: 41.889274460952045,
      long: -87.62438156339051,
      category: 'Dessert Shop',
      tip: 'I am a total hot chocolate snob, and I can tell you that the salted caramel hot chocolate is stunningly wonderful.',
      photo: 'https://igx.4sqi.net/img/general/original/86750_R2IIe7JZfjviMtOUWnURBJ4G3SuQNMwEi8vFd0Ueo34.jpg',
      isOpen: true,
      hours: 'Open until 9:00 PM'
    },
    {
      name: "Bavette's Bar and Boeuf",
      address: '218 W Kinzie St',
      lat: 41.889193396375326,
      long: -87.63472457296976,
      category: 'Steakhouse',
      tip: 'The wine cellar is stocked with Old World vintages, while the signature cocktails start with powerful brown spirits.',
      isOpen: false,
      hours: 'Closed until 5:00 PM'
    },
    {
      name: 'Grace',
      address: '652 W Randolph St',
      lat: 41.88444826161645,
      long: -87.64489660974124,
      category: 'New American Restaurant',
      tip: '4 of 4 stars. "So good, the $400 one spends for dinner here (based on the $185 tasting menu, wine pairing, tax and tip; your mileage may vary) seems like a sensible investment." -- Phil Vettel',
      isOpen: false,
      hours: 'Closed until 5:30 PM tomorrow'
    },
    {
      name: 'Sunda',
      address: '110 W Illinois St',
      lat: 41.89080910359245,
      long: -87.63171672821045,
      category: 'Sushi Restaurant',
      tip: 'Pad Thai is excellent !',
      isOpen: true,
      hours: 'Open until 3:00 PM, reopens later'
    },
    {
      name: 'RPM Italian',
      address: '52 W Illinois St',
      lat: 41.89097981495487,
      long: -87.62971240960132,
      category: 'Italian Restaurant',
      tip: 'Did someone say Tartufo? Hazelnut gelato with a chocolate shell.',
      isOpen: true,
      hours: 'Open until 9:30 PM'
    },
    {
      name: 'The Purple Pig',
      address: '500 N Michigan Ave',
      lat: 41.890826159768324,
      long: -87.62475753856398,
      category: 'Mediterranean Restaurant',
      tip: 'Thought you’d want to know: Purple Pig has been nominated for Best New Patio and Scott Harris has been nominated for Restaurateur of the Year in Time Out Chicago’s 2011 Eat Out Awards. Vote now!',
      isOpen: true,
      hours: 'Open until Midnight'
    },
    {
      name: "Joe's Seafood, Prime Steak & Stone Crab",
      address: '60 E Grand Ave',
      lat: 41.8918586261065,
      long: -87.62552393991848,
      category: 'Seafood Restaurant',
      tip: 'The crab cakes might as well be your sins because they are to die for.',
      isOpen: true,
      hours: 'Open until 11:00 PM'
    },
    {
      name: 'Xoco',
      address: '449 N Clark St',
      lat: 41.890850435336525,
      long: -87.63078717940178,
      category: 'Mexican Restaurant',
      tip: 'Delicious. Go with friends, order a bunch of different things and share so you can try more stuff.',
      isOpen: false,
      hours: 'Closed until 8:00 AM tomorrow'
    },
    {
      name: 'Frontera Grill',
      address: '445 N Clark St',
      lat: 41.89051958340065,
      long: -87.63090670108795,
      category: 'Mexican Restaurant',
      tip: 'This brunch from celeb chef Rick Bayless is not to be missed—too bad it’s served only on Saturdays. Be sure to check out the huevos “Fronterizos” with sausage and biscuits.',
      isOpen: false,
      hours: 'Closed until 11:30 AM tomorrow'
    },
    {
      name: 'Beatrix',
      address: '519 N Clark St',
      lat: 41.89130697608296,
      long: -87.63100405813482,
      category: 'New American Restaurant',
      tip: 'The caramel pie at Beatrix is one of the 100 best things we ate this year. http://tmout.us/rLOtk',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Au Cheval',
      address: '800 W Randolph St',
      lat: 41.88451860120726,
      long: -87.64742601594278,
      category: 'Diner',
      tip: 'The generous schmear of mayo, the melted American cheese and the chopped raw onions that cut through the beef with a piquant bite are the real stars of this burger. http://tmoutchi.us/YmTIHi',
      isOpen: true,
      hours: 'Open until 1:00 AM'
    },
    {
      name: '3 Greens Market',
      address: '354 W Hubbard St',
      lat: 41.88996714877728,
      long: -87.63783762066299,
      category: 'Café',
      tip: "3 Greens brings together Small Cheval burgers, Dillman's pastrami, a massive salad bar, coffee drinks and cocktails in a cozy cafe environment with a putting green in River North.",
      isOpen: true,
      hours: 'Open until 8:00 PM'
    },
    {
      name: "Manny's Cafeteria & Delicatessen",
      address: '1141 S Jefferson St',
      lat: 41.867852,
      long: -87.642037,
      category: 'Sandwich Place',
      tip: "Stop in this coffee shop and deli for a corned beef sandwich lunch! Manny's staff says it's a local favorite.",
      isOpen: true,
      hours: 'Open until 8:00 PM'
    },
    {
      name: "Binny's Beverage Depot",
      address: '1132 S Jefferson St',
      lat: 41.86796307563782,
      long: -87.64279414,
      category: 'Liquor Store',
      tip: 'Sign up for membership card for great discounts, cheese bar, a walk-in cigar humidor and sit down bar area.',
      isOpen: true,
      hours: 'Open until 9:00 PM'
    },
    null,
    {
      name: "Maude's Liquor Bar",
      address: '840 W Randolph St',
      lat: 41.884499262791394,
      long: -87.64899015426634,
      category: 'French Restaurant',
      tip: 'Thought you’d want to know: Brendan Sodikoff has been nominated for Restaurateur of the Year in Time Out Chicago’s 2011 Eat Out Awards. Vote now!',
      isOpen: false,
      hours: 'Closed until 4:45 PM'
    },
    {
      name: 'Green Street Smoked Meats',
      address: '112 N Green St',
      lat: 41.8838037026529,
      long: -87.64895322761954,
      category: 'BBQ Joint',
      tip: "Don't bring vegetarians here",
      isOpen: true,
      hours: 'Open until 11:00 PM'
    },
    {
      name: 'The Field Museum',
      address: '1400 S Lake Shore Dr',
      lat: 41.86611591123344,
      long: -87.61716031209295,
      category: 'History Museum',
      tip: 'The museum was incorporated in 1893 as the Columbian Museum of Chicago, but the name was changed in 1905 to Field Museum of Natural History to better reflect its focus on the natural sciences.',
      isOpen: true,
      hours: 'Open until 5:00 PM'
    },
    {
      name: 'GT Fish and Oyster',
      address: '531 N Wells St',
      lat: 41.89165591571521,
      long: -87.63403543311142,
      category: 'Seafood Restaurant',
      tip: "If it were just fish and chips and chowdah, we'd still be won over; but everything you'd think you're on one of the coasts. [Eater 38 Member]",
      isOpen: false,
      hours: 'Closed until 5:00 PM'
    }
  ],
  sights: [
    {
      name: 'Bari',
      address: '1120 W Grand Ave',
      lat: 41.891109688270404,
      long: -87.65558661062614,
      category: 'Sandwich Place',
      tip: 'Best little Italian store with incredible Italian Subs!',
      isOpen: true,
      hours: 'Open until 6:30 PM'
    },
    {
      name: 'The Wormhole Coffee',
      address: '1462 N Milwaukee Ave',
      lat: 41.90854285031249,
      long: -87.6745757759392,
      category: 'Coffee Shop',
      tip: 'This time-travel-themed (it has a DeLorean in the front) coffee shop has a small selection of baked goods from Fritz Pastry, Cheerios and other assorted cereals; and talented baristas.',
      isOpen: true,
      hours: 'Open until 11:00 PM'
    },
    {
      name: 'The Art Institute of Chicago',
      address: '111 S Michigan Ave',
      lat: 41.879560730667116,
      long: -87.62351873687919,
      category: 'Art Museum',
      tip: 'The collection encompasses more than 5,000 years of human expression from around the world & more than 260,000 pieces. The Modern Wing was opened in 2009 & is the largest expansion in their history.',
      isOpen: true,
      hours: 'Open until 5:00 PM'
    },
    {
      name: 'Firecakes Donuts',
      address: '68 W Hubbard St',
      lat: 41.89000907393167,
      long: -87.63066187122017,
      category: 'Donut Shop',
      tip: "Firecakes' donut ice cream sandwich is held together with chocolate espresso or vanilla bean gelato, and adorned with rich chocolate, caramel sauces, and cocoa nibs. Hell to the yes.",
      photo: 'https://igx.4sqi.net/img/general/original/268135_D8hVqV0FalsrzFWErwVKU_b_PVGZbhkJA-QTGzC9ask.png',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: "Binny's Beverage Depot",
      address: '1720 N Marcey St',
      lat: 41.913290273537804,
      long: -87.65497485751038,
      category: 'Liquor Store',
      tip: 'Candy is dandy, but liquor is quicker.',
      isOpen: true,
      hours: 'Likely open'
    },
    null,
    {
      name: 'Heritage Bicycles',
      address: '2959 N Lincoln Avenue',
      lat: 41.93576,
      long: -87.66283,
      category: 'Coffee Shop',
      tip: 'As far as we’re concerned, this is a sun-soaked café rather than just a bike shop. How else do you explain the thoughtfully sourced products—from Southport Grocery cupcakes to Mast Brothers chocolate?',
      isOpen: true,
      hours: 'Open until 7:00 PM'
    },
    {
      name: 'Millennium Park',
      address: '201 E Randolph St',
      lat: 41.88258606618012,
      long: -87.62355729930553,
      category: 'Park',
      tip: 'This 24.5-acre park features the work of world-renowned architects, planners, artists and designers.',
      isOpen: true,
      hours: 'Open until 11:00 PM'
    },
    {
      name: 'Revolution Brewing',
      address: '2323 N Milwaukee Ave',
      lat: 41.9234904892934,
      long: -87.69814968109131,
      category: 'Brewery',
      tip: 'Located in trendy Logan Square, Revolution Brewing is one of Chicago’s artisanal brewing companies. Try the Bacon Fat Popcorn at their restaurant, which also has vegan-friendly options.',
      isOpen: true,
      hours: 'Open until 2:00 AM'
    },
    {
      name: 'Publican Quality Meats',
      address: '825 W Fulton Market',
      lat: 41.886673121438456,
      long: -87.64858226923059,
      category: 'Deli / Bodega',
      tip: 'The arctic char tartine at Publican Quality Meats is one of the 100 best things we ate this year. http://tmout.us/rLOtk',
      isOpen: true,
      hours: 'Open until 6:00 PM'
    },
    {
      name: 'Cloud Gate by Anish Kapoor',
      address: 'N Michigan Ave',
      lat: 41.882668094222694,
      long: -87.62331873178482,
      category: 'Outdoor Sculpture',
      tip: "It's a cloud! It's a gate! No, it's the Bean!",
      isOpen: true,
      hours: 'Likely open'
    },
    {
      name: 'Unabridged Books',
      address: '3251 N Broadway St',
      lat: 41.941584609261724,
      long: -87.64426946640015,
      category: 'Bookstore',
      tip: 'An independent neighborhood bookstore, Unabridged Bookstore is known for its specialization in gay and lesbian titles, but carries something for the book lover in anyone',
      isOpen: true,
      hours: 'Open until 9:00 PM'
    },
    {
      name: "Dove's Luncheonette",
      address: '1545 N Damen Ave',
      lat: 41.909498454898035,
      long: -87.67747907698616,
      category: 'Diner',
      tip: 'Enchilada with a Fried Egg was awesome, so was the Pozole.',
      photo: 'https://igx.4sqi.net/img/general/original/92078275_tGR0uaSOJNVzgYzCs9RTkHUYBtoh2E0oaO4tDbI5QcY.jpg',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Del Seoul',
      address: '2568 N Clark St',
      lat: 41.92944377200353,
      long: -87.64288262037964,
      category: 'Korean Restaurant',
      tip: 'All of the Korean-style tacos at Del Seoul are worth ordering, though make sure to order at least one fish taco.',
      isOpen: true,
      hours: 'Open until 9:30 PM'
    },
    null,
    {
      name: 'Intelligentsia Coffee',
      address: '53 E Randolph St',
      lat: 41.88448905085375,
      long: -87.6256974629695,
      category: 'Coffee Shop',
      tip: 'Thought you’d want to know: Intelligentsia has been nominated for Best Local Coffee Roaster in Time Out Chicago’s 2011 Eat Out Awards. Vote now!',
      isOpen: true,
      hours: 'Open until 8:00 PM'
    },
    {
      name: 'Chicago Riverwalk',
      address: 'Chicago River',
      lat: 41.88788326499458,
      long: -87.62764473203397,
      category: 'Waterfront',
      tip: 'Urban Kayaks are open for the season! Located at 270 E. Riverwalk South. Mon - Fri 10 a.m. - 6 p.m. and Sat - Sun 9 a.m. - 5 p.m. (312) 965-0035 http://urbankayaks.com/',
      photo: 'https://igx.4sqi.net/img/general/original/14923118_aCe0MurL1KJ3lXKdd_jGyrJpahKMgOxFJFgRvpZvBlc.jpg',
      isOpen: true,
      hours: 'Likely open'
    },
    {
      name: 'The Purple Pig',
      address: '500 N Michigan Ave',
      lat: 41.890826159768324,
      long: -87.62475753856398,
      category: 'Mediterranean Restaurant',
      tip: 'Thought you’d want to know: Purple Pig has been nominated for Best New Patio and Scott Harris has been nominated for Restaurateur of the Year in Time Out Chicago’s 2011 Eat Out Awards. Vote now!',
      isOpen: true,
      hours: 'Open until Midnight'
    },
    {
      name: 'Maggie Daley Park',
      address: '337 E Randolph Dr',
      lat: 41.882240235555706,
      long: -87.6188186976348,
      category: 'Park',
      tip: 'Sorry, dog lovers, leave your pup at home. In the winter, bring your skates and tackle the skating ribbon (or rent them). Even on the opening day Saturday, not too crowded.❄️👍',
      photo: 'https://igx.4sqi.net/img/general/original/26315465_51CXZg5qVhhvYKWw_kX64Zre0acFyTDdmdB1iId35W8.jpg',
      isOpen: true,
      hours: 'Open until 11:00 PM'
    },
    {
      name: 'The Field Museum',
      address: '1400 S Lake Shore Dr',
      lat: 41.86611591123344,
      long: -87.61716031209295,
      category: 'History Museum',
      tip: 'The museum was incorporated in 1893 as the Columbian Museum of Chicago, but the name was changed in 1905 to Field Museum of Natural History to better reflect its focus on the natural sciences.',
      isOpen: true,
      hours: 'Open until 5:00 PM'
    },
    {
      name: "Sweet Mandy B's",
      address: '1208 W Webster Ave',
      lat: 41.92156663963837,
      long: -87.65871047973633,
      category: 'Bakery',
      tip: "try the red velvet cupcake. it's heavenly.",
      isOpen: true,
      hours: 'Open until 9:00 PM'
    },
    {
      name: 'Lula Café',
      address: '2537 N Kedzie Blvd',
      lat: 41.9276912777251,
      long: -87.70698786584065,
      category: 'Café',
      tip: 'Stop by on Mondays for the three-course $28 farm menu.',
      isOpen: true,
      hours: 'Open until 1:00 AM'
    },
    {
      name: 'Little Goat Diner',
      address: '820 W Randolph St',
      lat: 41.8846411,
      long: -87.6484209,
      category: 'Diner',
      tip: 'Will the combination of Stephanie Izard, rooftop deck and spinning, illuminated goat cause the universe to explode? http://tmout.us/lKTEo',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Au Cheval',
      address: '800 W Randolph St',
      lat: 41.88451860120726,
      long: -87.64742601594278,
      category: 'Diner',
      tip: 'The generous schmear of mayo, the melted American cheese and the chopped raw onions that cut through the beef with a piquant bite are the real stars of this burger. http://tmoutchi.us/YmTIHi',
      isOpen: true,
      hours: 'Open until 1:00 AM'
    },
    {
      name: 'Ping Tom Memorial Park',
      address: '300 W 19th St',
      lat: 41.857115865186756,
      long: -87.63448843530801,
      category: 'Park',
      tip: 'Among the Park’s cool features are a pagoda-shaped pavilion, where you can catch a water taxi to downtown Chicago, and a unique railroad drawbridge.',
      isOpen: true,
      hours: 'Likely open'
    },
    {
      name: 'Museum of Science and Industry',
      address: '5700 S Lake Shore Dr',
      lat: 41.79126370685017,
      long: -87.58296682877217,
      category: 'Science Museum',
      tip: 'This is the largest science museum in the Western Hemisphere. The Henry Crown Space Center features rockets, shuttles, satellites, rovers and probes. You can even see the actual Apollo 8 spacecraft!',
      isOpen: true,
      hours: 'Open until 4:00 PM'
    },
    {
      name: "Jeni's Splendid Ice Creams",
      address: '1505 N Milwaukee Ave',
      lat: 41.908835815475925,
      long: -87.67498504185463,
      category: 'Ice Cream Shop',
      tip: 'There are too many choices to try in just one visit, including Pistachio and Honey, Intelligentsia Black Cat Espresso, Goat Cheese and Cherries and even a Riesling Poached Pear Sorbet.',
      photo: 'https://igx.4sqi.net/img/general/original/91693637_gynm41_IZm_2m_CHMG53mSLCORh88CQGo2EtVSsGrYU.jpg',
      isOpen: true,
      hours: 'Open until 11:00 PM'
    },
    {
      name: "Shaw's Crab House",
      address: '21 E Hubbard St',
      lat: 41.89003205068848,
      long: -87.62710008344948,
      category: 'Seafood Restaurant',
      tip: 'Lobster rolls are a must!',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Black Dog Gelato',
      address: '859 N Damen Ave',
      lat: 41.897616,
      long: -87.67703,
      category: 'Ice Cream Shop',
      tip: 'Try the gianduja gelato from our 100 Best list: Every flavor, every time, Jessie Oloroso kills it. But when her shop is out of this knee-bucklingly rich chocolate-hazelnut flavor, it nearly kills us.',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Piece Brewery and Pizzeria',
      address: '1927 W North Ave',
      lat: 41.91037562979727,
      long: -87.67617702484131,
      category: 'Pizza Place',
      tip: 'The crispy pies hold a lot of weight, so after you choose your pizza style—red, white or New Haven plain—start picking toppings. (If you’re really going New Haven–style, try one with clams and bacon.)',
      isOpen: true,
      hours: 'Open until 10:30 PM'
    },
    {
      name: "Parson's Chicken & Fish",
      address: '2952 W Armitage Ave',
      lat: 41.917514114096605,
      long: -87.70134364340757,
      category: 'Fried Chicken Joint',
      tip: 'I just watched a server here pick her butt.',
      isOpen: true,
      hours: 'Open until 2:00 AM'
    },
    {
      name: 'Symphony Center (Chicago Symphony Orchestra)',
      address: '220 S Michigan Ave',
      lat: 41.87927535633318,
      long: -87.62468041570357,
      category: 'Concert Hall',
      tip: 'Come an hour early to hear some background about the pieces. Schmooze with your fellow socialites. You know you want to...',
      isOpen: false
    },
    {
      name: 'Nature Boardwalk',
      address: 'Lincoln Park Zoo',
      lat: 41.9181019674175,
      long: -87.63328313827515,
      category: 'Trail',
      tip: 'A Park worker told me the composite boards get very HOT ... especially on days with no cloud cover ... so avoid walking your dog here on very hot sunny days to protect his paws.',
      isOpen: true,
      hours: 'Likely open'
    },
    {
      name: 'Goose Island Beer Co.',
      address: '1800 W Fulton St',
      lat: 41.88699668760529,
      long: -87.6723464158445,
      category: 'Brewery',
      tip: "Our tour guide Patti rocked it! The beer was great, she even took us to a great bar after! Can't beat that",
      isOpen: false,
      hours: 'Closed until 6:00 PM Thursday'
    },
    {
      name: 'Adams & Son Gardens',
      address: '1057 N California Ave',
      lat: 41.900877,
      long: -87.69653969077964,
      category: 'Flower Shop',
      tip: "Always very helpful and friendly service. Plants and veggies are in good shape. Love this place! It's dog friendly too!",
      isOpen: true,
      hours: 'Likely open'
    },
    {
      name: 'Bang Bang Pie Shop',
      address: '2051 N California Ave',
      lat: 41.91905556595741,
      long: -87.69722912650788,
      category: 'Pie Shop',
      tip: 'The thick-sliced applewood-smoked bacon biscuit comes with collard greens and a side of house-made Fresno chili hot sauce that they’ve appropriately dubbed Pao Pao Sauce.',
      photo: 'https://igx.4sqi.net/img/general/original/268135_YOCKkpURI4b2le61dt3sdVQiiZdascrU3PS6wKDp5l4.jpg',
      isOpen: true,
      hours: 'Open until 7:00 PM'
    },
    {
      name: 'Forbidden Root Restaurant & Brewery',
      address: '1746 W Chicago Ave',
      lat: 41.89606768272536,
      long: -87.67160969186888,
      category: 'Brewery',
      tip: 'Beers, burger and schnitzel were all delicious. Get them with root chips and grab a beer flight.',
      isOpen: false,
      hours: 'Closed until 4:00 PM'
    },
    {
      name: 'J. P. Graziano Grocery Co.',
      address: '901 W Randolph St',
      lat: 41.884128546868126,
      long: -87.64986374906124,
      category: 'Sandwich Place',
      tip: 'Whatever you do, GET A CANNOLI.',
      isOpen: true,
      hours: 'Open until 5:00 PM'
    },
    {
      name: 'Ghirardelli Ice Cream And Chocolate Shop - Wrigley',
      address: '400 N Michigan Ave',
      lat: 41.889274460952045,
      long: -87.62438156339051,
      category: 'Dessert Shop',
      tip: 'I am a total hot chocolate snob, and I can tell you that the salted caramel hot chocolate is stunningly wonderful.',
      photo: 'https://igx.4sqi.net/img/general/original/86750_R2IIe7JZfjviMtOUWnURBJ4G3SuQNMwEi8vFd0Ueo34.jpg',
      isOpen: true,
      hours: 'Open until 9:00 PM'
    },
    {
      name: 'Gethsemane Garden Center',
      address: '5739 N Clark St',
      lat: 41.98694412228427,
      long: -87.66925498436312,
      category: 'Garden Center',
      tip: 'Buy your Christmas tree here.',
      isOpen: true,
      hours: 'Likely open'
    },
    {
      name: 'Lagunitas Brewing Company',
      address: '2607 W 17th St',
      lat: 41.857726300995786,
      long: -87.69205056197679,
      category: 'Brewery',
      tip: 'Think Willy wonka but beer!!!!',
      isOpen: true,
      hours: 'Open until 3:00 PM'
    },
    {
      name: 'Chicago Cultural Center',
      address: '78 E Washington St',
      lat: 41.883640263310966,
      long: -87.62467077533687,
      category: 'Museum',
      tip: "Completed in 1897 it was dedicated as the city's original Chicago Public Library. This monument was inspired by the neo-classical style of the World's Columbian Exposition held in Chicago in 1893.",
      isOpen: true,
      hours: 'Open until 7:00 PM'
    },
    {
      name: 'Brooklyn Boulders Chicago',
      address: '100 S Morgan St',
      lat: 41.88026841817924,
      long: -87.65227244832704,
      category: 'Climbing Gym',
      tip: 'They have auto belay machine. Also space for you to hang out or work',
      isOpen: true,
      hours: 'Open until Midnight'
    },
    {
      name: 'Dark Matter Coffee (Star Lounge Coffee Bar)',
      address: '2521 W Chicago Ave',
      lat: 41.89564111568397,
      long: -87.69016861409735,
      category: 'Coffee Shop',
      tip: '"Sidle up to the \'bar\' for a taste of Dark Matter coffee, which is roasted in eight-pound batches above the café in unusual flavor profiles that have caught the attention of area restaurants."',
      isOpen: true,
      hours: 'Open until 9:00 PM'
    },
    {
      name: 'Sawada Coffee',
      address: '112 N Green St',
      lat: 41.883641,
      long: -87.648644,
      category: 'Coffee Shop',
      tip: "Try the military latte, which is a unique combo of matcha green tea, espresso and a little cocoa. It isn't sweet, but it's creamy and flavorful. As you can see, the owner truly is a latte art master.",
      photo: 'https://igx.4sqi.net/img/general/original/86750_PoThTMC50sxH8-Nr0J_QKn5onlw_RKpT0PQAESfUo9k.jpg',
      isOpen: true,
      hours: 'Open until 4:00 PM'
    },
    {
      name: '3 Arts Club Cafe',
      address: '1300 N Dearborn St',
      lat: 41.905930266627394,
      long: -87.6304257125592,
      category: 'Café',
      tip: 'Neat cafe located inside restoration hardware. You can browse the upper levels while waiting for your table or grab a cup of coffee at their coffee bar.',
      isOpen: true,
      hours: 'Open until 8:00 PM'
    },
    {
      name: 'Big Star',
      address: '1531 N Damen Ave',
      lat: 41.9092278850329,
      long: -87.67726723375097,
      category: 'Taco Place',
      tip: "Try the michelada from our 100 Best list: We know it contains Tecate, Cholula and Valentina hot sauces, and Maggi. Oh, and we’re certain it's delicious, alleviates hangovers & might just cure cancer.",
      isOpen: true,
      hours: 'Open until 2:00 AM'
    },
    {
      name: 'North Avenue Beach',
      address: '1600 N Lake Shore Dr',
      lat: 41.918022134043206,
      long: -87.62787580490112,
      category: 'Beach',
      tip: 'go swimming',
      isOpen: true,
      hours: 'Open until 7:00 PM'
    },
    {
      name: 'Ipsento Coffee House',
      address: '2035 N Western Ave',
      lat: 41.918545246415405,
      long: -87.6873768344406,
      category: 'Coffee Shop',
      tip: '"Baristas are superfriendly, direct-trade beans are roasted in small batches weekly and offered in a variety of brew methods (such as pour-over and French press) that turn out lovely cups of coffee."',
      isOpen: true,
      hours: 'Open until 9:00 PM'
    },
    {
      name: 'DuSable Museum Of African American History',
      address: '740 E 56th Pl',
      lat: 41.7920867992942,
      long: -87.60719909220741,
      category: 'History Museum',
      tip: 'Mosaic portraits in Founders Hall celebrate Dr. Margaret Burroughs, co-founder of the museum, Harold Washington, Chicago’s first African American Mayor, and DuSable, Founder of Chicago.',
      isOpen: false,
      hours: 'Closed until 10:00 AM tomorrow'
    }
  ],
  itineraryId: '593ee9d234269b992eefb0a9'
};

export default locationsExample;
