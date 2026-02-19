
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Music2 } from 'lucide-react';

const Contact: React.FC = () => {
  // Updated WhatsApp link: https://wa.link/f9luhr
  const waLink = "https://wa.link/f9luhr";

  return (
    <section id="kontak" className="py-24 bg-[#0A1931]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Hubungi Kami</h2>
            <p className="text-white/60 text-lg mb-12">
              Siap untuk lulus lebih cepat? Hubungi kami sekarang untuk mendapatkan bimbingan terbaik. Tim kami siap merespons pesanmu segera!
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#1E90FF]/10 rounded-xl flex items-center justify-center text-[#1E90FF] flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-white/60">lulusinkuy@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#1E90FF]/10 rounded-xl flex items-center justify-center text-[#1E90FF] flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">WhatsApp</h4>
                  <p className="text-white/60">0887 0835 7493</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#1E90FF]/10 rounded-xl flex items-center justify-center text-[#1E90FF] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Alamat</h4>
                  <p className="text-white/60">Semarang, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/lulusin_kuy?igsh=bHVrMmluMzlkeWZj" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#1E90FF] transition-all"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@lulusin_kuy?_r=1&_t=ZS-93VHrNivyHX" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#1E90FF] transition-all"
                title="TikTok"
              >
                <Music2 size={20} />
              </a>
              <a 
                href="https://www.facebook.com/share/1DDV1HZdkH/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#1E90FF] transition-all"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#12263F] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/60">Nama Lengkap</label>
                  <input type="text" className="w-full bg-[#0A1931] border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#1E90FF] transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/60">Email</label>
                  <input type="email" className="w-full bg-[#0A1931] border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#1E90FF] transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/60">Nomor Telepon</label>
                  <input type="tel" className="w-full bg-[#0A1931] border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#1E90FF] transition-all" placeholder="0812..." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/60">Subjek</label>
                  <select className="w-full bg-[#0A1931] border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#1E90FF] transition-all">
                    <option>Konsultasi Skripsi</option>
                    <option>Tugas Kuliah</option>
                    <option>Jurnal Ilmiah</option>
                    <option>Lainnya</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white/60">Pesan</label>
                <textarea rows={4} className="w-full bg-[#0A1931] border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#1E90FF] transition-all" placeholder="Jelaskan kebutuhanmu..."></textarea>
              </div>

              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1E90FF] hover:bg-[#1E90FF]/80 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-[#1E90FF]/20 transform hover:-translate-y-1 block text-center"
              >
                Kirim Pesan Sekarang via WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
