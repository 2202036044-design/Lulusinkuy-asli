import React from 'react';
import { ArrowRight, MessageSquarePlus } from 'lucide-react';
import { SERVICES, ICON_MAP } from '../constants';
import ScrollReveal from './ScrollReveal';

interface ServicesProps {
  onReviewClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onReviewClick }) => {
  const waLink = "https://wa.link/f9luhr";

  return (
    <section id="layanan" className="py-24 bg-[#0A1931] relative overflow-hidden">
      {/* Reduced blur elements */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#1E90FF]/5 blur-[80px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal direction="up" once={false} className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
              Layanan <span className="text-[#1E90FF]">Kami</span>
            </h2>
            <p className="text-white/50 text-sm md:text-lg font-medium">Bantuan akademik profesional yang disesuaikan dengan kebutuhan mahasiwa Indonesia.</p>
          </div>
          <button
            onClick={onReviewClick}
            className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl font-black text-sm transition-all group shadow-xl uppercase tracking-widest"
          >
            <MessageSquarePlus className="text-[#1E90FF] group-hover:scale-110 transition-transform" size={18} />
            Beri Ulasan
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon] || ArrowRight;

            return (
              <ScrollReveal
                direction="up"
                key={service.id}
                once={false}
                stagger
                index={index}
                className="h-full"
              >
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-full p-6 md:p-10 bg-[#112240] border border-white/5 rounded-3xl hover:border-[#1E90FF]/40 transition-all duration-300 hover:shadow-2xl flex flex-col overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-6 md:mb-8 relative z-10">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1E90FF]/10 rounded-2xl flex items-center justify-center text-[#1E90FF] border border-[#1E90FF]/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>

                  <h3 className="text-sm md:text-3xl font-black mb-3 md:mb-4 text-white group-hover:text-[#1E90FF] transition-colors tracking-tight relative z-10 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-white/50 leading-snug md:leading-relaxed mb-6 md:mb-10 text-[10px] md:text-lg font-medium relative z-10 line-clamp-3 md:line-clamp-none">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 relative z-10">
                    <div className="inline-flex items-center gap-2 text-[8px] md:text-sm font-black text-[#1E90FF] group-hover:text-white transition-all uppercase tracking-widest">
                      Pesan <span className="hidden sm:inline">Sekarang</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
