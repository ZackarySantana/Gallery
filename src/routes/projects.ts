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
        images: [{ src: "/images/codeconstants.png", alt: "Image 1" }],
        features: ["Authentication", "Email verification", "Account persistence with cookies", "Multiple microservices", "Algorithm Visualizer", "Random Number Generator", "Checkins", "Notes"],
        techs: ["React.js", "Tailwind", "Node.js", "Express", "SQLite", "Flask", "Gorilla Mux", "Docker", "Golang", "Python"],
        demo: "https://codeconstants.com",
    },
    {
        title: "UPE @ FIU",
        idElement: "upefiu",
        description: "Description 2",
        shortDescription: "Short Description 2",
        projectDifficulties: "Project Difficulties 2",
        solution: "Solution 2",
        images: [{ src: "https://via.placeholder.com/150", alt: "Image 1" }],
        features: ["Feature 3", "Feature 4"],
        techs: ["Tech 3", "Tech 4"],
        demo: "https://google.com",
        github: "https://github.com",
    }
];

export { projects };