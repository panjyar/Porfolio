import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills,experiences ,certificates} from '../constants'
import CTA from '../components/CTA';
import SocialMedia from '../components/SocialMedia';
import { useEffect } from 'react';


const About = () => {
  useEffect(() => {
  const script = document.createElement("script");
  script.src = "//cdn.credly.com/assets/utilities/embed.js";
  script.async = true;
  document.body.appendChild(script);
}, []);

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
{/* Certificate Showcase */}
<div className="mt-20">
  <h3 className="subhead-text">Certifications</h3>
  <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {certificates.map((cert, index) => (
      <div
        key={`cert-${index}`}
        className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 hover:shadow-md transition duration-300"
      >
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-40 object-contain mb-4"
        />
        <h4 className="text-lg font-semibold text-slate-800">{cert.title}</h4>
        <p className="text-sm text-slate-500">{cert.issuer}</p>

        {cert.link ? (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            View Certificate
          </a>
        ) : (
          <p className="text-xs italic text-slate-400 mt-3">No certificate link available</p>
        )}
      </div>
    ))}
  </div>
</div>

          <hr className="border-slate-200" />
          <CTA />
          <SocialMedia/>
      </section>
    </div>
  )
}

export default About
