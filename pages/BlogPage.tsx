import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

// Data manual untuk menghindari konflik environment (glob/buffer)
const POSTS = [
    {
        slug: 'artikel-pertama',
        title: 'Tips Menulis Skripsi dalam 7 Hari',
        date: '20 Feb 2024',
        author: 'Admin',
        image: '/asset/gambar-artikel-lulusinkuy/lulusinkuy-artikel-skripsi.png',
        excerpt: 'Menulis skripsi seringkali menjadi momok menakutkan. Simak strategi menyelesaikannya dengan cepat.'
    },
    {
        slug: 'cara-lolos-turnitin',
        title: 'Rahasia Lolos Turnitin di Bawah 20%',
        date: '18 Feb 2024',
        author: 'Tim Bimbingan',
        image: '/asset/gambar-artikel-lulusinkuy/lulusinkuy-artikel-turnitin.png',
        excerpt: 'Jangan panik jika skor plagiasi tinggi. Pelajari teknik parafrase yang efektif dan etis di sini.'
    },
    {
        slug: 'metode-penelitian',
        title: 'Memahami Metode Penelitian untuk Pemula',
        date: '15 Feb 2024',
        author: 'Dosen Tamu',
        image: '/asset/gambar-artikel-lulusinkuy/lulusinkuy-artikel-metode-penelitian.png',
        excerpt: 'Bingung memilih metode penelitian? Ketahui perbedaan mendasar dan mana yang cocok untuk judulmu.'
    }
];

const BlogPage: React.FC = () => {
    return (
        <section className="py-32 bg-[#0A1931] min-h-screen relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1E90FF]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#1E90FF] font-black tracking-[0.2em] uppercase text-xs mb-4 block">Artikel & Tips</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter uppercase relative inline-block">
                        LULUSIN <span className="text-[#1E90FF]">BLOG</span>
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1E90FF] to-transparent"></div>
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed mt-6">
                        Informasi terbaru seputar dunia akademik, tips skripsi, dan pengembangan diri untuk mahasiswa Indonesia.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {POSTS.map((post) => (
                        <ScrollReveal direction="up" key={post.slug} once={true}>
                            <Link to={`/blog/${post.slug}`} className="group h-full block">
                                <div className="bg-[#112240] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#1E90FF]/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                                    <div className="h-60 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col relative">
                                        <div className="flex items-center gap-4 text-[10px] text-[#1E90FF] mb-6 font-black uppercase tracking-widest">
                                            <span className="flex items-center gap-2">
                                                <Calendar size={12} className="opacity-50" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <User size={12} className="opacity-50" />
                                                {post.author}
                                            </span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black text-white mb-4 group-hover:text-[#1E90FF] transition-colors leading-tight tracking-tight uppercase">
                                            {post.title}
                                        </h3>
                                        <p className="text-white/50 text-sm mb-8 line-clamp-3 leading-relaxed flex-1 font-medium">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-3 text-[#1E90FF] text-[10px] font-black uppercase tracking-widest py-2 border-b-2 border-transparent group-hover:border-[#1E90FF] transition-all w-fit">
                                            Baca Selengkapnya <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
