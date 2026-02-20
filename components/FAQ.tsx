
import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { FAQS } from '../constants';
import ScrollReveal from './ScrollReveal';

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(FAQS.length > 0 ? FAQS[0].id : null);

  const filteredFaqs = FAQS.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-[#0A1931]">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal direction="up" once={false} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">FAQ</h2>
          <p className="text-white/60 mb-8">Punya pertanyaan seputar layanan kami? Cek jawabannya di sini.</p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:border-[#1E90FF] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <ScrollReveal key={faq.id} direction="up" once={false} stagger index={index}>
              <div
                className="bg-[#12263F] rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  <span className="font-semibold text-lg leading-tight">{faq.question}</span>
                  <ChevronDown
                    className={`text-[#1E90FF] transition-transform duration-300 flex-shrink-0 ml-4 ${openId === faq.id ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="px-8 pb-6 text-white/60 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-white/40">
              Tidak ada hasil ditemukan untuk "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
