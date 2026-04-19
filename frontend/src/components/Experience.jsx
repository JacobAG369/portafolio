import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Data Analyst",
    company: "Celtics TI",
    period: "Agosto 2025 – Actualidad",
    description: "Enfoque en analizar información, automatizar procesos internos y apoyar a distintas áreas mediante herramientas que facilitan el trabajo diario. Combino análisis de datos con desarrollo de software para ofrecer soluciones claras y funcionales.",
    achievements: [
      "Análisis y organización de datos internos para la generación de reportes y métricas operativas.",
      "Automatización de tareas repetitivas logrando reducción de errores y ahorro de tiempo operativo.",
      "Desarrollo de herramientas internas y paneles de administración de fácil uso."
    ]
  },
  {
    id: 2,
    role: "Practicante de Desarrollo de Software",
    company: "Celtics TI",
    period: "Abril 2025 – Julio 2025",
    description: "Participación en el desarrollo de sistemas internos destinados a automatizar procesos netamente manuales dentro de la organización.",
    achievements: [
      "Diseño e implementación de pantallas, formularios y flujos de usuario.",
      "Colaboración en la estructuración de la base de datos y funciones lógicas del sistema.",
      "Documentación técnica de los procesos y módulos desarrollados."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 bg-surface border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Experiencia Profesional</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Trayectoria enfocada en la creación de valor medible a través de los datos y el software.
          </p>
        </div>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-background border-2 border-primary -translate-x-[17px] flex items-center justify-center shadow-sm">
                <Briefcase size={14} className="text-primary" />
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-text">{exp.role}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-sm text-text-muted bg-surface px-3 py-1 rounded-full border border-border shrink-0 w-fit">
                    <Calendar size={14} className="mr-2" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-text-muted leading-relaxed mb-6">
                  {exp.description}
                </p>

                <ul className="space-y-3">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm md:text-base">
                      <span className="text-success mr-3 mt-1.5 leading-none">•</span>
                      <span className="text-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
