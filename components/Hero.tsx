import React from 'react';
import { Search, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const waLink = "https://wa.link/f9luhr";

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
          alt="Students studying"
          className="w-full h-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931] via-[#0A1931]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-[#0A1931]/60"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal direction="up" duration={0.8} once={false}>
          <div className="max-w-5xl">
            {/* Simple Badge */}
            <div className="inline-flex items-center px-6 py-2 bg-[#1E90FF]/20 text-[#1E90FF] rounded-full text-xs md:text-sm font-black mb-10 border border-[#1E90FF]/30">
              <div className="w-2 h-2 bg-[#1E90FF] rounded-full mr-3"></div>
              SOLUSI AKADEMIK MAHASISWA
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-10 text-white tracking-tighter">
              Selesaikan Skripsi & <br />
              Tugas Kuliah <br />
              <span className="text-[#FFD700] inline-block pb-2">
                Dengan Mudah
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-white/80 mb-14 max-w-2xl leading-relaxed font-medium">
              Bimbingan pengerjaan tugas akademik secara profesional, cepat, dan bergaransi. Kami hadir untuk membantu perjalanan akademikmu jadi lebih tenang dan sukses.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-24">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-6 rounded-3xl font-black transition-all transform hover:-translate-y-1 shadow-lg active:scale-95 text-xl"
              >
                <MessageCircle size={28} className="fill-current" />
                Konsultasi Gratis
              </a>
              <a
                href="#ai-skripsi"
                className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 border-2 border-white/20 text-white px-10 py-6 rounded-3xl font-black transition-all transform hover:-translate-y-1 active:scale-95 text-xl"
              >
                <Search size={28} />
                Coba AI Cari Judul
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-white/10 pt-14">
              <div className="group cursor-default">
                <p className="text-5xl lg:text-7xl font-black text-white group-hover:text-[#1E90FF] transition-colors mb-2 tracking-tighter">500+</p>
                <p className="text-white/50 text-xs md:text-sm uppercase tracking-[0.3em] font-black">Mahasiswa Terbantu</p>
              </div>
              <div className="group cursor-default">
                <p className="text-5xl lg:text-7xl font-black text-[#FFD700] mb-2 tracking-tighter">98%</p>
                <p className="text-white/50 text-xs md:text-sm uppercase tracking-[0.3em] font-black">Tingkat Kepuasan</p>
              </div>
              <div className="hidden md:block group cursor-default">
                <p className="text-5xl lg:text-7xl font-black text-white group-hover:text-[#1E90FF] transition-colors mb-2 tracking-tighter">24/7</p>
                <p className="text-white/50 text-xs md:text-sm uppercase tracking-[0.3em] font-black">Support</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
