import { CheckCircle, XCircle, Sprout, Target } from 'lucide-react';
import { salesWhyData } from '@/content/sales-why';

export const SalesWhy = () => {
  const { comparison, whyFarming } = salesWhyData;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-flex items-center gap-2 text-baum-500 font-bold tracking-wider text-sm uppercase bg-bg-orange-light px-4 py-2 rounded-full mb-4">
            <Sprout className="w-4 h-4" />
            Why Design?
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">
            {salesWhyData.title}
          </h2>
          <p className="text-text-tertiary text-base md:text-lg max-w-2xl mx-auto">
            {salesWhyData.subtitle}
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {/* Hunting Type */}
          <div className="bg-white rounded-2xl shadow-card border-2 border-slate-200 overflow-hidden animate-fade-up">
            <div className="bg-slate-100 p-6 text-center">
              <span className="text-4xl mb-2 block">{comparison.hunting.emoji}</span>
              <h3 className="text-xl font-bold text-text-primary">{comparison.hunting.label}</h3>
              <p className="text-text-tertiary text-sm mt-1">{comparison.hunting.description}</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {comparison.hunting.characteristics.map((item, i) => (
                  <li key={i} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                    <span className="text-text-tertiary text-sm">{item.label}</span>
                    <span className={`text-sm font-medium ${item.negative ? 'text-red-500' : 'text-text-secondary'}`}>
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-center text-red-500 font-bold flex items-center justify-center gap-2">
                  <XCircle className="w-5 h-5" />
                  {comparison.hunting.verdict}
                </p>
              </div>
            </div>
          </div>

          {/* Farming Type */}
          <div className="bg-white rounded-2xl shadow-card-hover border-2 border-baum-500 overflow-hidden animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-baum-500 p-6 text-center text-white">
              <span className="text-4xl mb-2 block">{comparison.farming.emoji}</span>
              <h3 className="text-xl font-bold">{comparison.farming.label}</h3>
              <p className="text-white/80 text-sm mt-1">{comparison.farming.description}</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {comparison.farming.characteristics.map((item, i) => (
                  <li key={i} className="flex justify-between items-center py-2 border-b border-baum-100 last:border-0">
                    <span className="text-text-tertiary text-sm">{item.label}</span>
                    <span className={`text-sm font-medium ${item.positive ? 'text-baum-500' : 'text-text-secondary'}`}>
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-baum-100">
                <p className="text-center text-baum-500 font-bold flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {comparison.farming.verdict}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Farming is Best */}
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="bg-white rounded-2xl shadow-card p-8 md:p-10 border border-baum-100">
            <h3 className="text-xl md:text-2xl font-bold text-text-primary text-center mb-8">
              {whyFarming.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {whyFarming.reasons.map((reason, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-bg-orange-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-7 h-7 text-baum-500" />
                  </div>
                  <h4 className="font-bold text-text-primary mb-2">{reason.title}</h4>
                  <p className="text-text-tertiary text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center mt-12 animate-fade-up">
          <div className="inline-block bg-gradient-to-r from-baum-500 to-baum-400 rounded-xl p-1">
            <div className="bg-white rounded-lg px-8 py-4">
              <p className="text-lg font-bold text-text-primary">
                {salesWhyData.conclusion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
