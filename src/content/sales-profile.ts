export const salesProfileData = {
  title: "講師紹介",
  subtitle: "訪問看護の「営業」を知り尽くした2人が伴走します",
  instructors: [
    {
      id: "tomiura",
      name: "富浦 義信",
      nameEn: "Yoshinobu Tomiura",
      role: "営業設計・伴走担当",
      image: "/instructor_tomiura.jpg", // 要差し替え
      catchphrase: "「営業は設計が9割」",
      description: "訪問看護ステーションの営業支援を専門とし、「属人化しない営業の仕組み」構築に定評がある。理論ではなく「明日使える」実践ノウハウを重視。",
      expertise: [
        "営業の設計・仕組み化",
        "ケアマネ・病院連携",
        "紹介獲得の仕組みづくり"
      ],
      stats: [
        { value: "50", unit: "社+", label: "営業支援実績" },
        { value: "100", unit: "%", label: "継続率" }
      ]
    },
    {
      id: "john",
      name: "渋谷 慶太",
      nameEn: "Keita Shibuya",
      nickname: "じょん",
      role: "代表理事・全体監修",
      image: "/teacher_john.JPG",
      catchphrase: "「綺麗事抜きで、現場で使える武器を。」",
      description: "採用難の時代に常勤スタッフ50名を抱え、月間3,500件の訪問を回し続ける「組織作りの極意」。SNS総フォロワー11万人を熱狂させ、広告費ゼロで人とお金を集める「マーケティングの正解」。",
      expertise: [
        "訪問看護経営全般",
        "採用・組織づくり",
        "マーケティング"
      ],
      stats: [
        { value: "50", unit: "社+", label: "支援実績" },
        { value: "11", unit: "万+", label: "SNSフォロワー" },
        { value: "5", unit: "億", label: "年商規模" },
        { value: "5", unit: "店舗", label: "展開" }
      ]
    }
  ],
  teamMessage: {
    title: "2人体制だからできること",
    points: [
      "富浦が「営業設計・実行」を伴走し、じょんが「経営視点」でアドバイス",
      "営業の専門性と経営全体のバランスを両立",
      "2つの視点からフィードバックを受けられる"
    ]
  }
};
