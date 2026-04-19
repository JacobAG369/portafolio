import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contacto" className="bg-slate-950 text-white border-t border-white/5">

      {/* CTA Row */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-1 font-medium">Disponible para oportunidades</p>
          <h2 className="text-xl font-bold text-white">¿Tienes un proyecto en mente?</h2>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:jmy.369@outlook.com"
            className="flex items-center gap-2 bg-white text-slate-950 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-100 transition-all shadow"
          >
            <Mail size={16} />
            Envíame un correo
          </a>
          <a
            href="https://wa.me/523340701835"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-transparent text-white/80 px-5 py-2.5 rounded-lg font-semibold text-sm border border-white/15 hover:border-white/40 hover:text-white transition-all"
          >
            <MessageSquare size={16} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Bottom Bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/30 text-xs">© 2026 Jimmy Aviña Gómez. Todos los derechos reservados.</p>

        <div className="flex gap-3">
          <a
            href="https://github.com/JacobAG369"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all text-sm"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jmyav369"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all text-sm"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Contact;
