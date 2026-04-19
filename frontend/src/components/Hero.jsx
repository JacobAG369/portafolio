import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Smartphone } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-slate-500 font-medium mb-3 tracking-wide">
              HOLA, SOY
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-text leading-tight mb-4">
              Jimmy Aviña Gómez
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-text-muted font-semibold mb-6">
              Data Analyst & Software Developer
            </motion.h2>

            <motion.p variants={itemVariants} className="text-text-muted mb-8 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
              Transformo datos complejos en decisiones estratégicas. Automatizo flujos de trabajo y desarrollo herramientas que impulsan la eficiencia operativa.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
              <a href="/assets/assets/JMYAV-CV.pdf" download="Jimmy_Avina_Gomez_CV.pdf" className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all shadow-md shadow-slate-900/20 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-2">
                <i className="fa-solid fa-download"></i> Descargar CV
              </a>
              <a href="#proyectos" className="px-8 py-3 border border-border bg-surface text-text font-medium rounded-lg hover:border-slate-900 hover:text-slate-900 transition-all shadow-sm w-full sm:w-auto text-center">
                Ver Proyectos
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-5 justify-center md:justify-start">
              <a href="https://github.com/JacobAG369" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text hover:text-slate-900 hover:border-slate-900 transition-all hover:scale-110 shadow-sm">
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/jmyav369" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text hover:text-slate-900 hover:border-slate-900 transition-all hover:scale-110 shadow-sm">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a href="mailto:jmy.369@outlook.com" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text hover:text-slate-900 hover:border-slate-900 transition-all hover:scale-110 shadow-sm">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/523340721835" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text hover:text-slate-900 hover:border-slate-900 transition-all hover:scale-110 shadow-sm">
                <Smartphone size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-105 blur-xl"></div>
              {/* Replace with actual image path or keep the one copied from assets */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-surface shadow-xl bg-gray-100 flex items-center justify-center text-gray-400">
                <img src="/assets/img/jmy-b.png" alt="Jimmy Aviña" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
