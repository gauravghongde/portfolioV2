export interface Social { label: string; url: string };
export interface Skill { label: string; entries: any };

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
