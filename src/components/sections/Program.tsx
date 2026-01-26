import { MessageCircle, Target, Cpu, Compass, User, Users, Video, MessageSquare, CheckCircle } from 'lucide-react';
import { programData } from '@/content/program';

const featureIcons = { MessageCircle, Target, Cpu, Compass };
const scheduleIcons = { User, Users, Video, MessageSquare };

export const Program = () => {
  const { overview, phases, schedule } = programData;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-baum-500 font-bold tracking-wider text-sm uppercase bg-bg-orange-light px-4 py-2 rounded-full">
            3-Month Program
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mt-6 mb-4">
            {programData.title}
          </h2>
          <p className="text-text-tertiary text-base md:text-lg max-w-2xl mx-auto">
            {programData.subtitle}
          </p>
        </div>

        {/* Overview Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {overview.features.map((feature, i) => {
            const Icon = featureIcons[feature.icon as keyof typeof featureIcons];
            return (
              <div 
                key={i}
                className="bg-slate-50 rounded-xl p-5 text-center hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-baum-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-baum-500" />
                </div>
                <h4 className="font-bold text-text-primary text-sm mb-1">{feature.title}</h4>
                <p className="text-text-tertiary text-xs">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* 3-Month Timeline */}
        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-text-primary text-center mb-10">
            3ヶ月のプログラム内容
          </h3>
          
          <div className="space-y-6">
            {phases.map((phase, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl shadow-card border border-slate-200 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className={`p-6 md:p-8 bg-gradient-to-r ${
                  i === 0 ? 'from-baum-600 to-baum-500' :
                  i === 1 ? 'from-baum-500 to-baum-400' :
                  'from-baum-400 to-baum-300'
                } text-white`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
                          {phase.month}ヶ月目
                        </span>
                        {phase.subtitle && (
                          <span className="bg-white text-baum-500 px-3 py-1 rounded-full text-xs font-bold">
                            {phase.subtitle}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold">{phase.title}</h4>
                    </div>
                    <p className="text-white/90 text-sm md:text-base md:text-right max-w-md">
                      {phase.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Tasks */}
                    <div>
                      <h5 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-baum-500" />
                        主な内容
                      </h5>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, j) => (
                          <li key={j} className="flex items-start gap-2 text-text-secondary text-sm">
                            <span className="text-baum-500 mt-1">•</span>
                            {task}
                          </li>
                        ))}
                      </ul>
                      
                      {phase.optional && (
                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <p className="text-xs text-text-tertiary mb-2">※ 必要に応じて</p>
                          <ul className="space-y-1">
                            {phase.optional.map((item, j) => (
                              <li key={j} className="text-text-tertiary text-xs flex items-start gap-2">
                                <span>•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {phase.note && (
                        <p className="mt-4 text-xs text-text-tertiary bg-slate-50 p-3 rounded-lg">
                          ※ {phase.note}
                        </p>
                      )}
                    </div>
                    
                    {/* Deliverables */}
                    <div>
                      <h5 className="font-bold text-text-primary mb-4">📄 成果物</h5>
                      <div className="bg-bg-orange-light rounded-xl p-4">
                        <ul className="space-y-2">
                          {phase.deliverables.map((item, j) => (
                            <li key={j} className="flex items-center gap-2 text-text-secondary text-sm">
                              <CheckCircle className="w-4 h-4 text-baum-500 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-text-primary text-center mb-8">
              {schedule.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {schedule.items.map((item, i) => {
                const Icon = scheduleIcons[item.icon as keyof typeof scheduleIcons];
                return (
                  <div key={i} className="bg-white rounded-xl p-5 flex items-start gap-4 border border-slate-200">
                    <div className="w-12 h-12 bg-baum-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-baum-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-text-primary">{item.title}</h4>
                        <span className="text-baum-500 text-xs font-bold bg-baum-100 px-2 py-0.5 rounded">
                          {item.frequency}
                        </span>
                      </div>
                      <p className="text-text-tertiary text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-text-tertiary text-sm mt-8 animate-fade-up">
          {programData.note}
        </p>
      </div>
    </section>
  );
};
