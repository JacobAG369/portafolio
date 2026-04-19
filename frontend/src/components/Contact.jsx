import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Briefcase } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Hablamos sobre tu próximo proyecto?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Si buscas optimizar tus procesos, extraer valor de tus datos o desarrollar una solución de software eficiente, estaré encantado de colaborar o discutir oportunidades laborales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="mailto:jmy.369@outlook.com"
              className="flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-bold border border-white hover:bg-transparent hover:text-white transition-all shadow-lg"
            >
              <Mail size={20} />
              Envíame un correo
            </a>
            <a
              href="https://wa.me/523340701835"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-transparent text-white px-8 py-3 rounded-xl font-bold border border-white/30 hover:bg-white/10 hover:border-white transition-all"
            >
              <MessageSquare size={20} />
              WhatsApp
            </a>
          </div>

          <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/70 text-sm">
              <p>© 2026 Jimmy Aviña Gómez.</p>
              <p>Todos los derechos reservados.</p>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/JacobAG369" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/jmyav369" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
