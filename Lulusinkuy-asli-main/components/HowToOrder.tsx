
import React from 'react';
import { STEPS } from '../constants';

const HowToOrder: React.FC = () => {
  return (
    <section id="cara-order" className="py-24 bg-[#0A1931]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Cara Order</h2>
          <p className="text-white/60">Hanya dengan 4 langkah mudah untuk mendapatkan bantuan akademik terbaik.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#1E90FF]/30 to-transparent z-0"></div>

          {STEPS.map((step) => (
            <div key={step.id} className="relative z-10 text-center group">
              <div className="w-20 h-20 bg-[#12263F] border-4 border-[#0A1931] group-hover:border-[#1E90FF] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-xl group-hover:shadow-[#1E90FF]/20 group-hover:bg-[#1E90FF]">
                <span className="text-2xl font-bold text-[#1E90FF] group-hover:text-white transition-colors">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
