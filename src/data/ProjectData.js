import project01Image01 from "../assets/images/Project01/beginning.png";
import project01Image02 from "../assets/images/Project01/middle.png";
import project01Image03 from "../assets/images/Project01/Station.png";
import project02Image01 from "../assets/images/Project02/sayYes01.png";
import project02Image02 from "../assets/images/Project02/sayYes02.png";
import project02Image03 from "../assets/images/Project02/sayYes02.png";
import project03Wireframe from "../assets/images/Project03/SettleWiseWireframe.png";
import project03Image02 from "../assets/images/Project03/SettleWiseLeft.png";
import project03Image03 from "../assets/images/Project03/SettleWiseRight.png";
import project04Image01 from "../assets/images/Project04/BSBWireframe.png";
import project04Image02 from "../assets/images/Project04/BSBCode.png";
import project04Image03 from "../assets/images/Project04/BSBIntro.png";
import project05Image01 from "../assets/images/Project05/ColorSplat.png";
import project05Image02 from "../assets/images/Project05/Diagram.png";
import project05Image03 from "../assets/images/Project05/Wireframe.png";

export const projectData = [
  {
    id: 1,
    projectTitle: "The W.",
    blurb: "A weather widget website where you can get daily information",
    description:
      "The W. started off as a weather application that turned into more of a widget collection. I wanted to create a widget application that grabbed all of my elements that I use on a daily. This application used the Third-Party Apps, WeatherApi, and Date and Time to get the a current date. As I continue to grow this application I want to add more widgets such as a calender that tracts al your monthly meetings that you can add onto. Make the alerts and prompts more appealing by making them into modals. As well as, including te Google Maps API to plan out your day",
    tools: ["APIs", "React", "CSS", "Netlify", "OpenApi", "Notion"],
    bigImage: project01Image01,
    smallImage01: project01Image02,
    smallImage02: project01Image03,
    github: "https://github.com/brookelove/weather",
    weblink: "https://thunderous-selkie-c74591.netlify.app/",
  },
  {
    id: 2,
    projectTitle: "Say Yes Project",
    blurb: "A wedding application that helps you keep track of your big day",

    description:
      "Weddings can be chaotic; it can be hard to keep track of what you do noy and do like even if you have a wedding planner. With technology at our fingertips presents many more opportunities for brides and grooms to have vast access to some of the most expensive items for the wedding, the dress and venue. With all of the opportunities it can be hard to keep track of potential dresses and venues, I created an program in python that allows the user to enter potential venues and dresses that they like and then produces a documented table of all the potential venues for the user to see!",
    tools: ["Python", "Pipfile", "Tabulte"],
    bigImage: project02Image01,
    smallImage01: project02Image02,
    smallImage02: project02Image03,
    github: "https://github.com/brookelove/weather",
    weblink: "https://thunderous-selkie-c74591.netlify.app/",
  },
  {
    id: 3,
    projectTitle: "SettleWise",
    blurb:
      "A Android App that advises you on tools and tips in how to plan your next move",
    description:
      "SettleWise is an app that allows plans their move depending on the user’s information. The plan with be within a timeframe to get all of the needed documents, ideas and options that they can provide. Being a military spouse, we have to constantly move and the military apps are not as friendly to use. I wanted to create a app that expands my niche population. I believe anyone that is moving from smaller moves from city to city or across the country, to college moves. These people would be benefitted from this. This app creates a place where moves can be less stressful and where you can settle in your new place with most items taken care of.",
    tools: ["Kotlin", "Figma", "Java", "APIs"],
    bigImage: project03Wireframe,
    smallImage01: project03Image02,
    smallImage02: project03Image03,
    github: "https://github.com/CS683/project-brookelove",
    weblink: "N/A",
  },
  {
    id: 4,
    projectTitle: "Blush Strokes Beauty",
    blurb: "A website for a client that creates a portfolio for her",
    description:
      "This is an portfolio website that showcases my clients work as well as her updated work. I have created a more softer look to the website to elicitwe the warm and cozy feeling. My client wants to create a place where people feel invited to create a unique experience throught the services she provides",
    tools: ["CSS", "Figma", "React", "Javascript", "Notion", "Canva"],
    bigImage: project04Image01,
    smallImage01: project04Image02,
    smallImage02: project04Image03,
    github: "https://github.com/brookelove/blush-stroke-beauty",
    weblink: "N/A",
  },
  {
    id: 5,
    projectTitle: "The Way to My Heart",
    blurb: "An application that tracks recipies and ",
    description:
      "As of right now, I am only working on the backend. This application should will provide a great usage for people to have a space where they can log and track their recipies.",
    tools: ["CSS", "Figma", "React", "SQL", "Notion", "Canva", "Sequelize"],
    bigImage: project05Image03,
    smallImage01: project05Image01,
    smallImage02: project05Image02,
    github: "https://github.com/brookelove/the-way-to-my-heart-backend",
    weblink: "https://github.com/brookelove/the-way-to-my-heart-backend",
  },
];
