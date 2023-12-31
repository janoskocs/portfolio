export const projects = [
  {
    id: "p1",
    title: "MemoVault",
    name: "memovault",
    icon: "/images/icons/memovault.png",
    iconSelected: "/images/icons/memovault.png",
    iconAlt: "Cartoon style drawn shutter",
    screenshots: [""],
    type: "project",
    address: "https://memovault.herokuapp.com",
    github: {
      client_link: "https://github.com/janoskocs/client-capstone",
      server_link: "https://github.com/janoskocs/server-capstone",
      general: "no-link",
    },
    published_at: "14/04/2023",
    techstack: ["JavaScript", "React", "Express", "Node", "MongoDB"],
    libraries: ["Recharts", "Mongoose", "paperCSS", "sentiment analysis API"],
    description:
      "MemoVault is a social media app where users can upload moments and the app detects and keeps track of emotions. User can reflect, connect with friends and appreciate other people's moments.",
  },
  {
    id: "p2",
    title: "Sunset Restaurant",
    name: "sunset-restaurant",
    icon: "/images/icons/sunsetlogo.png",
    iconSelected: "/images/icons/sunsetlogo.png",
    iconAlt: "Palm trees in front of triangle shapes",
    screenshots: [""],
    type: "project",
    address: "https://sunset-restaurant.herokuapp.com/",
    github: {
      client_link: "no-link",
      server_link: "no-link",
      general: "https://github.com/janoskocs/sunset-web-app/",
    },
    published_at: "14/04/2023",
    techstack: ["JavaScript", "EJS", "Express", "Node", "MongoDB"],
    libraries: [""],
    description:
      "Sunset Restaurant is an interactive web app that aims to simplify table booking in restaurants.",
  },
];
