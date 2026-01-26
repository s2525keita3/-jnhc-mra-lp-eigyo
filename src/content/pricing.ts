export const pricingData = {
  planName: "営業設計 完全伴走プログラム",
  subtitle: "3ヶ月伴走型パッケージ",
  price: {
    amount: 300000,
    tax: "税別",
    display: "300,000",
    period: "3ヶ月"
  },
  payment: {
    options: [
      {
        type: "一括払い",
        amount: "300,000円（税別）",
        note: null
      },
      {
        type: "分割払い",
        amount: "110,000円 × 3回",
        note: "総額330,000円（税別）"
      }
    ],
    method: "銀行振込 / クレジットカード"
  },
  includes: [
    {
      icon: "Users",
      title: "集団MTG",
      detail: "月1回 × 3回（60分/回）"
    },
    {
      icon: "Video",
      title: "動画コンテンツ",
      detail: "営業の基礎・考え方"
    },
    {
      icon: "MessageSquare",
      title: "チャットサポート",
      detail: "期間中いつでも相談OK"
    },
    {
      icon: "FileText",
      title: "成果物",
      detail: "営業設計書・マニュアル等"
    },
    {
      icon: "RefreshCw",
      title: "AIによる効率化",
      detail: "MTG記録・振り返りの自動化"
    }
  ],
  deliverables: [
    "自社専用 営業設計書",
    "ターゲットリスト",
    "営業トーク台本",
    "営業管理シート",
    "営業マニュアル",
    "継続改善チェックリスト"
  ],
  cta: {
    main: "無料個別相談を予約する",
    sub: "まずは現状の課題をお聞かせください"
  },
  notes: [
    "※ お申し込み前に無料個別相談を実施します",
    "※ 価格は予告なく変更する場合があります"
  ],
  guarantee: null
};
