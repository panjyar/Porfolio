import {  chegg, gdsc } from "../assets/images";
import {
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    movie,
    react,
    news,
    sorting,
    resume,
    tailwindcss,
    twitter,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Subject Matter Expert",
        company_name: "Chegg",
        icon: chegg,
        iconBg: "#de9368",
        date: "December 2021 - January 2023",
        points: [
            "Assisted students in clearing doubts and understanding complex academic concepts.",
            "Provided comprehensive explanations and solutions to student queries with patience and clarity.",
            "Continuously enhanced personal skills and knowledge through ongoing learning and professional development initiatives.",
            ,
        ],
    },
    {
        title: "Leadership Experience",
        company_name: "Google Developer Student Clubs",
        icon: gdsc,
        iconBg: "#7194e3",
        date: "July 2023 - Present",
        points: [
            "GDSC Lead at Central Institute of Technology Kokrajhar",
            "Drive initiatives for collaboration and learning among students interested in Google technologies",
            "Organize workshops, hackathons, and networking events",
            "Aim to enhance technical skills and foster innovation within the campus community",
        ],
    },
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/panjyar',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/pradip-panjiyar/',
    },
    {
        name: 'Twitter',
        iconUrl: twitter,
        link: 'https://twitter.com/pradipPanjiyar2',
    }
];

export const projects = [
    {
        iconUrl: resume,
        theme: 'btn-back-red',
        name: 'Resume Parser and Ranking system',
        description: 'Designed and implemented a resume parser and ranking system, automating candidate evaluation to optimize recruitment processes, saving time and improving hiring outcomes."',
        link: 'https://github.com/panjyar/Resume_Ranking_System.git',
    },
    {
        iconUrl: movie,
        theme: 'btn-back-green',
        name: 'Movie Recommendation System',
        description: 'Developed a movie recommendation system using machine learning, Python, and scikit-learn . Analyzed movie features like genre, cast, and director to compute similarity scores using vector comparison techniques.',
        link: 'https://github.com/panjyar/Movie_Recommendation_System.git',
    },
    {
        iconUrl: sorting,
        theme: 'btn-back-blue',
        name: 'Sorting-Visualizer',
        description: 'Visualization bubble sort algorithm for arranging a string of numbers or other elements in the correct order.',
        link: 'https://github.com/panjyar/Sorting-Visualizer.git',
    },
    {
        iconUrl: news,
        theme: 'btn-back-pink',
        name: 'Scoop News',
        description: 'Scoop News leverages the NewsAPI to fetch top headlines and enables user-driven searches for news articles. It presents a refined web interface, offering concise summaries of articles with images and a seamless click-to-access feature for full articles, enhancing user engagement.',
        link: 'https://github.com/panjyar/NewsScoop.git',
    },
];