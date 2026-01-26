import { Target, Users, TrendingUp, FileText, ArrowRight } from 'lucide-react';
import { futureData } from '@/content/future';

const iconMap = { Target, Users, TrendingUp, FileText };

export const Future = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-baum-500 to-baum-600 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block bg-white/20 text-white font-bold tracking-wider text-sm uppercase px-4 py-2 rounded-full mb-4">
            Your Goal
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {futureData.title}
          </h2>
          <p className="text-white/80 text-lg">
            {futureData.subtitle}
          </p>
        </div>

        {/* Future Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {futureData.futures.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-white text-baum-600 text-sm font-bold px-3 py-1 rounded-full">
                    {item.keyword}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Before */}
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-16 text-xs font-bold text-white/60 uppercase tracking-wider pt-1">
                      Before
                    </span>
                    <p className="text-white/70 text-sm line-through decoration-white/30">
                      {item.before}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-3 pl-16">
                    <ArrowRight className="w-4 h-4 text-white/50" />
                  </div>

                  {/* After */}
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-16 text-xs font-bold text-white uppercase tracking-wider pt-1">
                      After
                    </span>
                    <p className="text-white font-medium">
                      {item.after}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Message */}
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <div className="bg-white rounded-2xl p-8 md:p-10 text-text-primary shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-baum-600">
              {futureData.message.title}
            </h3>
            <p className="text-text-secondary leading-relaxed whitespace-pre-line">
              {futureData.message.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
