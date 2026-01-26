import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '@/content/faq';

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-flex items-center gap-2 text-baum-500 font-bold tracking-wider text-sm uppercase bg-bg-orange-light px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary">
            繧医￥縺ゅｋ雉ｪ蝠・          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item, i) => (
            <div 
              key={i}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 md:p-6 flex items-start justify-between gap-4 text-left hover:bg-slate-50 transition-colors duration-200"
              >
                <div className="flex items-start gap-3">
                  <span className="text-baum-500 font-bold text-sm mt-0.5">Q.</span>
                  <span className="font-medium text-text-primary">{item.question}</span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-text-tertiary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <div className="flex items-start gap-3 bg-bg-cream rounded-lg p-4">
                    <span className="text-baum-500 font-bold text-sm mt-0.5">A.</span>
                    <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center animate-fade-up">
          <p className="text-text-tertiary text-sm">
            縺昴・莉悶・縺碑ｳｪ蝠上・縲∫┌譁吝句挨逶ｸ隲・〒縺頑ｰ苓ｻｽ縺ｫ縺願◇縺阪￥縺縺輔＞縲・          </p>
        </div>
      </div>
    </section>
  );
};