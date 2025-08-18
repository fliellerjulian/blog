"use client";

import { ExternalLink, Linkedin, Github } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/julian-flieller/",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/fliellerjulian",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/fliellerjulian",
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: "Strava",
      href: "https://strava.com/athletes/fliellerjulian",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7.008 13.828h4.172" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Connect With Me
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Let&apos;s discuss AI, technology, and the future. Always open to
            connecting with fellow tech enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
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
