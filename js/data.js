/**
 * ============================================================
 * TRIP DATA — ここを編集するだけでサイト全体の内容を更新できます
 * 【仮】【要確認】マークの箇所は確定情報が決まり次第書き換えてください
 * ============================================================
 */
const TRIP_DATA = {

  // ---- ヒーロー／プロローグの文言 ----
  meta: {
    personName: "さやか", // 誕生日を迎える人の名前・呼び方
    dateRange: "2026.09.05 Sat  →  09.07 Mon",
    stayLabel: "2泊3日 · Birthday Trip",
    prologueText:
      "誕生日おめでとう。今回は少し贅沢に、京都からスタートして大阪で締めくくる2泊3日の旅を用意しました。" +
      "美味しいもの、綺麗な景色、写真に残したい瞬間。ゆっくり、たっぷり楽しみましょう。",
    letterTitle: "Happy Birthday 🎂",
    letterBody:
      "いつもありがとう。今年もこの日を一緒にお祝いできて嬉しいです。" +
      "この旅が、忘れられない誕生日の思い出になりますように。" +
      "これからも笑顔溢れる一年になりますように。",
    letterSignature: "— 差出人より", // 【要編集】
    footerText: "Kyoto × Osaka Birthday Trip · 2026.09.05–09.07",
  },

  // ---- 3日間の旅程 ----
  // 概算ルート：DAY1 京都 → DAY2 午前:京都 / 午後:大阪 → DAY3 大阪
  // time / title / desc / place / mapQuery(Googleマップ検索用キーワード) を自由に編集・追加・削除OK
  itinerary: [
    {
      day: 1,
      date: "9/5 (Sat)",
      cities: [
        { code: "fukuoka", label: "福岡" },
        { code: "kanku", label: "関空" },
        { code: "kyoto", label: "京都" },
      ],
      theme: "到着 & 京都で自由に過ごす",
      items: [
        { time: "07:25", title: "Peach MM152で出発", desc: "福岡空港 国内線ターミナルから関西空港へ。搭乗手続き・手荷物預けは余裕を持って済ませる。", place: "福岡空港 国内線ターミナル", mapQuery: "福岡空港 国内線ターミナル" },
        { time: "08:40", title: "関西空港に到着", desc: "関西空港 第2ターミナルに到着。到着後、京都方面へ移動。", place: "関西国際空港 第2ターミナル", mapQuery: "関西国際空港 第2ターミナル" },
        { time: "09:41", title: "特急はるか12号で京都へ", desc: "関西空港駅から京都駅へ。到着は11:04想定。空港到着後は少し余裕を見て移動する。", place: "関西空港駅 → 京都駅", mapQuery: "関西空港駅 京都駅 はるか" },
        { time: "11:04", title: "京都に到着", desc: "京都駅に到着。ここからは予定を詰めず、体調と気分に合わせて過ごす。", place: "京都駅", mapQuery: "京都駅" },
        { time: "12:30", title: "ホテルへ移動・荷物預け", desc: "sequence KYOTO GOJO。チェックインまたは荷物預けだけ済ませて、身軽にする。", place: "sequence KYOTO GOJO", mapQuery: "sequence KYOTO GOJO" },
        { time: "13:30", title: "着物レンタル・着付け", desc: "二人で選んだ着物屋さんへ。返却時間や翌日返却の可否を確認してから散策へ出る。", place: "京都市内の着物レンタル店", mapQuery: "京都 着物レンタル" },
        { time: "午後", title: "着物で京都自由行動", desc: "カフェ、鴨川散歩、伏見稲荷、祇園方面などから、その場で行きたい場所を選ぶ。無理に詰め込まない。", place: "京都市内", mapQuery: "京都 観光" },
        { time: "夜", title: "着物返却・夕食も当日の気分で", desc: "返却時間に合わせて動く。翌日返却できる場合は、夕食まで着物で過ごすのもあり。", place: "京都市内", mapQuery: "京都 夜ご飯" },
        { time: "21:00", title: "ホテルへ戻って休む", desc: "1日目は移動の疲れもあるので、早めに戻ってゆっくり休む。", place: "sequence KYOTO GOJO", mapQuery: "sequence KYOTO GOJO" },
      ],
    },
    {
      day: 2,
      date: "9/6 (Sun)",
      cities: [
        { code: "kyoto", label: "京都" },
        { code: "usj", label: "USJ" },
      ],
      theme: "午前は京都、夕方からUSJへ",
      items: [
        { time: "08:30", title: "朝の京都を軽めに散策", desc: "清水寺・産寧坂・二寧坂方面など。USJに備えて、午前は無理なく短めにする。", place: "清水寺周辺", mapQuery: "清水寺 産寧坂 二寧坂", half: "am" },
        { time: "10:45", title: "ホテルに戻ってチェックアウト", desc: "sequence KYOTO GOJOで荷物を回収。チェックアウト時刻に余裕を持って動く。", place: "sequence KYOTO GOJO", mapQuery: "sequence KYOTO GOJO", half: "am" },
        { time: "11:30", title: "京都で早めランチ", desc: "京都駅周辺かホテル近くで軽めに。大阪への移動時間を優先する。", place: "京都市内", mapQuery: "京都駅 ランチ", half: "am" },
        { time: "12:30", title: "京都からユニバーサルシティへ移動", desc: "JR京都駅から大阪・西九条方面を経由してユニバーサルシティへ。【具体ルート・所要時間は要確認】", place: "京都駅 → ユニバーサルシティ駅", mapQuery: "京都駅 ユニバーサルシティ駅", half: "pm" },
        { time: "14:00", title: "大阪のホテルに荷物預け", desc: "ホテル近鉄ユニバーサル・シティ。荷物を預けて、USJ入場の準備をする。", place: "ホテル近鉄ユニバーサル・シティ", mapQuery: "ホテル近鉄ユニバーサル・シティ", half: "pm" },
        { time: "15:00", title: "USJへ入場（1.5デイ 1日目）", desc: "1.5デイ・スタジオ・パス想定。1日目は15:00から入場して、夕方から夜のパークを楽しむ。", place: "ユニバーサル・スタジオ・ジャパン", mapQuery: "ユニバーサル・スタジオ・ジャパン", half: "pm" },
        { time: "夜", title: "USJまたはシティウォークで夕食", desc: "パーク内かユニバーサル・シティウォーク大阪で、その日の混み具合に合わせて決める。", place: "USJ / ユニバーサル・シティウォーク大阪", mapQuery: "ユニバーサル シティウォーク 大阪 レストラン", half: "pm" },
        { time: "閉園後", title: "ホテルへ戻って休む", desc: "ホテルはUSJ徒歩圏。遊び終わったらそのまま戻って休む。", place: "ホテル近鉄ユニバーサル・シティ", mapQuery: "ホテル近鉄ユニバーサル・シティ", half: "pm" },
      ],
    },
    {
      day: 3,
      date: "9/7 (Mon)",
      cities: [
        { code: "usj", label: "USJ" },
        { code: "kanku", label: "関空" },
        { code: "fukuoka", label: "福岡" },
      ],
      theme: "朝からUSJ & 帰路",
      items: [
        { time: "朝", title: "ホテルをチェックアウト・荷物預け", desc: "ホテル近鉄ユニバーサル・シティでチェックアウト。大きな荷物はホテルまたは駅周辺のロッカーに預ける。", place: "ホテル近鉄ユニバーサル・シティ", mapQuery: "ホテル近鉄ユニバーサル・シティ" },
        { time: "開園〜", title: "USJへ入場（1.5デイ 2日目）", desc: "1.5デイ・スタジオ・パスなら2日目はパークオープンから入場可能。営業時間は来場前に公式で再確認。", place: "ユニバーサル・スタジオ・ジャパン", mapQuery: "ユニバーサル・スタジオ・ジャパン" },
        { time: "昼", title: "USJでランチ・お土産", desc: "パーク内またはユニバーサル・シティウォーク大阪で休憩。帰りの荷物が増えすぎない範囲でお土産を見る。", place: "USJ / ユニバーサル・シティウォーク大阪", mapQuery: "ユニバーサル シティウォーク 大阪 レストラン" },
        { time: "15:10", title: "荷物を回収してバス乗り場へ", desc: "ホテルまたはロッカーの荷物を回収して、USJ周辺の関空リムジンバス乗り場へ向かう。", place: "ユニバーサルシティ周辺", mapQuery: "ユニバーサルシティ 関西空港 リムジンバス" },
        { time: "15:40", title: "関空リムジンバスで空港へ", desc: "USJから関西空港 第2ターミナルへ直行。17:01着想定。", place: "USJ → 関西空港 第2ターミナル", mapQuery: "USJ 関西空港 リムジンバス" },
        { time: "17:01", title: "関西空港 第2ターミナルに到着", desc: "Peach MM157の出発まで、搭乗手続き・手荷物預け・休憩の時間にする。", place: "関西国際空港 第2ターミナル", mapQuery: "関西国際空港 第2ターミナル" },
        { time: "18:50", title: "Peach MM157で福岡へ", desc: "関西空港 第2ターミナルから福岡空港へ。国内線の搭乗手続きは早めに済ませる。", place: "関西国際空港 第2ターミナル", mapQuery: "関西国際空港 第2ターミナル" },
        { time: "20:10", title: "福岡空港に到着", desc: "福岡空港 国内線ターミナルに到着。2泊3日の旅が終了。", place: "福岡空港 国内線ターミナル", mapQuery: "福岡空港 国内線ターミナル" },
      ],
    },
  ],

  // ---- ホテル情報（1泊ごと） ----
  hotels: [
    {
      night: 1,
      label: "1泊目（9/5 Sat）",
      city: "kyoto",
      cityLabel: "京都",
      name: "sequence KYOTO GOJO",
      area: "京都・五条エリア",
      checkin: "15:00〜",
      checkout: "11:00",
      note: "スタイリッシュなデザインホテル。五条・四条エリア観光の拠点に便利。",
      mapQuery: "sequence KYOTO GOJO",
      imageUrl: "assets/images/hotels/sequence-kyoto-gojo.jpg",
      imageAlt: "sequence KYOTO GOJOの外観イメージ",
    },
    {
      night: 2,
      label: "2泊目（9/6 Sun）",
      city: "osaka",
      cityLabel: "大阪",
      name: "ホテル近鉄ユニバーサル・シティ",
      area: "大阪・ユニバーサルシティ駅周辺",
      checkin: "15:00〜",
      checkout: "11:00",
      note: "USJ徒歩圏の人気ホテル。夜はベイエリア散歩も楽しめます。",
      mapQuery: "ホテル近鉄ユニバーサル・シティ",
      imageUrl: "assets/images/hotels/hotel-kintetsu-universal-city.jpg",
      imageAlt: "ホテル近鉄ユニバーサル・シティ外観",
    },
  ],

  // ---- 移動手段 ----
  transportation: [
    { label: "往路", type: "Peach MM152 (A320)", detail: "福岡空港 国内線ターミナル 07:25 → 関西空港 第2ターミナル 08:40", time: "9/5 (Sat)" },
    { label: "関空 → 京都", type: "JR 特急はるか12号", detail: "関西空港駅 09:41 → 京都駅 11:04", time: "9/5 (Sat)" },
    { label: "京都 → USJ", type: "JR 在来線", detail: "京都駅から大阪・西九条方面を経由してユニバーサルシティへ【具体ルート要確認】", time: "9/6 (Sun) 12:30 頃" },
    { label: "USJ → 関空", type: "関空リムジンバス直行", detail: "USJ 15:40 → 関西空港 第2ターミナル 17:01", time: "9/7 (Mon)" },
    { label: "復路", type: "Peach MM157 (A320)", detail: "関西空港 第2ターミナル 18:50 → 福岡空港 国内線ターミナル 20:10", time: "9/7 (Mon)" },
  ],

  // ---- 当日までに二人で決めること ----
  decisions: [
    {
      label: "京都",
      title: "着物屋さんを選ぶ",
      when: "DAY1の荷物預け後に行く店を相談",
      detail: "レンタル場所、返却時間、翌日返却の可否、ヘアセット有無、ホテルからの行きやすさを見て決める。",
      choices: [
        { label: "夢館", url: "https://www.instagram.com/yumeyakata_kimono/" },
        { label: "wargo", url: "https://www.instagram.com/wargo_kimono/" },
        { label: "和楽", url: "https://www.instagram.com/kyotowaraku/" },
        { label: "Okimono屋", url: "https://www.instagram.com/okimonoya/" },
        { label: "梨花和服", url: "https://www.instagram.com/ewhayifu/" },
        { label: "ぎをん錦", url: "https://www.instagram.com/gion_nishiki/" },
        { label: "VASARA", url: "https://www.instagram.com/vasara_kimono/" },
      ],
      mapQuery: "京都 着物レンタル",
    },
    {
      label: "京都",
      title: "京都で巡る場所を選ぶ",
      when: "DAY1午後とDAY2午前の候補を2〜3か所に絞る",
      detail: "予定を詰めすぎず、写真を撮りたい場所と休憩しやすい場所のバランスで選ぶ。",
      choices: ["清水寺・産寧坂", "祇園・花見小路", "鴨川・河原町", "伏見稲荷大社"],
      mapQuery: "京都 観光",
    },
  ],

  // ---- 持ち物リスト（カテゴリごと） ----
  packing: [
    {
      category: "必須アイテム",
      items: ["財布・現金", "身分証明書", "スマートフォン・充電器", "モバイルバッテリー", "航空券／新幹線チケット", "常備薬"],
    },
    {
      category: "服装・身だしなみ",
      items: ["着替え（2〜3日分）", "羽織れる上着", "歩きやすい靴", "帽子・日傘", "日焼け止め", "コスメポーチ"],
    },
    {
      category: "観光・撮影グッズ",
      items: ["モバイルバッテリー（サブ）", "カメラ／スマホ用三脚", "御朱印帳（伏見稲荷・清水寺用）", "小さめの散策バッグ"],
    },
    {
      category: "あると便利",
      items: ["酔い止め", "折りたたみ傘", "ウェットティッシュ", "お菓子・軽食", "エコバッグ（お土産用）"],
    },
  ],

  // ---- 写真スポット ----
  photoSpots: [
    {
      name: "伏見稲荷大社 千本鳥居",
      area: "京都",
      bestTime: "早朝 7〜9時",
      tip: "朝一番は人が少なく鳥居だけの写真が撮りやすい。",
      gradient: ["#7c2d3a", "#c9a962"],
      imageUrl: "assets/images/spots/fushimi-inari.jpg",
      imageAlt: "伏見稲荷大社の千本鳥居イメージ",
    },
    {
      name: "清水寺 舞台からの眺め",
      area: "京都",
      bestTime: "午後の順光時間帯",
      tip: "産寧坂・二寧坂の石畳とセットで撮影するのがおすすめ。",
      gradient: ["#2f4f6f", "#8fb8d6"],
      imageUrl: "assets/images/spots/kiyomizudera.jpg",
      imageAlt: "清水寺の眺望イメージ",
    },
    {
      name: "祇園 花見小路",
      area: "京都",
      bestTime: "夕方〜夜",
      tip: "石畳と町家のライトアップが幻想的。着物レンタルとも好相性。",
      gradient: ["#3a2f4f", "#b98fd6"],
      imageUrl: "assets/images/spots/gion.jpg",
      imageAlt: "祇園花見小路の街並みイメージ",
    },
    {
      name: "道頓堀 グリコサイン",
      area: "大阪",
      bestTime: "夜（ネオン点灯後）",
      tip: "定番の記念撮影スポット。人が多いので少し引いた構図がおすすめ。",
      gradient: ["#7c1f2f", "#f2c94c"],
      imageUrl: "assets/images/spots/dotonbori.jpg",
      imageAlt: "道頓堀の夜景イメージ",
    },
    {
      name: "大阪城天守閣",
      area: "大阪",
      bestTime: "午前中",
      tip: "青空とお城のコントラストが映える。公園内の堀沿いも撮影ポイント。",
      gradient: ["#1f3a5f", "#d4af7a"],
      imageUrl: "assets/images/spots/osaka-castle.jpg",
      imageAlt: "大阪城のイメージ",
    },
    {
      name: "梅田スカイビル 空中庭園",
      area: "大阪",
      bestTime: "夕暮れ〜夜景",
      tip: "サンセットから夜景への移り変わりが一番のハイライト。",
      gradient: ["#12232e", "#e8c893"],
      imageUrl: "assets/images/spots/umeda-sky-building.jpg",
      imageAlt: "梅田スカイビルの夜景イメージ",
    },
  ],

  // ---- 思い出ギャラリー（スクロール連動で浮かび上がるビジュアル。背景レイヤーではタイトル文字入りの原画と本文が重ならないよう、キャプション帯をトリミングした -bg 版を使用） ----
  memories: [
    {
      image: "assets/images/memories/night-visit-bg.png",
      alt: "石清水八幡宮、夜の参道で提灯を見上げる後ろ姿のイラスト",
    },
    {
      image: "assets/images/memories/post-memory-bg.png",
      alt: "木漏れ日の下、黄色いポストの前に立つイラスト",
    },
    {
      image: "assets/images/memories/takeaway-joy-bg.png",
      alt: "バーガーキングの店先でテイクアウトを掲げるイラスト",
    },
    {
      image: "assets/images/memories/sanctuary-approach-bg.png",
      alt: "大きな山門を見上げながら参道を歩くイラスト",
    },
  ],
};
