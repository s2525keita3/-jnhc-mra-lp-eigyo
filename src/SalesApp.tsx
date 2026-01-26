import { lazy, Suspense } from 'react';

// Layout Components
import { ProgressBar, SalesHeader, Footer, SalesStickyCta } from '@/components/layout';
import { SalesLegalDocuments } from '@/components/legal';

// Sections (Lazy loaded)
const SalesHero = lazy(() => import('@/components/sections/SalesHero').then(m => ({ default: m.SalesHero })));
const SalesProblem = lazy(() => import('@/components/sections/SalesProblem').then(m => ({ default: m.SalesProblem })));
const SalesWhy = lazy(() => import('@/components/sections/SalesWhy').then(m => ({ default: m.SalesWhy })));
const SalesProgram = lazy(() => import('@/components/sections/SalesProgram').then(m => ({ default: m.SalesProgram })));
const SalesRoi = lazy(() => import('@/components/sections/SalesRoi').then(m => ({ default: m.SalesRoi })));
const SalesProfile = lazy(() => import('@/components/sections/SalesProfile').then(m => ({ default: m.SalesProfile })));
const SalesPricing = lazy(() => import('@/components/sections/SalesPricing').then(m => ({ default: m.SalesPricing })));
const SalesFaq = lazy(() => import('@/components/sections/SalesFaq').then(m => ({ default: m.SalesFaq })));
const SalesClosing = lazy(() => import('@/components/sections/SalesClosing').then(m => ({ default: m.SalesClosing })));

function SalesApp() {
  return (
    <div className="min-h-screen bg-white text-text-primary font-sans selection:bg-baum-500 selection:text-white">
      <ProgressBar />
      <SalesHeader />
      
      <main>
        {/* 1. Hero - ファーストビュー */}
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <SalesHero />
        </Suspense>

        {/* 2. Problem - 課題提起 */}
        <Suspense fallback={<div className="h-96" />}>
          <SalesProblem />
        </Suspense>

        {/* 3. Why - 農耕型 vs 狩猟型 */}
        <Suspense fallback={<div className="h-96" />}>
          <SalesWhy />
        </Suspense>

        {/* 4. Program - 3ヶ月のプログラム内容 */}
        <Suspense fallback={<div className="h-96" />}>
          <SalesProgram />
        </Suspense>

        {/* 5. ROI - 投資対効果 */}
        <Suspense fallback={<div className="h-96" />}>
          <SalesRoi />
        </Suspense>

        {/* 6. Profile - 講師紹介 */}
        <Suspense fallback={<div className="h-96" />}>
          <SalesProfile />
        </Suspense>

        {/* 7. Pricing - 料金・申し込み */}
        <Suspense fallback={<div className="h-96" />}>
          <SalesPricing />
        </Suspense>

        {/* 8. FAQ - よくある質問 */}
        <Suspense fallback={<div className="h-96" />}>
          <SalesFaq />
        </Suspense>

        {/* 9. Closing - 最終CTA */}
        <Suspense fallback={<div className="h-96" />}>
          <SalesClosing />
        </Suspense>
      </main>

      <SalesLegalDocuments />
      <Footer />
      <SalesStickyCta />
    </div>
  );
}

export default SalesApp;
