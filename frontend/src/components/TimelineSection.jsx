import { useState, useEffect } from 'react';

export default function TimelineSection({ activeFilter }) {
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

    const element = document.querySelector('[data-timeline]');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const timelineEvents = [
    {
      year: 2025,
      month: 'Agosto',
      title: 'Celtics TI',
      role: 'Data Analyst',
      category: 'experiencia',
      description: 'Análisis de datos, reportes y optimización de procesos',
      techs: ['Python', 'Pandas', 'PostgreSQL', 'PowerBI'],
      side: 'left'
    },
    {
      year: 2025,
      month: 'Abril - Julio',
      title: 'Celtics TI',
      role: 'Intern Developer',
      category: 'experiencia',
      description: 'Desarrollo backend, APIs y mantenimiento de sistemas',
      techs: ['Python', 'Django', 'PostgreSQL'],
      side: 'right'
    },
    {
      year: 2024,
      month: 'Proyecto',
      title: 'Tu-Turismo',
      role: 'ETL Pipeline & Data Processing',
      category: 'backend',
      description: 'Sistema de extracción, transformación y carga de datos turísticos',
      techs: ['Python', 'Pandas', 'MongoDB', 'ETL'],
      side: 'left'
    },
    {
      year: 2024,
      month: 'Proyecto',
      title: 'MediBook',
      role: 'Medical Appointment System',
      category: 'backend',
      description: 'Plataforma de gestión de citas médicas con base de datos relacional',
      techs: ['Flask', 'PostgreSQL', 'HTML/CSS'],
      side: 'right'
    },
    {
      year: 2024,
      month: 'Proyecto',
      title: 'SupportPandas',
      role: 'Ticket Management System',
      category: 'data',
      description: 'Sistema de gestión de tickets con análisis de datos integrado',
      techs: ['Django', 'Pandas', 'PostgreSQL'],
      side: 'left'
    }
  ];

  const filtered = activeFilter === 'todo'
    ? timelineEvents
    : timelineEvents.filter(e => e.category === activeFilter);

  return (
    <section className="py-24 bg-clean-bg-secondary" data-timeline>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-clean-text mb-4 font-display">
            Experience & Projects
          </h2>
          <p className="text-clean-text-secondary text-lg">
            Professional journey and key projects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-clean-primary via-clean-secondary to-clean-primary"></div>

          {/* Events */}
          <div className="space-y-12">
            {filtered.map((event, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                  }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className={`md:flex gap-8 items-center ${event.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="md:w-1/2">
                    <div className="bg-clean-card rounded-xl border border-clean-border p-6 hover:border-clean-primary hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-clean-primary uppercase tracking-widest">
                          {event.month} {event.year}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-clean-text mb-2 font-display">
                        {event.title}
                      </h3>

                      <p className="text-clean-secondary font-semibold mb-3">
                        {event.role}
                      </p>

                      <p className="text-clean-text-secondary mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2">
                        {event.techs.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-clean-bg-secondary border border-clean-border text-xs font-medium text-clean-text-secondary rounded-full hover:border-clean-primary hover:text-clean-primary transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex md:w-1/2 justify-center">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-clean-primary to-clean-secondary rounded-full border-4 border-clean-bg shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-clean-text-secondary">No events found for this filter</p>
          </div>
        )}
      </div>
    </section>
  );
}
