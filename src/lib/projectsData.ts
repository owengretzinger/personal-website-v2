type Project = {
  title: string;
  image: string;
  description: string;
  link: string;
  github: string;
  demo?: string;  // optional demo property
  tags: string[];
};

export const projects: Record<string, Project> = {
  "Habits Together": {
    title: "Habits Together",
    image: "/project-images/habits-together.webp",
    description:
      "Leader of team building mobile app where you can track habits together with friends",
    link: "https://habitstogether.app/",
    github: "https://github.com/habits-together/app",
    tags: ["React Native", "Firebase", "Expo"],
  },

  "(A)Intern": {
    title: "(A)Intern",
    image: "/project-images/aintern.webp",
    description:
      "3D AI video meeting assistant that responds to questions in real-time and takes notes (QHacks 2025)",
    link: "https://devpost.com/software/ai-intern",
    github: "https://github.com/owengretzinger/aintern",
    demo: "https://www.youtube.com/embed/C3fAWMhHPIY",
    tags: ["React", "Express", "OpenAI API", "Websockets", "Recall.ai"],
  },

  "Monkey Mind": {
    title: "Monkey Mind",
    image: "/project-images/monkey-mind.webp",
    description:
      "Chrome extension where you have a pet monkey that wears hats, includes social features (UofTHacks 2025)",
    link: "https://monkeyr.us/",
    github: "https://github.com/owengretzinger/monkey-mind",
    tags: [
      "React",
      "Chrome Extensions API",
      "Express",
      "MongoDB",
      "Websockets",
    ],
  },

  Symphony: {
    title: "Symphony",
    image: "/project-images/symphony.webp",
    description:
      "Real-time multiplayer web app where your drawings get transformed into music (HackWestern 2024)",
    link: "https://github.com/user-attachments/assets/19c79cdc-0c84-4a63-b796-d89baff4029e",
    github: "https://github.com/owengretzinger/symphony",
    demo: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7270103698960248832?compact=1",
    tags: ["React", "Websockets", "Express", "Node.js", "Next.js"],
  },

  "Jazz Musician Website": {
    title: "Jazz Musician Website",
    image: "/project-images/jazz-musician-website.webp",
    description:
      "Website for a professional jazz musician, includes a CMS for editing the website through a dashboard",
    link: "https://mattausgretzinger.com",
    github: "https://github.com/owengretzinger/mattausgretzinger.com",
    tags: ["React", "Decap CMS", "Next.js"],
  },

  "Simple Terms": {
    title: "Simple Terms",
    image: "/project-images/simple-terms.webp",
    description:
      "Chrome extension that summarizes terms & conditions using AI (Hack the North 2023)",
    link: "https://devpost.com/software/simple-terms",
    github: "https://github.com/owengretzinger/simple-terms",
    tags: ["React", "Chrome Extensions API", "OpenAI API"],
  },

  "Room Booking System": {
    title: "Room Booking System",
    image: "/project-images/room-booking-system.webp",
    description:
      "Innovative McMaster room booking website, built for a human computer interfaces course",
    link: "https://room-booking-system-blond.vercel.app/",
    github: "https://github.com/owengretzinger/room-booking-system",
    tags: ["React", "Next.js"],
  },

  "Personal Website v1": {
    title: "Personal Website v1",
    image: "/project-images/personal-website-v1.webp",
    description: "Previous version of my personal website",
    link: "https://v1.owengretzinger.com",
    github: "https://github.com/owengretzinger/personal-website-v1",
    tags: ["React", "Next.js"],
  },

  "Education Data for Change": {
    title: "Education Data for Change",
    image: "/project-images/education-data-for-change.webp",
    description:
      "Website that displays educational data from public schools (DeltaHacks 2023)",
    link: "https://owengretzinger.com/education-data-for-change",
    github: "https://github.com/owengretzinger/education-data-for-change",
    tags: ["HTML", "JavaScript", "SQL"],
  },

  "Server Insights": {
    title: "Server Insights",
    image: "/project-images/server-insights.webp",
    description:
      "Discord bot that analyzes server activity and generates graphs (TrailHacks 2021 1st overall)",
    link: "https://devpost.com/software/server-insights",
    github: "https://github.com/owengretzinger/server-insights",
    tags: ["Python", "Discord.py", "MatPlotLib"],
  },

  "Triangle Ball": {
    title: "Triangle Ball",
    image: "/project-images/triangle-ball.webp",
    description:
      "2D physics-based game where you control a triangle and try to score against an opponent, features advanced bots",
    link: "https://owengretzinger.itch.io/triangle-ball",
    github: "https://github.com/owengretzinger/triangle-ball",
    tags: ["C#", "Unity"],
  },

  "HTML Resume Template": {
    title: "HTML Resume Template",
    image: "/project-images/html-resume-template.webp",
    description:
      "Template for creating a mobile-responsive, printable, ATS-friendly resume using TailwindCSS",
    link: "https://owengretzinger.github.io/html-resume-template/",
    github: "https://github.com/owengretzinger/html-resume-template",
    tags: ["HTML", "TailwindCSS"],
  },

  "Tempestuous Turrets": {
    title: "Tempestuous Turrets",
    image: "/project-images/tempestuous-turrets.webp",
    description:
      "Local multiplayer game where you control a turret and try to defeat your opponents (Hack the North 2022)",
    link: "https://owengretzinger.itch.io/tempestuous-turrets",
    github: "https://github.com/owengretzinger/tempestuous-turrets",
    tags: ["C#", "Unity"],
  },

  "Binary 0101": {
    title: "Binary 0101",
    image: "/project-images/binary-0101.webp",
    description:
      "Web app that teaches the basics of binary, built for a software design course",
    link: "https://stabl.rocks/ShowModulePublish?modulePublishId=0a6330dc-6e05-447c-820f-293aca08929a&fullscreen=true",
    github: "https://github.com/owengretzinger/binary-0101",
    tags: ["Elm"],
  },

  "Smiley Face Game": {
    title: "Smiley Face Game",
    image: "/project-images/smile-game.webp",
    description:
      "Web game where you protect a smiley face by clicking on evil triangles, I made all the art and music",
    link: "https://owengretzinger.itch.io/smile",
    github: "https://github.com/owengretzinger/smiley",
    tags: ["C#", "Unity", "Unity Junior Programming Course"],
  },

  "Boulder Buddies": {
    title: "Boulder Buddies",
    image: "/project-images/boulder-buddies.webp",
    description:
      "Physics-based platformer game where 2 boulders are connected by a magical force (GMTK Game Jam 2021)",
    link: "https://owengretzinger.itch.io/boulderbuddies",
    github: "https://github.com/owengretzinger/boulder-buddies",
    tags: ["C#", "Unity"],
  },

  "Hide and Seek Game": {
    title: "Hide and Seek Game",
    image: "/project-images/hide-and-seek.webp",
    description:
      "Online multiplayer one-vs-many game where a seeker tries to kill hiders before time runs out",
    link: "https://owengretzinger.itch.io/hidenseek",
    github: "https://github.com/owengretzinger/hide-and-seek",
    tags: ["C#", "Unity", "Photon Multiplayer"],
  },

  "Fall Car": {
    title: "Fall Car",
    image: "/project-images/fall-car.webp",
    description:
      "3D endless runner game where you try to get as far as possible without falling off the road",
    link: "https://owengretzinger.itch.io/fall-car",
    github: "https://github.com/owengretzinger/fall-car",
    tags: ["C#", "Unity"],
  },
};
