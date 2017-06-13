const locationsExample = {
  food: [
    {
      name: "Stella's Kitchen & Bakery",
      address: '2525 1st Ave N',
      lat: 45.783473039107456,
      long: -108.50323217657211,
      category: 'Diner',
      tip: "Best breakfast in Billings!  However, I'd get coffee elsewhere!",
      photo: 'https://igx.4sqi.net/img/general/original/10435338_gVmzXfVAuAIzTxBXv77vBP4U9RvS0rf9Sr2YPAT7tX4.jpg',
      isOpen: true,
      hours: 'Open until 5:00 PM'
    },
    {
      name: 'Harper and Madison',
      address: '3115 10th Ave N',
      lat: 45.7885227,
      long: -108.51852373333334,
      category: 'Café',
      tip: 'The wifi key is deSSerts',
      photo: 'https://igx.4sqi.net/img/general/original/4365883_6nPq84qWX87M3grXgA8DtXeABouNqJbNeun8zO3wvaQ.jpg',
      isOpen: true,
      hours: 'Open until 6:00 PM'
    },
    {
      name: 'Burger Dive',
      address: '114 N 27th St',
      lat: 45.78313681554928,
      long: -108.50512851535623,
      category: 'Burger Joint',
      tip: 'Delicious burgers! Big and juicy on a fresh bun. You can get your traditional cheeseburger or something a bit out of the ordinary. Hand cut fries and hand battered onion rings top it all off! Love it!',
      photo: 'https://igx.4sqi.net/img/general/original/58416_Ha-hR9dINd5fN1Yy_f4EEUkxT_Oti7t2NeAG40Xa4R0.jpg',
      isOpen: false,
      hours: 'Closed until 10:30 AM'
    },
    {
      name: 'Field House Cafe The',
      address: '2601 Minnesota Ave',
      lat: 45.78171677444445,
      long: -108.5020512925324,
      category: 'New American Restaurant',
      tip: 'The Truffle Fries will change your life. So. Amazing.',
      photo: 'https://igx.4sqi.net/img/general/original/24558087_MflV-TMYOy8QM63NM7LISUFi6HAmjZypi7X2m1AAA9c.jpg',
      isOpen: false,
      hours: 'Closed until 11:00 AM'
    },
    {
      name: "Jake's Steakhouse",
      address: '2701 1st Ave. N. Road',
      lat: 45.78277444628856,
      long: -108.50484596662258,
      category: 'Steakhouse',
      tip: 'Fish Tacos need I say more!',
      photo: 'https://igx.4sqi.net/img/general/original/47952_A_GmjTrzrjwoeyXMm_xOZ3oFkc5teZIbtiJtlv5QzmE.jpg',
      isOpen: false,
      hours: 'Closed until 11:00 AM'
    },
    {
      name: 'Walkers American Grill & Tapas Bar',
      address: '2700 1st Ave N',
      lat: 45.78242935435538,
      long: -108.50459218025208,
      category: 'Tapas Restaurant',
      tip: "Steak is just as good as across the street at Jake's and usually it's not as busy here.",
      photo: 'https://igx.4sqi.net/img/general/original/36199194_TTLIALn0riAApVWvZq9ZLE2PtNUvfdvxksaaT3uFhXQ.jpg',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Fancy Sushi',
      address: '1313 Grand Ave Ste 3',
      lat: 45.78447742864459,
      long: -108.54971801012708,
      category: 'Sushi Restaurant',
      tip: 'Get the lunch box or the maki lunch.  Well worth it!',
      photo: 'https://igx.4sqi.net/img/general/original/28887042_oSy7b2XDSfHVxpm7RHUdlMuTYsNxV8zLiJcEmLp1-T4.jpg',
      isOpen: false,
      hours: 'Closed until 11:00 AM'
    },
    {
      name: 'Lilac',
      address: '2515 Montana Ave',
      lat: 45.78278009853203,
      long: -108.5021375850726,
      category: 'American Restaurant',
      tip: "Wow. If you haven't eaten here, you're missing out. Quaint, elegant, and delicious. Oh, did I mention friendly? Wow. You won't be disappointed.",
      photo: 'https://igx.4sqi.net/img/general/original/uo3QD8HxyLsgEpjZC4uLVWByIZLqvJ4SFtfstpPQ-9U.jpg',
      isOpen: false,
      hours: 'Closed until 5:00 PM'
    },
    {
      name: 'Rocket Gourmet Wraps & Sodas',
      address: '2809 1st Ave N',
      lat: 45.78183,
      long: -108.50638257,
      category: 'Sandwich Place',
      tip: "Bayoo wrap had a perfect hint of spice! Loved the food. They didn't know the correct wifi password but that's okay",
      photo: 'https://igx.4sqi.net/img/general/original/57396841_rsX4Dr5YWtXvTWK7pvNTNeD31fwdKTEPD3FMjjphqoQ.jpg',
      isOpen: false
    },
    {
      name: 'Ciao Mambo',
      address: '2301 Montana Ave',
      lat: 45.7841967,
      long: -108.49911289,
      category: 'Italian Restaurant',
      tip: 'Linguini and Clams!  To die for!!',
      photo: 'https://igx.4sqi.net/img/general/original/7125144_zGwWN4GR2Ynijo8e5iApGIx942551lzaClFkbh3PLxQ.jpg',
      isOpen: false,
      hours: 'Closed until 5:00 PM'
    },
    {
      name: "Famous Dave's Bar-B-Que",
      address: '2883 King Ave W',
      lat: 45.78772821501648,
      long: -108.50404305253926,
      category: 'BBQ Joint',
      photo: 'https://s-media-cache-ak0.pinimg.com/736x/9c/b7/33/9cb733a13a4e4260346c80b7de3c6223.jpg'
    },
    {
      name: 'Cham Thai Cuisine',
      address: '2916 1st Ave N',
      lat: 45.78102357792476,
      long: -108.50758928282772,
      category: 'Thai Restaurant',
      tip: 'Tom kha gai (soup), chili mint leaf beef, and panang - every time. Best Thai in Billings, hands down. Authentic, and absolutely delicious.',
      photo: 'https://igx.4sqi.net/img/general/original/DLNed1qABibhvTqKFEMjKHqQe8S2vVd2zigLzdg78x8.jpg'
    },
    {
      name: 'Bin 119',
      address: '119 N 28th St',
      lat: 45.78279740000001,
      long: -108.5061264,
      category: 'Restaurant',
      tip: 'Try the New Age w fruit.',
      photo: 'https://igx.4sqi.net/img/general/original/46114071_DVJAh29C94BmZkXyacPuLSRxaOd5VlWLIUiBcQJp8gA.jpg',
      isOpen: false,
      hours: 'Closed until 11:00 AM'
    },
    {
      name: "King's Hat",
      address: '105 S 37th St',
      lat: 45.77422784489642,
      long: -108.51379560160639,
      category: 'Burger Joint',
      tip: "The best chicken strips and of course tator tots. Can't forget home of the flying burger!",
      photo: 'https://igx.4sqi.net/img/general/original/12245574_NthVNtokZa4pwi4QDAGtTlstXTbYjbR7AMXL9HRtG3c.jpg',
      isOpen: false,
      hours: 'Closed until 10:00 AM'
    },
    {
      name: 'Red Robin Gourmet Burgers',
      address: '1595 Grand Ave',
      lat: 45.785185673241934,
      long: -108.5560949607428,
      category: 'Burger Joint',
      tip: 'Hula Burger!',
      photo: 'https://igx.4sqi.net/img/general/original/3b3a6yln90QEAi345mcFbOnGeKuEVp2WmWgxnLPSN5M.jpg',
      isOpen: false,
      hours: 'Closed until 11:00 AM'
    },
    {
      name: 'The Granary',
      address: '1500 Poly Dr',
      lat: 45.79437,
      long: -108.55280381,
      category: 'American Restaurant',
      tip: 'Try the Nachos with Shrimp or Chicken or both!Honey Rock Shrimp are also delicious!  A great appetizer to share.',
      photo: 'https://igx.4sqi.net/img/general/original/46114071_wFbI8DaKAsAqySLhYNfZbeDE87XT-hfdVFviiaTvbDs.jpg',
      isOpen: false
    },
    {
      name: 'Texas Roadhouse',
      address: '1824 King Ave. W.',
      lat: 45.75443,
      long: -108.562485,
      category: 'Steakhouse',
      tip: 'Bone-In Ribeye Steak',
      photo: 'https://igx.4sqi.net/img/general/original/35782075_vd0wC2w4Q6Vuxm7tatSAXMd5rYmt7xk7FTWENzgm1b8.jpg',
      isOpen: false,
      hours: 'Closed until 4:00 PM'
    },
    {
      name: "Jimmy John's",
      address: '805 24th St W Ste 11',
      lat: 45.77778190089468,
      long: -108.57586626387895,
      category: 'Sandwich Place',
      tip: 'Great Italian sub.',
      photo: 'https://igx.4sqi.net/img/general/original/OYjc-HnIqY63u_T34KGDSqDZJMg1hsnoYJ5PGggdx_g.jpg',
      isOpen: false,
      hours: 'Closed until 11:00 AM'
    },
    {
      name: 'MacKenzie River Pizza, Grill & Pub',
      address: '405 Main St',
      lat: 45.806470733333335,
      long: -108.47443878650665,
      category: 'American Restaurant',
      tip: 'Large forks',
      photo: 'https://igx.4sqi.net/img/general/original/30295785_bVGQKvk27WopXUTNxxEzMCF1lpAqwgrAhqazhUHQReM.jpg',
      isOpen: false,
      hours: 'Closed until 11:00 AM'
    },
    {
      name: 'McCormick Cafe',
      address: '2419 Montana Ave',
      lat: 45.783281,
      long: -108.50124478340149,
      category: 'Breakfast Spot',
      tip: "I'm having the Parisian crapes with Nutella",
      photo: 'https://igx.4sqi.net/img/general/original/20406303_nGpcDHjR023aUMDAiDcLUu5kSNgLmC_gxFQaVF98-ks.jpg',
      isOpen: true,
      hours: 'Open until 3:00 PM'
    },
    {
      name: 'The Vig Alehouse & Casino',
      address: '501 Hilltop Rd',
      lat: 45.812983538409334,
      long: -108.47408458703231,
      category: 'American Restaurant',
      tip: 'They won the chowder competition!!! Awesome food, great service, and specials! Bingo Wednesday nights! Love this place',
      photo: 'https://igx.4sqi.net/img/general/original/1970555_8TcFRFABaOAqWkbh2gUwaCzO0caZ70EYOJ62mxbuojA.jpg',
      isOpen: false,
      hours: 'Closed until 10:00 AM'
    },
    {
      name: 'Panda Express',
      address: '15th & Grand',
      lat: 45.78439973325191,
      long: -108.5558977192106,
      category: 'Chinese Restaurant',
      tip: 'if you love huge portions of non-traditional chinese quick and cheap, this is the place for you. #fatamerica',
      photo: 'https://igx.4sqi.net/img/general/original/20440935_omY-v1p7N-IMpI1TUCpUorIN5a4zx-UHlQ_AdaRXV3Q.jpg',
      isOpen: false,
      hours: 'Closed until 10:30 AM'
    },
    {
      name: 'Lemongrass Thai Restaurant',
      address: '2695 King Ave. West',
      lat: 45.755998311604614,
      long: -108.58300030708882,
      category: 'Thai Restaurant',
      tip: "Try Pineapple Fried Rice, and you get your fried rice in a pineapple bowl! It's delicious.",
      photo: 'https://igx.4sqi.net/img/general/original/OWN2F0JE1SIE0V2PSE2GJIB4ETMCUR1HZ1XS4NTINJOWJTL1.jpg'
    },
    {
      name: 'Golden Phoenix Chinese Restaurant',
      address: '279 Swords Ln',
      lat: 45.8042482,
      long: -108.4776615,
      category: 'Restaurant',
      tip: "They have the best General Tso's Chicken in Billings.",
      photo: 'https://igx.4sqi.net/img/general/original/35782075_4vF9L2f81TckRdq6vbsLapgUIa6z-O2bflwmeJpnoIw.jpg'
    },
    {
      name: 'Don Luis Restaurant',
      address: '15 N 26th St',
      lat: 45.783119,
      long: -108.5026368,
      category: 'Mexican Restaurant',
      tip: 'Plates are always insanely hot',
      photo: 'https://igx.4sqi.net/img/general/original/54679744_7xZgjNJVT9I5yQ6cSZ1Rdlm2zJRxXJmxHL9SIq-9tzw.jpg',
      isOpen: false,
      hours: 'Closed until 11:00 AM'
    },
    {
      name: 'Buffalo Wild Wings',
      address: '411 S 24th St W',
      lat: 45.762390501002514,
      long: -108.57581539156828,
      category: 'Wings Joint',
      tip: '40 cent wings all day every Tuesday!',
      photo: 'https://igx.4sqi.net/img/general/original/294693_luzt8lU6v-ciOGBIwKVofs73MCMudceoDHFFeWz422s.jpg',
      isOpen: false,
      hours: 'Closed until 11:00 AM'
    },
    {
      name: 'Asian Sea Grill',
      address: '1911 King Ave W',
      lat: 45.755644366370696,
      long: -108.56516649046873,
      category: 'Restaurant',
      tip: 'Hibachi grill is fun for a group of 4 or more.',
      photo: 'https://igx.4sqi.net/img/general/original/TERSJTMSXYPQKB02UQXZP10CRP51GNO1SRNRROTCRDY1ZNE5.jpg',
      isOpen: false,
      hours: 'Closed until 11:00 AM'
    },
    {
      name: 'Athenian',
      address: '18 N 29th St',
      lat: 45.78117,
      long: -108.506713,
      category: 'Greek Restaurant',
      tip: 'Try a classic chicken gyro will',
      photo: 'https://igx.4sqi.net/img/general/original/LVRPDMISNYMH1CRNIMSNJRSC322GBEELOHVMKDROLXH0A3OE.jpg',
      isOpen: false
    },
    {
      name: 'Fuddruckers',
      address: '2011 Overland Ave.',
      lat: 45.75416909,
      long: -108.5679754,
      category: 'Burger Joint',
      tip: 'Great food!  Got to sit on the patio and watch the ducks!',
      photo: 'https://igx.4sqi.net/img/general/original/2306670_sZwkL0zp0y43dd82N4ryl0Rj4xqkN-tBF5xhQPH-_Wo.jpg',
      isOpen: false,
      hours: 'Closed until 10:30 AM'
    }
  ],
  places: [
    {
      name: 'Steep World',
      address: '208 N 13th St',
      lat: 45.7921515,
      long: -108.48852049999999,
      category: 'Gym',
      tip: 'So fun and a great workout!!!',
      photo: 'https://igx.4sqi.net/img/general/original/54932884_1uqGZ3K2Fw97O692pFnskNzs-6suM3gcEU7GP-5bZGk.jpg'
    },
    {
      name: 'Amend Park',
      lat: 45.75681235048184,
      long: -108.54367716793577,
      category: 'Park',
      tip: 'A perfect, wide open, usually windy spot to fly a stunt or sport kite!',
      photo: 'https://igx.4sqi.net/img/general/original/MMPVXTCQY0Y5J15Q4KCHHWSBCD0MVPOHJFLT43ULQNKH3SH2.jpg',
      isOpen: false
    },
    {
      name: 'Pioneer Park',
      address: '3rd St W & Parkhill',
      lat: 45.787335111392835,
      long: -108.52334793352406,
      category: 'Park',
      tip: 'Disc golf, casual course',
      photo: 'https://igx.4sqi.net/img/general/original/4TW4IRRMUT3YVVQIEGKKJZIEAVSAN4PKY3X14YDJNOU23CSW.jpg',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Riverfront Park',
      lat: 45.74163099759658,
      long: -108.53103811761825,
      category: 'Park',
      tip: 'Great place to blow off sum steam',
      photo: 'https://igx.4sqi.net/img/general/original/34710966_s8c9BNRW7ume0nefdfbLC-hisx1_j7tzoOqYEaRsyIA.jpg'
    },
    {
      name: 'Yellowstone Fitness',
      lat: 45.7862063922053,
      long: -108.55588321453995,
      category: 'Gym',
      tip: "Don't forget leg day everyone!!",
      photo: 'https://igx.4sqi.net/img/general/original/1094760_BBt0HdJfrCPr7kq0QaXdFPcHLyeLUWTAWBUTwX5LQtY.jpg',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Anytime Fitness',
      address: '2724 Montana Ave',
      lat: 45.7816478,
      long: -108.5038037,
      category: 'Gym / Fitness Center',
      tip: 'Still got the record on the Jacobs ladder. Step up people and challenge the climber',
      photo: 'https://igx.4sqi.net/img/general/original/30594335_KGSJmjjvX1-LJBQirzTvv7nhb_8_rxVs3Rd14j6WwCU.jpg',
      isOpen: true,
      hours: 'Open'
    },
    {
      name: 'Three Sights Indoor Shooting Range',
      address: '1020 Central Ave',
      lat: 45.768948861304835,
      long: -108.54199338907618,
      category: 'Gun Range',
      tip: "Owners are great. Staff is very knowledgable. Whether you're an expert or a novice, you'll feel right at home.  Make sure you rent the Desert Eagle .50 cal at some point. One heck of a rush!",
      photo: 'https://igx.4sqi.net/img/general/original/296668_skelc2j6TkY3dK5Z2pBqFt-LHAjYMLz5hp81SFU_Z04.jpg'
    },
    {
      name: 'Granite Health & Fitness',
      address: '3838 Avenue B',
      lat: 45.78540331753354,
      long: -108.61168368755925,
      category: 'Gym / Fitness Center',
      tip: 'No WiFi and 4G coverage is mediocre.',
      photo: 'https://igx.4sqi.net/img/general/original/46114071_sWIeKGDepLFOFxbWzM-leqxyZMyBvH3bjo8gpuRkga8.jpg',
      isOpen: false
    },
    {
      name: 'Yellowstone Country Club',
      address: '5707 Bobby Jones Boulevard',
      lat: 45.80658693650445,
      long: -108.66123217786112,
      category: 'Golf Course',
      photo: 'https://igx.4sqi.net/img/general/original/83508987_TVrqqGlNpV6Ef20iLcadr1HdOCyMGAw_TZj9o6D7Z5g.jpg'
    },
    {
      name: 'Sunset Bowl',
      address: '1625 Central Ave',
      lat: 45.769972,
      long: -108.557816,
      category: 'Recreation Center',
      tip: 'Ask for Nate in the pro shop, hers the best!',
      photo: 'https://igx.4sqi.net/img/general/original/87388367_f-WRKvSgsHAHdwY6sl0Y3UjeJeuyyYDU3pWrv1UJMI8.png',
      isOpen: false,
      hours: 'Closed until 10:00 AM'
    },
    {
      name: 'Snap Fitness',
      address: '1780 Shiloh Rd Ste C',
      lat: 45.787461,
      long: -108.61865535,
      category: 'Gym',
      photo: 'https://igx.4sqi.net/img/general/original/SCtEWfQTfvLESUlXMkAJUUzqAxkNvb1aL706osJYO-Y.jpg'
    },
    {
      name: 'YMCA',
      address: '402 N 32nd St',
      lat: 45.782873705856794,
      long: -108.51378700243235,
      category: 'Gym / Fitness Center',
      tip: 'Friendly staff and clean facilities.',
      photo: 'https://igx.4sqi.net/img/general/original/87069840_DWF8cJ5piV4lskMpsULr2TZPmLDe43E2RWiXpSYaDiU.jpg',
      isOpen: true,
      hours: 'Likely open'
    },
    {
      name: 'High Sierra Park',
      address: 'Wicks Ln',
      lat: 45.829889523073405,
      long: -108.52521607891167,
      category: 'Dog Run',
      tip: "Don't bring treats!",
      photo: 'https://igx.4sqi.net/img/general/original/JM5v0gH6dO1PKURiR8RGq6EwCNeFoPUXNcIqFXhTWwU.jpg',
      isOpen: true,
      hours: 'Likely open'
    },
    {
      name: 'Crowne Plaza Fittness Center',
      lat: 45.78268814086914,
      long: -108.50385284423828,
      category: 'Gym',
      photo: 'https://s-media-cache-ak0.pinimg.com/736x/dd/38/eb/dd38eb8641ca673862dfff2bb8849bfc.jpg'
    },
    {
      name: 'Limber Tree Yoga Studio',
      address: '212 N 29th St',
      lat: 45.78264207266405,
      long: -108.508207466472,
      category: 'Athletics & Sports',
      photo: 'https://s-media-cache-ak0.pinimg.com/736x/dd/38/eb/dd38eb8641ca673862dfff2bb8849bfc.jpg'
    },
    {
      name: 'Beyond Average Joe’s Gym',
      address: '3016 1st Ave N',
      lat: 45.77780520719266,
      long: -108.50659847259521,
      category: 'Gym / Fitness Center',
      photo: 'https://s-media-cache-ak0.pinimg.com/736x/dd/38/eb/dd38eb8641ca673862dfff2bb8849bfc.jpg'
    },
    {
      name: "Fielder's Choice",
      address: '1702 1st Ave N',
      lat: 45.78833992252978,
      long: -108.49277973175049,
      category: 'Gym / Fitness Center',
      photo: 'https://s-media-cache-ak0.pinimg.com/736x/dd/38/eb/dd38eb8641ca673862dfff2bb8849bfc.jpg'
    },
    {
      name: 'Grindhouse',
      address: '1st Street',
      lat: 45.788912,
      long: -108.492662,
      category: 'Martial Arts Dojo',
      photo: 'https://s-media-cache-ak0.pinimg.com/736x/dd/38/eb/dd38eb8641ca673862dfff2bb8849bfc.jpg'
    },
    {
      name: 'North Park',
      lat: 45.79150792494468,
      long: -108.50189291401782,
      category: 'Park',
      tip: 'Yeah, and its ran by homeless people',
      photo: 'https://igx.4sqi.net/img/general/original/ePayC1H7nNjDMTU9dbZ_Fe0OEFDknSTJNGMKvy4v9rE.jpg'
    },
    {
      name: 'The Grindhouse',
      address: '1617 1st Ave N',
      lat: 45.78943,
      long: -108.49252,
      category: 'Boxing Gym',
      photo: 'https://s-media-cache-ak0.pinimg.com/736x/dd/38/eb/dd38eb8641ca673862dfff2bb8849bfc.jpg',
      isOpen: false,
      hours: 'Closed until Noon'
    },
    {
      name: 'South Park',
      address: '6th ave S and S 30th st',
      lat: 45.77468297307998,
      long: -108.4996698904198,
      category: 'Park',
      tip: 'Has an awesome playground for kids! Picnic tables and a pool too!',
      photo: 'https://igx.4sqi.net/img/general/original/1094760_cK9F96K8s34Txe_Dnvo7v5ZKDV1f_U5u2psmnRIV5TA.jpg'
    },
    {
      name: 'Yellowstone River',
      lat: 45.786416342905355,
      long: -108.47967004169911,
      category: 'River',
      photo: 'https://igx.4sqi.net/img/general/original/61834592_vrXcRb7csQCmf3vXOLAGDlruEHQSwVz1y6goDO98H60.jpg'
    },
    {
      name: 'Swords Rimrock Park',
      lat: 45.799096,
      long: -108.508095,
      category: 'Park',
      tip: 'Great place to hike with views of the valley, city and airport.',
      photo: 'https://igx.4sqi.net/img/general/original/81517916_bC-Px4Ij8NEa8Pc-dtP1ZV2-NeRs9cg5jrGR9rUwvJc.jpg',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Rims Hiking Trail',
      address: 'Airport Rd',
      lat: 45.79912299615935,
      long: -108.50807615120837,
      category: 'Trail',
      tip: 'Great place to hike with views of the entire city and valley.',
      photo: 'https://igx.4sqi.net/img/general/original/9420243_UhDrFfHlfJf_3aG2HMoepkb3QI5DsKA2IDhowPb4YE4.jpg'
    },
    {
      name: 'Alternative  Athletics / CrossFit',
      address: '808 4th Ave N',
      lat: 45.79625461321962,
      long: -108.48402500152588,
      category: 'Gym / Fitness Center',
      tip: 'here is a link to the website, you are going to want to check the site often, because they are always changing things up.',
      photo: 'https://igx.4sqi.net/img/general/original/40611516_GNOXhd8mALUlXHJR3F51Pq8awMF63Uhr8QYg4yK9yio.jpg',
      isOpen: true,
      hours: 'Open until 7:00 PM'
    },
    {
      name: 'Five Star MMA',
      address: '544 Wigwam Trl',
      lat: 45.804443,
      long: -108.501538,
      category: 'Martial Arts Dojo',
      photo: 'https://s-media-cache-ak0.pinimg.com/736x/dd/38/eb/dd38eb8641ca673862dfff2bb8849bfc.jpg'
    },
    {
      name: 'Terry Park',
      address: '5th St W',
      lat: 45.77440458964402,
      long: -108.52921435403366,
      category: 'Park',
      tip: 'The spray park is open from Memorial Day to Labor Day',
      photo: 'https://igx.4sqi.net/img/general/original/J5N4Z2HL5204TBRSIACGSWVPRTPXI4GUHMVYEU13ELJXT3TZ.jpg',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: '4 Dances State Park',
      lat: 45.782739925567455,
      long: -108.46755628880221,
      category: 'Trail',
      photo: 'https://igx.4sqi.net/img/general/original/8917493_lytMtotfxZq1AS9hl3Gj7_Yrz5LJFGxp1x3Ke5eHeOs.jpg'
    }
  ],
  sights: [
    {
      name: 'Alberta Bair Theater',
      address: '2801 3rd Ave. N.',
      lat: 45.7837937215616,
      long: -108.50809315979987,
      category: 'Theater',
      tip: 'Pretty nice Theater. Get seats up on the balcony, or in the middle if your sitting in the normal seats. So you can see the whole stage.',
      photo: 'https://igx.4sqi.net/img/general/original/90008642_5ZjCfJklbGt2fcGx1cZvYFWe9oDGVgo2TamLSFoC3rQ.jpg',
      isOpen: true,
      hours: 'Likely open'
    },
    {
      name: 'MetraPark',
      address: '308 6th Ave N',
      lat: 45.7987717980402,
      long: -108.47904846733658,
      category: 'Music Venue',
      tip: 'We had a blast as a vendor at the BMW MOA. The staff and the people just from this area were absolutely amazing to deal with. What a great group of people',
      photo: 'https://igx.4sqi.net/img/general/original/GHETVVPT2CE2VV5GH15CK4HRLRIMQKFXMGOEXGLALO3P0XXR.jpg',
      isOpen: false
    },
    {
      name: 'Carmike Shiloh 14',
      address: '1001 Shiloh Crossing Blvd',
      lat: 45.75139701728476,
      long: -108.61381275429974,
      category: 'Movie Theater',
      tip: 'The super bargain matinee is anything from 4-6 pm...only $6!',
      photo: 'https://igx.4sqi.net/img/general/original/46383143_MwNv1_b9Jz5iMBeLWGc0-Q0nPGvOoWjcTJBRKNTpHEk.jpg',
      isOpen: false,
      hours: 'Closed until 11:30 AM'
    },
    {
      name: 'Yellowstone Art Museum',
      address: '401 N 27th St',
      lat: 45.78579822272468,
      long: -108.50723312878725,
      category: 'Art Museum',
      tip: 'Jam at the YAM on first Fridays. Music and appetizers free. Beer and wine for a fee.',
      photo: 'https://igx.4sqi.net/img/general/original/31315_V3A45iBmBUqk2yp7I7NWL5VtzlJzXHiphxFyr1UIXJU.jpg',
      isOpen: false,
      hours: 'Closed until 10:00 AM'
    },
    {
      name: 'Babcock Theater',
      address: '2nd Ave N',
      lat: 45.782465981681746,
      long: -108.50678093298644,
      category: 'Theater',
      tip: 'o2 Experience coming June 19th',
      photo: 'https://igx.4sqi.net/img/general/original/66335597_0QPTpq1gxgOa9VzsT6jDd6OHETelE3Yh7X3Ai6Nc77Y.jpg'
    },
    {
      name: 'Nova Center for the Performing Arts',
      address: '2317 Montana Ave',
      lat: 45.783987,
      long: -108.4994884,
      category: 'Theater',
      photo: 'https://igx.4sqi.net/img/general/original/60764165_bsJTAIo2Zj-E3fVn9KPnAsCHTrblj6umsmpYqqGTvTg.jpg'
    },
    {
      name: 'Western Heritage Center',
      address: '2822 Montana Ave',
      lat: 45.780713,
      long: -108.50566301,
      category: 'History Museum',
      tip: 'Frederick Billings, the namesake of Billings, never actually lived in the town. Learn about his role in the creation of Billings at the Western Heritage Center or by watching this CSPAN video.',
      photo: 'https://igx.4sqi.net/img/general/original/PSFMTRWGI3UUMYTWXO10KM4KRPXOQEGIOXW0FSMHSEOUAC13.jpg'
    },
    {
      name: 'Heartstrings Gallery',
      address: '119 N 29th St',
      lat: 45.781935531687544,
      long: -108.50717782974243,
      category: 'Art Gallery',
      photo: 'http://clipartix.com/wp-content/uploads/2016/11/Paint-and-sip-clipart.jpg',
      isOpen: false,
      hours: 'Closed until 10:00 AM'
    },
    {
      name: 'Allied Music',
      address: '2906 1st Ave N',
      lat: 45.781135,
      long: -108.507305,
      category: 'Music Venue',
      photo: 'http://clipartix.com/wp-content/uploads/2016/11/Paint-and-sip-clipart.jpg'
    },
    {
      name: 'Sandstone Gallery',
      address: '2913 2nd Ave N',
      lat: 45.7823395687411,
      long: -108.50844383239746,
      category: 'Art Gallery',
      photo: 'https://igx.4sqi.net/img/general/original/UDLa3ZOMZYExyrBSIW7aQQ6yJej9CaV3VPU_OpRrBu0.jpg'
    },
    {
      name: 'CDS The Edge Performing Arts Center',
      address: '1645 Montana Ave',
      lat: 45.788312,
      long: -108.491241,
      category: 'Dance Studio',
      photo: 'http://clipartix.com/wp-content/uploads/2016/11/Paint-and-sip-clipart.jpg'
    },
    {
      name: 'Moss Mansion',
      address: '914 Division St',
      lat: 45.77960389059107,
      long: -108.51591890867383,
      category: 'Museum',
      tip: 'Tours start at 1:00 on Sunday. Last tour leaves at 3:00.  Take the middle tour at 2:00. There are usually a smaller # of people on that tour.',
      photo: 'https://igx.4sqi.net/img/general/original/35337892_nGJCq2bB5UfoPD65JXhdLrQHW_jsn8x2zDAk0IBvio8.jpg'
    },
    {
      name: 'Big Sky Books',
      address: '1203 1st Ave N',
      lat: 45.79154,
      long: -108.48616,
      category: 'Movie Theater',
      photo: 'http://clipartix.com/wp-content/uploads/2016/11/Paint-and-sip-clipart.jpg'
    },
    {
      name: 'Pioneer Park Disc Golf Course',
      address: '1801 Virginia Ln',
      lat: 45.78810122805574,
      long: -108.52711765267664,
      category: 'Disc Golf',
      photo: 'https://igx.4sqi.net/img/general/original/17166268_gQu3vU0vg1EFHl0j73aDm1O8J0QYOGem4F1WY_ThSrg.jpg',
      isOpen: true,
      hours: 'Open until 10:00 PM'
    },
    {
      name: 'Yellowstone County Museum',
      address: '1950 Airport Circle',
      lat: 45.80239276004998,
      long: -108.53770856115469,
      category: 'History Museum',
      tip: "They just opened the patio and it has a chuck wagon. Check it out! Also, Chaz is super friendly and hospitable- sharing wine and snacks with tour groups. Don't miss the sheep herders wagon downstairs!",
      photo: 'https://igx.4sqi.net/img/general/original/6794068_8ppCr7D64A0NZpfs4llU5p1m4-zitRsuslVYDEXavi0.jpg'
    },
    {
      name: 'Frame Hut & Gallery',
      address: '1430 Grand Ave',
      lat: 45.78383597676791,
      long: -108.55269759893417,
      category: 'Art Gallery',
      photo: 'https://igx.4sqi.net/img/general/original/94914762_QuoMI3429GYbmYWhQqM-zExU48UXUKWe3Q9cXFRcsUU.jpg',
      isOpen: true,
      hours: 'Open until 5:00 PM'
    },
    {
      name: 'Billings Studio Theatre Inc',
      address: '1500 Rimrock Rd',
      lat: 45.79828,
      long: -108.55375,
      category: 'Theater',
      tip: 'OMG What a Great place to B on a Friday Or Saturday Evening!! Best Place for a Date Night Peeps!!! O YES... ;-)), :))',
      photo: 'https://igx.4sqi.net/img/general/original/31315_zRt1Zv0wg5LwnsRvfUUeK1cUAU5ENAaprxgKPZR6stw.jpg'
    },
    {
      name: 'Carmike Wynnsong 10',
      address: '2456 Central Ave',
      lat: 45.76904143025142,
      long: -108.57974599606142,
      category: 'Movie Theater',
      tip: "If you go to a matinee you have to wait in the popcorn line to buy tickets. It's excruciating!",
      photo: 'https://igx.4sqi.net/img/general/original/14072976_w2wINjdYNQhRp4ShHGXLZPqDETb_Z6RDYd7VR16QskM.jpg',
      isOpen: false
    },
    {
      name: 'Carmike 7',
      address: '2255 Overland Ave',
      lat: 45.75057,
      long: -108.57277,
      category: 'Movie Theater',
      photo: 'http://clipartix.com/wp-content/uploads/2016/11/Paint-and-sip-clipart.jpg'
    },
    {
      name: 'RimView Dance Studio',
      address: '3419 Central Ave',
      lat: 45.769929,
      long: -108.602727,
      category: 'Dance Studio',
      photo: 'http://clipartix.com/wp-content/uploads/2016/11/Paint-and-sip-clipart.jpg'
    },
    {
      name: 'Geyser Park 2.0',
      address: '7250 Entryway Dr',
      lat: 45.7274,
      long: -108.59905,
      category: 'Mini Golf',
      photo: 'http://clipartix.com/wp-content/uploads/2016/11/Paint-and-sip-clipart.jpg'
    }
  ],
  itineraryId: '59400b9b30186f50cc2ae1be'
};

export default locationsExample;
