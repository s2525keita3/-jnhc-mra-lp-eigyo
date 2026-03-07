# デザイン定義書（他プロジェクト流用用）
## 本LPのデザインを他案件で再現するための指示書

> **目的**: 色・タイポグラフィ・コンポーネント・余白・アニメーションを定義し、別サービスでも同じビジュアル品質でLPを組めるようにする。

---

## 1. カラーパレット

### 1.1 メインカラー（ブランド・CTA用）

Tailwind の `theme.extend.colors` に以下を定義すること。

| 名前 | キー |  HEX   | 用途 |
|------|------|--------|------|
| 最薄 | baum-50  | #FFF8F0 | 背景・エリア区切り |
| 薄   | baum-100 | #FFF5EB | カード背景・バッジ背景 |
| 中薄 | baum-200 | #FFE6CC | ボーダー・区切り線 |
| 中   | baum-300 | #FFD6AD | ホバー・アクセント |
| やや濃 | baum-400 | #FFB570 | アイコン・補助 |
| **メイン** | **baum-500** | **#FF6B00** | **CTA・見出しアクセント・リンク** |
| ホバー | baum-600 | #E55A00 | ボタンホバー・アクティブ |
| 濃   | baum-700 | #CC5000 | 強調テキスト |
| やや暗 | baum-800 | #A33F00 | テキスト（濃い） |
| 最濃 | baum-900 | #6B2A00 | 影・最深部 |

```javascript
// Tailwind config 例
baum: {
  50: '#FFF8F0', 100: '#FFF5EB', 200: '#FFE6CC', 300: '#FFD6AD',
  400: '#FFB570', 500: '#FF6B00', 600: '#E55A00', 700: '#CC5000',
  800: '#A33F00', 900: '#6B2A00',
}
```

### 1.2 テキストカラー

| キー | HEX | 用途 |
|------|-----|------|
| text-primary   | #000000 | 見出し・本文メイン |
| text-secondary | #333333 | サブテキスト |
| text-tertiary  | #666666 | 補助・注釈 |
| text-light     | #999999 | 軽い注釈・ラベル |

### 1.3 背景カラー

| キー | HEX | 用途 |
|------|-----|------|
| bg-white       | #FFFFFF | 白背景 |
| bg-cream       | #FFF8F0 | クリーム背景（セクション） |
| bg-orange-light| #FFF5EB | 薄オレンジ背景（カード等） |

---

## 2. タイポグラフィ

### 2.1 フォント

- **日本語**: Noto Sans JP（Google Fonts）
- **フォールバック**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">
```

```javascript
fontFamily: {
  sans: ['"Noto Sans JP"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
}
```

### 2.2 サイズ・ウェイト

| 用途 | クラス例 | ウェイト |
|------|----------|----------|
| Hero タイトル | `text-4xl md:text-6xl` | font-bold または font-black |
| セクション見出し | `text-3xl md:text-5xl` | font-bold |
| サブ見出し | `text-2xl md:text-3xl` | font-bold |
| 本文 | `text-base md:text-lg` | font-normal |
| 小さいテキスト | `text-sm` / `text-xs` | font-normal / font-bold |

---

## 3. スペーシング・レイアウト

- **セクション縦余白**: `py-20 md:py-28`（上下 5rem / 7rem）
- **コンテナ最大幅**: `max-w-6xl`（72rem）、左右 `px-4`
- **カード・ブロック間**: `gap-6` または `gap-8`
- **角丸**: カード `rounded-2xl`（24px）、ボタン `rounded-[50px]`（ピル型）

---

## 4. シャドウ

```javascript
boxShadow: {
  'sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
  'md': '0 4px 24px rgba(0, 0, 0, 0.08)',
  'lg': '0 12px 40px rgba(0, 0, 0, 0.12)',
  'cta': '0 8px 24px rgba(255, 107, 0, 0.3)',
  'cta-hover': '0 12px 32px rgba(255, 107, 0, 0.4)',
  'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
  'card-hover': '0 12px 40px rgba(0, 0, 0, 0.12)',
}
```

- **CTAボタン**: 通常 `shadow-cta`、ホバー `shadow-cta-hover`
- **カード**: 通常 `shadow-card`、ホバー `shadow-card-hover`

---

## 5. コンポーネントスタイル指示

### 5.1 CTAボタン（メイン）

- **形状**: 角丸 50px（ピル型）、横長
- **背景**: オレンジ系グラデーション（#FF6B00 → #FF8533 程度）
- **テキスト**: 白、font-bold、矢印アイコン推奨
- **シャドウ**: `shadow-cta` → ホバー時 `shadow-cta-hover`
- **ホバー**: やや浮き上がる（`-translate-y-0.5`）、トランジション 300ms

```css
.gradient-cta {
  background: linear-gradient(135deg, #FF6B00 0%, #FF8533 100%);
}
```

### 5.2 カード（情報ブロック）

- **背景**: 白 または 薄いオレンジ（baum-50）
- **枠線**: `border border-baum-200`（任意）
- **角丸**: `rounded-2xl`（24px）
- **シャドウ**: `shadow-card`、ホバー時 `shadow-card-hover`
- **ホバー**: 浮き上がり `translateY(-8px)`、トランジション 0.3s

### 5.3 セクション背景の使い分け

- **白**: 本文・一覧・フォーム（読みやすさ優先）
- **グラデーション（オレンジ）**: Hero など訴求が強いエリア（1ブロックに留める）
- **クリーム / 薄オレンジ**: 区切り・ハイライト（連続するオレンジは避け、隣と差をつける）

### 5.4 バッジ・ラベル

- 小さいラベル: `bg-baum-100 text-baum-600`、`rounded-full`、`px-3 py-1`、`text-sm font-bold`
- セクション上部ラベル: `uppercase`、`tracking-wider` で統一

---

## 6. アニメーション

### 6.1 フェードアップ（セクション内要素）

```javascript
keyframes: {
  fadeUp: {
    '0%': { opacity: '0', transform: 'translateY(40px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
}
// 使用: animate-fade-up, 0.8s ease-out forwards
```

### 6.2 ホバーリフト（カード）

```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}
```

### 6.3 ストローク・グラデーション文字（任意）

```css
.gradient-text {
  background: linear-gradient(135deg, #FF6B00 0%, #FF8533 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 7. レスポンシブ

- **ブレークポイント**: Tailwind デフォルト（`sm:` 640px, `md:` 768px, `lg:` 1024px）
- **基本**: モバイルファースト。テキスト・余白は `md:` で大きくする（例: `text-2xl md:text-4xl`、`py-20 md:py-28`）。
- **グリッド**: カード一覧は `grid-cols-1 md:grid-cols-2` または `md:grid-cols-4` で可読性を確保。

---

## 8. その他ルール

- **選択色**: `selection:bg-baum-500 selection:text-white` でテキスト選択時はオレンジ＋白にすること。
- **スクロール**: `html { scroll-behavior: smooth; }` を指定すること。
- **スクロールバー**: 細め（8px）、トラック・サムを控えめなグレーにすると統一感が出る。

---

## 9. チェックリスト（他案件で流用時）

- [ ] Tailwind に baum / text / bg のカラーを拡張したか
- [ ] Noto Sans JP を読み込んでいるか
- [ ] CTA に gradient-cta と shadow-cta を適用したか
- [ ] カードに hover-lift と shadow-card を適用したか
- [ ] セクション余白を py-20 md:py-28 で統一したか
- [ ] 隣接セクションで背景色にメリハリをつけたか（白 / クリーム / オレンジの連続を避ける）

---

**ドキュメントバージョン**: 1.0  
**参照**: 本プロジェクト `index.html`（Tailwind config）, `docs/03_DESIGN_SYSTEM.md`
