
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const MoreProof: React.FC = () => {
  const proofLink = "https://www.instagram.com/lulusin_kuy?igsh=bHVrMmluMzlkeWZj";

  return (
    <section id="more-proof" className="py-20 bg-[#0A1931] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1E90FF]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* FLOATING WRAPPER */}
          <div 
            className="relative group/proof-box"
            style={{ animation: 'float-smooth 8s ease-in-out infinite' }}
          >
            {/* AMBIENT BACK-GLOW */}
            <div className="absolute inset-0 bg-[#FFD700]/10 blur-[80px] rounded-[3rem] opacity-40 group-hover/proof-box:opacity-80 transition-opacity duration-700"></div>
            
            <div className="relative p-[2px] rounded-[3rem] bg-gradient-to-r from-white/10 via-[#1E90FF]/30 to-white/10">
              <div className="bg-[#0D1F3D]/80 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 text-center border border-white/5 shadow-2xl overflow-hidden">
                {/* Card Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1E90FF]/5 to-transparent pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1E90FF]/10 rounded-full text-[#1E90FF] text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-10 border border-[#1E90FF]/20">
                    <ShieldCheck size={16} />
                    Transparansi Real-Time
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-white uppercase leading-[1.1]">
                    Cek 1.000+ Bukti <br /> 
                    <span className="text-[#FFD700]">Pengerjaan Kami</span>
                  </h2>
                  
                  <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                    Lihat update harian, screenshot chat asli, dan bukti kepuasan ribuan mahasiswa secara transparan di gudang bukti kami.
                  </p>

                  <a 
                    href={proofLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFD700] text-[#0A1931] px-12 py-6 rounded-2xl font-black text-lg md:text-xl transition-all transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,140,0,0.3)] active:scale-95 group shadow-xl"
                  >
                    Lihat Semua Bukti 
                    <ArrowRight className="group-hover:translate-x-3 transition-transform duration-500" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-smooth {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(0.5deg); }
        }
      `}</style>
    </section>
  );
};

export default MoreProof;
