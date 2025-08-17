'use client';

import { ExternalLink, Linkedin, Github } from 'lucide-react';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/julianflieller',
      icon: <Linkedin className="w-6 h-6" />
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/julianflieller',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com/julianflieller',
      icon: <Github className="w-6 h-6" />
    }
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Connect With Me
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Let's discuss AI, technology, and the future. Always open to connecting with fellow tech enthusiasts.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg px-6 py-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="text-slate-600 group-hover:text-blue-600 transition-colors duration-300">
                {link.icon}
              </div>
              <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                {link.name}
              </h3>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}