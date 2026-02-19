
import React, { useEffect, useRef, useState } from 'react';
import { Search, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const waLink = "https://wa.link/f9luhr";
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
          alt="Students studying"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931] via-[#0A1931]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-[#0A1931]/40"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} transition-all duration-1000`}>
            {/* Glowing Badge */}
            <div 
              className="inline-flex items-center px-6 py-2.5 bg-[#1E90FF]/20 text-[#1E90FF] rounded-full text-xs md:text-sm font-bold mb-10 border border-[#1E90FF]/40 shadow-[0_0_20px_rgba(30,144,255,0.4)] animate-pulse"
              style={{ animationDuration: '3s' }}
            >
              <div className="w-2.5 h-2.5 bg-[#1E90FF] rounded-full mr-3 shadow-[0_0_10px_#1E90FF]"></div>
              SOLUSI AKADEMIK MAHASISWA
            </div>
            
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-10 text-white tracking-tighter"
              style={{ animationDelay: '0.2s' }}
            >
              Selesaikan Skripsi & <br /> 
              Tugas Kuliah <br />
              <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB800] to-[#FF8C00] bg-clip-text text-transparent inline-block pb-2">
                Dengan Mudah
              </span>
            </h1>
            
            <p 
              className="text-lg md:text-2xl text-white/80 mb-14 max-w-2xl leading-relaxed font-medium"
              style={{ animationDelay: '0.3s' }}
            >
              Bimbingan pengerjaan tugas akademik secara profesional, cepat, dan bergaransi. Kami hadir untuk membantu perjalanan akademikmu jadi lebih tenang dan sukses.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-6 mb-24"
              style={{ animationDelay: '0.4s' }}
            >
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-6 rounded-3xl font-black transition-all transform hover:-translate-y-2 shadow-[0_20px_40px_rgba(37,211,102,0.3)] active:scale-95 text-xl"
              >
                <MessageCircle size={28} className="fill-current" />
                Konsultasi Gratis
              </a>
              <a 
                href="#ai-skripsi" 
                className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 border-2 border-white/20 text-white px-10 py-6 rounded-3xl font-black transition-all transform hover:-translate-y-2 backdrop-blur-md active:scale-95 text-xl"
              >
                <Search size={28} />
                Coba AI Cari Judul
              </a>
            </div>

            <div 
              className="grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-white/10 pt-14"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="group cursor-default">
                <p className="text-5xl lg:text-7xl font-black text-white group-hover:text-[#1E90FF] transition-colors mb-2 tracking-tighter">500+</p>
                <p className="text-white/50 text-xs md:text-sm uppercase tracking-[0.3em] font-black">Mahasiswa Terbantu</p>
              </div>
              <div className="group cursor-default">
                <p className="text-5xl lg:text-7xl font-black text-[#FFD700] group-hover:scale-105 transition-transform origin-left mb-2 tracking-tighter">98%</p>
                <p className="text-white/50 text-xs md:text-sm uppercase tracking-[0.3em] font-black">Tingkat Kepuasan</p>
              </div>
              <div className="hidden md:block group cursor-default">
                <p className="text-5xl lg:text-7xl font-black text-white group-hover:text-[#1E90FF] transition-colors mb-2 tracking-tighter">24/7</p>
                <p className="text-white/50 text-xs md:text-sm uppercase tracking-[0.3em] font-black">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
