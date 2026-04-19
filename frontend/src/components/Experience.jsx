import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Practicante de Desarrollo de Software",
    company: "Celtics TI — Guadalajara, Jalisco (Esquema Híbrido)",
    period: "Mayo 2025 – Diciembre 2025",
    description: "Desarrollo de soluciones tecnológicas y automatización de flujos de trabajo administrativos. Participación en desarrollo de un sistema integral de tickets de soporte.",
    achievements: [
      "Análisis y validación de bases de datos para asegurar calidad y consistencia de la información.",
      "Desarrollo de soluciones automatizadas para procesos administrativos, reduciendo tiempos operativos.",
      "Creación de reportes y estructuras de datos para facilitar la toma de decisiones.",
      "Documentación de procesos técnicos y flujos de trabajo.",
      "Desarrollo de sistema interno para el registro, seguimiento y trazabilidad de incidencias.",
      "Desarrollo de dashboards administrativos para el monitoreo de operaciones del sistema de tickets."
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
              <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-background border-2 border-slate-900 -translate-x-[17px] flex items-center justify-center shadow-sm">
                <Briefcase size={14} className="text-slate-900" />
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-text">{exp.role}</h3>
                    <p className="text-slate-900 font-semibold">{exp.company}</p>
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
