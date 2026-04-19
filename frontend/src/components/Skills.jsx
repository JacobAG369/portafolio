import React from 'react';
import { motion } from 'framer-motion';

const skillsCategorized = [
  {
    category: "Data & Analytics",
    skills: [
      { name: 'Python', icon: '/assets/icons/python.ico' },
      { name: 'Pandas', icon: '/assets/icons/Pandas.svg' },
      { name: 'NumPy', icon: '/assets/icons/NumPy.svg' },
      { name: 'Matplotlib', icon: '/assets/icons/Matplotlib.svg' },
      { name: 'PowerBI', icon: '/assets/icons/powerbi.svg' },
      { name: 'Jupyter', icon: '/assets/icons/jupyter.svg' },
      { name: 'Excel', icon: '/assets/icons/excel.svg' },
    ]
  },
  {
    category: "Backend & Bases de Datos",
    skills: [
      { name: 'PostgreSQL', icon: '/assets/icons/postgresql.svg' },
      { name: 'MongoDB', icon: '/assets/icons/mongodb.svg' },
      { name: 'Django', icon: '/assets/icons/django.svg' },
      { name: 'Flask', icon: '/assets/icons/flask.svg' },
    ]
  },
  {
    category: "Web & Herramientas",
    skills: [
      { name: 'JavaScript', icon: '/assets/icons/js.svg' },
      { name: 'HTML', icon: '/assets/icons/html.svg' },
      { name: 'CSS', icon: '/assets/icons/css.svg' },
      { name: 'Git', icon: '/assets/icons/git.svg' },
      { name: 'GitHub', icon: '/assets/icons/github.svg' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Herramientas & Tecnologías</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Stack tecnológico enfocado en análisis de datos robusto y desarrollo de interfaces prácticas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsCategorized.map((category, idx) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-text mb-6 pb-4 border-b border-border">
                {category.category}
              </h3>
              
              <div className="flex flex-col gap-3">
                {category.skills.map(skill => (
                  <div key={skill.name} className="flex items-center gap-4 bg-background px-4 py-3 rounded-lg border border-transparent hover:border-border transition-colors group">
                    <div className="w-8 h-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="font-medium text-text-muted group-hover:text-text transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
