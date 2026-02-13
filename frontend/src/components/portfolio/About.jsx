import React, { useEffect, useRef, useState } from 'react';
import { MapPin, GraduationCap, Calendar, Award } from 'lucide-react';
import { personalInfo, education } from '../../data/mock';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-teal-400 text-sm font-mono uppercase tracking-widest">About Me</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Passionate about building
            <span className="block text-gray-500">intelligent solutions</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Bio */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg text-gray-400 leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="flex items-center gap-3 text-gray-500">
              <MapPin size={18} className="text-teal-500" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-teal-500/30 transition-all duration-300">
                <div className="w-10 h-10 bg-teal-500/10 rounded-xl flex items-center justify-center mb-3">
                  <GraduationCap className="text-teal-400" size={20} />
                </div>
                <h4 className="text-white font-semibold">B.Tech CSE</h4>
                <p className="text-sm text-gray-500">BIT Mesra</p>
              </div>
              <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-orange-500/30 transition-all duration-300">
                <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center mb-3">
                  <Award className="text-orange-400" size={20} />
                </div>
                <h4 className="text-white font-semibold">CGPA 7.8</h4>
                <p className="text-sm text-gray-500">Current Score</p>
              </div>
            </div>
          </div>

          {/* Right - Education Timeline */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-teal-400" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group relative pl-8 border-l-2 border-white/10 hover:border-teal-500/50 transition-all duration-300"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#0a0a0a] border-2 border-white/20 group-hover:border-teal-500 rounded-full transition-colors" />
                  
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl group-hover:border-teal-500/20 transition-all duration-300">
                    <div className="flex items-center gap-2 text-sm text-teal-400 mb-2">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">{edu.institution}</h4>
                    <p className="text-gray-400 mb-2">{edu.degree}</p>
                    <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 text-sm rounded-full">
                      {edu.grade}
                    </span>
                    
                    {edu.coursework && (
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Relevant Coursework</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.slice(0, 4).map((course, i) => (
                            <span key={i} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-lg">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
