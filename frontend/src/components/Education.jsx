import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: "Ingeniería en Desarrollo Y Gestión de Software",
    school: "Universidad Tecnológica de la Zona Metropolitana de Guadalajara",
    period: "2023 - 2027",
    status: "En curso"
  },
  {
    id: 2,
    degree: "Técnico Superior Universitario en Desarrollo y Gestión de Software",
    school: "Universidad Tecnológica de la Zona Metropolitana de Guadalajara",
    period: "2023 - 2025",
    status: "Finalizado"
  }
];

// Comenté la parte de certificaciones para que agreguemos las tuyas luego
const certifications = [
  {
    id: 1,
    title: "Data Analytics Essentials",
    issuer: "CISCO",
    date: "2026",
    link: "https://www.credly.com/badges/b499d83f-bd03-4b4a-a99e-c8c4cb875bbd/public_url"
  },

  {
    id: 2,
    title: "Inglés Intermedio Alto B2",
    issuer: "Platzi",
    date: "2026",
    link: "https://platzi.com/p/jimmy.avina.23s/ruta/12051-ruta/diploma/detalle/"
  },
  {
    id: 3,
    title: "Excel Intermedio",
    issuer: "Platzi",
    date: "2026",
    link: "#"
  },

];

const Education = () => {
  return (
    <section id="educacion" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Educación & Certificaciones</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Formación académica sólida complementada con certificaciones para aportar valor continuo mediante tecnologías modernas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Educación Column */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 p-3 rounded-xl">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text">Formación Académica</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-surface border border-border p-6 rounded-2xl hover:shadow-md transition-all group"
                >
                  <div className="flex justify-between items-start mb-3 gap-2 flex-wrap">
                    <h4 className="text-lg font-bold text-text group-hover:text-success transition-colors">{item.degree}</h4>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border shrink-0 ${item.status === 'En curso'
                      ? 'bg-yellow-50 text-yellow-600 border-yellow-400'
                      : 'bg-green-50 text-success border-success/20'
                      }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="font-medium text-text mb-3">{item.school}</p>
                  <div className="flex items-center text-sm text-text-muted">
                    <Calendar size={14} className="mr-2" />
                    {item.period}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificaciones Column */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-success/10 p-3 rounded-xl">
                <Award className="text-success" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text">Certificaciones Relevantes</h3>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >

              </motion.div>

              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
                  className="bg-surface border border-border p-5 rounded-2xl flex items-center justify-between group hover:border-success/50 transition-colors"
                >
                  <div>
                    <h4 className="font-bold text-text text-sm group-hover:text-success transition-colors">{cert.title}</h4>
                    <p className="text-text-muted text-xs mt-1">{cert.issuer}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-text-muted text-xs block mb-1">{cert.date}</span>
                    <a href={cert.link} className="text-success text-xs font-semibold hover:underline border border-success/30 px-2 py-1 rounded">Ver credencial</a>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
