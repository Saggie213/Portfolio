import React from 'react';
import { Heart, Github, Linkedin, Code } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 transition-all hover:opacity-80"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center font-bold text-black text-lg group-hover:scale-110 transition-transform duration-300">
                {personalInfo.name.charAt(0)}
              </div>
              <span className="font-semibold text-white text-lg">
                {personalInfo.name}
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.slice(0, 4).map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-teal-500/20 border border-white/5 hover:border-teal-500/30 rounded-lg text-gray-400 hover:text-teal-400 transition-all duration-300"
                title={link.name}
              >
                {index === 0 && <Github size={18} />}
                {index === 1 && <Linkedin size={18} />}
                {index === 2 && <Code size={18} />}
                {index === 3 && <Code size={18} />}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>© {currentYear} Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            <span>by {personalInfo.name.split(' ')[0]}</span>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
