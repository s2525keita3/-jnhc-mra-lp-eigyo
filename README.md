# 一般社団法人 全国訪問看護経営研究協会 ランディングページ（営業向け）

訪問看護ステーション開業支援・経営改善のための有料会員募集LP（営業・伴走向け）です。

---

## クイックスタート

```bash
npm install
npm run dev
```

- **開発**: http://localhost:3000
- **ビルド**: `npm run build`
- **プレビュー**: `npm run preview`

---

## ドキュメント

- **専門家・開発者向け**: [docs/README.md](docs/README.md) … プロジェクト完全ドキュメント（00〜10）
- **一覧で確認したい**: [docs/00_INDEX_EXPERT.md](docs/00_INDEX_EXPERT.md) … フォルダ構成・目的別ショートカット

---

## 主な構成

| 場所 | 内容 |
|------|------|
| `src/App.tsx` | セクション順・レイアウト |
| `src/components/sections/` | 各LPセクション |
| `src/content/` | 文言・データ（更新はここ） |
| `public/` | 画像など静的アセット |
| `docs/` | 開発・運用・戦略ドキュメント |

環境変数は `VITE_STRIPE_CHECKOUT_URL` を必要に応じて `.env.local` に設定してください。
