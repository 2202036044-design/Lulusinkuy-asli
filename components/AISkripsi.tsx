import React, { useState } from 'react';
import { Search, Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { generateThesisTitles } from '../services/geminiService';
import ScrollReveal from './ScrollReveal';

const AISkripsi: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [titles, setTitles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setIsLoading(true);
    const result = await generateThesisTitles(topic);
    setTitles(result);
    setIsLoading(false);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="ai-skripsi" className="py-24 bg-[#050C1A]">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal direction="right" once={false}>
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#12263F] to-[#0A1931] p-8 md:p-12 rounded-[2rem] border border-[#1E90FF]/20 shadow-2xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#1E90FF]/10 text-[#1E90FF] px-4 py-1 rounded-full text-sm font-bold mb-4">
                <Sparkles size={16} />
                AI Powered
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Cari Ide Judul Skripsi</h2>
              <p className="text-white/60">Masukkan topik atau bidang yang kamu minati, dan biarkan AI kami memberikan inspirasi judul terbaik secara instan.</p>
            </div>

            <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                <input
                  type="text"
                  placeholder="Contoh: Digital Marketing, Psikologi Pendidikan, IoT Pertanian..."
                  className="w-full bg-[#0A1931] border border-white/10 rounded-xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-[#1E90FF] transition-all"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <button
                disabled={isLoading}
                className="bg-[#1E90FF] hover:bg-[#1E90FF]/80 disabled:bg-[#1E90FF]/50 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 min-w-[200px]"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                {isLoading ? 'Menganalisis...' : 'Generate Judul'}
              </button>
            </form>

            {titles.length > 0 && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-4">
                  <h3 className="text-lg font-semibold text-white/80">Rekomendasi Judul AI:</h3>
                  <span className="text-xs text-white/30">Klik ikon salin untuk menyalin teks</span>
                </div>
                {titles.map((title, idx) => (
                  <div key={idx} className="bg-white/5 p-5 rounded-xl border border-white/5 hover:border-[#1E90FF]/30 transition-all hover:bg-white/10 group flex items-center justify-between gap-4">
                    <span className="text-white group-hover:text-[#1E90FF] transition-colors flex-1">{title}</span>
                    <button
                      onClick={() => copyToClipboard(title, idx)}
                      className="p-2 bg-white/5 rounded-lg hover:bg-[#1E90FF] transition-all text-white/40 hover:text-white"
                      title="Salin Judul"
                    >
                      {copiedIndex === idx ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AISkripsi;
