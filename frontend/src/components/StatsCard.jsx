import { useState, useEffect } from 'react';

export default function StatsCard({ onFilterChange }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('[data-stats]');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: '3+',
      label: 'Projects Completed',
      icon: '/assets/icons/python.ico',
      color: 'from-clean-primary to-blue-400',
      filter: 'todo',
      description: 'ETL, Web & Data Solutions'
    },
    {
      number: '15+',
      label: 'Technologies',
      icon: '/assets/icons/django.svg',
      color: 'from-clean-secondary to-emerald-400',
      filter: 'todo',
      description: 'Backend, Data & Tools'
    },
    {
      number: '2',
      label: 'Years Backend',
      icon: '/assets/icons/Pandas.svg',
      color: 'from-purple-500 to-pink-500',
      filter: 'backend',
      description: 'Python, Django & Data'
    },
    {
      number: '100%',
      label: 'ETL & Data Focus',
      icon: '/assets/icons/powerbi.svg',
      color: 'from-orange-500 to-red-500',
      filter: 'data',
      description: 'Pipeline & Analytics'
    },
  ];

  return (
    <section className="py-16 bg-clean-bg" data-stats>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              onClick={() => onFilterChange(stat.filter)}
              className={`group cursor-pointer transform transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white h-full`}>
                <div className="flex items-start justify-between mb-4">
                  <img src={stat.icon} alt={stat.label} className="w-12 h-12 object-contain filter brightness-0 invert" />
                  <div className="text-right">
                    <div className="text-5xl font-bold font-display">
                      {stat.number}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:translate-x-1 transition-transform">
                  {stat.label}
                </h3>
                <p className="text-sm opacity-90">
                  {stat.description}
                </p>

                <div className="mt-4 pt-4 border-t border-white/20">
                  <span className="text-xs opacity-75">Click to filter timeline →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
