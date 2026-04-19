import { useState, useEffect } from 'react';

export default function Metrics() {
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

    const element = document.querySelector('[data-metrics]');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      value: '3+',
      label: 'Proyectos Completados',
      color: 'accent-blue',
      icon: '📊',
    },
    {
      value: '15+',
      label: 'Tecnologías',
      color: 'accent-green',
      icon: '🛠️',
    },
    {
      value: 'Python/Django',
      label: 'Especialidad Backend',
      color: 'accent-blue',
      icon: '⚙️',
    },
    {
      value: 'ETL & Análisis',
      label: 'Enfoque Data',
      color: 'accent-green',
      icon: '📈',
    },
  ];

  return (
    <section className="py-24 bg-light-bg" data-metrics>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light-text mb-4 font-display">
            By The Numbers
          </h2>
            <p className="text-light-text-secondary text-lg">Quick overview of my expertise and experience</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`group bg-light-card rounded-xl p-8 border border-light-border transition-all duration-300 cursor-pointer hover:shadow-lg transform hover:-translate-y-2 ${
                metric.color === 'accent-blue'
                  ? 'hover:border-accent-blue hover:shadow-blue-500/20'
                  : 'hover:border-accent-green hover:shadow-green-500/20'
              } ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>

              {/* Value */}
              <p
                className={`text-3xl font-bold mb-2 ${
                  metric.color === 'accent-blue' ? 'text-accent-blue' : 'text-accent-green'
                }`}
              >
                {metric.value}
              </p>

              {/* Label */}
              <p className="text-light-text-secondary text-sm">{metric.label}</p>

              {/* Accent line on hover */}
              <div
                className={`mt-4 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  metric.color === 'accent-blue' ? 'bg-accent-blue' : 'bg-accent-green'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
