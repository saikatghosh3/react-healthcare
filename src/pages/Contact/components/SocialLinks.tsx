import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export const SocialLinks = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
      
      <div className="flex justify-center space-x-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
            aria-label={label}
          >
            <div className="bg-gray-100 p-4 rounded-full hover:bg-blue-100 transition-colors">
              <Icon className="h-6 w-6 text-gray-600 hover:text-blue-600" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};