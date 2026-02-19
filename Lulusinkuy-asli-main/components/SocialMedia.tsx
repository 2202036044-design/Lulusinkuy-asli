
import React, { useEffect, useState } from 'react';
import { Instagram, Facebook, Music2, ExternalLink } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      brandColor: '#00f2ea',
      delay: '0s'
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
      brandColor: '#FD1D1D',
      delay: '0.5s'
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
      brandColor: '#1877F2',
      delay: '1s'
    }
  ];

  return (
    <section id="social-media" className="py-12 md:py-24 bg-[#050C1A] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#1E90FF]/10 blur-[100px] rounded-full animate-blob pointer-events-none"
          style={{ transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#FF0050]/5 blur-[120px] rounded-full animate-blob animation-delay-2000 pointer-events-none"
          style={{ transform: `translate(${mousePos.x * -0.05}px, ${mousePos.y * -0.05}px)` }}
        ></div>
      </div>

      <div className="container mx-auto px-3 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#1E90FF] text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-xl backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-[#1E90FF] rounded-full animate-ping"></span>
            Social Ecosystem
          </div>
          
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-3 uppercase leading-none">
            Connect <span className="text-[#1E90FF]">With Us</span>
          </h2>
          
          <p className="text-white/50 max-w-xl mx-auto text-xs md:text-lg font-medium leading-relaxed px-4">
            Update real-time dan tips eksklusif setiap hari.
          </p>
        </div>

        {/* Social Cards Grid - Fixed to 3 columns on mobile */}
        <div className="grid grid-cols-3 gap-2 md:gap-10 max-w-6xl mx-auto">
          {socials.map((social) => (
            <div key={social.name} className="relative group/container" style={{ animation: `float 6s ease-in-out infinite`, animationDelay: social.delay }}>
              
              {/* BACK-GLOW */}
              <div 
                className="absolute inset-0 blur-[30px] md:blur-[60px] opacity-10 group-hover/container:opacity-40 transition-opacity duration-700 pointer-events-none rounded-full"
                style={{ backgroundColor: social.glowColor, transform: 'scale(0.8)' }}
              ></div>

              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-[2.5rem] p-3 md:p-10 transition-all duration-500 group-hover/container:border-white/20 group-hover/container:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] flex flex-col items-center group-hover/container:-translate-y-2 md:group-hover/container:-translate-y-4"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-100 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Icon Point */}
                <div className="relative mb-3 md:mb-8">
                  {/* Glow rings */}
                  <div 
                    className="absolute inset-[-15px] md:inset-[-35px] rounded-full blur-[20px] md:blur-[40px] opacity-30 group-hover:opacity-100 transition-all duration-700 animate-pulse-slow pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${social.glowColor} 0%, transparent 70%)` }}
                  ></div>
                  
                  {/* Rotating Border Glow */}
                  <div 
                    className="absolute inset-[-2px] md:inset-[-4px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin-slow blur-[1px] md:blur-[2px] pointer-events-none"
                    style={{ background: `conic-gradient(from 0deg, transparent, ${social.glowColor}, ${social.secondaryGlow}, transparent)` }}
                  ></div>

                  {/* Core Icon Circle */}
                  <div className={`relative w-12 h-12 md:w-28 md:h-28 rounded-full ${social.bgClass} flex items-center justify-center ${social.iconColor} shadow-lg border-[2px] md:border-[3px] border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10 overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="relative z-10 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                      {social.icon}
                    </div>
                  </div>
                </div>

                {/* Text Info */}
                <div className="text-center relative z-20 w-full">
                  <h3 className="text-[10px] md:text-3xl font-black text-white mb-0.5 md:mb-1 uppercase tracking-tighter truncate">
                    {social.name}
                  </h3>
                  <p className="text-[#1E90FF] font-black mb-2 md:mb-6 tracking-[0.1em] md:tracking-[0.3em] text-[7px] md:text-[10px] uppercase opacity-70 group-hover:opacity-100 transition-opacity truncate">
                    {social.handle}
                  </p>
                  
                  <div className="hidden md:block w-full h-px bg-white/10 mb-6 group-hover:bg-white/20 transition-all scale-x-50 group-hover:scale-x-90"></div>

                  <div 
                    className="inline-flex items-center justify-center gap-1 md:gap-2 text-white/50 group-hover:text-white transition-all font-black text-[7px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.3em] bg-white/5 px-2 md:px-6 py-1.5 md:py-3 rounded-lg md:rounded-xl border border-white/10 group-hover:border-transparent group-hover:shadow-lg relative overflow-hidden w-full"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: social.brandColor }}></div>
                    <span className="relative z-10 flex items-center gap-1">
                      <span className="hidden sm:inline">Visit</span> <ExternalLink className="w-2 h-2 md:w-3.5 md:h-3.5" />
                    </span>
                  </div>
                </div>

                <div className={`absolute -bottom-10 -right-10 md:-bottom-16 md:-right-16 w-20 h-20 md:w-40 md:h-40 blur-[40px] md:blur-[80px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-br ${social.color}`}></div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(25px, -35px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        .animate-blob {
          animation: blob 15s infinite alternate ease-in-out;
        }
        .animate-spin-slow {
          animation: spin-slow 7s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default SocialMedia;
