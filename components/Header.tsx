import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', href: '/#home', isRouter: false },
    { name: 'Layanan', href: '/#layanan', isRouter: false },
    { name: 'Jasa Web', href: '/jasa-website', isRouter: true },
    { name: 'Artikel', href: '/blog', isRouter: true },
    { name: 'Testimoni', href: '/#testimoni', isRouter: false },
    { name: 'FAQ', href: '/#faq', isRouter: false },
  ];

  const waLink = "https://wa.link/f9luhr";
  const logoUrl = "/asset/logo-lulusinkuy/logo-jasa-skripsi-tugas-website-lulusinkuy.png";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { offsetLeft, offsetWidth } = e.currentTarget;
    setPillStyle({ left: offsetLeft, width: offsetWidth, opacity: 1 });
  };

  const handleMouseLeave = () => setPillStyle((prev) => ({ ...prev, opacity: 0 }));

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A1931] border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="/#home" className="flex items-center gap-3 md:gap-5 group relative z-10">
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              <div className="absolute inset-0 bg-white rounded-full border-2 border-white transform transition-transform group-hover:scale-105"></div>
              <img src={logoUrl} alt="Logo" className="relative z-10 w-8 h-8 md:w-12 md:h-12 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-3xl font-black text-white tracking-tighter leading-none transition-colors group-hover:text-[#1E90FF]">
                LULUSIN <span className="text-white">KUY</span>
              </span>
              <span className="text-[8px] md:text-[10px] text-[#1E90FF] font-black tracking-[0.2em] mt-1 uppercase">Academic Partner</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center relative" ref={navRef}>
            <div className="absolute h-full bg-[#1E90FF]/10 rounded-xl transition-all duration-300 ease-out pointer-events-none" style={{ left: `${pillStyle.left}px`, width: `${pillStyle.width}px`, opacity: pillStyle.opacity }} />

            <div className="flex items-center space-x-0">
              {navLinks.map((link) => (
                link.isRouter ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative z-10 text-white hover:text-[#1E90FF] px-4 py-3 rounded-2xl text-lg font-black transition-all"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative z-10 text-white hover:text-[#1E90FF] px-4 py-3 rounded-2xl text-lg font-black transition-all"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>

            <a href={waLink} target="_blank" rel="noopener noreferrer" className="ml-6 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-2xl text-lg font-black transition-all transform hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(37,211,102,0.3)] flex items-center gap-2 border-2 border-white/20 relative z-10">
              <MessageCircle size={22} className="fill-current" /> Konsultasi
            </a>
          </nav>

          <button className="lg:hidden text-white p-3 bg-white/5 rounded-xl border border-white/20 relative z-10" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef} className={`lg:hidden fixed top-[80px] right-4 w-[280px] bg-[#112240]/95 backdrop-blur-2xl z-40 transition-all duration-300 origin-top-right border border-white/10 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] ${isMobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-4 pointer-events-none'}`}>
        <nav className="flex flex-col p-6 space-y-2">
          {navLinks.map((link) => (
            link.isRouter ? (
              <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-black hover:text-[#1E90FF] transition-all tracking-tight py-3 px-4 rounded-xl hover:bg-white/5">
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-black hover:text-[#1E90FF] transition-all tracking-tight py-3 px-4 rounded-xl hover:bg-white/5">
                {link.name}
              </a>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;