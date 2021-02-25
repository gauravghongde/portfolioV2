export interface Social { label: string; url: string };
export interface Skill { label: string; entries: any };
export interface NavItem { label: string; url: any };
export interface ProjectLink { code: string; preview: string }
export interface Project { title: string; description: string; features: string[]; techStack: string[]; link: ProjectLink };

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Projects",
    url: "/projects"
  },
  {
    label: "Skills",
    url: "/skills"
  },
  {
    label: "Resume",
    url: "/resume"
  },
  {
    label: "Contact",
    url: "/contact"
  },
  {
    label: "Feedback",
    url: "/feedback"
  },
]

export const resumeSourcePDF = "https://gauravghongde.github.io/resume/resume.pdf";

export const fileConfig = "_white.svg";
export const socialLinkBaseURL = "https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/White/";

export const socialSites = [
  {
    label: "Folio",
    url: "https://fio.now.sh/gsg7397"
  },
  {
    label: "Github",
    url: "https://github.com/gauravghongde"
  },
  {
    label: "Twitter",
    url: "https://twitter.com/madebygaurav"
  },
  {
    label: "LinkedIN",
    url: "https://www.linkedin.com/in/gauravghongde"
  },
  {
    label: "Gmail",
    url: "mailto:7gaurav.ghongde@gmail.com"
  },
  // {
  //   label: "Instagram",
  //   url: "https://www.instagram.com/madebygaurav"
  // },
  // {
  //   label: "Behance",
  //   url: "https://www.behance.net/gauravghongde"
  // },
  // {
  //   label: "Telegram",
  //   url: "https://telegram.me/gsg7397"
  // },
  // {
  //   label: "Discord",
  //   url: "https://discord.gg/2RHSUwy"
  // },
  // {
  //   label: "GooglePlay",
  //   url: "https://play.google.com/store/apps/dev?id=7300960281868524728"
  // },
];

export const skills = [
  {
    label: "Languages",
    entries: ["Java, Python, TypeScript, JavaScript"]
  },
  {
    label: "Frameworks or Technologies",
    entries: [
      "Spring Boot, Spring Security, MicroServices",
      "HTML5, CSS3, Angular 5+, Bootstrap, RxJS", "MongoDB"
    ]
  },
  {
    label: "Softwares Tools & Others",
    entries: [
      "Jenkins & CI/CD pipeline, OpenShift, Docker",
      "Gradle, Maven",
      "AWS Fundamentals",
      "Problem Solving, OOP, Data Structures and Algorithms",
      "Self-motivated, Excellent written and verbal communication"
    ]
  }
];

//restriction: title must not contain any space
export const PROJECTS: Project[] = [
  {
    title: "Folio",
    description: "Folio is a social networking platform where you can create your very own Folio profile and store all your projects and social networking links in one place. Your Folio profile is the only link you'll ever need to share with recruiters. You can also connect with other people and explore their other social networking platforms & projects.",
    features: [
      "Send/Receive, Accept/Reject Connection Requests to/from other users",
      "Add, Edit and Drag support on Social links and Projects",
      "Custom Icons",
      "Custom Avatar"
    ],
    techStack: [
      "Spring Boot",
      "Angular 10",
      "MongoDB",
      "Deployment: Heroku (backend), Vercel (frontend)"
    ],
    link: {
      code: "https://github.com/projectFolio",
      preview: "https://myfolio.vercel.app"
    }
  },
  {
    title: "PersonalWebsite",
    description: "A cool-looking UI/UX focused personal website. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium ex delectus consectetur nam voluptatum reprehenderit, illum hic doloribus facere perferendis voluptatibus pariatur nemo illo similique unde aliquam error quod mollitia?",
    features: [
      "Responsive Design",
      "Configurable and Customizable",
      "Modern UI trend",
    ],
    techStack: [
      "Angular 10",
      "Vercel for Deployment"
    ],
    link: {
      code: "https://github.com/gauravghongde/portfolioV2",
      preview: "/"
    }
  },
  {
    title: "Devnet",
    description: "POC, made for internal use in TIAA. A Q&A website for the company's internal use, inspired from stack-overflow. The idea of this POC is to create an open source alternative for stackoverflow, with a new age tech stack.",
    features: [
      "Responsive Design",
      "Configurable and Customizable",
      "Modern UI trend",
    ],
    techStack: [
      "Spring Boot",
      "Angular 8",
      "MongoDB",
      "Deployment: Heroku (backend), Vercel (frontend)"
    ],
    link: {
      code: "https://github.com/gauravghongde/devnet",
      preview: "https://opendevnet.vercel.app"
    }
  },
  {
    title: "MinifyApp",
    description: "A project for CodeSprint event by Google-ACS Workshop held in our college. An app especially designed for people who want to improve their life by saving the time that they spend on their smartphone. This App tracks user's activities and measures the total time taken on each app and thus you could be able to track yourself. You can also set limits on certain apps, this app will give you notifications and alerts to save your time.",
    features: [
      "Per App Usage Tracking",
      "Per App Limit Function",
      "Daily and Weekly Usage",
      "Alerts and Notifications"
    ],
    techStack: [
      "Android",
      "Java",
      "PlayStore Deployment"
    ],
    link: {
      code: "https://github.com/gauravghongde/Minify",
      preview: "https://play.google.com/store/apps/details?id=com.rstack.dephone"
    }
  },
]
