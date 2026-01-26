export const salesProgramData = {
  title: "3ヶ月で「自走できる営業基盤」を構築",
  subtitle: "ノウハウ提供ではなく「一緒に作る」。壁打ち・対話中心の実践型プログラム。",
  overview: {
    title: "プログラムの特徴",
    features: [
      {
        icon: "MessageCircle",
        title: "壁打ち・対話中心",
        description: "一方的な講義ではなく、あなたの状況に合わせた対話で進めます"
      },
      {
        icon: "Target",
        title: "実行ベースのフィードバック",
        description: "実際に動きながら、何が機能しているか/していないかを整理"
      },
      {
        icon: "Cpu",
        title: "AI活用で効率化",
        description: "MTGの書き起こし・資料化をAIで自動化。振り返りも効率的に"
      },
      {
        icon: "Compass",
        title: "あなた専用の設計",
        description: "汎用ノウハウではなく、あなたのステーションに最適化した営業設計"
      }
    ]
  },
  phases: [
    {
      month: 1,
      title: "営業設計・土台作り",
      subtitle: "最重要フェーズ",
      description: "営業を始める前の「設計ミス」をなくす。ここが成否を分けます。",
      color: "baum-600",
      tasks: [
        "営業の目的・ゴールの明確化",
        "ターゲット（紹介元）の再定義",
        "自社に合った営業スタイルの設計",
        "営業導線（入口〜成約まで）の整理",
        "営業トーク・考え方の整理",
        "チェックリスト作成（到達基準の可視化）"
      ],
      optional: [
        "チラシ・資料・営業導線の方向性確認",
        "営業のやり方のすり合わせ"
      ],
      deliverables: ["営業設計書", "ターゲットリスト", "営業トーク台本"]
    },
    {
      month: 2,
      title: "実行・検証フェーズ",
      subtitle: "動きながら修正",
      description: "設計に基づいて実際に動き、ズレを修正していきます。",
      color: "baum-500",
      tasks: [
        "実際の営業活動の振り返り",
        "何が機能して/何が機能していないかの整理",
        "営業トーク・アプローチの調整",
        "営業活動の記録・管理方法の確認"
      ],
      note: "シンプルな営業管理シートを使用。複雑な仕組みは作りません。",
      deliverables: ["営業管理シート", "改善ポイント一覧"]
    },
    {
      month: 3,
      title: "改善・自走準備フェーズ",
      subtitle: "終わった後も続く",
      description: "3ヶ月後も自分で続けられる状態を作ります。",
      color: "baum-400",
      tasks: [
        "営業の型の最終整理",
        "再現性のある形に落とし込む",
        "今後の改善ポイント整理",
        "継続・発展の方向性確認"
      ],
      deliverables: ["営業マニュアル（自社専用）", "継続改善チェックリスト"]
    }
  ],
  schedule: {
    title: "提供内容",
    items: [
      {
        icon: "Users",
        title: "集団MTG",
        frequency: "月1回（60分）",
        description: "同期受講者との情報交換・相互学習"
      },
      {
        icon: "Video",
        title: "動画コンテンツ",
        frequency: "必要最低限",
        description: "営業の考え方・基礎概念（見ること自体が目的にならない設計）"
      },
      {
        icon: "MessageSquare",
        title: "チャットサポート",
        frequency: "期間中随時",
        description: "MTG外の質問・相談もOK"
      }
    ]
  },
  note: "※ 最初の設計が最重要。1ヶ月目でしっかり土台を作り、2〜3ヶ月目で実行・定着させます。"
};
