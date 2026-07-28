import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  skillCategories,
  professionalExperience,
  leadershipExperience,
  otherExperience,
  certificates,
} from "../constants";
import CTA from "../components/CTA";
import SocialMedia from "../components/SocialMedia";
import { useEffect, useState } from "react";

const TimelineSection = ({ title, description, items }) => (
  <>
    <div className="py-10">
      <h3 className="subhead-text">{title}</h3>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>{description}</p>
      </div>
    </div>

    <div className="mt-12 flex">
      <VerticalTimeline>
        {items.map((item, index) => (
          <VerticalTimelineElement
            key={`${item.company_name}-${index}`}
            date={item.date}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={item.icon}
                  alt={item.company_name}
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            }
            iconStyle={{ background: item.iconBg }}
            contentStyle={{
              borderBottom: "8px solid",
              borderBottomColor: item.iconBg,
              boxShadow: "none",
            }}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="font-medium" style={{ margin: 0 }}>
              {item.company_name}
            </p>

            <ul className="my-5 ml-5 list-disc space-y-2">
              {item.points.map((point, idx) => (
                <li key={idx} className="text-sm text-black-500/50">
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  </>
);

const About = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div>
      <section className="max-container">
        <h1 className="head-text">
          Hey I'm
          <span className="blue-gradient_text font-semibold font-shadow drop-shadow">
            {" "}
            Pradip Panjiyar
          </span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I'm a Full Stack Software Engineer from India with experience
            building scalable web, mobile, and AI-powered applications. I work
            across the entire stack using React.js, Next.js, React Native,
            Node.js, Express.js, FastAPI, PostgreSQL, Redis, Docker, and AWS to
            deliver reliable, production-ready software.
          </p>

          <p>
            At LivNSense GreenOps, I contributed to enterprise platforms by
            developing REST APIs, HRMS modules, authentication systems,
            AI-powered industrial safety applications, and real-time features. I
            also enjoy building intelligent products with LLMs, LangGraph, and
            Python while continuously strengthening my problem-solving skills
            through Data Structures and Algorithms.
          </p>

          <p className="font-semibold text-slate-700">
            I'm currently seeking Full Stack Software Engineer opportunities
            where I can build meaningful products, tackle complex engineering
            challenges, and make a lasting impact.
          </p>
        </div>

        {/* Skills Section - Organized by Category */}
        <div className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">
            Skills
          </h2>
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
                  <p className="font-bold text-center text-gray-800">
                    {skill.name}
                  </p>
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
                  <p className="font-bold text-center text-gray-800">
                    {skill.name}
                  </p>
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
                  <p className="font-bold text-center text-gray-800 text-sm">
                    {skill.name}
                  </p>
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
                  <p className="font-bold text-center text-gray-800">
                    {skill.name}
                  </p>
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
                  <p className="font-bold text-center text-gray-800 text-sm">
                    {skill.name}
                  </p>
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
                  <p className="font-bold text-center text-gray-800 text-sm">
                    {skill.name}
                  </p>
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
                  <p className="font-bold text-center text-gray-800 text-sm">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}

        <TimelineSection
          title="Professional Experience"
          description="My software engineering experience building enterprise and AI-powered applications."
          items={professionalExperience}
        />

        <TimelineSection
          title="Leadership Experience"
          description="Communities and initiatives where I led teams and organized technical events."
          items={leadershipExperience}
        />

        <TimelineSection
          title="Other Experience"
          description="Earlier work that strengthened my communication, analytical thinking, and problem-solving skills."
          items={otherExperience}
        />

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="subhead-text">Certifications & Achievements</h3>
          <p className="mt-3 text-slate-500 mb-10">
            Professional certifications and recognitions that validate my
            expertise
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
                    onClick={() => setSelectedCertificate(cert.image)}
                    className="w-full h-40 object-contain cursor-pointer transition duration-300 hover:scale-105"
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">
                  {cert.title}
                </h4>
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
                  <p className="text-xs italic text-slate-400 text-center">
                    No certificate link available
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        {selectedCertificate && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-black text-xl shadow-lg hover:bg-gray-200"
              >
                ✕
              </button>

              <img
                src={selectedCertificate}
                alt="Certificate Preview"
                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
              />
            </div>
          </div>
        )}

        <hr className="border-slate-200 mt-16" />
        <CTA />
        <SocialMedia />
      </section>
    </div>
  );
};

export default About;
