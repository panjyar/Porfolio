import React from 'react';
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';
import SocialMedia from '../components/SocialMedia';

const Projects = () => {
    return (
        <div>
            <section className="max-container">
                <div>
                    <h1 className="head-text">Hey I'm
                        <span className="blue-gradient_text font-semibold font-shadow drop-shadow"> Pradip Panjiyar</span>
                    </h1>

                    <div className="mt-5 flex flex-col gap-3 text-slate-500">
                        <p>Passionate full-stack developer based in India, dedicated to crafting seamless web solutions with innovation. </p>
                    </div>

                    <div className="flex flex-wrap my-20 gap-16">
                        {projects.map((project) => (
                            <div className="lg:w-[400px] w-full" key={project.name}>
                                <div className="block-container w-12 h-12">
                                    <div className={`btn-back rounded-xl ${project.theme}`} />
                                    <div className="btn-front roundedxlflex justify-center items-center">
                                        <img
                                            src={project.iconUrl}
                                            alt="Project Icon"
                                            className="w-1/2 h-1/2 object-contain" />
                                    </div>
                                </div>
                                <div className="mt-5 flex flex-col">
                                    <h4 className="text-2xl font-poppins font-semibold">
                                        {project.name}
                                    </h4>
                                    <p className="mt-2 text-slate-500">
                                        {project.description}
                                    </p>
                                    <div className="mt-5 flex items-center gap-2 font-poppins">
                                        <Link
                                            to={project.link}
                                            target="__blank"
                                            rel="neoopener noreferrer"
                                            className="font-semibold text-blue-600"
                                        >
                                           Live Demo
                                        </Link>
                                        <img
                                            src={arrow}
                                            alt="arrow"
                                            className="w-4 h-4 object-contain"
                                        />
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
              </div>
                <SocialMedia/>
                <hr className="border-slate-200" />
                <CTA />
            </section>
        </div>
    );
};

export default Projects;
