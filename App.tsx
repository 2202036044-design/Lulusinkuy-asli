import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';

import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import AISkripsi from './components/AISkripsi';
import FAQ from './components/FAQ';
import MoreProof from './components/MoreProof';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import ReviewModal from './components/ReviewModal';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import WebDevPage from './components/WebDevPage';
import { Mail, Phone, MapPin, Instagram, Music2, Facebook } from 'lucide-react';

// Ini komponen buat ngebungkus halaman Home
const Home = ({ onReviewClick }: { onReviewClick: () => void }) => (
  <>
    <Helmet>
      <title>Lulusin Kuy - Partner Akademik Terpercaya Mahasiswa Indonesia</title>
      <meta name="description" content="Lulusin Kuy adalah partner akademik terpercaya mahasiswa Indonesia sejak 2022. Kami menyediakan jasa pembuatan website, bantuan skripsi, dan layanan akademik lainnya." />
    </Helmet>
    <main>
      <Hero />
      <SocialMedia />
      <Services onReviewClick={onReviewClick} />
      <Testimonials />
      <MoreProof />
      <AISkripsi />
      <FAQ />
      <Contact />
    </main>
  </>
);


const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const logoUrl = "https://i.imgur.com/jTcFEUr.png";

  const contactInfo = {
    email: "lulusinkuy@gmail.com",
    phone: "0887 0835 7493",
    address: "Semarang, Indonesia",
    socials: {
      instagram: "https://www.instagram.com/lulusin_kuy?igsh=bHVrMmluMzlkeWZj",
      tiktok: "https://www.tiktok.com/@lulusin_kuy?_r=1&_t=ZS-93VHrNivyHX",
      facebook: "https://www.facebook.com/share/1DDV1HZdkH/"
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Nah, tag <Router> ini nih yang tadi dicariin sama si error merah!
    <Router>
      <div className="min-h-screen bg-[#0A1931] selection:bg-[#1E90FF] selection:text-white">
        <Header isScrolled={isScrolled} />

        <Routes>
          <Route path="/" element={<Home onReviewClick={() => setIsReviewModalOpen(true)} />} />
          <Route path="/jasa-website" element={<WebDevPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>

        <footer className="bg-[#050C1A] pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#1E90FF]/5 blur-[100px] pointer-events-none rounded-full"></div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative w-16 h-16 flex items-center justify-center mb-4">
                    <div className="absolute inset-0 bg-white rounded-full"></div>
                    <img src={logoUrl} alt="Logo Lulusin Kuy" className="relative z-10 w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-white font-black text-3xl tracking-tighter uppercase">
                    LULUSIN <span className="text-[#1E90FF]">KUY</span>
                  </h3>
                </div>
                <p className="text-white/50 text-base leading-relaxed max-w-xs mx-auto md:mx-0">
                  Merupakan partner akademik terpercaya mahasiswa Indonesia yang berdiri sejak tahun 2022.
                </p>
              </div>

              <div className="text-center md:text-left">
                <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Menu Cepat</h4>
                <ul className="space-y-4">
                  <li><a href="/#home" className="text-white/50 hover:text-[#1E90FF] transition-colors font-medium">Home</a></li>
                  <li><a href="/#layanan" className="text-white/50 hover:text-[#1E90FF] transition-colors font-medium">Layanan Kami</a></li>
                  <li><a href="/jasa-website" className="text-white/50 hover:text-[#1E90FF] transition-colors font-medium">Jasa Website</a></li>
                  <li><a href="/#ai-skripsi" className="text-white/50 hover:text-[#1E90FF] transition-colors font-medium">AI Skripsi</a></li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Hubungi Kami</h4>
                <ul className="space-y-5">
                  <li className="flex items-center justify-center md:justify-start gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#1E90FF] flex-shrink-0"><Phone size={18} /></div>
                    <span className="text-white/50 font-medium">{contactInfo.phone}</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#1E90FF] flex-shrink-0"><Mail size={18} /></div>
                    <span className="text-white/50 font-medium">{contactInfo.email}</span>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Ikuti Kami</h4>
                <div className="flex justify-center md:justify-start gap-4">
                  <a href={contactInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white hover:bg-[#E1306C] transition-all transform hover:-translate-y-1"><Instagram size={20} /></a>
                  <a href={contactInfo.socials.tiktok} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white hover:bg-black transition-all transform hover:-translate-y-1"><Music2 size={20} /></a>
                  <a href={contactInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white hover:bg-[#1877F2] transition-all transform hover:-translate-y-1"><Facebook size={20} /></a>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/5 text-center flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-white/30 text-sm font-medium">
                &copy; 2022 <span className="text-white font-bold">Lulusin Kuy</span>. Seluruh Hak Cipta Dilindungi.
              </p>
            </div>
          </div>
        </footer>

        <ReviewModal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)} />
      </div>
    </Router>
  );
};

export default App;