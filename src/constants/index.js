import { chegg, gdsc, sqlbasic, sqlinter, gcsj, gdsc_certificate, deliotte ,awscloud} from "../assets/images";
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
        iconUrl: sorting, 
        theme: 'btn-back-purple',
        name: 'College Buzz - AICTE News & Event Aggregator',
        description: 'Major project: A web-based crawler and scraper that aggregates latest news and upcoming events from AICTE-approved college websites. Features include live updates, searchable filters, and archived data using Flask, MongoDB, and React.',
        link: 'https://college-buzz.vercel.app/',
    },
    {
        iconUrl: resume,
        theme: 'btn-back-red',
        name: 'Resume Parser and Ranking system',
        description: 'Designed and implemented a resume parser and ranking system, automating candidate evaluation to optimize recruitment processes, saving time and improving hiring outcomes.',
        link: 'https://github.com/panjyar/Resume_Ranking_System.git',
    },
    {
        iconUrl: sorting, // Add appropriate icon for certificate project
        theme: 'btn-back-yellow',
        name: 'GDSC Certificate Generator',
        description: 'A dynamic certificate generator built for GDSC events. Users can input details to generate and download personalized certificates in real-time. Hosted using Netlify for quick access and sharing.',
        link: 'https://google-cloud-certificate-gdsccitk.netlify.app/',
    },
    {
        iconUrl: movie,
        theme: 'btn-back-green',
        name: 'Movie Recommendation System',
        description: 'Developed a movie recommendation system using machine learning, Python, and scikit-learn. Analyzed movie features like genre, cast, and director to compute similarity scores using vector comparison techniques.',
        link: 'https://github.com/panjyar/Movie_Recommendation_System.git',
    },
    {
        iconUrl: sorting,
        theme: 'btn-back-blue',
        name: 'Sorting-Visualizer',
        description: 'Visualization of the Bubble Sort algorithm, dynamically showing how elements are rearranged in real-time for educational and demonstrative purposes.',
        link: 'https://github.com/panjyar/Sorting-Visualizer.git',
    },
    {
        iconUrl: news,
        theme: 'btn-back-pink',
        name: 'Scoop News',
        description: 'Scoop News leverages the NewsAPI to fetch top headlines and enables user-driven searches. It provides concise article summaries, thumbnails, and direct access to full content for an engaging reading experience.',
        link: 'https://github.com/panjyar/NewsScoop.git',
    }
];
export const certificates = [
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    image: sqlbasic,
    link: "https://www.hackerrank.com/certificates/iframe/bc998b0e8e53",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    image: sqlinter,
    link: "https://www.hackerrank.com/certificates/iframe/15494cf61275",
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services (via Credly)",
    image: awscloud,
    link: "https://www.credly.com/badges/f37d4d27-2115-467c-bcf0-280d55f24efa/public_url"
  },
  {
    title: "Deloitte Virtual Job Simulation",
    issuer: "Deloitte (Forage)",
    image: deliotte,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_8XmhjHg37Kw4pgv2f_1750878676062_completion_certificate.pdf",
  },
  {
    title: "GDSC Lead",
    issuer: "Google Developer Student Clubs",
    image: gdsc_certificate,
    link: "https://drive.google.com/file/d/1A1tb0wNLp7xMXT8NlamstJX83Ypqs6e1/view?usp=sharing", // Optional PDF or image link
  },
{
    title: "Google Cloud Study Jam ",
    issuer: "Google Developer Student Clubs CITK",
    image: gdsc_certificate,
    link: "https://drive.google.com/file/d/1kTMMZ3hMIY4pC6bo9j5GdVNAnReBHIpX/view?usp=sharing", // Optional PDF or image link
  },
];

