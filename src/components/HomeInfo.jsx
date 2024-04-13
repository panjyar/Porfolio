import React from 'react'
import {arrow} from "../assets/icons"
import { Link } from 'react-router-dom';

const InfoBox = ({text,link,btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to = {link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm-leading-snug 
    text-center neo-brutalism-blue py-4 px-8
     text-white mx-5">
    Hi, I am <span className="font-semibold">Pradip Kumar Panjiyar</span>
    <br />
    A aspiring full stack developer from India
    </h1>
  ),
  2: (
     <InfoBox
        text="Explore my experience and skills!"
        link="/about"
        btnText="Learn more"
     />
  ),
  3: (
    <InfoBox
        text="Discover innovative web project showcasing development skills."
        link="/project"
        btnText="My project"
   />
  ),
  4: (
        <InfoBox
        text="To reach out, just give that 'Get in Touch' button a click."
        link="/contact"
        btnText="Get in Touch"
    />
  )
}
const HomeInfo = ({currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo
