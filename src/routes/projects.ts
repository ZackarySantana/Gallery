export type Project = {
    title: string;
    idElement: string;
    description: string;
    shortDescription: string;
    projectDifficulties: string;
    solution: string;
    images: { src: string; alt: string; }[];
    features: string[];
    techs: string[];
    demo?: string;
    github?: string;
};

const projects: Project[] = [
    {
        title: "CodeConstants",
        idElement: "codeconstants",
        description: "Focused on a centralized application for common tasks. It has a TTI of sub 250ms on the first load and lower than 100ms on subsequent loads.",
        shortDescription: "A fast site that allows you to connect with your team members, event attendees, or anyone you want!",
        projectDifficulties: "This project stressed smooth integration of microservices, having reusable components, and having a fast TTI (Time to first interactivity). The design throughout the different pages on the site must fit the consistent branding while providing a different feature to the user.",
        solution: "The code is split in to four different layers. The frontend is built using React.js w/ TypeScript, compiled with SSR (Server side rendering) and then hydrated on the client. The backend is built using Express w/ TypeScript. There are then 3 microservices, one built with Python + Flask, one with Golang + Gorilla Mux, and one with Node.js + Express. Each microservice has its own database that it is in full control over, and all microservices are only allowed a network connection to the backend.",
        images: [{ src: "/images/codeconstants.png", alt: "CodeConstants Checkin System" }],
        features: ["Authentication", "Email verification", "Account persistence with cookies", "Multiple microservices", "Algorithm Visualizer", "Random Number Generator", "Checkins", "Notes"],
        techs: ["React.js", "Tailwind", "Node.js", "Express", "SQLite", "Flask", "Gorilla Mux", "Docker", "Golang", "Python", "TypeScript"],
        demo: "https://codeconstants.com",
    },
    {
        title: "UPE @ FIU",
        idElement: "upefiu",
        description: "This project includes: A monolithic server that handles the frontend --> backend --> database. A self-hosted CMS that holds the information for executive board and FAQ page. A Prometheus metrics server that the backend reports to. And a Grafana server that visualizes from the Prometheus metrics server.",
        shortDescription: "A 3 site application that posts information about upcoming club events!",
        projectDifficulties: "This site needed a fast turnover time for users to be able to see events, register/login, and verify their emails. It also needed admin views to be able to view and make changes based on the incoming data. The site was made with a mobile-first approach and needed to be able to handle a large amount of users and bots (being a tech club, there are bound to be bad actors- routes needed to be protected).",
        solution: "The main code base is a monolithic server that handles e2e requests and data manipulation of the database. The fullstack app is made using Remix.js, which uses React.js on the frontend. All changes to the database are represented through model files and all routes have built in authentication checks depending on the functions of that page.",
        images: [{ src: "/images/upefiu.png", alt: "UPE Eboard of 2022" }],
        features: ["10+ pages", "Custom CMS", "Prometheus data server", "Grafana dashboard", "Authentication (different levels of users)", "Email verification", "Minification of CSS on build/dev", "Automatic image resizing", "Mobile-first"],
        techs: ["React.js", "Prometheus", "Grafana", "Express", "Node.js", "Strapi", "Prisma", "Docker", "TypeScript", "Cloundinary", "SQLite"],
        demo: "https://upefiu.io",
    },
    {
        title: "| attach |",
        idElement: "attach",
        description: "A quick static portfolio website with a simple metrics server and dashboard. It is easily configurable and premiered in a workshop with 100+ attendees.",
        shortDescription: "Static portfolio website that's intended to be easily configurable and connected to a NFC card!",
        projectDifficulties: "Making this site configurable in every aspect, from color scheme to sections to if the sections are opened by default. The site targets an audience where you are sharing the site via an NFC card, possibly in a location that doesn't have fast wifi so the size of the site must be really small.",
        solution: "Solid.js is used for the frontend, which is a React-like framework that compiles to vanilla JS. Tailwind is used for the styling, which is a utility-first CSS framework. The site is hosted on Fly.io, which is a static site hosting service. The metrics server is built using Express and Node.js. The metrics server is hosted on Fly.io as well. The site is built using Docker and is deployed using Fly.io.",
        images: [{ src: "/images/attach.png", alt: "Attach home screen" }],
        features: ["Static site", "Metrics server", "Mobile-first", "Automatic image resizing", "Customizable"],
        techs: ["Solid.js", "Tailwind", "Express", "Node.js", "Docker", "TypeScript", "Flyctl"],
        demo: "https://attach.fly.dev",
        github: "https://github.com/ZackarySantana/Attach",
    },
    {
        title: "Twitter Filter",
        idElement: "twitterfilter",
        description: "This app can filter by keyword, amount of tweets, start date, start time, end date, end time, and verified users. It can sort by recency or relevency.",
        shortDescription: "This web app gets the most recent twitter posts, filtering by the fields you enter, and displays different demographic data about them.",
        projectDifficulties: "The project was difficult because of the amount of data that was being pulled from the Twitter API. The API only allows 7 days of data to be pulled at a time, so the app had to be able to handle that. The data was also very large, so the app had to be able to handle that as well.",
        solution: "Using Python which is a language that supports large amounts of data was a good choice, as well using streamlit allows for a direct UI for the data to be displayed.",
        images: [{ src: "/images/twitterfilter.png", alt: "Attach home screen" }],
        features: ["Data aggregation", "Data visualization", "Twitter API"],
        techs: ["Steamlit", "Python", "Fly"],
        demo: "https://twitterst.fly.dev/",
        github: "https://github.com/ZackarySantana/TwitterFilter",
    },
    {
        title: "LinkedHub",
        idElement: "linkedhub",
        description: "",
        shortDescription: "Combines GitHub + LinkedIn to create a more complete profile. 1st place winner at MiamiHackWeek @ Campus 2022!",
        projectDifficulties: "The project aims to help bridge the gap in recruiters seeing a canadites Github, by injecting it right in to their LinkedIn profile!",
        solution: "A downloadable chrome extension that injects a GitHub section. It connects to our backend which is an Express server that connects to a Firebase database.",
        images: [{ src: "/images/linkedhub.png", alt: "Attach home screen" }],
        features: ["1st place hackathon winner (MiamiHackWeek @ Campus 2022)", "Web scraping", "GitHub integration"],
        techs: ["JavaScript", "GitHub API", "Firebase", "Express", "Node.js", "Chrome Extension"],
        github: "https://github.com/ItsLaro/LinkedHub",
    },
    {
        title: "Portfolio",
        idElement: "portfolio",
        description: "",
        shortDescription: "A simple portfolio website designed to be swappable with other projects and mobile-first.",
        projectDifficulties: "I wanted a fast site that uses a new technology that I haven't used before. I also wanted to make it mobile-first.",
        solution: "I used SvelteKit because I have used Svelte before, but wanted more practice with it.",
        images: [{ src: "/images/portfolio.png", alt: "Attach home screen" }],
        features: ["Mobile-first", "Customizable", "Fast", "Static site"],
        techs: ["SvelteKit", "Svelte"],
        github: "https://github.com/ZackarySantana/Gallery",
    }
];

export { projects };