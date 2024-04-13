import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react'
import { skills,experiences } from '../constants'
import CTA from '../components/CTA';
import SocialMedia from '../components/SocialMedia';

const About = () => {
  return (
    <div>
      <section className="max-container">
        <h1 className="head-text">Hey I'm 
        <span className="blue-gradient_text font-semibold font-shadow drop-shadow"> Pradip Panjiyar</span>
        </h1>
       
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
          An aspiring full stack developer from India. 
            Actively improving my data structures and algorithms skills through platforms like LeetCode, CodingNinja, and others, I'm passionate about the MERN stack. I'm on the hunt for exciting web developer roles and freelance projects. 
            With a knack for crafting sleek and functional web applications, I thrive in dynamic environments where creativity meets code. If you're looking to collaborate on a project or have any questions, feel free to reach out! Let's build something incredible together.
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl"/>
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <h3 className="head-text">Experiences </h3>
        <div className="py-16">
          <h3 className="mt-5 flex flex-col gap-3 text-slate-500"> </h3>
            <p>
            As an entry-level professional, I've engaged with various organizations, enhancing my skills and collaborating with talented individuals. Here's a summary:
            </p>
        </div>

        <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement 
              key={experience.company_name}
              date={experience.date}
              icon={ 
                <div className="flex justify-center items-center w-full h-full">
                  <img 
                  src={experience.icon} 
                  alt={experience.company_name}
                  className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{background:experience.iconBg}}
              contentStyle={{
                borderBottom: '8px',
                borderStyle:'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none',
              }}
              
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p className="text-black=500 font-medium font-base" style={{margin:0}}>
                  {experience.company_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point,index) => (
                  <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        </div>

          <hr className="border-slate-200" />
          <CTA />
          <SocialMedia/>
      </section>
    </div>
  )
}

export default About
