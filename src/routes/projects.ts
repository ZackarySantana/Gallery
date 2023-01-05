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
    }
];

export { projects };