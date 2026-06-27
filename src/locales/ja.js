// Versi Bahasa Jepang dari seluruh teks situs.
// Struktur harus identik dengan en.js / id.js (urutan item array harus sama, karena di komponen
// teks digabung dengan data statis berdasarkan index). Nama tech/orang/PT/sertifikat tetap latin.
const ja = {
  nav: {
    skills: 'スキル',
    experience: '職務経歴',
    education: '学歴',
    certificates: '資格',
    projects: 'プロジェクト',
    contact: 'お問い合わせ',
  },

  hero: {
    quote: '口先だけなら簡単だ。コードを見せてくれ。',
    quoteAuthor: '— リーナス・トーバルズ',
    role: '// Web Developer',
    greeting: 'こんにちは、私は',
    greetingSuffix: ' です',
    viewProjects: 'プロジェクトを見る',
    downloadCV: 'CVをダウンロード',
    stats: ['プロジェクト', '資格', '技術'],
  },

  skills: {
    heading: '技術スタック',
    toolsHeading: 'ツール・その他',
    tools: ['GitHub', 'REST API', 'AI支援開発（Claude）'],
  },

  experience: {
    heading: '職務経歴',
    items: [
      {
        title: 'マーケティングサポート',
        tasks: [
          '店舗KPIを策定・モニタリングして支店の運営パフォーマンス評価の指標として活用し、評価結果を定期的に経営陣へ報告。',
          '会社の運営基準に従い、CCTV映像のモニタリングを通じてビジュアルマーチャンダイジング基準と店舗サービス品質の評価を実施。',
          '購入の調整、請求書の確認、管理業務の文書化まで、店舗向けCCTV機器の調達プロセスを管理。',
          '販促物（TVC・デジタルメディア・印刷物）の管理と配布を通じてマーケティングキャンペーンの実施を支援し、戦略が的確に届くようにした。',
          '評価・パフォーマンス報告・支店評価結果のフォローアップにおいて、マーケティングチームと店舗スーパーバイザー間の部門横断的な調整を実施。',
        ],
      },
      {
        title: '管理事務',
        tasks: [
          'オンラインストアの運営を管理し、商品管理・注文処理・売上パフォーマンスのモニタリングを通じてデジタル取引の円滑な遂行を確保。',
          '日次の売上レポートを正確に作成・入力し、現金の入出金を記録して運営面の財務評価の材料とした。',
          '小口現金と主要現金の記録を整然と文書化して管理し、店舗の財務の透明性と説明責任を支援。',
        ],
      },
    ],
  },

  education: {
    heading: '学歴',
    items: [
      {
        title: '情報工学',
        institution: 'Universitas Buddhi Dharma',
        details: [
          'GPA：3.51。',
          'React と PostgreSQL を用いたモダンなウェブ開発に注力。',
          'NLP・データマイニング・テキストマイニングの開発。',
        ],
      },
      {
        title: '卒業研究',
        institution:
          'レキシコンベースの感情分析手法を用いた、Discord Bot による楽曲歌詞の感情センチメントの実装',
        details: [
          '楽曲を再生する Discord Bot を開発。',
          '楽曲の感情センチメントを分析する Discord Bot を開発。',
          'Discord Bot に Next・Previous・Pause・Shut Down・Show Lyric の制御機能を開発。',
        ],
      },
    ],
  },

  certificates: {
    heading: '資格',
    verify: '資格を確認',
    items: [
      {
        title: 'Claude 101',
        description:
          'プロンプトエンジニアリング、Projects、Artifacts、Skills、MCP連携、Enterprise Search、Research モード。',
      },
      {
        title: 'Claude Code 101',
        description:
          'AIコーディングエージェントのワークフロー：Explore→Plan→Code→Commit、コンテキスト管理、CLAUDE.md、サブエージェント、MCPサーバー、フック。',
      },
    ],
  },

  projects: {
    heading: 'プロジェクト',
    viewAll: 'GitHub ですべて見る',
    readMore: '続きを読む',
    readLess: '閉じる',
    viewProject: 'プロジェクトを見る',
    items: [
      {
        title: 'Daily Standup',
        description:
          '開発者が日次のスタンドアップ報告を瞬時に作成できるウェブアプリ。日常的な言葉で作業内容を入力するだけで、チームに共有できる整った報告へ自動的に変換する。',
      },
      {
        title: 'Code Explainer',
        description:
          'Claude AI モデルでコードの構文を説明するウェブアプリ。言語を選ぶと、ロジックのブロックごとに解説が得られる。',
      },
      {
        title: 'POS Cashier — Point of Sale Web App',
        description:
          'React と Supabase を用いて、カフェ／小売業の日次販売取引を支援するウェブベースのPOS（レジ）アプリを構築。',
      },
      {
        title: 'Bot Discord',
        description: 'Discord プラットフォームで音楽を再生するボット。',
      },
      {
        title: 'Implementation Of Text Mining For Emotion Detection',
        description:
          'テキストマイニング技術を用いてテキストから感情センチメントを検出し、文章に含まれる感情を分析・特定する。',
      },
    ],
  },

  contact: {
    heading: 'お問い合わせ',
    formHeading: 'メッセージを送る',
    namePh: 'お名前',
    emailPh: 'メールアドレス',
    messagePh: 'メッセージ',
    send: '送信',
    sending: '送信中…',
    success: 'メッセージを送信しました。ありがとうございます！できるだけ早く返信します。',
    error: '送信に失敗しました。もう一度お試しいただくか、widyadharta@gmail.com まで直接メールしてください。',
  },

  footer: {
    rights: '© Pedro Widya. 全著作権所有。',
  },
};

export default ja;
