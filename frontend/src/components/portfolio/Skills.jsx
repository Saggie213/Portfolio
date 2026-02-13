import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../../data/mock';

const Skills = () => {
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

  const skillCategories = [
    { name: 'Languages', skills: skills.languages, color: '#14b8a6', icon: '{ }' },
    { name: 'Frontend', skills: skills.frontend, color: '#f97316', icon: '</>' },
    { name: 'Backend', skills: skills.backend, color: '#8b5cf6', icon: '⚙️' },
    { name: 'Databases', skills: skills.databases, color: '#06b6d4', icon: '◎' },
    { name: 'Tools', skills: skills.tools, color: '#ec4899', icon: '⚒️' },
    { name: 'ML/AI', skills: skills.mlLibraries, color: '#10b981', icon: '✱' }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-teal-500/5 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-teal-400 text-sm font-mono uppercase tracking-widest mb-4 block">Technical Arsenal</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, machine learning, and system design.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className={`group p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-white/10 transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-mono"
                  style={{ backgroundColor: `${category.color}15`, color: category.color }}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 text-sm rounded-full border border-white/5 hover:border-white/20 transition-all duration-300 cursor-default"
                    style={{
                      animationDelay: `${skillIndex * 50}ms`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Visualization */}
        <div className={`mt-16 p-8 bg-white/[0.02] border border-white/5 rounded-3xl transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-lg font-semibold text-white mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Full-Stack Development', level: 90, color: '#14b8a6' },
              { name: 'Machine Learning', level: 80, color: '#f97316' },
              { name: 'System Design', level: 75, color: '#8b5cf6' },
              { name: 'Problem Solving', level: 85, color: '#06b6d4' }
            ].map((skill, index) => (
              <div key={skill.name} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  {/* Background Circle */}
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      fill="none"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="8"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${skill.level * 2.64} 264`}
                      className="transition-all duration-1000 ease-out"
                      style={{
                        strokeDashoffset: isVisible ? 0 : 264,
                        transitionDelay: `${index * 200 + 500}ms`
                      }}
                    />
                  </svg>
                  {/* Percentage */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{skill.level}%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
