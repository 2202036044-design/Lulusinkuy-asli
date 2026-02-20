import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { ArrowLeft, User, Calendar, Share2 } from 'lucide-react';

const BlogDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [article, setArticle] = useState<{ title: string; date: string; author: string; image: string; content: string } | null>(null);
    const [loading, setLoading] = useState(true);

    // Data cadangan metadata jika tidak ada di markdown
    const DEFAULT_META: Record<string, any> = {
        'artikel-pertama': {
            title: 'Tips Menulis Skripsi dalam 7 Hari',
            date: '20 Feb 2024',
            author: 'Admin',
            image: '/asset/gambarpreviewporto/jasa-website-tugas-skripsi-lulusinkuy-company-profile.webp'
        },
        'cara-lolos-turnitin': {
            title: 'Rahasia Lolos Turnitin di Bawah 20%',
            date: '18 Feb 2024',
            author: 'Tim Bimbingan',
            image: '/asset/gambarpreviewporto/jasa-website-tugas-skripsi-lulusinkuy-e-commerce.webp'
        },
        'metode-penelitian': {
            title: 'Memahami Metode Penelitian untuk Pemula',
            date: '15 Feb 2024',
            author: 'Dosen Tamu',
            image: '/asset/gambarpreviewporto/jasa-website-tugas-skripsi-lulusinkuy-dashboard-proffessional.webp'
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);

        // Fetch markdown dari folder public/posts/
        fetch(`/posts/${slug}.md`)
            .then(res => {
                if (!res.ok) throw new Error("Artikel tidak ditemukan");
                return res.text();
            })
            .then(text => {
                // Hapus frontmatter jika ada (--- ... ---) tanpa pakai gray-matter
                const content = text.replace(/^---[\s\S]*?---/m, '').trim();

                // Regex manual untuk cari judul (mencari baris pertama yang diawali #)
                const titleMatch = text.match(/^#\s+(.*)$/m);
                const meta = DEFAULT_META[slug || ''] || {};

                setArticle({
                    title: titleMatch ? titleMatch[1] : (meta.title || 'Judul Artikel'),
                    date: meta.date || 'Baru Saja',
                    author: meta.author || 'Admin Lulusin Kuy',
                    image: meta.image || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
                    content: content
                });
            })
            .catch(() => {
                setArticle(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0A1931] flex flex-col items-center justify-center text-white">
                <div className="relative w-20 h-20 mb-8">
                    <div className="absolute inset-0 border-4 border-[#1E90FF]/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-[#1E90FF] border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="text-white/40 font-black uppercase tracking-[0.2em] text-xs">Memuat Artikel...</p>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="min-h-screen bg-[#0A1931] flex items-center justify-center text-white p-4">
                <div className="max-w-md w-full text-center bg-[#12263F] p-12 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-sm">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 text-[#1E90FF]">
                        <ArrowLeft size={40} />
                    </div>
                    <h1 className="text-3xl font-black mb-4 uppercase tracking-tighter">Artikel Tidak Ditemukan</h1>
                    <p className="text-white/50 mb-10 text-lg">Maaf, artikel yang Anda cari tidak tersedia atau mungkin telah dihapus.</p>
                    <Link to="/blog" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1E90FF] to-[#007CF0] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg hover:shadow-[#1E90FF]/30">
                        <ArrowLeft size={18} /> Kembali ke Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-[#0A1931] text-white pt-40 pb-24 relative overflow-hidden selection:bg-[#1E90FF]/30">
            {/* Ambient Background Lights */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1E90FF]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
                <Link to="/blog" className="inline-flex items-center gap-3 text-white/40 hover:text-[#1E90FF] mb-12 transition-all font-black uppercase tracking-[0.2em] text-xs group">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#1E90FF]/10 transition-colors">
                        <ArrowLeft size={16} />
                    </div>
                    Kembali Ke Daftar Blog
                </Link>

                <header className="mb-16">
                    <div className="flex flex-wrap items-center gap-8 text-[11px] text-white/40 mb-10 uppercase tracking-[0.2em] font-black">
                        <span className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                            <Calendar size={14} className="text-[#1E90FF]" />
                            {article.date}
                        </span>
                        <span className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                            <User size={14} className="text-[#1E90FF]" />
                            Ditulis Oleh {article.author}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black mb-12 leading-[1.1] tracking-tighter uppercase italic">
                        {article.title}
                    </h1>

                    <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-[#12263F] relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/60 to-transparent z-10"></div>
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-[350px] md:h-[550px] object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                        />
                    </div>
                </header>

                <div className="prose prose-lg prose-invert mx-auto max-w-none 
                    prose-headings:font-black prose-headings:text-white prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter
                    prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-l-4 prose-h2:border-[#1E90FF] prose-h2:pl-8
                    prose-p:text-white/70 prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-lg
                    prose-strong:text-white prose-strong:font-black
                    prose-a:text-[#1E90FF] prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-2 font-black
                    prose-blockquote:border-none prose-blockquote:bg-gradient-to-r prose-blockquote:from-[#12263F] prose-blockquote:to-transparent prose-blockquote:px-12 prose-blockquote:py-10 prose-blockquote:rounded-3xl prose-blockquote:text-white/90 prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:font-black prose-blockquote:my-16 prose-blockquote:relative
                    prose-ul:space-y-4 prose-ul:my-10 prose-li:text-white/70
                    prose-img:rounded-[3rem] prose-img:shadow-2xl prose-img:border prose-img:border-white/10 prose-img:my-16
                ">
                    <Markdown>{article.content}</Markdown>
                </div>

                <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/30 hover:text-[#1E90FF] hover:bg-[#1E90FF]/10 transition-all cursor-pointer">
                            <Share2 size={20} />
                        </div>
                        <p className="text-white/30 text-xs font-black uppercase tracking-widest">Bagikan Artikel Ini</p>
                    </div>

                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
                        &copy; 2024 LULUSIN KUY ACADEMY
                    </p>
                </div>

                <div className="mt-32 p-1 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E90FF] via-[#007CF0] to-[#1E90FF] rounded-[4rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative p-12 md:p-20 bg-[#12263F] border border-white/10 rounded-[4rem] text-center overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#1E90FF]/10 blur-[100px] rounded-full"></div>

                        <h3 className="text-3xl md:text-5xl font-black mb-8 relative z-10 uppercase italic tracking-tighter leading-tight">
                            BUTUH BANTUAN <span className="text-[#1E90FF]">TUGAS AKHIR?</span>
                        </h3>
                        <p className="text-white/50 mb-12 max-w-2xl mx-auto relative z-10 text-lg font-medium leading-relaxed">
                            Jangan biarkan deadline merusak waktu istirahat Anda. Tim ahli kami siap mendampingi Anda hingga lulus dengan hasil terbaik.
                        </p>

                        <a
                            href="https://wa.link/f9luhr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-[0_20px_40px_rgba(37,211,102,0.2)] hover:shadow-[#25D366]/40 uppercase tracking-widest relative z-10"
                        >
                            Konsultasi Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogDetail;
