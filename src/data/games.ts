import type {IGame} from "@/models/IGame";

export const games: IGame[] = [
  {
    id: "0",
    title: "LabRATory",
    subtitle: "Coming soon on Steam (Demo released)",
    description: "Local Co-Op Puzzle-Platformer Game",
    users: 6,
    createdAt: "3 Months",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["PC"],
    src: "/videos/labRATory.mp4",
    role: "Lead Game Programmer / QA-Tester",
    status: "Shipped",
    details: {
      about: "LabRATory is a co-op puzzle-platformer where two scientists are turned into the creatures they've been studying - RATS! Play as Edwin von Braun and Lila Redwood, each with their own unique abilities and a shared tail-connection mechanic.",
      introduction: "I am one of the founding members of <strong>LabRATory</strong> and worked on it from early prototyping to the <strong>Steam demo release</strong>. As <strong>Lead Game Programmer</strong> I was responsible for core gameplay systems, technical decisions and code quality. I also supported QA by coordinating testing sessions and making sure the demo build was stable.",
      titleImage: "/img/labRAToryTitle.jpg",
      workCategories: [
        {
          category: "Gameplay Systems",
          items: [
            "Oversaw gameplay programming, system architecture, and technical decisions",
            "Player movement system (input handling, <strong>coyote time</strong>, ladders & climbing)",
            "Moving platforms, conveyor lines (spline-based), switching platforms & pressure plates",
            "UI systems: Options menu (graphics & controls), pause menu, <strong>input rebinding</strong>",
            "Popup message & interaction systems",
          ]
        },
        {
          category: "Integration & Optimization",
          items: [
            "<strong>Steamworks</strong> integration & <strong>Steam Remote Play</strong> testing",
            "Bug fixing and performance investigation",
            "Refactoring core systems for code quality and maintainability",
          ]
        },
        {
          category: "Quality Assurance & Testing",
          items: [
            "Coordinated playtests and gathered feedback",
            "Supporting the QA process throughout development",
            "Ensured build stability and readiness for demo release",
          ]
        },
      ],
      gifs: [
        "/videos/labRATory2.mp4",
        "/videos/labRATory3.mp4",
      ],
      whatILearned: "• Leading programming tasks in a team-based game project\n\n• Designing and polishing gameplay mechanics through iteration\n\n• Building scalable UI and settings systems\n\n• Keeping a project stable through structured testing and feedback\n\n• Preparing a game for demos, public testing, and <strong>Steam distribution</strong>",
      gifsFooter: [
        "/videos/labRATory4.mp4",
        "/videos/labRATory5.mp4",
      ],
      link: {
        title: "",
        url: "https://store.steampowered.com/app/4078280/LabRATory/",
      },
      imageSrc: "/img/steam.png",
    },
  },
  {
    id: "1",
    title: "Slug Wars",
    subtitle: "Released on Steam in Q1 2025",
    description: "Online Multiplayer Shooter Game",
    users: 10,
    createdAt: "1 Year",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["PC"],
    src: "/videos/slug5.mp4",
    role: "Game Programmer / QA-Test Lead",
    status: "Shipped",
    details: {
      about: "Slug Wars is an underwater online multiplayer shooter where players battle as customizable sea slugs and use power-ups to win arena matches.",
      introduction: "I am one of the <strong>founding members</strong> of Slug Wars and worked on it from the first prototype to its <strong>Steam release</strong>. My main role was <strong>programming</strong>: online multiplayer gameplay, game systems and performance optimization. I was also the <strong>QA-Test Lead</strong>, organizing testing sessions before release. Alongside the game we founded <strong>Hovi Production</strong>, now a registered game company in Jyväskylä, Finland.",
      workCategories: [
        {
          category: "Programming",
          items: [
            "<strong>Multiplayer online</strong> game programming",
            "Various gameplay systems and mechanics",
            "Game <strong>performance optimization</strong>",
          ]
        },
        {
          category: "Quality Assurance",
          items: [
            "Served as <strong>QA-Test Lead</strong> for the project",
            "Organized and managed multiple <strong>testing sessions</strong>",
            "Ensured game quality and stability before <strong>Steam release</strong>",
          ]
        },
        {
          category: "Project & Business",
          items: [
            "Involved in all stages from initial development to release",
            "Co-founded <strong>Hovi Production</strong> company in Jyväskylä, Finland",
          ]
        },
      ],
      gifs: [
        "/videos/slug2.mp4",
        "/videos/slug3.mp4",
      ],
      whatILearned: "• Programming <strong>online multiplayer</strong> gameplay\n\n• Planning and scoping a year-long team project\n\n• Running structured <strong>test sessions</strong> and turning feedback into fixes\n\n• Profiling and improving <strong>game performance</strong>",
      gifsFooter: [
        "/videos/slug4.mp4",
        "/videos/slug5.mp4",
      ],
      link: {
        title: "",
        url: "https://store.steampowered.com/app/3445050/Slug_Wars/",
      },
      imageSrc: "/img/steam.png",
    },
  },

  {
    id: "2",
    title: "Gun Merge Master",
    subtitle: "Released on Google Play",
    description: "Hyper-Casual 3D Mobile Game",
    users: 3,
    createdAt: "6 Weeks",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["Mobile"],
    src: "/videos/Gunmergemaster.mp4",
    role: "Game Programmer",
    status: "Shipped",
    details: {
      about: "Gun Merge Master is a hyper-casual 3D mobile game where players merge weapons into stronger upgrades and use them to fight through levels of enemies.",
      introduction: "Gun Merge Master was our <strong>first original game concept</strong> after building many hyper-casual clones, and it earned our team a collaboration with <strong>GameFactory Turkey</strong> after a six-month competition. I <strong>managed the project</strong> from concept to its Google Play release and designed and programmed the core mechanics: the <strong>merging system</strong>, combat and level progression.",
      workCategories: [
        {
          category: "Gameplay Systems",
          items: [
            "Designed and programmed the <strong>merging system</strong>",
            "Implemented <strong>combat mechanics</strong> and enemy interactions",
            "Level progression and difficulty balancing",
          ]
        },
        {
          category: "Project Management",
          items: [
            "<strong>Managed the entire project</strong> from concept to release",
            "Collaborated with <strong>GameFactory Turkey</strong> after winning a 6-month competition",
            "First <strong>fully original game concept</strong> after developing clone games",
          ]
        },
      ],
      gifs: [
        "/videos/Gunmergemaster.mp4",
      ],
      whatILearned: "• Taking an original mobile game from concept to a <strong>store release</strong>\n\n• Designing and programming a <strong>merge-and-upgrade</strong> gameplay loop\n\n• Balancing level difficulty for short hyper-casual sessions\n\n• <strong>Leading a small team</strong> while also programming core systems",
      gifsFooter: [
        
      ],
      link: {
        title: "",
        url: "https://play.google.com/store/apps/details?id=com.ShatterPointGames.GunMergeMaster",
      },
      imageSrc: "/img/playstore.png",
    },
  },

  {
    id: "3",
    title: "Maiden Mystery / Kilpineidon Tarina",
    subtitle: "Made for Jyvälän Setlementti",
    description: "WebGL Interactive Puzzle Game",
    users: 6,
    createdAt: "1-2 Months",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["WebGL"],
    src: "/videos/maidenmystery.mp4",
    role: "Game Programmer / Publisher",
    status: "Other",
    details: {
      about: "Maiden Mystery is a web-based puzzle game played while walking around Jyväskylä. Players solve riddles and follow clues across the city to uncover the story of a missing person.",
      introduction: "Maiden Mystery was made for <strong>Jyvälän Setlementti</strong>, a local organization in Jyväskylä, Finland. Each playthrough led players to a real mystery room at the end. I worked as a <strong>game programmer and publisher</strong>: I built the puzzle and interaction systems, optimized the <strong>WebGL</strong> build for browsers and published the game.",
      workCategories: [
        {
          category: "Development",
          items: [
            "Game mechanics and <strong>puzzle systems</strong>",
            "Player controls and <strong>interaction systems</strong>",
            "Overall game design and flow",
          ]
        },
        {
          category: "Technical",
          items: [
            "<strong>WebGL</strong> optimization for web browsers",
            "Ensured smooth performance across browsers",
            "<strong>Published</strong> and deployed the game",
          ]
        },
      ],
      gifs: [
        "/videos/maidenmystery.mp4",
      ],
      whatILearned: "• Building and optimizing <strong>Unity WebGL</strong> games for the browser\n\n• Working with a <strong>real client</strong> and designing for their audience\n\n• Connecting puzzle gameplay with <strong>real-world locations</strong>",
      gifsFooter: [
        
      ],
      link: {
        title: "",
        url: "https://oguzhan00yildiz.itch.io/maidenmystery",
      },
      imageSrc: "/img/itch.png",
    },
  },

  {
    id: "4",
    title: "Halloween Madness",
    subtitle: "Don't let the monsters get you",
    description: "BIT-Jam 2D Game",
    users: 5,
    createdAt: "48 Hours",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["PC"],
    src: "/videos/halloweenmadness.mp4",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Halloween Madness is a game jam game where players hold off waves of monsters through Halloween night, using lane defense inspired by Plants vs. Zombies.",
      introduction: "Made in <strong>48 hours</strong> at <strong>BIT-Jam</strong> with a team of five. I worked as a game programmer on the <strong>defense mechanics</strong>, monster spawning and AI, and player controls.",
      workCategories: [
        {
          category: "Gameplay Programming",
          items: [
            "Implemented <strong>Plants vs Zombies</strong> style defense mechanics",
            "Monster spawning and AI behavior",
            "Player controls and game flow",
          ]
        },
        {
          category: "Development Process",
          items: [
            "Wrote <strong>optimized and clean code</strong> under 48-hour constraint",
            "Systematic planning and execution with the team",
          ]
        },
      ],
      gifs: [
        "/videos/halloweenmadness.mp4",
      ],
      whatILearned: "My goal was to work as <strong>systematically</strong> as possible with my teammates during a 48-hour jam and still write <strong>clean, optimized code</strong>. We planned carefully, finished every feature we had planned despite the time limit, and were happy with the result.",
      gifsFooter: [
        
      ],
      link: {
        title: "",
        url: "https://oguzhan00yildiz.itch.io/halloween-madness",
      },
      imageSrc: "/img/itch.png",
    },
  },

  {
    id: "5",
    title: "Desktop Garden",
    subtitle: "Desktop Idle Game - RNG Orange",
    description: "A desktop-overlay idle game where you nurture and grow plants",
    users: 5,
    createdAt: "1 Week",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["PC", "WebGL"],
    src: "https://img.itch.zone/aW1hZ2UvNDI3NTkxNi8yNTk3ODcwMC5wbmc=/original/tEMPx1.png",
    role: "Lead Programmer / Product Owner",
    status: "Other",
    details: {
      about: "Desktop Garden is a desktop-overlay idle game where you nurture and grow plants in real-time on your desktop. Care for various plant types using tools like fertilizers and water cans, harvest them, and unlock new varieties as you progress. The game grows quietly in the background while you work, gaining XP and currency to expand your garden.",
      introduction: "As the <strong>Lead Programmer</strong> of team RNG Orange, I was responsible for the core game logic and mechanics. Our 5-person team (programming, two artists, audio, design/QA) built Desktop Garden in <strong>one week</strong>. We kept the scope to the essentials: 1–3 fully working plants with visual feedback, 2 working tools and a proper exit mechanism.",
      titleImage: "/img/desktop-garden-cover.png",
      workCategories: [
        {
          category: "Core Gameplay Systems",
          items: [
            "Plant growth and progression system with XP mechanics",
            "Tool system (fertilizers, water cans, plant shears)",
            "Inventory and pot management for simultaneous plant growth",
            "Leveling system with plant tier unlocking",
            "In-game currency and rewards system"
          ]
        },
        {
          category: "Technical Implementation",
          items: [
            "Desktop overlay integration with semi-transparent windows",
            "Windows API integration for desktop widget functionality",
            "Real-time plant state management",
            "Save/load persistence system",
            "UI systems and player interaction"
          ]
        },
        {
          category: "Team Collaboration (RNG Orange)",
          items: [
            "Oguzhan Yildiz - Programming (Lead)",
            "Juuso Ronkainen - Art",
            "Aleksi Juhola - Art",
            "David Adeyinka - Audio",
            "Dániel Simon - Design / QA"
          ]
        }
      ],
      gifs: [],
      whatILearned: "This week-long project taught us three lessons: (1) a prototype should focus on its core mechanics, it doesn't need to be complete; (2) clear communication across different roles is essential; (3) a clear scope and well-defined roles keep a team productive. Technically, I learned to use <strong>Unity with Windows APIs</strong> to create semi-transparent desktop widgets, including desktop overlay integration and window management.",
      gifsFooter: [],
      link: {
        title: "Play on itch.io",
        url: "https://oguzhan00yildiz.itch.io/desktop-garden",
      },
      imageSrc: "/img/itch.png",
    },
  },

  {
    id: "6",
    title: "Hissi Poika Simulator", 
    subtitle: "Run the ski lifts as Finland's best hissipoika",
    description: "Godot Game Jam 2D Game",
    users: 5,
    createdAt: "48 Hours",
    engine: "Godot",
    languages: ["GDScript"],
    platforms: ["PC"],
    src: "/videos/hissipoika.mp4",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Hissi Poika Simulator is a 2D game jam game where players run the ski lifts as a hissipoika (lift operator) and keep the customers happy.",
      introduction: "Made during a <strong>48-hour game jam</strong> with a team of five. I worked as a game programmer on the ski lift management, the customer satisfaction system and player controls. It was my first project in <strong>Godot</strong>.",
      workCategories: [
        {
          category: "Gameplay Programming",
          items: [
            "Skilift management mechanics",
            "Customer satisfaction system",
            "Player controls and interactions",
          ]
        },
        {
          category: "Technical Learning",
          items: [
            "First experience with <strong>Godot Engine</strong>",
            "Learned <strong>GDScript</strong> programming language",
          ]
        },
      ],
      gifs: [
        "/videos/hissipoika.mp4",
      ],
      whatILearned: "• My first project in <strong>Godot Engine</strong> and <strong>GDScript</strong>\n\n• Picking up a new engine quickly under game jam time pressure",
      gifsFooter: [
        
      ],
      link: {
        title: "",
        url: "https://giacomo-trenna.itch.io/hissipoika-simulator",
      },
      imageSrc: "/img/itch.png",
    },
  },

  {
    id: "10",
    title: "Royal Banter",
    subtitle: "Complete missions to make the king laugh",
    description: "Global Game Jam 2D Game",
    users: 8,
    createdAt: "48 Hours",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["PC"],
    src: "/videos/Royalbanter.mp4",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Royal Banter is a 2D Global Game Jam game where players complete silly missions to make the king laugh.",
      introduction: "Made in <strong>48 hours</strong> at <strong>Global Game Jam</strong>. I worked as a game programmer on the <strong>mission system</strong>, character controls and the game flow.",
      workCategories: [
        {
          category: "Gameplay Programming",
          items: [
            "Mission-based gameplay mechanics",
            "Character controls and interactions",
            "Game flow and progression systems",
          ]
        },
        {
          category: "Game Jam Experience",
          items: [
            "Rapid prototyping under <strong>48-hour deadline</strong>",
            "Splitting work across the team under a hard deadline",
          ]
        },
      ],
      gifs: [
        "/videos/Royalbanter.mp4",
      ],
      whatILearned: "• Rapid prototyping a <strong>mission-based</strong> game in 48 hours\n\n• Splitting programming work with teammates under a hard deadline",
      gifsFooter: [
        
      ],
      link: {
        title: "",
        url: "https://oguzhan00yildiz.itch.io/royal-banter",
      },
      imageSrc: "/img/itch.png",
    },
  },

  {
    id: "13",
    title: "Count Masters (Clone)",
    subtitle: "For Game Factory Kuluçka qualification",
    description: "Hyper-Casual 3D Mobile Game",
    users: 3,
    createdAt: "4 Weeks",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["Mobile"],
    src: "/videos/Clonemaster.mp4",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "A clone of the hyper-casual crowd runner Count Masters: players grow a crowd by running through multiplier gates, then battle rival crowds at the end of each level.",
      introduction: "Made to qualify for <strong>Game Factory Kuluçka</strong>, a game development incubator program in Turkey. I programmed the <strong>crowd multiplication</strong> and battle systems, mobile controls and level progression.",
      workCategories: [
        {
          category: "Gameplay Systems",
          items: [
            "Crowd control and multiplication mechanics",
            "Battle and combat systems",
            "Level design and progression",
          ]
        },
        {
          category: "Development",
          items: [
            "<strong>Rapid prototyping</strong> for competition requirements",
            "User testing and iteration",
            "Mobile-optimized controls and UI",
          ]
        },
      ],
      gifs: [
        "/videos/Clonemaster.mp4",
      ],
      whatILearned: "• Recreating a commercial hyper-casual game's core loop for a <strong>qualification task</strong>\n\n• Moving and battling <strong>large crowds of characters</strong> efficiently on mobile",
      gifsFooter: [
        
      ],
      contactNote: "This project's repository is private. If you're interested, feel free to contact me and I can share the code and more details.",
      imageSrc: "",
    },
  },

  {
    id: "14",
    title: "Spin Of The Hill",
    subtitle: "For JAMK Sprint Week",
    description: "Base Defense 3D Game",
    users: 6,
    createdAt: "1 Week",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["PC", "WebGL"],
    src: "/videos/Spinofthehill.mp4",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Spin of the Hill is a 3D base defense game where players protect the Mona Lisa from waves of enemies using a tornado ability.",
      introduction: "Made during a <strong>one-week sprint</strong> at JAMK University of Applied Sciences. I worked as a game programmer on the <strong>tornado ability</strong> and its physics, the enemy wave and base defense systems, and player controls.",
      workCategories: [
        {
          category: "Gameplay Programming",
          items: [
            "<strong>Tornado ability</strong> mechanics and physics",
            "Base defense and enemy wave systems",
            "Player controls and interactions",
          ]
        },
        {
          category: "Development Process",
          items: [
            "Prototype development within <strong>1-week sprint</strong>",
            "Collaborative team development",
          ]
        },
      ],
      gifs: [
        "/videos/Spinofthehill.mp4",
      ],
      whatILearned: "• Building a <strong>physics-driven ability</strong> that is fun to control\n\n• Planning a playable prototype within a <strong>one-week sprint</strong>",
      gifsFooter: [
        
      ],
      link: {
        title: "",
        url: "https://oguzhan00yildiz.itch.io/spin-of-the-hill",
      },
      imageSrc: "/img/itch.png"
  },
},

  {
    id: "15",
    title: "Slice It All (Clone)",
    subtitle: "For Game Factory Kuluçka",
    description: "Hyper-Casual 3D Mobile Game",
    users: 3,
    createdAt: "2 Weeks",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["Mobile"],
    src: "/videos/Sliceitall.mp4",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "A clone of the hyper-casual game Slice It All: players flip a knife forward, slicing through objects on the way to the finish line.",
      introduction: "Made for <strong>Game Factory Kuluçka</strong>, a game development incubator in Turkey. The jury required the slicing mechanic to match the original closely, so I focused on the <strong>slicing physics</strong>, object cutting and mobile performance.",
      workCategories: [
        {
          category: "Gameplay Systems",
          items: [
            "<strong>Slicing mechanics</strong> with precise physics",
            "Object destruction and cutting systems",
            "Level design and obstacle placement",
          ]
        },
        {
          category: "Technical Implementation",
          items: [
            "Replicated <strong>highly specific mechanics</strong> per jury requirements",
            "Mobile-optimized performance",
          ]
        },
      ],
      gifs: [
        "/videos/Sliceitall.mp4",
      ],
      whatILearned: "• Replicating a very specific mechanic exactly to a <strong>jury's requirements</strong>\n\n• Building object cutting and destruction that runs well on <strong>mobile</strong>",
      gifsFooter: [
        
      ],
      contactNote: "This project's repository is private. If you're interested, feel free to contact me and I can share the code and more details.",
        imageSrc: "",
        },
  },

  {
    id: "7",
    title: "Cure Bot",
    subtitle: "EVOC-004's journey",
    description: "EXPA Game Jam Story-Puzzle 2D Game",
    users: 4,
    createdAt: "48 Hours",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["PC"],
    src: "/videos/Curebot.mp4",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Cure Bot is a story-driven 2D puzzle game where players guide the robot EVOC-004 through a series of levels.",
      introduction: "Made in <strong>48 hours</strong> at the <strong>EXPA Game Jam</strong>. I worked as a game programmer on the puzzle logic, EVOC-004's controls and level progression.",
      workCategories: [
        {
          category: "Gameplay Programming",
          items: [
            "<strong>Puzzle mechanics</strong> and logic systems",
            "Robot character controls (EVOC-004)",
            "Level progression and obstacles",
          ]
        },
        {
          category: "Game Jam Development",
          items: [
            "Story-driven gameplay implementation",
            "Rapid prototyping under <strong>48-hour deadline</strong>",
          ]
        },
      ],
      gifs: [
        "/videos/Curebot.mp4",
      ],
      whatILearned: "• Building puzzle mechanics and level flow within <strong>48 hours</strong>\n\n• Combining a short <strong>story</strong> with puzzle gameplay",
      gifsFooter: [
        
      ],
      link: {
        title: "",
        url: "https://oguzhan00yildiz.itch.io/curebot",
      },
      imageSrc: "/img/itch.png",
    },
  },

  {
    id: "8",
    title: "Mob Control (Clone)",
    subtitle: "For Game Factory Kuluçka",
    description: "Hyper-Casual 3D Mobile Game",
    users: 3,
    createdAt: "2 Weeks",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["Mobile"],
    src: "/videos/Mobcontrol.mp4",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "A clone of the hyper-casual game Mob Control: players fire crowds of units through multiplier gates to overrun the enemy base.",
      introduction: "Made for <strong>Game Factory Kuluçka</strong>, a game development incubator in Turkey. I programmed the <strong>crowd mechanics</strong>, unit pathfinding, level difficulty and performance optimizations.",
      workCategories: [
        {
          category: "Gameplay Systems",
          items: [
            "<strong>Mob control</strong> and crowd mechanics",
            "Strategic gameplay and pathfinding",
            "Level design with increasing difficulty",
          ]
        },
        {
          category: "Optimization",
          items: [
            "<strong>Game performance optimization</strong>",
            "Difficulty balancing for player satisfaction",
          ]
        },
      ],
      gifs: [
        "/videos/Mobcontrol.mp4",
      ],
      whatILearned: "• Moving <strong>large numbers of units</strong> with pathfinding on mobile hardware\n\n• Tuning difficulty across levels",
      gifsFooter: [
        
      ],
      contactNote: "This project's repository is private. If you're interested, feel free to contact me and I can share the code and more details.",
      imageSrc: "",
  },
},

  {
    id: "9",
    title: "Coffee Stack (Clone)",
    subtitle: "For Game Factory Kuluçka",
    description: "Hyper-Casual 3D Mobile Game",
    users: 3,
    createdAt: "2 Weeks",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["Mobile"],
    src: "/videos/Coffeestack.mp4",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "A clone of the hyper-casual game Coffee Stack: players collect coffee cups into a growing line and steer it past obstacles to the finish.",
      introduction: "Made for <strong>Game Factory Kuluçka</strong>, a game development incubator in Turkey. I programmed the <strong>stacking</strong> and cup-line mechanics, scoring and obstacle layouts.",
      workCategories: [
        {
          category: "Gameplay Systems",
          items: [
            "<strong>Stacking mechanics</strong> with precision timing",
            "Cup collection and line formation systems",
            "Score tracking and progression",
          ]
        },
        {
          category: "Level Design",
          items: [
            "Increasing difficulty and complexity",
            "Obstacle placement and challenge balancing",
          ]
        },
      ],
      gifs: [
        "/videos/Coffeestack.mp4",
      ],
      whatILearned: "• Making a following line of objects move smoothly\n\n• Placing obstacles to raise difficulty gradually across levels",
      gifsFooter: [
        
      ],
      contactNote: "This project's repository is private. If you're interested, feel free to contact me and I can share the code and more details.",
      imageSrc: "",
    },
  },

  {
    id: "11",
    title: "Tall Man Run (Clone)",
    subtitle: "For Game Factory Kuluçka",
    description: "Hyper-Casual 3D Mobile Game",
    users: 3,
    createdAt: "2 Weeks",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["Mobile"],
    src: "/videos/Tallmanrun.mp4",
    role: "Game Programmer", 
    status: "Other",
    details: {
      about: "A clone of the hyper-casual game Tall Man Run: players run through gates that make the character taller or wider, dodging obstacles and collecting coins on the way to the finish.",
      introduction:"Made for <strong>Game Factory Kuluçka</strong>, a game development incubator in Turkey. I programmed the <strong>running and resizing</strong> character mechanics, obstacle collisions, coin collection and level difficulty.",
      workCategories: [
        {
          category: "Gameplay Systems",
          items: [
            "<strong>Running and resizing</strong> character mechanics",
            "Obstacle dodging and collision systems",
            "Coin collection and scoring",
          ]
        },
        {
          category: "Level Design",
          items: [
            "Progressive difficulty and complexity",
            "Reflex and coordination challenges",
          ]
        },
      ],
      gifs: [
        "/videos/Tallmanrun.mp4",
      ],
      whatILearned: "• Scaling a character's body in real time based on gameplay\n\n• Designing levels with steadily increasing difficulty",
      gifsFooter: [
        
      ],
      contactNote: "This project's repository is private. If you're interested, feel free to contact me and I can share the code and more details.",
      imageSrc: "",
    },
  },

  {
    id: "12",
    title: "Atlas",
    subtitle: "Vocational school graduation project",
    description: "2D Tower-Building Mobile Game",
    users: 1,
    createdAt: "1 Week",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["Mobile"],
    src: "/videos/Atlas.mp4",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Atlas is a 2D mobile game where players stack tower blocks as high as they can while keeping the tower balanced.",
      introduction: "Atlas was my <strong>graduation project</strong> for the computer programming program, where each student chose their own idea. I designed and programmed the whole game, including the tower physics, balance and scoring systems, controls, UI and the game's lore. The original art was made by Skyrodalf.",
      workCategories: [
        {
          category: "Full Development (Solo)",
          items: [
            "<strong>Tower building</strong> mechanics and physics",
            "Balance system and scoring",
            "Player controls and interactions",
          ]
        },
        {
          category: "Design & Creative",
          items: [
            "Complete <strong>game design from scratch</strong>",
            "Game lore and visual direction",
            "UI/UX design for mobile",
          ]
        },
      ],
      gifs:[
      "/videos/Atlas.mp4",
      ],
      whatILearned: "• Planning and finishing a <strong>complete game</strong> on my own within a deadline\n\n• Physics-based <strong>stacking and balance</strong>\n\n• Designing UI for mobile screens",
      gifsFooter: [
        
      ],
      contactNote: "This project's repository is private. If you're interested, feel free to contact me and I can share the code and more details.",
      imageSrc: "",
    },
  },

  {
    id: "17",
    title: "Local AI-Driven NPCs",
    subtitle: "Open-source Unity package on GitHub",
    description: "Offline Voice-to-Voice AI NPC System for Unity",
    users: 1,
    createdAt: "8 Months",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["PC"],
    src: "/img/ai-npcs-cover.jpg",
    conceptCover: true,
    role: "Solo Developer",
    status: "Other",
    details: {
      about: "A plug-and-play, 100% on-device AI NPC system for Unity. Players walk up to an NPC and simply talk: their voice is transcribed, a local Large Language Model writes the reply in character, and the NPC answers out loud. No cloud APIs, no subscriptions and nothing leaves the player's computer.",
      introduction: "I designed and built this system <strong>solo</strong> as an open-source Unity package. The goal was to make <strong>real-time, voice-driven NPC conversations</strong> work fully offline and to make adding them to any project take minutes. It combines a <strong>local LLM</strong> (llama.cpp via LLMUnity, supporting GGUF models such as Qwen, Llama, Mistral and Phi-3), <strong>Whisper</strong> speech-to-text and <strong>Piper</strong> neural text-to-speech into one decoupled, event-driven architecture.",
      workCategories: [
        {
          category: "AI Pipeline",
          items: [
            "<strong>Voice-to-voice loop</strong>: microphone → Whisper STT → streaming LLM reply → Piper TTS",
            "Real-time <strong>voice activity detection</strong> and silence handling",
            "Streaming responses split into sentences and spoken as they arrive for <strong>low latency</strong>",
            "Model warm-up and <strong>GPU acceleration</strong> toggles for smooth runtime performance",
          ]
        },
        {
          category: "Architecture & Developer Experience",
          items: [
            "Decoupled services (<strong>AISystemManager</strong>, VoiceInput/VoiceOutput services, <strong>NPCAgent</strong>) that auto-bind at runtime",
            "<strong>ScriptableObject personality presets</strong> for NPC identity, backstory and voice",
            "Public <strong>C# API</strong> to trigger conversations, LLM queries and speech from gameplay code",
            "Works with both the <strong>New Input System</strong> and the legacy Input Manager",
          ]
        },
        {
          category: "Tooling & Distribution",
          items: [
            "Distributed as a <strong>UPM package</strong> installable from a Git URL",
            "<strong>One-click installer</strong> that resolves dependencies and configures package registries",
            "Editor window that <strong>downloads and assigns models</strong> automatically",
            "Editor tools for browsing voices and checking system and GPU health",
          ]
        },
      ],
      gifs: [],
      whatILearned: "• Running <strong>LLM, speech-to-text and text-to-speech models locally</strong> inside a game engine\n\n• Designing a <strong>modular, event-driven architecture</strong> that other developers can drop into their projects\n\n• Building <strong>editor tooling</strong> and a package installer that turn a complex setup into a few clicks\n\n• Balancing response quality against <strong>latency and hardware limits</strong> on consumer PCs",
      gifsFooter: [],
      link: {
        title: "",
        url: "https://github.com/oguzhan00yildiz/Unity-Local-AI-Driven-NPCs",
      },
      imageSrc: "/img/github.png",
    },
  },

  {
    id: "16",
    title: "PS5 Devkit Jousting Prototype",
    subtitle: "JAMK course project on PS5 devkit",
    description: "Local Multiplayer Physics-Based Jousting Prototype",
    users: 3,
    createdAt: "3 Months",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["PS5"],
    src: "/img/ps5-jousting-cover.jpg",
    conceptCover: true,
    role: "Gameplay Programmer",
    status: "Other",
    details: {
      about: "A local multiplayer jousting prototype where players charge at each other on horseback in an arena, aiming their lances and blocking with shields. Hits are physics-driven, knocking riders off their horses into ragdolls.",
      introduction: "This prototype was built as a <strong>JAMK course project</strong> with access to a <strong>PS5 devkit</strong>. Over about three months our team of three built and tested the game on console hardware. I worked as a <strong>Gameplay Programmer</strong>, focusing on the horse and rider, the combat mechanics, and the physics reactions when a lance hits. Alongside the core game, we experimented with console features such as <strong>DualSense haptic feedback</strong> and controller vibration.",
      workCategories: [
        {
          category: "Horse & Rider",
          items: [
            "Set up the horse and rider with walking and running <strong>animations</strong>",
            "Matched running speed to the animation for grounded movement",
            "<strong>Upper-body aiming</strong> so the rider can point the lance independently of the horse",
          ]
        },
        {
          category: "Combat Mechanics",
          items: [
            "<strong>Lancing</strong> system with hit detection and damage",
            "<strong>Shield system</strong> with its own health that blocks lance hits and breaks",
            "Physics <strong>force on impact</strong> and <strong>ragdoll</strong> spawning with lance and shield",
          ]
        },
        {
          category: "Console Experimentation",
          items: [
            "Tested and played the game on <strong>PS5 devkit</strong> hardware",
            "Experimented with <strong>DualSense haptics</strong> and vibration feedback",
            "Local multiplayer with controller input",
          ]
        },
      ],
      gifs: [],
      whatILearned: "• Developing and testing a game on <strong>console hardware</strong>\n\n• Using <strong>haptic feedback</strong> to make gameplay feel more physical\n\n• Combining animation, IK-style aiming and <strong>ragdoll physics</strong> into one combat loop",
      gifsFooter: [],
      contactNote: "Footage from this project isn't public. If you're interested, feel free to contact me and I can share gameplay footage and more details.",
      imageSrc: "",
    },
  },

  {
    id: "18",
    title: "AR Mystery",
    subtitle: "Augmented reality escape-room puzzle",
    description: "AR Puzzle Game for Android",
    users: 1,
    createdAt: "1 Month",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["Mobile", "AR / VR"],
    src: "/img/ar-mystery-cover.jpg",
    conceptCover: true,
    role: "Solo Developer",
    status: "Other",
    details: {
      about: "AR Mystery is an augmented reality puzzle game that places a mysterious living room into the player's real surroundings. Players explore the room through their phone, inspect objects and connect clues to crack the final safe.",
      introduction: "I built AR Mystery <strong>solo</strong> in Unity 6 using <strong>AR Foundation</strong> and <strong>ARCore</strong> for Android. I handled everything from the level design of the room to the interaction systems and puzzle flow.",
      workCategories: [
        {
          category: "AR & Interaction",
          items: [
            "<strong>AR Foundation / ARCore</strong> setup for placing the scene in the real world",
            "Touch-based <strong>object interaction</strong> for inspecting items in AR",
            "Input and UI managers adapted for mobile AR",
          ]
        },
        {
          category: "Puzzle & Level Design",
          items: [
            "Designed the <strong>living room</strong> environment and clue layout",
            "Puzzle chain with a <strong>painting</strong>, a <strong>clock</strong> and a <strong>combination safe</strong>",
            "Win flow and game restart",
          ]
        },
      ],
      gifs: [],
      whatILearned: "• Building games with <strong>AR Foundation and ARCore</strong>\n\n• Designing puzzles that make players physically <strong>move around and look closer</strong>\n\n• Adapting interaction and UI for <strong>handheld AR</strong>",
      gifsFooter: [],
      contactNote: "This project's repository is private. If you're interested, feel free to contact me and I can share footage and more details.",
      imageSrc: "",
    },
  },

  {
    id: "19",
    title: "Zombie Base Defense",
    subtitle: "Unreal Engine 5 prototype",
    description: "Base Defense Game built with Blueprints",
    users: 1,
    createdAt: "3 Months",
    engine: "Unreal Engine",
    languages: ["Blueprints"],
    platforms: ["PC"],
    src: "/img/unreal-defense-cover.jpg",
    conceptCover: true,
    role: "Solo Developer",
    status: "Other",
    details: {
      about: "A base defense prototype where waves of zombies push toward the player's base. Killing zombies earns money that can be spent on turrets placed in base slots, and the game ends when the base falls.",
      introduction: "I built this prototype <strong>solo</strong> in <strong>Unreal Engine 5.5</strong> using <strong>Blueprints</strong> to learn Unreal's workflow coming from a Unity background. It covers a full gameplay loop from combat and economy to UI and game over.",
      workCategories: [
        {
          category: "Gameplay",
          items: [
            "Zombie enemies with <strong>health</strong> and on-screen health text",
            "<strong>Economy</strong>: money awarded on each zombie kill",
            "<strong>Turret slots</strong> around the base",
            "<strong>Base health</strong> and game over state",
          ]
        },
        {
          category: "UI & Levels",
          items: [
            "Score and money <strong>UI</strong>",
            "Level design for the defense arena",
          ]
        },
      ],
      gifs: [],
      whatILearned: "• Working in <strong>Unreal Engine 5</strong> and its <strong>Blueprint</strong> visual scripting\n\n• Translating gameplay patterns I knew from Unity into Unreal's <strong>actor and component</strong> model\n\n• Building a complete loop of <strong>combat, economy and progression</strong>",
      gifsFooter: [],
      contactNote: "This project's repository is private. If you're interested, feel free to contact me and I can share footage and more details.",
      imageSrc: "",
    },
  },

  {
    id: "20",
    title: "Discord → Jira Bot",
    subtitle: "Team workflow automation tool",
    description: "Python Bot that Turns Discord Reports into Jira Tickets",
    users: 2,
    createdAt: "1 Month",
    engine: "discord.py",
    languages: ["Python"],
    platforms: ["Discord"],
    src: "/img/discord-jira-bot-cover.jpg",
    conceptCover: true,
    role: "Tools Programmer",
    status: "Other",
    details: {
      about: "A Discord bot that connects a game team's Discord server to Jira. Bug reports and tasks posted in Discord channels are automatically turned into Jira tickets and moved onto the team's board.",
      introduction: "I built this tool to <strong>speed up our team's bug reporting</strong> workflow. Instead of copying messages into Jira by hand, the bot listens to Discord channels and creates and transitions tickets automatically. It is written in <strong>Python</strong> with <strong>discord.py</strong> and the <strong>Jira API</strong>, and runs in <strong>Docker</strong>.",
      workCategories: [
        {
          category: "Automation",
          items: [
            "Creates <strong>Jira tickets</strong> from Discord messages",
            "Detects the <strong>work type</strong> from the message (Bug by default)",
            "Attaches linked <strong>video footage</strong> to tickets",
            "Moves new tickets onto the <strong>Kanban board</strong> automatically",
          ]
        },
        {
          category: "Deployment",
          items: [
            "<strong>Docker / Docker Compose</strong> setup for running on a server",
            "Configuration through <strong>environment variables</strong>",
            "Automated tests for the bot logic",
          ]
        },
      ],
      gifs: [],
      whatILearned: "• Integrating <strong>third-party APIs</strong> (Discord and Jira) into one workflow\n\n• Building <strong>tools that save a team time</strong> every day\n\n• Packaging and deploying a service with <strong>Docker</strong>",
      gifsFooter: [],
      contactNote: "This project's repository is private. If you're interested, feel free to contact me and I can share more details.",
      imageSrc: "",
    },
  },

];
