import { useState, useEffect, useCallback } from 'react';
import { MessageCircle } from 'lucide-react';

const CONSULTATION_URL = "#contact";

export const StickyCta = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    // Show after scrolling past the hero section (approximately)
    setIsVisible(window.scrollY > 600);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-gradient-to-r from-baum-600 to-baum-500 shadow-lg shadow-baum-500/30">
        <div className="max-w-4xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-4">
          <div className="text-white hidden md:block">
            <p className="font-bold">営業力強化 3ヶ月伴走プログラム</p>
            <p className="text-white/80 text-sm">30万円（税別）</p>
          </div>
          <div className="text-white md:hidden">
            <p className="font-bold text-sm">3ヶ月伴走プログラム</p>
          </div>
          
          <a
            href={CONSULTATION_URL}
            className="flex items-center gap-2 bg-white text-baum-600 font-bold px-6 py-3 rounded-full hover:bg-baum-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden md:inline">無料個別相談を予約する</span>
            <span className="md:hidden">無料相談</span>
          </a>
        </div>
      </div>
    </div>
  );
};
