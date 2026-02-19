
import React from 'react';
import { ArrowRight, MessageSquarePlus } from 'lucide-react';
import { SERVICES, ICON_MAP } from '../constants';

interface ServicesProps {
  onReviewClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onReviewClick }) => {
  const waLink = "https://wa.link/f9luhr";

  return (
    <section id="layanan" className="py-16 md:py-24 bg-[#0A1931] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#1E90FF]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 md:mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 tracking-tighter uppercase">
              Layanan <span className="text-[#1E90FF]">Kami</span>
            </h2>
            <p className="text-white/50 text-sm md:text-lg font-medium">Bantuan akademik profesional yang disesuaikan dengan kebutuhan mahasiwa Indonesia.</p>
          </div>
          <button 
            onClick={onReviewClick}
            className="flex items-center gap-2 md:gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[10px] md:text-sm transition-all group backdrop-blur-md shadow-xl uppercase tracking-widest"
          >
            <MessageSquarePlus className="text-[#1E90FF] group-hover:scale-110 transition-transform" size={18} />
            Beri Ulasan
          </button>
        </div>

        {/* Grid adjusted to 2 columns on mobile (grid-cols-2) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon] || ArrowRight;
            const delay = `${index * 0.2}s`;
            
            return (
              <div 
                key={service.id} 
                className="relative group/card-wrapper"
                style={{ 
                  animation: `float-slow 7s ease-in-out infinite`,
                  animationDelay: delay 
                }}
              >
                <div className="absolute inset-0 bg-[#1E90FF]/5 blur-[30px] md:blur-[50px] rounded-2xl md:rounded-3xl opacity-0 group-hover/card-wrapper:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-full p-4 md:p-10 bg-[#112240]/60 backdrop-blur-2xl border border-white/5 rounded-2xl md:rounded-[2.5rem] hover:border-[#1E90FF]/40 transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] flex flex-col block overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none rounded-2xl md:rounded-[2.5rem]"></div>
                  
                  <div className="flex justify-between items-start mb-4 md:mb-8 relative z-10">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-[#1E90FF]/10 rounded-xl md:rounded-2xl flex items-center justify-center text-[#1E90FF] border border-[#1E90FF]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#1E90FF]/10">
                      <IconComponent className="w-5 h-5 md:w-8 md:h-8" />
                    </div>
                  </div>

                  <h3 className="text-sm md:text-3xl font-black mb-2 md:mb-4 text-white group-hover:text-[#1E90FF] transition-colors tracking-tight relative z-10 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/50 leading-snug md:leading-relaxed mb-6 md:mb-10 text-[10px] md:text-lg font-medium relative z-10 line-clamp-3 md:line-clamp-none">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-3 md:pt-6 border-t border-white/5 relative z-10">
                    <div 
                      className="inline-flex items-center gap-1 md:gap-2 text-[8px] md:text-sm font-black text-[#1E90FF] group-hover:text-white transition-all uppercase tracking-widest group/btn"
                    >
                      Pesan <span className="hidden sm:inline">Sekarang</span>
                      <ArrowRight className="w-2.5 h-2.5 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
};

export default Services;
