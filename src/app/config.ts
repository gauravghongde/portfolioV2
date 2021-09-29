export interface Social { label: string; url: string };
export interface Skill { label: string; entries: any };
export interface NavItem { label: string; url: any };
export interface ProjectLink { code: string; visit: string };
export enum ColorKind { Primary = "primary-color", Secondary = "secondary-color", Accent = "accent-color" }
export interface ThemeColor { label: ColorKind; value: string };
export interface Project { title: string; description: string; features: string[]; preview: string, techStack: string[]; link: ProjectLink };

export const DEFAULT_PRIMARY_COLOR = "#000000";
export const DEFAULT_ACCENT_COLOR = "#dfdfdf";
export const DEFAULT_SECONDARY_COLOR = DEFAULT_ACCENT_COLOR + 66;

export const NAME = "Gaurav Ghongde";
export const BIO = "I'm a Computer Engineering Graduate, currently working as a Sr. Associate, Software Developer";
export const CURRENT_ORG = "MorganStanley";
export const CURRENT_ORG_URL = "https://www.morganstanley.com"

export const MOBILE_NUMBER = '(+91) 7776972574';
export const EMAIL_ID = '7gaurav.ghongde@gmail.com';

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    url: "/"
  },
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
];

export const THEME_COLORS: string[] = [
  "#000000",
  "#003915",
  "#2345aa",
  "#530d07",
  "#074b53"
];

export const resumeSourcePDF = "https://gauravghongde.github.io/resume/resume.pdf";
export const resumeDownloadPDF = "https://github.com/gauravghongde/resume/raw/main/resume.pdf";

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
    preview: 'assets/videos/folio.mp4',
    techStack: [
      "Spring Boot",
      "Angular 10",
      "MongoDB",
      "Deployment: Heroku (backend), Vercel (frontend)"
    ],

    link: {
      code: "https://github.com/projectFolio",
      visit: "https://myfolio.vercel.app",
    }
  },
  {
    title: "PersonalWebsite",
    description: "A cool-looking UI/UX focused personal website. Web Developer Interactive Portfolio made using Angular, HTML, SCSS. Completely configurable for any user. Website showcases Intro, Skills, Resume, Projects and Contact Details.",
    features: [
      "Responsive Design (Desktop & Mobile)",
      "Configurable and Customizable",
      "Modern UI trend",
      "Custom Cursor"
    ],
    preview: 'assets/videos/portfolioWebsite.mp4',
    techStack: [
      "HTML",
      "SCSS",
      "Angular 10",
      "Vercel for Deployment"
    ],
    link: {
      code: "https://github.com/gauravghongde/portfolioV2",
      visit: "/"
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
    preview: 'assets/videos/devnet.mp4',
    techStack: [
      "Spring Boot",
      "Angular 8",
      "MongoDB",
      "Deployment: Heroku (backend), Vercel (frontend)"
    ],
    link: {
      code: "https://github.com/gauravghongde/devnet",
      visit: "https://opendevnet.vercel.app"
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
    preview: 'assets/videos/minify.mp4',
    techStack: [
      "Android",
      "Java",
      "PlayStore Deployment"
    ],
    link: {
      code: "https://github.com/gauravghongde/Minify",
      visit: "https://play.google.com/store/apps/details?id=com.rstack.dephone"
    }
  },
];

export const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeZAJANt-e-TDj-d8p5SUokl9Vb5zeoXKGBHOlkw-JRl2P6pw/formResponse'
export const FB_TEXT_PARAM = 'entry.265712092'
