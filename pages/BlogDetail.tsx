import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, User, Calendar, Share2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

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
            image: '/asset/gambar-artikel-lulusinkuy/lulusinkuy-artikel-skripsi.png'
        },
        'cara-lolos-turnitin': {
            title: 'Rahasia Lolos Turnitin di Bawah 20%',
            date: '18 Feb 2024',
            author: 'Tim Bimbingan',
            image: '/asset/gambar-artikel-lulusinkuy/lulusinkuy-artikel-turnitin.png'
        },
        'metode-penelitian': {
            title: 'Memahami Metode Penelitian untuk Pemula',
            date: '15 Feb 2024',
            author: 'Dosen Tamu',
            image: '/asset/gambar-artikel-lulusinkuy/lulusinkuy-artikel-metode-penelitian.png'
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
                <div className="w-12 h-12 border-4 border-[#1E90FF] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-white/40 font-black mt-4 uppercase tracking-[0.2em] text-[10px]">Memuat Artikel...</p>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="min-h-screen bg-[#0A1931] flex items-center justify-center text-white p-4">
                <div className="max-w-md w-full text-center bg-[#112240] p-10 rounded-[2.5rem] border border-white/5">
                    <h1 className="text-2xl font-black mb-4 uppercase tracking-tighter">Artikel Tidak Ditemukan</h1>
                    <Link to="/blog" className="inline-block mt-6 bg-[#1E90FF] text-white px-8 py-3 rounded-xl font-black uppercase text-xs">
                        Kembali ke Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{`${article.title} | Lulusin Kuy`}</title>
                <meta name="description" content={article.content.slice(0, 160).replace(/[#*`]/g, '')} />
            </Helmet>

            <article className="min-h-screen bg-[#0A1931] text-white pt-32 pb-20 relative overflow-hidden">
                {/* Ambient Background Lights */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1E90FF]/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
                    <ScrollReveal direction="up">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-[#1E90FF] mb-10 transition-all font-black uppercase tracking-widest text-[10px]">
                            <ArrowLeft size={14} /> Kembali Ke Daftar Blog
                        </Link>

                        <header className="mb-12">
                            <div className="flex gap-4 text-[10px] text-white/40 mb-6 uppercase tracking-widest font-black">
                                <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                                    <Calendar size={12} className="text-[#1E90FF]" />
                                    {article.date}
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                                    <User size={12} className="text-[#1E90FF]" />
                                    {article.author}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">
                                {article.title}
                            </h1>

                            <div className="rounded-[2rem] overflow-hidden border border-white/5 bg-[#112240] mb-12">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-[300px] md:h-[500px] object-cover"
                                />
                            </div>
                        </header>

                        <div className="prose prose-invert max-w-none 
                            prose-headings:font-black prose-headings:text-white prose-headings:uppercase prose-headings:tracking-tighter
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                            prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base md:prose-p:text-lg
                            prose-strong:text-white prose-strong:font-black
                            prose-a:text-[#1E90FF] prose-a:font-black
                            prose-blockquote:border-l-4 prose-blockquote:border-[#1E90FF] prose-blockquote:bg-white/5 prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:rounded-r-2xl
                            prose-ul:my-6 prose-li:text-white/70
                            prose-img:rounded-2xl
                        ">
                            <Markdown>{article.content}</Markdown>
                        </div>

                        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4 text-white/30 text-[10px] font-black uppercase tracking-widest">
                                <span className="flex items-center gap-2"><Share2 size={16} /> BAGIKAN:</span>
                                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                                <a href="#" className="hover:text-white transition-colors">TikTok</a>
                                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                            </div>

                            <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">
                                &copy; 2024 LULUSIN KUY ACADEMY
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </article>
        </>
    );
};

export default BlogDetail;
