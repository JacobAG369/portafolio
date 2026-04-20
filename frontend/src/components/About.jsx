import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Sobre mí</h2>
            <div className="space-y-4 text-text-muted text-lg leading-relaxed">
              <p>
                Soy un analista de datos y desarrollador de software. Me apasiona optimizar procesos y me especializo en tomar datos desordenados y transformarlos en información medible, así como el desarrollo plataformas eficientes.
              </p>
              <p>
                Actualmente curso la Ingeniería en Desarrollo y Gestión de Software, en la <strong>UTZMG</strong>. En la práctica, desarrollo soluciones internas y analizo datos para automatizar procesos clave, reduciendo significativamente la carga de trabajo manual y minimizando el margen de error operativo.
              </p>
              <p>
                Mi filosofía de trabajo y estudio es que la tecnología debe servir al negocio: cada línea de código y cada dashboard debe tener un propósito claro de ahorro de tiempo o maximización de beneficios.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border border-border p-4 rounded-xl bg-background">
                <p className="text-3xl font-bold text-primary mb-1">E2E</p>
                <p className="text-sm font-medium text-text-muted">Desarrollo End-to-End</p>
              </div>
              <div className="border border-border p-4 rounded-xl bg-background">
                <p className="text-3xl font-bold text-success mb-1">100%</p>
                <p className="text-sm font-medium text-text-muted">Enfoque en Datos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Decoration / Abstract graphic representing data flow */}
            <div className="relative w-full max-w-sm aspect-square bg-background rounded-2xl border border-border flex items-center justify-center overflow-hidden shadow-inner p-8">
              <div className="w-full h-full border-l-2 border-b-2 border-border relative">
                {/* Data Bars */}
                <div className="absolute bottom-0 left-[10%] w-[15%] h-[30%] bg-primary/20 rounded-t-sm" />
                <div className="absolute bottom-0 left-[35%] w-[15%] h-[60%] bg-primary/40 rounded-t-sm" />
                <div className="absolute bottom-0 left-[60%] w-[15%] h-[40%] bg-primary/60 rounded-t-sm" />
                <div className="absolute bottom-0 left-[85%] w-[15%] h-[90%] bg-primary rounded-t-sm" />

                {/* Trend line */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                  <path
                    d="M 10 70 Q 30 20 50 60 T 90 10"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
