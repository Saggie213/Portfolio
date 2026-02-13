import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Medal, Award, Star } from 'lucide-react';
import { achievements } from '../../data/mock';

const Achievements = () => {
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

  const getIcon = (iconName) => {
    const icons = {
      trophy: Trophy,
      medal: Medal,
      certificate: Award,
      star: Star
    };
    const IconComponent = icons[iconName] || Award;
    return IconComponent;
  };

  const getGradient = (index) => {
    const gradients = [
      'from-yellow-500/20 to-orange-500/20',
      'from-teal-500/20 to-cyan-500/20',
      'from-purple-500/20 to-pink-500/20',
      'from-blue-500/20 to-indigo-500/20'
    ];
    return gradients[index % gradients.length];
  };

  const getIconColor = (index) => {
    const colors = ['text-yellow-400', 'text-teal-400', 'text-purple-400', 'text-blue-400'];
    return colors[index % colors.length];
  };

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 text-yellow-400 text-sm font-mono uppercase tracking-widest mb-4">
            <Trophy size={16} />
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Achievements & Certifications
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Competitive programming milestones and professional certifications.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = getIcon(achievement.icon);
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-full p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-white/10 transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${getGradient(index)} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={getIconColor(index)} size={28} />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {achievement.year}
                    </span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/[0.02] to-transparent rounded-bl-3xl rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Competitive Programming Stats */}
        <div className={`mt-16 p-8 bg-gradient-to-r from-teal-500/5 via-transparent to-orange-500/5 border border-white/5 rounded-3xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white">Competitive Programming Profiles</h3>
            <p className="text-gray-500 text-sm mt-2">Constantly improving problem-solving skills</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { platform: 'LeetCode', handle: '@vasuli12', url: 'https://leetcode.com/u/vasuli12/' },
              { platform: 'Codeforces', handle: '@Thande_papa14', url: 'https://codeforces.com/profile/Thande_papa14' },
              { platform: 'CodeChef', handle: '@thanda_chai14', url: 'https://www.codechef.com/users/thanda_chai14' },
              { platform: 'GitHub', handle: '@Saggie213', url: 'https://github.com/Saggie213' }
            ].map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-teal-500/30 rounded-xl transition-all duration-300 text-center"
              >
                <p className="text-white font-medium group-hover:text-teal-400 transition-colors">
                  {profile.platform}
                </p>
                <p className="text-xs text-gray-500 mt-1">{profile.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
