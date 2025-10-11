import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skillCategories, experiences, certificates } from '../constants';
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
        <h1 className="head-text">
          Hey I'm
          <span className="blue-gradient_text font-semibold font-shadow drop-shadow"> Pradip Panjiyar</span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            An aspiring full stack developer from India with a passion for building innovative web solutions.
            I specialize in the MERN stack and actively improve my data structures and algorithms skills through
            platforms like LeetCode and CodingNinja.
          </p>
          <p>
            Currently seeking exciting web developer roles and freelance projects where I can leverage my expertise
            in crafting sleek, functional web applications. I thrive in dynamic environments where creativity meets code.
          </p>
          <p className="font-semibold text-slate-700">
            Let's collaborate and build something incredible together! 🚀
          </p>
        </div>

        {/* Skills Section - Organized by Category */}
        <div className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-16"></div>

          {/* Programming Languages */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
              {skillCategories.programming.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillCategories.programming.skills.map((skill, index) => (
                <div
                  key={`prog-${index}`}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="font-bold text-center text-gray-800">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
              {skillCategories.backend.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillCategories.backend.skills.map((skill, index) => (
                <div
                  key={`backend-${index}`}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="font-bold text-center text-gray-800">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Development */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
              {skillCategories.frontend.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skillCategories.frontend.skills.map((skill, index) => (
                <div
                  key={`frontend-${index}`}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="font-bold text-center text-gray-800 text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Management Systems */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
              {skillCategories.database.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skillCategories.database.skills.map((skill, index) => (
                <div
                  key={`db-${index}`}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="font-bold text-center text-gray-800">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* clouddevops */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
              {skillCategories.clouddevops.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {skillCategories.clouddevops.skills.map((skill, index) => (
                <div
                  key={`clouddevops-${index}`}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="font-bold text-center text-gray-800 text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
              {skillCategories.tools.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {skillCategories.tools.skills.map((skill, index) => (
                <div
                  key={`tools-${index}`}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="font-bold text-center text-gray-800 text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
              {skillCategories.libraries.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {skillCategories.libraries.skills.map((skill, index) => (
                <div
                  key={`libraries-${index}`}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="font-bold text-center text-gray-800 text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="py-10">
          <h3 className="subhead-text">Professional Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              As an entry-level professional, I've engaged with various organizations, enhancing my skills
              and collaborating with talented individuals. Here's my journey:
            </p>
          </div>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`${experience.company_name}-${index}`}
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
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, idx) => (
                    <li key={`experience-point-${idx}`} className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="subhead-text">Certifications & Achievements</h3>
          <p className="mt-3 text-slate-500 mb-10">
            Professional certifications and recognitions that validate my expertise
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => (
              <div
                key={`cert-${index}`}
                className="bg-white border border-slate-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-40 object-contain"
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{cert.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{cert.issuer}</p>

                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-4 py-2.5 text-sm text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Certificate
                  </a>
                ) : (
                  <p className="text-xs italic text-slate-400 text-center">No certificate link available</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-200 mt-16" />
        <CTA />
        <SocialMedia />
      </section>
    </div>
  );
};

export default About;