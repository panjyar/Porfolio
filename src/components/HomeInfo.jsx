import React from 'react'
import {arrow} from "../assets/icons"
import { Link } from 'react-router-dom';

const InfoBox = ({text, link, btnText, icon}) => (
    <div className="info-box backdrop-blur-sm bg-white/10 border border-white/20">
        <p className="font-medium sm:text-xl text-center text-white drop-shadow-lg">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn hover:scale-105 transition-transform">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
  1: (
    <div className="sm:text-xl sm-leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 animate-fade-in">
        <h1 className="font-bold text-2xl mb-2">
            Hi, I'm <span className="font-bold text-yellow-300">Pradip Kumar Panjiyar</span>
        </h1>
        <p className="text-base mt-2">
            An aspiring Full Stack Developer from India
        </p>
        <p className="text-sm mt-3 opacity-90">
            🚀 Specializing in MERN Stack | Cloud | AI/ML
        </p>
    </div>
  ),
  2: (
     <InfoBox
        text="🎓 Explore my journey, experience, and technical skills!"
        link="/about"
        btnText="Learn More About Me"
     />
  ),
  3: (
    <InfoBox
        text="💻 Discover innovative projects across Full Stack, Cloud & AI/ML"
        link="/project"
        btnText="View My Projects"
   />
  ),
  4: (
    <InfoBox
        text="📝 Read my technical articles and development insights"
        link="/blog"
        btnText="Check My Blog"
    />
  ),
  4: (
    <InfoBox
        text="📝 Read my technical articles and development insights"
        link="/blog"
        btnText="Check My Blog"
    />
  ),
  5: (
    <InfoBox
        text="📬 Let's collaborate! Get in touch for opportunities"
        link="/contact"
        btnText="Get in Touch"
    />
  )
}

const HomeInfo = ({currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo