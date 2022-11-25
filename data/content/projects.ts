import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "UpiPay",
    github: "https://github.com/anshu0x/UpiPay",
    desc: "Collect Online Payments from anywhere in India.",
    img: "/static/projects/mock9.jpg",
    link: "https://upipayy.vercel.app/",
    tags: ["NextJs", "Tailwind Css", "Mongodb", "ExpressJs", "NodeJs"],
  },
  {
    id: 1,
    title: "IMessage",
    desc: "Realtime Chat App created using Mern Stack",
    img: "/static/projects/mock8.jpg",
    link: "https://anshu-chat.vercel.app/",
    github: "https://github.com/anshu0x/iMessage",
    tags: ["React", "NextUI", "Mongodb", "ExpressJs", "Socket.Io"],
  },
  {
    id: 2,
    title: "Pokedex",
    desc: "1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.",
    img: "/static/projects/mock7.jpg",
    link: "https://pokedex-anshu.vercel.app/",
    github: "https://github.com/anshu0x/pokedex-react",
    tags: ["React", "Bootstrap", "PokeApi", "Css"],
  },
  {
    id: 3,
    title: "Movie Info App",
    desc: "A simple app created using Omdb api",
    img: "/static/projects/mock1.jpg",
    link: "https://anshu-movie-app.netlify.app/",
    tags: ["React", "CSs", "Bootstrap", "API"],
    github: "https://github.com/anshu0x/Movie-App",
  },
  {
    id: 4,
    title: "Real Estate",
    desc: "Generate a vanilla HTML boilerplate in a flash!",
    img: "/static/projects/mock6.jpg",
    github: "https://github.com/anshu0x/Real-Estate",
    tags: ["Node", "Javascript", "NPM", "HTML"],
    link: "https://real-estate-anshu.netlify.app/",
  },
  {
    id: 5,
    title: "Weather App",
    desc: "An simple weather app created with react and openweather api",
    img: "/static/projects/mock2.jpg",
    github: "https://github.com/anshu0x/weatherApp",
    link: "https://weather-app-anshu.netlify.app/",
    tags: ["ReactJs", "Css", "OpenWeatherapi"],
  },
  {
    id: 6,
    title: "Siloraa - ICO Token Startup",
    desc: "ICO Token Startup",
    img: "/static/projects/mock4.jpg",
    link: "https://siloraa-anshu.netlify.app/",
    tags: ["Javascript", "React Js", "Css"],
    github: "https://github.com/anshu0x/Siloraa.git",
  },
  {
    id: 7,
    title: "Medica",
    desc: "A simple version of Madlibs built for the web!",
    img: "/static/projects/mock3.jpg",
    link: "https://medica-pro.netlify.app/",
    github: "https://github.com/anshu0x/medica-pro",
    tags: ["HTML", "CSS", "Javascript", "ReactJs", "Bootstrap"],
  },
  {
    id: 8,
    title: "Google Keep",
    desc: "A simple version of Google Keep built for the web!",
    img: "/static/projects/mock5.jpg",
    link: "https://googlekeepcln.netlify.app/",
    tags: ["HTML", "CSS", "Javascript", "ReactJs"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
