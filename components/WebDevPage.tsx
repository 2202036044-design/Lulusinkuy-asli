import React from 'react';
import { Monitor, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevPage: React.FC = () => {
    const portfolios = [
        {
            id: 1,
            title: 'Web Company Profile',
            desc: 'Desain elegan untuk perusahaan dan instansi.',
            img: '/asset/gambarpreviewporto/jasa-website-tugas-skripsi-lulusinkuy-company-profile.webp',
            link: '/lulusinkuy-company-profile/index.html'//
        },
        {
            id: 2,
            title: 'Toko Online (e-commerce) Professional',
            desc: 'E-commerce responsif siap jualan.',
            img: '/asset/gambarpreviewporto/jasa-website-tugas-skripsi-lulusinkuy-e-commerce.webp',
            link: '/lulusinkuy-e-commerce/index.html'//
        },
        {
            id: 3,
            title: 'Web Dashboard Professional',
            desc: 'Optimasi pencatatan dan tracking data.',
            img: '/asset/gambarpreviewporto/jasa-website-tugas-skripsi-lulusinkuy-dashboard-proffessional.webp',
            link: '/lulusinkuy-dashboard/index.html'//
        }
    ];

    return (
        <section className="py-24 bg-[#0A1931] min-h-screen relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E90FF]/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-[#1E90FF]/10 text-[#1E90FF] px-4 py-1 rounded-full text-sm font-bold mb-4">
                        <Monitor size={16} />
                        Layanan Baru
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter uppercase">
                        Jasa Pembuatan <span className="text-[#1E90FF]">Website</span>
                    </h1>
                    <p className="text-white/60 text-lg">
                        Hadirkan bisnismu ke dunia digital. Kami siap membuatkan website estetik, cepat, dan responsif sesuai kebutuhanmu.
                    </p>
                </div>

                <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white border-b border-white/10 pb-4">Hasil Proyek Kami</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolios.map((item) => (
                        <Link
                            key={item.id}
                            to={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                        >
                            <div className="bg-[#12263F] rounded-[2rem] overflow-hidden border border-white/5 group-hover:border-[#1E90FF]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col">
                                <div className="aspect-video overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1E90FF] transition-colors">{item.title}</h3>
                                    <p className="text-white/50 text-sm mb-6 line-clamp-2 md:line-clamp-none flex-1">{item.desc}</p>
                                    <div
                                        className="flex items-center gap-2 text-[#1E90FF] text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors"
                                    >
                                        Lihat Detail <ExternalLink size={16} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebDevPage;