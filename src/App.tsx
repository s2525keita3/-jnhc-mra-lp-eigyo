import { lazy, Suspense } from 'react';

// Layout Components
import { ProgressBar, Header, Footer, StickyCta } from '@/components/layout';
import { LegalDocuments } from '@/components/legal';

// Sections (Lazy loaded for performance)
const Hero = lazy(() => import('@/components/sections/Hero').then(m => ({ default: m.Hero })));
const Future = lazy(() => import('@/components/sections/Future').then(m => ({ default: m.Future })));
const Problem = lazy(() => import('@/components/sections/Problem').then(m => ({ default: m.Problem })));
const Why = lazy(() => import('@/components/sections/Why').then(m => ({ default: m.Why })));
const Program = lazy(() => import('@/components/sections/Program').then(m => ({ default: m.Program })));
const Roi = lazy(() => import('@/components/sections/Roi').then(m => ({ default: m.Roi })));
const Profile = lazy(() => import('@/components/sections/Profile').then(m => ({ default: m.Profile })));
const Pricing = lazy(() => import('@/components/sections/Pricing').then(m => ({ default: m.Pricing })));
const Faq = lazy(() => import('@/components/sections/FAQ').then(m => ({ default: m.Faq })));
const Closing = lazy(() => import('@/components/sections/Closing').then(m => ({ default: m.Closing })));
const Contact = lazy(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })));

function App() {
  return (
    <div className="min-h-screen bg-white text-text-primary font-sans selection:bg-baum-500 selection:text-white">
      <ProgressBar />
      <Header />
      
      <main>
        {/* 1. Hero - ファーストビュー */}
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <Hero />
        </Suspense>

        {/* 2. Future - 達成の未来・ゴール */}
        <Suspense fallback={<div className="h-96" />}>
          <Future />
        </Suspense>

        {/* 3. Problem - 課題提起 */}
        <Suspense fallback={<div className="h-96" />}>
          <Problem />
        </Suspense>

        {/* 4. Why - 設計型 vs 場当たり型 */}
        <Suspense fallback={<div className="h-96" />}>
          <Why />
        </Suspense>

        {/* 5. Program - 3ヶ月のプログラム内容 */}
        <Suspense fallback={<div className="h-96" />}>
          <Program />
        </Suspense>

        {/* 6. ROI - 投資対効果 */}
        <Suspense fallback={<div className="h-96" />}>
          <Roi />
        </Suspense>

        {/* 7. Profile - 講師紹介 */}
        <Suspense fallback={<div className="h-96" />}>
          <Profile />
        </Suspense>

        {/* 8. Pricing - 料金・申し込み */}
        <Suspense fallback={<div className="h-96" />}>
          <Pricing />
        </Suspense>

        {/* 9. FAQ - よくある質問 */}
        <Suspense fallback={<div className="h-96" />}>
          <Faq />
        </Suspense>

        {/* 10. Closing - 最終CTA */}
        <Suspense fallback={<div className="h-96" />}>
          <Closing />
        </Suspense>

        {/* 11. Contact - お問い合わせフォーム */}
        <Suspense fallback={<div className="h-96" />}>
          <Contact />
        </Suspense>
      </main>

      <LegalDocuments />
      <Footer />
      <StickyCta />
    </div>
  );
}

export default App;
