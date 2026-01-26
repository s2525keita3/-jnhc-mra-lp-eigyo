export const salesRoiData = {
  title: "30万円の投資、回収できるのか？",
  subtitle: "結論：利用者数名の獲得で、投資回収は十分可能です。",
  calculation: {
    title: "ROI（投資対効果）シミュレーション",
    investment: {
      label: "投資額",
      value: 300000,
      display: "30万円（税別）"
    },
    returns: [
      {
        scenario: "利用者1名獲得の場合",
        monthly: 55000,
        annual: 660000,
        roi: 2.2,
        description: "利用者1名あたり月5〜6万円の売上として計算"
      },
      {
        scenario: "利用者5名獲得の場合",
        monthly: 275000,
        annual: 3300000,
        roi: 11,
        description: "3ヶ月の営業活動で5名獲得を目指す"
      }
    ],
    conclusion: "仮に3ヶ月で利用者が5名増えれば、年間売上+330万円。投資の約11倍のリターン。"
  },
  comparison: {
    title: "他のコンサルと比較",
    items: [
      {
        label: "一般的な経営コンサル",
        price: "月30〜100万円",
        period: "6ヶ月〜",
        total: "180〜600万円",
        note: "汎用的なアドバイスが多い"
      },
      {
        label: "営業研修（外部）",
        price: "1日20〜50万円",
        period: "単発",
        total: "60〜150万円",
        note: "研修後のフォローなし"
      },
      {
        label: "このプログラム",
        price: "月10万円",
        period: "3ヶ月",
        total: "30万円",
        note: "週1の伴走 + 自社専用設計",
        highlight: true
      }
    ]
  },
  breakdown: {
    title: "1日あたりに換算すると…",
    daily: 3300,
    description: "1日約3,300円で、営業の「型」が身につきます。",
    comparison: "ビジネス書1冊分の価格で、実践的な伴走サポートを受けられます。"
  },
  message: {
    title: "「高い」と感じた方へ",
    content: "この投資で得られるのは「一時的なノウハウ」ではありません。\n\n3ヶ月後も使い続けられる「営業の設計図」と「自走できる状態」。\nつまり、一度身につければ、ずっと使える資産です。"
  }
};
