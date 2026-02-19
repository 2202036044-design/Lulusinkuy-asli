
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonyItem {
  name: string;
  university: string;
  text: string;
}

const TESTIMONY_DATA: TestimonyItem[] = [
  { name: "Fai* Bas**", university: "UIN Syarif Hidayatullah Jakarta", text: "Revisi proposal tesis saya jadi lancar banget, pembimbing langsung acc Bab 1 sampai 3 tanpa banyak koreksi." },
  { name: "Cla Wij***", university: "Universitas Indonesia - UI", text: "Analisis studi kasus hukumnya mendalam, referensinya pakai jurnal internasional bereputasi semua." },
  { name: "Rik Put*", university: "Universitas Andalas - Unand Padang", text: "Bantu banget buat mahasiswa rantau yang lagi hectic, tugas sosiologi saya selesai tepat waktu dengan hasil memuaskan." },
  { name: "May Sar", university: "Universitas Airlangga - Unair Surabaya", text: "Olah data statistik kesehatan masyarakatnya valid, interpretasinya juga mudah dipahami buat pemula." },
  { name: "Bay San***", university: "Universitas Brawijaya - UB Malang", text: "Laporan praktikum pertanian saya hasilnya memuaskan, formatnya rapi sesuai modul laboratorium." },
  { name: "Vin Ama**", university: "Universitas Negeri Padang - UNP", text: "Media pembelajaran yang dibuatkan kreatif banget, dosen penguji suka karena interaktif." },
  { name: "Had Kus**", university: "ITS Surabaya", text: "Perhitungan teknis di tugas struktur beton saya akurat, lampirannya juga lengkap banget." },
  { name: "Nur Hid****", university: "UIN Walisongo Semarang", text: "Translate kitab kuningnya presisi, bahasa Indonesianya enak dibaca dan mudah dimengerti konteksnya." },
  { name: "Tio Pra**", university: "Universitas Negeri Jakarta - UNJ", text: "RPP dan modul ajar yang dipesan sesuai banget sama kurikulum merdeka terbaru, sangat membantu saat PPL." },
  { name: "Dia Saf***", university: "UPN Veteran Jawa Timur", text: "Artikel opini saya dimuat di majalah kampus berkat bantuan riset dan editing dari kakak." },
  { name: "Rez Pah***", university: "Universitas Trisakti Jakarta", text: "Makalah ekonomi makro pembahasannya komprehensif, data-datanya update sesuai tahun berjalan." },
  { name: "Sis Dew*", university: "Universitas Diponegoro - Undip", text: "Review jurnalnya kritis, sangat membantu saya menyusun tinjauan pustaka yang kuat untuk skripsi." },
  { name: "Kev Lim", university: "Binus University", text: "Codingan programnya jalan lancar tanpa bug, penjelasannya di komentar kode jelas banget." },
  { name: "Ayu Les**", university: "Universitas Negeri Malang - UM", text: "Tugas esai sastra saya dapat apresiasi dari dosen, pemilihan katanya bagus and alurnya runtut." },
  { name: "Bud Set****", university: "Universitas Mercu Buana Jakarta", text: "Desain poster kampanye sosial tugas saya estetik dan penyampaian pesannya dapet banget." },
  { name: "Ilh Sap****", university: "UIN Mahmud Yunus Batusangkar", text: "Makalah fiqih muamalah saya jadi referensi teman sekelas karena isinya padat dan dalilnya lengkap." },
  { name: "Rin Har***", university: "Universitas Jember - UNEJ", text: "PowerPoint tugas kelompok kami jadi yang paling menarik di kelas, visualnya nggak mbosenin." },
  { name: "Zak Mub***", university: "UIN Walisongo Semarang", text: "Bimbingan revisi skripsinya sabar banget, masukan-masukannya solutif dan bikin saya paham materi." },
  { name: "Ald Pra***", university: "SMA Negeri 8 Jakarta", text: "Tugas rangkuman sejarahnya lengkap banget, ngebantu aku belajar buat persiapan UTBK juga." },
  { name: "Lit Wul*****", university: "Universitas Negeri Semarang - UNNES", text: "Transkrip wawancara untuk penelitian kualitatif saya rapi, verbatimnya pas and pengerjaannya kilat." }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = TESTIMONY_DATA.length;
  const visibleSlides = isMobile ? 1 : 3;
  const maxIndex = totalItems - 1;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!isPaused) {
      autoSlideRef.current = setInterval(handleNext, 4500);
    }
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [handleNext, isPaused]);

  return (
    <section id="testimoni" className="py-24 bg-[#0A1931] overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E90FF]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Testimoni</h2>
          <div className="w-24 h-1.5 bg-[#1E90FF] mx-auto rounded-full"></div>
        </div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Content */}
          <div className="overflow-visible py-8">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.3333)}%)`,
              }}
            >
              {TESTIMONY_DATA.map((item, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 px-3 transition-opacity duration-500"
                  style={{ 
                    width: isMobile ? '100%' : '33.3333%',
                    opacity: isMobile ? (currentIndex === index ? 1 : 0.3) : 1
                  }}
                >
                  <div className={`h-full bg-[#112240]/60 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col relative group/card hover:bg-[#112240] hover:border-[#1E90FF]/30 transition-all duration-300 shadow-xl ${isMobile ? 'mx-auto max-w-[320px] sm:max-w-md' : ''}`}>
                    {/* Floating Quote Icon */}
                    <div className="absolute top-6 right-8 text-[#1E90FF]/10 group-hover/card:text-[#1E90FF]/20 transition-colors pointer-events-none">
                      <Quote size={isMobile ? 60 : 80} fill="currentColor" stroke="none" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-10">
                        <p className="text-lg md:text-2xl text-white leading-relaxed italic font-medium">
                          "{item.text}"
                        </p>
                      </div>

                      <div className="mt-auto pt-8 border-t border-white/5">
                        <h4 className="text-xl md:text-2xl font-bold text-white group-hover/card:text-[#1E90FF] transition-colors mb-1">
                          {item.name}
                        </h4>
                        <p className="text-[#1E90FF] text-sm md:text-base font-bold uppercase tracking-wider">
                          {item.university}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:-left-12 z-20">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0A1931]/90 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#1E90FF] transition-all transform hover:scale-110 active:scale-95 shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-12 z-20">
            <button 
              onClick={handleNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0A1931]/90 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#1E90FF] transition-all transform hover:scale-110 active:scale-95 shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center flex-wrap gap-2 mt-12 px-4">
          {TESTIMONY_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 transition-all rounded-full ${currentIndex === idx ? 'w-8 bg-[#1E90FF]' : 'w-2 bg-white/20'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        #testimoni {
          user-select: none;
        }
        @media (max-width: 1023px) {
          #testimoni .flex-shrink-0 {
            transition: opacity 0.3s ease;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
