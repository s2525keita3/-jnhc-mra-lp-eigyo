import { Target, RefreshCw, TrendingUp, CheckCircle } from 'lucide-react';
import { closingData } from '@/content/closing';

const CONSULTATION_URL = "#consultation";

const iconMap = { Target, RefreshCw, TrendingUp };

export const Closing = () => {
  const { headline, message, benefits, cta, finalNote } = closingData;

  return (
    <section id="consultation" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-baum-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-baum-400 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-text-primary">
            {headline}
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed whitespace-pre-line max-w-2xl mx-auto">
            {message}
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div 
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-card animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-baum-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-baum-500" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-text-primary">{benefit.title}</h3>
                <p className="text-text-tertiary text-sm">{benefit.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up">
          <a 
            href={CONSULTATION_URL}
            className="inline-block"
          >
            <button className="relative px-12 py-6 bg-gradient-to-r from-baum-500 to-baum-400 text-white font-bold text-xl rounded-full shadow-lg shadow-baum-500/30 hover:shadow-xl hover:shadow-baum-500/40 transition-all duration-300 hover:scale-105 group">
              <span className="relative z-10">{cta.main}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-baum-400 to-baum-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </a>
          <p className="text-text-tertiary text-sm mt-4">{cta.sub}</p>
        </div>

        {/* Final Note */}
        <div className="mt-16 max-w-2xl mx-auto animate-fade-up">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-card">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-baum-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2 text-text-primary">{finalNote.title}</h4>
                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {finalNote.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
