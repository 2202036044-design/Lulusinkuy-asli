
import React from 'react';
import { ICON_MAP, ADVANTAGES } from '../constants';
import { CheckCircle } from 'lucide-react';

const Advantages: React.FC = () => {
  return (
    <section id="keunggulan" className="py-24 bg-[#0A1931] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#1E90FF]/10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Keunggulan Kami</h2>
            <p className="text-white/60 text-lg mb-10">
              Kenapa harus memilih Lulusin Kuy? Kami berkomitmen memberikan hasil terbaik dengan proses yang transparan dan profesional.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ADVANTAGES.map((adv) => {
                const IconComponent = ICON_MAP[adv.icon] || CheckCircle;
                return (
                  <div key={adv.id} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#1E90FF]">
                      <IconComponent size={24} />
                    </div>
                    <span className="font-semibold text-lg">{adv.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop" 
              alt="Team working"
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1E90FF] rounded-3xl -z-0 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
