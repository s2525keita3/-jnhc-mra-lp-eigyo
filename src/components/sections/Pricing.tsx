import { CheckCircle, User, Users, Video, MessageSquare, FileText, RefreshCw, CreditCard, Building } from 'lucide-react';
import { pricingData } from '@/content/pricing';

const CONSULTATION_URL = "#contact";

const iconMap = { User, Users, Video, MessageSquare, FileText, RefreshCw };

export const Pricing = () => {
  const { planName, subtitle, price, payment, includes, deliverables, cta, notes } = pricingData;

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-baum-500 font-bold tracking-wider text-sm uppercase bg-bg-orange-light px-4 py-2 rounded-full">
            Pricing
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mt-6">
            料金・お申し込み
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-2xl shadow-card-hover border-4 border-baum-500 overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-baum-600 to-baum-500 p-8 md:p-10 text-white text-center">
            <p className="text-white/80 text-sm font-bold mb-2">{subtitle}</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{planName}</h3>
            <div className="flex items-end justify-center gap-1">
              <span className="text-5xl md:text-7xl font-bold tracking-tight">{price.display}</span>
              <span className="text-xl md:text-2xl font-bold mb-2">円</span>
            </div>
            <p className="text-white/80 text-sm mt-2">{price.tax}（{price.period}）</p>
          </div>

          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-baum-100">
            {/* Left: Includes */}
            <div className="p-8 md:p-10">
              <h4 className="font-bold text-text-primary mb-6 text-lg">含まれるもの</h4>
              <ul className="space-y-4">
                {includes.map((item, i) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap];
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-baum-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-baum-500" />
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">{item.title}</p>
                        <p className="text-text-tertiary text-sm">{item.detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Deliverables */}
              <div className="mt-8 pt-6 border-t border-baum-100">
                <h4 className="font-bold text-text-primary mb-4">📄 お渡しする成果物</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle className="w-4 h-4 text-baum-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Payment & CTA */}
            <div className="p-8 md:p-10 bg-bg-cream flex flex-col">
              {/* Payment Options */}
              <div className="mb-8">
                <h4 className="font-bold text-text-primary mb-4">お支払い方法</h4>
                <div className="space-y-3">
                  {payment.options.map((option, i) => (
                    <div 
                      key={i}
                      className={`p-4 rounded-xl border ${i === 0 ? 'border-baum-500 bg-white' : 'border-slate-200 bg-white'}`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-text-primary">{option.type}</span>
                        <span className="font-bold text-baum-500">{option.amount}</span>
                      </div>
                      {option.note && (
                        <p className="text-text-tertiary text-xs mt-1">{option.note}</p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-4 text-text-tertiary text-sm">
                  <span className="flex items-center gap-1">
                    <CreditCard className="w-4 h-4" />
                    カード
                  </span>
                  <span className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    銀行振込
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <a 
                  href={CONSULTATION_URL}
                  className="block w-full"
                >
                  <button className="w-full py-5 bg-gradient-to-r from-baum-500 to-baum-400 text-white font-bold text-lg rounded-xl shadow-lg shadow-baum-500/30 hover:shadow-xl hover:shadow-baum-500/40 transition-all duration-300 hover:scale-[1.02]">
                    {cta.main}
                  </button>
                </a>
                <p className="text-center text-text-tertiary text-sm mt-3">{cta.sub}</p>
              </div>

              {/* Notes */}
              <div className="mt-6 pt-6 border-t border-baum-200 space-y-1">
                {notes.map((note, i) => (
                  <p key={i} className="text-text-tertiary text-xs">{note}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
