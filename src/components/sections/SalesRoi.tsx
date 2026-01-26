import { TrendingUp, Calculator, CheckCircle } from 'lucide-react';
import { salesRoiData } from '@/content/sales-roi';

export const SalesRoi = () => {
  const { calculation, comparison, breakdown, message } = salesRoiData;

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-flex items-center gap-2 text-baum-500 font-bold tracking-wider text-sm uppercase bg-bg-orange-light px-4 py-2 rounded-full mb-4">
            <Calculator className="w-4 h-4" />
            ROI Analysis
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">
            {salesRoiData.title}
          </h2>
          <p className="text-text-tertiary text-base md:text-lg max-w-2xl mx-auto">
            {salesRoiData.subtitle}
          </p>
        </div>

        {/* ROI Calculation */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-up">
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 md:p-8 text-white">
              <h3 className="text-xl font-bold mb-2">{calculation.title}</h3>
              <p className="text-slate-300 text-sm">投資額: {calculation.investment.display}</p>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="space-y-4">
                {calculation.returns.map((item, i) => (
                  <div 
                    key={i}
                    className={`rounded-xl p-5 ${i === 1 ? 'bg-baum-50 border-2 border-baum-500' : 'bg-slate-50'}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-text-primary">{item.scenario}</h4>
                        <p className="text-text-tertiary text-sm mt-1">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-text-tertiary">年間売上</p>
                        <p className="text-2xl font-bold text-baum-500">+{(item.annual / 10000).toLocaleString()}万円</p>
                        <p className="text-sm text-text-tertiary">
                          ROI: <span className="font-bold text-baum-600">約{item.roi}倍</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-5 bg-gradient-to-r from-baum-500 to-baum-400 rounded-xl text-white text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-lg">{calculation.conclusion}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-up">
          <h3 className="text-xl font-bold text-text-primary text-center mb-8">
            {comparison.title}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-card overflow-hidden">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-bold text-text-primary">サービス</th>
                  <th className="text-center p-4 font-bold text-text-primary">価格</th>
                  <th className="text-center p-4 font-bold text-text-primary">期間</th>
                  <th className="text-center p-4 font-bold text-text-primary">総額</th>
                  <th className="text-left p-4 font-bold text-text-primary">備考</th>
                </tr>
              </thead>
              <tbody>
                {comparison.items.map((item, i) => (
                  <tr 
                    key={i}
                    className={`border-t border-slate-100 ${item.highlight ? 'bg-baum-50' : ''}`}
                  >
                    <td className={`p-4 font-medium ${item.highlight ? 'text-baum-600' : 'text-text-primary'}`}>
                      {item.highlight && <span className="text-baum-500 mr-1">★</span>}
                      {item.label}
                    </td>
                    <td className="p-4 text-center text-text-secondary">{item.price}</td>
                    <td className="p-4 text-center text-text-secondary">{item.period}</td>
                    <td className={`p-4 text-center font-bold ${item.highlight ? 'text-baum-500' : 'text-text-primary'}`}>
                      {item.total}
                    </td>
                    <td className="p-4 text-text-tertiary text-sm">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Daily Breakdown */}
        <div className="max-w-2xl mx-auto mb-16 animate-fade-up">
          <div className="bg-white rounded-2xl shadow-card p-8 text-center border-2 border-baum-200">
            <h3 className="text-lg font-bold text-text-primary mb-4">{breakdown.title}</h3>
            <div className="text-5xl md:text-6xl font-bold text-baum-500 mb-2">
              約{breakdown.daily.toLocaleString()}<span className="text-2xl">円/日</span>
            </div>
            <p className="text-text-secondary mb-4">{breakdown.description}</p>
            <p className="text-text-tertiary text-sm">{breakdown.comparison}</p>
          </div>
        </div>

        {/* Message */}
        <div className="max-w-3xl mx-auto animate-fade-up">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-baum-400" />
              {message.title}
            </h3>
            <p className="text-slate-300 leading-relaxed whitespace-pre-line">
              {message.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
