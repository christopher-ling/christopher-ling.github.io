const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "icons/wifi.svg",
  },
  {
    id: 2,
    img: "icons/search.svg",
  },
  {
    id: 3,
    img: "icons/user.svg",
  },
  {
    id: 4,
    img: "icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
    hideOnMobile: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
    hideOnMobile: true,
  },
];

// Apps shown on the phone "home screen" (below the `sm` breakpoint)
const mobileHomeApps = [
  {
    id: "txtfile",
    name: "Pages",
    icon: "pages.png",
    fileName: "about-me.txt",
  },
  {
    id: "terminal",
    name: "Terminal",
    icon: "terminal.png",
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Flask", "MySQL"],
  },
  {
    category: "Cloud",
    items: ["Google Cloud Platform", "Firebase", "Appwrite"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "Jira", "OpenAI API"],
  },
];

const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/christopher-ling",
  },
  {
    id: 2,
    text: "Email",
    icon: "icons/mail.svg",
    bg: "#4bcb63",
    link: "mailto:christopherling.dev@gmail.com",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ling-christopher",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "images/gal1.png",
  },
  {
    id: 2,
    img: "images/gal2.png",
  },
  {
    id: 3,
    img: "images/gal3.png",
  },
  {
    id: 4,
    img: "images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  mobileHomeApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "Secure Mobile Messaging Platform",
      icon: "images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Messaging Platform.txt",
          icon: "images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A secure, real-time mobile messaging app built with React Native, TypeScript and Appwrite (Aug – Dec 2025).",
            "Appwrite handles real-time data sync, secure user authentication and persistent message storage.",
            "Strict TypeScript typing and optimized state management keep runtime errors down and the codebase maintainable.",
            "A responsive, mobile-first UI delivers a seamless experience on both iOS and Android.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/christopher-ling",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "messaging-platform.png",
          icon: "images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "images/project-1.png",
        },
      ],
    },

    {
      id: 6,
      name: "Stock News Predictor",
      icon: "images/folder.png",
      kind: "folder",
      position: "top-44 left-5",
      windowPosition: "top-[10vh] left-20",
      children: [
        {
          id: 1,
          name: "Stock News Predictor.txt",
          icon: "images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A Next.js app that maps real-time financial news sentiment to stock movements, built with Python, Firebase, the OpenAI API and GCP (May – Jul 2025).",
            "A Python pipeline aggregates and processes live financial news and ties market sentiment to specific equities.",
            "Prompt-engineered OpenAI calls power a context-aware, financially accurate chatbot.",
            "Firebase Authentication supports Google and email/password sign-in; the frontend shows dynamic stock trends and sentiment metrics beside the chat.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/christopher-ling",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "stock-news-predictor.png",
          icon: "images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "images/project-2.png",
        },
      ],
    },

    {
      id: 7,
      name: "Flight Tracking Database System",
      icon: "images/folder.png",
      kind: "folder",
      position: "top-80 left-5",
      windowPosition: "top-[15vh] left-40",
      children: [
        {
          id: 1,
          name: "Flight Tracking System.txt",
          icon: "images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A flight operations database system built with Python, Flask, MySQL and HTML/CSS (Jan – May 2025).",
            "Relational schemas use foreign keys, indexing and constraints to keep simulated flight operations ACID compliant.",
            "A responsive HTML/CSS dashboard visualizes flight routes and passenger manifests on top of the backend.",
            "Flask REST endpoints include error handling and input validation to prevent SQL injection and protect data integrity.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/christopher-ling",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "flight-tracking-system.png",
          icon: "images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "images/project-3.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "images/adrian.jpg",
      description: [
        "Hey! I’m Christopher 👋, a Computer Science student at Georgia Tech (B.S. expected December 2026) concentrating in Systems & Architecture and Information Internetworks.",
        "I like building things end to end—from React, Next.js and React Native frontends to Flask and Spring Boot backends—with a soft spot for networking and how data actually moves across the internet.",
        "Recent projects include a secure mobile messaging platform, a stock news sentiment predictor powered by the OpenAI API, and a flight tracking database system.",
        "Outside of class you'll usually find me at a hackathon, tinkering with a side project, or reading about whatever protocol I just discovered.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };