import React from 'react';
import { blogs } from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';
import SocialMedia from '../components/SocialMedia';

const Blog = () => {
    return (
        <div>
            <section className="max-container">
                <div>
                    <h1 className="head-text">
                        My <span className="blue-gradient_text font-semibold font-shadow drop-shadow">Blog</span>
                    </h1>

                    <div className="mt-5 flex flex-col gap-3 text-slate-500">
                        <p>
                            Sharing my learnings, experiences, and insights from building real-world projects. 
                            I write about full-stack development, cloud deployments, AI/ML implementations, and more.
                        </p>
                    </div>

                    {/* Blog Posts */}
                    <div className="mt-16 space-y-8">
                        {blogs.map((blog, index) => (
                            <article 
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Blog Icon/Image Placeholder */}
                                    <div className="md:w-48 md:h-48 w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <div className="text-6xl">📝</div>
                                    </div>

                                    {/* Blog Content */}
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                                                {blog.platform}
                                            </span>
                                            <span className="text-slate-500 text-sm">
                                                {blog.date}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl font-bold text-slate-800 mb-3 hover:text-blue-600 transition-colors">
                                            <Link to={blog.link} target="_blank" rel="noopener noreferrer">
                                                {blog.title}
                                            </Link>
                                        </h2>

                                        <p className="text-slate-600 leading-relaxed mb-4">
                                            {blog.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {blog.tags.map((tag, i) => (
                                                <span 
                                                    key={i}
                                                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Read More Link */}
                                        <Link
                                            to={blog.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                                        >
                                            Read Full Article
                                            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-slate-800 mb-3">
                            Want to stay updated?
                        </h3>
                        <p className="text-slate-600 mb-5">
                            Follow me on DEV.to for more articles on web development, cloud computing, and software engineering.
                        </p>
                        <Link
                            to="https://dev.to/pradippanjiyar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                        >
                            Follow on DEV.to
                        </Link>
                    </div>
                </div>

                <SocialMedia />
                <hr className="border-slate-200 my-10" />
                <CTA />
            </section>
        </div>
    );
};

export default Blog;