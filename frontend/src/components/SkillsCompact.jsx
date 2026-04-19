import { useState, useEffect } from 'react';

export default function SkillsCompact() {
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

    const element = document.querySelector('[data-skills]');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Backend',
      icon: '⚙️',
      color: 'accent-blue',
      skills: ['Python', 'Django', 'Flask', 'JavaScript']
    },
    {
      title: 'Data',
      icon: '📊',
      color: 'accent-green',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'PowerBI']
    },
    {
      title: 'Databases',
      icon: '🗄️',
      color: 'accent-blue',
      skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Jupyter']
    },
    {
      title: 'Tools',
      icon: '🛠️',
      color: 'accent-green',
      skills: ['Git', 'GitHub', 'HTML/CSS', 'Excel']
    }
  ];

  return (
    <section className="py-24 bg-clean-bg" data-skills>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-clean-text mb-4 font-display">
            Skills & Technologies
          </h2>
          <p className="text-clean-text-secondary text-lg">
            Technical proficiencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${catIndex * 100}ms`,
              }}
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className={`text-xl font-bold font-display ${
                    category.color === 'accent-blue' ? 'text-clean-primary' : 'text-clean-secondary'
                  }`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 cursor-pointer border ${
                        category.color === 'accent-blue'
                          ? 'bg-blue-50 border-clean-primary text-clean-primary hover:bg-clean-primary hover:text-white'
                          : 'bg-green-50 border-clean-secondary text-clean-secondary hover:bg-clean-secondary hover:text-white'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 pt-16 border-t border-clean-border">
          <h3 className="text-lg font-semibold text-clean-text mb-6 text-center font-display">
            Also experienced with
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'REST APIs',
              'GraphQL',
              'Machine Learning',
              'Data Visualization',
              'ETL Pipelines',
              'Microservices',
              'Cloud Deployment',
              'Performance Optimization',
              'System Design',
              'Testing',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-clean-bg-secondary border border-clean-border text-clean-text-secondary rounded-full text-sm hover:border-clean-primary hover:text-clean-primary hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-clean-primary/20 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
