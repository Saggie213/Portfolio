import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Code, Trophy, ChefHat } from 'lucide-react';
import { personalInfo, socialLinks, stats } from '../../data/mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      github: Github,
      linkedin: Linkedin,
      code: Code,
      trophy: Trophy,
      'chef-hat': ChefHat
    };
    const IconComponent = icons[iconName] || Code;
    return <IconComponent size={20} />;
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`
          }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: '2s',
            transform: `translate(${mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-teal-400 text-sm font-medium">Available for Opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                    {personalInfo.name.split(' ')[0]}
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#14b8a6"/>
                        <stop offset="100%" stopColor="#06b6d4"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-400 font-light">
                {personalInfo.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/5 hover:bg-teal-500/20 border border-white/10 hover:border-teal-500/50 rounded-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-gray-400 group-hover:text-teal-400 transition-colors">
                    {getIcon(link.icon)}
                  </span>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/25 hover:-translate-y-1 flex items-center gap-2"
              >
                View My Work
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-white/20 hover:border-teal-500/50 text-white hover:text-teal-400 font-semibold rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Content - Photo & Stats */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Photo Container */}
            <div className="relative max-w-sm mx-auto lg:max-w-md">
              {/* Decorative Ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-500 to-purple-500 rounded-3xl rotate-6 opacity-20 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-500 to-purple-500 rounded-3xl -rotate-3 opacity-30" />
              
              {/* Photo */}
              <div className="relative bg-gradient-to-br from-teal-500/20 to-purple-500/20 p-1 rounded-3xl">
                <div className="bg-[#0a0a0a] rounded-3xl p-2">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full aspect-square object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -left-4 lg:-left-8 top-1/4 bg-[#151515] border border-white/10 rounded-2xl p-3 shadow-2xl animate-float">
                <div className="text-xl font-bold text-teal-400">{stats[0].value}</div>
                <div className="text-xs text-gray-500">{stats[0].label}</div>
              </div>
              
              <div className="absolute -right-2 lg:-right-4 bottom-1/4 bg-[#151515] border border-white/10 rounded-2xl p-3 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xl font-bold text-orange-400">{stats[2].value}</div>
                <div className="text-xs text-gray-500">{stats[2].label}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`mt-20 grid grid-cols-3 gap-6 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-teal-500/30 rounded-2xl transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-teal-400 group-hover:to-cyan-400 transition-all">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-teal-400 transition-colors cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
