import { useMemo } from 'react';
import { heroData } from '@/content/hero';

const CONSULTATION_URL = "#contact";

export const Hero = () => {
  const titleLines = useMemo(() => heroData.title.split('\n'), []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-baum-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-baum-400 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-baum-50 border border-baum-200 text-baum-600 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full">
            <span className="w-2 h-2 bg-baum-500 rounded-full animate-pulse"></span>
            {heroData.badge}
          </div>
          
          {/* Main Title - スマホで「営業センスに頼らない。」を1行に収めるためモバイルはやや小さく */}
          <h1 className="text-[1.35rem] sm:text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight">
            {titleLines.map((line, i) => (
              <span 
                key={i} 
                className={i === 0 
                  ? 'text-text-primary block' 
                  : 'block mt-2 text-baum-500'
                }
              >
                {line}
              </span>
            ))}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed whitespace-pre-line max-w-2xl mx-auto">
            {heroData.subtitle}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 max-w-2xl mx-auto">
            {heroData.stats.map((stat, i) => (
              <div 
                key={i} 
                className={`rounded-xl p-4 md:p-5 text-center transition-all duration-300 ${
                  stat.highlight 
                    ? 'bg-gradient-to-br from-baum-500 to-baum-600 text-white shadow-lg shadow-baum-500/30 transform scale-105' 
                    : 'bg-slate-50 border border-slate-200'
                }`}
              >
                <div className={`text-2xl md:text-3xl font-bold ${stat.highlight ? 'text-white' : 'text-text-primary'}`}>
                  {stat.value}<span className="text-lg md:text-xl ml-0.5">{stat.unit}</span>
                </div>
                <div className={`text-xs md:text-sm mt-1 ${stat.highlight ? 'text-white/90' : 'text-text-tertiary'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6 md:pt-8">
            <a 
              href={CONSULTATION_URL}
              className="group inline-flex flex-col items-center"
            >
              <button className="relative px-10 py-5 bg-gradient-to-r from-baum-500 to-baum-400 text-white font-bold text-lg md:text-xl rounded-full shadow-lg shadow-baum-500/30 hover:shadow-xl hover:shadow-baum-500/40 transition-all duration-300 hover:scale-105">
                <span className="relative z-10">{heroData.cta.main}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-baum-400 to-baum-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <span className="text-text-tertiary text-sm mt-3">{heroData.cta.sub}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
