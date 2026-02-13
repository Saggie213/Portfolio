import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, Users, Code, ExternalLink } from 'lucide-react';
import { experience } from '../../data/mock';

const Experience = () => {
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
      id="experience"
      ref={sectionRef}
      className="relative py-32 bg-[#050505] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-[600px] bg-gradient-to-r from-orange-500/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-teal-400 text-sm font-mono uppercase tracking-widest mb-4 block">Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Leadership & Experience
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Leading teams, mentoring students, and driving technical initiatives.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-teal-500/20 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-teal-400" size={28} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-gray-400">{exp.organization}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-teal-400 bg-teal-500/10 px-4 py-2 rounded-full w-fit">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-gray-500 mb-6">{exp.description}</p>

                    {/* Highlights Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 bg-white/[0.02] rounded-xl border border-white/5 hover:border-teal-500/20 transition-colors"
                        >
                          <div className="w-8 h-8 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            {i === 0 && <Users size={16} className="text-teal-400" />}
                            {i === 1 && <Code size={16} className="text-teal-400" />}
                            {i === 2 && <Briefcase size={16} className="text-teal-400" />}
                            {i === 3 && <ExternalLink size={16} className="text-teal-400" />}
                          </div>
                          <p className="text-sm text-gray-400">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
