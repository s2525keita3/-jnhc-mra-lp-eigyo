import { UserX, Shuffle, BookOpen, Clock, TrendingDown, HelpCircle } from 'lucide-react';
import { problemData } from '@/content/problem';

const iconMap = {
  UserX,
  Shuffle,
  BookOpen,
  Clock,
  TrendingDown,
  HelpCircle
};

export const Problem = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-[1.2rem] sm:text-xl md:text-4xl font-bold text-text-primary mb-4">
            {problemData.title}
          </h2>
          <p className="text-text-tertiary text-base md:text-lg max-w-2xl mx-auto">
            {problemData.subtitle}
          </p>
        </div>
        
        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problemData.problems.map((problem, i) => {
            const Icon = iconMap[problem.icon as keyof typeof iconMap];
            return (
              <div 
                key={i} 
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-baum-300 transition-all duration-300 hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {problem.title}
                </h3>
                <p className="text-text-tertiary text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Conclusion */}
        <div className="max-w-3xl mx-auto animate-fade-up">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              {problemData.conclusion.title}
            </h3>
            <p className="text-slate-300 leading-relaxed whitespace-pre-line">
              {problemData.conclusion.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
