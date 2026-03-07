import { CheckCircle } from 'lucide-react';
import { profileData } from '@/content/profile';

export const Profile = () => {
  const { instructors, teamMessage } = profileData;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-baum-500 font-bold tracking-wider text-sm uppercase bg-bg-orange-light px-4 py-2 rounded-full">
            Instructors
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mt-6 mb-4">
            {profileData.title}
          </h2>
          <p className="text-text-tertiary text-base md:text-lg max-w-2xl mx-auto">
            {profileData.subtitle}
          </p>
        </div>

        {/* Instructor Cards */}
        <div className="space-y-10 mb-12">
          {instructors.map((instructor, i) => (
            <div 
              key={instructor.id}
              className="bg-white rounded-2xl shadow-card border border-baum-100 overflow-hidden hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Photo */}
                <div className="relative md:w-2/5 flex-shrink-0">
                  <div className="h-72 md:h-full md:min-h-[400px] bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                    <img 
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: instructor.imagePosition || 'center 20%' }}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10"></div>
                  </div>
                  {/* Name overlay (mobile) */}
                  <div className="absolute bottom-0 left-0 w-full p-5 text-white md:hidden">
                    <p className="text-baum-400 text-sm font-bold mb-1">{instructor.role}</p>
                    <h3 className="text-2xl font-bold">
                      {instructor.name}
                      {instructor.nameEn && (
                        <span className="text-sm font-normal text-white/70 ml-2">{instructor.nameEn}</span>
                      )}
                    </h3>
                    {instructor.nickname && (
                      <p className="text-white/70 text-sm">通称: {instructor.nickname}</p>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  {/* Name (desktop) */}
                  <div className="hidden md:block mb-5">
                    <p className="text-baum-500 text-sm font-bold mb-1">{instructor.role}</p>
                    <h3 className="text-2xl font-bold text-text-primary">
                      {instructor.name}
                      {instructor.nameEn && (
                        <span className="text-base font-normal text-text-tertiary ml-2">{instructor.nameEn}</span>
                      )}
                    </h3>
                    {instructor.nickname && (
                      <p className="text-text-tertiary text-sm">通称: {instructor.nickname}</p>
                    )}
                  </div>

                  <p className="text-baum-500 font-bold text-sm sm:text-base md:text-lg mb-4 border-l-4 border-baum-500 pl-4">
                    {instructor.catchphrase}
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {instructor.description}
                  </p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-text-tertiary mb-3">専門領域</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.expertise.map((item, j) => (
                        <span 
                          key={j}
                          className="bg-baum-100 text-baum-600 text-xs font-medium px-3 py-1.5 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  {instructor.stats && instructor.stats.length > 0 && (
                    <div className={`grid gap-3 pt-6 border-t border-baum-100 ${
                      instructor.stats.length <= 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-4'
                    }`}>
                      {instructor.stats.map((stat, j) => (
                        <div key={j} className="text-center">
                          <div className="text-xl font-bold text-text-primary">
                            {stat.value}<span className="text-sm font-normal">{stat.unit}</span>
                          </div>
                          <div className="text-[10px] text-text-tertiary">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Message */}
        <div className="max-w-3xl mx-auto animate-fade-up">
          <div className="bg-gradient-to-r from-baum-500 to-baum-400 rounded-2xl p-8 md:p-10 text-white">
            <h3 className="text-xl font-bold mb-6 text-center">{teamMessage.title}</h3>
            <ul className="space-y-4">
              {teamMessage.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white/90 flex-shrink-0 mt-0.5" />
                  <span className="text-white/95">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
