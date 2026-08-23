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
      cities: [{ code: "kyoto", label: "京都" }],
      theme: "到着 & 京都の夜を歩く",
      items: [
        { time: "13:00", title: "京都に到着", desc: "京都駅に到着。【交通手段は要確認】", place: "京都駅", mapQuery: "京都駅" },
        { time: "14:00", title: "ホテルにチェックイン（荷物だけ預ける）", desc: "sequence KYOTO GOJO。フロントで荷物を預けて身軽に観光へ。", place: "sequence KYOTO GOJO", mapQuery: "sequence KYOTO GOJO" },
        { time: "15:00", title: "伏見稲荷大社", desc: "千本鳥居で写真撮影。夕方は光が柔らかく人も少なめ。", place: "伏見稲荷大社", mapQuery: "伏見稲荷大社" },
        { time: "17:30", title: "河原町・鴨川周辺で誕生日ディナー", desc: "【店名 未定】で誕生日ディナー。事前予約しておくと安心。", place: "鴨川周辺", mapQuery: "鴨川 レストラン" },
        { time: "19:30", title: "祇園白川 夜の散歩", desc: "灯りに照らされた石畳と町家並みを散策。", place: "祇園白川", mapQuery: "祇園白川" },
        { time: "21:00", title: "ホテルへ戻り就寝", desc: "1日目の疲れをゆっくり癒す。", place: "sequence KYOTO GOJO", mapQuery: "sequence KYOTO GOJO" },
      ],
    },
    {
      day: 2,
      date: "9/6 (Sun)",
      cities: [
        { code: "kyoto", label: "京都" },
        { code: "osaka", label: "大阪" },
      ],
      theme: "午前は京都、午後は大阪へ",
      items: [
        { time: "08:30", title: "清水寺・産寧坂・二寧坂", desc: "朝一番の清水の舞台からの絶景と、坂道の街並みを散策。", place: "清水寺", mapQuery: "清水寺", half: "am" },
        { time: "11:00", title: "祇園・花見小路散策", desc: "着物レンタルもおすすめ。運が良ければ舞妓さんに遭遇。", place: "祇園", mapQuery: "祇園 花見小路", half: "am" },
        { time: "12:30", title: "京都でランチ", desc: "【店名 未定】京都らしい和食 or カフェで最後の京都ごはん。", place: "京都市内", mapQuery: "京都 ランチ", half: "am" },
        { time: "13:30", title: "チェックアウト & 大阪へ移動", desc: "電車で大阪へ。【所要時間・ルート要確認】", place: "京都駅 → 新大阪 / 大阪駅", mapQuery: "京都駅", half: "pm" },
        { time: "14:30", title: "大阪のホテルにチェックイン（荷物だけ預ける）", desc: "ホテル近鉄ユニバーサル・シティ。フロントで荷物を預けて身軽に観光へ。", place: "ホテル近鉄ユニバーサル・シティ", mapQuery: "ホテル近鉄ユニバーサル・シティ", half: "pm" },
        { time: "15:30", title: "道頓堀・心斎橋を散策", desc: "グリコサインを背景に写真撮影。食べ歩きグルメを楽しむ。", place: "道頓堀", mapQuery: "道頓堀", half: "pm" },
        { time: "18:30", title: "大阪の夜景ディナー", desc: "【店名 未定】で2日目の締めくくりディナー。", place: "梅田 or 道頓堀エリア", mapQuery: "大阪 夜景 レストラン", half: "pm" },
        { time: "21:00", title: "ホテルへ戻り就寝", desc: "2日目もお疲れさま。ゆっくり休みましょう。", place: "ホテル近鉄ユニバーサル・シティ", mapQuery: "ホテル近鉄ユニバーサル・シティ", half: "pm" },
      ],
    },
    {
      day: 3,
      date: "9/7 (Mon)",
      cities: [{ code: "osaka", label: "大阪" }],
      theme: "大阪観光 & 帰路",
      items: [
        { time: "10:00", title: "ホテルをチェックアウト", desc: "荷物は駅のコインロッカーへ。", place: "ホテル近鉄ユニバーサル・シティ", mapQuery: "ホテル近鉄ユニバーサル・シティ" },
        { time: "11:00", title: "大阪城公園", desc: "天守閣と広大な公園を散策。写真映えする定番スポット。", place: "大阪城", mapQuery: "大阪城" },
        { time: "13:00", title: "ランチ & お土産探し", desc: "【店名 未定】道頓堀 or 梅田エリアで最後のグルメ。", place: "梅田 / なんば", mapQuery: "大阪 お土産" },
        { time: "15:30", title: "梅田スカイビル 空中庭園展望台", desc: "大阪の街を一望できる絶景スポットで旅の締めくくり。", place: "梅田スカイビル", mapQuery: "梅田スカイビル" },
        { time: "17:30", title: "帰路へ", desc: "新大阪駅 or 伊丹空港から帰宅。【交通手段は要確認】", place: "新大阪駅", mapQuery: "新大阪駅" },
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
    { label: "往路", type: "新幹線 / 飛行機", detail: "【出発地から京都までのルート未定】", time: "9/5 (Sat) 午前〜昼 想定" },
    { label: "京都 → 大阪", type: "JR 在来線 or 阪急・京阪", detail: "所要 30分程度想定【要確認】", time: "9/6 (Sun) 13:30 頃" },
    { label: "復路", type: "新幹線 / 飛行機", detail: "【大阪からの帰宅ルート未定】", time: "9/7 (Mon) 夕方 想定" },
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
};
