import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Share2 } from 'lucide-react';

export const SocialLinks = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', hover: 'hover:bg-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', hover: 'hover:bg-sky-500' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', hover: 'hover:bg-pink-600' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', hover: 'hover:bg-blue-700' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', hover: 'hover:bg-red-600' },
  ];

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-soft">
          <Share2 className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">Follow Our Journey</h2>
          <p className="text-sm text-slate-500">Health tips, updates & announcements</p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {socialLinks.map(({ icon: Icon, href, label, hover }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-card ${hover}`}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
};