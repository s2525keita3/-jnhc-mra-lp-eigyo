# プロジェクト完全ドキュメント
## 生成AI向け包括的な情報セット

> **作成チーム**: LP構築・業務効率 世界一チーム（20名の専門家による分析）  
> **目的**: 生成AIがこのプロジェクトを完全に理解し、開発を継続できるための包括的なドキュメント

---

## 🧭 専門家向けマスターインデックス

**どこに何があるか一覧で確認したい場合** → [00_INDEX_EXPERT.md](./00_INDEX_EXPERT.md)  
（フォルダ構成・目的別ショートカット・strategy / proposals の位置を一望できます）

---

## 📐 他プロジェクト流用用 指示書

**同じデザイン・構成を別LPで使う場合**（要件・デザインの型を揃えたい場合）:

- **[要件定義書（指示書）](./REQUIREMENTS_SPECIFICATION.md)** … セクション構成・コンテンツデータ設計・技術要件・チェックリスト
- **[デザイン定義書（指示書）](./DESIGN_SPECIFICATION.md)** … カラー・タイポ・コンポーネント・余白・アニメーション

---

## 📚 ドキュメント一覧

### 00. [プロジェクト概要・要件定義書](./00_PROJECT_OVERVIEW.md)
- プロジェクト基本情報
- ビジネス目的とゴール
- セクション構成（CV最大化・黄金ルート）
- デザイン原則
- 技術要件

### 01. [技術スタック・環境設定](./01_TECHNICAL_STACK.md)
- Core Framework & Language
- Styling（Tailwind CSS）
- 環境変数管理
- パスエイリアス設定
- ビルド設定

### 02. [ディレクトリ構造・ファイル構成](./02_DIRECTORY_STRUCTURE.md)
- 完全なディレクトリ構造
- ディレクトリの役割と責任
- ファイル命名規則
- インポートパターン

### 03. [デザインシステム・UI/UX仕様](./03_DESIGN_SYSTEM.md)
- カラーパレット
- タイポグラフィ
- UIコンポーネントスタイル
- アニメーション
- レスポンシブデザイン

### 04. [データ構造・コンテンツ管理](./04_DATA_SCHEMA.md)
- データファイル一覧
- データ型定義
- データ更新のワークフロー
- データ管理の原則

### 05. [コンポーネントアーキテクチャ](./05_COMPONENT_ARCHITECTURE.md)
- コンポーネント階層構造
- コンポーネント分類
- コンポーネント間の依存関係
- パフォーマンス最適化

### 06. [ビジネスロジック・機能要件](./06_BUSINESS_LOGIC.md)
- ビジネス要件
- コンバージョンファネル
- 価格設定ロジック
- ユーザーフロー
- インタラクション設計

### 07. [パフォーマンス最適化](./07_PERFORMANCE_OPTIMIZATION.md)
- パフォーマンス目標
- 実装済み最適化
- バンドルサイズ最適化
- 画像最適化戦略
- レンダリング最適化

### 08. [デプロイメント・運用](./08_DEPLOYMENT_OPERATIONS.md)
- デプロイメント環境
- 環境変数管理
- ビルドプロセス
- トラブルシューティング
- モニタリング

### 09. [コンテンツ管理・更新ガイド](./09_CONTENT_MANAGEMENT.md)
- コンテンツ更新の基本原則
- コンテンツファイル一覧と更新方法
- コンテンツ更新ワークフロー
- 注意事項

### 10. [トラブルシューティング・FAQ](./10_TROUBLESHOOTING.md)
- よくある問題と解決策
- デバッグ方法
- 緊急時の対応
- 参考リソース

---

## 🎯 使い方

### 生成AIがこのプロジェクトを理解する場合

1. **まず読む**: `00_PROJECT_OVERVIEW.md` - プロジェクト全体の概要
2. **技術理解**: `01_TECHNICAL_STACK.md` - 技術スタックの詳細
3. **構造理解**: `02_DIRECTORY_STRUCTURE.md` - ファイル構成
4. **デザイン理解**: `03_DESIGN_SYSTEM.md` - デザインシステム
5. **データ理解**: `04_DATA_SCHEMA.md` - データ構造
6. **コンポーネント理解**: `05_COMPONENT_ARCHITECTURE.md` - コンポーネント設計

### 特定の作業を行う場合

- **コンテンツ更新**: `09_CONTENT_MANAGEMENT.md`
- **デプロイ**: `08_DEPLOYMENT_OPERATIONS.md`
- **パフォーマンス改善**: `07_PERFORMANCE_OPTIMIZATION.md`
- **問題解決**: `10_TROUBLESHOOTING.md`
- **機能追加**: `06_BUSINESS_LOGIC.md`

---

## 📋 クイックリファレンス

### 主要なファイルパス

```
src/
├── App.tsx                    # メインアプリケーション
├── components/
│   ├── layout/               # レイアウトコンポーネント
│   ├── sections/             # セクションコンポーネント
│   ├── ui/                   # UIコンポーネント
│   └── legal/                # 法的文書
├── content/                  # コンテンツデータ
└── shared/                   # 共通リソース
```

### 主要なコマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

### 主要な環境変数

```env
VITE_STRIPE_CHECKOUT_URL=https://buy.stripe.com/...
```

---

## 📁 戦略・提案ドキュメント（参照用）

### strategy/（戦略・分析・ライティング）

- [AI_HANDOFF.md](./strategy/AI_HANDOFF.md) - 技術ハンドオフ・全体像
- [LP_STRUCTURE_ANALYSIS.md](./strategy/LP_STRUCTURE_ANALYSIS.md) - LP構造分析
- [MARKETING_CREATIVE_BIBLE.md](./strategy/MARKETING_CREATIVE_BIBLE.md) - マーケティング・クリエイティブ方針
- [PERFORMANCE_OPTIMIZATION_REPORT.md](./strategy/PERFORMANCE_OPTIMIZATION_REPORT.md) - パフォーマンス最適化レポート
- [WRITING_STRATEGY_INDEX.md](./strategy/WRITING_STRATEGY_INDEX.md) - ライティング戦略一覧
- WRITING_STRATEGY_01 〜 06 - セクション別ライティング戦略

### proposals/（提案書）

- [HERO_CV_MAXIMIZATION_PROPOSAL.md](./proposals/HERO_CV_MAXIMIZATION_PROPOSAL.md) - Hero CV最大化提案
- [HERO_TITLE_DESIGN_PROPOSAL.md](./proposals/HERO_TITLE_DESIGN_PROPOSAL.md) - タイトルデザイン提案

---

**最終更新**: 2025年3月  
**バージョン**: 1.0.0






