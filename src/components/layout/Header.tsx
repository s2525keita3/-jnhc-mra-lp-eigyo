import { useState, useEffect, useCallback } from 'react';

const CONSULTATION_URL = "#contact";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
        : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-sm md:text-base font-bold leading-tight text-text-primary">
          <span className="hidden md:inline">営業力強化 3ヶ月伴走プログラム</span>
          <span className="md:hidden">営業伴走プログラム</span>
        </div>
        
        <a
          href={CONSULTATION_URL}
          className="font-bold px-5 py-2.5 rounded-full transition-all duration-300 text-sm bg-baum-500 text-white hover:bg-baum-600"
        >
          <span className="hidden md:inline">無料個別相談を予約</span>
          <span className="md:hidden">無料相談</span>
        </a>
      </div>
    </header>
  );
};
