import React, { useState } from 'react';
import { projects, projectCategories } from '../constants';
import { Link } from 'react-router-dom';
import { github } from '../assets/icons';
import CTA from '../components/CTA';
import SocialMedia from '../components/SocialMedia';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div>
            <section className="max-container">
                <div>
                    <h1 className="text-center text-4xl sm:text-5xl font-bold mb-3">
                        Some Of My <span className="text-blue-600">Works</span>
                    </h1>

                    {/* Category Tabs */}
                    <div className="mt-10 flex flex-wrap gap-3 justify-center">
                        {projectCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    selectedCategory === category.id
                                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Section Title */}
                    <div className="mt-16 mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 text-center">Projects</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mt-3"></div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                        {filteredProjects.map((project, index) => (
                            <div 
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100" 
                                key={`${project.name}-${index}`}
                            >
                                {/* Project Preview/Header Section */}
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 border-b border-gray-200">
                                    <div className="flex items-start justify-between gap-4">
                                        {/* Icon and Category */}
                                        <div className="flex items-center gap-3">
                                            <div className="block-container w-12 h-12 flex-shrink-0">
                                                <div className={`btn-back rounded-xl ${project.theme}`} />
                                                <div className="btn-front rounded-xl flex justify-center items-center bg-white">
                                                    <img
                                                        src={project.iconUrl}
                                                        alt="Project Icon"
                                                        className="w-6 h-6 object-contain"
                                                    />
                                                </div>
                                            </div>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase">
                                                {project.category === 'cloud' ? '☁️ Cloud-Ops' :
                                                 project.category === 'aiml' ? '🤖 AI/ML' :
                                                 project.category === 'fullstack' ? '🧠 Full-stack' :
                                                 '🎨 Front-end'}
                                            </span>
                                        </div>
                                        
                                        {/* Home Page Label */}
                                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Home Page
                                        </span>
                                    </div>

                                    {/* Small Preview Area - Placeholder for screenshot */}
                                    <div className="mt-4 bg-white rounded-lg p-4 border border-gray-200 min-h-[120px] flex items-center justify-center">
                                        <div className="text-center text-gray-400">
                                           <img src={project.preview} alt={project.name} />
                                            <p className="text-xs">Project Preview</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    {/* Project Name */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {project.name}
                                    </h3>
                                    
                                    {/* Short Description */}
                                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                        {project.shortDescription}
                                    </p>

                                    {/* Full Description */}
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            {project.fullDescription}
                                        </p>
                                    </div>

                                    {/* Deployment Info */}
                                    {project.deployment && (
                                        <div className="mb-4 bg-blue-50 p-3 rounded-lg border border-blue-100">
                                            <p className="text-xs text-gray-700">
                                                <span className="font-semibold text-blue-700">Used github actions CI/CD to automate deployment:</span> {project.deployment}
                                            </p>
                                        </div>
                                    )}

                                    {/* Tech Stack Title */}
                                    <div className="mb-3 mt-5">
                                        <h4 className="font-bold text-gray-900">TechStack Used</h4>
                                    </div>

                                    {/* Technologies Pills */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.technologies?.map((tech, i) => (
                                            <span 
                                                key={i} 
                                                className="px-3 py-1.5 bg-black text-white text-xs rounded-md font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                                        <Link
                                            to={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                                        >
                                            <img src={github} alt="github" className="w-5 h-5 object-contain" />
                                            GitHub
                                        </Link>
                                        
                                    

                                        <Link
                                            to={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Project Count */}
                    <div className="text-center mb-10">
                        <p className="text-slate-500">
                            Showing <span className="font-bold text-blue-600">{filteredProjects.length}</span> of <span className="font-bold">{projects.length}</span> projects
                        </p>
                    </div>
                </div>
                
                <SocialMedia />
                <hr className="border-slate-200 my-10" />
                <CTA />
            </section>
        </div>
    );
};

export default Projects;