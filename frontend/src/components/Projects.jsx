import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Target, Lightbulb } from 'lucide-react';

const projectsData = [
  {
    id: 'tu-turismo',
    title: 'Tu-Turismo',
    role: 'Desarrollo de un Pipeline de Datos E2E',
    image: '/assets/img/tu-turismo.png',
    problem: 'La empresa carecía de visibilidad clara sobre las interacciones de los usuarios y destinos más populares para tomar decisiones estratégicas.',
    solution: 'Desarrollé un pipeline E2E diseñando procesos ETL desde MongoDB utilizando Python (Pandas/NumPy) y construyendo un panel administrativo automatizado en Power BI.',
    impact: 'Generación de reportes automáticos que tradujeron datos técnicos en insights de negocio, identificando patrones estacionales de turismo.',
    metric: '+Automatización ETL',
    tags: ['Python', 'Pandas', 'MongoDB', 'Power BI', 'Dashboards'],
    repo: 'https://github.com/tu-usuario/tu-turismo',
    demo: '#'
  },
  {
    id: 'medibook',
    title: 'MediBook',
    role: 'Backend & Data Analytics',
    image: '/assets/img/medibook.png',
    problem: 'Gestión ineficiente y manual de citas médicas presenciales y en línea sin diferenciación clara de flujos ni control de roles.',
    solution: 'Implementación de un sistema centralizado con PostgreSQL y Flask aplicando patrones de diseño para estructurar los flujos de pacientes y médicos.',
    impact: 'Organización total del ciclo de vida de la cita medica y creación de una base de datos escalable para futuros análisis clínicos.',
    metric: 'Flujos Optimizados',
    tags: ['Python', 'Flask', 'PostgreSQL', 'Patrones de Diseño'],
    repo: 'https://github.com/JacobAG369/MediBook',
    demo: '#'
  },
  {
    id: 'support-pandas',
    title: 'SupportPandas',
    role: 'Sistema de Tickets de Soporte',
    image: '/assets/img/sp-pandas.png',
    problem: 'La falta de trazabilidad en las solicitudes de soporte técnico dificultaba medir el rendimiento del área de soporte y cuellos de botella.',
    solution: 'Desarrollo de una aplicación web (Django) para gestión de tickets que incluye módulos de visualización de datos usando pandas y Seaborn.',
    impact: 'Permitió a los administradores visualizar operaciones en tiempo real y medir tiempos de resolución históricos de cada caso.',
    metric: 'Trazabilidad 100%',
    tags: ['Django', 'Python', 'Seaborn', 'Pandas', 'PostgreSQL'],
    repo: 'https://github.com/JacobAG369/SupportPandas',
    demo: '#'
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-surface rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      {/* Image Container with hover effect */}
      <div className="relative h-60 w-full overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-text-muted font-medium">Imagen no disponible</div>`;
          }}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {project.metric}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-text mb-1 group-hover:text-success transition-colors">{project.title}</h3>
        <p className="text-sm font-medium text-text-muted mb-6">{project.role}</p>

        {/* Problema / Solución / Impacto */}
        <div className="space-y-4 mb-6 flex-grow">
          <div className="flex gap-3">
            <Target className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-text text-sm block">El Reto</span>
              <p className="text-text-muted text-sm leading-relaxed">{project.problem}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Lightbulb className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-text text-sm block">La Solución</span>
              <p className="text-text-muted text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <TrendingUp className="w-5 h-5 text-success shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-text text-sm block">El Impacto</span>
              <p className="text-text-muted text-sm leading-relaxed">{project.impact}</p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-background text-text text-xs font-medium rounded-md border border-border">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="pt-4 border-t border-border flex gap-4 mt-auto">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-semibold bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-success transition-colors shadow-sm"
            >
              <ExternalLink size={16} /> Ver Proyecto
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-text hover:text-success transition-colors px-2 py-2"
          >
            <i className="fa-brands fa-github text-lg"></i> Código
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Proyectos Destacados</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Soluciones analíticas y de software construidas resolviendo problemas de negocio reales. Enfoque de extremo a extremo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
