# 要件定義書（他プロジェクト流用用）
## 本LPの構成・要件を他案件で使うための指示書

> **目的**: このランディングページのセクション構成・コンテンツ設計・技術要件を定義し、別サービス・別業種のLPでも同じ「型」で再現できるようにする。

---

## 1. 適用範囲

- **対象**: 有料会員募集・サービス申込・資料請求など、コンバージョンを目的とした1ページ型LP
- **前提**: React + TypeScript + Tailwind CSS（または同等のコンポーネント＋ユーティリティCSS）
- **流用時**: 業種・商品名・文言を差し替え、デザイン定義書に従って見た目を統一する

---

## 2. セクション構成（必須順序）

以下の順序でセクションを配置すること。CV最大化のための「黄金ルート」として検証済み。

| # | セクション名 | 役割 | 必須 |
|---|--------------|------|------|
| 0 | ProgressBar | スクロール進捗表示（離脱抑制） | 推奨 |
| 1 | Header | 固定ヘッダー（常にCTA表示） | 必須 |
| 2 | Hero | ファーストビュー（価値提案・メインCTA） | 必須 |
| 3 | Future / Goal | プログラム後の「あるべき姿」Before/After | 必須 |
| 4 | Problem | 課題提起（Before/After・コスト感） | 必須 |
| 5 | Why / 根拠 | なぜこの方法か（設計型 vs 場当たり型など） | 推奨 |
| 6 | Program / 提供内容 | 具体的なプログラム・コンテンツ内容 | 必須 |
| 7 | ROI | 投資対効果・他社比較・元が取れる根拠 | 推奨 |
| 8 | Profile | 講師・提供者紹介（信頼・権威） | 必須 |
| 9 | Pricing | 料金・特典・申し込みCTA | 必須 |
| 10 | FAQ | よくある質問（懸念解消） | 必須 |
| 11 | Closing | 最終CTA・背中押しメッセージ | 必須 |
| 12 | Contact | 問い合わせフォーム（任意） | 任意 |
| - | LegalDocuments | 利用規約・プライバシー・特商法 | 必須 |
| - | Footer | フッター・リンク | 必須 |
| - | StickyCta | スクロール中も表示する固定CTA | 推奨 |

**論理フロー**: 認知（Hero）→ 共感（Problem）→ 理解（Why, Program, ROI）→ 信頼（Profile）→ 意思決定（Pricing）→ 懸念解消（FAQ）→ 行動（Closing）

---

## 3. コンテンツデータ設計（データ分離の原則）

- **原則**: 文言・数値・リンクはすべて「コンテンツ用データファイル」に集約し、コンポーネントからは参照のみ行う。
- **配置**: `src/content/` 以下にセクション別ファイルを置く（例: `hero.ts`, `problem.ts`, `pricing.ts`）。

### 3.1 Hero

```typescript
{
  badge: string;              // ラベル（例:「3ヶ月伴走型プログラム」）
  title: string;              // メインコピー（改行 \n 可）
  subtitle: string;            // サブコピー
  cta: { main: string; sub?: string; };
  stats?: Array<{ value: string; unit: string; label: string; highlight?: boolean; }>;
}
```

### 3.2 Future / Goal

```typescript
{
  title: string;
  subtitle: string;
  futures: Array<{
    icon: string;             // アイコン識別子
    keyword: string;
    before: string;
    after: string;
  }>;
  message?: { title: string; description: string; };
}
```

### 3.3 Problem

```typescript
{
  title: string;
  subtitle: string;
  before: { label: string; items: string[]; costCalculation?: {...}; };
  after: { label: string; items: string[]; costSummary?: {...}; };
}
```

### 3.4 Program

```typescript
{
  title: string;
  subtitle: string;
  items: Array<{
    title: string;
    description: string;
    points?: string[];
    icon?: string;
  }>;
}
```

### 3.5 Profile

```typescript
{
  title: string;
  subtitle: string;
  instructors: Array<{
    id: string;
    name: string;
    nameEn?: string;
    role: string;
    image: string;            // 画像URL（/ から）
    imagePosition?: string;   // object-position
    catchphrase?: string;
    description: string;
    expertise: string[];
    stats?: Array<{ value: string; unit: string; label: string; }>;
  }>;
}
```

### 3.6 Pricing

```typescript
{
  title: string;
  subtitle?: string;
  price: { amount: number; unit: string; note?: string; };
  cta: { text: string; subtext?: string; href?: string; };
  benefits: string[];
  guarantee?: string;
}
```

### 3.7 FAQ

```typescript
{
  title: string;
  items: Array<{ question: string; answer: string; }>;
}
```

### 3.8 Closing

```typescript
{
  title: string;
  description?: string;
  cta: { text: string; subtext?: string; href?: string; };
}
```

---

## 4. 技術要件

| 項目 | 要件 |
|------|------|
| フレームワーク | React 18+（推奨: 19） |
| 言語 | TypeScript |
| スタイル | Tailwind CSS（デザイン定義書のテーマを拡張） |
| ビルド | Vite 推奨（`npm run build` で静的出力） |
| ルーティング | 単一ページ（SPA 1ページ） |
| 画像 | `public/` に配置し、パスは `/filename.ext` |
| 環境変数 | CTAリンクなどは `VITE_*` で注入 |
| パスエイリアス | `@/` → `src/` を設定 |

---

## 5. 非機能要件

- **パフォーマンス**: セクションコンポーネントは lazy load 可能にする。
- **アクセシビリティ**: 見出し階層（h1→h2→h3）、ボタン・リンクのフォーカスを維持する。
- **SEO**: 1ページで完結するため、`title`・`meta description` を適切に設定する。
- **CV計測**: 必要に応じて CTA クリック・スクロール深度の計測ポイントを仕込む。

---

## 6. チェックリスト（他案件で流用時）

- [ ] セクション順序を本定義書に合わせたか
- [ ] 全文言・数値をコンテンツデータに分離したか
- [ ] Hero / Pricing / Closing に CTA を配置したか
- [ ] Header と StickyCta で同一（または同等）の CTA を表示しているか
- [ ] FAQ で価格・返金・解約に関する質問を含めたか
- [ ] 利用規約・プライバシーポリシー・特商法表記を用意したか
- [ ] デザイン定義書に従い、色・フォント・余白を統一したか

---

**ドキュメントバージョン**: 1.0  
**参照**: 本プロジェクト `docs/00_PROJECT_OVERVIEW.md`, `docs/04_DATA_SCHEMA.md`
