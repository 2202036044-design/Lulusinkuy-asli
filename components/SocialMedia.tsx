import React from 'react';
import { Instagram, Facebook, Music2, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SocialMedia: React.FC = () => {
  const socials = [
    {
      name: 'TikTok',
      icon: <Music2 className="w-5 h-5 md:w-8 md:h-8" />,
      link: 'https://www.tiktok.com/@lulusin_kuy?_r=1&_t=ZS-93VHrNivyHX',
      color: 'from-[#00f2ea] via-[#ffffff] to-[#ff0050]',
      iconColor: 'text-white',
      bgClass: 'bg-black',
      glowColor: '#00f2ea',
      secondaryGlow: '#ff0050',
      handle: '@lulusin_kuy',
      brandColor: '#00f2ea'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5 md:w-8 md:h-8" />,
      link: 'https://www.instagram.com/lulusin_kuy?igsh=bHVrMmluMzlkeWZj',
      color: 'from-[#f09433] via-[#e6683c] to-[#bc1888]',
      iconColor: 'text-white',
      bgClass: 'bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]',
      glowColor: '#FD1D1D',
      secondaryGlow: '#833AB4',
      handle: '@lulusin_kuy',
      brandColor: '#FD1D1D'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5 md:w-8 md:h-8" />,
      link: 'https://www.facebook.com/share/1DDV1HZdkH/',
      color: 'from-[#1877F2] to-[#0C5DC7]',
      iconColor: 'text-white',
      bgClass: 'bg-[#1877F2]',
      glowColor: '#1877F2',
      secondaryGlow: '#1E90FF',
      handle: 'Lulusin Kuy',
      brandColor: '#1877F2'
    }
  ];

  return (
    <section id="social-media" className="py-24 bg-[#050C1A] relative overflow-hidden">
      {/* Static Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#1E90FF]/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#FF0050]/5 blur-[100px] rounded-full pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal direction="up" once={false} className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#1E90FF] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <span className="w-1.5 h-1.5 bg-[#1E90FF] rounded-full"></span>
            Social Ecosystem
          </div>

          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
            Connect <span className="text-[#1E90FF]">With Us</span>
          </h2>

          <p className="text-white/50 max-w-xl mx-auto text-sm md:text-lg font-medium leading-relaxed px-4">
            Update real-time dan tips eksklusif setiap hari.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-3 md:gap-10 max-w-6xl mx-auto">
          {socials.map((social, index) => (
            <ScrollReveal direction="up" key={social.name} once={false} stagger index={index} className="relative group/container">
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative overflow-hidden bg-white/[0.03] border border-white/5 rounded-2xl md:rounded-[2.5rem] p-4 md:p-10 transition-all duration-300 hover:border-white/10 flex flex-col items-center hover:-translate-y-2 shadow-xl"
              >
                <div className="relative mb-4 md:mb-8">
                  {/* Static Glow */}
                  <div
                    className="absolute inset-[-10px] md:inset-[-20px] rounded-full blur-[20px] md:blur-[40px] opacity-20 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${social.glowColor} 0%, transparent 70%)` }}
                  ></div>

                  {/* Core Icon Circle */}
                  <div className={`relative w-12 h-12 md:w-28 md:h-28 rounded-full ${social.bgClass} flex items-center justify-center ${social.iconColor} shadow-lg border-2 border-white/10 group-hover:scale-105 transition-transform duration-300 z-10`}>
                    <div className="relative z-10">
                      {social.icon}
                    </div>
                  </div>
                </div>

                <div className="text-center relative z-20 w-full">
                  <h3 className="text-[10px] md:text-2xl font-black text-white mb-1 uppercase tracking-tighter truncate">
                    {social.name}
                  </h3>
                  <p className="text-[#1E90FF] font-black mb-4 md:mb-8 tracking-widest text-[8px] md:text-[10px] uppercase opacity-70 truncate">
                    {social.handle}
                  </p>

                  <div className="inline-flex items-center justify-center gap-2 text-white/50 group-hover:text-white transition-all font-black text-[8px] md:text-[10px] uppercase tracking-widest bg-white/5 px-4 md:px-8 py-2 md:py-4 rounded-xl border border-white/5 w-full">
                    <span className="hidden sm:inline">Visit</span> <ExternalLink size={14} />
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
