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
    src: "/gifs/labRATory.gif",
    role: "Lead Game Programmer / QA-Tester",
    status: "Shipped",
    details: {
      about: "LabRATory is a co-op puzzle-platformer where two scientists are turned into the creatures they've been studying - RATS! Play as Edwin von Braun and Lila Redwood, each with their own unique abilities and a shared tail-connection mechanic.",
      introduction: "I am one of the founding members of the Labratory project and was involved throughout the entire development process, from early prototyping to the <strong>Steam demo release</strong>. I worked as the <strong>Programmer Lead</strong>, taking responsibility for core gameplay systems, technical decision-making, and code quality. In addition to programming, I also supported the QA process by coordinating testing sessions and ensuring the game was stable and ready for the demo release.",
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
        "/gifs/labRATory2.gif",
        "/gifs/labRATory3.gif",
      ],
      whatILearned: "• Leading programming tasks in a team-based game project\n\n• Designing and polishing gameplay mechanics through iteration\n\n• Building scalable UI and settings systems\n\n• Keeping a project stable through structured testing and feedback\n\n• Preparing a game for demos, public testing, and <strong>Steam distribution</strong>",
      gifsFooter: [
        "/gifs/labRATory4.gif",
        "/gifs/labRATory5.gif",
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
    subtitle: "Published on Steam Q1 2025 ",
    description: "Online Multiplayer Shooter Game",
    users: 10,
    createdAt: "1 year",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["PC"],
    src: "/gifs/slug5.gif",
    role: "Game Programmer / QA-Test Lead",
    status: "Shipped",
    details: {
      about: "Slug Wars is a fun, underwater multiplayer shooter where players battle as customizable sea slugs, using power-ups and strategy to dominate vibrant arenas.",
      introduction: "I am one of the <strong>founding members</strong> of this project, and I was involved in every aspect, from the initial stages to its <strong>release on Steam</strong>. My primary role was as a <strong>programmer</strong>, handling various programming tasks. Additionally, I served as the <strong>QA-TEST Lead</strong> for the project, organizing multiple testing sessions and ensuring the game's quality before its release on Steam. Alongside this game, we established <strong>Hovi Production</strong>, which now operates as an official company based in Jyväskylä, Finland.",
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
        "/gifs/slug2.gif",
        "/gifs/slug3.gif",
      ],
      whatILearned: "I learned <strong>multiplayer online programming</strong>, <strong>effective project planning</strong>, and how to ensure quality within a <strong>large-scale project</strong>. Additionally, I gained experience in <strong>managing testing sessions</strong> and improving the overall <strong>game performance</strong>.",
      gifsFooter: [
        "/gifs/slug4.gif",
        "/gifs/slug5.gif",
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
    subtitle: "Published on Play Store",
    description: "Hyper-Casual 3D Mobile Game",
    users: 3,
    createdAt: "6 Weeks",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["Mobile"],
    src: "/gifs/Gunmergemaster.gif",
    role: "Game Programmer",
    status: "Shipped",
    details: {
      about: "Gun Merge Master is a fast-paced, hyper-casual 3D mobile game where players defeat enemies and merge weapons to create powerful upgrades, progressing through challenging levels with engaging mechanics.",
      introduction: "I played a <strong>key role</strong> in the creation of Gun Merge Master, contributing to its design, gameplay mechanics, and overall development process. From <strong>initial concept to release</strong>, I ensured the game's merging system and combat mechanics were polished and engaging for players. This project reflects my dedication to delivering fun and accessible gaming experiences in the hyper-casual genre.",
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
        "/gifs/Gunmergemaster.gif",
      ],
      whatILearned: "With this project, we earned the opportunity to collaborate with <strong>GameFactory in Turkey</strong> after a long <strong>six-month competition</strong> and winning period. Following the development of dozens of clone hyper-casual games, Gun Merge Master became our <strong>first fully original game concept</strong>. I <strong>managed the entire project</strong> while also designing and programming its <strong>core mechanics</strong>, which allowed me to refine my skills in both <strong>leadership</strong> and <strong>technical development</strong>. This experience was a <strong>significant milestone</strong> in my career and a testament to our team's ability to create innovative and engaging content.",
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
    description: "Web-GL based Interactive Puzzle Game",
    users: 6,
    createdAt: "1-2 Months",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["WebGL"],
    src: "/gifs/maidenmystery.gif",
    role: "Game Programmer / Publisher",
    status: "Other",
    details: {
      about: "Maiden Mystery is an interactive web-based puzzle game where players needs to walk in the Jyväskylä city and solve riddles and uncover clues to unravel the mystery of a missing person. With engaging puzzles and a captivating storyline, this game offers a unique and immersive experience for players of all ages.",
      introduction: "Maiden Mystery was created as part of a collaboration with Jyvälän Setlementti, a local organization in Jyväskylä, Finland. The game leaded players to a mystery room after each game. In this project, I served as a game programmer and publisher, contributing to the game's mechanics, controls, and overall design. The result was an interactive and engaging experience that showcased our team's creativity and storytelling abilities.",
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
            "<strong>Web-GL</strong> optimization for web-based platforms",
            "Ensured smooth performance across browsers",
            "<strong>Published</strong> and deployed the game",
          ]
        },
      ],
      gifs: [
        "/gifs/maidenmystery.gif",
      ],
      whatILearned: "For this project I needed to use Web-GL and Unity to create a web-based game because of the target group as my customer wished. I learned how to optimize the game for web-based platforms and ensure a smooth and engaging player experience. This project was a valuable learning experience that helped me grow as a developer and refine my skills in game programming and design.",
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
    title: "Haloween Maddness",
    subtitle: "Do not let the monsters to get you",
    description: "#BIT-Jam Project 2D Game",
    users: 5,
    createdAt: "48 Hours",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["PC"],
    src: "/gifs/halloweenmadness.gif",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Halloween Madness is a Game-Jam project where players need to survive from monsters through the halloween night. With Plants vs Zombies mechanics, this game offers a lighthearted and entertaining experience for players of all ages.",
      introduction: "Halloween Madness was created as part of the BIT-Jam, a 48-hour event that challenges developers to create a game based on a specific theme. In this project, I worked as a game programmer, contributing to the game's mechanics, controls, and overall design. The result was a unique and engaging experience that showcased our team's creativity and collaboration.",
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
        "/gifs/halloweenmadness.gif",
      ],
      whatILearned: "In this project, my goal was to work as systematically as possible with my friends within a 48-hour game jam and write optimized and clean code. We planned properly and completed all the steps despite the limited time, and our game was successful.",
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
      introduction: "As the Lead Programmer in RNG Orange team, I was responsible for implementing the core game logic and mechanics. Our 5-person team (Programming, Art, Art, Audio, Design/QA) collaborated to create Desktop Garden in just one week. The project taught us invaluable lessons about rapid prototyping, team coordination, and scope management. We focused on the essential core elements: 1-3 fully functional plants with visual feedback, 2 working tools, and a proper exit mechanism.",
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
      whatILearned: "This week-long project taught us three critical lessons: (1) For a prototype, focus on core mechanics—it doesn't need to be complete. (2) Teamwork and clear communication across diverse roles is essential. (3) Clear scope and well-defined roles keep things organized and productive. Technically, I gained valuable experience using Unity with Windows APIs to create semi-transparent desktop widgets, mastering desktop overlay integration and window management. This reinforced the value of rapid iteration and collaborative problem-solving under time constraints.",
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
    subtitle: "Take on the role of the best Hissipoika in Finland and manage the skilifts.",
    description: "#Godot Engine #GameJam 2D Game",
    users: 5,
    createdAt: "48 Hours",
    engine: "Godot",
    languages: ["GDScript"],
    platforms: ["PC"],
    src: "/gifs/hissipoika.gif",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Hissi Poika Simulator is a 2D game where players take on the role of a skilift operator and manage the skilifts to ensure the satisfaction of the customers.",
      introduction: "Hissi Poika Simulator was created as part of a Game Jam, I worked as a game programmer, contributing to the game's mechanics and controls. Me and my friends were happy with the result.",
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
        "/gifs/hissipoika.gif",
      ],
      whatILearned: "In this project, I learned how to work with Godot Engine and how to create a 2D game with it. It was my first time to use the engine and the language, and I was happy with the result.",
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
    title: "Royal Banter Game-Jam Project",
    subtitle: "Play Missions for Making the King Laugh",
    description: "#GlobalGameJam 3D Game",
    users: 8,
    createdAt: "48 Hours",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["PC"],
    src: "/gifs/Royalbanter.gif",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Royal Banter is a fun and quirky 2D game where players complete missions to make the king laugh. With a variety of humorous tasks and challenges, this game offers a lighthearted and entertaining experience for players of all ages.",
      introduction: "Royal Banter was created as part of the Global Game Jam, a 48-hour event that challenges developers to create a game based on a specific theme. In this project, I worked as a game programmer, contributing to the game's mechanics, controls, and overall design. The result was a unique and engaging experience that showcased our team's creativity and collaboration.",
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
            "Collaborative development with diverse team",
            "Creative problem-solving and iteration",
          ]
        },
      ],
      gifs: [
        "/gifs/Royalbanter.gif",
      ],
      whatILearned: "Participating in the Global Game Jam was an invaluable experience that allowed me to explore new ideas, work under tight deadlines, and collaborate with a diverse team of developers. I learned the importance of creativity, communication, and adaptability in game development, as well as the value of rapid prototyping and iteration. This project helped me grow as a developer and expand my skills in game programming and design.",
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
    subtitle: "For Game Factory Kuluçka Qualification",
    description: "Hyper-Casual 3D Mobile Game",
    users: 3,
    createdAt: "4 Weeks",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["Mobile"],
    src: "/gifs/Clonemaster.gif",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Count Masters is a fast-paced, hyper-casual 3D mobile game where players compete in exciting battles, using unique characters and abilities to outsmart their opponents and claim victory.",
      introduction: "Count Masters was developed as part of a qualification process for Game Factory Kuluçka, a game development program in Turkey. In this project, I contributed to the game's design, programming, and overall development process, ensuring that the gameplay mechanics and controls were engaging and intuitive for players. This project reflects my passion for creating fun and accessible gaming experiences in the hyper-casual genre.",
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
        "/gifs/Clonemaster.gif",
      ],
      whatILearned: "The development of Count Masters was a challenging yet rewarding experience that allowed me to refine my skills in game programming, design, and project management. I learned the importance of rapid prototyping, user testing, and iteration in creating successful mobile games, as well as the value of collaboration and communication in a team environment. This project was a significant milestone in my career and a testament to my dedication to delivering high-quality gaming experiences.",
      gifsFooter: [
        
      ],
      link: {
        title: "",
        url: "https://github.com/oguzhan00yildiz/Count-Masters--Stickman-Games-Clone-",
      },
      imageSrc: "/img/github.png",
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
    src: "/gifs/Spinofthehill.gif",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Spin of the Hill is a challenging 3D base defense game where players must protect their MonaLisa from waves of enemies using tornado abilty.",
      introduction: "Spin of the Hill was developed as part of a sprint week project at JAMK University of Applied Sciences, where students work together to create a game prototype within a limited timeframe. In this project, I served as a game programmer, contributing to the game's mechanics, controls, and overall design. The result was a unique and engaging experience that showcased our team's creativity and collaboration.",
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
        "/gifs/Spinofthehill.gif",
      ],
      whatILearned: "Participating in the sprint week project was a valuable experience that allowed me to work under tight deadlines, collaborate with a diverse team of developers, and create a game prototype from start to finish. I learned the importance of communication, creativity, and adaptability in game development, as well as the value of rapid prototyping and iteration. This project helped me grow as a developer and expand my skills in game programming and design.",
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
    src: "/gifs/Sliceitall.gif",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Slice It All is a fast-paced, hyper-casual 3D mobile game where players slice through objects to clear the path and reach the finish line, using precision and timing to achieve high scores and unlock new levels.",
      introduction: "Slice It All was developed as part of a collaboration with Game Factory Kuluçka, a game development program in Turkey. In this project, I contributed to the game's design, programming, and overall development process, ensuring that the slicing mechanics and level design were engaging and challenging for players. This project reflects my commitment to creating fun and accessible gaming experiences in the hyper-casual genre.",
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
        "/gifs/Sliceitall.gif",
      ],
      whatILearned: "In this project, I learned how to fully utilize the game engine in alignment with the competition jury's specific requirements. I successfully replicated a highly specific mechanic, showcasing my ability to adapt and implement detailed gameplay features with precision.",
      gifsFooter: [
        
      ],
      link: {
        title: "",
        url: "https://github.com/oguzhan00yildiz/SliceItAll3D-Clone"
        },
        imageSrc: "/img/github.png"
        },
  },

  {
    id: "7",
    title: "Cure Bot Game-Jam Project",
    subtitle: "EVOC-004`s journey",
    description: "#EXPA #GameJam Story-Puzzle 2D Game",
    users: 4,
    createdAt: "48 Hours",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["PC"],
    src: "/gifs/Curebot.gif",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Cure Bot is a story-driven puzzle game where players guide a robot named EVOC-004 through a series of challenging levels, using logic and problem-solving skills to overcome obstacles and complete the journey.",
      introduction: "Cure Bot was created as part of the EXPA Game Jam, a 48-hour event that challenges developers to create a game based on a specific theme. In this project, I worked as a game programmer, contributing to the game's mechanics, controls, and overall design. The result was a unique and engaging experience that showcased our team's creativity and collaboration.",
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
        "/gifs/Curebot.gif",
      ],
      whatILearned: "Participating in the EXPA Game Jam was an invaluable experience that allowed me to explore new ideas, work under tight deadlines, and collaborate with a diverse team of developers. I learned the importance of creativity, communication, and adaptability in game development, as well as the value of rapid prototyping and iteration. This project helped me grow as a developer and expand my skills in game programming and design.",
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
    src: "/gifs/Mobcontrol.gif",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Mob Control is a fast-paced, hyper-casual 3D mobile game where players control a mob of characters, navigating through challenging levels and obstacles to reach the finish line and achieve high scores.",
      introduction: "Mob Control was developed as part of a collaboration with Game Factory Kuluçka, a game development program in Turkey. In this project, I contributed to the game's design, programming, and overall development process, ensuring that the mob control mechanics and level design were engaging and challenging for players. This project reflects my dedication to creating fun and accessible gaming experiences in the hyper-casual genre.",
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
        "/gifs/Mobcontrol.gif",
      ],
      whatILearned: "In this project, I learned how to create dynamic and engaging gameplay mechanics that challenge players to think strategically to achieve their goals. I also gained experience in optimizing game performance and balancing difficulty levels to create a satisfying and rewarding player experience. This project was a valuable learning experience that helped me grow as a developer and refine my skills in game programming and design.",
      gifsFooter: [
        
      ],
      link: {
        title: "",
        url: "https://github.com/oguzhan00yildiz/Mob-Control-Clone",
      },
      imageSrc: "/img/github.png",
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
    src: "/gifs/Coffeestack.gif",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Coffee Stack is a fast-paced, hyper-casual 3D mobile game where players stack coffee cups to create line, using precision and timing to reach new lengths and achieve high scores.",
      introduction: "Coffee Stack was developed as part of a collaboration with Game Factory Kuluçka, a game development program in Turkey. In this project, I contributed to the game's design, programming, and overall development process, ensuring that the stacking mechanics and level design were engaging and challenging for players. This project reflects my commitment to creating fun and accessible gaming experiences in the hyper-casual genre.",
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
        "/gifs/Coffeestack.gif",
      ],
      whatILearned: "In this project, I learned how to create engaging and challenging gameplay mechanics that test players' precision and timing skills. I also gained experience in designing levels that increase in difficulty and complexity, providing a rewarding and satisfying player experience. This project was a valuable learning experience that helped me refine my skills in game programming and design.",
      gifsFooter: [
        
      ],
      link: {
        title: "",
        url: "https://github.com/oguzhan00yildiz/Coffee-Stack-Clone",
      },
      imageSrc: "/img/github.png",
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
    src: "/gifs/Tallmanrun.gif",
    role: "Game Programmer", 
    status: "Other",
    details: {
      about: "Tall Man Run is a fast-paced, hyper-casual 3D mobile game where players control a Stickman character, dodging obstacles and collecting coins to reach the finish line while growing or loosing mess and achieve high scores.",
      introduction:"Tall Man Run was developed as part of a collaboration with Game Factory Kuluçka, a game development program in Turkey. In this project, I contributed to the game's design, programming, and overall development process, ensuring that the running and resizing mechanics and level design were engaging and challenging for players. This project reflects my dedication to creating fun and accessible gaming experiences in the hyper-casual genre.",
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
        "/gifs/Tallmanrun.gif",
      ],
      whatILearned: "In this project, I learned how to create engaging and challenging gameplay mechanics that test players' reflexes and coordination skills. I also gained experience in designing levels that increase in difficulty and complexity, providing a rewarding and satisfying player experience. This project was a valuable learning experience that helped me refine my skills in game programming and design.",
      gifsFooter: [
        
      ],
      link: {
        title: "",
        url: "https://github.com/oguzhan00yildiz/Tall-Man-Run-Clone",
      },
      imageSrc: "/img/github.png",
    },
  },

  {
    id: "12",
    title: "Atlas",
    subtitle: "For Graduating from Vocational school",
    description: "2D Tower Build Mobile Game",
    users: 1,
    createdAt: "1 Week",
    engine: "Unity",
    languages: ["C#"],
    platforms: ["Mobile"],
    src: "/gifs/Atlas.gif",
    role: "Game Programmer",
    status: "Other",
    details: {
      about: "Atlas is a 2D tower build mobile game where players build towers to get the highest score and try to ensure the balance of the tower.",
      introduction: "Atlas was developed as part of a project to graduate from a vocational school, where students could choose their own project idea and work on it for a limited time. In this project, I went solo and made everything from scratch, including the game's mechanics, controls, and overall design and game's lore. The result was a unique and engaging experience that showcased my creativity and dedication to creating fun and challenging gaming experiences.",
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
      "/gifs/Atlas.gif",
      ],
      whatILearned: "Participating in the graduation project was a valuable experience that allowed me to improve my skills in game programming, design, and project management. I learned the importance of time management, planning, and execution in creating a successful game prototype, as well as the value of creativity and innovation in game development. This project was a significant milestone in my career and a testament to my dedication to delivering high-quality gaming experiences.",
      gifsFooter: [
        
      ],
      link: {
        title: "",
        url: "https://github.com/oguzhan00yildiz/Atlas-2D-Tower-Build-Mobile-Game",
      },
      imageSrc: "/img/github.png",
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
      whatILearned: "• Running <strong>LLM, speech-to-text and text-to-speech models locally</strong> inside a game engine\n\n• Designing a <strong>modular, event-driven architecture</strong> that other developers can drop into their projects\n\n• Building <strong>editor tooling</strong> and a package installer that makes complex setup feel effortless\n\n• Balancing response quality against <strong>latency and hardware limits</strong> on consumer PCs",
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
      introduction: "This prototype was built as a <strong>JAMK course project</strong> with access to a <strong>PS5 devkit</strong>. Over about three months our team of three built and tested the game on console hardware. I worked as a <strong>Gameplay Programmer</strong>, focusing on the horse and rider, the combat mechanics, and the physics reactions that make each hit feel impactful. Alongside the core game, we experimented with console features such as <strong>DualSense haptic feedback</strong> and controller vibration.",
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
      about: "A Discord bot that connects a game team's Discord server to Jira. Bug reports and tasks posted in Discord channels are automatically turned into Jira tickets and moved onto the team's board, so nothing gets lost in chat.",
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
