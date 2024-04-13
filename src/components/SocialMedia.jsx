import React from 'react';
import { socialLinks } from '../constants';

const SocialMedia = () => {
    return (
        <div>
            <div className="social-links ">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link "
                    >
                        <img src={link.iconUrl} alt={link.name} className="w-6 h-6 " />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialMedia